const express = require('express');
const session = require('express-session');
const path = require('path');
const fs = require('fs');
const { 
  initDatabase, 
  verifyPassword, 
  hashPassword, 
  formatRow, 
  run, 
  get, 
  all 
} = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parsing with 15MB limits for image attachments
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

// Session management
app.use(session({
  secret: 'buckler-crm-enterprise-secret-2026',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true if hosting over HTTPS
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Serves static client files from current directory
app.use(express.static(__dirname));

// Auth Middleware
function requireAuth(req, res, next) {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Session expired or unauthenticated.' });
  }
  next();
}

// Role Permissions Mapping for writing (POST/PUT/DELETE)
const WRITE_PERMISSIONS = {
  items: ['gm', 'tech manager', 'operations manager', 'admin coordinator'],
  clients: ['gm', 'tech manager', 'operations manager', 'admin coordinator'],
  schedules: ['gm', 'tech manager', 'operations manager', 'admin coordinator'],
  vehicles: ['gm', 'tech manager', 'operations manager', 'admin coordinator'],
  users: ['gm', 'tech manager'],
  sectors: ['gm', 'tech manager'],
  suppliers: ['gm', 'tech manager', 'operations manager', 'admin coordinator', 'team leader', 'sales manager', 'sales representative'],
  salesDeals: ['gm', 'sales manager', 'sales representative'],
  complaints: ['gm', 'tech manager', 'operations manager', 'admin coordinator', 'team leader']
};

function hasWritePermission(role, entity) {
  const allowedRoles = WRITE_PERMISSIONS[entity];
  if (!allowedRoles) return true; // Default allow if not restricted
  return allowedRoles.includes(role.toLowerCase());
}

// ── AUTHENTICATION ROUTES ───────────────────────────────────

// POST Login
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  try {
    const user = await get(`SELECT * FROM users WHERE username = ?`, [username]);
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const matches = verifyPassword(password, user.password_hash);
    if (!matches) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    // Set Session User details
    req.session.user = {
      id: user.id,
      username: user.username,
      name: user.name,
      role: user.role,
      region: user.region,
      city: user.city,
      email: user.email
    };

    // Return profile (omit password hash)
    const profile = { ...user };
    delete profile.password_hash;
    res.json(profile);
  } catch (e) {
    console.error('Login error:', e);
    res.status(500).json({ error: 'Internal server login error.' });
  }
});

// GET Session Status
app.get('/api/auth/session', (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).json({ error: 'No active session.' });
  }
});

// POST Logout
app.post('/api/auth/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Could not log out session.' });
    }
    res.clearCookie('connect.sid');
    res.json({ success: true });
  });
});

// ── GENERIC API ROUTING & ACCESS CONTROLS ────────────────────

const VALID_ENTITIES = [
  'users', 'clients', 'items', 'schedules', 'operationLogs', 'commuteLog',
  'complaints', 'notifications', 'messages', 'attendanceLog', 'vehicles',
  'sectors', 'sanitationNotes', 'media', 'mediaCategories', 'suppliers',
  'salesDeals', 'driverShifts'
];

// Helper to filter results by region constraints on the server
async function applyRegionFilter(entity, user, rows) {
  if (user.region === 'All') return rows;

  const userRegion = user.region;

  // 1. Direct Region Column Filtering
  if (['clients', 'complaints'].includes(entity)) {
    return rows.filter(r => r.region === userRegion);
  }

  // 2. Client Relationship Filtering (Schedules, OperationLogs, SalesDeals)
  if (entity === 'schedules') {
    const clients = await all(`SELECT id, region FROM clients`);
    const clientRegionMap = clients.reduce((map, c) => ({ ...map, [c.id]: c.region }), {});
    return rows.filter(r => clientRegionMap[r.clientId] === userRegion);
  }

  if (entity === 'operationLogs') {
    const schedules = await all(`SELECT id, clientId FROM schedules`);
    const clients = await all(`SELECT id, region FROM clients`);
    const clientRegionMap = clients.reduce((map, c) => ({ ...map, [c.id]: c.region }), {});
    const schedClientMap = schedules.reduce((map, s) => ({ ...map, [s.id]: s.clientId }), {});
    return rows.filter(r => clientRegionMap[schedClientMap[r.scheduleId]] === userRegion);
  }

  if (entity === 'salesDeals') {
    const clients = await all(`SELECT id, region FROM clients`);
    const clientRegionMap = clients.reduce((map, c) => ({ ...map, [c.id]: c.region }), {});
    return rows.filter(r => !r.clientId || clientRegionMap[r.clientId] === userRegion);
  }

  // 3. User Scoped Filtering (commuteLog, attendanceLog, driverShifts, messages)
  if (['commuteLog', 'attendanceLog', 'driverShifts'].includes(entity)) {
    const users = await all(`SELECT id, region FROM users`);
    const userRegionMap = users.reduce((map, u) => ({ ...map, [u.id]: u.region }), {});
    return rows.filter(r => userRegionMap[r.userId] === userRegion);
  }

  if (entity === 'messages') {
    // Let users only see messages sent to or from users in their region, or direct conversations
    const users = await all(`SELECT id, region FROM users`);
    const userRegionMap = users.reduce((map, u) => ({ ...map, [u.id]: u.region }), {});
    return rows.filter(r => 
      r.senderId === user.id || 
      r.receiverId === user.id || 
      userRegionMap[r.senderId] === userRegion || 
      userRegionMap[r.receiverId] === userRegion
    );
  }

  if (entity === 'notifications') {
    return rows.filter(r => r.targetUserId === user.id);
  }

  // 4. Vehicles (Only show vehicles assigned to drivers in that region)
  if (entity === 'vehicles') {
    const users = await all(`SELECT id, region FROM users`);
    const userRegionMap = users.reduce((map, u) => ({ ...map, [u.id]: u.region }), {});
    return rows.filter(r => !r.assignedDriverId || userRegionMap[r.assignedDriverId] === userRegion);
  }

  // 5. Users (Only show users of the same region)
  if (entity === 'users') {
    return rows.filter(r => r.region === userRegion || r.id === user.id);
  }

  return rows;
}

// GET all records
app.get('/api/:entity', requireAuth, async (req, res) => {
  const { entity } = req.params;
  if (!VALID_ENTITIES.includes(entity)) {
    return res.status(404).json({ error: 'Entity path not found.' });
  }

  try {
    const rows = await all(`SELECT * FROM ${entity}`);
    const formatted = rows.map(r => formatRow(entity, r));
    const filtered = await applyRegionFilter(entity, req.session.user, formatted);
    res.json(filtered);
  } catch (e) {
    console.error(`Error fetching entity ${entity}:`, e);
    res.status(500).json({ error: `Internal server error reading ${entity}.` });
  }
});

// GET single record
app.get('/api/:entity/:id', requireAuth, async (req, res) => {
  const { entity, id } = req.params;
  if (!VALID_ENTITIES.includes(entity)) {
    return res.status(404).json({ error: 'Entity path not found.' });
  }

  try {
    const row = await get(`SELECT * FROM ${entity} WHERE id = ?`, [id]);
    if (!row) {
      return res.status(404).json({ error: 'Record not found.' });
    }
    const formatted = formatRow(entity, row);
    // Double check region constraint for single row
    const allowed = await applyRegionFilter(entity, req.session.user, [formatted]);
    if (allowed.length === 0) {
      return res.status(403).json({ error: 'Access forbidden for this region.' });
    }
    res.json(formatted);
  } catch (e) {
    console.error(`Error fetching record ${id} of ${entity}:`, e);
    res.status(500).json({ error: 'Internal server error reading record.' });
  }
});

// POST Create record
app.post('/api/:entity', requireAuth, async (req, res) => {
  const { entity } = req.params;
  if (!VALID_ENTITIES.includes(entity)) {
    return res.status(404).json({ error: 'Entity path not found.' });
  }

  // RBAC Permission Check
  if (!hasWritePermission(req.session.user.role, entity)) {
    return res.status(403).json({ error: 'Write permission denied for your role.' });
  }

  const record = req.body;
  if (!record.id) {
    const prefix = entity.substring(0, 3).toLowerCase();
    record.id = `${prefix}-${Date.now()}`;
  }

  try {
    // Encrypt password if creating a user
    if (entity === 'users' && record.password) {
      record.password_hash = hashPassword(record.password);
      delete record.password;
    }

    const keys = Object.keys(record);
    const values = keys.map(k => {
      const val = record[k];
      if (typeof val === 'object' && val !== null) {
        return JSON.stringify(val);
      }
      if (typeof val === 'boolean') {
        return val ? 1 : 0;
      }
      return val;
    });

    const placeholders = keys.map(() => '?').join(', ');
    const sql = `INSERT INTO ${entity} (${keys.join(', ')}) VALUES (${placeholders})`;
    await run(sql, values);

    // Fetch and return created record
    const row = await get(`SELECT * FROM ${entity} WHERE id = ?`, [record.id]);
    res.status(201).json(formatRow(entity, row));
  } catch (e) {
    console.error(`Error creating record in ${entity}:`, e);
    res.status(500).json({ error: 'Internal server error inserting record.' });
  }
});

// PUT Update record
app.put('/api/:entity/:id', requireAuth, async (req, res) => {
  const { entity, id } = req.params;
  if (!VALID_ENTITIES.includes(entity)) {
    return res.status(404).json({ error: 'Entity path not found.' });
  }

  // RBAC Permission Check
  if (!hasWritePermission(req.session.user.role, entity)) {
    return res.status(403).json({ error: 'Write permission denied for your role.' });
  }

  const fields = req.body;
  delete fields.id; // Don't allow updating primary key

  try {
    // Encrypt password if updating a user's password
    if (entity === 'users' && fields.password) {
      fields.password_hash = hashPassword(fields.password);
      delete fields.password;
    }

    const keys = Object.keys(fields);
    if (keys.length === 0) {
      return res.status(400).json({ error: 'No fields provided for update.' });
    }

    const values = keys.map(k => {
      const val = fields[k];
      if (typeof val === 'object' && val !== null) {
        return JSON.stringify(val);
      }
      if (typeof val === 'boolean') {
        return val ? 1 : 0;
      }
      return val;
    });

    const sets = keys.map(k => `${k} = ?`).join(', ');
    const sql = `UPDATE ${entity} SET ${sets} WHERE id = ?`;
    await run(sql, [...values, id]);

    // Return updated record
    const row = await get(`SELECT * FROM ${entity} WHERE id = ?`, [id]);
    res.json(formatRow(entity, row));
  } catch (e) {
    console.error(`Error updating record ${id} of ${entity}:`, e);
    res.status(500).json({ error: 'Internal server error updating record.' });
  }
});

// DELETE record
app.delete('/api/:entity/:id', requireAuth, async (req, res) => {
  const { entity, id } = req.params;
  if (!VALID_ENTITIES.includes(entity)) {
    return res.status(404).json({ error: 'Entity path not found.' });
  }

  // RBAC Permission Check
  if (!hasWritePermission(req.session.user.role, entity)) {
    return res.status(403).json({ error: 'Write permission denied for your role.' });
  }

  try {
    const result = await run(`DELETE FROM ${entity} WHERE id = ?`, [id]);
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Record not found.' });
    }
    res.json({ success: true });
  } catch (e) {
    console.error(`Error deleting record ${id} of ${entity}:`, e);
    res.status(500).json({ error: 'Internal server error deleting record.' });
  }
});

// Initialize database tables and start backend server
initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`================================================`);
    console.log(`  Buckler Operations CRM Server Active           `);
    console.log(`  Url: http://localhost:${PORT}                  `);
    console.log(`================================================`);
  });
}).catch(err => {
  console.error('Failed to initialize database tables:', err);
  process.exit(1);
});
