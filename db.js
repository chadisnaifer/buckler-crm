const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const dbPath = path.join(__dirname, 'buckler.db');
const db = new sqlite3.Database(dbPath);

// Promise-based helpers
const run = (sql, params = []) => new Promise((resolve, reject) => {
  db.run(sql, params, function(err) {
    if (err) reject(err);
    else resolve(this);
  });
});

const get = (sql, params = []) => new Promise((resolve, reject) => {
  db.get(sql, params, (err, row) => {
    if (err) reject(err);
    else resolve(row);
  });
});

const all = (sql, params = []) => new Promise((resolve, reject) => {
  db.all(sql, params, (err, rows) => {
    if (err) reject(err);
    else resolve(rows);
  });
});

// Secure password hashing helper
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  if (!stored || !stored.includes(':')) return password === 'buckler123';
  const [salt, hash] = stored.split(':');
  const verifyHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return hash === verifyHash;
}

const JSON_COLUMNS = {
  clients: ['contractTypes', 'serviceVisits', 'contracts'],
  operationLogs: ['itemsConsumed', 'photos', 'baitStationsAudit', 'uvMachinesAudit'],
  messages: ['attachment'],
  suppliers: ['suppliedItems'],
  inspections: ['areasInspected'],
  riskAssessments: ['hazards', 'ppeRequired']
};

function formatRow(entity, row) {
  if (!row) return null;
  const jsonCols = JSON_COLUMNS[entity] || [];
  const record = { ...row };
  for (const col of jsonCols) {
    if (record[col]) {
      try {
        record[col] = JSON.parse(record[col]);
      } catch (e) {
        record[col] = [];
      }
    }
  }
  // Convert integer read states back to boolean
  if (record.read !== undefined) {
    record.read = !!record.read;
  }
  return record;
}

// Create database schemas with camelCase columns matching client properties exactly
async function initDatabase() {
  await run(`CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE,
    name TEXT,
    role TEXT,
    region TEXT,
    city TEXT,
    email TEXT,
    password_hash TEXT,
    vehicleType TEXT,
    vehicleModel TEXT,
    vehiclePlateNo TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS clients (
    id TEXT PRIMARY KEY,
    clientCode TEXT,
    name TEXT,
    contact TEXT,
    phone TEXT,
    email TEXT,
    region TEXT,
    city TEXT,
    address TEXT,
    lat REAL,
    lng REAL,
    sector TEXT,
    contractValue REAL,
    contractCurrency TEXT,
    monthlyVisits INTEGER,
    baitStationsCount INTEGER,
    internalBaitStationsCount INTEGER,
    externalBaitStationsCount INTEGER,
    uvMachinesCount INTEGER,
    parentId TEXT,
    contractTypes TEXT, -- JSON array
    serviceVisits TEXT, -- JSON object
    contracts TEXT -- JSON object by contract type
  )`);

  await run(`CREATE TABLE IF NOT EXISTS items (
    id TEXT PRIMARY KEY,
    itemCode TEXT,
    name TEXT,
    unit TEXT,
    stock INTEGER,
    category TEXT,
    picture TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS schedules (
    id TEXT PRIMARY KEY,
    clientId TEXT,
    date TEXT,
    time TEXT,
    service TEXT,
    teamLeaderId TEXT,
    status TEXT,
    notes TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS operationLogs (
    id TEXT PRIMARY KEY,
    scheduleId TEXT,
    dateConducted TEXT,
    timeIn TEXT,
    timeOut TEXT,
    timeSpent TEXT,
    geoLocation TEXT,
    geoLocationIn TEXT,
    geoLocationOut TEXT,
    baitStationsAudit TEXT, -- JSON array
    uvMachinesAudit TEXT, -- JSON array
    baitStickersReplaced INTEGER,
    baitStickersCaptured INTEGER,
    baitStickersFollowUp INTEGER,
    uvStickersReplaced INTEGER,
    comments TEXT,
    commentsStatus TEXT,
    clientComments TEXT,
    clientCommentsStatus TEXT,
    clientSignature TEXT,
    itemsConsumed TEXT, -- JSON array
    photos TEXT -- JSON array
  )`);

  await run(`CREATE TABLE IF NOT EXISTS commuteLog (
    id TEXT PRIMARY KEY,
    scheduleId TEXT,
    region TEXT,
    teamLeaderId TEXT,
    startLocation TEXT,
    endLocation TEXT,
    distanceKm REAL,
    durationMins INTEGER,
    fuelUsedLiters REAL,
    status TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS complaints (
    id TEXT PRIMARY KEY,
    clientId TEXT,
    region TEXT,
    city TEXT,
    complainantName TEXT,
    phone TEXT,
    severity TEXT,
    status TEXT,
    details TEXT,
    dateSubmitted TEXT,
    assignedStaffId TEXT,
    resolutionDetails TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS notifications (
    id TEXT PRIMARY KEY,
    type TEXT,
    message TEXT,
    read INTEGER,
    timestamp TEXT,
    targetUserId TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS messages (
    id TEXT PRIMARY KEY,
    senderId TEXT,
    receiverId TEXT,
    text TEXT,
    timestamp TEXT,
    read INTEGER,
    attachment TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS attendanceLog (
    id TEXT PRIMARY KEY,
    teamLeaderId TEXT,
    date TEXT,
    checkIn TEXT,
    checkOut TEXT,
    lat REAL,
    lng REAL
  )`);

  await run(`CREATE TABLE IF NOT EXISTS vehicles (
    id TEXT PRIMARY KEY,
    plateNo TEXT,
    model TEXT,
    type TEXT,
    assignedDriverId TEXT,
    status TEXT,
    region TEXT,
    teamLeaderId TEXT,
    registryNo TEXT,
    registryDoc TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS sectors (
    id TEXT PRIMARY KEY,
    name TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS sanitationNotes (
    id TEXT PRIMARY KEY,
    notes TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS media (
    id TEXT PRIMARY KEY,
    name TEXT,
    category TEXT,
    type TEXT,
    size INTEGER,
    uploadDate TEXT,
    uploadedBy TEXT,
    data TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS mediaCategories (
    id TEXT PRIMARY KEY,
    name TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS suppliers (
    id TEXT PRIMARY KEY,
    name TEXT,
    category TEXT,
    contact TEXT,
    phone TEXT,
    email TEXT,
    address TEXT,
    suppliedItems TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS salesDeals (
    id TEXT PRIMARY KEY,
    name TEXT,
    clientId TEXT,
    expectedValue REAL,
    currency TEXT,
    stage TEXT,
    dateClosed TEXT,
    notes TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS driverShifts (
    id TEXT PRIMARY KEY,
    userId TEXT,
    date TEXT,
    status TEXT,
    notes TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS inspections (
    id TEXT PRIMARY KEY,
    clientRef TEXT,
    inspector TEXT,
    date TEXT,
    pestActivity TEXT,
    hygiene TEXT,
    areasInspected TEXT,
    observations TEXT,
    recommendations TEXT,
    signature TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS riskAssessments (
    id TEXT PRIMARY KEY,
    clientRef TEXT,
    assessor TEXT,
    date TEXT,
    riskLevel TEXT,
    hazards TEXT,
    ppeRequired TEXT,
    controlMeasures TEXT
  )`);

  await run(`CREATE TABLE IF NOT EXISTS formTemplates (
    id TEXT PRIMARY KEY,
    title TEXT,
    category TEXT,
    description TEXT,
    filename TEXT,
    dateAdded TEXT,
    fileData TEXT
  )`);

  // Run automatic database migrations to add any missing columns to existing tables
  const TABLE_COLUMNS = {
    users: [
      { name: 'id', type: 'TEXT' },
      { name: 'username', type: 'TEXT' },
      { name: 'name', type: 'TEXT' },
      { name: 'role', type: 'TEXT' },
      { name: 'region', type: 'TEXT' },
      { name: 'city', type: 'TEXT' },
      { name: 'email', type: 'TEXT' },
      { name: 'password_hash', type: 'TEXT' },
      { name: 'vehicleType', type: 'TEXT' },
      { name: 'vehicleModel', type: 'TEXT' },
      { name: 'vehiclePlateNo', type: 'TEXT' }
    ],
    clients: [
      { name: 'id', type: 'TEXT' },
      { name: 'clientCode', type: 'TEXT' },
      { name: 'name', type: 'TEXT' },
      { name: 'contact', type: 'TEXT' },
      { name: 'phone', type: 'TEXT' },
      { name: 'email', type: 'TEXT' },
      { name: 'region', type: 'TEXT' },
      { name: 'city', type: 'TEXT' },
      { name: 'address', type: 'TEXT' },
      { name: 'lat', type: 'REAL' },
      { name: 'lng', type: 'REAL' },
      { name: 'sector', type: 'TEXT' },
      { name: 'contractValue', type: 'REAL' },
      { name: 'contractCurrency', type: 'TEXT' },
      { name: 'monthlyVisits', type: 'INTEGER' },
      { name: 'baitStationsCount', type: 'INTEGER' },
      { name: 'internalBaitStationsCount', type: 'INTEGER' },
      { name: 'externalBaitStationsCount', type: 'INTEGER' },
      { name: 'uvMachinesCount', type: 'INTEGER' },
      { name: 'parentId', type: 'TEXT' },
      { name: 'contractTypes', type: 'TEXT' },
      { name: 'serviceVisits', type: 'TEXT' },
      { name: 'contracts', type: 'TEXT' }
    ],
    items: [
      { name: 'id', type: 'TEXT' },
      { name: 'itemCode', type: 'TEXT' },
      { name: 'name', type: 'TEXT' },
      { name: 'unit', type: 'TEXT' },
      { name: 'stock', type: 'INTEGER' },
      { name: 'category', type: 'TEXT' },
      { name: 'picture', type: 'TEXT' }
    ],
    schedules: [
      { name: 'id', type: 'TEXT' },
      { name: 'clientId', type: 'TEXT' },
      { name: 'date', type: 'TEXT' },
      { name: 'time', type: 'TEXT' },
      { name: 'service', type: 'TEXT' },
      { name: 'teamLeaderId', type: 'TEXT' },
      { name: 'status', type: 'TEXT' },
      { name: 'notes', type: 'TEXT' }
    ],
    operationLogs: [
      { name: 'id', type: 'TEXT' },
      { name: 'scheduleId', type: 'TEXT' },
      { name: 'dateConducted', type: 'TEXT' },
      { name: 'timeIn', type: 'TEXT' },
      { name: 'timeOut', type: 'TEXT' },
      { name: 'timeSpent', type: 'TEXT' },
      { name: 'geoLocation', type: 'TEXT' },
      { name: 'geoLocationIn', type: 'TEXT' },
      { name: 'geoLocationOut', type: 'TEXT' },
      { name: 'baitStationsAudit', type: 'TEXT' },
      { name: 'uvMachinesAudit', type: 'TEXT' },
      { name: 'baitStickersReplaced', type: 'INTEGER' },
      { name: 'baitStickersCaptured', type: 'INTEGER' },
      { name: 'baitStickersFollowUp', type: 'INTEGER' },
      { name: 'uvStickersReplaced', type: 'INTEGER' },
      { name: 'comments', type: 'TEXT' },
      { name: 'commentsStatus', type: 'TEXT' },
      { name: 'clientComments', type: 'TEXT' },
      { name: 'clientCommentsStatus', type: 'TEXT' },
      { name: 'clientSignature', type: 'TEXT' },
      { name: 'itemsConsumed', type: 'TEXT' },
      { name: 'photos', type: 'TEXT' }
    ],
    commuteLog: [
      { name: 'id', type: 'TEXT' },
      { name: 'scheduleId', type: 'TEXT' },
      { name: 'region', type: 'TEXT' },
      { name: 'teamLeaderId', type: 'TEXT' },
      { name: 'startLocation', type: 'TEXT' },
      { name: 'endLocation', type: 'TEXT' },
      { name: 'distanceKm', type: 'REAL' },
      { name: 'durationMins', type: 'INTEGER' },
      { name: 'fuelUsedLiters', type: 'REAL' },
      { name: 'status', type: 'TEXT' }
    ],
    complaints: [
      { name: 'id', type: 'TEXT' },
      { name: 'clientId', type: 'TEXT' },
      { name: 'region', type: 'TEXT' },
      { name: 'city', type: 'TEXT' },
      { name: 'complainantName', type: 'TEXT' },
      { name: 'phone', type: 'TEXT' },
      { name: 'severity', type: 'TEXT' },
      { name: 'status', type: 'TEXT' },
      { name: 'details', type: 'TEXT' },
      { name: 'dateSubmitted', type: 'TEXT' },
      { name: 'assignedStaffId', type: 'TEXT' },
      { name: 'resolutionDetails', type: 'TEXT' }
    ],
    notifications: [
      { name: 'id', type: 'TEXT' },
      { name: 'type', type: 'TEXT' },
      { name: 'message', type: 'TEXT' },
      { name: 'read', type: 'INTEGER' },
      { name: 'timestamp', type: 'TEXT' },
      { name: 'targetUserId', type: 'TEXT' }
    ],
    messages: [
      { name: 'id', type: 'TEXT' },
      { name: 'senderId', type: 'TEXT' },
      { name: 'receiverId', type: 'TEXT' },
      { name: 'text', type: 'TEXT' },
      { name: 'timestamp', type: 'TEXT' },
      { name: 'read', type: 'INTEGER' },
      { name: 'attachment', type: 'TEXT' }
    ],
    attendanceLog: [
      { name: 'id', type: 'TEXT' },
      { name: 'teamLeaderId', type: 'TEXT' },
      { name: 'date', type: 'TEXT' },
      { name: 'checkIn', type: 'TEXT' },
      { name: 'checkOut', type: 'TEXT' },
      { name: 'lat', type: 'REAL' },
      { name: 'lng', type: 'REAL' }
    ],
    vehicles: [
      { name: 'id', type: 'TEXT' },
      { name: 'plateNo', type: 'TEXT' },
      { name: 'model', type: 'TEXT' },
      { name: 'type', type: 'TEXT' },
      { name: 'assignedDriverId', type: 'TEXT' },
      { name: 'status', type: 'TEXT' },
      { name: 'region', type: 'TEXT' },
      { name: 'teamLeaderId', type: 'TEXT' },
      { name: 'registryNo', type: 'TEXT' },
      { name: 'registryDoc', type: 'TEXT' }
    ],
    sectors: [
      { name: 'id', type: 'TEXT' },
      { name: 'name', type: 'TEXT' }
    ],
    sanitationNotes: [
      { name: 'id', type: 'TEXT' },
      { name: 'notes', type: 'TEXT' }
    ],
    media: [
      { name: 'id', type: 'TEXT' },
      { name: 'name', type: 'TEXT' },
      { name: 'category', type: 'TEXT' },
      { name: 'type', type: 'TEXT' },
      { name: 'size', type: 'INTEGER' },
      { name: 'uploadDate', type: 'TEXT' },
      { name: 'uploadedBy', type: 'TEXT' },
      { name: 'data', type: 'TEXT' }
    ],
    mediaCategories: [
      { name: 'id', type: 'TEXT' },
      { name: 'name', type: 'TEXT' }
    ],
    suppliers: [
      { name: 'id', type: 'TEXT' },
      { name: 'name', type: 'TEXT' },
      { name: 'category', type: 'TEXT' },
      { name: 'contact', type: 'TEXT' },
      { name: 'phone', type: 'TEXT' },
      { name: 'email', type: 'TEXT' },
      { name: 'address', type: 'TEXT' },
      { name: 'suppliedItems', type: 'TEXT' }
    ],
    salesDeals: [
      { name: 'id', type: 'TEXT' },
      { name: 'name', type: 'TEXT' },
      { name: 'clientId', type: 'TEXT' },
      { name: 'expectedValue', type: 'REAL' },
      { name: 'currency', type: 'TEXT' },
      { name: 'stage', type: 'TEXT' },
      { name: 'dateClosed', type: 'TEXT' },
      { name: 'notes', type: 'TEXT' }
    ],
    driverShifts: [
      { name: 'id', type: 'TEXT' },
      { name: 'userId', type: 'TEXT' },
      { name: 'date', type: 'TEXT' },
      { name: 'status', type: 'TEXT' },
      { name: 'notes', type: 'TEXT' }
    ],
    inspections: [
      { name: 'id', type: 'TEXT' },
      { name: 'clientRef', type: 'TEXT' },
      { name: 'inspector', type: 'TEXT' },
      { name: 'date', type: 'TEXT' },
      { name: 'pestActivity', type: 'TEXT' },
      { name: 'hygiene', type: 'TEXT' },
      { name: 'areasInspected', type: 'TEXT' },
      { name: 'observations', type: 'TEXT' },
      { name: 'recommendations', type: 'TEXT' },
      { name: 'signature', type: 'TEXT' }
    ],
    riskAssessments: [
      { name: 'id', type: 'TEXT' },
      { name: 'clientRef', type: 'TEXT' },
      { name: 'assessor', type: 'TEXT' },
      { name: 'date', type: 'TEXT' },
      { name: 'riskLevel', type: 'TEXT' },
      { name: 'hazards', type: 'TEXT' },
      { name: 'ppeRequired', type: 'TEXT' },
      { name: 'controlMeasures', type: 'TEXT' }
    ],
    formTemplates: [
      { name: 'id', type: 'TEXT' },
      { name: 'title', type: 'TEXT' },
      { name: 'category', type: 'TEXT' },
      { name: 'description', type: 'TEXT' },
      { name: 'filename', type: 'TEXT' },
      { name: 'dateAdded', type: 'TEXT' },
      { name: 'fileData', type: 'TEXT' }
    ]
  };

  for (const [table, cols] of Object.entries(TABLE_COLUMNS)) {
    const existingCols = await all(`PRAGMA table_info(${table})`);
    const existingNames = existingCols.map(c => c.name);
    for (const col of cols) {
      if (!existingNames.includes(col.name)) {
        console.log(`[Migration] Adding missing column ${col.name} ${col.type} to table ${table}...`);
        await run(`ALTER TABLE ${table} ADD COLUMN ${col.name} ${col.type}`);
      }
    }
  }

  console.log('Database tables verified/created successfully.');
  
  // Seed initial data if database is empty
  const userCheck = await get(`SELECT COUNT(*) as count FROM users`);
  if (userCheck.count === 0) {
    console.log('Database is empty. Attempting to seed data...');
    await seedDatabase();
  }
}

// Seed data from backup JSON
async function seedDatabase() {
  let data = null;
  const backupPath = path.join(__dirname, 'buckler_crm_backup.json');
  
  if (fs.existsSync(backupPath)) {
    try {
      console.log('Seeding database from buckler_crm_backup.json...');
      const raw = fs.readFileSync(backupPath, 'utf8');
      data = JSON.parse(raw);
    } catch (e) {
      console.error('Failed to parse backup JSON file, falling back to default seed data:', e);
    }
  }

  if (!data) {
    console.log('No backup file found. Database seeding requires a backup JSON to be present.');
    return;
  }

  db.serialize(async () => {
    // Begin transaction
    run('BEGIN TRANSACTION');
    try {
      // 1. Seed Sectors
      if (data.sectors) {
        for (const s of data.sectors) {
          await run(`INSERT INTO sectors (id, name) VALUES (?, ?)`, [s.id || `sec-${Date.now()}`, s.name]);
        }
      }

      // 2. Seed Users
      if (data.users) {
        for (const u of data.users) {
          const pass = u.password || 'buckler123';
          const passHash = hashPassword(pass);
          await run(`INSERT INTO users (id, username, name, role, region, city, email, password_hash, vehicleType, vehicleModel, vehiclePlateNo)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
            [u.id, u.username, u.name, u.role, u.region, u.city, u.email, passHash, u.vehicleType || '', u.vehicleModel || '', u.vehiclePlateNo || '']);
        }
      }

      // 3. Seed Clients
      if (data.clients) {
        for (const c of data.clients) {
          await run(`INSERT INTO clients (id, clientCode, name, contact, phone, email, region, city, address, lat, lng, sector, contractValue, contractCurrency, monthlyVisits, baitStationsCount, uvMachinesCount, parentId, contractTypes, serviceVisits, contracts)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [c.id, c.clientCode || '', c.name, c.contact || '', c.phone || '', c.email || '', c.region, c.city || '', c.address || '', c.lat || 0, c.lng || 0, c.sector || '', c.contractValue || 0, c.contractCurrency || 'USD', c.monthlyVisits || 0, c.baitStationsCount || 0, c.uvMachinesCount || 0, c.parentId || null, JSON.stringify(c.contractTypes || []), JSON.stringify(c.serviceVisits || {}), JSON.stringify(c.contracts || {})]);
        }
      }

      // 4. Seed Items
      if (data.items) {
        for (const i of data.items) {
          await run(`INSERT INTO items (id, itemCode, name, unit, stock, category, picture) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [i.id, i.itemCode || '', i.name, i.unit || '', i.stock || 0, i.category || '', i.picture || '']);
        }
      }

      // 5. Seed Schedules
      if (data.schedules) {
        for (const s of data.schedules) {
          await run(`INSERT INTO schedules (id, clientId, date, time, service, teamLeaderId, status, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [s.id, s.clientId, s.date, s.time || '', s.service, s.teamLeaderId || '', s.status || 'Scheduled', s.notes || '']);
        }
      }

      // 6. Seed Operation Logs
      if (data.operationLogs) {
        for (const l of data.operationLogs) {
          await run(`INSERT INTO operationLogs (id, scheduleId, dateConducted, timeIn, timeOut, timeSpent, geoLocation, comments, commentsStatus, clientComments, clientCommentsStatus, clientSignature, itemsConsumed, photos)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [l.id, l.scheduleId, l.dateConducted, l.timeIn || '', l.timeOut || '', l.timeSpent || '', l.geoLocation || '', l.comments || '', l.commentsStatus || '', l.clientComments || '', l.clientCommentsStatus || '', l.clientSignature || '', JSON.stringify(l.itemsConsumed || []), JSON.stringify(l.photos || [])]);
        }
      }

      // 7. Seed Commute Logs
      if (data.commuteLog) {
        for (const l of data.commuteLog) {
          await run(`INSERT INTO commuteLog (id, scheduleId, region, teamLeaderId, startLocation, endLocation, distanceKm, durationMins, fuelUsedLiters, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [l.id, l.scheduleId, l.region || '', l.teamLeaderId, l.startLocation || '', l.endLocation || '', l.distanceKm || 0, l.durationMins || 0, l.fuelUsedLiters || 0, l.status || '']);
        }
      }

      // 8. Seed Complaints
      if (data.complaints) {
        for (const c of data.complaints) {
          await run(`INSERT INTO complaints (id, clientId, region, city, complainantName, phone, severity, status, details, dateSubmitted, assignedStaffId, resolutionDetails)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [c.id, c.clientId, c.region, c.city || '', c.complainantName, c.phone || '', c.severity || 'Medium', c.status || 'Pending', c.details || '', c.dateSubmitted || '', c.assignedStaffId || '', c.resolutionDetails || '']);
        }
      }

      // 9. Seed Notifications
      if (data.notifications) {
        for (const n of data.notifications) {
          await run(`INSERT INTO notifications (id, type, message, read, timestamp, targetUserId) VALUES (?, ?, ?, ?, ?, ?)`,
            [n.id, n.type || '', n.message, n.read ? 1 : 0, n.timestamp || '', n.targetUserId || '']);
        }
      }

      // 10. Seed Messages
      if (data.messages) {
        for (const m of data.messages) {
          await run(`INSERT INTO messages (id, senderId, receiverId, text, timestamp, read, attachment) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [m.id, m.senderId, m.receiverId, m.text, m.timestamp, m.read ? 1 : 0, JSON.stringify(m.attachment || null)]);
        }
      }

      // 11. Seed Attendance Logs
      if (data.attendanceLog) {
        for (const l of data.attendanceLog) {
          await run(`INSERT INTO attendanceLog (id, teamLeaderId, date, checkIn, checkOut, lat, lng) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [l.id, l.teamLeaderId, l.date, l.checkIn || '', l.checkOut || '', l.lat || 0, l.lng || 0]);
        }
      }

      // 12. Seed Vehicles
      if (data.vehicles) {
        for (const v of data.vehicles) {
          await run(`INSERT INTO vehicles (id, plateNo, model, type, assignedDriverId, status) VALUES (?, ?, ?, ?, ?, ?)`,
            [v.id, v.plateNo, v.model || '', v.type || '', v.assignedDriverId || '', v.status || 'Active']);
        }
      }

      // 13. Seed Sanitation Notes
      if (data.sanitationNotes) {
        for (const [key, val] of Object.entries(data.sanitationNotes)) {
          await run(`INSERT INTO sanitationNotes (id, notes) VALUES (?, ?)`, [key, val]);
        }
      }

      // 14. Seed Media Categories
      if (data.mediaCategories) {
        for (const mc of data.mediaCategories) {
          await run(`INSERT INTO mediaCategories (id, name) VALUES (?, ?)`, [mc.id || mc.name, mc.name]);
        }
      }

      // 15. Seed Media
      if (data.media) {
        for (const m of data.media) {
          await run(`INSERT INTO media (id, name, category, type, size, uploadDate, uploadedBy, data) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [m.id, m.name, m.category || '', m.type || '', m.size || 0, m.uploadDate || '', m.uploadedBy || '', m.data || '']);
        }
      }

      // 16. Seed Suppliers
      if (data.suppliers) {
        for (const s of data.suppliers) {
          await run(`INSERT INTO suppliers (id, name, category, contact, phone, email, address, suppliedItems) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [s.id, s.name, s.category || '', s.contact || '', s.phone || '', s.email || '', s.address || '', JSON.stringify(s.suppliedItems || [])]);
        }
      }

      // 17. Seed Sales Deals
      if (data.salesDeals) {
        for (const d of data.salesDeals) {
          await run(`INSERT INTO salesDeals (id, name, clientId, expectedValue, currency, stage, dateClosed, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [d.id, d.name, d.clientId || '', d.expectedValue || 0, d.currency || 'USD', d.stage || 'Prospecting', d.dateClosed || '', d.notes || '']);
        }
      }

      // 18. Seed Driver Shifts
      if (data.driverShifts) {
        for (const s of data.driverShifts) {
          await run(`INSERT INTO driverShifts (id, userId, date, status, notes) VALUES (?, ?, ?, ?, ?)`,
            [s.id, s.userId, s.date, s.status || 'Off', s.notes || '']);
        }
      }

      await run('COMMIT');
      console.log('Database seeded successfully from backup.');
    } catch (e) {
      await run('ROLLBACK');
      console.error('Failed to seed database, transaction rolled back:', e);
    }
  });
}

module.exports = {
  initDatabase,
  verifyPassword,
  hashPassword,
  formatRow,
  run,
  get,
  all,
  db
};
