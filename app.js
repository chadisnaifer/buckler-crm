// Buckler - Iraq Operations CRM Application Logic

document.addEventListener('DOMContentLoaded', () => {
  // App State
  let state = {
    currentUser: null,
    activeTab: 'dashboard',
    charts: {},
    signaturePad: null,
    editingRecord: null,
    selectedMapRegion: 'All',
    selectedRouteTL: null,
    selectedRouteTLs: [],
    selectedRoutingRegion: 'All',
    activeChatTarget: null,
    scheduleActiveView: 'list',
    calendarPeriod: 'Month',
    calendarCurrentDate: new Date('2026-06-04'),
    uploadedPictures: [],
    dashFilters: {
      service: 'All',
      region: 'All',
      dateFrom: '',
      dateTo: '',
      preset: 'month' // 'month' | 'all' | 'custom'
    },
    dashActivityServiceFilter: 'All'
  };

  // DOM Elements
  const els = {
    roleSelector: document.getElementById('role-selector'),
    navLinks: document.querySelectorAll('.nav-link'),
    tabContents: document.querySelectorAll('.tab-content'),
    currentUserAvatar: document.getElementById('cur-user-avatar'),
    currentUserName: document.getElementById('cur-user-name'),
    currentUserRole: document.getElementById('cur-user-role'),
    currentUserRegion: document.getElementById('cur-user-region'),
    
    // Search & Filter (Tabs)
    searchClient: document.getElementById('search-client'),
    filterClientRegion: document.getElementById('filter-client-region'),
    filterClientCity: document.getElementById('filter-client-city'),
    
    searchItem: document.getElementById('search-item'),

    searchSchedule: document.getElementById('search-schedule'),
    filterScheduleRegion: document.getElementById('filter-schedule-region'),
    filterScheduleCity: document.getElementById('filter-schedule-city'),
    filterScheduleClient: document.getElementById('filter-schedule-client'),
    filterScheduleTL: document.getElementById('filter-schedule-tl'),
    filterScheduleService: document.getElementById('filter-schedule-service'),
    filterScheduleStatus: document.getElementById('filter-schedule-status'),
    filterScheduleDate: document.getElementById('filter-schedule-date'),
    btnClearScheduleFilters: document.getElementById('btn-clear-schedule-filters'),
    
    // Schedules Layout Toggle and Calendar Controls
    btnScheduleViewList: document.getElementById('btn-schedule-view-list'),
    btnScheduleViewCal: document.getElementById('btn-schedule-view-cal'),
    calendarViewControls: document.getElementById('calendar-view-controls'),
    calendarPeriod: document.getElementById('calendar-period'),
    btnCalPrev: document.getElementById('btn-cal-prev'),
    btnCalNext: document.getElementById('btn-cal-next'),
    calendarCurrentLabel: document.getElementById('calendar-current-label'),
    schedulesCalendar: document.getElementById('schedules-calendar'),

    searchComplaint: document.getElementById('search-complaint'),
    filterComplaintRegion: document.getElementById('filter-complaint-region'),
    filterComplaintCity: document.getElementById('filter-complaint-city'),
    filterComplaintSeverity: document.getElementById('filter-complaint-severity'),
    filterComplaintStatus: document.getElementById('filter-complaint-status'),

    searchUser: document.getElementById('search-user'),
    filterUserRegion: document.getElementById('filter-user-region'),
    filterUserCity: document.getElementById('filter-user-city'),
    filterUserRole: document.getElementById('filter-user-role'),

    // Modals
    modalBackdrop: document.getElementById('modal-backdrop'),
    modalTitle: document.getElementById('modal-title'),
    modalBody: document.getElementById('modal-body'),
    modalSaveBtn: document.getElementById('modal-save-btn'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalCancelBtn: document.getElementById('modal-cancel-btn'),

    // CSV Zones
    uploadClientsZone: document.getElementById('upload-clients-zone'),
    uploadItemsZone: document.getElementById('upload-items-zone'),
    clientsFileInput: document.getElementById('clients-file-input'),
    itemsFileInput: document.getElementById('items-file-input'),

    // Dashboard Items
    statScheduled: document.getElementById('stat-scheduled'),
    statConducted: document.getElementById('stat-conducted'),
    statCompletion: document.getElementById('stat-completion'),
    statItemsUsed: document.getElementById('stat-items-used'),
    commuteLogList: document.getElementById('commute-log-list'),
    hubCardCentral: document.getElementById('hub-card-central'),
    hubCardKurdistan: document.getElementById('hub-card-kurdistan'),
    hubCardSouth: document.getElementById('hub-card-south'),

    // Clickable KPI Cards
    dashCardScheduled: document.getElementById('dash-card-scheduled'),
    dashCardConducted: document.getElementById('dash-card-conducted'),
    dashCardCompletion: document.getElementById('dash-card-completion'),
    dashCardItems: document.getElementById('dash-card-items'),

    // Alerts/Notifications Bell
    btnNotiBell: document.getElementById('btn-noti-bell'),
    notiBadge: document.getElementById('noti-badge'),
    notiDropdown: document.getElementById('noti-dropdown'),
    notiDropdownList: document.getElementById('noti-dropdown-list'),
    notiClearAll: document.getElementById('noti-clear-all'),

    // Chat Tab Elements
    chatChannelsList: document.getElementById('chat-channels-list'),
    chatUsersList: document.getElementById('chat-users-list'),
    activeChatTitle: document.getElementById('active-chat-title'),
    activeChatStatus: document.getElementById('active-chat-status'),
    chatMessagesContainer: document.getElementById('chat-messages-container'),
    chatInput: document.getElementById('chat-input'),
    chatSendBtn: document.getElementById('chat-send-btn'),

    // Chatbot Widget Elements
    chatbotWidget: document.getElementById('chatbot-widget'),
    chatbotBubbleBtn: document.getElementById('chatbot-bubble-btn'),
    chatbotWindow: document.getElementById('chatbot-window'),
    chatbotCloseBtn: document.getElementById('chatbot-close-btn'),
    chatbotMessages: document.getElementById('chatbot-messages'),
    chatbotInput: document.getElementById('chatbot-input'),
    chatbotSendBtn: document.getElementById('chatbot-send-btn'),

    // Manager Routing Tracker Elements
    staffRoutingPanel: document.getElementById('staff-routing-panel'),
    routingRegionSelect: document.getElementById('routing-region-select'),
    routingTLSelect: document.getElementById('routing-tl-select'),
    routingDetailsList: document.getElementById('routing-details-list'),
    routingTotalDistance: document.getElementById('routing-total-distance'),
    routingSummaryText: document.getElementById('routing-summary-text'),
    
    // Sectors Admin Elements
    sectorsTableBody: document.getElementById('sectors-table-body'),
    sectorsFileInput: document.getElementById('sectors-file-input'),
    uploadSectorsZone: document.getElementById('upload-sectors-zone'),
    btnDlSectorTmpl: document.getElementById('btn-dl-sector-tmpl'),
    btnAddSector: document.getElementById('btn-add-sector'),

    // Data Tables
    schedulesList: document.getElementById('schedules-list'),
    clientsTableBody: document.getElementById('clients-table-body'),
    itemsTableBody: document.getElementById('items-table-body'),
    usersTableBody: document.getElementById('users-table-body'),
    complaintsTableBody: document.getElementById('complaints-table-body'),
    uvSalesTableBody: document.getElementById('uv-sales-table-body'),

    // UV Sales Filters
    filterUvRegion: document.getElementById('filter-uv-region'),
    filterUvCity: document.getElementById('filter-uv-city'),
    filterUvClient: document.getElementById('filter-uv-client'),
    filterUvType: document.getElementById('filter-uv-type'),
    filterUvTl: document.getElementById('filter-uv-tl'),
    btnClearUvFilters: document.getElementById('btn-clear-uv-filters'),

    // Action Buttons
    btnAddSchedule: document.getElementById('btn-add-schedule'),
    btnAddClient: document.getElementById('btn-add-client'),
    btnAddItem: document.getElementById('btn-add-item'),
    btnAddUser: document.getElementById('btn-add-user'),
    btnAddComplaint: document.getElementById('btn-add-complaint'),
    btnDownloadClientTmpl: document.getElementById('btn-dl-client-tmpl'),
    btnDownloadItemTmpl: document.getElementById('btn-dl-item-tmpl'),
    btnResetDB: document.getElementById('btn-reset-db'),
    btnExportDB: document.getElementById('btn-export-db'),
    btnImportDB: document.getElementById('btn-import-db'),
    dbFileInput: document.getElementById('db-file-input'),
    btnShareCrm: document.getElementById('btn-share-crm'),
    btnSupabaseConfig: document.getElementById('btn-supabase-config'),
    
    // Reports Elements
    reportStartDate: document.getElementById('report-start-date'),
    reportEndDate: document.getElementById('report-end-date'),
    reportClientSelect: document.getElementById('report-client-select'),
    reportType: document.getElementById('report-type'),
    reportVisitSelectField: document.getElementById('report-visit-select-field'),
    reportVisitSelect: document.getElementById('report-visit-select'),
    reportDateRangeFields: document.getElementById('report-date-range-fields'),
    btnPrintReport: document.getElementById('btn-print-report'),
    visitReportFields: document.getElementById('visit-report-fields'),
    reportVisitObservations: document.getElementById('report-visit-observations'),
    reportVisitRecommendations: document.getElementById('report-visit-recommendations'),
    reportVisitGeneratedBy: document.getElementById('report-visit-generated-by'),
    reportsOutputContainer: document.getElementById('reports-output-container'),
    btnGenerateReport: document.getElementById('btn-generate-report'),
    btnExportReportCsv: document.getElementById('btn-export-report-csv'),
    
    // UV Sales visual elements
    uvSalesVisualContainer: document.getElementById('uv-sales-visual-container'),
    uvSalesChart: document.getElementById('uvSalesChart'),
    uvSalesRegionChart: document.getElementById('uvSalesRegionChart'),
    
    // Routing date range inputs
    routingStartDate: document.getElementById('routing-start-date'),
    routingEndDate: document.getElementById('routing-end-date'),

    // Deep-dive dashboard elements
    dashConsumeRegion: document.getElementById('dash-consume-region'),
    dashConsumeClient: document.getElementById('dash-consume-client'),
    dashConsumeItem: document.getElementById('dash-consume-item'),
    dashConsumeChart: document.getElementById('dashConsumeChart'),
    dashConsumeTotal: document.getElementById('dash-consume-total'),

    dashComplaintRegion: document.getElementById('dash-complaint-region'),
    dashComplaintClient: document.getElementById('dash-complaint-client'),
    dashComplaintStatus: document.getElementById('dash-complaint-status'),
    dashComplaintChart: document.getElementById('dashComplaintChart'),
    dashComplaintTotal: document.getElementById('dash-complaint-total'),

    // Main dashboard visit types chart
    visitTypesChart: document.getElementById('visitTypesChart'),
    uvSalesRegionChart: document.getElementById('uvSalesRegionChart'),

    // Clients tab visit analysis elements
    clientAnalysisRegion: document.getElementById('client-analysis-region'),
    clientAnalysisSector: document.getElementById('client-analysis-sector'),
    clientAnalysisTl: document.getElementById('client-analysis-tl'),
    clientAnalysisChart: document.getElementById('clientAnalysisChart'),
    clientAnalysisPieChart: document.getElementById('clientAnalysisPieChart')
  };

  // Map coordinate conversion list
  const MAP_COORDS = {
    'Central': { x: 170, y: 150, lat: 33.3152, lng: 44.3661 },
    'Kurdistan': { x: 210, y: 60, lat: 36.1901, lng: 44.0089 },
    'South': { x: 260, y: 255, lat: 30.5081, lng: 47.7835 },
    'Erbil': { x: 210, y: 60, lat: 36.1901, lng: 44.0089 },
    'Suleimaniah': { x: 245, y: 85, lat: 35.5620, lng: 45.3850 },
    'cli-c1': { x: 160, y: 145 },
    'cli-c2': { x: 150, y: 152 },
    'cli-c3': { x: 180, y: 140 },
    'cli-c4': { x: 175, y: 160 },
    'cli-k1': { x: 200, y: 65 },
    'cli-k2': { x: 215, y: 55 },
    'cli-k3': { x: 235, y: 75 },
    'cli-k4': { x: 220, y: 48 },
    'cli-s1': { x: 290, y: 270 },
    'cli-s2': { x: 275, y: 260 },
    'cli-s3': { x: 245, y: 270 },
    'cli-s4': { x: 240, y: 248 }
  };

  const CITIES_MAP = {
    'Central': ['Baghdad', 'Najf', 'Karbala', 'Hilla'],
    'Kurdistan': ['Erbil', 'Suleimaniah', 'Mosul', 'Kirkuk', 'Duhok'],
    'South': ['Basra', 'Roumailah', 'Nasriyah']
  };

  const datalabelsPlugin = {
    id: 'datalabels',
    afterDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      chart.data.datasets.forEach((dataset, i) => {
        const meta = chart.getDatasetMeta(i);
        if (meta.hidden) return;
        meta.data.forEach((element, index) => {
          const dataVal = dataset.data[index];
          if (dataVal === null || dataVal === undefined || dataVal === 0) return;
          
          ctx.font = 'bold 10px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          
          let x = element.x;
          let y = element.y;
          
          if (chart.config.type === 'doughnut' || chart.config.type === 'pie') {
            ctx.fillStyle = '#ffffff';
            const midAngle = element.startAngle + (element.endAngle - element.startAngle) / 2;
            const r = (element.innerRadius + element.outerRadius) / 2;
            x = element.x + Math.cos(midAngle) * r;
            y = element.y + Math.sin(midAngle) * r;
            ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
            ctx.shadowBlur = 3;
          } else if (chart.config.type === 'line') {
            ctx.fillStyle = '#1E293B';
            y = element.y - 12;
          } else if (chart.config.type === 'bar') {
            ctx.fillStyle = '#1E293B';
            if (chart.config.options.indexAxis === 'y') {
              x = element.x + 12;
            } else {
              y = element.y - 10;
            }
          }
          ctx.fillText(dataVal, x, y);
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
        });
      });
      ctx.restore();
    }
  };
  Chart.register(datalabelsPlugin);

  function hasAccessPermission(tabId) {
    if (!state.currentUser) return true;
    const role = state.currentUser.role.toLowerCase();
    if (role === 'gm') return true;
    
    if (state.currentUser.permissions && state.currentUser.permissions[tabId] !== undefined) {
      return state.currentUser.permissions[tabId] !== 'none';
    }
    
    if (role === 'team leader') {
      return ['schedules', 'complaints', 'messages', 'suppliers'].includes(tabId);
    }
    return true;
  }

  function hasEditPermission(tabId) {
    if (!state.currentUser) return true;
    const role = state.currentUser.role.toLowerCase();
    if (role === 'gm') return true;
    if (tabId === 'suppliers') return true; // Allow all roles to manage suppliers
    
    if (state.currentUser.permissions && state.currentUser.permissions[tabId] !== undefined) {
      return state.currentUser.permissions[tabId] === 'edit';
    }
    
    if (role === 'tech supervisor') {
      return ['complaints', 'messages'].includes(tabId);
    }
    if (role === 'team leader') {
      return ['schedules', 'messages'].includes(tabId);
    }
    return true;
  }

  function openPasswordVerifyModal(user, callback) {
    state.editingRecord = { entity: 'passwordVerify', id: user.id };
    state.passwordVerifyCallback = callback;
    
    const html = `
      <form id="password-verify-form" onsubmit="event.preventDefault();">
        <p style="font-size:0.85rem; color:var(--text-medium); margin-bottom:1rem;">
          Please enter the login credentials password for <strong>${user.name}</strong> (${user.role}) to verify session access.
        </p>
        <div class="form-group">
          <label for="verify-modal-username">Username</label>
          <input type="text" id="verify-modal-username" class="form-control" value="${user.username}" readonly style="background:#E2E8F0;" />
        </div>
        <div class="form-group">
          <label for="verify-modal-password">Password *</label>
          <input type="password" id="verify-modal-password" class="form-control" required placeholder="Enter password (default: buckler123)" autofocus />
        </div>
      </form>
    `;
    showModal(`Session Authentication Required`, html, true);

    // Focus the password input manually since autofocus may not fire on dynamic HTML injection
    const pwdInput = document.getElementById('verify-modal-password');
    if (pwdInput) {
      setTimeout(() => pwdInput.focus(), 100);
    }

    // Handle enter key submit directly
    const form = document.getElementById('password-verify-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleModalSubmit('passwordVerify', user.id);
      });
    }
  }

  function getRegionOptions(selectedRegion = 'All', includeAllOption = true) {
    const regionRestr = getRestrictedRegion();
    let targetSelected = selectedRegion;
    if (regionRestr !== 'All') {
      targetSelected = regionRestr;
    }
    
    let html = (includeAllOption && regionRestr === 'All') ? `<option value="All" ${targetSelected === 'All' ? 'selected' : ''}>All Regions</option>` : '';
    const regions = window.BucklerDB.get('regions');
    regions.forEach(r => {
      if (regionRestr === 'All' || r === regionRestr) {
        html += `<option value="${r}" ${targetSelected === r ? 'selected' : ''}>${r}</option>`;
      }
    });
    return html;
  }

  function formatDateLocal(date) {
    if (!date) return '';
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function getCityOptions(region, selectedCity = 'All', includeAllOption = true) {
    const cityRestr = getRestrictedCity();
    let targetSelected = selectedCity;
    if (cityRestr !== 'All') {
      targetSelected = cityRestr;
    }

    let html = (includeAllOption && cityRestr === 'All') ? `<option value="All" ${targetSelected === 'All' ? 'selected' : ''}>All Cities</option>` : '';
    const cities = CITIES_MAP[region];
    if (cities) {
      cities.forEach(c => {
        if (cityRestr === 'All' || c === cityRestr) {
          html += `<option value="${c}" ${targetSelected === c ? 'selected' : ''}>${c}</option>`;
        }
      });
    } else {
      Object.keys(CITIES_MAP).forEach(reg => {
        CITIES_MAP[reg].forEach(c => {
          if (cityRestr === 'All' || c === cityRestr) {
            html += `<option value="${c}" ${targetSelected === c ? 'selected' : ''}>${c}</option>`;
          }
        });
      });
    }
    return html;
  }

  function setupCityFilterSync(regionEl, cityEl, renderFn) {
    if (!regionEl || !cityEl) return;
    regionEl.addEventListener('change', (e) => {
      cityEl.innerHTML = getCityOptions(e.target.value, 'All', true);
      renderFn();
    });
    cityEl.addEventListener('change', renderFn);
  }

  // Inject dashed route animation rule dynamically
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes dashRoute {
      to { stroke-dashoffset: -40; }
    }
  `;
  document.head.appendChild(style);

  // Initialize
  function init() {
    setupRoleSelector();
    setupNavigation();
    setupCSVUpload();
    setupActionButtons();
    setupMapInteraction();
    setupModalEvents();
    setupRoutingEvents();
    setupNotificationsEvents();
    setupChatEvents();
    setupChatbotEvents();
    setupFilters();
    setupActionableKPIs();
    setupCalendarEvents();
    setupUvSalesEvents();

    // Load initial user & render
    switchUser(els.roleSelector.value);
    initDashFilterBar();
    
    // Reactive UI updates on local database writes
    window.addEventListener('storage', () => {
      renderNotifications();
      renderActiveTab();
    });
    
    // Auto-update stats and tables every minute (simulating real-time feeds)
    setInterval(() => {
      if (state.activeTab === 'dashboard') {
        renderDashboard();
      }
      renderNotifications();
    }, 15000);
  }

  // ── Global window helpers for dashboard filter bar (called from HTML onclick) ──
  window.setDashPreset = function(preset) {
    const now = new Date();
    if (preset === 'month') {
      const y = now.getFullYear();
      const m = String(now.getMonth() + 1).padStart(2, '0');
      const last = new Date(y, now.getMonth() + 1, 0).getDate();
      state.dashFilters.dateFrom = '';
      state.dashFilters.dateTo = '';
      state.dashFilters.preset = 'month';
      const fromEl = document.getElementById('dash-filter-date-from');
      const toEl = document.getElementById('dash-filter-date-to');
      if (fromEl) fromEl.value = `${y}-${m}-01`;
      if (toEl) toEl.value = `${y}-${m}-${String(last).padStart(2, '0')}`;
    } else {
      state.dashFilters.dateFrom = '';
      state.dashFilters.dateTo = '';
      state.dashFilters.preset = 'all';
      const fromEl = document.getElementById('dash-filter-date-from');
      const toEl = document.getElementById('dash-filter-date-to');
      if (fromEl) fromEl.value = '';
      if (toEl) toEl.value = '';
    }
    syncDashPresetButtons(preset);
    renderDashboard();
  };

  window.clearDashFilters = function() {
    state.dashFilters = { service: 'All', region: 'All', dateFrom: '', dateTo: '', preset: 'all' };
    state.dashActivityServiceFilter = 'All';
    const svcSel = document.getElementById('dash-filter-service');
    const regSel = document.getElementById('dash-filter-region');
    const fromEl = document.getElementById('dash-filter-date-from');
    const toEl = document.getElementById('dash-filter-date-to');
    if (svcSel) svcSel.value = 'All';
    if (regSel && !regSel.disabled) regSel.value = 'All';
    if (fromEl) fromEl.value = '';
    if (toEl) toEl.value = '';
    syncDashPresetButtons('all');
    renderDashboard();
  };

  window._setDashActivityFilter = function(svc) {
    state.dashActivityServiceFilter = svc;
    renderDashboard();
  };

  window._openActivityLog = function(logId) {
    const log = (window.BucklerDB.getLogs('All')).find(l => l.id === logId);
    if (!log) return;
    const sch = (window.BucklerDB.get('schedules') || []).find(s => s.id === log.scheduleId);
    if (sch) openViewLogModal(log.id, sch.id);
  };

  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container') || createToastContainer();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span>${message}</span>
    `;
    container.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = 'none'; // reset
      toast.offsetHeight; // trigger reflow
      toast.style.animation = 'slideInToast 0.3s reverse forwards';
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4000);
  }

  function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
  }

  // Bind actionable entity links dynamically for click triggers
  function bindEntityClicks(container) {
    if (!container) return;
    
    container.querySelectorAll('.client-click').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openClientModal(el.getAttribute('data-id'));
      });
    });

    container.querySelectorAll('.item-click').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openItemModal(el.getAttribute('data-id'));
      });
    });

    container.querySelectorAll('.user-click').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openUserModal(el.getAttribute('data-id'));
      });
    });

    container.querySelectorAll('.complaint-click').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openComplaintModal(el.getAttribute('data-id'));
      });
    });
  }

  // 1. Role & Access Control Logic
  function setupRoleSelector() {
    const users = window.BucklerDB.get('users');
    els.roleSelector.innerHTML = users.map(u => `
      <option value="${u.id}">${u.name} (${u.role}${u.region !== 'All' ? ' - ' + u.region : ''})</option>
    `).join('');
    
    let previousUserId = els.roleSelector.value;
    els.roleSelector.addEventListener('change', (e) => {
      const targetUserId = e.target.value;
      const user = users.find(u => u.id === targetUserId);
      if (!user) return;
      
      openPasswordVerifyModal(user, (success) => {
        if (success) {
          previousUserId = targetUserId;
          switchUser(targetUserId);
        } else {
          els.roleSelector.value = previousUserId;
        }
      });
    });
  }

  function switchUser(userId) {
    const user = window.BucklerDB.get('users').find(u => u.id === userId);
    if (!user) return;
    
    state.currentUser = user;
    state.activeChatTarget = null; // Reset chat focus
    
    // Update user info in sidebar
    els.currentUserName.textContent = user.name;
    els.currentUserRole.textContent = user.role;
    els.currentUserAvatar.textContent = user.name.split(' ').map(n => n[0]).join('');
    
    if (user.region !== 'All') {
      els.currentUserRegion.textContent = `Region: ${user.region}`;
      els.currentUserRegion.style.display = 'block';
    } else {
      els.currentUserRegion.style.display = 'none';
    }

    enforceRoleAccess();
    renderActiveTab();
    renderNotifications();
    showToast(`Logged in as ${user.name} (${user.role})`, 'success');
  }

  function enforceRoleAccess() {
    if (!state.currentUser) return;
    
    // Restrict sidebar links based on tab access permission
    els.navLinks.forEach(link => {
      const tab = link.getAttribute('data-tab');
      if (hasAccessPermission(tab)) {
        link.style.display = '';
      } else {
        link.style.display = 'none';
      }
    });

    // Auto-redirect if on a blocked tab
    if (!hasAccessPermission(state.activeTab)) {
      const allTabs = ['dashboard', 'sales', 'schedules', 'clients', 'items', 'suppliers', 'complaints', 'messages', 'uv-sales', 'reports', 'users', 'forms'];
      const allowed = allTabs.find(t => hasAccessPermission(t));
      if (allowed) {
        switchTab(allowed);
      }
    }

    // Toggle transit/routing commutes panel on dashboard based on role/access
    const isTL = state.currentUser.role.toLowerCase() === 'team leader';
    if (els.staffRoutingPanel) {
      els.staffRoutingPanel.style.display = (isTL || !hasAccessPermission('dashboard')) ? 'none' : 'grid';
    }

    // Toggle main Add / Action buttons based on edit permissions
    const editButtons = {
      'schedules':  els.btnAddSchedule,
      'clients':    els.btnAddClient,
      'items':      els.btnAddItem,
      'complaints': els.btnAddComplaint,
      'users':      els.btnAddUser
    };

    // Show/hide the Add Supplier button based on role
    const btnAddSupplier = document.getElementById('btn-add-supplier');
    if (btnAddSupplier) {
      const canManageSuppliers = hasEditPermission('suppliers');
      btnAddSupplier.style.display = canManageSuppliers ? 'inline-flex' : 'none';
    }

    Object.keys(editButtons).forEach(tab => {
      const btn = editButtons[tab];
      if (btn) {
        btn.style.display = hasEditPermission(tab) ? 'inline-flex' : 'none';
      }
    });

    if (els.btnAddSector) {
      els.btnAddSector.style.display = hasEditPermission('clients') ? 'inline-flex' : 'none';
    }
    if (els.btnResetDB) {
      els.btnResetDB.style.display = hasEditPermission('users') ? 'inline-flex' : 'none';
    }
    if (els.btnExportDB) {
      els.btnExportDB.style.display = hasEditPermission('users') ? 'inline-flex' : 'none';
    }
    if (els.btnImportDB) {
      els.btnImportDB.style.display = hasEditPermission('users') ? 'inline-flex' : 'none';
    }

    const btnAddVeh = document.getElementById('btn-add-vehicle');
    if (btnAddVeh) {
      const role = state.currentUser.role.toLowerCase();
      const canManageVehicles = ['gm', 'admin coordinator', 'operations manager', 'tech manager'].includes(role);
      btnAddVeh.style.display = canManageVehicles ? 'inline-flex' : 'none';
    }

    const isAllowedReportFields = ['admin coordinator', 'tech supervisor', 'tech manager', 'operations manager', 'gm'].includes(state.currentUser.role.toLowerCase());
    const obsInput = document.getElementById('report-visit-observations');
    const recInput = document.getElementById('report-visit-recommendations');
    const genInput = document.getElementById('report-visit-generated-by');
    if (obsInput) obsInput.disabled = !isAllowedReportFields;
    if (recInput) recInput.disabled = !isAllowedReportFields;
    if (genInput) {
      genInput.disabled = !isAllowedReportFields;
      if (!isAllowedReportFields) {
        genInput.value = `${state.currentUser.name} (${state.currentUser.role})`;
      }
    }

    const regionFilters = [
      els.filterClientRegion,
      els.filterComplaintRegion,
      els.filterUserRegion,
      els.filterScheduleRegion,
      els.filterUvRegion
    ];
    regionFilters.forEach(el => {
      if (el) {
        el.innerHTML = getRegionOptions(el.value, true);
        el.disabled = false;
      }
    });

    const cityPairs = [
      { regEl: els.filterClientRegion, cityEl: els.filterClientCity },
      { regEl: els.filterComplaintRegion, cityEl: els.filterComplaintCity },
      { regEl: els.filterUserRegion, cityEl: els.filterUserCity },
      { regEl: els.filterScheduleRegion, cityEl: els.filterScheduleCity },
      { regEl: els.filterUvRegion, cityEl: els.filterUvCity }
    ];

    cityPairs.forEach(({ regEl, cityEl }) => {
      if (regEl && cityEl) {
        cityEl.innerHTML = getCityOptions(regEl ? regEl.value : 'All', cityEl.value || 'All', true);
        cityEl.disabled = false;
      }
    });

    populateReportClientSelect();
  }

  // 2. Navigation & Router
  function setupNavigation() {
    els.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = link.getAttribute('data-tab');
        switchTab(tab);
      });
    });
  }

  function switchTab(tabId) {
    state.activeTab = tabId;
    
    els.navLinks.forEach(link => {
      if (link.getAttribute('data-tab') === tabId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    els.tabContents.forEach(content => {
      if (content.id === `${tabId}-tab`) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });

    renderActiveTab();
    if (tabId === 'dashboard' && dashboardMap) {
      setTimeout(() => { dashboardMap.invalidateSize(); }, 100);
    } else if (tabId === 'clients' && clientLeafletMap) {
      setTimeout(() => { clientLeafletMap.invalidateSize(); }, 100);
    }
  }

  function renderActiveTab() {
    switch (state.activeTab) {
      case 'dashboard':
        renderDashboard();
        break;
      case 'sales':
        renderSalesCRM();
        break;
      case 'forms':
        renderFormsAndTemplates();
        break;
      case 'schedules':
        renderSchedules();
        break;
      case 'clients':
        renderClients();
        break;
      case 'items':
        renderItems();
        break;
      case 'suppliers':
        renderSuppliers();
        break;
      case 'complaints':
        renderComplaints();
        break;
      case 'messages':
        renderChat();
        break;
      case 'users':
        renderUsers();
        renderVehicles();
        break;
      case 'uv-sales':
        renderUVSales();
        break;
      case 'reports':
        renderReports();
        break;
    }
  }

  // 3. Actionable Indicators (Dashboard KPI Clicks)
  function setupActionableKPIs() {
    els.dashCardScheduled.addEventListener('click', () => {
      const region = getRestrictedRegion();
      const city = getRestrictedCity();
      let schedules = window.BucklerDB.getSchedules(region);
      if (city !== 'All') schedules = schedules.filter(s => s.city === city);
      const scheduled = schedules.filter(s => s.status === 'Scheduled');
      
      const clients = window.BucklerDB.get('clients');
      const users = window.BucklerDB.get('users');
      
      const rows = scheduled.map(s => {
        const cli = clients.find(c => c.id === s.clientId);
        const tlNames = s.teamLeaderId ? s.teamLeaderId.split(',').map(id => {
          const u = users.find(x => x.id === id.trim());
          return u ? u.name : id;
        }).join(', ') : 'Unassigned';
        return [
          cli ? cli.name : 'Unknown Client',
          s.service,
          s.date,
          s.time,
          tlNames
        ];
      });
      showDetailTableModal('Scheduled Visits Detail', ['Client Name', 'Service', 'Date', 'Time', 'Team Leader'], rows);
    });
    
    els.dashCardConducted.addEventListener('click', () => {
      const region = getRestrictedRegion();
      const city = getRestrictedCity();
      let schedules = window.BucklerDB.getSchedules(region);
      if (city !== 'All') schedules = schedules.filter(s => s.city === city);
      const conducted = schedules.filter(s => s.status === 'Conducted');
      const logs = window.BucklerDB.get('operationLogs');
      const clients = window.BucklerDB.get('clients');
      const users = window.BucklerDB.get('users');
      
      const rows = conducted.map(s => {
        const log = logs.find(l => l.scheduleId === s.id);
        const cli = clients.find(c => c.id === s.clientId);
        const tlNames = s.teamLeaderId ? s.teamLeaderId.split(',').map(id => {
          const u = users.find(x => x.id === id.trim());
          return u ? u.name : id;
        }).join(', ') : 'Unassigned';
        return [
          cli ? cli.name : 'Unknown Client',
          s.service,
          s.date,
          log ? log.timeSpent : 'N/A',
          tlNames,
          log ? log.comments : 'N/A'
        ];
      });
      showDetailTableModal('Conducted Visits Detail', ['Client Name', 'Service', 'Date', 'Duration', 'Team Leader', 'Comments'], rows);
    });

    els.dashCardItems.addEventListener('click', () => {
      const region = getRestrictedRegion();
      const city = getRestrictedCity();
      let schedules = window.BucklerDB.getSchedules(region);
      if (city !== 'All') schedules = schedules.filter(s => s.city === city);
      const scheduleIds = new Set(schedules.map(s => s.id));
      const logs = window.BucklerDB.getLogs(region).filter(l => scheduleIds.has(l.scheduleId));
      const clients = window.BucklerDB.get('clients');
      const items = window.BucklerDB.get('items');
      const users = window.BucklerDB.get('users');
      
      const rows = [];
      logs.forEach(l => {
        const sched = schedules.find(s => s.id === l.scheduleId);
        const cli = clients.find(c => c.id === l.clientId);
        const tlNames = sched && sched.teamLeaderId ? sched.teamLeaderId.split(',').map(id => {
          const u = users.find(x => x.id === id.trim());
          return u ? u.name : id;
        }).join(', ') : 'Unknown';
        if (l.itemsConsumed) {
          l.itemsConsumed.forEach(i => {
            const item = items.find(x => x.id === i.itemId);
            rows.push([
              l.dateConducted || (sched ? sched.date : 'N/A'),
              cli ? cli.name : 'Unknown Client',
              item ? item.name : 'Unknown Item',
              i.qty,
              tlNames
            ]);
          });
        }
      });
      showDetailTableModal('Consumed Products Detail', ['Date', 'Client', 'Item Name', 'Quantity Consumed', 'Conducted By'], rows);
    });

    els.dashCardCompletion.addEventListener('click', () => {
      const region = getRestrictedRegion();
      const city = getRestrictedCity();
      const tls = window.BucklerDB.getTeamLeaders(region).filter(t => city === 'All' || t.city === city);
      const schedules = window.BucklerDB.getSchedules(region).filter(s => city === 'All' || s.city === city);
      
      const rows = tls.map(tl => {
        const tlSch = schedules.filter(s => s.teamLeaderId && s.teamLeaderId.split(',').map(x => x.trim()).includes(tl.id));
        const cond = tlSch.filter(s => s.status === 'Conducted').length;
        const rate = tlSch.length ? `${Math.round((cond / tlSch.length) * 100)}%` : '0%';
        return [
          tl.name,
          tl.region,
          tl.city,
          tlSch.filter(s => s.status === 'Scheduled').length,
          cond,
          rate
        ];
      });
      showDetailTableModal('Team Workloads & Completion Rates', ['Team Leader', 'Region', 'City', 'Scheduled', 'Conducted', 'Completion Rate'], rows);
    });
  }

  // 4. Filters binding
  function setupFilters() {
    const updateSchFilters = () => renderSchedules();
    els.searchSchedule.addEventListener('input', updateSchFilters);
    
    // City filter synchronization setups
    setupCityFilterSync(els.filterScheduleRegion, els.filterScheduleCity, renderSchedules);
    setupCityFilterSync(els.filterClientRegion, els.filterClientCity, renderClients);
    setupCityFilterSync(els.filterComplaintRegion, els.filterComplaintCity, renderComplaints);
    setupCityFilterSync(els.filterUserRegion, els.filterUserCity, renderUsers);
    setupCityFilterSync(els.filterUvRegion, els.filterUvCity, renderUVSales);

    els.filterScheduleRegion.addEventListener('change', () => {
      populateTLFilterOptions(els.filterScheduleRegion.value);
      populateScheduleClientFilter(els.filterScheduleRegion.value);
      updateSchFilters();
    });
    els.filterScheduleClient.addEventListener('change', updateSchFilters);
    
    let lastSelectedTLs = ['All'];
    els.filterScheduleTL.addEventListener('change', () => {
      const selectedOptions = Array.from(els.filterScheduleTL.selectedOptions).map(opt => opt.value);
      if (selectedOptions.includes('All') && !lastSelectedTLs.includes('All')) {
        Array.from(els.filterScheduleTL.options).forEach(opt => {
          if (opt.value !== 'All') opt.selected = false;
        });
      } else if (selectedOptions.length > 1 && selectedOptions.includes('All')) {
        Array.from(els.filterScheduleTL.options).forEach(opt => {
          if (opt.value === 'All') opt.selected = false;
        });
      }
      lastSelectedTLs = Array.from(els.filterScheduleTL.selectedOptions).map(opt => opt.value);
      updateSchFilters();
    });
    
    els.filterScheduleStatus.addEventListener('change', updateSchFilters);
    els.filterScheduleDate.addEventListener('change', updateSchFilters);
    
    els.btnClearScheduleFilters.addEventListener('click', () => {
      els.searchSchedule.value = '';
      if (getRestrictedRegion() === 'All') {
        els.filterScheduleRegion.value = 'All';
      }
      if (getRestrictedCity() === 'All') {
        els.filterScheduleCity.value = 'All';
      }
      populateTLFilterOptions(els.filterScheduleRegion.value);
      populateScheduleClientFilter(els.filterScheduleRegion.value);
      els.filterScheduleClient.value = 'All';
      Array.from(els.filterScheduleTL.options).forEach(opt => {
        opt.selected = (opt.value === 'All');
      });
      lastSelectedTLs = ['All'];
      els.filterScheduleStatus.value = 'All';
      els.filterScheduleDate.value = '';
      if (els.filterScheduleService) els.filterScheduleService.value = 'All';

      renderSchedules();
    });

    els.filterClientRegion.addEventListener('change', () => renderClients());

    els.searchComplaint.addEventListener('input', () => renderComplaints());
    els.filterComplaintRegion.addEventListener('change', () => renderComplaints());
    els.filterComplaintSeverity.addEventListener('change', () => renderComplaints());
    els.filterComplaintStatus.addEventListener('change', () => renderComplaints());

    els.searchUser.addEventListener('input', () => renderUsers());
    els.filterUserRegion.addEventListener('change', () => renderUsers());
    els.filterUserRole.addEventListener('change', () => renderUsers());

    // Vehicles event listeners
    const searchVeh = document.getElementById('search-vehicle');
    if (searchVeh) searchVeh.addEventListener('input', () => renderVehicles());

    const filterVehRegion = document.getElementById('filter-vehicle-region');
    if (filterVehRegion) filterVehRegion.addEventListener('change', () => renderVehicles());

    const filterVehTL = document.getElementById('filter-vehicle-tl');
    if (filterVehTL) filterVehTL.addEventListener('change', () => renderVehicles());

    const btnAddVeh = document.getElementById('btn-add-vehicle');
    if (btnAddVeh) btnAddVeh.addEventListener('click', () => openVehicleModal());

    if (els.reportType) {
      els.reportType.addEventListener('change', (e) => {
        const type = e.target.value;
        const dateRangeFields = document.getElementById('report-date-range-fields');
        const visitSelectField = document.getElementById('report-visit-select-field');
        const visitFields = document.getElementById('visit-report-fields');
        
        if (type === 'visit') {
          if (dateRangeFields) dateRangeFields.style.display = 'none';
          if (visitSelectField) visitSelectField.style.display = 'flex';
          if (visitFields) visitFields.style.display = 'flex';
          loadCompletedVisitsForClient();
        } else {
          if (dateRangeFields) dateRangeFields.style.display = 'flex';
          if (visitSelectField) visitSelectField.style.display = 'none';
          if (visitFields) visitFields.style.display = 'none';
        }
      });
    }

    if (els.reportClientSelect) {
      els.reportClientSelect.addEventListener('change', () => {
        if (els.reportType && els.reportType.value === 'visit') {
          loadCompletedVisitsForClient();
        }
      });
    }

    if (els.btnPrintReport) {
      els.btnPrintReport.addEventListener('click', () => {
        window.print();
      });
    }

    els.btnGenerateReport.addEventListener('click', () => {
      const btn = els.btnGenerateReport;
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Generating...';
      
      setTimeout(() => {
        generateIPMReport();
        btn.disabled = false;
        btn.textContent = originalText;
      }, 400);
    });

    if (els.btnExportReportCsv) {
      els.btnExportReportCsv.addEventListener('click', exportReportToCSV);
    }

    // Deep-dive dashboard filters binding
    if (els.dashConsumeRegion) {
      els.dashConsumeRegion.addEventListener('change', () => {
        populateDashConsumeClients(els.dashConsumeRegion.value);
        renderDashConsume();
      });
    }
    if (els.dashConsumeClient) {
      els.dashConsumeClient.addEventListener('change', renderDashConsume);
    }
    if (els.dashConsumeItem) {
      els.dashConsumeItem.addEventListener('change', renderDashConsume);
    }

    if (els.dashComplaintRegion) {
      els.dashComplaintRegion.addEventListener('change', () => {
        populateDashComplaintClients(els.dashComplaintRegion.value);
        renderDashComplaint();
      });
    }
    if (els.dashComplaintClient) {
      els.dashComplaintClient.addEventListener('change', renderDashComplaint);
    }
    if (els.dashComplaintStatus) {
      els.dashComplaintStatus.addEventListener('change', renderDashComplaint);
    }

    // Clients tab visit analysis filters binding
    if (els.clientAnalysisRegion) {
      els.clientAnalysisRegion.addEventListener('change', renderClientAnalysis);
    }
    if (els.clientAnalysisSector) {
      els.clientAnalysisSector.addEventListener('change', renderClientAnalysis);
    }
    if (els.clientAnalysisTl) {
      els.clientAnalysisTl.addEventListener('change', renderClientAnalysis);
    }
  }

  // 5. Dashboard Visualizer
  function renderDashboard() {
    if (dashboardMap) {
      setTimeout(() => { dashboardMap.invalidateSize(); }, 100);
    }
    const roleRegion = getRestrictedRegion();
    const city = getRestrictedCity();
    const role = state.currentUser.role.toLowerCase();
    const df = state.dashFilters;

    // Resolve region: respect role restriction, override with filter if allowed
    const filterRegion = (roleRegion === 'All') ? (df.region || 'All') : roleRegion;

    // Compute date window
    let dateFrom = df.dateFrom;
    let dateTo = df.dateTo;
    if (df.preset === 'month' && !dateFrom) {
      const now = new Date();
      dateFrom = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-01`;
      const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
      dateTo = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;
    }

    let schedules = window.BucklerDB.getSchedules(filterRegion);
    if (city !== 'All') schedules = schedules.filter(s => s.city === city);

    // Apply service filter
    if (df.service && df.service !== 'All') {
      schedules = schedules.filter(s => s.service === df.service);
    }
    // Apply date filter (uses schedule date)
    if (dateFrom) schedules = schedules.filter(s => s.date >= dateFrom);
    if (dateTo) schedules = schedules.filter(s => s.date <= dateTo);

    const conducted = schedules.filter(s => s.status === 'Conducted');
    const scheduled = schedules.filter(s => s.status === 'Scheduled');

    const scheduleIds = new Set(schedules.map(s => s.id));
    const logs = window.BucklerDB.getLogs(filterRegion).filter(l => scheduleIds.has(l.scheduleId));

    let itemsCount = 0;
    logs.forEach(l => { if (l.itemsConsumed) l.itemsConsumed.forEach(i => itemsCount += i.qty); });

    els.statScheduled.textContent = scheduled.length;
    els.statConducted.textContent = conducted.length;
    els.statCompletion.textContent = schedules.length ? `${Math.round((conducted.length / schedules.length) * 100)}%` : '0%';
    els.statItemsUsed.textContent = itemsCount;

    // Update filter summary badge
    const summaryEl = document.getElementById('dash-filter-summary');
    if (summaryEl) {
      const parts = [];
      if (df.service !== 'All') parts.push(`Service: ${df.service}`);
      if (filterRegion !== 'All') parts.push(`Region: ${filterRegion}`);
      if (dateFrom && dateTo) parts.push(`${dateFrom} → ${dateTo}`);
      else if (df.preset === 'month') { const m = new Date(); parts.push(`${m.toLocaleString('default',{month:'long'})} ${m.getFullYear()}`); }
      summaryEl.textContent = parts.length ? `Showing: ${parts.join(' | ')}` : '';
    }

    renderChartsData(filterRegion, schedules, conducted, logs);
    renderCommuteLog(filterRegion);

    if (role !== 'team leader') {
      els.staffRoutingPanel.style.display = 'grid';
      setupRoutingPanel();
      if (!state.selectedShiftRegions) setupDriverShiftsPanel();
      renderShiftRegionPills();
      renderShiftTLPills();
      renderDriverShifts();
    } else {
      els.staffRoutingPanel.style.display = 'none';
      if (dashboardRouteLayers) {
        dashboardRouteLayers.forEach(l => { if (dashboardMap) dashboardMap.removeLayer(l); });
        dashboardRouteLayers = [];
      }
      const shiftsPanel = document.getElementById('driver-shifts-panel');
      if (shiftsPanel) shiftsPanel.style.display = 'none';
    }

    updateMapDisplay(filterRegion);

    populateDashConsumeClients(els.dashConsumeRegion ? els.dashConsumeRegion.value : 'All');
    populateDashConsumeItems();
    renderDashConsume();
    populateDashComplaintClients(els.dashComplaintRegion ? els.dashComplaintRegion.value : 'All');
    renderDashComplaint();

    // Activity feed
    renderActivityFeed(logs, schedules);
  }

  // ── Dashboard filter bar initializer ─────────────────────────────────────
  function initDashFilterBar() {
    // Populate service dropdown
    const svcSel = document.getElementById('dash-filter-service');
    if (svcSel) {
      const services = window.BucklerDB.get('services') || [];
      svcSel.innerHTML = `<option value="All">All Services</option>` +
        services.map(s => `<option value="${s}">${s.charAt(0).toUpperCase() + s.slice(1)}</option>`).join('');
      svcSel.addEventListener('change', () => {
        state.dashFilters.service = svcSel.value;
        state.dashFilters.preset = 'custom';
        renderDashboard();
      });
    }

    // Region dropdown (only if user has All-region access)
    const regSel = document.getElementById('dash-filter-region');
    if (regSel) {
      const restricted = getRestrictedRegion();
      if (restricted !== 'All') {
        regSel.value = restricted;
        regSel.disabled = true;
        state.dashFilters.region = restricted;
      }
      regSel.addEventListener('change', () => {
        state.dashFilters.region = regSel.value;
        state.dashFilters.preset = 'custom';
        renderDashboard();
      });
    }

    // Date inputs
    const dateFrom = document.getElementById('dash-filter-date-from');
    const dateTo = document.getElementById('dash-filter-date-to');
    if (dateFrom) {
      dateFrom.addEventListener('change', () => {
        state.dashFilters.dateFrom = dateFrom.value;
        state.dashFilters.preset = 'custom';
        syncDashPresetButtons('custom');
        renderDashboard();
      });
    }
    if (dateTo) {
      dateTo.addEventListener('change', () => {
        state.dashFilters.dateTo = dateTo.value;
        state.dashFilters.preset = 'custom';
        syncDashPresetButtons('custom');
        renderDashboard();
      });
    }

    // Set default preset to current month
    setDashPreset('month');

    // Populate schedule service filter
    const schSvcSel = document.getElementById('filter-schedule-service');
    if (schSvcSel) {
      const services = window.BucklerDB.get('services') || [];
      schSvcSel.innerHTML = `<option value="All">All Services</option>` +
        services.map(s => `<option value="${s}">${s.charAt(0).toUpperCase() + s.slice(1)}</option>`).join('');
      if (els.filterScheduleService) {
        els.filterScheduleService.addEventListener('change', () => renderSchedules());
      }
    }
  }

  function syncDashPresetButtons(preset) {
    document.querySelectorAll('.btn-dash-preset').forEach(btn => {
      btn.style.background = 'white';
      btn.style.color = 'var(--text-medium)';
    });
    const active = document.getElementById(preset === 'month' ? 'dash-preset-month' : 'dash-preset-all');
    if (active && preset !== 'custom') {
      active.style.background = 'var(--primary-red)';
      active.style.color = 'white';
    }
  }

  // ── Activity Feed Renderer ────────────────────────────────────────────────
  const SERVICE_COLORS = {
    'pest control': '#EF4444', 'termite treatment': '#8B5CF6', 'weed removal': '#10B981',
    'animal control': '#F59E0B', 'bird control': '#3B82F6', 'poultry disinfection': '#EC4899',
    'landscaping': '#14B8A6',
    'landscaping (design)': '#14B8A6',
    'landscaping (gardening)': '#059669',
    'landscaping (maintenance)': '#0284C7',
    'cleaning': '#06B6D4', 'maintenance': '#F97316', 'products sales': '#6B7280'
  };

  function renderActivityFeed(logs, schedules) {
    const container = document.getElementById('dashboard-activity-feed');
    if (!container) return;
    const pillsContainer = document.getElementById('dash-activity-service-pills');

    const clients = window.BucklerDB.get('clients');
    const users = window.BucklerDB.get('users');
    const items = window.BucklerDB.get('items');
    const svcFilter = state.dashActivityServiceFilter || 'All';

    // Build pill filters from unique services in current logs
    if (pillsContainer) {
      const seen = new Set();
      logs.forEach(l => {
        const sch = schedules.find(s => s.id === l.scheduleId);
        if (sch && sch.service) seen.add(sch.service);
      });
      const allServices = ['All', ...Array.from(seen).sort()];
      pillsContainer.innerHTML = allServices.map(svc => {
        const isActive = svc === svcFilter;
        const color = SERVICE_COLORS[svc] || '#6B7280';
        return `<button onclick="window._setDashActivityFilter('${svc}')"
          style="padding:0.2rem 0.6rem; font-size:0.72rem; font-weight:600; border-radius:20px; border:1.5px solid ${isActive ? color : 'var(--border-color)'}; background:${isActive ? color : 'white'}; color:${isActive ? 'white' : 'var(--text-medium)'}; cursor:pointer; transition:all 0.15s;">${svc === 'All' ? 'All' : svc.charAt(0).toUpperCase() + svc.slice(1)}</button>`;
      }).join('');
    }

    // Filter and sort logs — most recent first
    let filteredLogs = [...logs].sort((a, b) => new Date(b.dateConducted + 'T' + (b.timeIn || '00:00')) - new Date(a.dateConducted + 'T' + (a.timeIn || '00:00')));
    if (svcFilter !== 'All') {
      filteredLogs = filteredLogs.filter(l => {
        const sch = schedules.find(s => s.id === l.scheduleId);
        return sch && sch.service === svcFilter;
      });
    }
    filteredLogs = filteredLogs.slice(0, 20);

    if (filteredLogs.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-muted); font-size:0.85rem;">No recent activities${svcFilter !== 'All' ? ` for "${svcFilter}"` : ''} in this period.</div>`;
      return;
    }

    container.innerHTML = filteredLogs.map(log => {
      const sch = schedules.find(s => s.id === log.scheduleId);
      const client = clients.find(c => sch && c.id === sch.clientId);
      const svcName = sch ? sch.service : 'Unknown Service';
      const svcColor = SERVICE_COLORS[svcName] || '#6B7280';
      const tlIds = sch && sch.teamLeaderId ? sch.teamLeaderId.split(',').map(x => x.trim()) : [];
      const tlNames = tlIds.map(id => { const u = users.find(x => x.id === id); return u ? u.name : id; }).join(', ') || 'Unassigned';
      const mats = log.itemsConsumed && log.itemsConsumed.length
        ? log.itemsConsumed.map(c => { const it = items.find(i => i.id === c.itemId); return `${it ? it.name : c.itemId} ×${c.qty}`; }).join(', ')
        : '—';
      const statusBg = log.clientComments ? '#ECFDF5' : '#F8FAFC';

      return `<div onclick="window._openActivityLog('${log.id}')"
        style="display:grid; grid-template-columns:90px 1fr 1fr 1fr 1fr; gap:0.5rem; align-items:center; padding:0.65rem 1rem; border-bottom:1px solid var(--border-color); cursor:pointer; transition:background 0.1s; font-size:0.8rem;"
        onmouseover="this.style.background='#F8FAFC'" onmouseout="this.style.background='white'">
        <div style="display:flex; flex-direction:column;">
          <span style="font-weight:700; color:var(--text-dark);">${log.dateConducted || '—'}</span>
          <span style="font-size:0.7rem; color:var(--text-muted);">${log.timeIn || ''} – ${log.timeOut || ''}</span>
        </div>
        <div>
          <div style="font-weight:700; color:var(--text-dark); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${client ? client.name : 'Unknown Client'}</div>
          <div style="font-size:0.7rem; color:var(--text-muted);">${client ? (client.city || client.region || '') : ''}</div>
        </div>
        <div><span style="background:${svcColor}1A; color:${svcColor}; padding:0.15rem 0.5rem; border-radius:12px; font-size:0.7rem; font-weight:700;">${svcName.charAt(0).toUpperCase() + svcName.slice(1)}</span></div>
        <div style="color:var(--text-medium); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${tlNames}</div>
        <div style="color:var(--text-muted); font-size:0.75rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${mats}</div>
      </div>`;
    }).join('');

    // Table header (inserted before rows)
    const header = `<div style="display:grid; grid-template-columns:90px 1fr 1fr 1fr 1fr; gap:0.5rem; padding:0.5rem 1rem; background:#F8FAFC; border-bottom:2px solid var(--border-color); font-size:0.7rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.05em;">
      <span>Date</span><span>Client</span><span>Service</span><span>Team Leader</span><span>Materials</span>
    </div>`;
    container.innerHTML = header + container.innerHTML;
  }


  function renderChartsData(region, schedules, conducted, logs) {
    if (state.charts.visits) state.charts.visits.destroy();
    if (state.charts.services) state.charts.services.destroy();
    if (state.charts.sectors) state.charts.sectors.destroy();
    if (state.charts.performance) state.charts.performance.destroy();
    if (state.charts.visitTypes) state.charts.visitTypes.destroy();

    const ctxVisits = document.getElementById('visitsChart').getContext('2d');
    
    let labels = [];
    let scheduledData = [];
    let conductedData = [];
    
    if (region === 'All') {
      labels = ['Central', 'Kurdistan', 'South'];
      labels.forEach(reg => {
        const regSch = schedules.filter(s => s.region === reg);
        scheduledData.push(regSch.filter(s => s.status === 'Scheduled').length);
        conductedData.push(regSch.filter(s => s.status === 'Conducted').length);
      });
    } else {
      const services = window.BucklerDB.get('services');
      labels = services.map(s => s.charAt(0).toUpperCase() + s.slice(1));
      services.forEach(srv => {
        const srvSch = schedules.filter(s => s.service === srv);
        scheduledData.push(srvSch.filter(s => s.status === 'Scheduled').length);
        conductedData.push(srvSch.filter(s => s.status === 'Conducted').length);
      });
    }

    state.charts.visits = new Chart(ctxVisits, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          { label: 'Scheduled Visits', data: scheduledData, backgroundColor: '#78909C' },
          { label: 'Conducted Visits', data: conductedData, backgroundColor: '#C62828' }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (event, elements, chart) => {
          if (!elements || !elements.length) return;
          const activeElement = elements[0];
          const dataIndex = activeElement.index;
          const datasetIndex = activeElement.datasetIndex;
          const label = chart.data.labels[dataIndex];
          const datasetLabel = chart.data.datasets[datasetIndex].label;
          const status = datasetLabel.includes('Scheduled') ? 'Scheduled' : 'Conducted';
          
          let filtered = [];
          if (region === 'All') {
            filtered = schedules.filter(s => s.region === label && s.status === status);
          } else {
            const serviceNorm = label.toLowerCase();
            filtered = schedules.filter(s => s.service === serviceNorm && s.status === status);
          }
          
          const clients = window.BucklerDB.get('clients');
          const users = window.BucklerDB.get('users');
          const rows = filtered.map(s => {
            const cli = clients.find(c => c.id === s.clientId);
            const tlNames = s.teamLeaderId ? s.teamLeaderId.split(',').map(id => {
              const u = users.find(x => x.id === id.trim());
              return u ? u.name : id;
            }).join(', ') : 'Unassigned';
            return [
              cli ? cli.name : 'Unknown Client',
              s.service,
              s.date,
              s.time,
              tlNames,
              s.status
            ];
          });
          showDetailTableModal(`${datasetLabel} Detail - ${label}`, ['Client Name', 'Service', 'Date', 'Time', 'Team Leader', 'Status'], rows);
        },
        plugins: {
          legend: { position: 'bottom' }
        },
        scales: {
          y: { beginAtZero: true, ticks: { stepSize: 1 } }
        }
      }
    });

    const ctxServices = document.getElementById('servicesChart').getContext('2d');
    const services = window.BucklerDB.get('services');
    const serviceCounts = services.map(srv => schedules.filter(s => s.service === srv).length);
    const serviceLabels = services.map(s => s.charAt(0).toUpperCase() + s.slice(1));
    
    const activeIndices = serviceCounts.map((c, i) => c > 0 ? i : -1).filter(i => i !== -1);
    const chartLabels = activeIndices.map(i => serviceLabels[i]);
    const chartCounts = activeIndices.map(i => serviceCounts[i]);

    state.charts.services = new Chart(ctxServices, {
      type: 'doughnut',
      data: {
        labels: chartLabels.length ? chartLabels : ['No Active Services'],
        datasets: [{
          data: chartCounts.length ? chartCounts : [1],
          backgroundColor: ['#C62828', '#E53935', '#EF5350', '#78909C', '#90A4AE', '#B0BEC5', '#10B981', '#F59E0B'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (event, elements, chart) => {
          if (!elements || !elements.length) return;
          const label = chart.data.labels[elements[0].index];
          if (label === 'No Active Services') return;
          
          const serviceNorm = label.toLowerCase();
          const filtered = schedules.filter(s => s.service === serviceNorm);
          const clients = window.BucklerDB.get('clients');
          const users = window.BucklerDB.get('users');
          const rows = filtered.map(s => {
            const cli = clients.find(c => c.id === s.clientId);
            const tlNames = s.teamLeaderId ? s.teamLeaderId.split(',').map(id => {
              const u = users.find(x => x.id === id.trim());
              return u ? u.name : id;
            }).join(', ') : 'Unassigned';
            return [
              cli ? cli.name : 'Unknown Client',
              s.service,
              s.date,
              s.status,
              tlNames
            ];
          });
          showDetailTableModal(`Visits Detail for Service: ${label}`, ['Client Name', 'Service', 'Date', 'Status', 'Team Leader'], rows);
        },
        plugins: {
          legend: { position: 'right' }
        }
      }
    });

    const ctxSectors = document.getElementById('sectorsChart').getContext('2d');
    if (ctxSectors) {
      const clients = window.BucklerDB.get('clients');
      const sectorsData = window.BucklerDB.get('sectors');
      const sectors = sectorsData.map(s => s.name);
      
      const sectorCounts = sectors.map(sec => {
        return schedules.filter(s => {
          const cl = clients.find(c => c.id === s.clientId);
          return cl && cl.sector === sec;
        }).length;
      });

      const activeSecIndices = sectorCounts.map((c, i) => c > 0 ? i : -1).filter(i => i !== -1);
      const secLabels = activeSecIndices.map(i => sectors[i]);
      const secCounts = activeSecIndices.map(i => sectorCounts[i]);

      state.charts.sectors = new Chart(ctxSectors, {
        type: 'doughnut',
        data: {
          labels: secLabels.length ? secLabels : ['No Sector Data'],
          datasets: [{
            data: secCounts.length ? secCounts : [1],
            backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#6B7280'],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          onClick: (event, elements, chart) => {
            if (!elements || !elements.length) return;
            const label = chart.data.labels[elements[0].index];
            if (label === 'No Sector Data') return;
            
            const clients = window.BucklerDB.get('clients');
            const users = window.BucklerDB.get('users');
            const filtered = schedules.filter(s => {
              const cl = clients.find(c => c.id === s.clientId);
              return cl && cl.sector === label;
            });
            
            const rows = filtered.map(s => {
              const cli = clients.find(c => c.id === s.clientId);
              const tlNames = s.teamLeaderId ? s.teamLeaderId.split(',').map(id => {
                const u = users.find(x => x.id === id.trim());
                return u ? u.name : id;
              }).join(', ') : 'Unassigned';
              return [
                cli ? cli.name : 'Unknown Client',
                s.service,
                s.date,
                s.status,
                tlNames
              ];
            });
            showDetailTableModal(`Visits Detail for Sector: ${label}`, ['Client Name', 'Service', 'Date', 'Status', 'Team Leader'], rows);
          },
          plugins: {
            legend: { position: 'right' }
          }
        }
      });
    }

    // Render Visit Types Doughnut Chart
    const ctxVisitTypes = document.getElementById('visitTypesChart').getContext('2d');
    if (ctxVisitTypes) {
      const typeCounts = { 'Regular': 0, 'Call-back': 0, 'Inspection': 0 };
      schedules.forEach(s => {
        const type = s.visitType || 'Regular';
        if (typeCounts[type] !== undefined) {
          typeCounts[type]++;
        }
      });
      
      const vTypesLabels = Object.keys(typeCounts);
      const vTypesValues = Object.values(typeCounts);
      
      const activeTypesIndices = vTypesValues.map((c, i) => c > 0 ? i : -1).filter(i => i !== -1);
      const activeVTypesLabels = activeTypesIndices.map(i => vTypesLabels[i]);
      const activeVTypesValues = activeTypesIndices.map(i => vTypesValues[i]);
      
      state.charts.visitTypes = new Chart(ctxVisitTypes, {
        type: 'doughnut',
        data: {
          labels: activeVTypesLabels.length ? activeVTypesLabels : ['No Visit Type Data'],
          datasets: [{
            data: activeVTypesValues.length ? activeVTypesValues : [1],
            backgroundColor: ['#3B82F6', '#EF4444', '#10B981'],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          onClick: (event, elements, chart) => {
            if (!elements || !elements.length) return;
            const label = chart.data.labels[elements[0].index];
            if (label === 'No Visit Type Data') return;
            
            const filtered = schedules.filter(s => (s.visitType || 'Regular') === label);
            const clients = window.BucklerDB.get('clients');
            const users = window.BucklerDB.get('users');
            const rows = filtered.map(s => {
              const cli = clients.find(c => c.id === s.clientId);
              const tlNames = s.teamLeaderId ? s.teamLeaderId.split(',').map(id => {
                const u = users.find(x => x.id === id.trim());
                return u ? u.name : id;
              }).join(', ') : 'Unassigned';
              return [
                cli ? cli.name : 'Unknown Client',
                s.service,
                s.date,
                s.status,
                tlNames
              ];
            });
            showDetailTableModal(`Visits Detail for Visit Type: ${label}`, ['Client Name', 'Service', 'Date', 'Status', 'Team Leader'], rows);
          },
          plugins: {
            legend: { position: 'right' }
          }
        }
      });
    }

    const ctxPerf = document.getElementById('performanceChart').getContext('2d');
    const teamLeaders = window.BucklerDB.getTeamLeaders(region);
    const tlNames = teamLeaders.map(t => t.name);
    const tlCompletionRates = teamLeaders.map(tl => {
      const tlSch = schedules.filter(s => s.teamLeaderId && s.teamLeaderId.split(',').map(x => x.trim()).includes(tl.id));
      if (!tlSch.length) return 0;
      const cond = tlSch.filter(s => s.status === 'Conducted').length;
      return Math.round((cond / tlSch.length) * 100);
    });

    state.charts.performance = new Chart(ctxPerf, {
      type: 'line',
      data: {
        labels: tlNames.length ? tlNames : ['No Team Leaders'],
        datasets: [{
          label: 'Visit Completion Rate (%)',
          data: tlCompletionRates.length ? tlCompletionRates : [0],
          borderColor: '#C62828',
          backgroundColor: 'rgba(198, 40, 40, 0.1)',
          fill: true,
          tension: 0.3,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (event, elements, chart) => {
          if (!elements || !elements.length) return;
          const label = chart.data.labels[elements[0].index];
          if (label === 'No Team Leaders') return;
          
          const tl = teamLeaders.find(t => t.name === label);
          if (!tl) return;
          
          const filtered = schedules.filter(s => s.teamLeaderId && s.teamLeaderId.split(',').map(x => x.trim()).includes(tl.id));
          const clients = window.BucklerDB.get('clients');
          const rows = filtered.map(s => {
            const cli = clients.find(c => c.id === s.clientId);
            return [
              cli ? cli.name : 'Unknown Client',
              s.service,
              s.date,
              s.status
            ];
          });
          showDetailTableModal(`Visits Performance Detail for TL: ${label}`, ['Client Name', 'Service', 'Date', 'Status'], rows);
        },
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true, max: 100, ticks: { callback: value => value + '%' } }
        }
      }
    });
  }

  function renderCommuteLog(region) {
    const commutes = window.BucklerDB.get('commuteLog');
    const city = getRestrictedCity();
    const schedules = window.BucklerDB.get('schedules');
    
    const filteredCommutes = commutes.filter(c => {
      if (region !== 'All' && c.region !== region) return false;
      if (city !== 'All') {
        const sch = schedules.find(s => s.id === c.scheduleId);
        if (sch && sch.city !== city) return false;
      }
      return true;
    });
    
    const statusPriority = { 'Dispatched': 0, 'Scheduled': 1, 'Completed': 2 };
    filteredCommutes.sort((a, b) => statusPriority[a.status] - statusPriority[b.status]);

    const users = window.BucklerDB.get('users');
    const clients = window.BucklerDB.get('clients');

    els.commuteLogList.innerHTML = filteredCommutes.map(com => {
      const tl = users.find(u => u.id === com.teamLeaderId);
      const tlName = tl ? tl.name : 'Unknown TL';
      
      const sch = schedules.find(s => s.id === com.scheduleId);
      const client = sch ? clients.find(c => c.id === sch.clientId) : null;
      
      let statusClass = 'badge-scheduled';
      if (com.status === 'Completed') statusClass = 'badge-completed';
      if (com.status === 'Dispatched') statusClass = 'badge-dispatched';

      const sectorBadge = client && client.sector ? `<span style="font-size:0.65rem; font-weight:700; color:var(--primary-red); background:#FFEBEE; padding:1px 6px; border-radius:4px; margin-left:0.5rem; text-transform:uppercase;">${client.sector}</span>` : '';
      return `
        <div class="commute-card" style="cursor:pointer;" data-id="${com.id}">
          <div class="commute-header">
            <!-- Clickable client details -->
            <span style="display:flex; align-items:center;">
              <strong style="color: var(--text-dark); cursor:pointer;" class="client-click" data-id="${client ? client.id : ''}">${client ? client.name : com.endLocation}</strong>
              ${sectorBadge}
            </span>
            <span class="commute-badge ${statusClass}">${com.status}</span>
          </div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom: 2px;">
            Driver: <strong style="cursor:pointer;" class="user-click" data-id="${com.teamLeaderId}">${tlName}</strong> | Route: ${com.startLocation} → ${com.endLocation}
          </div>
          <div class="commute-body">
            <div class="commute-metric">
              <span class="commute-val">${com.distanceKm} km</span>
              <span>Distance</span>
            </div>
            <div class="commute-metric">
              <span class="commute-val">${com.durationMins} mins</span>
              <span>Est. Duration</span>
            </div>
            <div class="commute-metric">
              <span class="commute-val">${com.fuelUsedLiters} L</span>
              <span>Fuel (Est.)</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    bindEntityClicks(els.commuteLogList);

    els.commuteLogList.querySelectorAll('.commute-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.client-click') || e.target.closest('.user-click')) return;
        const comId = card.getAttribute('data-id');
        const com = commutes.find(c => String(c.id) === String(comId));
        if (!com) return;
        const tl = users.find(u => u.id === com.teamLeaderId);
        const sched = schedules.find(s => s.id === com.scheduleId);
        
        const rows = [[
          tl ? tl.name : 'Unknown TL',
          sched ? sched.date : 'N/A',
          com.startLocation,
          com.endLocation,
          `${com.distanceKm} km`,
          `${com.fuelUsedLiters} L`,
          `${com.durationMins} mins`,
          com.status
        ]];
        showDetailTableModal('Commute Routing Detail', ['Team Leader', 'Date', 'Start Location', 'End Location', 'Distance', 'Fuel', 'Duration', 'Status'], rows);
      });
    });
  }

  let dashboardMap = null;
  const dashboardPolygons = {};
  let dashboardCityMarkers = [];
  let dashboardRouteLayers = [];

  function setupMapInteraction() {
    const handleRegionClick = (reg) => {
      showToast(`Selected Region: ${reg}`, 'success');
      state.selectedMapRegion = reg;
      
      // Update polygon styling to highlight active region on Leaflet map
      ['Central', 'Kurdistan', 'South'].forEach(r => {
        const poly = dashboardPolygons[r];
        if (poly) {
          const isActive = (r === reg);
          poly.setStyle({
            color: isActive ? (r === 'Central' ? '#EF4444' : r === 'Kurdistan' ? '#3B82F6' : '#10B981') : '#FFFFFF',
            weight: isActive ? 3 : 2
          });
        }
      });
      
      if (state.currentUser && state.currentUser.region === 'All') {
        els.filterScheduleRegion.value = reg;
        els.filterScheduleRegion.dispatchEvent(new Event('change'));
      }

      if (els.routingRegionSelect) {
        els.routingRegionSelect.value = reg;
        els.routingRegionSelect.dispatchEvent(new Event('change'));
      }

      const role = state.currentUser.role.toLowerCase();
      if (role === 'gm' || role === 'tech manager') {
        renderDashboard();
      }

      // Show detail table modal for the clicked region
      const clients = window.BucklerDB.get('clients').filter(c => c.region === reg);
      const rows = clients.map(c => [
        c.clientCode || c.id,
        c.name,
        c.sector,
        c.contact,
        c.city,
        c.phone || '-'
      ]);
      showDetailTableModal(`Clients in Region: ${reg}`, ['Client Code', 'Client Name', 'Sector', 'Contact Person', 'City', 'Phone'], rows);
    };

    els.hubCardCentral.addEventListener('click', () => handleRegionClick('Central'));
    els.hubCardKurdistan.addEventListener('click', () => handleRegionClick('Kurdistan'));
    els.hubCardSouth.addEventListener('click', () => handleRegionClick('South'));

    // Bind city pins clicks
    const showCityDetails = (city) => {
      const clients = window.BucklerDB.get('clients').filter(c => c.city.toLowerCase() === city.toLowerCase());
      const rows = clients.map(c => [
        c.clientCode || c.id,
        c.name,
        c.sector,
        c.contact,
        c.region,
        c.phone || '-'
      ]);
      showDetailTableModal(`Clients in City: ${city}`, ['Client Code', 'Client Name', 'Sector', 'Contact Person', 'Region', 'Phone'], rows);
    };

    // Initialize Leaflet Dashboard Map
    const mapEl = document.getElementById('dashboard-real-map');
    if (mapEl && !dashboardMap) {
      dashboardMap = L.map('dashboard-real-map', {
        zoomControl: false,
        attributionControl: false
      }).setView([33.2232, 43.6793], 6);
      
      L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20
      }).addTo(dashboardMap);

      L.control.zoom({ position: 'topright' }).addTo(dashboardMap);

      // Kurdistan Region Polygon
      const kurdistanCoords = [
        [36.8, 42.5], [37.3, 44.5], [36.8, 46.2], [35.3, 46.0], [35.0, 44.5], [35.8, 43.0]
      ];
      // Central Region Polygon
      const centralCoords = [
        [34.8, 41.0], [35.0, 44.5], [35.3, 46.0], [32.8, 46.5], [31.8, 44.5], [32.2, 41.0]
      ];
      // South Region Polygon
      const southCoords = [
        [31.8, 44.5], [32.8, 46.5], [32.0, 48.5], [29.9, 48.8], [29.8, 47.0], [30.8, 45.0]
      ];

      const regionPolys = {
        Kurdistan: kurdistanCoords,
        Central: centralCoords,
        South: southCoords
      };

      const baseColors = {
        Central: '#EF4444',
        Kurdistan: '#3B82F6',
        South: '#10B981'
      };

      Object.keys(regionPolys).forEach(reg => {
        const poly = L.polygon(regionPolys[reg], {
          color: '#FFFFFF',
          fillColor: baseColors[reg],
          fillOpacity: 0.15,
          weight: 2
        }).addTo(dashboardMap);
        
        poly.on('click', () => handleRegionClick(reg));
        poly.on('mouseover', () => {
          const schedules = window.BucklerDB.get('schedules');
          const count = schedules.filter(s => s.region === reg).length;
          poly.bindTooltip(`${reg} Region: ${count} Visit${count !== 1 ? 's' : ''}`, { direction: 'top', sticky: true }).openTooltip();
          poly.setStyle({ fillOpacity: 0.35 });
        });
        poly.on('mouseout', () => {
          poly.setStyle({ fillOpacity: 0.15 });
        });

        dashboardPolygons[reg] = poly;
      });

      // Add city pins (Erbil, Suleimaniah, Baghdad, Basra)
      const cities = [
        { name: 'Erbil', lat: 36.1901, lng: 44.0089 },
        { name: 'Suleimaniah', lat: 35.5620, lng: 45.3850 },
        { name: 'Baghdad', lat: 33.3152, lng: 44.3661 },
        { name: 'Basra', lat: 30.5081, lng: 47.7835 }
      ];

      cities.forEach(c => {
        const cityIcon = L.divIcon({
          className: 'city-map-pin-div',
          html: `
            <div style="position:relative; display:flex; flex-direction:column; align-items:center;">
              <div style="width:12px; height:12px; background:#1E293B; border:2px solid #FFFFFF; border-radius:50%; box-shadow:0 0 10px rgba(0,0,0,0.5);"></div>
              <span style="font-size:0.75rem; font-weight:700; color:#0F172A; text-shadow:0 0 4px #FFFFFF; margin-top:2px; white-space:nowrap;">${c.name}</span>
            </div>
          `,
          iconSize: [40, 30],
          iconAnchor: [20, 6]
        });

        const marker = L.marker([c.lat, c.lng], { icon: cityIcon }).addTo(dashboardMap);
        marker.on('click', (e) => {
          L.DomEvent.stopPropagation(e);
          showCityDetails(c.name);
        });
        dashboardCityMarkers.push(marker);
      });
    }
  }

  // 6. Commutes Routing Details
  // 6. Commutes Routing Details
  function renderTLPills() {
    if (!els.routingTLPillsContainer) return;
    
    const activeReg = els.routingRegionSelect ? els.routingRegionSelect.value : 'All';
    let tls = window.BucklerDB.getTeamLeaders(activeReg);
    const userCity = getRestrictedCity();
    if (userCity !== 'All') {
      tls = tls.filter(t => t.city === userCity);
    }
    
    if (!state.selectedRouteTLs) {
      state.selectedRouteTLs = tls.map(t => t.id);
    }
    
    state.selectedRouteTLs = state.selectedRouteTLs.filter(id => id === 'All' || tls.some(t => t.id === id));
    
    if (state.selectedRouteTLs.length === 0 && tls.length > 0) {
      state.selectedRouteTLs = tls.map(t => t.id);
    }

    const isAllSelected = tls.length > 0 && tls.every(t => state.selectedRouteTLs.includes(t.id));

    let html = `
      <div class="tl-pill ${isAllSelected ? 'active' : ''}" data-value="All" style="margin-right: 4px; margin-bottom: 4px;">
        <span class="pill-avatar">★</span>
        <span>All</span>
      </div>
    `;

    tls.forEach(t => {
      const isSelected = state.selectedRouteTLs.includes(t.id);
      const initials = t.name.split(' ').map(n => n[0]).join('').substring(0, 2);
      html += `
        <div class="tl-pill ${isSelected ? 'active' : ''}" data-value="${t.id}" style="margin-right: 4px; margin-bottom: 4px;">
          <span class="pill-avatar">${initials}</span>
          <span>${t.name}</span>
        </div>
      `;
    });

    els.routingTLPillsContainer.innerHTML = html;

    const pills = els.routingTLPillsContainer.querySelectorAll('.tl-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const val = pill.getAttribute('data-value');
        if (val === 'All') {
          if (isAllSelected) {
            state.selectedRouteTLs = [];
          } else {
            state.selectedRouteTLs = tls.map(t => t.id);
          }
        } else {
          const idx = state.selectedRouteTLs.indexOf(val);
          if (idx > -1) {
            state.selectedRouteTLs.splice(idx, 1);
          } else {
            state.selectedRouteTLs.push(val);
          }
        }
        renderTLPills();
        renderTLRoutes(state.selectedRouteTLs.filter(id => id !== 'All'));
      });
    });
  }

  function setupRoutingEvents() {
    if (els.routingRegionSelect) {
      els.routingRegionSelect.addEventListener('change', (e) => {
        const reg = e.target.value;
        state.selectedRoutingRegion = reg;
        let tls = window.BucklerDB.getTeamLeaders(reg);
        const userCity = getRestrictedCity();
        if (userCity !== 'All') {
          tls = tls.filter(t => t.city === userCity);
        }
        state.selectedRouteTLs = tls.map(t => t.id);
        renderTLPills();
        renderTLRoutes(state.selectedRouteTLs);
      });
    }

    if (els.routingStartDate) {
      els.routingStartDate.addEventListener('change', () => {
        if (state.selectedRouteTLs) {
          renderTLRoutes(state.selectedRouteTLs.filter(id => id !== 'All'));
        }
      });
    }

    if (els.routingEndDate) {
      els.routingEndDate.addEventListener('change', () => {
        if (state.selectedRouteTLs) {
          renderTLRoutes(state.selectedRouteTLs.filter(id => id !== 'All'));
        }
      });
    }
  }

  function setupRoutingPanel() {
    const userRegion = getRestrictedRegion();
    
    if (els.routingRegionSelect) {
      if (userRegion !== 'All') {
        els.routingRegionSelect.innerHTML = `<option value="${userRegion}">${userRegion}</option>`;
        els.routingRegionSelect.value = userRegion;
        els.routingRegionSelect.disabled = false;
      } else {
        els.routingRegionSelect.innerHTML = `<option value="All">All Regions</option><option value="Central">Central</option><option value="Kurdistan">Kurdistan</option><option value="South">South</option>`;
        els.routingRegionSelect.disabled = false;
        if (state.selectedRoutingRegion) {
          els.routingRegionSelect.value = state.selectedRoutingRegion;
        } else {
          els.routingRegionSelect.value = state.selectedMapRegion || 'All';
        }
      }
    }
    
    renderTLPills();
    renderTLRoutes(state.selectedRouteTLs.filter(id => id !== 'All'));
  }

  function renderTLRoutes(tlIds) {
    if (dashboardRouteLayers) {
      dashboardRouteLayers.forEach(l => {
        if (dashboardMap) dashboardMap.removeLayer(l);
      });
    }
    dashboardRouteLayers = [];

    if (!tlIds || !tlIds.length) {
      els.routingDetailsList.innerHTML = '<p style="color:var(--text-muted); font-size:0.85rem;">No Team Leader selected.</p>';
      els.routingTotalDistance.textContent = '0.0 km';
      return;
    }

    const startDate = els.routingStartDate ? els.routingStartDate.value : '2026-06-01';
    const endDate = els.routingEndDate ? els.routingEndDate.value : '2026-06-07';
    const clients = window.BucklerDB.get('clients');
    let totalDistance = 0;
    const legsHTML = [];
    let svgOverlayHTML = '';

    tlIds.forEach(tlId => {
      const tl = window.BucklerDB.get('users').find(u => u.id === tlId);
      if (!tl) return;

      const schedules = window.BucklerDB.get('schedules').filter(s => 
        s.teamLeaderId && s.teamLeaderId.split(',').map(x => x.trim()).includes(tlId) && 
        s.date >= startDate && 
        s.date <= endDate
      );
      
      const tlStyle = getTeamLeaderStyle(tlId);
      const hubCoords = MAP_COORDS[tl.region];

      if (!schedules.length) {
        legsHTML.push(`
          <div style="border-bottom:1px solid #ECEFF1; padding:0.4rem 0; font-size:0.85rem; color:var(--text-muted); font-style:italic;">
            <strong style="color:${tlStyle.text}">${tl.name}:</strong> Driver idle from ${startDate} to ${endDate} at ${tl.region} Hub
          </div>
        `);
        return;
      }

      // Group schedules by date
      const schedulesByDate = {};
      schedules.forEach(sch => {
        if (!schedulesByDate[sch.date]) {
          schedulesByDate[sch.date] = [];
        }
        schedulesByDate[sch.date].push(sch);
      });

      const sortedDates = Object.keys(schedulesByDate).sort();
      let tlPathD = '';
      let tlClientsPts = [];

      legsHTML.push(`
        <div style="border-bottom: 2px solid var(--border-color); padding: 0.5rem 0 0.25rem 0; font-size: 0.9rem;">
          <strong style="color:${tlStyle.text}; font-size: 0.95rem;">${tl.name}</strong> (${tl.role})
        </div>
      `);

      sortedDates.forEach(dateStr => {
        const daySchedules = schedulesByDate[dateStr];
        daySchedules.sort((a, b) => a.time.localeCompare(b.time));

        legsHTML.push(`
          <div style="padding: 0.2rem 0.5rem; background: #ECEFF1; border-radius: 4px; font-weight: 700; margin-top: 0.4rem; font-size: 0.75rem; color: var(--text-dark); display: flex; justify-content: space-between;">
            <span>Date: ${dateStr}</span>
            <span>${daySchedules.length} visit(s)</span>
          </div>
        `);

        const route = [];
        route.push({
          id: tl.region,
          name: `Buckler ${tl.region} Hub`,
          lat: hubCoords.lat,
          lng: hubCoords.lng,
          x: hubCoords.x,
          y: hubCoords.y,
          time: '08:00',
          type: 'hub'
        });

        daySchedules.forEach(sch => {
          const client = clients.find(c => c.id === sch.clientId);
          const svgPoint = MAP_COORDS[sch.clientId] || { x: hubCoords.x, y: hubCoords.y };
          route.push({
            id: sch.clientId,
            name: client ? client.name : 'Unknown Client',
            lat: client ? client.lat : hubCoords.lat,
            lng: client ? client.lng : hubCoords.lng,
            x: svgPoint.x,
            y: svgPoint.y,
            time: sch.time,
            service: sch.service,
            type: 'client'
          });
        });

        route.push({
          id: tl.region,
          name: `Buckler ${tl.region} Hub (Return)`,
          lat: hubCoords.lat,
          lng: hubCoords.lng,
          x: hubCoords.x,
          y: hubCoords.y,
          time: '17:00',
          type: 'hub'
        });

        // Add Leaflet Route Polylines and Markers
        if (route.length > 1 && dashboardMap) {
          const latlngs = route.map(p => [p.lat, p.lng]);
          const routeLine = L.polyline(latlngs, {
            color: tlStyle.border,
            weight: 3,
            dashArray: '8, 5',
            opacity: 0.85
          }).addTo(dashboardMap);
          dashboardRouteLayers.push(routeLine);

          route.forEach(p => {
            let marker;
            if (p.type === 'hub') {
              const hubIcon = L.divIcon({
                className: 'hub-pin',
                html: `<div style="width:10px; height:10px; background:#475569; border:2px solid #FFFFFF; border-radius:50%;"></div>`,
                iconSize: [10, 10],
                iconAnchor: [5, 5]
              });
              marker = L.marker([p.lat, p.lng], { icon: hubIcon }).addTo(dashboardMap);
              marker.bindPopup(`<strong>${p.name}</strong>`);
            } else {
              const clientMarkerIcon = L.circleMarker([p.lat, p.lng], {
                radius: 5,
                fillColor: tlStyle.border,
                color: '#FFFFFF',
                weight: 2,
                fillOpacity: 1.0
              }).addTo(dashboardMap);
              clientMarkerIcon.bindPopup(`
                <strong>${p.name}</strong><br/>
                Time: ${p.time}<br/>
                Service: ${p.service}
              `);
              clientMarkerIcon.on('click', () => openClientModal(p.id));
              marker = clientMarkerIcon;
            }
            dashboardRouteLayers.push(marker);
          });
        }

        // Add to map path
        let dayPathD = `M ${route[0].x} ${route[0].y}`;
        for (let i = 1; i < route.length; i++) {
          dayPathD += ` L ${route[i].x} ${route[i].y}`;
          if (route[i].type === 'client') {
            tlClientsPts.push(route[i]);
          }
        }
        tlPathD += (tlPathD ? ' ' : '') + dayPathD;

        for (let i = 0; i < route.length - 1; i++) {
          const from = route[i];
          const to = route[i+1];
          const distance = calculateDistanceKm(from.lat, from.lng, to.lat, to.lng);
          totalDistance += distance;

          legsHTML.push(`
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #ECEFF1; padding:0.4rem 0; font-size:0.85rem; padding-left: 0.5rem;">
              <div>
                ${from.type === 'client' 
                  ? `<a href="#" class="client-click" data-id="${from.id}" style="color:inherit; font-weight:600; text-decoration:none; border-bottom:1px dashed var(--text-muted);">${from.name}</a>` 
                  : `<span style="font-weight:600; color:var(--text-dark);">${from.name}</span>`
                }
                <span style="color:var(--text-muted); font-size:0.75rem; margin:0 0.25rem;">➔</span>
                ${to.type === 'client' 
                  ? `<a href="#" class="client-click" data-id="${to.id}" style="color:inherit; font-weight:600; text-decoration:none; border-bottom:1px dashed var(--text-muted);">${to.name}</a>` 
                  : `<span style="font-weight:600; color:var(--text-dark);">${to.name}</span>`
                }
                ${to.service ? `<br/><span style="font-size:0.75rem; color:var(--primary-red); text-transform:capitalize; margin-left: 5px;">Service: ${to.service} @ ${to.time}</span>` : ''}
              </div>
              <div style="font-weight:700; color:var(--text-medium); font-variant-numeric: tabular-nums;">
                ${distance} km
              </div>
            </div>
          `);
        }
      });

      if (tlPathD) {
        svgOverlayHTML += `
          <path d="${tlPathD}" fill="none" stroke="${tlStyle.border}" stroke-width="3" stroke-dasharray="8,5" stroke-linecap="round" stroke-linejoin="round" style="animation: dashRoute 8s linear infinite;" />
          ${tlClientsPts.map(pt => `
            <circle cx="${pt.x}" cy="${pt.y}" r="4" fill="#FFFFFF" stroke="${tlStyle.border}" stroke-width="2" class="client-click" data-id="${pt.id}" style="cursor:pointer;" />
          `).join('')}
        `;
      }
    });

    els.routingDetailsList.innerHTML = legsHTML.join('');
    els.routingTotalDistance.textContent = `${totalDistance.toFixed(1)} km`;
    els.routingSummaryText.textContent = `Route legs for ${tlIds.length} driver(s) from ${startDate} to ${endDate}`;

    bindEntityClicks(els.routingDetailsList);

    if (els.mapRouteOverlay) {
      els.mapRouteOverlay.innerHTML = svgOverlayHTML;
      bindEntityClicks(els.mapRouteOverlay);
    }
  }

  // 7. System Notifications Center (Header Bell Dropdown)
  function setupNotificationsEvents() {
    els.btnNotiBell.addEventListener('click', (e) => {
      e.stopPropagation();
      const show = els.notiDropdown.style.display === 'block';
      els.notiDropdown.style.display = show ? 'none' : 'block';
    });

    window.addEventListener('click', () => {
      els.notiDropdown.style.display = 'none';
    });

    els.notiClearAll.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const notis = window.BucklerDB.get('notifications');
      notis.forEach(nt => {
        if (nt.userId === state.currentUser.id || nt.userId === 'All') {
          window.BucklerDB.update('notifications', nt.id, { read: true });
        }
      });
      renderNotifications();
      showToast('All notifications marked read', 'success');
    });
  }

  function renderNotifications() {
    if (!state.currentUser) return;
    const notis = window.BucklerDB.get('notifications');
    const userNotis = notis.filter(n => n.userId === state.currentUser.id || n.userId === 'All');
    
    const unreadCount = userNotis.filter(n => !n.read).length;
    if (unreadCount > 0) {
      els.notiBadge.textContent = unreadCount;
      els.notiBadge.style.display = 'flex';
    } else {
      els.notiBadge.style.display = 'none';
    }

    els.notiDropdownList.innerHTML = userNotis.length ? userNotis.map(nt => `
      <div class="noti-item" style="padding:0.75rem 1rem; border-bottom:1px solid #ECEFF1; font-size:0.8rem; cursor:pointer; background:${nt.read ? 'transparent' : 'rgba(198,40,40,0.03)'}; transition:var(--transition);" data-id="${nt.id}">
        <div style="font-weight:700; color:var(--text-dark); display:flex; justify-content:space-between;">
          <span>${nt.title}</span>
          <span style="font-size:0.65rem; color:var(--text-muted);">${nt.date}</span>
        </div>
        <p style="color:var(--text-medium); margin-top:2px; line-height:1.3;">${nt.message}</p>
      </div>
    `).join('') : '<div style="padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.8rem;">No notifications.</div>';

    document.querySelectorAll('.noti-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = item.getAttribute('data-id');
        window.BucklerDB.update('notifications', id, { read: true });
        els.notiDropdown.style.display = 'none';
        renderNotifications();
        
        const nt = userNotis.find(n => n.id === id);
        if (nt) {
          if (nt.title.includes('Job') || nt.title.includes('Schedule')) {
            switchTab('schedules');
          } else if (nt.title.includes('Complaint')) {
            switchTab('complaints');
          } else if (nt.title.includes('Message') || nt.title.includes('Channel')) {
            switchTab('messages');
          }
        }
      });
    });
  }

  // 8. Schedules Registry CRUD
  function renderSchedules() {
    renderShiftWidget();
    const region = getRestrictedRegion();
    const role = state.currentUser.role.toLowerCase();

    let targetRegion = els.filterScheduleRegion.value;
    let targetCity = els.filterScheduleCity.value;
    let targetClient = els.filterScheduleClient ? els.filterScheduleClient.value : 'All';
    
    let targetTLs = [];
    if (role === 'team leader') {
      targetTLs = [state.currentUser.id];
      els.filterScheduleTL.innerHTML = `<option value="${state.currentUser.id}" selected>${state.currentUser.name}</option>`;
      els.filterScheduleTL.disabled = true;
    } else {
      els.filterScheduleTL.disabled = false;
      targetTLs = Array.from(els.filterScheduleTL.selectedOptions).map(opt => opt.value);
      if (targetTLs.length === 0) {
        targetTLs = ['All'];
      }
    }
    
    const targetStatus = els.filterScheduleStatus.value;
    const targetDate = els.filterScheduleDate.value;
    const targetService = els.filterScheduleService ? els.filterScheduleService.value : 'All';
    const searchQuery = els.searchSchedule.value.toLowerCase();

    const schedules = window.BucklerDB.getSchedules(targetRegion, 'All');
    const clients = window.BucklerDB.get('clients');
    const users = window.BucklerDB.get('users');

    const filteredSchedules = schedules.filter(sch => {
      const client = clients.find(c => c.id === sch.clientId);
      const clientName = client ? client.name.toLowerCase() : '';
      const serviceName = sch.service.toLowerCase();

      const matchSearch = clientName.includes(searchQuery) || serviceName.includes(searchQuery);
      const matchStatus = targetStatus === 'All' ? true : sch.status === targetStatus;
      const matchDate = targetDate === '' ? true : sch.date === targetDate;
      const matchClient = targetClient === 'All' ? true : sch.clientId === targetClient;
      const matchCity = targetCity === 'All' ? true : sch.city === targetCity;
      const matchService = targetService === 'All' ? true : sch.service === targetService;

      const schTLs = sch.teamLeaderId ? sch.teamLeaderId.split(',').map(x => x.trim()) : [];
      const matchTL = targetTLs.includes('All') || schTLs.some(id => targetTLs.includes(id));

      return matchSearch && matchStatus && matchDate && matchClient && matchCity && matchService && matchTL;
    });

    filteredSchedules.sort((a, b) => new Date(b.date + 'T' + b.time) - new Date(a.date + 'T' + a.time));

    if (state.scheduleActiveView === 'calendar') {
      els.schedulesList.style.display = 'none';
      els.schedulesCalendar.style.display = 'block';
      els.calendarViewControls.style.display = 'flex';
      renderSchedulesCalendar(filteredSchedules);
      return;
    } else {
      els.schedulesList.style.display = 'block';
      els.schedulesCalendar.style.display = 'none';
      els.calendarViewControls.style.display = 'none';
    }

    els.schedulesList.innerHTML = filteredSchedules.length ? filteredSchedules.map(sch => {
      const client = clients.find(c => c.id === sch.clientId);
      const clientName = client ? client.name : 'Unknown Client';
      const address = client ? client.address : 'Unknown Address';
      
      const tlIds = sch.teamLeaderId ? sch.teamLeaderId.split(',').map(x => x.trim()) : [];
      const tlNames = tlIds.map(id => {
        const u = users.find(x => x.id === id);
        return u ? u.name : 'Unknown';
      }).join(', ');
      const tlName = tlNames || 'Unassigned';
      
      const dateObj = new Date(sch.date);
      const day = dateObj.getDate();
      const month = dateObj.toLocaleString('default', { month: 'short' });
      
      let statusClass = 'sch-status-scheduled';
      if (sch.status === 'Conducted') statusClass = 'sch-status-conducted';
      if (sch.status === 'Cancelled') statusClass = 'sch-status-cancelled';

      const isTL = role === 'team leader';
      const isSupervisor = role === 'tech supervisor';
      const isGM = role === 'gm';
      const canEdit = !isTL && !isSupervisor && !isGM;

      const isAssignedTL = sch.teamLeaderId && sch.teamLeaderId.split(',').map(x => x.trim()).includes(state.currentUser.id);

      let actionBtnHTML = '';
      if (sch.status === 'Scheduled' && isTL && isAssignedTL) {
        actionBtnHTML = `<button class="btn btn-primary btn-sm btn-log-visit" data-id="${sch.id}">Log Visit</button>`;
      } else if (sch.status === 'Conducted') {
        actionBtnHTML = `<button class="btn btn-secondary btn-sm btn-view-log" data-id="${sch.id}">View Log</button>`;
      } else if (sch.status === 'Scheduled' && canEdit) {
        actionBtnHTML = `
          <button class="btn btn-secondary btn-sm btn-edit-schedule" data-id="${sch.id}">Edit</button>
          <button class="btn btn-danger btn-sm btn-delete-schedule" data-id="${sch.id}">Delete</button>
        `;
      }

      return `
        <div class="schedule-strip-card">
          <div class="schedule-strip-main">
            <div class="schedule-strip-date">
              <span class="sch-day">${day}</span>
              <span class="sch-month">${month}</span>
              <span class="sch-time">${sch.time}</span>
            </div>
            <div class="schedule-strip-details">
              <!-- Clickable client details -->
              <span class="sch-client"><a href="#" class="client-click" data-id="${sch.clientId}" style="color:inherit; font-weight:700; text-decoration:none; border-bottom:1px dashed var(--text-muted);">${clientName}</a></span>
              <span style="font-size:0.8rem; color:var(--text-medium);">${address}</span>
              <span class="sch-service-tag">${sch.service}</span>
            </div>
          </div>
          <div class="schedule-strip-assignments">
            <div class="sch-assignment-block">
              <span class="sch-assignment-label">Team Leader</span>
              <span class="sch-assignment-val">${tlName}</span>
            </div>
            <div class="sch-assignment-block">
              <span class="sch-assignment-label">Region / City</span>
              <span class="badge-region badge-region-${sch.region.toLowerCase()}">${sch.region}</span>
              ${sch.city ? `<div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px; text-align:center;">${sch.city}</div>` : ''}
            </div>
            <div class="sch-assignment-block">
              <span class="sch-assignment-label">Status</span>
              <!-- Clickable Status Badge -->
              <span class="schedule-status-badge ${statusClass} status-badge-click" data-id="${sch.id}" style="cursor:pointer;">${sch.status}</span>
            </div>
            <div class="table-cell-actions">
              ${actionBtnHTML}
            </div>
          </div>
        </div>
      `;
    }).join('') : '<div style="padding:2rem; text-align:center; color:var(--text-muted); background: white; border-radius:10px;">No schedules found for the selected filters.</div>';

    // Hook events
    document.querySelectorAll('.btn-log-visit').forEach(b => {
      b.addEventListener('click', () => openOperationLogModal(b.getAttribute('data-id')));
    });

    document.querySelectorAll('.btn-view-log').forEach(b => {
      b.addEventListener('click', () => openViewLogModal(b.getAttribute('data-id')));
    });

    document.querySelectorAll('.btn-edit-schedule').forEach(b => {
      b.addEventListener('click', () => openScheduleModal(b.getAttribute('data-id')));
    });

    // Make status badge act as log trigger
    document.querySelectorAll('.status-badge-click').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-id');
        const sch = window.BucklerDB.get('schedules').find(s => s.id === id);
        const isAssignedTL = sch.teamLeaderId && sch.teamLeaderId.split(',').map(x => x.trim()).includes(state.currentUser.id);
        if (sch.status === 'Scheduled' && role === 'team leader' && isAssignedTL) {
          openOperationLogModal(id);
        } else if (sch.status === 'Conducted') {
          openViewLogModal(id);
        }
      });
    });

    document.querySelectorAll('.btn-delete-schedule').forEach(b => {
      b.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this schedule?')) {
          window.BucklerDB.delete('schedules', b.getAttribute('data-id'));
          showToast('Schedule deleted successfully', 'success');
          renderSchedules();
        }
      });
    });

    bindEntityClicks(els.schedulesList);
  }

  // --- CRM Calendar Scheduler & Filtering Helpers ---
  function shiftCalendarDate(direction) {
    const period = state.calendarPeriod;
    const date = new Date(state.calendarCurrentDate);
    if (period === 'Month') {
      date.setMonth(date.getMonth() + direction);
    } else if (period === 'Week') {
      date.setDate(date.getDate() + (direction * 7));
    } else if (period === 'Day') {
      date.setDate(date.getDate() + direction);
    }
    state.calendarCurrentDate = date;
    renderSchedules();
  }

  function populateScheduleClientFilter(selectedRegion) {
    let clients = window.BucklerDB.getClients(selectedRegion);
    const cityRestr = getRestrictedCity();
    if (cityRestr !== 'All') {
      clients = clients.filter(c => c.city === cityRestr);
    }
    const prevVal = els.filterScheduleClient.value;
    els.filterScheduleClient.innerHTML = `<option value="All">All Clients</option>` + clients.map(c => `
      <option value="${c.id}">${c.name}</option>
    `).join('');
    if (clients.some(c => c.id === prevVal)) {
      els.filterScheduleClient.value = prevVal;
    } else {
      els.filterScheduleClient.value = 'All';
    }
  }

  function setupCalendarEvents() {
    els.btnScheduleViewList.addEventListener('click', () => {
      state.scheduleActiveView = 'list';
      els.btnScheduleViewList.classList.add('active');
      els.btnScheduleViewCal.classList.remove('active');
      renderSchedules();
    });

    els.btnScheduleViewCal.addEventListener('click', () => {
      state.scheduleActiveView = 'calendar';
      els.btnScheduleViewCal.classList.add('active');
      els.btnScheduleViewList.classList.remove('active');
      renderSchedules();
    });

    els.calendarPeriod.addEventListener('change', (e) => {
      state.calendarPeriod = e.target.value;
      renderSchedules();
    });

    els.btnCalPrev.addEventListener('click', () => {
      shiftCalendarDate(-1);
    });

    els.btnCalNext.addEventListener('click', () => {
      shiftCalendarDate(1);
    });

    populateScheduleClientFilter(getRestrictedRegion());
  }

  function renderSchedulesCalendar(filteredSchedules) {
    const period = state.calendarPeriod;
    if (period === 'Month') {
      renderMonthView(filteredSchedules);
    } else if (period === 'Week') {
      renderWeekView(filteredSchedules);
    } else if (period === 'Day') {
      renderDayView(filteredSchedules);
    }
  }

  function getTeamLeaderStyle(tlId) {
    const colors = {
      'tl-faris': { bg: '#FFF5F5', text: '#C53030', border: '#FC8181' }, // Soft Red
      'tl-omar': { bg: '#EFF6FF', text: '#1E40AF', border: '#3B82F6' }, // Soft Blue
      'tl-karwan': { bg: '#F0FDF4', text: '#15803D', border: '#4ADE80' }, // Soft Green
      'tl-sherwan': { bg: '#FEF9C3', text: '#854D0E', border: '#FACC15' }, // Soft Yellow
      'tl-murtadha': { bg: '#FAF5FF', text: '#6B46C1', border: '#D8B4FE' }, // Soft Purple
      'tl-karrar': { bg: '#ECFEFF', text: '#0891B2', border: '#22D3EE' } // Soft Cyan
    };
    if (colors[tlId]) return colors[tlId];
    
    // Deterministic fallback for unknown team leader IDs
    let hash = 0;
    for (let i = 0; i < tlId.length; i++) {
      hash = tlId.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = Math.abs(hash % 360);
    return {
      bg: `hsl(${h}, 85%, 96%)`,
      text: `hsl(${h}, 75%, 35%)`,
      border: `hsl(${h}, 70%, 65%)`
    };
  }

  function getEventStatusStyle(status) {
    if (status === 'Conducted') {
      return { bg: '#EFF6FF', text: '#1E40AF', border: '#3B82F6' }; // Soft Blue
    } else if (status === 'Cancelled') {
      return { bg: '#F3F4F6', text: '#374151', border: '#D1D5DB' }; // Soft Gray
    } else { // 'Scheduled'
      return { bg: '#FEF2F2', text: '#991B1B', border: '#EF4444' }; // Soft Red
    }
  }

  function renderMonthView(filteredSchedules) {
    const year = state.calendarCurrentDate.getFullYear();
    const month = state.calendarCurrentDate.getMonth();
    
    const labelText = state.calendarCurrentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    els.calendarCurrentLabel.textContent = labelText;

    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const prevTotalDays = new Date(year, month, 0).getDate();

    let html = `
      <div class="calendar-grid-month">
        <div class="calendar-day-header">Sun</div>
        <div class="calendar-day-header">Mon</div>
        <div class="calendar-day-header">Tue</div>
        <div class="calendar-day-header">Wed</div>
        <div class="calendar-day-header">Thu</div>
        <div class="calendar-day-header">Fri</div>
        <div class="calendar-day-header">Sat</div>
    `;

    const clients = window.BucklerDB.get('clients');
    const todayStr = formatDateLocal(new Date('2026-06-04'));
    const isTL = state.currentUser.role.toLowerCase() === 'team leader';

    // Previous month cells
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const dayNum = prevTotalDays - i;
      html += `
        <div class="cal-day cal-day-prev-month">
          <div class="cal-day-number">${dayNum}</div>
        </div>
      `;
    }

    // Current month cells
    for (let d = 1; d <= totalDays; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const isToday = dateStr === todayStr;
      const daySchs = filteredSchedules.filter(s => s.date === dateStr);

      html += `
        <div class="cal-day ${isToday ? 'cal-day-today' : ''}" data-date="${dateStr}">
          <div class="cal-day-number">${d}</div>
          <div class="cal-events-container">
            ${daySchs.map(s => {
              const client = clients.find(c => c.id === s.clientId);
              const cName = client ? client.name : 'Unknown';
              const statusStyle = getEventStatusStyle(s.status);
              return `
                <div class="cal-event-pill" data-id="${s.id}" title="${s.time} - ${cName} (${s.status})" style="background-color: ${statusStyle.bg}; color: ${statusStyle.text}; border-left: 3px solid ${statusStyle.border};" ${isTL ? '' : 'draggable="true"'}>
                  ${s.time} ${cName}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // Next month cells
    const totalCells = firstDayIndex + totalDays;
    const finalCells = 42 - totalCells;
    
    for (let i = 1; i <= finalCells; i++) {
      html += `
        <div class="cal-day cal-day-next-month">
          <div class="cal-day-number">${i}</div>
        </div>
      `;
    }

    html += `</div>`;
    els.schedulesCalendar.innerHTML = html;

    // Attach click events
    els.schedulesCalendar.querySelectorAll('.cal-day').forEach(cell => {
      cell.addEventListener('click', (e) => {
        if (e.target.closest('.cal-event-pill')) return;
        const dateStr = cell.getAttribute('data-date');
        if (dateStr && !isTL) {
          openScheduleModal(null, dateStr);
        }
      });
    });

    els.schedulesCalendar.querySelectorAll('.cal-event-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = pill.getAttribute('data-id');
        const sch = filteredSchedules.find(s => s.id === id);
        if (sch) {
          if (sch.status === 'Conducted') {
            openViewLogModal(id);
          } else {
            if (isTL) {
              openOperationLogModal(id);
            } else {
              openScheduleModal(id);
            }
          }
        }
      });
    });

    // Drag and Drop
    if (!isTL) {
      els.schedulesCalendar.querySelectorAll('.cal-event-pill').forEach(pill => {
        pill.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', pill.getAttribute('data-id'));
          e.dataTransfer.effectAllowed = 'move';
        });
      });

      els.schedulesCalendar.querySelectorAll('.cal-day').forEach(cell => {
        cell.addEventListener('dragover', (e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
        });
        cell.addEventListener('drop', (e) => {
          e.preventDefault();
          const id = e.dataTransfer.getData('text/plain');
          const targetDate = cell.getAttribute('data-date');
          if (id && targetDate) {
            const success = window.BucklerDB.update('schedules', id, { date: targetDate });
            if (success) {
              showToast(`Rescheduled visit to ${targetDate}`, 'success');
              renderSchedules();
            }
          }
        });
      });
    }
  }

  function renderWeekView(filteredSchedules) {
    const startOfWeek = new Date(state.calendarCurrentDate);
    const dayOfWeek = startOfWeek.getDay();
    startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);

    const labelText = startOfWeek.toLocaleDateString('default', { month: 'short', day: 'numeric' }) + ' - ' + endOfWeek.toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' });
    els.calendarCurrentLabel.textContent = labelText;

    let html = `<div class="calendar-grid-week">`;
    const clients = window.BucklerDB.get('clients');
    const isTL = state.currentUser.role.toLowerCase() === 'team leader';

    for (let i = 0; i < 7; i++) {
      const colDate = new Date(startOfWeek);
      colDate.setDate(colDate.getDate() + i);
      const dateStr = formatDateLocal(colDate);
      const colDaySchs = filteredSchedules.filter(s => s.date === dateStr);
      const colLabel = colDate.toLocaleDateString('default', { weekday: 'short', month: 'short', day: 'numeric' });

      html += `
        <div class="cal-week-col">
          <div class="cal-week-header">${colLabel}</div>
          <div class="cal-week-body" data-date="${dateStr}">
            ${colDaySchs.map(s => {
              const client = clients.find(c => c.id === s.clientId);
              const cName = client ? client.name : 'Unknown';
              const statusStyle = getEventStatusStyle(s.status);
              return `
                <div class="cal-week-card" data-id="${s.id}" style="background-color: ${statusStyle.bg}; color: ${statusStyle.text}; border-left: 4px solid ${statusStyle.border};" ${isTL ? '' : 'draggable="true"'}>
                  <span class="cal-week-card-time" style="color: ${statusStyle.text}; opacity: 0.85;">⏰ ${s.time}</span>
                  <span class="cal-week-card-client" style="color: ${statusStyle.text}; font-weight: 700;">${cName}</span>
                  <span class="cal-week-card-service" style="color: ${statusStyle.text}; opacity: 0.8;">${s.service} (${s.status})</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    html += `</div>`;
    els.schedulesCalendar.innerHTML = html;

    // Attach click events
    els.schedulesCalendar.querySelectorAll('.cal-week-body').forEach(body => {
      body.addEventListener('click', (e) => {
        if (e.target.closest('.cal-week-card')) return;
        const dateStr = body.getAttribute('data-date');
        if (dateStr && !isTL) {
          openScheduleModal(null, dateStr);
        }
      });
    });

    els.schedulesCalendar.querySelectorAll('.cal-week-card').forEach(card => {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = card.getAttribute('data-id');
        const sch = filteredSchedules.find(s => s.id === id);
        if (sch) {
          if (sch.status === 'Conducted') {
            openViewLogModal(id);
          } else {
            if (isTL) {
              openOperationLogModal(id);
            } else {
              openScheduleModal(id);
            }
          }
        }
      });
    });

    // Drag and Drop
    if (!isTL) {
      els.schedulesCalendar.querySelectorAll('.cal-week-card').forEach(card => {
        card.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', card.getAttribute('data-id'));
          e.dataTransfer.effectAllowed = 'move';
        });
      });

      els.schedulesCalendar.querySelectorAll('.cal-week-body').forEach(body => {
        body.addEventListener('dragover', (e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
        });
        body.addEventListener('drop', (e) => {
          e.preventDefault();
          const id = e.dataTransfer.getData('text/plain');
          const targetDate = body.getAttribute('data-date');
          if (id && targetDate) {
            const success = window.BucklerDB.update('schedules', id, { date: targetDate });
            if (success) {
              showToast(`Rescheduled visit to ${targetDate}`, 'success');
              renderSchedules();
            }
          }
        });
      });
    }
  }

  function renderDayView(filteredSchedules) {
    const dateStr = formatDateLocal(state.calendarCurrentDate);
    const labelText = state.calendarCurrentDate.toLocaleDateString('default', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    els.calendarCurrentLabel.textContent = labelText;

    const daySchs = filteredSchedules.filter(s => s.date === dateStr);
    const clients = window.BucklerDB.get('clients');
    const users = window.BucklerDB.get('users');
    const isTL = state.currentUser.role.toLowerCase() === 'team leader';

    let html = `<div class="calendar-grid-day">`;

    for (let h = 8; h <= 18; h++) {
      const hhStr = String(h).padStart(2, '0');
      const timeStr = `${hhStr}:00`;
      const hourSchs = daySchs.filter(s => s.time.startsWith(`${hhStr}:`));

      html += `
        <div class="cal-day-row">
          <div class="cal-day-time-col">${timeStr}</div>
          <div class="cal-day-events-col" data-date="${dateStr}" data-time="${timeStr}">
            ${hourSchs.map(s => {
              const client = clients.find(c => c.id === s.clientId);
              const cName = client ? client.name : 'Unknown';
              const tlIds = s.teamLeaderId ? s.teamLeaderId.split(',').map(x => x.trim()) : [];
              const tlNames = tlIds.map(id => {
                const u = users.find(x => x.id === id);
                return u ? u.name : 'Unknown';
              }).join(', ');
              const tlName = tlNames || 'Unassigned';
              const statusStyle = getEventStatusStyle(s.status);
              return `
                <div class="cal-day-card" data-id="${s.id}" style="background-color: ${statusStyle.bg}; color: ${statusStyle.text}; border-left: 4px solid ${statusStyle.border};" ${isTL ? '' : 'draggable="true"'}>
                  <span class="cal-day-card-time" style="color: ${statusStyle.text}; opacity: 0.85;">⏰ ${s.time}</span>
                  <div class="cal-day-card-details">
                    <span class="cal-day-card-client" style="color: ${statusStyle.text}; font-weight: 700;">${cName}</span>
                    <span class="cal-day-card-service" style="color: ${statusStyle.text}; opacity: 0.8;">${s.service} (${s.status})</span>
                    <span class="cal-day-card-tl" style="color: ${statusStyle.text}; opacity: 0.7;">TL: ${tlName}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    html += `</div>`;
    els.schedulesCalendar.innerHTML = html;

    // Attach click events
    els.schedulesCalendar.querySelectorAll('.cal-day-events-col').forEach(col => {
      col.addEventListener('click', (e) => {
        if (e.target.closest('.cal-day-card')) return;
        const date = col.getAttribute('data-date');
        const time = col.getAttribute('data-time');
        if (date && !isTL) {
          openScheduleModal(null, date, time);
        }
      });
    });

    els.schedulesCalendar.querySelectorAll('.cal-day-card').forEach(card => {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = card.getAttribute('data-id');
        const sch = filteredSchedules.find(s => s.id === id);
        if (sch) {
          if (sch.status === 'Conducted') {
            openViewLogModal(id);
          } else {
            if (isTL) {
              openOperationLogModal(id);
            } else {
              openScheduleModal(id);
            }
          }
        }
      });
    });

    // Drag and Drop
    if (!isTL) {
      els.schedulesCalendar.querySelectorAll('.cal-day-card').forEach(card => {
        card.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', card.getAttribute('data-id'));
          e.dataTransfer.effectAllowed = 'move';
        });
      });

      els.schedulesCalendar.querySelectorAll('.cal-day-events-col').forEach(col => {
        col.addEventListener('dragover', (e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
        });
        col.addEventListener('drop', (e) => {
          e.preventDefault();
          const id = e.dataTransfer.getData('text/plain');
          const targetDate = col.getAttribute('data-date');
          const targetTime = col.getAttribute('data-time');
          if (id && targetDate) {
            const success = window.BucklerDB.update('schedules', id, { date: targetDate, time: targetTime });
            if (success) {
              showToast(`Rescheduled visit to ${targetDate} @ ${targetTime}`, 'success');
              renderSchedules();
            }
          }
        });
      });
    }
  }

  function populateTLFilterOptions(selectedRegion) {
    const tls = window.BucklerDB.getTeamLeaders(selectedRegion);
    els.filterScheduleTL.innerHTML = `<option value="All" selected>All Team Leaders</option>` + tls.map(t => `
      <option value="${t.id}">${t.name}</option>
    `).join('');
  }

  // 9. Clients CRUD
  function renderClients() {
    const region = getRestrictedRegion();
    const clients = window.BucklerDB.getClients(region);
    
    // Setup and render clients geographic map
    if (!state.selectedMapRegions) {
      setupClientMap();
    } else {
      renderClientMap();
    }
    
    // Support sidebar filter dropdown + search input
    const targetRegion = els.filterClientRegion.value;
    const targetCity = els.filterClientCity.value;
    const searchQuery = els.searchClient.value.toLowerCase();
    
    let filteredClients = clients;
    if (targetRegion !== 'All') {
      filteredClients = filteredClients.filter(c => c.region === targetRegion);
    }
    if (targetCity !== 'All') {
      filteredClients = filteredClients.filter(c => c.city === targetCity);
    }
    
    filteredClients = filteredClients.filter(c => 
      c.name.toLowerCase().includes(searchQuery) ||
      c.contact.toLowerCase().includes(searchQuery) ||
      c.address.toLowerCase().includes(searchQuery) ||
      (c.phone && c.phone.includes(searchQuery))
    );

    filteredClients.sort((a, b) => a.name.localeCompare(b.name));

    const canManage = hasEditPermission('clients');
    const sectorsData = window.BucklerDB.get('sectors');

    els.clientsTableBody.innerHTML = filteredClients.length ? filteredClients.map(c => {
      const sectorOptions = sectorsData.map(s => `
        <option value="${s.name}" ${c.sector === s.name ? 'selected' : ''}>${s.name}</option>
      `).join('');

      const sectorCell = canManage ? `
        <select class="client-sector-inline-select form-control" data-id="${c.id}" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; font-weight: 700; border: 1px solid var(--border-color); border-radius: var(--radius-sm); color: var(--text-dark); background-color: var(--card-bg); cursor: pointer; outline: none; transition: var(--transition); width: 100%; max-width: 140px;">
          <option value="" disabled ${!c.sector ? 'selected' : ''}>Select Sector</option>
          ${sectorOptions}
        </select>
      ` : `<span style="font-size:0.75rem; font-weight:700; color:var(--text-medium); background:#F1F5F9; padding:2px 8px; border-radius:4px; text-transform:uppercase;">${c.sector || 'N/A'}</span>`;

      const servicesInfo = (c.contractTypes || []).map(ct => {
        const v = c.serviceVisits && c.serviceVisits[ct] !== undefined ? c.serviceVisits[ct] : '';
        return `<span style="font-size:0.7rem; background:#EFF6FF; color:#1E40AF; border:1px solid #BFDBFE; padding:1px 5px; border-radius:3px; margin-right:3px; display:inline-block; white-space:nowrap; margin-top:2px;">${ct}${v !== '' ? ` (${v})` : ''}</span>`;
      }).join('') || '<span style="color:var(--text-muted); font-size:0.72rem;">No services</span>';

      return `
        <tr>
          <td><code>${c.clientCode || c.id}</code></td>
          <!-- Make client name actionable -->
          <td>
            <strong><a href="#" class="client-click" data-id="${c.id}" style="color:var(--primary-red); font-weight:700; text-decoration:none; border-bottom:1px dashed var(--primary-red);">${c.name}</a></strong>
            <div style="margin-top:4px; display:flex; flex-wrap:wrap; gap:2px; max-width:300px;">${servicesInfo}</div>
          </td>
          <td>${sectorCell}</td>
          <td>${c.contact}</td>
          <td>
            <span class="badge-region badge-region-${c.region.toLowerCase()}">${c.region}</span>
            ${c.city ? `<div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${c.city}</div>` : ''}
          </td>
          <td>${c.phone || '-'}</td>
          <td>${c.email}</td>
          <td><code>${c.lat && c.lng ? `${c.lat.toFixed(4)}, ${c.lng.toFixed(4)}` : 'N/A'}</code></td>
          <td>${c.address}</td>
          ${canManage ? `
            <td>
              <div class="table-cell-actions">
                <button class="btn btn-secondary btn-sm edit-client-btn" data-id="${c.id}">Edit</button>
                <button class="btn btn-danger btn-sm delete-client-btn" data-id="${c.id}">Delete</button>
              </div>
            </td>
          ` : '<td>-</td>'}
        </tr>
      `;
    }).join('') : `<tr><td colspan="10" style="text-align:center; color:var(--text-muted); padding:2rem;">No clients registered.</td></tr>`;

    document.querySelectorAll('.edit-client-btn').forEach(b => {
      b.addEventListener('click', () => openClientModal(b.getAttribute('data-id')));
    });
    
    document.querySelectorAll('.delete-client-btn').forEach(b => {
      b.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this client?')) {
          window.BucklerDB.delete('clients', b.getAttribute('data-id'));
          showToast('Client deleted', 'success');
          renderClients();
        }
      });
    });

    document.querySelectorAll('.client-sector-inline-select').forEach(select => {
      select.addEventListener('change', (e) => {
        const clientId = select.getAttribute('data-id');
        const newSector = e.target.value;
        const cl = window.BucklerDB.get('clients').find(item => item.id === clientId);
        if (cl) {
          window.BucklerDB.update('clients', clientId, { sector: newSector });
          showToast(`Updated ${cl.name} sector to "${newSector}"`, 'success');
          renderClients();
          if (state.activeTab === 'dashboard') {
            renderDashboard();
          }
        }
      });
    });

    bindEntityClicks(els.clientsTableBody);
    renderSectors();
    renderClientAnalysis();
  }

  els.searchClient.addEventListener('input', renderClients);

  // 10. Items/Inventory CRUD
  function renderItems() {
    const items = window.BucklerDB.getItems();
    const searchQuery = els.searchItem.value.toLowerCase();

    let filteredItems = items.filter(i => 
      i.name.toLowerCase().includes(searchQuery) ||
      (i.itemCode && i.itemCode.toLowerCase().includes(searchQuery))
    );

    filteredItems.sort((a, b) => a.name.localeCompare(b.name));

    const canManage = hasEditPermission('items');

    els.itemsTableBody.innerHTML = filteredItems.length ? filteredItems.map(i => `
      <tr>
        <!-- Make item name actionable to show ledger -->
        <td><strong><a href="#" class="item-ledger-click" data-id="${i.id}" style="color:var(--primary-red); font-weight:700; text-decoration:none; border-bottom:1px dashed var(--primary-red);">${i.name}</a></strong></td>
        <td><code>${i.itemCode || i.id}</code></td>
        <td><span style="font-size:0.75rem; font-weight:700; color:var(--text-medium); background:#F1F5F9; padding:2px 8px; border-radius:4px;">${i.category || 'Others'}</span></td>
        <td>${i.unit}</td>
        ${canManage ? `
          <td>
            <div class="table-cell-actions">
              <button class="btn btn-secondary btn-sm edit-item-btn" data-id="${i.id}">Edit</button>
              <button class="btn btn-danger btn-sm delete-item-btn" data-id="${i.id}">Delete</button>
            </div>
          </td>
        ` : '<td>-</td>'}
      </tr>
    `).join('') : `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:2rem;">No products registered in inventory.</td></tr>`;

    document.querySelectorAll('.edit-item-btn').forEach(b => {
      b.addEventListener('click', () => openItemModal(b.getAttribute('data-id')));
    });
    
    document.querySelectorAll('.delete-item-btn').forEach(b => {
      b.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this product?')) {
          window.BucklerDB.delete('items', b.getAttribute('data-id'));
          showToast('Product deleted', 'success');
          renderItems();
        }
      });
    });

    document.querySelectorAll('.item-ledger-click').forEach(b => {
      b.addEventListener('click', (e) => {
        e.preventDefault();
        openItemLedgerModal(b.getAttribute('data-id'));
      });
    });

    bindEntityClicks(els.itemsTableBody);
  }

  els.searchItem.addEventListener('input', renderItems);

  function openItemLedgerModal(itemId) {
    const item = window.BucklerDB.get('items').find(i => i.id === itemId);
    if (!item) return;

    const logs = window.BucklerDB.get('operationLogs');
    const schedules = window.BucklerDB.get('schedules');
    const clients = window.BucklerDB.get('clients');
    const users = window.BucklerDB.get('users');

    const ledgerEntries = [];
    logs.forEach(log => {
      const consumed = log.itemsConsumed ? log.itemsConsumed.find(c => c.itemId === itemId) : null;
      if (consumed) {
        const sched = schedules.find(s => s.id === log.scheduleId);
        const client = clients.find(c => c.id === log.clientId);
        const tl = sched ? users.find(u => u.id === sched.teamLeaderId) : null;
        ledgerEntries.push({
          clientName: client ? client.name : 'Unknown Client',
          region: client ? client.region : 'N/A',
          city: client ? client.city : 'N/A',
          date: log.dateConducted || (sched ? sched.date : 'N/A'),
          teamLeader: tl ? tl.name : 'N/A',
          qty: consumed.qty
        });
      }
    });

    ledgerEntries.sort((a, b) => a.clientName.localeCompare(b.clientName));

    let html = `
      <div id="item-ledger-modal" style="display:flex; flex-direction:column; gap:1rem; max-width:600px; width:100%;">
        <div style="background:#F8FAFC; padding:1rem; border-radius:8px; border:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; gap:1rem;">
          <div>
            <strong style="font-size:1.1rem; color:var(--text-dark);">${item.name}</strong>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-top:2px;">Item Code: <code>${item.itemCode || item.id}</code> | Unit: ${item.unit}</div>
          </div>
        </div>
        
        <h4 style="font-size:0.9rem; font-weight:700; color:var(--text-dark); margin-bottom:-0.25rem;">Client Consumption History</h4>
        <div class="table-wrapper" style="max-height: 250px; overflow-y: auto; border: 1px solid var(--border-color); border-radius: 4px;">
          <table class="data-table" style="font-size:0.8rem; margin:0; width:100%;">
            <thead>
              <tr style="position: sticky; top: 0; background: #F8FAFC; z-index: 10; box-shadow: inset 0 -1px 0 var(--border-color);">
                <th>Client Name</th>
                <th>Region / City</th>
                <th>Date Consumed</th>
                <th>Team Leader</th>
                <th style="text-align:right;">Qty Used</th>
              </tr>
            </thead>
            <tbody>
              ${ledgerEntries.length ? ledgerEntries.map(e => `
                <tr>
                  <td><strong>${e.clientName}</strong></td>
                  <td>
                    <span class="badge-region badge-region-${e.region.toLowerCase()}">${e.region}</span>
                    <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${e.city}</div>
                  </td>
                  <td>${e.date}</td>
                  <td>${e.teamLeader}</td>
                  <td style="text-align:right; font-weight:700; color:var(--primary-red);">${e.qty}</td>
                </tr>
              `).join('') : `
                <tr>
                  <td colspan="5" style="text-align:center; color:var(--text-muted); padding:2rem;">No consumption logs found for this product.</td>
                </tr>
              `}
            </tbody>
          </table>
        </div>
      </div>
    `;

    showModal('Product Consumption Ledger Source', html, false);
  }

  // 11. Complaints Tracker Registry
  function renderComplaints() {
    const region = getRestrictedRegion();
    const complaints = window.BucklerDB.getComplaints(region);
    
    const targetRegion = els.filterComplaintRegion.value;
    const targetCity = els.filterComplaintCity.value;
    const severityFilter = els.filterComplaintSeverity.value;
    const statusFilter = els.filterComplaintStatus.value;
    const searchQuery = els.searchComplaint.value.toLowerCase();

    let filtered = complaints;
    if (state.currentUser.role.toLowerCase() === 'team leader') {
      filtered = filtered.filter(c => c.assignedStaffId === state.currentUser.id);
    }
    if (targetRegion !== 'All') {
      filtered = filtered.filter(c => c.region === targetRegion);
    }
    if (targetCity !== 'All') {
      filtered = filtered.filter(c => c.city === targetCity);
    }

    filtered = filtered.filter(cmp => {
      const client = window.BucklerDB.get('clients').find(c => c.id === cmp.clientId);
      const clientName = client ? client.name.toLowerCase() : '';
      const textMatch = cmp.complainantName.toLowerCase().includes(searchQuery) ||
                        cmp.details.toLowerCase().includes(searchQuery) ||
                        clientName.includes(searchQuery);

      const severityMatch = severityFilter === 'All' ? true : cmp.severity === severityFilter;
      const statusMatch = statusFilter === 'All' ? true : cmp.status === statusFilter;

      return textMatch && severityMatch && statusMatch;
    });

    const isTL = state.currentUser.role.toLowerCase() === 'team leader';
    const canManage = hasEditPermission('complaints');

    els.complaintsTableBody.innerHTML = filtered.length ? filtered.map(cmp => {
      const client = window.BucklerDB.get('clients').find(c => c.id === cmp.clientId);
      const clientName = client ? client.name : 'Direct Complaint';
      
      const users = window.BucklerDB.get('users');
      const staff = users.find(u => u.id === cmp.assignedStaffId);
      const staffName = staff ? staff.name : 'Unassigned';

      let sevClass = 'badge-region-central';
      if (cmp.severity === 'Medium') sevClass = 'badge-region-kurdistan';
      if (cmp.severity === 'Low') sevClass = 'badge-region-south';

      let statusClass = 'sch-status-scheduled';
      if (cmp.status === 'In Progress') statusClass = 'badge-region-kurdistan';
      if (cmp.status === 'Resolved') statusClass = 'sch-status-conducted';

      return `
        <tr>
          <!-- Complainant Name is actionable -->
          <td><strong><a href="#" class="complaint-click" data-id="${cmp.id}" style="color:var(--primary-red); font-weight:700; text-decoration:none; border-bottom:1px dashed var(--primary-red);">${cmp.complainantName}</a></strong><br/><span style="font-size:0.75rem; color:var(--text-muted);">${cmp.phone}</span></td>
          <!-- Client name is actionable -->
          <td><a href="#" class="client-click" data-id="${cmp.clientId}" style="color:inherit; font-weight:600; text-decoration:none; border-bottom:1px dashed var(--text-muted);">${clientName}</a></td>
          <td>
            <span class="badge-region badge-region-${cmp.region.toLowerCase()}">${cmp.region}</span>
            ${cmp.city ? `<div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${cmp.city}</div>` : ''}
          </td>
          <td><span class="badge-region ${sevClass}">${cmp.severity}</span></td>
          <td><span class="schedule-status-badge ${statusClass}">${cmp.status}</span></td>
          <td style="max-width:240px; white-space:normal; font-size:0.8rem; color:var(--text-medium);">${cmp.details} ${cmp.resolutionDetails ? `<br/><strong style="color:var(--success-green);">Res:</strong> ${cmp.resolutionDetails}` : ''}</td>
          <!-- Assigned staff is actionable -->
          <td><a href="#" class="user-click" data-id="${cmp.assignedStaffId}" style="color:inherit; font-weight:600; text-decoration:none; border-bottom:1px dashed var(--text-muted);">${staffName}</a></td>
          <td>${cmp.dateSubmitted}</td>
          <td>
            <div class="table-cell-actions">
              ${canManage ? `
                <button class="btn btn-secondary btn-sm edit-complaint-btn" data-id="${cmp.id}">Edit</button>
              ` : ''}
              ${!isTL && cmp.status !== 'Resolved' ? `
                <button class="btn btn-primary btn-sm resolve-complaint-btn" data-id="${cmp.id}">Resolve</button>
              ` : ''}
              ${canManage ? `
                <button class="btn btn-danger btn-sm delete-complaint-btn" data-id="${cmp.id}">Delete</button>
              ` : ''}
            </div>
          </td>
        </tr>
      `;
    }).join('') : `<tr><td colspan="9" style="text-align:center; color:var(--text-muted); padding:2rem;">No customer complaints recorded.</td></tr>`;

    document.querySelectorAll('.edit-complaint-btn').forEach(b => {
      b.addEventListener('click', () => openComplaintModal(b.getAttribute('data-id')));
    });
    
    document.querySelectorAll('.resolve-complaint-btn').forEach(b => {
      b.addEventListener('click', () => openResolveComplaintModal(b.getAttribute('data-id')));
    });

    document.querySelectorAll('.delete-complaint-btn').forEach(b => {
      b.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this complaint record?')) {
          window.BucklerDB.delete('complaints', b.getAttribute('data-id'));
          showToast('Complaint record deleted', 'success');
          renderComplaints();
        }
      });
    });

    bindEntityClicks(els.complaintsTableBody);
  }

  // 12. Users Registry CRUD
  function renderUsers() {
    const region = getRestrictedRegion();
    const users = window.BucklerDB.get('users');
    
    const targetRegion = els.filterUserRegion.value;
    const targetCity = els.filterUserCity.value;
    const targetRole = els.filterUserRole.value;
    const searchQuery = els.searchUser.value.toLowerCase();

    let filteredUsers = users;
    if (targetRegion !== 'All') {
      filteredUsers = filteredUsers.filter(u => u.region === targetRegion);
    }
    if (targetCity !== 'All') {
      filteredUsers = filteredUsers.filter(u => u.city === targetCity);
    }
    if (targetRole !== 'All') {
      filteredUsers = filteredUsers.filter(u => u.role === targetRole);
    }

    filteredUsers = filteredUsers.filter(u => 
      u.name.toLowerCase().includes(searchQuery) ||
      u.role.toLowerCase().includes(searchQuery) ||
      u.email.toLowerCase().includes(searchQuery)
    );

    const canManage = hasEditPermission('users');

    els.usersTableBody.innerHTML = filteredUsers.map(u => `
      <tr>
        <td>
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <div class="avatar-circle" style="width:28px; height:28px; font-size:0.75rem;">${u.name.split(' ').map(n => n[0]).join('')}</div>
            <!-- Make user name actionable -->
            <strong><a href="#" class="user-click" data-id="${u.id}" style="color:var(--primary-red); font-weight:700; text-decoration:none; border-bottom:1px dashed var(--primary-red);">${u.name}</a></strong>
          </div>
        </td>
        <td style="text-transform: capitalize;">${u.role}</td>
        <td>
          <span class="badge-region badge-region-${u.region.toLowerCase()}">${u.region}</span>
          ${u.city ? `<div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${u.city}</div>` : ''}
        </td>
        <td>${u.email}</td>
        ${canManage ? `
          <td>
            <div class="table-cell-actions">
              <button class="btn btn-secondary btn-sm edit-user-btn" data-id="${u.id}">Edit</button>
              <button class="btn btn-danger btn-sm delete-user-btn" data-id="${u.id}">Delete</button>
            </div>
          </td>
        ` : '<td>-</td>'}
      </tr>
    `).join('');

    document.querySelectorAll('.edit-user-btn').forEach(b => {
      b.addEventListener('click', () => openUserModal(b.getAttribute('data-id')));
    });
    
    document.querySelectorAll('.delete-user-btn').forEach(b => {
      b.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this user?')) {
          window.BucklerDB.delete('users', b.getAttribute('data-id'));
          showToast('User deleted', 'success');
          setupRoleSelector();
          renderUsers();
        }
      });
    });

    bindEntityClicks(els.usersTableBody);
    renderSectors();
  }

  // Vehicles Fleet Registry Management
  function renderVehicles() {
    const vehicles = window.BucklerDB.get('vehicles');
    const users = window.BucklerDB.get('users');
    const tls = users.filter(u => u.role.toLowerCase() === 'team leader');
    
    // Populate filter-vehicle-tl if it's empty or out of date
    const tlFilter = document.getElementById('filter-vehicle-tl');
    if (tlFilter) {
      const currentVal = tlFilter.value;
      let tlHTML = '<option value="All">All Team Leaders</option>';
      tls.forEach(t => {
        tlHTML += `<option value="${t.id}">${t.name}</option>`;
      });
      tlFilter.innerHTML = tlHTML;
      tlFilter.value = currentVal || 'All';
    }

    const searchQuery = (document.getElementById('search-vehicle')?.value || '').toLowerCase();
    const filterRegion = document.getElementById('filter-vehicle-region')?.value || 'All';
    const filterTl = document.getElementById('filter-vehicle-tl')?.value || 'All';

    let filtered = vehicles;

    if (filterRegion !== 'All') {
      filtered = filtered.filter(v => v.region === filterRegion);
    }
    if (filterTl !== 'All') {
      filtered = filtered.filter(v => v.teamLeaderId === filterTl);
    }

    if (searchQuery) {
      filtered = filtered.filter(v => 
        (v.type || '').toLowerCase().includes(searchQuery) ||
        (v.model || '').toLowerCase().includes(searchQuery) ||
        (v.plateNo || '').toLowerCase().includes(searchQuery)
      );
    }

    const tableBody = document.getElementById('vehicles-table-body');
    if (!tableBody) return;

    const canManage = ['gm', 'admin coordinator', 'operations manager', 'tech manager'].includes(state.currentUser.role.toLowerCase());

    tableBody.innerHTML = filtered.length ? filtered.map(v => {
      const tl = users.find(u => u.id === v.teamLeaderId);
      const tlName = tl ? tl.name : '<span style="color:var(--text-muted); font-style:italic;">Unassigned</span>';
      return `
        <tr>
          <td><strong>${v.type}</strong></td>
          <td>${v.model}</td>
          <td><code>${v.plateNo}</code></td>
          <td><span class="badge-region badge-region-${v.region.toLowerCase()}">${v.region}</span></td>
          <td>${tlName}</td>
          ${canManage ? `
            <td>
              <div class="table-cell-actions">
                <button class="btn btn-secondary btn-sm edit-vehicle-btn" data-id="${v.id}">Edit</button>
                <button class="btn btn-danger btn-sm delete-vehicle-btn" data-id="${v.id}">Delete</button>
              </div>
            </td>
          ` : '<td>-</td>'}
        </tr>
      `;
    }).join('') : `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:1.5rem;">No vehicles found.</td></tr>`;

    // Hook vehicle buttons
    tableBody.querySelectorAll('.edit-vehicle-btn').forEach(b => {
      b.addEventListener('click', () => openVehicleModal(b.getAttribute('data-id')));
    });

    tableBody.querySelectorAll('.delete-vehicle-btn').forEach(b => {
      b.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this vehicle record?')) {
          const vehId = b.getAttribute('data-id');
          const veh = window.BucklerDB.get('vehicles').find(v => v.id === vehId);
          if (veh && veh.teamLeaderId) {
            window.BucklerDB.update('users', veh.teamLeaderId, {
              vehicleType: '',
              vehicleModel: '',
              vehiclePlateNo: ''
            });
          }
          window.BucklerDB.delete('vehicles', vehId);
          showToast('Vehicle deleted successfully', 'success');
          renderVehicles();
          renderUsers();
        }
      });
    });
  }

  function openVehicleModal(id = null) {
    const isEdit = !!id;
    state.editingRecord = { entity: 'vehicles', id: id };
    const vehicle = isEdit ? window.BucklerDB.get('vehicles').find(v => v.id === id) : null;

    const regionOptions = ['Central', 'Kurdistan', 'South'].map(r => `
      <option value="${r}" ${vehicle && vehicle.region === r ? 'selected' : ''}>${r}</option>
    `).join('');

    const tls = window.BucklerDB.get('users').filter(u => u.role.toLowerCase() === 'team leader');
    const tlOptions = `<option value="">-- Unassigned --</option>` + tls.map(t => `
      <option value="${t.id}" ${vehicle && vehicle.teamLeaderId === t.id ? 'selected' : ''}>${t.name} (${t.region})</option>
    `).join('');

    const html = `
      <form id="vehicle-form">
        <div class="form-group">
          <label for="veh-modal-type">Vehicle Type *</label>
          <input type="text" id="veh-modal-type" class="form-control" value="${vehicle ? vehicle.type : ''}" placeholder="e.g. Toyota Hilux" required />
        </div>
        <div class="form-group row-split">
          <div>
            <label for="veh-modal-model">Vehicle Model *</label>
            <input type="text" id="veh-modal-model" class="form-control" value="${vehicle ? vehicle.model : ''}" placeholder="e.g. 2024" required />
          </div>
          <div>
            <label for="veh-modal-plateno">Plate No. *</label>
            <input type="text" id="veh-modal-plateno" class="form-control" value="${vehicle ? vehicle.plateNo : ''}" placeholder="e.g. A-10293 Baghdad" required />
          </div>
        </div>
        <div class="form-group row-split">
          <div>
            <label for="veh-modal-region">Region *</label>
            <select id="veh-modal-region" class="form-control" required>
              ${regionOptions}
            </select>
          </div>
          <div>
            <label for="veh-modal-tl">Allocated Team Leader</label>
            <select id="veh-modal-tl" class="form-control">
              ${tlOptions}
            </select>
          </div>
        </div>
      </form>
    `;

    showModal(isEdit ? 'Edit Vehicle Details' : 'Log New Vehicle', html);
  }

  // --- UV Machine Sales Registry ---
  function populateUvSalesFilters() {
    const region = els.filterUvRegion.value;
    const cityRestr = getRestrictedCity();
    let clients = window.BucklerDB.getClients(region);
    if (cityRestr !== 'All') {
      clients = clients.filter(c => c.city === cityRestr);
    }
    const prevClient = els.filterUvClient.value;
    els.filterUvClient.innerHTML = `<option value="All">All Clients</option>` + clients.map(c => `
      <option value="${c.id}">${c.name}</option>
    `).join('');
    if (clients.some(c => c.id === prevClient)) {
      els.filterUvClient.value = prevClient;
    } else {
      els.filterUvClient.value = 'All';
    }

    const items = window.BucklerDB.get('items');
    const uvItems = items.filter(i => i.id.includes('uv') || i.name.toLowerCase().includes('uv'));
    const prevType = els.filterUvType.value;
    els.filterUvType.innerHTML = `<option value="All">All Machine Types</option>` + uvItems.map(i => `
      <option value="${i.id}">${i.name}</option>
    `).join('');
    if (uvItems.some(i => i.id === prevType)) {
      els.filterUvType.value = prevType;
    } else {
      els.filterUvType.value = 'All';
    }

    let tls = window.BucklerDB.getTeamLeaders(region);
    if (cityRestr !== 'All') {
      tls = tls.filter(t => t.city === cityRestr);
    }
    const prevTl = els.filterUvTl.value;
    els.filterUvTl.innerHTML = `<option value="All">All Team Leaders</option>` + tls.map(t => `
      <option value="${t.id}">${t.name}</option>
    `).join('');
    if (tls.some(t => t.id === prevTl)) {
      els.filterUvTl.value = prevTl;
    } else {
      els.filterUvTl.value = 'All';
    }
  }

  function setupUvSalesEvents() {
    els.filterUvRegion.addEventListener('change', () => {
      populateUvSalesFilters();
      renderUVSales();
    });

    const updateUvFilters = () => renderUVSales();
    els.filterUvClient.addEventListener('change', updateUvFilters);
    els.filterUvType.addEventListener('change', updateUvFilters);
    els.filterUvTl.addEventListener('change', updateUvFilters);

    els.btnClearUvFilters.addEventListener('click', () => {
      if (getRestrictedRegion() === 'All') {
        els.filterUvRegion.value = 'All';
      }
      if (getRestrictedCity() === 'All') {
        els.filterUvCity.value = 'All';
      }
      populateUvSalesFilters();
      els.filterUvClient.value = 'All';
      els.filterUvType.value = 'All';
      els.filterUvTl.value = 'All';
      renderUVSales();
    });
  }

  function renderUVSales() {
    if (els.filterUvClient.options.length <= 1) {
      populateUvSalesFilters();
    }

    const region = els.filterUvRegion.value;
    const targetCity = els.filterUvCity.value;
    const clientId = els.filterUvClient.value;
    const uvTypeId = els.filterUvType.value;
    const tlId = els.filterUvTl.value;

    const logs = window.BucklerDB.get('operationLogs');
    const schedules = window.BucklerDB.get('schedules');
    const clients = window.BucklerDB.get('clients');
    const users = window.BucklerDB.get('users');
    const items = window.BucklerDB.get('items');

    const sales = [];
    logs.forEach(log => {
      if (!log.itemsConsumed) return;
      log.itemsConsumed.forEach(cons => {
        const item = items.find(i => i.id === cons.itemId);
        if (item && (item.id.includes('uv') || item.name.toLowerCase().includes('uv'))) {
          const sched = schedules.find(s => s.id === log.scheduleId);
          const client = clients.find(c => c.id === log.clientId);
          const tl = sched ? users.find(u => u.id === sched.teamLeaderId) : null;

          sales.push({
            clientName: client ? client.name : 'Unknown Client',
            clientId: client ? client.id : '',
            region: client ? client.region : 'N/A',
            city: client ? client.city : 'N/A',
            machineModel: item.name,
            machineId: item.id,
            date: log.dateConducted || (sched ? sched.date : 'N/A'),
            teamLeaderName: tl ? tl.name : 'Unassigned',
            teamLeaderId: tl ? tl.id : '',
            qty: cons.qty
          });
        }
      });
    });

    let filteredSales = sales;
    if (region !== 'All') {
      filteredSales = filteredSales.filter(s => s.region === region);
    }
    if (targetCity !== 'All') {
      filteredSales = filteredSales.filter(s => s.city === targetCity);
    }
    if (clientId !== 'All') {
      filteredSales = filteredSales.filter(s => s.clientId === clientId);
    }
    if (uvTypeId !== 'All') {
      filteredSales = filteredSales.filter(s => s.machineId === uvTypeId);
    }
    if (tlId !== 'All') {
      filteredSales = filteredSales.filter(s => s.teamLeaderId === tlId);
    }

    filteredSales.sort((a, b) => new Date(b.date) - new Date(a.date));

    els.uvSalesTableBody.innerHTML = filteredSales.length ? filteredSales.map(s => `
      <tr>
        <td><strong><a href="#" class="client-click" data-id="${s.clientId}" style="color:var(--primary-red); font-weight:700; text-decoration:none; border-bottom:1px dashed var(--primary-red);">${s.clientName}</a></strong></td>
        <td>
          <span class="badge-region badge-region-${s.region.toLowerCase()}">${s.region}</span>
          ${s.city ? `<div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${s.city}</div>` : ''}
        </td>
        <td>${s.machineModel}</td>
        <td>${s.date}</td>
        <td><a href="#" class="user-click" data-id="${s.teamLeaderId}" style="color:inherit; font-weight:600; text-decoration:none; border-bottom:1px dashed var(--text-muted);">${s.teamLeaderName}</a></td>
        <td style="font-weight: 700; color: var(--primary-red);">${s.qty}</td>
      </tr>
    `).join('') : `
      <tr>
        <td colspan="6" style="text-align:center; color:var(--text-muted); padding:2rem;">No UV machine sales recorded.</td>
      </tr>
    `;

    bindEntityClicks(els.uvSalesTableBody);

    if (state.charts.uvSales) {
      state.charts.uvSales.destroy();
    }
    if (state.charts.uvSalesRegion) {
      state.charts.uvSalesRegion.destroy();
    }

    if (filteredSales.length > 0) {
      els.uvSalesVisualContainer.style.display = 'block';

      const uniqueDates = Array.from(new Set(filteredSales.map(s => s.date))).sort((a, b) => new Date(a) - new Date(b));
      const uniqueModels = Array.from(new Set(filteredSales.map(s => s.machineModel)));

      const colors = [
        '#C62828',
        '#1E40AF',
        '#F59E0B',
        '#10B981',
        '#8B5CF6'
      ];

      const datasets = uniqueModels.map((model, idx) => {
        const color = colors[idx % colors.length];
        const data = uniqueDates.map(date => {
          const matching = filteredSales.filter(s => s.date === date && s.machineModel === model);
          return matching.reduce((sum, s) => sum + s.qty, 0);
        });

        return {
          label: model,
          data: data,
          backgroundColor: color,
          borderRadius: 4
        };
      });

      const ctx = els.uvSalesChart.getContext('2d');
      state.charts.uvSales = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: uniqueDates,
          datasets: datasets
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          onClick: (event, elements, chart) => {
            if (!elements || !elements.length) return;
            const activeElement = elements[0];
            const date = chart.data.labels[activeElement.index];
            const datasetLabel = chart.data.datasets[activeElement.datasetIndex].label;
            
            const filtered = filteredSales.filter(s => s.date === date && s.machineModel === datasetLabel);
            const rows = filtered.map(s => [
              s.date,
              s.clientName,
              s.machineModel,
              s.qty,
              s.teamLeaderName
            ]);
            showDetailTableModal(`UV Machine Sales Detail - ${date} (${datasetLabel})`, ['Date', 'Client', 'Model', 'Qty Sold', 'Team Leader'], rows);
          },
          scales: {
            x: { grid: { display: false } },
            y: { beginAtZero: true, ticks: { precision: 0 } }
          },
          plugins: {
            legend: { position: 'top' }
          }
        }
      });

      if (els.uvSalesRegionChart) {
        const regionCounts = { 'Central': 0, 'Kurdistan': 0, 'South': 0 };
        filteredSales.forEach(s => {
          if (regionCounts[s.region] !== undefined) {
            regionCounts[s.region] += s.qty;
          }
        });

        const regLabels = Object.keys(regionCounts);
        const regValues = Object.values(regionCounts);

        const activeRegIdx = regValues.map((c, i) => c > 0 ? i : -1).filter(i => i !== -1);
        const activeRegLabels = activeRegIdx.map(i => regLabels[i]);
        const activeRegValues = activeRegIdx.map(i => regValues[i]);

        const ctxRegion = els.uvSalesRegionChart.getContext('2d');
        state.charts.uvSalesRegion = new Chart(ctxRegion, {
          type: 'doughnut',
          data: {
            labels: activeRegLabels.length ? activeRegLabels : ['No Regional Sales'],
            datasets: [{
              data: activeRegValues.length ? activeRegValues : [1],
              backgroundColor: ['#C62828', '#3B82F6', '#10B981'],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (event, elements, chart) => {
              if (!elements || !elements.length) return;
              const label = chart.data.labels[elements[0].index];
              if (label === 'No Regional Sales') return;
              
              const filtered = filteredSales.filter(s => s.region === label);
              const rows = filtered.map(s => [
                s.date,
                s.clientName,
                s.machineModel,
                s.qty,
                s.teamLeaderName
              ]);
              showDetailTableModal(`UV Machine Sales Detail - Region: ${label}`, ['Date', 'Client', 'Model', 'Qty Sold', 'Team Leader'], rows);
            },
            plugins: {
              legend: { position: 'right', labels: { font: { size: 9 } } }
            }
          }
        });
      }
    } else {
      els.uvSalesVisualContainer.style.display = 'none';
    }
  }

  // 13. Dynamic Modals Open templates
  function setupModalEvents() {
    const closeModal = () => {
      els.modalBackdrop.style.display = 'none';
      state.editingRecord = null;
      const modalElement = els.modalBackdrop.querySelector('.modal');
      if (modalElement) {
        modalElement.classList.remove('modal-lg', 'modal-xl');
      }
    };
    els.modalCloseBtn.addEventListener('click', closeModal);
    els.modalCancelBtn.addEventListener('click', closeModal);
    
    els.modalSaveBtn.addEventListener('click', () => {
      if (state.editingRecord) {
        handleModalSubmit(state.editingRecord.entity, state.editingRecord.id);
      }
    });
  }

  function showModal(title, bodyHTML, showSave = true, sizeClass = '') {
    els.modalTitle.textContent = title;
    els.modalBody.innerHTML = bodyHTML;
    
    const modalElement = els.modalBackdrop.querySelector('.modal');
    if (modalElement) {
      modalElement.classList.remove('modal-lg', 'modal-xl');
      if (sizeClass) {
        modalElement.classList.add(sizeClass);
      }
    }

    els.modalBackdrop.style.display = 'flex';
    if (showSave) {
      els.modalSaveBtn.style.display = 'inline-flex';
    } else {
      els.modalSaveBtn.style.display = 'none';
    }
  }

  // Schedule Modal
  function openScheduleModal(id = null, prefillDate = null, prefillTime = null) {
    const isEdit = !!id;
    state.editingRecord = { entity: 'schedules', id: id };
    
    const dbSchedules = window.BucklerDB.get('schedules');
    const schedule = isEdit ? dbSchedules.find(s => s.id === id) : null;
    
    const regionRestr = getRestrictedRegion();
    const cityRestr = getRestrictedCity();
    let clients = window.BucklerDB.getClients(regionRestr);
    if (cityRestr !== 'All') {
      clients = clients.filter(c => c.city === cityRestr);
    }
    const services = window.BucklerDB.get('services');
    
    const initialRegion = schedule ? schedule.region : (clients.length > 0 ? clients[0].region : (regionRestr !== 'All' ? regionRestr : 'Central'));
    const initialCity = schedule ? schedule.city : (clients.length > 0 ? clients[0].city : '');
    const cityOptions = getCityOptions(initialRegion, initialCity, false);
    let tls = window.BucklerDB.getTeamLeaders(initialRegion);
    if (cityRestr !== 'All') {
      tls = tls.filter(t => t.city === cityRestr);
    }

    const clientOptions = clients.map(c => `
      <option value="${c.id}" ${schedule && schedule.clientId === c.id ? 'selected' : ''}>${c.name} (${c.region})</option>
    `).join('');

    const serviceOptions = services.map(s => `
      <option value="${s}" ${schedule && schedule.service === s ? 'selected' : ''}>${s.charAt(0).toUpperCase() + s.slice(1)}</option>
    `).join('');

    const assignedTLs = schedule && schedule.teamLeaderId ? schedule.teamLeaderId.split(',').map(x => x.trim()) : [];
    const tlOptions = tls.map(t => `
      <option value="${t.id}" ${assignedTLs.includes(t.id) ? 'selected' : ''}>${t.name}</option>
    `).join('');

    const regionOptions = getRegionOptions(initialRegion, false);

    const dateVal = schedule ? schedule.date : (prefillDate ? prefillDate : formatDateLocal(new Date()));
    const timeVal = schedule ? schedule.time : (prefillTime ? prefillTime : '09:00');

    const html = `
      <form id="schedule-form">
        <div class="form-group row-split">
          <div>
            <label for="sch-modal-client">Client *</label>
            <select id="sch-modal-client" class="form-control" required>
              ${clientOptions}
            </select>
          </div>
          <div>
            <label for="sch-modal-service">Service Category *</label>
            <select id="sch-modal-service" class="form-control" required>
              ${serviceOptions}
            </select>
          </div>
        </div>
        <div class="form-group row-split">
          <div>
            <label for="sch-modal-region">Region *</label>
            <select id="sch-modal-region" class="form-control" required>
              ${regionOptions}
            </select>
          </div>
          <div>
            <label for="sch-modal-city">City *</label>
            <select id="sch-modal-city" class="form-control" required>
              ${cityOptions}
            </select>
          </div>
        </div>
        <div class="form-group row-split">
          <div>
            <label for="sch-modal-date">Date *</label>
            <input type="date" id="sch-modal-date" class="form-control" value="${dateVal}" required>
          </div>
          <div>
            <label for="sch-modal-time">Time *</label>
            <input type="time" id="sch-modal-time" class="form-control" value="${timeVal}" required>
          </div>
        </div>
        <div class="form-group">
          <label>Allocate Team Leader(s) *</label>
          <div class="multiselect-dropdown" id="sch-modal-tl-dropdown">
            <button type="button" class="multiselect-toggle" id="sch-modal-tl-btn">
              <span id="multiselect-label">Select Team Leader(s)</span>
              <span style="font-size: 0.7rem; color: var(--text-muted); pointer-events: none;">▼</span>
            </button>
            <div class="multiselect-menu" id="sch-modal-tl-menu">
              <!-- Dropdown items will be dynamically injected here -->
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="sch-modal-visittype">Visit Type *</label>
          <select id="sch-modal-visittype" class="form-control" required>
            <option value="Regular" ${schedule && schedule.visitType === 'Regular' ? 'selected' : ''}>Regular</option>
            <option value="Call-back" ${schedule && schedule.visitType === 'Call-back' ? 'selected' : ''}>Call-back</option>
            <option value="Inspection" ${schedule && schedule.visitType === 'Inspection' ? 'selected' : ''}>Inspection</option>
          </select>
        </div>
      </form>
    `;

    showModal(isEdit ? 'Edit Scheduled Operation' : 'Schedule New Operation', html, true, 'modal-lg');

    const clientSelect = document.getElementById('sch-modal-client');
    const rSelect = document.getElementById('sch-modal-region');
    const cSelect = document.getElementById('sch-modal-city');

    const toggleBtn = document.getElementById('sch-modal-tl-btn');
    const menuEl = document.getElementById('sch-modal-tl-menu');

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isShown = menuEl.style.display === 'flex';
      menuEl.style.display = isShown ? 'none' : 'flex';
    });

    const handleOutsideClick = (e) => {
      const dropdown = document.getElementById('sch-modal-tl-dropdown');
      if (!dropdown) {
        document.removeEventListener('click', handleOutsideClick);
        return;
      }
      if (!dropdown.contains(e.target)) {
        menuEl.style.display = 'none';
      }
    };
    document.addEventListener('click', handleOutsideClick);

    const updateSelectedLabel = () => {
      const checkedCbs = Array.from(document.querySelectorAll('input[name="sch-modal-tl-cb"]:checked'));
      const labelEl = document.getElementById('multiselect-label');
      if (!labelEl) return;
      if (checkedCbs.length === 0) {
        labelEl.textContent = 'Select Team Leader(s)';
        labelEl.style.color = 'var(--text-muted)';
      } else {
        const names = checkedCbs.map(cb => cb.getAttribute('data-name'));
        labelEl.textContent = names.join(', ');
        labelEl.style.color = 'var(--text-dark)';
      }
    };

    const updateTLsAndCities = (region, selectCityVal = '') => {
      let activeTLs = window.BucklerDB.getTeamLeaders(region);
      if (cityRestr !== 'All') {
        activeTLs = activeTLs.filter(t => t.city === cityRestr);
      }
      const curAssigned = schedule && schedule.teamLeaderId ? schedule.teamLeaderId.split(',').map(x => x.trim()) : [];
      const menuContainer = document.getElementById('sch-modal-tl-menu');
      if (menuContainer) {
        menuContainer.innerHTML = activeTLs.length ? activeTLs.map(t => `
          <label style="display:flex; align-items:center; gap:6px; font-weight:normal; margin:0; cursor:pointer; font-size:0.85rem; padding: 4px 6px; border-radius: 4px;" class="multiselect-item-label">
            <input type="checkbox" name="sch-modal-tl-cb" value="${t.id}" data-name="${t.name}" ${curAssigned.includes(t.id) ? 'checked' : ''} style="width:16px; height:16px; margin:0; cursor:pointer;">
            <span>${t.name}</span>
          </label>
        `).join('') : `<span style="font-size:0.8rem; color:var(--text-muted); font-style:italic; padding: 4px;">No team leaders in this region</span>`;

        menuContainer.querySelectorAll('input[name="sch-modal-tl-cb"]').forEach(cb => {
          cb.addEventListener('change', updateSelectedLabel);
        });
      }
      cSelect.innerHTML = getCityOptions(region, selectCityVal, false);
      updateSelectedLabel();
    };

    rSelect.addEventListener('change', (e) => {
      updateTLsAndCities(e.target.value);
    });

    clientSelect.addEventListener('change', (e) => {
      const selectedClientId = e.target.value;
      const client = window.BucklerDB.get('clients').find(c => c.id === selectedClientId);
      if (client) {
        rSelect.value = client.region;
        updateTLsAndCities(client.region, client.city);
      }
    });

    updateTLsAndCities(initialRegion, initialCity);
  }

  // Client Modal
  function openClientModal(id = null) {
    const isEdit = !!id;
    state.editingRecord = { entity: 'clients', id: id };
    const client = isEdit ? window.BucklerDB.get('clients').find(c => c.id === id) : null;
    const regionRestr = getRestrictedRegion();
    const canEdit = hasEditPermission('clients');

    const initialRegion = client ? client.region : (regionRestr !== 'All' ? regionRestr : 'Central');
    const initialCity = client ? client.city : '';
    const cityOptions = getCityOptions(initialRegion, initialCity, false);
    const regionOptions = getRegionOptions(initialRegion, false);

    const sectorsData = window.BucklerDB.get('sectors');
    const sectorOptions = sectorsData.map(s => `
      <option value="${s.name}" ${client && client.sector === s.name ? 'selected' : ''}>${s.name}</option>
    `).join('');

    const html = `
      <form id="client-form">
        <div class="form-group row-split">
          <div>
            <label for="cli-modal-code">Client Code *</label>
            <input type="text" id="cli-modal-code" class="form-control" value="${client ? (client.clientCode || '') : ''}" placeholder="e.g. BGD-MALL" required ${!canEdit ? 'disabled' : ''}>
          </div>
          <div>
            <label for="cli-modal-name">Client Name *</label>
            <input type="text" id="cli-modal-name" class="form-control" value="${client ? client.name : ''}" required ${!canEdit ? 'disabled' : ''}>
          </div>
        </div>
        <div class="form-group row-split">
          <div>
            <label for="cli-modal-contact">Contact Person *</label>
            <input type="text" id="cli-modal-contact" class="form-control" value="${client ? client.contact : ''}" required ${!canEdit ? 'disabled' : ''}>
          </div>
          <div>
            <label for="cli-modal-phone">Phone Number</label>
            <input type="text" id="cli-modal-phone" class="form-control" value="${client ? client.phone : ''}" placeholder="+964..." ${!canEdit ? 'disabled' : ''}>
          </div>
        </div>
        <div class="form-group row-split">
          <div>
            <label for="cli-modal-region">Region *</label>
            <select id="cli-modal-region" class="form-control" required ${!canEdit ? 'disabled' : ''}>
              ${regionOptions}
            </select>
          </div>
          <div>
            <label for="cli-modal-city">City *</label>
            <select id="cli-modal-city" class="form-control" required ${!canEdit ? 'disabled' : ''}>
              ${cityOptions}
            </select>
          </div>
        </div>
        <div class="form-group row-split">
          <div>
            <label for="cli-modal-sector">Business Sector *</label>
            <select id="cli-modal-sector" class="form-control" required ${!canEdit ? 'disabled' : ''}>
              <option value="" disabled ${!client ? 'selected' : ''}>Select Sector</option>
              ${sectorOptions}
            </select>
          </div>
          <div>
            <label for="cli-modal-email">Email Address</label>
            <input type="email" id="cli-modal-email" class="form-control" value="${client ? client.email : ''}" ${!canEdit ? 'disabled' : ''}>
          </div>
        </div>
        <div class="form-group">
          <label for="cli-modal-address">Full Address *</label>
          <input type="text" id="cli-modal-address" class="form-control" value="${client ? client.address : ''}" required ${!canEdit ? 'disabled' : ''}>
        </div>
        <div class="form-group row-split">
          <div>
            <label for="cli-modal-lat">Latitude (Decimal)</label>
            <input type="number" step="0.000001" id="cli-modal-lat" class="form-control" value="${client && client.lat !== null && client.lat !== undefined ? client.lat : ''}" placeholder="e.g. 33.3128 (Optional)" ${!canEdit ? 'disabled' : ''}>
          </div>
          <div>
            <label for="cli-modal-lng">Longitude (Decimal)</label>
            <input type="number" step="0.000001" id="cli-modal-lng" class="form-control" value="${client && client.lng !== null && client.lng !== undefined ? client.lng : ''}" placeholder="e.g. 44.3615 (Optional)" ${!canEdit ? 'disabled' : ''}>
          </div>
        </div>
        <div class="form-group">
          <label style="font-weight:700; font-size:0.82rem; margin-bottom:0.5rem; display:flex; justify-content:space-between; align-items:center;">
            <span>Contract Types / Services &amp; Allocated Monthly Visits</span>
            <span style="font-size:0.72rem;color:var(--text-muted);font-weight:400;">Specify target visits per active service</span>
          </label>
          <div style="display:flex; flex-direction:column; gap:0.4rem; padding:0.75rem; border:1px solid var(--border-color); border-radius:6px; background:#FAFAFA;">
            ${[
              'Pest Control', 'Weed Removal', 'Termite Treatment', 'Animal Control', 'Bird Control', 
              'Poultry Halls', 'Landscaping (Design)', 'Landscaping (Gardening)', 'Landscaping (Maintenance)', 
              'Cleaning', 'Maintenance'
            ].map(ct => {
              const isChecked = client && (client.contractTypes || []).includes(ct);
              const allocatedVal = client && client.serviceVisits && client.serviceVisits[ct] !== undefined ? client.serviceVisits[ct] : '';
              return `
                <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; padding:0.3rem 0.5rem; border-radius:4px; transition:background 0.15s;" onmouseover="this.style.background='#F1F5F9'" onmouseout="this.style.background='transparent'">
                  <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.82rem; cursor:pointer; margin:0; flex:1;">
                    <input type="checkbox" name="cli-contract-type-cb" value="${ct}" ${isChecked ? 'checked' : ''} style="accent-color:var(--primary-red); width:14px; height:14px;" ${!canEdit ? 'disabled' : ''}>
                    <span style="color:var(--text-dark); font-weight:600;">${ct}</span>
                  </label>
                  <div style="display:flex; align-items:center; gap:0.25rem;">
                    <span style="font-size:0.75rem; color:var(--text-muted);">visits:</span>
                    <input type="number" class="cli-service-visits-input form-control" data-service="${ct}" value="${allocatedVal}" placeholder="e.g. 2" style="width:70px; padding:0.2rem 0.4rem; height:28px; font-size:0.8rem; margin:0;" ${!isChecked || !canEdit ? 'disabled' : ''}>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
        <div class="form-group">
          <label for="cli-modal-monthly-visits">Total Monthly Visits Target (Calculated)</label>
          <input type="number" id="cli-modal-monthly-visits" class="form-control" value="${client ? (client.monthlyVisits || 0) : 0}" readonly disabled style="background:#F1F5F9; color:var(--text-muted); font-weight:700;">
        </div>
        ${isEdit ? (() => {
          const logs = window.BucklerDB.get('operationLogs').filter(l => l.clientId === id);
          const allPics = [];
          logs.forEach(log => {
            if (log.pictures && log.pictures.length) {
              log.pictures.forEach(pic => {
                allPics.push({ pic, date: log.dateConducted || 'Unknown Date' });
              });
            }
          });
          
          let photosHtml = '';
          if (allPics.length) {
            photosHtml = `
              <div style="margin-top: 1.5rem; border-top: 2px solid var(--border-color); padding-top: 1rem;">
                <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.5rem;">Client Visit Photos History</h4>
                <div class="visit-photos-grid">
                  ${allPics.map(item => `
                    <div class="visit-photo-preview-container" style="text-align: center;">
                      <img src="${item.pic}" class="visit-photo-thumbnail" onclick="window.open('${item.pic}', '_blank')" />
                      <div style="font-size: 0.65rem; color: var(--text-muted); margin-top: 2px; max-width: 80px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.date}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
          }
          
          const visitChartHtml = `
            <div style="margin-top: 1.5rem; border-top: 2px solid var(--border-color); padding-top: 1rem;">
              <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.5rem;">Visit Type Breakdown & Frequency</h4>
              <div style="display:flex; gap:0.5rem; margin-bottom:1rem; flex-wrap:wrap; align-items:center;">
                <select id="client-modal-tl-filter" class="filter-select" style="margin:0; font-size:0.75rem; padding:0.3rem 0.5rem; height:auto;">
                  <option value="All">All Team Leaders</option>
                </select>
                <input type="date" id="client-modal-start-date" class="form-control" style="max-width:110px; font-size:0.75rem; padding:0.3rem 0.5rem; height:auto; line-height:1;" />
                <input type="date" id="client-modal-end-date" class="form-control" style="max-width:110px; font-size:0.75rem; padding:0.3rem 0.5rem; height:auto; line-height:1;" />
              </div>
              <div style="height:150px; position:relative;">
                <canvas id="clientModalChart"></canvas>
              </div>
            </div>
          `;
          
          return visitChartHtml + photosHtml;
        })() : ''}
      </form>
    `;

    showModal(isEdit ? 'Edit Client Record' : 'Register New Client', html, canEdit);

    // Setup real-time target visits summation and checkbox coupling
    setTimeout(() => {
      const visitInputs = document.querySelectorAll('.cli-service-visits-input');
      const totalInput = document.getElementById('cli-modal-monthly-visits');
      const updateClientTotalVisits = () => {
        let sum = 0;
        visitInputs.forEach(inp => {
          if (!inp.disabled) {
            sum += parseInt(inp.value) || 0;
          }
        });
        if (totalInput) totalInput.value = sum;
      };
      visitInputs.forEach(inp => {
        inp.addEventListener('input', updateClientTotalVisits);
        inp.addEventListener('change', updateClientTotalVisits);
      });
      document.querySelectorAll('input[name="cli-contract-type-cb"]').forEach(cb => {
        cb.addEventListener('change', () => {
          const inp = cb.closest('div').querySelector('.cli-service-visits-input');
          if (inp) {
            inp.disabled = !cb.checked;
            if (!cb.checked) inp.value = '';
          }
          updateClientTotalVisits();
        });
      });
    }, 50);

    const rSelect = document.getElementById('cli-modal-region');
    const cSelect = document.getElementById('cli-modal-city');
    rSelect.addEventListener('change', (e) => {
      cSelect.innerHTML = getCityOptions(e.target.value, '', false);
    });

    if (isEdit) {
      const clientSchedules = window.BucklerDB.get('schedules').filter(s => s.clientId === id);
      const tlSelect = document.getElementById('client-modal-tl-filter');
      const users = window.BucklerDB.get('users');
      const tlIds = Array.from(new Set(clientSchedules.map(s => s.teamLeaderId)));
      tlSelect.innerHTML = '<option value="All">All Team Leaders</option>' + 
        tlIds.map(tid => {
          const u = users.find(x => x.id === tid);
          return u ? `<option value="${tid}">${u.name}</option>` : '';
        }).join('');
        
      const renderClientModalChart = () => {
        const selectedTL = tlSelect.value;
        const startDate = document.getElementById('client-modal-start-date').value;
        const endDate = document.getElementById('client-modal-end-date').value;
        
        let filtered = clientSchedules;
        if (selectedTL !== 'All') {
          filtered = filtered.filter(s => s.teamLeaderId === selectedTL);
        }
        if (startDate) {
          filtered = filtered.filter(s => s.date >= startDate);
        }
        if (endDate) {
          filtered = filtered.filter(s => s.date <= endDate);
        }
        
        const typeCounts = { 'Regular': 0, 'Call-back': 0, 'Inspection': 0 };
        filtered.forEach(s => {
          const type = s.visitType || 'Regular';
          if (typeCounts[type] !== undefined) {
            typeCounts[type]++;
          }
        });
        
        const labels = Object.keys(typeCounts);
        const values = Object.values(typeCounts);
        
        const activeIdx = values.map((c, i) => c > 0 ? i : -1).filter(i => i !== -1);
        const activeLabels = activeIdx.map(i => labels[i]);
        const activeValues = activeIdx.map(i => values[i]);
        
        if (state.charts.clientModalChart) state.charts.clientModalChart.destroy();
        
        const canvas = document.getElementById('clientModalChart');
        if (canvas) {
          const ctx = canvas.getContext('2d');
          state.charts.clientModalChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: activeLabels.length ? activeLabels : ['No Visit Data'],
              datasets: [{
                data: activeValues.length ? activeValues : [1],
                backgroundColor: ['#3B82F6', '#EF4444', '#10B981'],
                borderWidth: 1
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { position: 'right', labels: { font: { size: 9 } } }
              }
            }
          });
        }
      };
      
      tlSelect.addEventListener('change', renderClientModalChart);
      document.getElementById('client-modal-start-date').addEventListener('change', renderClientModalChart);
      document.getElementById('client-modal-end-date').addEventListener('change', renderClientModalChart);
      
      renderClientModalChart();
    }
  }

  // Item Modal
  function openItemModal(id = null) {
    const isEdit = !!id;
    state.editingRecord = { entity: 'items', id: id };
    const item = isEdit ? window.BucklerDB.get('items').find(i => i.id === id) : null;

    const units = ['Liters', 'Kg', 'Units'];
    if (item && item.unit && !units.includes(item.unit)) {
      units.push(item.unit);
    }
    
    const unitOptions = units.map(u => `
      <option value="${u}" ${item && item.unit === u ? 'selected' : (u === 'Liters' && !item ? 'selected' : '')}>${u}</option>
    `).join('');

    const categories = ['Pesticides', 'Bait Stations', 'UV Machines', 'Others'];
    const categoryOptions = categories.map(cat => `
      <option value="${cat}" ${item && (item.category || 'Others') === cat ? 'selected' : (!item && cat === 'Others' ? 'selected' : '')}>${cat}</option>
    `).join('');

    const html = `
      <form id="item-form">
        <div class="form-group">
          <label for="itm-modal-code">Item Code *</label>
          <input type="text" id="itm-modal-code" class="form-control" value="${item ? (item.itemCode || '') : ''}" placeholder="e.g. PERM-10" required>
        </div>
        <div class="form-group">
          <label for="itm-modal-name">Product Name *</label>
          <input type="text" id="itm-modal-name" class="form-control" value="${item ? item.name : ''}" required>
        </div>
        <div class="form-group">
          <label for="itm-modal-category">Category *</label>
          <select id="itm-modal-category" class="form-control" required>
            ${categoryOptions}
          </select>
        </div>
        <div class="form-group">
          <label for="itm-modal-unit">Measurement Unit *</label>
          <select id="itm-modal-unit" class="form-control" required>
            ${unitOptions}
          </select>
        </div>
      </form>
    `;

    showModal(isEdit ? 'Edit Product details' : 'Add New Product to Inventory', html);
  }

  // User Modal
  function openUserModal(id = null) {
    const isEdit = !!id;
    state.editingRecord = { entity: 'users', id: id };
    const user = isEdit ? window.BucklerDB.get('users').find(u => u.id === id) : null;
    const regionRestr = getRestrictedRegion();

    const roleOptions = ['admin coordinator', 'team leader', 'tech supervisor', 'operations manager', 'tech manager', 'GM'].map(r => `
      <option value="${r}" ${user && user.role === r ? 'selected' : ''}>${r.toUpperCase()}</option>
    `).join('');

    const regionOptions = getRegionOptions(user ? user.region : 'All', true);

    const initialRegion = user ? user.region : (regionRestr !== 'All' ? regionRestr : 'Central');
    const initialCity = user ? user.city : 'All';
    const cityOptions = getCityOptions(initialRegion, initialCity, true);

    const getDefaultPermissions = (role) => {
      const r = String(role).toLowerCase();
      if (r === 'gm') {
        return {
          dashboard: 'edit', schedules: 'edit', clients: 'edit', items: 'edit',
          complaints: 'edit', messages: 'edit', 'uv-sales': 'edit',
          reports: 'see', 'sanitation-report': 'edit', users: 'edit'
        };
      } else if (r === 'tech manager' || r === 'operations manager' || r === 'admin coordinator') {
        return {
          dashboard: 'see', schedules: 'edit', clients: 'edit', items: 'edit',
          complaints: 'edit', messages: 'edit', 'uv-sales': 'see',
          reports: 'see', 'sanitation-report': 'see', users: 'see'
        };
      } else if (r === 'tech supervisor') {
        return {
          dashboard: 'see', schedules: 'see', clients: 'see', items: 'see',
          complaints: 'edit', messages: 'edit', 'uv-sales': 'see',
          reports: 'see', 'sanitation-report': 'see', users: 'none'
        };
      } else { // team leader
        return {
          dashboard: 'none', schedules: 'edit', clients: 'none', items: 'none',
          complaints: 'see', messages: 'edit', 'uv-sales': 'none',
          reports: 'none', 'sanitation-report': 'none', users: 'none'
        };
      }
    };

    const tabLabels = {
      'dashboard': 'Operations Dashboard',
      'schedules': 'Schedules & Visits',
      'clients': 'Clients Registry',
      'items': 'Products List / Inventory',
      'complaints': 'Complaints Tracker',
      'messages': 'Internal Messenger',
      'uv-sales': 'UV Machine Sales',
      'reports': 'Operational Reports',
      'sanitation-report': 'Sanitation Report',
      'users': 'User & CRM Admin'
    };

    const permissionsHTML = ['dashboard', 'schedules', 'clients', 'items', 'complaints', 'messages', 'uv-sales', 'reports', 'sanitation-report', 'users'].map(tab => {
      const currentVal = user && user.permissions ? user.permissions[tab] : (user ? getDefaultPermissions(user.role)[tab] : 'none');
      return `
        <div style="display:grid; grid-template-columns:1.5fr 1fr 1fr 1fr; gap:0.5rem; align-items:center; padding:6px 0; border-bottom:1px solid #f1f5f9; font-size: 0.75rem;">
          <span style="font-weight:600; color: var(--text-dark);">${tabLabels[tab]}</span>
          <span style="text-align:center;"><input type="radio" name="perm-${tab}" value="none" ${currentVal === 'none' ? 'checked' : ''} style="cursor:pointer;" /></span>
          <span style="text-align:center;"><input type="radio" name="perm-${tab}" value="see" ${currentVal === 'see' ? 'checked' : ''} style="cursor:pointer;" /></span>
          <span style="text-align:center;"><input type="radio" name="perm-${tab}" value="edit" ${currentVal === 'edit' ? 'checked' : ''} style="cursor:pointer;" /></span>
        </div>
      `;
    }).join('');

    const html = `
      <form id="user-form" style="max-height: 520px; overflow-y: auto; padding-right: 4px;">
        <div class="form-group">
          <label for="usr-modal-name">Full Name *</label>
          <input type="text" id="usr-modal-name" class="form-control" value="${user ? user.name : ''}" required>
        </div>
        <div class="form-group row-split">
          <div>
            <label for="usr-modal-username">Username *</label>
            <input type="text" id="usr-modal-username" class="form-control" value="${user ? user.username : ''}" required>
          </div>
          <div>
            <label for="usr-modal-role">Role *</label>
            <select id="usr-modal-role" class="form-control" required>
              ${roleOptions}
            </select>
          </div>
        </div>
        <div class="form-group row-split">
          <div>
            <label for="usr-modal-region">Region Allocation *</label>
            <select id="usr-modal-region" class="form-control" required>
              ${regionOptions}
            </select>
          </div>
          <div>
            <label for="usr-modal-city">City Allocation *</label>
            <select id="usr-modal-city" class="form-control" required>
              ${cityOptions}
            </select>
          </div>
        </div>
        <div class="form-group row-split">
          <div>
            <label for="usr-modal-email">Email *</label>
            <input type="email" id="usr-modal-email" class="form-control" value="${user ? user.email : ''}" required>
          </div>
          <div>
            <label for="usr-modal-password">Login Password *</label>
            <input type="text" id="usr-modal-password" class="form-control" value="${user ? (user.password || 'buckler123') : 'buckler123'}" required placeholder="Set password">
          </div>
        </div>

        <div id="usr-modal-vehicle-section" style="display:none; margin-top:1.25rem; border-top:1px solid var(--border-color); padding-top:0.75rem;">
          <h4 style="font-size:0.85rem; font-weight:700; color:var(--text-dark); margin-bottom:0.5rem;">Vehicle Assignment</h4>
          <div class="form-group row-split">
            <div>
              <label for="usr-modal-veh-type">Vehicle Type</label>
              <input type="text" id="usr-modal-veh-type" class="form-control" value="${user ? (user.vehicleType || '') : ''}" placeholder="e.g. Toyota Hilux" />
            </div>
            <div>
              <label for="usr-modal-veh-model">Vehicle Model</label>
              <input type="text" id="usr-modal-veh-model" class="form-control" value="${user ? (user.vehicleModel || '') : ''}" placeholder="e.g. 2024" />
            </div>
          </div>
          <div class="form-group">
            <label for="usr-modal-veh-plateno">Vehicle Plate No.</label>
            <input type="text" id="usr-modal-veh-plateno" class="form-control" value="${user ? (user.vehiclePlateNo || '') : ''}" placeholder="e.g. A-10293 Baghdad" />
          </div>
        </div>
        
        <div style="margin-top:1.25rem; border-top:1px solid var(--border-color); padding-top:0.75rem;">
          <h4 style="font-size:0.85rem; font-weight:700; color:var(--text-dark); margin-bottom:0.5rem;">Responsibilities & Access Matrix</h4>
          <div style="display:grid; grid-template-columns:1.5fr 1fr 1fr 1fr; gap:0.5rem; font-size:0.7rem; border-bottom:2px solid var(--border-color); padding-bottom:4px; font-weight:800; color: var(--text-muted); text-transform: uppercase;">
            <span>Resource Tab</span>
            <span style="text-align:center;">No Access</span>
            <span style="text-align:center;">See Only</span>
            <span style="text-align:center;">See & Edit</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:0.15rem; margin-top:0.25rem;">
            ${permissionsHTML}
          </div>
        </div>
      </form>
    `;

    showModal(isEdit ? 'Edit User Credentials' : 'Add New User Profile', html);

    const rSelect = document.getElementById('usr-modal-region');
    const cSelect = document.getElementById('usr-modal-city');
    rSelect.addEventListener('change', (e) => {
      cSelect.innerHTML = getCityOptions(e.target.value, 'All', true);
    });

    const roleSelect = document.getElementById('usr-modal-role');
    const vehicleSection = document.getElementById('usr-modal-vehicle-section');
    if (roleSelect && vehicleSection) {
      const toggleVehicleSection = () => {
        if (roleSelect.value === 'team leader') {
          vehicleSection.style.display = 'block';
        } else {
          vehicleSection.style.display = 'none';
        }
      };
      roleSelect.addEventListener('change', toggleVehicleSection);
      toggleVehicleSection();
    }
  }

  // Operation Log Modal
  // Helper: check if the current TL has checked in today
  function isTLCheckedIn() {
    if (!state.currentUser || state.currentUser.role.toLowerCase() !== 'team leader') return true;
    const todayStr = formatDateLocal(new Date());
    const attendance = window.BucklerDB.get('attendanceLog');
    const todayRecord = attendance.find(a => a.teamLeaderId === state.currentUser.id && a.date === todayStr);
    return !!(todayRecord && !todayRecord.checkOut);
  }

  function openOperationLogModal(scheduleId) {
    // GATE: Team Leaders must check in before logging any visit
    if (state.currentUser && state.currentUser.role.toLowerCase() === 'team leader') {
      if (!isTLCheckedIn()) {
        showToast('⛔ You must Check-In first before logging a visit. Click "Start Day (Check-In)" above.', 'error');
        // Scroll shift widget into view
        const widget = document.getElementById('tl-shift-widget');
        if (widget) widget.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
    }

    state.editingRecord = { entity: 'operationLogsSubmit', id: scheduleId };
    const sch = window.BucklerDB.get('schedules').find(s => s.id === scheduleId);
    const client = window.BucklerDB.get('clients').find(c => c.id === sch.clientId);
    const items = window.BucklerDB.getItems(sch.region);
    const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
    const defaultGPS = client && client.lat && client.lng ? `${client.lat}, ${client.lng}` : "33.3128, 44.3615";

    const html = `
      <div style="margin-bottom:1rem; padding:0.75rem; background-color:var(--primary-red-light); border-radius:8px; border-left:4px solid var(--primary-red); font-size:0.85rem;">
        Client: <strong>${client ? client.name : 'Unknown'}</strong><br/>
        Service Scheduled: <strong>${sch.service}</strong> | Scheduled Time: ${sch.time}
      </div>
      <form id="op-log-form">
        <div class="form-group row-split">
          <div>
            <label for="log-modal-time-in">Time-In (Arrival) *</label>
            <input type="time" id="log-modal-time-in" class="form-control" value="${new Date().toTimeString().slice(0,5)}" required>
          </div>
          <div>
            <label for="log-modal-time-out">Time-Out (Departure) *</label>
            <input type="time" id="log-modal-time-out" class="form-control" value="${new Date(Date.now() + 2*3600*1000).toTimeString().slice(0,5)}" required>
          </div>
        </div>

        <div class="form-group">
          <label for="log-modal-geolocation">Geographical Coordinates (GPS) *</label>
          <div style="display:flex; gap:0.5rem;">
            <input type="text" id="log-modal-geolocation" class="form-control" value="${defaultGPS}" placeholder="Lat, Lng (e.g. 33.3128, 44.3615)" required>
            <button type="button" class="btn btn-secondary" id="log-modal-geo-btn" style="white-space:nowrap; padding: 0.5rem 1rem;">📍 Current GPS</button>
          </div>
        </div>
        
        <div class="form-group">
          <label>Products / Items Consumed</label>
          <div id="items-consumed-rows" class="items-consume-list" style="margin-bottom:0.5rem;">
            <!-- Rows injected here -->
          </div>
          <button type="button" class="btn btn-secondary btn-sm" id="btn-add-consume-row" style="width:100%;">+ Add Item Used</button>
        </div>

        <!-- Bait Stations Section -->
        ${client && client.baitStationsCount > 0 ? `
        <div style="margin-top: 1.5rem; border-top: 1px dashed var(--border-color); padding-top: 1rem;">
          <div class="form-check" style="display:flex; align-items:center; gap:0.5rem; margin-bottom: 0.5rem;">
            <input type="checkbox" id="log-modal-enable-bait" style="width:18px; height:18px; cursor:pointer;" />
            <label for="log-modal-enable-bait" style="font-weight:700; cursor:pointer; margin:0; font-size:0.85rem; color:var(--text-dark); user-select:none;">Log Bait Stations Audit (${client.baitStationsCount} stations)</label>
          </div>
          
          <div id="log-modal-bait-section" style="display:none; margin-top:0.5rem; border:1px solid var(--border-color); border-radius:8px; padding:1rem; background:#F8FAFC; margin-bottom:1.5rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; border-bottom:1px dashed var(--border-color); padding-bottom:0.25rem;">
              <h4 style="font-size:0.9rem; font-weight:700; color:var(--text-dark); margin:0;">Bait Stations Audit</h4>
              <button type="button" class="btn btn-secondary btn-sm" id="btn-add-bait-audit-row" style="padding:0.25rem 0.5rem; font-size:0.75rem; line-height:1; min-width:auto; height:auto;">+ Add Station Log</button>
            </div>
            <div style="max-height:220px; overflow-y:auto; margin-bottom:0.75rem; border:1px solid var(--border-color); border-radius:4px; background:white;">
              <table class="data-table" style="font-size:0.8rem; width:100%; margin:0;">
                <thead>
                  <tr>
                    <th style="width:75px;">Station #</th>
                    <th>Location</th>
                    <th style="width:185px;">Activity</th>
                    <th>Comments</th>
                    <th style="width:40px;"></th>
                  </tr>
                </thead>
                <tbody id="bait-audit-table-body">
                  <!-- Dynamically logged -->
                </tbody>
              </table>
            </div>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <input type="number" id="log-modal-bait-replaced" class="form-control" value="0" min="0" style="width:70px; padding:0.25rem; margin:0; height:auto; min-height:auto;" />
              <span style="font-size:0.8rem; font-weight:600; color:var(--text-medium);">bait stations stickers & poisons were replaced</span>
            </div>
          </div>
        </div>
        ` : ''}

        <!-- UV Fly Traps Section -->
        ${client && client.uvMachinesCount > 0 ? `
        <div style="margin-top: 1.5rem; border-top: 1px dashed var(--border-color); padding-top: 1rem;">
          <div class="form-check" style="display:flex; align-items:center; gap:0.5rem; margin-bottom: 0.5rem;">
            <input type="checkbox" id="log-modal-enable-uv" style="width:18px; height:18px; cursor:pointer;" />
            <label for="log-modal-enable-uv" style="font-weight:700; cursor:pointer; margin:0; font-size:0.85rem; color:var(--text-dark); user-select:none;">Log UV Fly Traps Audit (${client.uvMachinesCount} machines)</label>
          </div>
          
          <div id="log-modal-uv-section" style="display:none; margin-top:0.5rem; border:1px solid var(--border-color); border-radius:8px; padding:1rem; background:#F8FAFC; margin-bottom:1.5rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; border-bottom:1px dashed var(--border-color); padding-bottom:0.25rem;">
              <h4 style="font-size:0.9rem; font-weight:700; color:var(--text-dark); margin:0;">UV Fly Traps Audit</h4>
              <button type="button" class="btn btn-secondary btn-sm" id="btn-add-uv-audit-row" style="padding:0.25rem 0.5rem; font-size:0.75rem; line-height:1; min-width:auto; height:auto;">+ Add Machine Log</button>
            </div>
            <div style="max-height:220px; overflow-y:auto; margin-bottom:0.75rem; border:1px solid var(--border-color); border-radius:4px; background:white;">
              <table class="data-table" style="font-size:0.8rem; width:100%; margin:0;">
                <thead>
                  <tr>
                    <th style="width:75px;">Machine #</th>
                    <th>Location</th>
                    <th style="width:120px;">Catch Rate %</th>
                    <th style="width:40px;"></th>
                  </tr>
                </thead>
                <tbody id="uv-audit-table-body">
                  <!-- Dynamically logged -->
                </tbody>
              </table>
            </div>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span style="font-size:0.8rem; font-weight:600; color:var(--text-medium);">Total no. of flies' stickers replaced:</span>
              <input type="number" id="log-modal-uv-replaced" class="form-control" value="0" min="0" style="width:70px; padding:0.25rem; margin:0; height:auto; min-height:auto;" />
            </div>
          </div>
        </div>
        ` : ''}

        <div class="form-group">
          <label for="log-modal-comments">Team Leader Operation Comments *</label>
          <textarea id="log-modal-comments" class="form-control" placeholder="Describe biological findings, treatments applied..." required></textarea>
        </div>
        
        <div class="form-group">
          <label for="log-modal-pictures">Visit Photos (Optional)</label>
          <input type="file" id="log-modal-pictures" class="form-control" multiple accept="image/*">
          <div id="log-modal-pictures-preview" class="visit-photos-grid"></div>
        </div>
        
        <div style="border-top:1px solid var(--border-color); padding-top:1rem; margin-top:1.5rem;">
          <h4 style="font-size:0.95rem; font-weight:700; color:var(--text-dark); margin-bottom:0.5rem;">Client Review & Sign-Off</h4>
          <div class="form-group">
            <label for="log-modal-client-comments">Client Feedback / Comments</label>
            <input type="text" id="log-modal-client-comments" class="form-control" placeholder="Client comments (Optional)">
          </div>
          <div class="form-group">
            <label>Client Signature Pad *</label>
            <div class="signature-canvas-wrapper">
              <canvas id="sig-pad-canvas" class="signature-canvas" width="450" height="120"></canvas>
              <div class="signature-actions">
                <button type="button" class="btn btn-secondary btn-sm" id="sig-clear-btn">Clear Signature</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    `;

    showModal('Register Operation Visit Log', html, true, 'modal-lg');
    
    const rowsContainer = document.getElementById('items-consumed-rows');
    const addRowBtn = document.getElementById('btn-add-consume-row');
    
    const addRow = (initialItemId = null, initialQty = '') => {
      const rowId = `row-${Date.now()}-${Math.floor(Math.random()*1000)}`;
      const div = document.createElement('div');
      div.className = 'consume-row';
      div.id = rowId;
      div.style = 'display:flex; gap:0.5rem; margin-bottom:0.5rem; align-items:center;';
      div.innerHTML = `
        <select class="form-control consume-category-select" style="max-width:140px;">
          <option value="" disabled selected>Category...</option>
          <option value="Pesticides">Pesticides</option>
          <option value="Bait Stations">Bait Stations</option>
          <option value="UV Machines">UV Machines</option>
          <option value="Others">Others</option>
        </select>
        <select class="form-control consume-item-select" required style="flex: 1;">
          <option value="" disabled selected>Select item...</option>
        </select>
        <div style="display: flex; align-items: center; gap: 4px;">
          <input type="number" class="form-control consume-qty-input" value="${initialQty}" min="0.001" step="any" required placeholder="Qty" style="max-width:90px;">
          <span class="consume-uom-label" style="font-size:0.75rem; font-weight:700; color:var(--text-medium); min-width: 50px;"></span>
        </div>
        <button type="button" class="btn btn-danger btn-sm" style="padding:0.4rem; line-height:1;">✕</button>
      `;
      rowsContainer.appendChild(div);

      const catSelect = div.querySelector('.consume-category-select');
      const itemSelect = div.querySelector('.consume-item-select');
      const removeBtn = div.querySelector('.btn-danger');

      removeBtn.addEventListener('click', () => div.remove());

      const updateUOM = () => {
        const selectedId = itemSelect.value;
        const item = sortedItems.find(i => i.id === selectedId);
        const uomSpan = div.querySelector('.consume-uom-label');
        if (item && uomSpan) {
          uomSpan.textContent = item.unit || 'Units';
        } else if (uomSpan) {
          uomSpan.textContent = '';
        }
      };

      const updateItems = () => {
        const cat = catSelect.value;
        const catItems = sortedItems.filter(i => (i.category || 'Others') === cat);
        if (catItems.length) {
          itemSelect.innerHTML = catItems.map(i => `
            <option value="${i.id}">${i.name} (Stock: ${i.stock} ${i.unit})</option>
          `).join('');
          itemSelect.disabled = false;
        } else {
          itemSelect.innerHTML = `<option value="">No items in category</option>`;
          itemSelect.disabled = true;
        }
        updateUOM();
      };

      catSelect.addEventListener('change', updateItems);
      itemSelect.addEventListener('change', updateUOM);
      
      if (initialItemId) {
        const matchingItem = sortedItems.find(i => i.id === initialItemId);
        if (matchingItem) {
          catSelect.value = matchingItem.category || 'Others';
          updateItems();
          itemSelect.value = initialItemId;
          updateUOM();
        } else {
          updateItems();
        }
      } else {
        updateItems();
      }
    };

    addRowBtn.addEventListener('click', () => addRow());
    addRow();

    // Photo uploads handling
    state.uploadedPictures = [];
    const picInput = document.getElementById('log-modal-pictures');
    const picPreview = document.getElementById('log-modal-pictures-preview');
    if (picInput && picPreview) {
      picInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        files.forEach(file => {
          if (!file.type.startsWith('image/')) return;
          const reader = new FileReader();
          reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
              const max_width = 800;
              const max_height = 800;
              let width = img.width;
              let height = img.height;
              
              if (width > height) {
                if (width > max_width) {
                  height *= max_width / width;
                  width = max_width;
                }
              } else {
                if (height > max_height) {
                  width *= max_height / height;
                  height = max_height;
                }
              }
              
              const canvas = document.createElement('canvas');
              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0, width, height);
              
              const compressedBase64 = canvas.toDataURL('image/jpeg', 0.6);
              state.uploadedPictures.push(compressedBase64);
              
              const container = document.createElement('div');
              container.className = 'visit-photo-preview-container';
              container.innerHTML = `
                <img src="${compressedBase64}" class="visit-photo-thumbnail" />
                <button type="button" class="visit-photo-remove-btn">✕</button>
              `;
              container.querySelector('.visit-photo-remove-btn').addEventListener('click', () => {
                const idx = state.uploadedPictures.indexOf(compressedBase64);
                if (idx > -1) state.uploadedPictures.splice(idx, 1);
                container.remove();
              });
              picPreview.appendChild(container);
            };
            img.src = event.target.result;
          };
          reader.readAsDataURL(file);
        });
        picInput.value = '';
      });
    }

    document.getElementById('log-modal-geo-btn').addEventListener('click', () => {
      const geoInput = document.getElementById('log-modal-geolocation');
      const origPlaceholder = geoInput.placeholder;
      geoInput.placeholder = "Locating coordinates...";
      geoInput.value = "";
      
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            geoInput.value = `${position.coords.latitude.toFixed(6)}, ${position.coords.longitude.toFixed(6)}`;
            showToast('GPS coordinates captured successfully!', 'success');
          },
          (error) => {
            console.error(error);
            if (client && client.lat && client.lng) {
              geoInput.value = `${client.lat}, ${client.lng}`;
              showToast('Location permission denied. Loaded client default coordinates.', 'warning');
            } else {
              geoInput.value = "33.3128, 44.3615";
              showToast('Location error. Fallback GPS coordinates loaded.', 'warning');
            }
          },
          { enableHighAccuracy: true, timeout: 6000 }
        );
      } else {
        showToast('Geolocation is not supported by your browser', 'error');
        geoInput.placeholder = origPlaceholder;
      }
    });

    const canvas = document.getElementById('sig-pad-canvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;

    canvas.width = canvas.parentElement.clientWidth;

    const getMousePos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const startDraw = (e) => {
      drawing = true;
      const pos = getMousePos(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      e.preventDefault();
    };

    const draw = (e) => {
      if (!drawing) return;
      const pos = getMousePos(e);
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#C62828';
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      e.preventDefault();
    };

    const stopDraw = () => {
      drawing = false;
    };

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    window.addEventListener('mouseup', stopDraw);

    canvas.addEventListener('touchstart', startDraw);
    canvas.addEventListener('touchmove', draw);
    window.addEventListener('touchend', stopDraw);

    const baitCheckbox = document.getElementById('log-modal-enable-bait');
    const uvCheckbox = document.getElementById('log-modal-enable-uv');
    const baitSec = document.getElementById('log-modal-bait-section');
    const uvSec = document.getElementById('log-modal-uv-section');
    const baitTableBody = document.getElementById('bait-audit-table-body');
    const uvTableBody = document.getElementById('uv-audit-table-body');
    const addBaitRowBtn = document.getElementById('btn-add-bait-audit-row');
    const addUvRowBtn = document.getElementById('btn-add-uv-audit-row');

    const addBaitAuditRow = (stationNum = '', locationVal = '', activityVal = 'No Activity', commentVal = '') => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <input type="number" class="form-control log-bait-number" value="${stationNum}" min="1" required style="padding:0.25rem; font-size:0.75rem; margin:0; height:auto; min-height:auto;" />
        </td>
        <td>
          <input type="text" class="form-control log-bait-location" value="${locationVal}" required placeholder="e.g. Back corridor" style="padding:0.35rem 0.5rem; font-size:0.85rem; margin:0; height:auto; min-height:auto;" />
        </td>
        <td>
          <select class="form-control log-bait-activity" style="padding:0.35rem 0.5rem; font-size:0.85rem; margin:0; height:auto; min-height:auto; cursor:pointer;">
            <option value="No Activity" ${activityVal === 'No Activity' ? 'selected' : ''}>No Activity</option>
            <option value="Captured & Replaced" ${activityVal === 'Captured & Replaced' ? 'selected' : ''}>Captured & Replaced</option>
            <option value="Eaten" ${activityVal === 'Eaten' ? 'selected' : ''}>Eaten</option>
          </select>
        </td>
        <td>
          <input type="text" class="form-control log-bait-comment" value="${commentVal}" placeholder="Notes..." style="padding:0.25rem; font-size:0.75rem; margin:0; height:auto; min-height:auto;" />
        </td>
        <td style="text-align:center;">
          <button type="button" class="btn btn-danger btn-sm remove-audit-row-btn" style="padding:0.2rem 0.4rem; font-size:0.75rem; line-height:1; min-width:auto; height:auto; margin:0;">✕</button>
        </td>
      `;
      tr.querySelector('.remove-audit-row-btn').addEventListener('click', () => tr.remove());
      baitTableBody.appendChild(tr);
    };

    const addUvAuditRow = (machineNum = '', locationVal = '', catchRateVal = 0) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <input type="number" class="form-control log-uv-number" value="${machineNum}" min="1" required style="padding:0.25rem; font-size:0.75rem; margin:0; height:auto; min-height:auto;" />
        </td>
        <td>
          <input type="text" class="form-control log-uv-location" value="${locationVal}" required placeholder="e.g. Loading dock" style="padding:0.25rem; font-size:0.75rem; margin:0; height:auto; min-height:auto;" />
        </td>
        <td>
          <input type="number" class="form-control log-uv-catch" value="${catchRateVal}" min="0" max="100" required style="padding:0.25rem; font-size:0.75rem; margin:0; height:auto; min-height:auto;" />
        </td>
        <td style="text-align:center;">
          <button type="button" class="btn btn-danger btn-sm remove-audit-row-btn" style="padding:0.2rem 0.4rem; font-size:0.75rem; line-height:1; min-width:auto; height:auto; margin:0;">✕</button>
        </td>
      `;
      tr.querySelector('.remove-audit-row-btn').addEventListener('click', () => tr.remove());
      uvTableBody.appendChild(tr);
    };

    if (baitCheckbox && baitSec) {
      baitCheckbox.addEventListener('change', (e) => {
        baitSec.style.display = e.target.checked ? 'block' : 'none';
        if (e.target.checked && baitTableBody.children.length === 0) {
          addBaitAuditRow(1, 'External Wall 1');
        }
      });
    }

    if (addBaitRowBtn && baitTableBody) {
      addBaitRowBtn.addEventListener('click', () => {
        const existingNums = Array.from(baitTableBody.querySelectorAll('.log-bait-number'))
          .map(inp => parseInt(inp.value))
          .filter(n => !isNaN(n));
        const nextNum = existingNums.length ? Math.max(...existingNums) + 1 : 1;
        addBaitAuditRow(nextNum, `External Wall ${nextNum}`);
      });
    }

    if (uvCheckbox && uvSec) {
      uvCheckbox.addEventListener('change', (e) => {
        uvSec.style.display = e.target.checked ? 'block' : 'none';
        if (e.target.checked && uvTableBody.children.length === 0) {
          addUvAuditRow(1, 'Zone Area 1', 0);
        }
      });
    }

    if (addUvRowBtn && uvTableBody) {
      addUvRowBtn.addEventListener('click', () => {
        const existingNums = Array.from(uvTableBody.querySelectorAll('.log-uv-number'))
          .map(inp => parseInt(inp.value))
          .filter(n => !isNaN(n));
        const nextNum = existingNums.length ? Math.max(...existingNums) + 1 : 1;
        addUvAuditRow(nextNum, `Zone Area ${nextNum}`, 0);
      });
    }

    document.getElementById('sig-clear-btn').addEventListener('click', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    state.signaturePad = canvas;
  }

  // View Log Modal
  function openViewLogModal(scheduleId) {
    const sch = window.BucklerDB.get('schedules').find(s => s.id === scheduleId);
    const client = window.BucklerDB.get('clients').find(c => c.id === sch.clientId);
    const log = window.BucklerDB.get('operationLogs').find(l => l.scheduleId === scheduleId);
    const items = window.BucklerDB.get('items');
    const users = window.BucklerDB.get('users');
    const tl = users.find(u => u.id === sch.teamLeaderId);

    if (!log) {
      showToast('Could not find operation log for this visit', 'error');
      return;
    }

    const itemsHTML = log.itemsConsumed && log.itemsConsumed.length ? log.itemsConsumed.map(cons => {
      const itm = items.find(i => i.id === cons.itemId);
      const itmName = itm ? itm.name : 'Unknown Item';
      const itmUnit = itm ? itm.unit : '';
      return `<li><a href="#" class="item-click" data-id="${cons.itemId}" style="color:inherit; font-weight:600; text-decoration:none; border-bottom:1px dashed var(--text-muted);">${itmName}</a>: <strong>${cons.qty} ${itmUnit}</strong></li>`;
    }).join('') : '<li>None</li>';

    let picturesHTML = '';
    if (log.pictures && log.pictures.length) {
      picturesHTML = `
        <div style="margin-top: 0.75rem; border-top: 1px solid var(--border-color); padding-top: 0.75rem;">
          <h4 style="font-size:0.95rem; font-weight:700; color:var(--text-dark); margin-bottom: 0.5rem;">Visit Photos</h4>
          <div class="visit-photos-grid">
            ${log.pictures.map(pic => `<img src="${pic}" class="visit-photo-thumbnail" onclick="window.open('${pic}', '_blank')" />`).join('')}
          </div>
        </div>
      `;
    }

    const html = `
      <div style="display:flex; flex-direction:column; gap:0.85rem;" id="log-details-modal">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; font-size:0.85rem; padding:0.75rem; background:#F8FAFC; border-radius:8px;">
          <div>Client: <strong><a href="#" class="client-click" data-id="${sch.clientId}" style="color:inherit; text-decoration:none; border-bottom:1px dashed var(--text-muted);">${client ? client.name : 'Unknown'}</a></strong></div>
          <div>Region: <strong>${sch.region}</strong></div>
          <div>Service Category: <strong style="text-transform:capitalize;">${sch.service}</strong></div>
          <div>Conducted Date: <strong>${log.dateConducted}</strong></div>
          <div>Time-In (Arrival): <strong>${log.timeIn || 'N/A'}</strong></div>
          <div>Time-Out (Departure): <strong>${log.timeOut || 'N/A'}</strong></div>
          <div>Total Duration: <strong>${log.timeSpent || 'N/A'}</strong></div>
          <div>Team Leader: <strong><a href="#" class="user-click" data-id="${sch.teamLeaderId}" style="color:inherit; text-decoration:none; border-bottom:1px dashed var(--text-muted);">${tl ? tl.name : 'Unassigned'}</a></strong></div>
          <div style="grid-column: span 2;">Geographical Coordinates: <strong>📍 ${log.geoLocation || 'N/A'}</strong></div>
        </div>

        <div>
          <h4 style="font-size:0.95rem; font-weight:700; color:var(--text-dark);">Materials / Items Used</h4>
          <ul style="padding-left:1.2rem; font-size:0.85rem; margin-top:0.25rem;">
            ${itemsHTML}
          </ul>
        </div>

        <div>
          <h4 style="font-size:0.95rem; font-weight:700; color:var(--text-dark);">Operation Comments & Findings</h4>
          <p style="font-size:0.85rem; padding:0.5rem; background:#FAFAFA; border:1px solid var(--border-color); border-radius:6px; color:var(--text-medium); margin-top:0.25rem; font-style:italic;">
            "${log.comments}"
          </p>
          ${picturesHTML}
        </div>

        <div style="border-top:1px solid var(--border-color); padding-top:0.75rem; margin-top:0.5rem;">
          <h4 style="font-size:0.95rem; font-weight:700; color:var(--text-dark);">Client Sign-Off</h4>
          <p style="font-size:0.85rem; color:var(--text-medium); margin-bottom:0.5rem;">
            Client Feedback: <strong>${log.clientComments || 'No comments'}</strong>
          </p>
          <div style="display:flex; flex-direction:column; gap:0.25rem;">
            <label style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">Captured Signature:</label>
            <div style="border:1px solid var(--border-color); width:200px; height:60px; background:#FAFAFA; border-radius:6px; display:flex; align-items:center; justify-content:center; overflow:hidden;">
              ${log.clientSignature.startsWith('data:image') 
                ? `<img src="${log.clientSignature}" style="width:100%; height:100%; object-fit:contain;" />` 
                : `<span style="font-size:0.75rem; color:var(--text-muted);">Digital Signature Registered</span>`}
            </div>
          </div>
        </div>
      </div>
    `;

    showModal('Operation Visit Log Details', html, false);
    bindEntityClicks(document.getElementById('log-details-modal'));

    // Inject "Share Report" button into the modal footer
    const cancelBtn = document.getElementById('modal-cancel-btn');
    if (cancelBtn && log) {
      const reportUrl = `${window.location.origin}${window.location.pathname.replace('index.html', '')}client-report.html?logId=${log.id}`;
      const shareBtn = document.createElement('button');
      shareBtn.className = 'btn btn-secondary';
      shareBtn.style.marginRight = 'auto';
      shareBtn.innerHTML = '📤 Full Report';
      shareBtn.title = 'Open shareable visit report in a new tab';
      shareBtn.onclick = () => window.open(reportUrl, '_blank');
      const copyBtn = document.createElement('button');
      copyBtn.className = 'btn btn-secondary';
      copyBtn.innerHTML = '🔗 Copy Link';
      copyBtn.title = 'Copy report link to clipboard';
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(reportUrl).then(() => showToast('Report link copied to clipboard', 'success'));
      };
      const emailBtn = document.createElement('button');
      emailBtn.className = 'btn btn-secondary';
      emailBtn.innerHTML = '📧 Email Report';
      emailBtn.title = 'Send visit report to client by email';
      emailBtn.onclick = () => {
        const clientEmail = client ? client.email : '';
        const tlNames = sch && sch.teamLeaderId ? sch.teamLeaderId.split(',').map(tid => {
          const u = users.find(x => x.id === tid.trim());
          return u ? u.name : tid;
        }).join(', ') : 'N/A';
        const itemsList = log.itemsConsumed && log.itemsConsumed.length
          ? log.itemsConsumed.map(c => { const it = items.find(i => i.id === c.itemId); return `${it ? it.name : c.itemId}: ${c.qty} ${it ? it.unit : ''}`; }).join(', ')
          : 'None';

        // ── GENERATE PDF ATTACHMENT ──
        if (window.jspdf) {
          try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // Draw header banner
            doc.setFillColor(194, 24, 91); // Primary red
            doc.rect(0, 0, 210, 40, 'F');

            // Brand text
            doc.setTextColor(255, 255, 255);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(22);
            doc.text('BUCKLER PEST CONTROL', 15, 25);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(10);
            doc.text('Operations & Quality Control Audit Report', 15, 33);

            // Reset text color to dark grey
            doc.setTextColor(51, 51, 51);

            // Visit Summary Header
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.text('Visit Audit Summary', 15, 55);

            // Draw line
            doc.setDrawColor(226, 232, 240);
            doc.line(15, 58, 195, 58);

            // Details
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            let pdfY = 65;
            const drawDetailRow = (label, val) => {
              doc.setFont('helvetica', 'bold');
              doc.text(label + ':', 15, pdfY);
              doc.setFont('helvetica', 'normal');
              doc.text(String(val || 'N/A'), 55, pdfY);
              pdfY += 7;
            };

            drawDetailRow('Client Name', client ? client.name : 'N/A');
            drawDetailRow('Client Code', client ? (client.clientCode || client.id) : 'N/A');
            drawDetailRow('Service Performed', sch ? sch.service : 'N/A');
            drawDetailRow('Visit Date', log.dateConducted);
            drawDetailRow('Time In / Out', `${log.timeIn || 'N/A'} - ${log.timeOut || 'N/A'} (${log.timeSpent || 'N/A'})`);
            drawDetailRow('Team Leader(s)', tlNames);
            drawDetailRow('Site Location', log.geoLocation || 'N/A');

            pdfY += 5;
            // Materials Section
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text('Materials & Pesticides Consumed', 15, pdfY);
            pdfY += 3;
            doc.line(15, pdfY, 195, pdfY);
            pdfY += 6;

            doc.setFontSize(10);
            if (log.itemsConsumed && log.itemsConsumed.length) {
              log.itemsConsumed.forEach(c => {
                const it = items.find(i => i.id === c.itemId);
                const itemName = it ? it.name : c.itemId;
                const qtyText = `${c.qty} ${it ? it.unit : ''}`;
                doc.setFont('helvetica', 'normal');
                doc.text(itemName, 15, pdfY);
                doc.setFont('helvetica', 'bold');
                doc.text(qtyText, 150, pdfY);
                pdfY += 6;
              });
            } else {
              doc.setFont('helvetica', 'italic');
              doc.text('No chemical/materials consumed during this service.', 15, pdfY);
              pdfY += 6;
            }

            pdfY += 5;
            // Observations and Checklist Section
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text('Observations & Corrective Actions', 15, pdfY);
            pdfY += 3;
            doc.line(15, pdfY, 195, pdfY);
            pdfY += 6;

            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.text('Technician Comments / Notes:', 15, pdfY);
            pdfY += 5;
            doc.setFont('helvetica', 'normal');
            const commentsLines = doc.splitTextToSize(log.comments || 'No comment notes provided.', 180);
            doc.text(commentsLines, 15, pdfY);
            pdfY += (commentsLines.length * 5) + 3;

            doc.setFont('helvetica', 'bold');
            doc.text('Client Feedback / Sign-Off Comments:', 15, pdfY);
            pdfY += 5;
            doc.setFont('helvetica', 'normal');
            const feedbackLines = doc.splitTextToSize(log.clientComments || 'No client feedback provided.', 180);
            doc.text(feedbackLines, 15, pdfY);
            pdfY += (feedbackLines.length * 5) + 5;

            // Signatures block
            if (pdfY > 230) {
              doc.addPage();
              pdfY = 30;
            }

            doc.setFontSize(11);
            doc.setFont('helvetica', 'bold');
            doc.text('Verification & Signatures', 15, pdfY);
            pdfY += 3;
            doc.line(15, pdfY, 195, pdfY);
            pdfY += 10;

            if (log.clientSignature && log.clientSignature.startsWith('data:image')) {
              try {
                // If it's SVG or SVG in data URI, jsPDF might prefer PNG, but let's try to add it
                doc.addImage(log.clientSignature, 'PNG', 15, pdfY, 50, 20);
                doc.setFontSize(9);
                doc.setFont('helvetica', 'italic');
                doc.text('Client Authorized Sign-Off', 15, pdfY + 25);
              } catch (err) {
                console.error('Error drawing client signature in PDF:', err);
                doc.setFontSize(9);
                doc.setFont('helvetica', 'italic');
                doc.text('Client Signature Captured (Inline Image)', 15, pdfY + 15);
              }
            } else {
              doc.setFontSize(9);
              doc.setFont('helvetica', 'italic');
              doc.text('(Client signature not captured)', 15, pdfY + 15);
            }

            // Tech signature label
            doc.setFontSize(9);
            doc.setFont('helvetica', 'italic');
            doc.text(`Assigned Operator: ${tlNames}`, 110, pdfY + 25);

            // Save PDF
            const pdfName = `Visit-Report-${client ? client.name.replace(/\s+/g, '-') : 'Client'}-${log.dateConducted}.pdf`;
            doc.save(pdfName);
            showToast('PDF visit report generated and downloaded ✓', 'success');
          } catch (e) {
            console.error('Error generating PDF:', e);
            showToast('PDF generation failed, drafting email summary instead.', 'warning');
          }
        }

        // ── OPEN MAIL CLIENT ──
        const subject = encodeURIComponent(`Visit Report — ${client ? client.name : ''} — ${log.dateConducted}`);
        const body = encodeURIComponent(
          `Dear ${client ? (client.contact || client.name) : 'Valued Client'},\n\n` +
          `Please find the summary of our recent visit to your premises.\n\n` +
          `We have generated and downloaded a PDF report of this visit onto your computer. Please attach the downloaded PDF file to this email before sending.\n\n` +
          `─────────────────────────────\n` +
          `VISIT SUMMARY\n` +
          `─────────────────────────────\n` +
          `Client: ${client ? client.name : ''}\n` +
          `Date: ${log.dateConducted}\n` +
          `Service: ${sch ? sch.service : 'N/A'}\n` +
          `Time In / Out: ${log.timeIn || 'N/A'} - ${log.timeOut || 'N/A'}\n` +
          `Team Leader: ${tlNames}\n` +
          `Materials Consumed: ${itemsList}\n` +
          `Technician Notes: ${log.comments || 'N/A'}\n` +
          `Client Feedback: ${log.clientComments || 'None'}\n\n` +
          `For the full interactive dashboard report, visit:\n${reportUrl}\n\n` +
          `Thank you for choosing Buckler Pest Control.\n\n` +
          `Best regards,\n` +
          `Buckler Operations Team`
        );
        window.open(`mailto:${clientEmail}?subject=${subject}&body=${body}`, '_blank');
        if (!clientEmail) showToast('No email address on file for this client.', 'warning');
      };
      const footer = cancelBtn.parentElement;
      if (footer) {
        footer.insertBefore(shareBtn, cancelBtn);
        footer.insertBefore(copyBtn, cancelBtn);
        footer.insertBefore(emailBtn, cancelBtn);
      }

    }
  }

  // Handle forms submit
  function handleModalSubmit(entity, id) {

    // ── SUPPLIERS ─────────────────────────────────────────────
    if (entity === 'suppliers') {
      const nameEl    = document.getElementById('sup-modal-name');
      const catEl     = document.getElementById('sup-modal-category');
      if (!nameEl || !nameEl.value.trim()) {
        showToast('Supplier name is required.', 'error');
        return;
      }
      const checkedProducts = Array.from(
        document.querySelectorAll('input[name="sup-product-cb"]:checked')
      ).map(cb => cb.value);

      const fields = {
        name:          nameEl.value.trim(),
        category:      catEl ? catEl.value : 'Local',
        country:       (document.getElementById('sup-modal-country')  || {}).value?.trim() || '',
        contactPerson: (document.getElementById('sup-modal-contact')  || {}).value?.trim() || '',
        phone:         (document.getElementById('sup-modal-phone')    || {}).value?.trim() || '',
        email:         (document.getElementById('sup-modal-email')    || {}).value?.trim() || '',
        notes:         (document.getElementById('sup-modal-notes')    || {}).value?.trim() || '',
        productIds:    checkedProducts
      };

      // Ensure array exists in storage
      const data = window.BucklerDB.getData();
      if (!data.suppliers) { data.suppliers = []; window.BucklerDB.saveData(data); }

      if (id) {
        window.BucklerDB.update('suppliers', id, fields);
        showToast('Supplier updated ✓', 'success');
      } else {
        window.BucklerDB.insert('suppliers', fields);
        showToast('Supplier added ✓', 'success');
      }
      els.modalBackdrop.style.display = 'none';
      state.editingRecord = null;
      renderSuppliers();
      return;
    }
    // ──────────────────────────────────────────────────────────

    if (entity === 'schedules') {
      const form = document.getElementById('schedule-form');
      if (!form.checkValidity()) { form.reportValidity(); return; }
      
      const checkedTls = Array.from(document.querySelectorAll('input[name="sch-modal-tl-cb"]:checked')).map(cb => cb.value);
      if (checkedTls.length === 0) {
        showToast('Please allocate at least one Team Leader.', 'error');
        return;
      }
      
      const fields = {
        clientId: document.getElementById('sch-modal-client').value,
        region: document.getElementById('sch-modal-region').value,
        city: document.getElementById('sch-modal-city').value,
        service: document.getElementById('sch-modal-service').value,
        date: document.getElementById('sch-modal-date').value,
        time: document.getElementById('sch-modal-time').value,
        teamLeaderId: checkedTls.join(','),
        visitType: document.getElementById('sch-modal-visittype').value,
        status: 'Scheduled',
        assignedBy: state.currentUser.username
      };

      if (id) {
        window.BucklerDB.update('schedules', id, fields);
        showToast('Schedule updated successfully', 'success');
      } else {
        window.BucklerDB.insert('schedules', fields);
        showToast('New operations schedule created', 'success');
      }
      els.modalBackdrop.style.display = 'none';
      renderSchedules();
    }
    
    else if (entity === 'clients') {
      const form = document.getElementById('client-form');
      if (!form.checkValidity()) { form.reportValidity(); return; }

      const selectedContracts = Array.from(document.querySelectorAll('input[name="cli-contract-type-cb"]:checked')).map(cb => cb.value);
      const serviceVisits = {};
      let totalMonthlyVisits = 0;
      
      selectedContracts.forEach(ct => {
        const inputEl = document.querySelector(`.cli-service-visits-input[data-service="${ct}"]`);
        const val = inputEl ? parseInt(inputEl.value) || 0 : 0;
        serviceVisits[ct] = val;
        totalMonthlyVisits += val;
      });

      const fields = {
        clientCode: document.getElementById('cli-modal-code').value,
        name: document.getElementById('cli-modal-name').value,
        sector: document.getElementById('cli-modal-sector').value,
        contact: document.getElementById('cli-modal-contact').value,
        region: document.getElementById('cli-modal-region').value,
        city: document.getElementById('cli-modal-city').value,
        phone: document.getElementById('cli-modal-phone').value,
        email: document.getElementById('cli-modal-email').value,
        address: document.getElementById('cli-modal-address').value,
        lat: document.getElementById('cli-modal-lat').value !== '' ? parseFloat(document.getElementById('cli-modal-lat').value) : null,
        lng: document.getElementById('cli-modal-lng').value !== '' ? parseFloat(document.getElementById('cli-modal-lng').value) : null,
        monthlyVisits: totalMonthlyVisits,
        contractTypes: selectedContracts,
        serviceVisits: serviceVisits
      };

      if (id) {
        window.BucklerDB.update('clients', id, fields);
        showToast('Client info updated', 'success');
      } else {
        window.BucklerDB.insert('clients', fields);
        showToast('Client registered successfully', 'success');
      }
      els.modalBackdrop.style.display = 'none';
      renderClients();
    }
    

    else if (entity === 'items') {
      const form = document.getElementById('item-form');
      if (!form.checkValidity()) { form.reportValidity(); return; }

      const fields = {
        name: document.getElementById('itm-modal-name').value,
        itemCode: document.getElementById('itm-modal-code').value,
        unit: document.getElementById('itm-modal-unit').value
      };

      if (id) {
        window.BucklerDB.update('items', id, fields);
        showToast('Product updated in inventory', 'success');
      } else {
        fields.stock = 0;
        window.BucklerDB.insert('items', fields);
        showToast('Product registered in inventory', 'success');
      }
      els.modalBackdrop.style.display = 'none';
      renderItems();
    }
    
    else if (entity === 'users') {
      const form = document.getElementById('user-form');
      if (!form.checkValidity()) { form.reportValidity(); return; }

      const permissions = {};
      ['dashboard', 'schedules', 'clients', 'items', 'complaints', 'messages', 'uv-sales', 'reports', 'sanitation-report', 'users'].forEach(tab => {
        const rad = document.querySelector(`input[name="perm-${tab}"]:checked`);
        permissions[tab] = rad ? rad.value : 'none';
      });

      const fields = {
        name: document.getElementById('usr-modal-name').value,
        username: document.getElementById('usr-modal-username').value,
        role: document.getElementById('usr-modal-role').value,
        region: document.getElementById('usr-modal-region').value,
        city: document.getElementById('usr-modal-city').value,
        email: document.getElementById('usr-modal-email').value,
        password: document.getElementById('usr-modal-password').value,
        permissions: permissions
      };

      if (fields.role === 'team leader') {
        fields.vehicleType = document.getElementById('usr-modal-veh-type').value;
        fields.vehicleModel = document.getElementById('usr-modal-veh-model').value;
        fields.vehiclePlateNo = document.getElementById('usr-modal-veh-plateno').value;
      } else {
        fields.vehicleType = '';
        fields.vehicleModel = '';
        fields.vehiclePlateNo = '';
      }

      let savedUser;
      if (id) {
        savedUser = window.BucklerDB.update('users', id, fields);
        showToast('User profile updated', 'success');
      } else {
        savedUser = window.BucklerDB.insert('users', fields);
        showToast('User profile created', 'success');
      }

      // Synchronize with vehicles collection
      const targetUserId = id || savedUser.id;
      if (fields.role === 'team leader') {
        const vehicles = window.BucklerDB.get('vehicles');
        const assignedVeh = vehicles.find(v => v.teamLeaderId === targetUserId);

        if (fields.vehicleType || fields.vehicleModel || fields.vehiclePlateNo) {
          const vehFields = {
            type: fields.vehicleType,
            model: fields.vehicleModel,
            plateNo: fields.vehiclePlateNo,
            region: fields.region,
            teamLeaderId: targetUserId
          };

          if (assignedVeh) {
            // Unassign other vehicles for this user just in case
            vehicles.forEach(v => {
              if (v.teamLeaderId === targetUserId && v.id !== assignedVeh.id) {
                window.BucklerDB.update('vehicles', v.id, { teamLeaderId: '' });
              }
            });
            window.BucklerDB.update('vehicles', assignedVeh.id, vehFields);
          } else {
            // Also unassign other vehicles for this user just in case
            vehicles.forEach(v => {
              if (v.teamLeaderId === targetUserId) {
                window.BucklerDB.update('vehicles', v.id, { teamLeaderId: '' });
              }
            });
            window.BucklerDB.insert('vehicles', vehFields);
          }
        } else {
          if (assignedVeh) {
            window.BucklerDB.update('vehicles', assignedVeh.id, { teamLeaderId: '' });
          }
        }
      } else {
        const vehicles = window.BucklerDB.get('vehicles');
        const assignedVeh = vehicles.find(v => v.teamLeaderId === targetUserId);
        if (assignedVeh) {
          window.BucklerDB.update('vehicles', assignedVeh.id, { teamLeaderId: '' });
        }
      }

      els.modalBackdrop.style.display = 'none';
      setupRoleSelector();
      renderUsers();
      if (typeof renderVehicles === 'function') {
        renderVehicles();
      }
    }

    else if (entity === 'vehicles') {
      const form = document.getElementById('vehicle-form');
      if (!form.checkValidity()) { form.reportValidity(); return; }

      // Get old assigned team leader before updating database
      let oldTLId = null;
      if (id) {
        const oldVeh = window.BucklerDB.get('vehicles').find(v => v.id === id);
        if (oldVeh) oldTLId = oldVeh.teamLeaderId;
      }

      const fields = {
        type: document.getElementById('veh-modal-type').value,
        model: document.getElementById('veh-modal-model').value,
        plateNo: document.getElementById('veh-modal-plateno').value,
        region: document.getElementById('veh-modal-region').value,
        teamLeaderId: document.getElementById('veh-modal-tl').value
      };

      let savedVeh;
      if (id) {
        savedVeh = window.BucklerDB.update('vehicles', id, fields);
        showToast('Vehicle details updated', 'success');
      } else {
        savedVeh = window.BucklerDB.insert('vehicles', fields);
        showToast('New vehicle logged', 'success');
      }

      // Synchronize back to the Team Leader user profiles!
      const targetTLId = fields.teamLeaderId;

      // 1. If this vehicle was previously assigned to a different Team Leader, clear that TL's vehicle fields
      if (oldTLId && oldTLId !== targetTLId) {
        window.BucklerDB.update('users', oldTLId, {
          vehicleType: '',
          vehicleModel: '',
          vehiclePlateNo: ''
        });
      }

      // 2. If a new Team Leader is assigned to this vehicle, update their user record
      if (targetTLId) {
        // Also ensure no other vehicle is assigned to this Team Leader
        const dbVehicles = window.BucklerDB.get('vehicles');
        dbVehicles.forEach(v => {
          if (v.teamLeaderId === targetTLId && String(v.id) !== String(savedVeh.id)) {
            window.BucklerDB.update('vehicles', v.id, { teamLeaderId: '' });
          }
        });

        window.BucklerDB.update('users', targetTLId, {
          vehicleType: fields.type,
          vehicleModel: fields.model,
          vehiclePlateNo: fields.plateNo
        });
      }

      els.modalBackdrop.style.display = 'none';
      renderVehicles();
      renderUsers();
    }
    
    else if (entity === 'passwordVerify') {
      const entered = document.getElementById('verify-modal-password').value;
      const user = window.BucklerDB.get('users').find(u => u.id === id);
      const correct = user ? (user.password || 'buckler123') : 'buckler123';
      
      if (entered === correct) {
        els.modalBackdrop.style.display = 'none';
        state.editingRecord = null;
        if (state.passwordVerifyCallback) {
          state.passwordVerifyCallback(true);
        }
      } else {
        showToast('Incorrect password. Access denied.', 'error');
      }
    }

    else if (entity === 'complaints') {
      const form = document.getElementById('complaint-form');
      if (!form.checkValidity()) { form.reportValidity(); return; }

      const fields = {
        clientId: document.getElementById('cmp-modal-client').value,
        region: document.getElementById('cmp-modal-region').value,
        city: document.getElementById('cmp-modal-city').value,
        complainantName: document.getElementById('cmp-modal-name').value,
        phone: document.getElementById('cmp-modal-phone').value,
        severity: document.getElementById('cmp-modal-severity').value,
        status: document.getElementById('cmp-modal-status').value,
        assignedStaffId: document.getElementById('cmp-modal-staff').value,
        details: document.getElementById('cmp-modal-details').value,
        dateSubmitted: formatDateLocal(new Date())
      };

      const cmpClient = window.BucklerDB.get('clients').find(c => c.id === fields.clientId);
      const cmpClientName = cmpClient ? cmpClient.name : 'Unknown Client';
      if (id) {
        window.BucklerDB.update('complaints', id, fields);
        // Notify assigned staff and GM of status change
        const allUsers = window.BucklerDB.get('users');
        const nd = window.BucklerDB.getData();
        if (!nd.notifications) nd.notifications = [];
        const ts = Date.now();
        const assignedUser = allUsers.find(u => u.id === fields.assignedStaffId);
        const gm = allUsers.find(u => u.role && u.role.toLowerCase() === 'gm');
        if (assignedUser) nd.notifications.unshift({ id: `ntf-${ts}-1`, type: 'complaint', message: `📋 Complaint for ${cmpClientName} updated → ${fields.status}`, read: false, timestamp: new Date().toISOString() });
        if (gm) nd.notifications.unshift({ id: `ntf-${ts}-2`, type: 'complaint', message: `🔔 Complaint update: ${cmpClientName} — ${fields.status} [${fields.severity}]`, read: false, timestamp: new Date().toISOString() });
        window.BucklerDB.saveData(nd);
        renderNotifications();
        showToast('Complaint record updated', 'success');
      } else {
        window.BucklerDB.insert('complaints', fields);
        // Fire internal notifications to GM, assigned staff, Tech Manager
        const allUsers = window.BucklerDB.get('users');
        const nd = window.BucklerDB.getData();
        if (!nd.notifications) nd.notifications = [];
        const ts = Date.now();
        const assignedUser = allUsers.find(u => u.id === fields.assignedStaffId);
        const gm = allUsers.find(u => u.role && u.role.toLowerCase() === 'gm');
        const techMgr = allUsers.find(u => u.role && u.role.toLowerCase() === 'tech manager');
        if (assignedUser) nd.notifications.unshift({ id: `ntf-${ts}-a`, type: 'complaint', message: `⚠️ New complaint assigned to you — Client: ${cmpClientName} [${fields.severity}]`, read: false, timestamp: new Date().toISOString() });
        if (gm) nd.notifications.unshift({ id: `ntf-${ts}-g`, type: 'complaint', message: `⚠️ New ${fields.severity} complaint: ${cmpClientName}`, read: false, timestamp: new Date().toISOString() });
        if (techMgr) nd.notifications.unshift({ id: `ntf-${ts}-t`, type: 'complaint', message: `⚠️ New complaint: ${cmpClientName} — ${fields.severity}`, read: false, timestamp: new Date().toISOString() });
        window.BucklerDB.saveData(nd);
        renderNotifications();
        showToast('New complaint logged — team notified ✓', 'success');
      }
      els.modalBackdrop.style.display = 'none';
      renderComplaints();
    }

    else if (entity === 'resolveComplaint') {
      const form = document.getElementById('resolve-complaint-form');
      if (!form.checkValidity()) { form.reportValidity(); return; }

      const fields = {
        status: 'Resolved',
        resolutionDetails: document.getElementById('cmp-resolve-details').value
      };

      window.BucklerDB.update('complaints', id, fields);
      showToast('Complaint resolved successfully!', 'success');
      els.modalBackdrop.style.display = 'none';
      renderComplaints();
    }
    
    else if (entity === 'operationLogsSubmit') {
      const form = document.getElementById('op-log-form');
      if (!form.checkValidity()) { form.reportValidity(); return; }

      const sigCanvas = state.signaturePad;
      const blank = document.createElement('canvas');
      blank.width = sigCanvas.width;
      blank.height = sigCanvas.height;
      
      if (sigCanvas.toDataURL() === blank.toDataURL()) {
        alert('Please ask the client to draw their signature.');
        return;
      }

      const timeIn = document.getElementById('log-modal-time-in').value;
      const timeOut = document.getElementById('log-modal-time-out').value;
      
      const itemsConsumed = [];
      document.querySelectorAll('#items-consumed-rows .consume-row').forEach(row => {
        const itemId = row.querySelector('.consume-item-select').value;
        const qty = parseFloat(row.querySelector('.consume-qty-input').value) || 0;
        if (itemId) {
          itemsConsumed.push({ itemId, qty });
        }
      });

      const baitStationsAudit = [];
      const logBaitCheckbox = document.getElementById('log-modal-enable-bait');
      if (logBaitCheckbox && logBaitCheckbox.checked) {
        document.querySelectorAll('#bait-audit-table-body tr').forEach(row => {
          const numberInput = row.querySelector('.log-bait-number');
          const number = parseInt(numberInput.value) || 0;
          const locationInput = row.querySelector('.log-bait-location');
          const location = locationInput.value.trim();
          const activity = row.querySelector('.log-bait-activity').value;
          const comments = row.querySelector('.log-bait-comment').value.trim();
          if (number > 0 && location) {
            baitStationsAudit.push({ number, location, activity, comments });
          }
        });
      }

      const uvMachinesAudit = [];
      const logUvCheckbox = document.getElementById('log-modal-enable-uv');
      if (logUvCheckbox && logUvCheckbox.checked) {
        document.querySelectorAll('#uv-audit-table-body tr').forEach(row => {
          const numberInput = row.querySelector('.log-uv-number');
          const number = parseInt(numberInput.value) || 0;
          const locationInput = row.querySelector('.log-uv-location');
          const location = locationInput.value.trim();
          const catchRate = parseInt(row.querySelector('.log-uv-catch').value) || 0;
          if (number > 0 && location) {
            uvMachinesAudit.push({ number, location, catchRate });
          }
        });
      }

      const baitStickersReplaced = logBaitCheckbox && logBaitCheckbox.checked 
        ? parseInt(document.getElementById('log-modal-bait-replaced').value) || 0 
        : 0;

      const uvStickersReplaced = logUvCheckbox && logUvCheckbox.checked 
        ? parseInt(document.getElementById('log-modal-uv-replaced').value) || 0 
        : 0;

      const logDetails = {
        timeIn: timeIn,
        timeOut: timeOut,
        itemsConsumed: itemsConsumed,
        comments: document.getElementById('log-modal-comments').value,
        clientComments: document.getElementById('log-modal-client-comments').value,
        clientSignature: sigCanvas.toDataURL(),
        geoLocation: document.getElementById('log-modal-geolocation').value,
        pictures: state.uploadedPictures || [],
        baitStationsAudit: baitStationsAudit.length ? baitStationsAudit : null,
        uvMachinesAudit: uvMachinesAudit.length ? uvMachinesAudit : null,
        baitStickersReplaced: baitStickersReplaced,
        uvStickersReplaced: uvStickersReplaced
      };

      const success = window.BucklerDB.conductVisit(id, logDetails);
      if (success) {
        showToast('Operation log saved and visit conducted!', 'success');
        els.modalBackdrop.style.display = 'none';
        renderSchedules();
      } else {
        showToast('Failed to log operation details', 'error');
      }
    }
    
    else if (entity === 'sectors') {
      const form = document.getElementById('sector-form');
      if (!form.checkValidity()) { form.reportValidity(); return; }

      const newId = document.getElementById('sec-modal-id').value.trim();
      const name = document.getElementById('sec-modal-name').value.trim();
      if (!newId || !name) {
        showToast('Sector ID and name cannot be empty', 'error');
        return;
      }

      const sectors = window.BucklerDB.get('sectors');
      const duplicateName = sectors.find(s => s.name.toLowerCase() === name.toLowerCase() && String(s.id) !== String(id));
      if (duplicateName) {
        showToast('A sector with this name already exists', 'error');
        return;
      }

      const duplicateId = sectors.find(s => String(s.id).toLowerCase() === newId.toLowerCase() && String(s.id) !== String(id));
      if (duplicateId) {
        showToast('A sector with this ID/Code already exists', 'error');
        return;
      }

      if (id) {
        const oldSector = sectors.find(s => String(s.id) === String(id));
        const oldName = oldSector ? oldSector.name : null;
        
        window.BucklerDB.update('sectors', id, { id: newId, name: name });

        if (oldName && oldName !== name) {
          const clients = window.BucklerDB.get('clients');
          clients.forEach(c => {
            if (c.sector === oldName) {
              window.BucklerDB.update('clients', c.id, { sector: name });
            }
          });
          renderClients();
        }

        showToast('Sector updated successfully', 'success');
      } else {
        window.BucklerDB.insert('sectors', { id: newId, name: name });
        showToast('New sector added', 'success');
      }
      els.modalBackdrop.style.display = 'none';
      renderSectors();
    }
  }

  // 14. CSV Upload Parser
  function setupCSVUpload() {
    const setupDropZone = (zone, fileInput, parserFn) => {
      zone.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('click', (e) => e.stopPropagation());
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.style.borderColor = 'var(--primary-red)';
      });
      zone.addEventListener('dragleave', () => {
        zone.style.borderColor = 'var(--border-color)';
      });
      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.style.borderColor = 'var(--border-color)';
        if (e.dataTransfer.files.length) {
          fileInput.files = e.dataTransfer.files;
          parserFn(e.dataTransfer.files[0]);
        }
      });
      fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
          parserFn(e.target.files[0]);
        }
      });
    };

    setupDropZone(els.uploadClientsZone, els.clientsFileInput, parseClientsCSV);
    setupDropZone(els.uploadItemsZone, els.itemsFileInput, parseItemsCSV);
    if (els.uploadSectorsZone && els.sectorsFileInput) {
      setupDropZone(els.uploadSectorsZone, els.sectorsFileInput, parseSectorsCSV);
    }
  }

  function parseClientsCSV(file) {
    if (!file.name.endsWith('.csv')) {
      showToast('Please upload a valid CSV file', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
      const text = e.target.result;
      const rows = text.split('\n').map(row => row.trim()).filter(row => row.length > 0);
      
      if (rows.length < 2) {
        showToast('The CSV file is empty or missing data rows', 'error');
        return;
      }

      const headers = rows[0].split(',').map(h => h.trim().toLowerCase());
      
      let importedCount = 0;
      for (let i = 1; i < rows.length; i++) {
        const cols = parseCSVRow(rows[i]);
        if (cols.length < headers.length) continue;

        const rowData = {};
        headers.forEach((header, idx) => {
          rowData[header] = cols[idx] || '';
        });

        const region = mapCSVRegion(rowData.region);
        const hub = MAP_COORDS[region];

        const newClient = {
          clientCode: rowData.clientcode || rowData.code || '',
          name: rowData.name || 'Unnamed Client',
          sector: rowData.sector || 'Retail',
          contact: rowData.contact || 'No Contact',
          phone: rowData.phone || '',
          email: rowData.email || '',
          region: region,
          address: rowData.address || 'Iraq',
          lat: parseFloat(rowData.lat) || (hub.lat + (Math.random() - 0.5) * 0.1),
          lng: parseFloat(rowData.lng) || (hub.lng + (Math.random() - 0.5) * 0.1)
        };

        window.BucklerDB.insert('clients', newClient);
        importedCount++;
      }

      showToast(`Successfully imported ${importedCount} clients!`, 'success');
      renderClients();
    };
    reader.readAsText(file);
  }

  function parseItemsCSV(file) {
    if (!file.name.endsWith('.csv')) {
      showToast('Please upload a valid CSV file', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
      const text = e.target.result;
      const rows = text.split('\n').map(row => row.trim()).filter(row => row.length > 0);
      
      if (rows.length < 2) {
        showToast('The CSV file is empty or missing data rows', 'error');
        return;
      }

      const headers = rows[0].split(',').map(h => h.trim().toLowerCase());
      
      let importedCount = 0;
      for (let i = 1; i < rows.length; i++) {
        const cols = parseCSVRow(rows[i]);
        if (cols.length < headers.length) continue;

        const rowData = {};
        headers.forEach((header, idx) => {
          rowData[header] = cols[idx] || '';
        });

        const newItem = {
          itemCode: rowData.itemcode || rowData.code || '',
          name: rowData.name || 'Unnamed Product',
          unit: rowData.unit || 'Units',
          stock: parseFloat(rowData.stock) || 0
        };

        window.BucklerDB.insert('items', newItem);
        importedCount++;
      }

      showToast(`Successfully imported ${importedCount} inventory items!`, 'success');
      renderItems();
    };
    reader.readAsText(file);
  }

  function parseCSVRow(rowText) {
    const result = [];
    let insideQuotes = false;
    let currentField = '';

    for (let i = 0; i < rowText.length; i++) {
      const char = rowText[i];
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        result.push(currentField.trim());
        currentField = '';
      } else {
        currentField += char;
      }
    }
    result.push(currentField.trim());
    return result;
  }

  function mapCSVRegion(regionStr = '') {
    const str = regionStr.toLowerCase().trim();
    if (str.includes('kurd') || str.includes('erbil') || str.includes('suly')) return 'Kurdistan';
    if (str.includes('south') || str.includes('basra')) return 'South';
    return 'Central';
  }

  // 15. Actions Buttons
  function setupActionButtons() {
    els.btnAddSchedule.addEventListener('click', () => openScheduleModal());
    els.btnAddClient.addEventListener('click', () => openClientModal());
    els.btnAddItem.addEventListener('click', () => openItemModal());
    els.btnAddUser.addEventListener('click', () => openUserModal());
    els.btnAddComplaint.addEventListener('click', () => openComplaintModal());

    els.btnResetDB.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset the CRM database? This will clear all changes and restore default mock logs.')) {
        window.BucklerDB.reset();
        showToast('Database reset to defaults', 'success');
        setupRoleSelector();
        switchUser(els.roleSelector.value);
      }
    });

    if (els.btnExportDB) {
      els.btnExportDB.addEventListener('click', async () => {
        const dbData = window.localStorage.getItem('buckler_crm_data');
        if (!dbData) {
          showToast('No database data found to save', 'error');
          return;
        }

        if (window.showSaveFilePicker) {
          try {
            const handle = await window.showSaveFilePicker({
              suggestedName: 'buckler_crm_backup.json',
              types: [{
                description: 'JSON Backup Files',
                accept: { 'application/json': ['.json'] }
              }]
            });
            const writable = await handle.createWritable();
            await writable.write(dbData);
            await writable.close();
            showToast('Database backup saved directly to project folder', 'success');
            return;
          } catch (err) {
            if (err.name === 'AbortError') {
              showToast('Backup save cancelled', 'warning');
              return;
            }
            console.warn('showSaveFilePicker failed/unsupported, falling back to download:', err);
          }
        }

        downloadFile(dbData, 'buckler_crm_backup.json', 'application/json');
        showToast('Database backup saved successfully', 'success');
      });
    }

    if (els.btnImportDB && els.dbFileInput) {
      els.btnImportDB.addEventListener('click', async () => {
        if (window.showOpenFilePicker) {
          try {
            const [handle] = await window.showOpenFilePicker({
              types: [{
                description: 'JSON Backup Files',
                accept: { 'application/json': ['.json'] }
              }]
            });
            const file = await handle.getFile();
            const content = await file.text();
            const parsed = JSON.parse(content);
            if (parsed && typeof parsed === 'object' && parsed.users && parsed.clients) {
              window.localStorage.setItem('buckler_crm_data', content);
              showToast('Database restored successfully! Reloading portal...', 'success');
              setTimeout(() => {
                window.location.reload();
              }, 1200);
            } else {
              showToast('Invalid backup file. Missing critical CRM tables.', 'error');
            }
            return;
          } catch (err) {
            if (err.name === 'AbortError') {
              showToast('Restore cancelled', 'warning');
              return;
            }
            console.warn('showOpenFilePicker failed/unsupported, falling back to file input:', err);
          }
        }

        els.dbFileInput.click();
      });

      els.dbFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const content = event.target.result;
            const parsed = JSON.parse(content);
            if (parsed && typeof parsed === 'object' && parsed.users && parsed.clients) {
              window.localStorage.setItem('buckler_crm_data', content);
              showToast('Database restored successfully! Reloading portal...', 'success');
              setTimeout(() => {
                window.location.reload();
              }, 1200);
            } else {
              showToast('Invalid backup file. Missing critical CRM tables.', 'error');
            }
          } catch (err) {
            console.error(err);
            showToast('Failed to parse backup file. Must be a valid JSON structure.', 'error');
          }
        };
        reader.readAsText(file);
        els.dbFileInput.value = '';
      });
    }

    els.btnDownloadClientTmpl.addEventListener('click', () => {
      const content = 'clientCode,name,sector,contact,phone,email,region,address,lat,lng\nBGD-MALL,Baghdad Mall,Retail,Zaid Mahmoud,+9647701234567,info@baghdadmall.iq,Central,Al-Harthiya Baghdad,33.3130,44.3640\nERB-CAFE,Erbil University Cafe,Hospitality,Aram Qadir,+9647501553344,cafe@erbiluniv.edu,Kurdistan,Gulan Street Erbil,36.2110,44.0040\nRUM-LOG,Rumaila Camp Logistics,Logistics,Mazin Salim,+9647801119988,logistics@rumaila.com,South,North Camp Basra,30.3450,47.4200';
      downloadFile(content, 'buckler_clients_template.csv', 'text/csv');
    });

    els.btnDownloadItemTmpl.addEventListener('click', () => {
      const content = 'itemCode,name,unit,stock\nPERM-10,Permethrin 10% EC,Liters,100\nVIRK-S,Virkon S Powder,Kg,50\nROD-BAIT,Rodent Bait Stations,Units,200';
      downloadFile(content, 'buckler_items_template.csv', 'text/csv');
    });

    els.btnShareCrm.addEventListener('click', () => openShareCrmModal());
    els.btnSupabaseConfig.addEventListener('click', () => openSupabaseConfigModal());

    if (els.btnAddSector) {
      els.btnAddSector.addEventListener('click', () => openSectorModal());
    }

    if (els.btnDlSectorTmpl) {
      els.btnDlSectorTmpl.addEventListener('click', () => {
        const content = 'name\nRetail\nHospitality\nHealthcare\nCorporate\nEducation\nLogistics\nOil & Gas';
        downloadFile(content, 'buckler_sectors_template.csv', 'text/csv');
      });
    }
  }

  function openShareCrmModal() {
    const dbString = localStorage.getItem('buckler_crm_data');
    if (!dbString) return;

    try {
      const base64Str = btoa(unescape(encodeURIComponent(dbString)));
      const shareUrl = window.location.origin + window.location.pathname + '?db=' + base64Str;

      const html = `
        <div style="display:flex; flex-direction:column; gap:1.2rem; max-width:500px; width:100%; color:var(--text-dark);">
          
          <!-- Cloud Short Link Card -->
          <div style="background:rgba(0,0,0,0.02); border:1px solid rgba(0,0,0,0.08); padding:1rem; border-radius:10px; display:flex; flex-direction:column; gap:0.8rem;">
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span style="font-size:1.2rem;">☁️</span>
              <strong style="font-size:0.95rem;">Live Cloud Short Link (Recommended)</strong>
            </div>
            <p style="font-size:0.8rem; color:var(--text-medium); margin:0; line-height:1.4;">
              Uploads your active database state (including custom users, permissions, and logs) to a secure cloud vault and creates a compact link. Anyone with this link can load it, edit it, and share back their changes.
            </p>
            <div id="short-link-container" style="display:flex; flex-direction:column; gap:0.6rem;">
              <button class="btn btn-primary" id="btn-generate-short-link" style="width:100%; font-weight:700; background:#3B82F6; border:none; padding:0.6rem; border-radius:6px; cursor:pointer; color:white;">
                ⚡ Generate Cloud Short Link
              </button>
            </div>
          </div>
          
          <!-- Offline Base64 Link Card -->
          <div style="background:rgba(0,0,0,0.02); border:1px solid rgba(0,0,0,0.08); padding:1rem; border-radius:10px; display:flex; flex-direction:column; gap:0.8rem;">
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span style="font-size:1.2rem;">💾</span>
              <strong style="font-size:0.95rem;">Standalone Full Offline Link</strong>
            </div>
            <p style="font-size:0.8rem; color:var(--text-medium); margin:0; line-height:1.4;">
              Encapsulates the entire database string directly into the URL itself. No internet connection or cloud storage is needed, but the link will be very long.
            </p>
            <div style="display:flex; gap:0.5rem; width:100%;">
              <input type="text" id="share-link-input" class="form-control" value="${shareUrl}" readonly style="flex:1; font-family: monospace; font-size:0.75rem; background:#F1F5F9; border:1px solid #CBD5E1;">
              <button class="btn btn-secondary" id="btn-copy-share-link" style="min-width: 85px; font-weight:700; background:#64748B; border:none; color:white; padding:0.5rem; border-radius:6px; cursor:pointer;">Copy</button>
            </div>
          </div>

        </div>
      `;

      showModal('Share CRM Database State', html, false);

      // 1. Setup Live Cloud Short Link Generator Event
      const generateBtn = document.getElementById('btn-generate-short-link');
      const shortContainer = document.getElementById('short-link-container');
      
      generateBtn.addEventListener('click', async () => {
        generateBtn.disabled = true;
        generateBtn.textContent = '⏳ Uploading to Cloud Vault...';
        
        try {
          const shortId = Math.random().toString(36).substring(2, 10);
          const url = `https://kvdb.io/FEbmm6WytJQ3UyTmUAV16B/${shortId}`;
          
          const response = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: dbString
          });
          
          if (!response.ok) throw new Error('Cloud storage returned status: ' + response.status);
          
          const shortShareUrl = window.location.origin + window.location.pathname + '?share=' + shortId;
          
          shortContainer.innerHTML = `
            <div style="display:flex; gap:0.5rem; width:100%;">
              <input type="text" id="short-share-link-input" class="form-control" value="${shortShareUrl}" readonly style="flex:1; font-family: monospace; font-size:0.75rem; background:#ECFDF5; border:1px solid #10B981; color:#065F46; padding:0.5rem; border-radius:6px;">
              <button class="btn btn-primary" id="btn-copy-short-share-link" style="min-width: 85px; font-weight: 700; background:#10B981; border:none; color:white; padding:0.5rem; border-radius:6px; cursor:pointer;">Copy</button>
            </div>
          `;
          
          const copyShortBtn = document.getElementById('btn-copy-short-share-link');
          const shortInput = document.getElementById('short-share-link-input');
          copyShortBtn.addEventListener('click', () => {
            shortInput.select();
            document.execCommand('copy');
            copyShortBtn.textContent = 'Copied!';
            showToast('Cloud short link copied to clipboard', 'success');
            setTimeout(() => {
              copyShortBtn.textContent = 'Copy';
            }, 2000);
          });
          
        } catch (err) {
          console.error(err);
          generateBtn.disabled = false;
          generateBtn.textContent = '⚡ Try Again';
          showToast('Failed to upload cloud state: ' + err.message, 'error');
        }
      });

      // 2. Setup Offline Link Copy Event
      const copyBtn = document.getElementById('btn-copy-share-link');
      const input = document.getElementById('share-link-input');
      copyBtn.addEventListener('click', () => {
        input.select();
        document.execCommand('copy');
        copyBtn.textContent = 'Copied!';
        showToast('Offline share link copied to clipboard', 'success');
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
        }, 2000);
      });

    } catch (e) {
      console.error(e);
      showToast('Failed to generate share link', 'error');
    }
  }

  function openSupabaseConfigModal() {
    let urlVal = '';
    let keyVal = '';
    try {
      const configStr = localStorage.getItem('buckler_supabase_config');
      if (configStr) {
        const config = JSON.parse(configStr);
        urlVal = config.url || '';
        keyVal = config.key || '';
      }
    } catch (e) {}

    const isConnected = window.BucklerDB.isSupabase;
    const statusText = isConnected 
      ? '<span style="color:#10B981; font-weight:700; font-size:0.85rem;">🟢 Connected to Supabase Cloud Database</span>' 
      : '<span style="color:#64748B; font-weight:700; font-size:0.85rem;">🔴 Offline Mode (localStorage Fallback)</span>';

    const html = `
      <div style="display:flex; flex-direction:column; gap:1.2rem; max-width:550px; width:100%; color:var(--text-dark);">
        <p style="font-size:0.85rem; color:var(--text-medium); margin:0; line-height:1.5;">
          Connect the CRM portal to your Supabase project to synchronize users, schedules, and operations in real-time across your team.
        </p>

        <div style="background:#F8FAFC; border:1px solid var(--border-color); padding:1rem; border-radius:8px; display:flex; flex-direction:column; gap:0.4rem;">
          <span style="font-size:0.75rem; font-weight:700; color:var(--text-medium); text-transform:uppercase; letter-spacing:0.05em;">Connection Status</span>
          <div>${statusText}</div>
        </div>

        <form id="supabase-config-form" style="display:flex; flex-direction:column; gap:1rem;">
          <div class="form-group" style="margin:0;">
            <label for="sb-url-input" style="font-weight:700; font-size:0.8rem; margin-bottom:0.35rem; display:block;">Supabase Project URL *</label>
            <input type="url" id="sb-url-input" class="form-control" placeholder="https://your-project-id.supabase.co" value="${urlVal}" required />
          </div>

          <div class="form-group" style="margin:0;">
            <label for="sb-key-input" style="font-weight:700; font-size:0.8rem; margin-bottom:0.35rem; display:block;">Supabase Anon API Key *</label>
            <textarea id="sb-key-input" class="form-control" placeholder="eyJhbGciOi..." style="min-height:80px; font-family:monospace; font-size:0.75rem; resize:vertical;" required>${keyVal}</textarea>
          </div>

          <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
            <button type="button" class="btn btn-primary" id="btn-sb-save" style="flex:1; font-weight:700;">
              🔌 Test & Connect
            </button>
            ${isConnected ? `
              <button type="button" class="btn btn-danger" id="btn-sb-disconnect" style="font-weight:700; background:#EF4444; border:none; color:white;">
                Disconnect
              </button>
            ` : ''}
          </div>
        </form>

        ${isConnected ? `
          <div style="border-top:1px dashed var(--border-color); padding-top:1rem; margin-top:0.5rem; display:flex; flex-direction:column; gap:0.8rem;">
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span style="font-size:1.1rem;">📤</span>
              <strong style="font-size:0.9rem; color:var(--text-dark);">First-Time Database Seeder</strong>
            </div>
            <p style="font-size:0.78rem; color:var(--text-medium); margin:0; line-height:1.4;">
              If your Supabase database is currently empty, click below to push your local mock data (clients, users, and schedules) to populate the cloud tables.
            </p>
            <button class="btn btn-secondary" id="btn-sb-seed" style="width:100%; font-weight:700; border:1px solid #3B82F6; color:#2563EB; background:transparent;">
              Seed Local Data to Supabase
            </button>
          </div>
        ` : ''}
      </div>
    `;

    showModal('Supabase Database Settings', html, false);

    // 1. Connect / Save
    const saveBtn = document.getElementById('btn-sb-save');
    saveBtn.addEventListener('click', async () => {
      let url = document.getElementById('sb-url-input').value.trim();
      const key = document.getElementById('sb-key-input').value.trim();

      // Automatically clean up trailing slashes and /rest/v1 suffixes
      if (url.endsWith('/')) {
        url = url.slice(0, -1);
      }
      if (url.endsWith('/rest/v1')) {
        url = url.slice(0, -8);
      }
      if (url.endsWith('/')) {
        url = url.slice(0, -1);
      }

      if (!url || !key) {
        showToast('Please fill in both Supabase URL and Anon Key.', 'error');
        return;
      }

      saveBtn.disabled = true;
      saveBtn.textContent = '⏳ Testing Connection...';

      try {
        await window.BucklerDB.connectSupabase(url, key);
        showToast('Successfully connected and synced to Supabase!', 'success');
        
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (err) {
        console.error(err);
        saveBtn.disabled = false;
        saveBtn.textContent = '🔌 Test & Connect';
        showToast('Connection failed: ' + err.message, 'error');
      }
    });

    // 2. Disconnect
    const discBtn = document.getElementById('btn-sb-disconnect');
    if (discBtn) {
      discBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to disconnect from Supabase and restore your offline database?')) {
          window.BucklerDB.disconnectSupabase();
          showToast('Disconnected. CRM reverted to offline LocalStorage mode.', 'success');
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      });
    }

    // 3. Seed Local Data
    const seedBtn = document.getElementById('btn-sb-seed');
    if (seedBtn) {
      seedBtn.addEventListener('click', async () => {
        if (confirm('Are you sure you want to push all your current local users, clients, vehicles, and schedules to Supabase? (Warning: This will overwrite duplicates)')) {
          seedBtn.disabled = true;
          seedBtn.textContent = '⏳ Uploading data rows...';
          try {
            await window.BucklerDB.pushLocalDataToSupabase();
            showToast('All local data successfully synced to Supabase!', 'success');
            seedBtn.textContent = 'Sync Complete';
          } catch (err) {
            console.error(err);
            seedBtn.disabled = false;
            seedBtn.textContent = 'Seed Local Data to Supabase';
            showToast('Sync failed: ' + err.message, 'error');
          }
        }
      });
    }
  }

  function downloadFile(content, fileName, contentType) {
    const a = document.createElement('a');
    a.href = `data:${contentType};charset=utf-8,` + encodeURIComponent(content);
    a.download = fileName;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  // 16. Multi-User Messaging Chat Portal
  function setupChatEvents() {
    els.chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendChatMessage();
      }
    });

    els.chatSendBtn.addEventListener('click', () => {
      sendChatMessage();
    });
  }

  function renderChat() {
    const region = getRestrictedRegion();
    const city = getRestrictedCity();
    const users = window.BucklerDB.get('users');

    const channels = [
      { id: 'chan-central', name: '# Central region chat' },
      { id: 'chan-kurdistan', name: '# Kurdistan region chat' },
      { id: 'chan-south', name: '# South region chat' }
    ];

    let filteredChannels = channels;
    if (region !== 'All') {
      filteredChannels = channels.filter(ch => ch.id === `chan-${region.toLowerCase()}`);
    }

    els.chatChannelsList.innerHTML = filteredChannels.map(ch => `
      <button class="nav-link chat-target-btn" style="text-align:left; border:none; background:none; width:100%;" data-id="${ch.id}">
        ${ch.name}
      </button>
    `).join('');

    let dmUsers = users.filter(u => u.id !== state.currentUser.id);
    if (region !== 'All') {
      dmUsers = dmUsers.filter(u => u.region === region || u.region === 'All');
    }
    if (city !== 'All') {
      dmUsers = dmUsers.filter(u => u.city === city || u.city === 'All');
    }
    
    els.chatUsersList.innerHTML = dmUsers.map(u => `
      <button class="nav-link chat-target-btn" style="text-align:left; border:none; background:none; width:100%; display:flex; justify-content:space-between; align-items:center;" data-id="${u.id}">
        <span>${u.name}</span>
        <span style="font-size:0.6rem; color:var(--text-muted); font-weight:600;">${u.role.substring(0,3).toUpperCase()}</span>
      </button>
    `).join('');

    document.querySelectorAll('.chat-target-btn').forEach(btn => {
      const id = btn.getAttribute('data-id');
      if (state.activeChatTarget === id) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }

      btn.addEventListener('click', () => {
        state.activeChatTarget = id;
        renderActiveConversation();
        renderChat();
      });
    });

    renderActiveConversation();
  }

  function renderActiveConversation() {
    const targetId = state.activeChatTarget;
    if (!targetId) {
      els.activeChatTitle.textContent = 'Select a conversation';
      els.activeChatStatus.textContent = 'Pick a staff member or group chat channel';
      els.chatMessagesContainer.innerHTML = '<div style="margin:auto; color:var(--text-muted); font-size:0.85rem;">No active conversation.</div>';
      els.chatInput.disabled = true;
      els.chatSendBtn.disabled = true;
      return;
    }

    els.chatInput.disabled = false;
    els.chatSendBtn.disabled = false;

    const messages = window.BucklerDB.get('messages');
    const users = window.BucklerDB.get('users');

    let isChannel = targetId.startsWith('chan-');
    let conversationMessages = [];
    let chatTitle = '';
    let chatStatus = '';

    if (isChannel) {
      const chNames = { 'chan-central': 'Central region Broadcast', 'chan-kurdistan': 'Kurdistan region Broadcast', 'chan-south': 'South region Broadcast' };
      chatTitle = chNames[targetId];
      chatStatus = `All regional staff channel`;
      
      conversationMessages = messages.filter(m => m.receiverId === targetId);
    } else {
      const contact = users.find(u => u.id === targetId);
      chatTitle = contact ? contact.name : 'Unknown User';
      chatStatus = contact ? `${contact.role.toUpperCase()} - ${contact.region}` : '';
      
      conversationMessages = messages.filter(m => 
        (m.senderId === state.currentUser.id && m.receiverId === targetId) ||
        (m.senderId === targetId && m.receiverId === state.currentUser.id)
      );
    }

    els.activeChatTitle.textContent = chatTitle;
    els.activeChatStatus.textContent = chatStatus;

    els.chatMessagesContainer.innerHTML = conversationMessages.length ? conversationMessages.map(msg => {
      const sender = users.find(u => u.id === msg.senderId);
      const senderName = sender ? sender.name : 'Staff';
      const isSelf = msg.senderId === state.currentUser.id;
      
      const timeStr = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      return `
        <div style="display:flex; flex-direction:column; align-self: ${isSelf ? 'flex-end' : 'flex-start'}; max-width: 75%;">
          <span style="font-size:0.65rem; color:var(--text-muted); margin-bottom: 2px; align-self: ${isSelf ? 'flex-end' : 'flex-start'};">
            ${isSelf ? 'You' : senderName} (${timeStr})
          </span>
          <div style="background: ${isSelf ? 'var(--primary-red)' : '#FFFFFF'}; color: ${isSelf ? '#FFFFFF' : 'var(--text-dark)'}; padding:0.65rem 1rem; border-radius: ${isSelf ? '12px 12px 0 12px' : '12px 12px 12px 0'}; box-shadow:var(--shadow-sm); font-size:0.85rem; line-height:1.4;">
            ${msg.text}
          </div>
        </div>
      `;
    }).join('') : '<div style="margin:auto; color:var(--text-muted); font-size:0.85rem; font-style:italic;">No messages in this chat yet. Send a message to start!</div>';

    els.chatMessagesContainer.scrollTop = els.chatMessagesContainer.scrollHeight;
  }

  function sendChatMessage() {
    const text = els.chatInput.value.trim();
    if (!text || !state.activeChatTarget) return;

    const newMessage = {
      senderId: state.currentUser.id,
      receiverId: state.activeChatTarget,
      text: text,
      timestamp: new Date().toISOString()
    };

    window.BucklerDB.insert('messages', newMessage);
    els.chatInput.value = '';
    renderActiveConversation();
  }

  // 17. FAQ & Database-Aware Informative Chatbot
  function setupChatbotEvents() {
    els.chatbotBubbleBtn.addEventListener('click', () => {
      const show = els.chatbotWindow.style.display === 'flex';
      els.chatbotWindow.style.display = show ? 'none' : 'flex';
    });

    els.chatbotCloseBtn.addEventListener('click', () => {
      els.chatbotWindow.style.display = 'none';
    });

    els.chatbotSendBtn.addEventListener('click', submitChatbotQuery);
    els.chatbotInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') submitChatbotQuery();
    });

    document.querySelectorAll('.bot-suggest').forEach(lnk => {
      lnk.addEventListener('click', (e) => {
        e.preventDefault();
        els.chatbotInput.value = lnk.textContent;
        submitChatbotQuery();
      });
    });
  }

  function submitChatbotQuery() {
    const text = els.chatbotInput.value.trim();
    if (!text) return;

    appendChatbotMessage(text, 'user');
    els.chatbotInput.value = '';

    setTimeout(() => {
      const answer = generateChatbotReply(text);
      appendChatbotMessage(answer, 'bot');
    }, 400);
  }

  function appendChatbotMessage(text, sender) {
    const isSelf = sender === 'user';
    const div = document.createElement('div');
    div.style.cssText = `
      background: ${isSelf ? 'var(--primary-red)' : '#E2E8F0'};
      color: ${isSelf ? '#FFFFFF' : 'var(--text-dark)'};
      padding: 0.65rem 0.85rem;
      border-radius: ${isSelf ? '10px 10px 0 10px' : '10px 10px 10px 0'};
      max-width: 85%;
      align-self: ${isSelf ? 'flex-end' : 'flex-start'};
      line-height: 1.4;
    `;
    div.innerHTML = text;
    els.chatbotMessages.appendChild(div);
    els.chatbotMessages.scrollTop = els.chatbotMessages.scrollHeight;
  }

  function generateChatbotReply(query) {
    const q = query.toLowerCase();

    if (q.includes('client') || q.includes('customer') || q.includes('how many client')) {
      const clients = window.BucklerDB.get('clients');
      const regions = ['Central', 'Kurdistan', 'South'];
      let msg = `We currently manage <strong>${clients.length} active corporate clients</strong> across Iraq:<br/><br/>`;
      regions.forEach(reg => {
        const count = clients.filter(c => c.region === reg).length;
        msg += `• <strong>${reg} Region:</strong> ${count} clients<br/>`;
      });
      msg += `<br/>Click the **Client Registry** tab in the sidebar to search or edit client details.`;
      return msg;
    }

    if (q.includes('stock') || q.includes('inventory') || q.includes('chemical') || q.includes('pesticide') || q.includes('low stock')) {
      const items = window.BucklerDB.get('items');
      const lowStock = items.filter(i => i.stock < 100);
      
      let msg = `<strong>Inventory Summary:</strong><br/>`;
      if (lowStock.length) {
        msg += `⚠️ The following items are running low in stock:<br/>`;
        lowStock.forEach(i => {
          msg += `• <strong>${i.name}</strong>: ${i.stock} ${i.unit} left.<br/>`;
        });
      } else {
        msg += `✅ All products have healthy stock counts.<br/>`;
      }
      msg += `<br/>Click on the **Products & Inventory** tab to view product details and restock products.`;
      return msg;
    }

    if (q.includes('team leader') || q.includes('staff') || q.includes('driver')) {
      const tls = window.BucklerDB.getTeamLeaders('All');
      let msg = `<strong>Registered Team Leaders (${tls.length} staff members):</strong><br/><br/>`;
      const regions = ['Central', 'Kurdistan', 'South'];
      regions.forEach(reg => {
        const regTLs = tls.filter(t => t.region === reg).map(t => t.name);
        msg += `• <strong>${reg} drivers:</strong> ${regTLs.join(', ')}<br/>`;
      });
      return msg;
    }

    if (q.includes('complaint') || q.includes('issue') || q.includes('problem')) {
      const complaints = window.BucklerDB.get('complaints');
      const pending = complaints.filter(c => c.status !== 'Resolved');
      
      let msg = `We currently have <strong>${complaints.length} logged complaints</strong>.<br/>`;
      if (pending.length) {
        msg += `⚠️ <strong>${pending.length} unresolved issues</strong> require review:<br/>`;
        pending.forEach(c => {
          msg += `• <strong>${c.complainantName}</strong> (${c.region}) [${c.severity} Severity]: <em>"${c.details.substring(0,35)}..."</em><br/>`;
        });
      } else {
        msg += `✅ Zero unresolved complaints registered!`;
      }
      return msg;
    }

    if (q.includes('schedule') || q.includes('visit') || q.includes('today') || q.includes('what is scheduled')) {
      const todayStr = '2026-06-04';
      const schedules = window.BucklerDB.get('schedules').filter(s => s.date === todayStr);
      
      let msg = `<strong>Visits scheduled today (${todayStr}):</strong> ${schedules.length} visits.<br/><br/>`;
      if (schedules.length) {
        const clients = window.BucklerDB.get('clients');
        schedules.forEach(s => {
          const client = clients.find(c => c.id === s.clientId);
          const cName = client ? client.name : 'Client';
          msg += `• <strong>${s.time}</strong> - ${cName} (${s.region}): ${s.service} (TL: ${s.teamLeaderId.replace('tl-','')})<br/>`;
        });
      } else {
        msg += `No visits scheduled for today.`;
      }
      return msg;
    }

    if (q.includes('termite') || q.includes('treatment')) {
      return `<strong>Termite Barrier Treatment SOW:</strong><br/>
      We use **Termidor HE** (Fipronil-based) which forms a non-repellent chemical barrier. 
      For pre-construction, we inject barriers into expansion joints. For active infestations, we spray galleries and apply bait blocks. Treatments typically carry a 5-year guarantee.`;
    }

    if (q.includes('weed') || q.includes('grass')) {
      return `<strong>Weed Removal SOW:</strong><br/>
      We apply **Glyphosate 480** systemic herbicide. Best applied during dry seasons, repeating treatments after 3 weeks to kill root nodes. High safety precautions around decorative landscaping crops.`;
    }

    if (q.includes('disinfection') || q.includes('poultry')) {
      return `<strong>Poultry Disinfection SOW:</strong><br/>
      We use **Virkon S** virucidal powder diluted at a 1:100 ratio. Disinfection misting is applied to coops, vehicles, and hatcheries, targeting Avian Influenza and Salmonella.`;
    }

    return `I couldn't find a direct database match for that question. 
    <br/><br/>
    I can search live records for:
    • **"low stock"** (inventory)
    • **"complaints"** (tickets)
    • **"today's schedules"** (visits)
    • **"clients count"** (registry)
    • Or ask me about **termite treatment** or **weed removal** protocols in Iraq.`;
  }

  // 18. Missing Operations CRM Helpers and Modal Handlers
  function getRestrictedRegion() {
    if (!state.currentUser) return 'All';
    const role = state.currentUser.role.toLowerCase();
    if (role === 'gm' || role === 'tech manager') {
      return 'All';
    }
    return state.currentUser.region || 'All';
  }

  function getRestrictedCity() {
    if (!state.currentUser) return 'All';
    const role = state.currentUser.role.toLowerCase();
    if (role === 'gm' || role === 'tech manager') {
      return 'All';
    }
    return state.currentUser.city || 'All';
  }

  function updateMapDisplay(region) {
    if (!dashboardMap) {
      setupMapInteraction();
    }
    if (!dashboardMap) return;

    const schedules = window.BucklerDB.get('schedules');
    const counts = { Central: 0, Kurdistan: 0, South: 0 };
    schedules.forEach(s => {
      if (counts[s.region] !== undefined) {
        counts[s.region]++;
      }
    });

    const maxCount = Math.max(...Object.values(counts), 1);

    ['Central', 'Kurdistan', 'South'].forEach(reg => {
      const cnt = counts[reg];
      const ratio = cnt / maxCount;
      const opacity = 0.15 + 0.55 * ratio;
      const poly = dashboardPolygons[reg];

      if (poly) {
        const isActive = (region === 'All' || region === reg);
        poly.setStyle({
          fillOpacity: opacity,
          color: isActive ? (reg === 'Central' ? '#EF4444' : reg === 'Kurdistan' ? '#3B82F6' : '#10B981') : '#FFFFFF',
          weight: isActive ? 3 : 2
        });
      }
    });
  }

  function calculateDistanceKm(lat1, lon1, lat2, lon2) {
    if (lat1 == null || lon1 == null || lat2 == null || lon2 == null || isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2)) return 0;
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return parseFloat(d.toFixed(1));
  }

  function openComplaintModal(id = null) {
    const isEdit = !!id;
    state.editingRecord = { entity: 'complaints', id: id };
    
    const dbComplaints = window.BucklerDB.get('complaints');
    const complaint = isEdit ? dbComplaints.find(c => c.id === id) : null;
    
    const regionRestr = getRestrictedRegion();
    const cityRestr = getRestrictedCity();
    let clients = window.BucklerDB.getClients(regionRestr);
    if (cityRestr !== 'All') {
      clients = clients.filter(c => c.city === cityRestr);
    }
    const users = window.BucklerDB.get('users');
    
    const initialRegion = complaint ? complaint.region : (regionRestr !== 'All' ? regionRestr : 'Central');
    const initialCity = complaint ? complaint.city : '';
    const cityOptions = getCityOptions(initialRegion, initialCity, false);
    
    const clientOptions = clients.map(c => `
      <option value="${c.id}" ${complaint && complaint.clientId === c.id ? 'selected' : ''}>${c.name} (${c.region})</option>
    `).join('');

    const regionOptions = getRegionOptions(initialRegion, false);

    const getStaffOptions = (reg) => {
      let regStaff = users.filter(u => u.region === 'All' || u.region === reg);
      if (cityRestr !== 'All') {
        regStaff = regStaff.filter(u => u.city === 'All' || u.city === cityRestr);
      }
      return regStaff.map(u => `
        <option value="${u.id}" ${complaint && complaint.assignedStaffId === u.id ? 'selected' : ''}>${u.name} (${u.role})</option>
      `).join('');
    };

    const severityOptions = ['Low', 'Medium', 'High'].map(s => `
      <option value="${s}" ${complaint && complaint.severity === s ? 'selected' : (s === 'Medium' ? 'selected' : '')}>${s}</option>
    `).join('');

    const statusOptions = ['Pending', 'In Progress', 'Resolved'].map(s => `
      <option value="${s}" ${complaint && complaint.status === s ? 'selected' : ''}>${s}</option>
    `).join('');

    const html = `
      <form id="complaint-form">
        <div class="form-group row-split">
          <div>
            <label for="cmp-modal-client">Client *</label>
            <select id="cmp-modal-client" class="form-control" required>
              ${clientOptions}
            </select>
          </div>
          <div>
            <label for="cmp-modal-name">Complainant Name *</label>
            <input type="text" id="cmp-modal-name" class="form-control" value="${complaint ? complaint.complainantName : ''}" required>
          </div>
        </div>
        <div class="form-group row-split">
          <div>
            <label for="cmp-modal-region">Region *</label>
            <select id="cmp-modal-region" class="form-control" required>
              ${regionOptions}
            </select>
          </div>
          <div>
            <label for="cmp-modal-city">City *</label>
            <select id="cmp-modal-city" class="form-control" required>
              ${cityOptions}
            </select>
          </div>
        </div>
        <div class="form-group row-split">
          <div>
            <label for="cmp-modal-severity">Severity *</label>
            <select id="cmp-modal-severity" class="form-control" required>
              ${severityOptions}
            </select>
          </div>
          <div>
            <label for="cmp-modal-status">Status *</label>
            <select id="cmp-modal-status" class="form-control" required>
              ${statusOptions}
            </select>
          </div>
        </div>
        <div class="form-group row-split">
          <div>
            <label for="cmp-modal-phone">Phone Number *</label>
            <input type="text" id="cmp-modal-phone" class="form-control" value="${complaint ? complaint.phone : ''}" placeholder="+964..." required>
          </div>
          <div>
            <label for="cmp-modal-staff">Assigned Staff Member *</label>
            <select id="cmp-modal-staff" class="form-control" required>
              ${getStaffOptions(initialRegion)}
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="cmp-modal-details">Complaint / Issue Details *</label>
          <textarea id="cmp-modal-details" class="form-control" placeholder="Describe the service issue in detail..." required>${complaint ? complaint.details : ''}</textarea>
        </div>
      </form>
    `;

    showModal(isEdit ? 'Edit Complaint Record' : 'Log Customer Complaint', html);

    const clientSelect = document.getElementById('cmp-modal-client');
    const rSelect = document.getElementById('cmp-modal-region');
    const cSelect = document.getElementById('cmp-modal-city');
    const staffSelect = document.getElementById('cmp-modal-staff');

    const updateStaffAndCities = (region, selectCityVal = '') => {
      staffSelect.innerHTML = getStaffOptions(region);
      cSelect.innerHTML = getCityOptions(region, selectCityVal, false);
    };

    rSelect.addEventListener('change', (e) => {
      updateStaffAndCities(e.target.value);
    });

    clientSelect.addEventListener('change', (e) => {
      const selectedClientId = e.target.value;
      const client = window.BucklerDB.get('clients').find(c => c.id === selectedClientId);
      if (client) {
        rSelect.value = client.region;
        updateStaffAndCities(client.region, client.city);
      }
    });
  }

  function openResolveComplaintModal(id) {
    state.editingRecord = { entity: 'resolveComplaint', id: id };
    const complaint = window.BucklerDB.get('complaints').find(c => c.id === id);
    if (!complaint) return;

    const html = `
      <form id="resolve-complaint-form">
        <div style="margin-bottom:1rem; padding:0.75rem; background-color:var(--primary-red-light); border-radius:8px; border-left:4px solid var(--primary-red); font-size:0.85rem;">
          Complainant: <strong>${complaint.complainantName}</strong><br/>
          Issue: <em>"${complaint.details}"</em>
        </div>
        <div class="form-group">
          <label for="cmp-resolve-details">Resolution Actions & Details *</label>
          <textarea id="cmp-resolve-details" class="form-control" placeholder="Describe the correction actions taken to resolve this client complaint..." required></textarea>
        </div>
      </form>
    `;

    showModal('Resolve Customer Complaint', html);
  }


  function exportReportToCSV() {
    const table = document.getElementById('reports-table');
    if (!table) return;

    const rows = Array.from(table.querySelectorAll('tr'));
    
    // Check if we have data (first td shouldn't have colspan)
    const firstBodyRow = table.querySelector('#reports-table-body tr');
    if (!firstBodyRow || firstBodyRow.querySelector('td[colspan]')) {
      showToast('No report data available to export', 'error');
      return;
    }

    const csvContent = rows.map(row => {
      const cells = Array.from(row.querySelectorAll('th, td'));
      return cells.map(cell => {
        let text = cell.innerText || cell.textContent || '';
        if (cell.tagName === 'TH' && cell.hasAttribute('data-item-code')) {
          const itemCode = cell.getAttribute('data-item-code');
          if (itemCode) {
            if (text.includes('(')) {
              text = text.replace('(', `[${itemCode}] (`);
            } else {
              text = `${text} [${itemCode}]`;
            }
          }
        }
        text = text.replace(/\s+/g, ' ').trim();
        // If it contains a comma, double quote, or newline, escape it
        if (text.includes(',') || text.includes('"') || text.includes('\n')) {
          text = '"' + text.replace(/"/g, '""') + '"';
        }
        return text;
      }).join(',');
    }).join('\n');
    const startDate = els.reportStartDate.value || 'start';
    const endDate = els.reportEndDate.value || 'end';
    const filename = `buckler_operational_report_${startDate}_to_${endDate}.csv`;
    
    downloadFile(csvContent, filename, 'text/csv');
    showToast('Report exported as CSV successfully!', 'success');
  }

  function populateReportClientSelect() {
    const checklist = document.getElementById('report-client-checklist');
    const regionRestr = getRestrictedRegion();
    const cityRestr = getRestrictedCity();
    let clients = window.BucklerDB.getClients(regionRestr);
    if (cityRestr !== 'All') clients = clients.filter(c => c.city === cityRestr);
    clients.sort((a, b) => a.name.localeCompare(b.name));

    // Populate checkbox list
    if (checklist) {
      const prevChecked = new Set(Array.from(checklist.querySelectorAll('input:checked')).map(cb => cb.value));
      checklist.innerHTML = clients.map(c => `
        <label style="display:flex;align-items:center;gap:0.5rem;font-size:0.8rem;padding:0.2rem 0.3rem;border-radius:4px;cursor:pointer;">
          <input type="checkbox" class="report-client-cb" value="${c.id}" ${prevChecked.has(c.id) || prevChecked.size === 0 ? 'checked' : ''} style="accent-color:var(--primary-red);width:13px;height:13px;">
          <span>${c.name}</span>
        </label>
      `).join('');

      const btnAll = document.getElementById('btn-report-select-all');
      const btnClear = document.getElementById('btn-report-clear-all');
      if (btnAll && !btnAll._rBound) {
        btnAll._rBound = true;
        btnAll.addEventListener('click', () => checklist.querySelectorAll('input').forEach(cb => cb.checked = true));
      }
      if (btnClear && !btnClear._rBound) {
        btnClear._rBound = true;
        btnClear.addEventListener('click', () => checklist.querySelectorAll('input').forEach(cb => cb.checked = false));
      }
    }

    // Also populate hidden legacy <select> (used by loadCompletedVisitsForClient)
    if (els.reportClientSelect) {
      const prevVal = els.reportClientSelect.value;
      els.reportClientSelect.innerHTML = clients.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
      if (clients.some(c => c.id === prevVal)) els.reportClientSelect.value = prevVal;
      else if (clients.length > 0) els.reportClientSelect.value = clients[0].id;
    }

    loadCompletedVisitsForClient();
  }

  function getSelectedReportClientIds() {
    const checklist = document.getElementById('report-client-checklist');
    if (!checklist) {
      // fallback to hidden select
      return els.reportClientSelect && els.reportClientSelect.value ? [els.reportClientSelect.value] : [];
    }
    const checked = Array.from(checklist.querySelectorAll('input:checked')).map(cb => cb.value);
    return checked.length > 0 ? checked : (els.reportClientSelect && els.reportClientSelect.value ? [els.reportClientSelect.value] : []);
  }

  function loadCompletedVisitsForClient() {
    const clientId = els.reportClientSelect ? els.reportClientSelect.value : null;
    const visitSelect = document.getElementById('report-visit-select');
    if (!visitSelect || !clientId) return;
    
    const logs = window.BucklerDB.getLogs('All').filter(l => l.clientId === clientId);
    logs.sort((a, b) => new Date(b.dateConducted) - new Date(a.dateConducted));
    
    if (logs.length === 0) {
      visitSelect.innerHTML = '<option value="">No completed visits found</option>';
    } else {
      visitSelect.innerHTML = logs.map(l => `
        <option value="${l.id}">${l.dateConducted} - ${l.timeSpent} (${l.id})</option>
      `).join('');
    }
  }

  function generateIPMReport() {
    const reportType = els.reportType.value;
    const selectedClientIds = getSelectedReportClientIds();

    if (selectedClientIds.length === 0) {
      showToast('Please select at least one client.', 'error');
      return;
    }

    // For visit report: use first selected client only
    const clientId = selectedClientIds[0];
    const client = window.BucklerDB.get('clients').find(c => c.id === clientId);
    if (!client) return;

    const outputContainer = els.reportsOutputContainer;
    if (!outputContainer) return;

    outputContainer.style.display = 'block';
    
    if (els.btnPrintReport) els.btnPrintReport.style.display = 'inline-flex';
    
    if (reportType === 'visit') {
      if (els.btnExportReportCsv) els.btnExportReportCsv.style.display = 'none';
      
      const logId = document.getElementById('report-visit-select').value;
      if (!logId) {
        outputContainer.innerHTML = '<p style="color:var(--text-muted); text-align:center; padding:2rem;">No visit selected or available.</p>';
        return;
      }
      
      const log = window.BucklerDB.getLogs('All').find(l => l.id === logId);
      if (!log) return;
      
      const sched = window.BucklerDB.get('schedules').find(s => s.id === log.scheduleId);
      const users = window.BucklerDB.get('users');
      const tlNames = sched && sched.teamLeaderId ? sched.teamLeaderId.split(',').map(id => {
        const u = users.find(x => x.id === id.trim());
        return u ? u.name : id;
      }).join(', ') : 'N/A';
      const service = sched ? (sched.service.charAt(0).toUpperCase() + sched.service.slice(1)) : 'N/A';
      
      const observations = document.getElementById('report-visit-observations').value || 'No observations recorded.';
      const recommendations = document.getElementById('report-visit-recommendations').value || 'No recommendations recorded.';
      const generatedBy = document.getElementById('report-visit-generated-by').value || 'Authorized Buckler Personnel';
      
      const items = window.BucklerDB.get('items');
      const materials = log.itemsConsumed && log.itemsConsumed.length
        ? log.itemsConsumed.map(cons => {
            const item = items.find(i => i.id === cons.itemId);
            return `${item ? item.name : cons.itemId} (${cons.qty} ${item ? item.unit : ''})`;
          }).join(', ')
        : 'None';
        
      let picsHTML = '';
      if (log.pictures && log.pictures.length > 0) {
        picsHTML = `
          <div style="margin-top: 1rem;">
            <h5 style="font-weight:700; color:var(--text-dark); margin-bottom:0.5rem;">Visit Pictures:</h5>
            <div class="visit-photos-grid">
              ${log.pictures.map(pic => `<img src="${pic}" class="visit-photo-thumbnail" onclick="window.open('${pic}', '_blank')" />`).join('')}
            </div>
          </div>
        `;
      }
      
      outputContainer.innerHTML = `
        <div class="sanitation-report-card print-area">
          <div class="sanitation-report-header">
            <h2 class="sanitation-report-title">Visit Audit Report</h2>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:5px;">Client Service & Sanitation Review</p>
          </div>
          
          <div class="sanitation-report-meta">
            <span><strong>Client Name:</strong> ${client.name}</span>
            <span><strong>Client Code:</strong> ${client.clientCode || client.id}</span>
            <span><strong>Region / City:</strong> ${client.region} / ${client.city}</span>
            <span><strong>Visit Date:</strong> ${log.dateConducted}</span>
            <span><strong>Service:</strong> ${service}</span>
            <span><strong>Team Leader:</strong> ${tlNames}</span>
            <span><strong>Duration:</strong> ${log.timeSpent}</span>
            <span><strong>GPS Coordinates:</strong> ${log.geoLocation || 'N/A'}</span>
          </div>
          
          <div style="margin-top: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
            <h4 style="font-weight:700; color:var(--text-dark); margin-bottom:0.5rem;">Visit Highlights & Materials</h4>
            <p style="font-size:0.9rem; color:var(--text-medium); margin-bottom:0.5rem;"><strong>Operation Comments:</strong> ${log.comments || 'N/A'}</p>
            <p style="font-size:0.9rem; color:var(--text-medium); margin-bottom:0.5rem;"><strong>Materials Consumed:</strong> ${materials}</p>
            <p style="font-size:0.9rem; color:var(--text-medium); margin-bottom:0.5rem;"><strong>Client Feedback:</strong> ${log.clientComments || 'None'}</p>
            ${picsHTML}
          </div>
          
          <div style="margin-top: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
            <div style="border: 1px solid var(--border-color); padding: 1rem; border-radius: 8px; background: #FAF9F9;">
              <h4 style="font-weight: 700; color: var(--primary-red); margin-bottom: 0.5rem;">Observations</h4>
              <p style="font-size: 0.9rem; line-height: 1.4; color: var(--text-dark); white-space: pre-wrap;">${observations}</p>
            </div>
            <div style="border: 1px solid var(--border-color); padding: 1rem; border-radius: 8px; background: #FAF9F9;">
              <h4 style="font-weight: 700; color: var(--primary-red); margin-bottom: 0.5rem;">Recommendations</h4>
              <p style="font-size: 0.9rem; line-height: 1.4; color: var(--text-dark); white-space: pre-wrap;">${recommendations}</p>
            </div>
          </div>
          
          <div style="margin-top: 2rem; border-top: 1px solid var(--border-color); padding-top: 1.25rem; display: flex; justify-content: space-between; align-items: flex-end; font-size: 0.85rem;">
            <div>
              <strong>Report Generated By:</strong><br/>
              <span style="font-size:0.95rem; font-weight:700; color:var(--text-dark);">${generatedBy}</span>
            </div>
            <div style="text-align: right;">
              <strong>Client Signature:</strong><br/>
              <img src="${log.clientSignature}" style="max-height: 50px; border: 1px solid var(--border-color); border-radius: 4px; background: #FFF; padding: 2px; margin-top: 4px;" />
            </div>
          </div>
        </div>
      `;
      return;
    }

    const startDate = els.reportStartDate.value;
    const endDate = els.reportEndDate.value;
    
    const logs = window.BucklerDB.getLogs('All').filter(l => {
      if (l.clientId !== client.id) return false;
      const logDate = l.dateConducted;
      if (!logDate) return false;
      const matchStart = startDate ? logDate >= startDate : true;
      const matchEnd = endDate ? logDate <= endDate : true;
      return matchStart && matchEnd;
    });
    
    logs.sort((a, b) => new Date(a.dateConducted) - new Date(b.dateConducted));
    
    const schedules = window.BucklerDB.get('schedules');
    const users = window.BucklerDB.get('users');
    const items = window.BucklerDB.get('items');
    
    let summaryRows = '';
    let detailedLogsHTML = '';
    
    if (logs.length === 0) {
      summaryRows = '<tr><td colspan="6" style="text-align:center; color:var(--text-muted);">No visits conducted in this period.</td></tr>';
      detailedLogsHTML = '<p style="color:var(--text-muted); text-align:center; padding:2rem; border:1px dashed var(--border-color); border-radius:8px;">No operational logs recorded.</p>';
    } else {
      summaryRows = logs.map(log => {
        const sched = schedules.find(s => s.id === log.scheduleId);
        const tlNames = sched && sched.teamLeaderId ? sched.teamLeaderId.split(',').map(id => {
          const u = users.find(x => x.id === id.trim());
          return u ? u.name : id;
        }).join(', ') : 'N/A';
        const service = sched ? (sched.service.charAt(0).toUpperCase() + sched.service.slice(1)) : 'N/A';
        const dateObj = new Date(log.dateConducted);
        const dayOfWeek = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
        
        return `
          <tr>
            <td>${log.dateConducted}</td>
            <td>${dayOfWeek}</td>
            <td>${service}</td>
            <td>${tlNames}</td>
            <td>${log.timeIn} - ${log.timeOut}</td>
            <td>${log.timeSpent}</td>
          </tr>
        `;
      }).join('');
      
      detailedLogsHTML = logs.map((log, index) => {
        const sched = schedules.find(s => s.id === log.scheduleId);
        const tlNames = sched && sched.teamLeaderId ? sched.teamLeaderId.split(',').map(id => {
          const u = users.find(x => x.id === id.trim());
          return u ? u.name : id;
        }).join(', ') : 'N/A';
        const service = sched ? (sched.service.charAt(0).toUpperCase() + sched.service.slice(1)) : 'N/A';
        
        const materials = log.itemsConsumed && log.itemsConsumed.length
          ? log.itemsConsumed.map(cons => {
              const item = items.find(i => i.id === cons.itemId);
              return `${item ? item.name : cons.itemId} (${cons.qty} ${item ? item.unit : ''})`;
            }).join(', ')
          : 'None';
          
        let pics = '';
        if (log.pictures && log.pictures.length > 0) {
          pics = `
            <div class="visit-photos-grid" style="margin-top:0.5rem;">
              ${log.pictures.map(pic => `<img src="${pic}" class="visit-photo-thumbnail" onclick="window.open('${pic}', '_blank')" />`).join('')}
            </div>
          `;
        }
        
        return `
          <div class="sanitation-visit-log-item" style="border: 1px solid var(--border-color); border-radius: 8px; padding: 1.25rem; margin-bottom: 1rem; background: #FAFBFD;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-dark); border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem; margin-bottom: 0.75rem; display: flex; justify-content: space-between;">
              <span>Visit #${index + 1} - ${log.dateConducted} (${service})</span>
              <span style="font-size:0.8rem; color:var(--text-muted);">Duration: ${log.timeSpent}</span>
            </h4>
            <div style="font-size:0.85rem; color:var(--text-medium); line-height:1.5;">
              <p><strong>Team Leader:</strong> ${tlNames}</p>
              <p><strong>Operational Comments:</strong> ${log.comments || 'N/A'}</p>
              <p><strong>Materials Consumed:</strong> ${materials}</p>
              <p><strong>Client Signature:</strong><br/>
                <img src="${log.clientSignature}" style="max-height: 40px; border: 1px solid var(--border-color); border-radius: 4px; background: #FFF; padding: 2px; margin-top: 4px;" />
              </p>
              ${pics}
            </div>
          </div>
        `;
      }).join('');
    }
 
    let detailedSectionHTML = '';
    if (reportType === 'detailed') {
      const auditLogs = logs.filter(log => log.baitStationsAudit || log.uvMachinesAudit);
      if (auditLogs.length === 0) {
        detailedSectionHTML = `
          <div style="margin-top: 2rem; border-top: 2px solid var(--primary-red); padding-top: 1.5rem; text-align: center; color: var(--text-muted); font-style: italic;">
            No bait station or UV machine audits were logged for this client during the selected period.
          </div>
        `;
      } else {
        let auditSelectorHTML = '';
        if (auditLogs.length > 1) {
          auditSelectorHTML = `
            <div style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;" class="no-print">
              <label for="report-audit-date-select" style="font-weight: 700; font-size: 0.85rem; color: var(--text-dark);">Select Audit Date:</label>
              <select id="report-audit-date-select" class="filter-select" style="margin: 0; min-width: 150px;">
                ${auditLogs.map(l => `<option value="${l.id}">${l.dateConducted}</option>`).join('')}
              </select>
            </div>
          `;
        }
        
        detailedSectionHTML = `
          <div style="margin-top: 2rem; border-top: 2px solid var(--primary-red); padding-top: 1.5rem;">
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-dark); margin-bottom: 1rem; border-bottom: 2px solid var(--primary-red); padding-bottom: 0.25rem;">
              Detailed Devices Audit & Real-time Charts
            </h3>
            
            ${auditSelectorHTML}
            
            <div id="detailed-audit-content">
              <!-- Dynamically populated in JavaScript -->
            </div>
          </div>
        `;
      }
    }
 
    outputContainer.innerHTML = `
      <div class="sanitation-report-card print-area">
        <div class="sanitation-report-header">
          <h2 class="sanitation-report-title">${reportType === 'detailed' ? 'Detailed' : 'Regular'} Sanitation & IPM Report</h2>
          <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 5px;">Client: ${client.name} | Period: ${startDate} to ${endDate}</p>
        </div>
        
        <div class="sanitation-report-meta">
          <span><strong>Client Name:</strong> ${client.name}</span>
          <span><strong>Client Code:</strong> ${client.clientCode || client.id}</span>
          <span><strong>Business Sector:</strong> ${client.sector}</span>
          <span><strong>Region / City:</strong> ${client.region} / ${client.city}</span>
          <span><strong>Contract Types:</strong> ${(client.contractTypes && client.contractTypes.length) ? client.contractTypes.map(ct => {
            const v = client.serviceVisits && client.serviceVisits[ct] !== undefined ? client.serviceVisits[ct] : '';
            return `${ct}${v !== '' ? ` (${v} visits/mo)` : ''}`;
          }).join(', ') : 'N/A'}</span>
          <span><strong>Monthly Target Visits:</strong> ${client.monthlyVisits || 0} visits</span>
        </div>
        
        <div style="margin-top: 1.5rem;">
          <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.75rem; border-bottom: 2px solid var(--primary-red); padding-bottom: 0.25rem;">
            Operational Service Summary
          </h3>
          <table class="data-table" id="reports-table" style="width: 100%;">
            <thead id="reports-table-header">
              <tr>
                <th>Date Conducted</th>
                <th>Day</th>
                <th>Service Name</th>
                <th>Team Leader in Charge</th>
                <th>Time Window</th>
                <th>Duration Spent</th>
              </tr>
            </thead>
            <tbody id="reports-table-body">
              ${summaryRows}
            </tbody>
          </table>
        </div>
        
        <div style="margin-top: 1.5rem;">
          <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.75rem; border-bottom: 2px solid var(--primary-red); padding-bottom: 0.25rem;">
            Visit Detailed Highlights
          </h3>
          ${detailedLogsHTML}
        </div>
        
        ${detailedSectionHTML}
      </div>
    `;
 
    if (reportType === 'detailed') {
      const auditLogs = logs.filter(log => log.baitStationsAudit || log.uvMachinesAudit);
      if (auditLogs.length > 0) {
        let detailedBaitChart = null;
        let detailedUvChart = null;

        const renderAuditData = (log) => {
          const contentDiv = document.getElementById('detailed-audit-content');
          if (!contentDiv) return;

          let baitRows = '';
          const baitAudit = log.baitStationsAudit || [];
          baitAudit.forEach(st => {
            const actClass = st.activity.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            baitRows += `
              <tr>
                <td>${st.number}</td>
                <td>${st.location}</td>
                <td><span class="badge-activity badge-activity-${actClass}">${st.activity}</span></td>
                <td>${st.comments || '-'}</td>
              </tr>
            `;
          });

          if (!baitRows) {
            baitRows = `<tr><td colspan="4" style="text-align:center; color:var(--text-muted); padding:1rem;">No bait stations audit logged.</td></tr>`;
          }

          let uvRows = '';
          const uvAudit = log.uvMachinesAudit || [];
          uvAudit.forEach(m => {
            uvRows += `
              <tr>
                <td>${m.number}</td>
                <td>${m.location}</td>
                <td><strong>${m.catchRate}%</strong></td>
              </tr>
            `;
          });

          if (!uvRows) {
            uvRows = `<tr><td colspan="3" style="text-align:center; color:var(--text-muted); padding:1rem;">No UV machines audit logged.</td></tr>`;
          }

          contentDiv.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
              <div class="card" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 0.5rem; text-align: center;">Bait Stations Activity Analysis</h4>
                <div style="height: 220px; position: relative;">
                  <canvas id="detailed-bait-chart"></canvas>
                </div>
              </div>
              <div class="card" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 0.5rem; text-align: center;">UV Fly Trap Catch Rates</h4>
                <div style="height: 220px; position: relative;">
                  <canvas id="detailed-uv-chart"></canvas>
                </div>
              </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
              <div>
                <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.5rem;">Bait Stations Audit Registry</h4>
                <div class="table-wrapper" style="max-height: 300px; overflow-y: auto;">
                  <table class="data-table" style="width: 100%;">
                    <thead>
                      <tr>
                        <th>Bait stations no</th>
                        <th>Bait station location</th>
                        <th>Activity</th>
                        <th>Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${baitRows}
                    </tbody>
                  </table>
                </div>
                <div style="margin-top: 0.75rem; font-size: 0.85rem; font-weight: 600; color: var(--text-dark);">
                  <span style="background:var(--primary-red-light); color:var(--primary-red); padding:2px 8px; border-radius:4px; font-family:monospace; margin-right:4px;">${log.baitStickersReplaced || 0}</span>
                  bait stations stickers & poisons were replaced
                </div>
              </div>
              
              <div>
                <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.5rem;">UV Fly Traps Catch Rate Registry</h4>
                <div class="table-wrapper" style="max-height: 300px; overflow-y: auto;">
                  <table class="data-table" style="width: 100%;">
                    <thead>
                      <tr>
                        <th>Machine no</th>
                        <th>Machine location</th>
                        <th>Catch rate %</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${uvRows}
                    </tbody>
                  </table>
                </div>
                <div style="margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.85rem; color: var(--text-dark);">
                  <div><strong>Total no of UV machines:</strong> <span>${uvAudit.length}</span></div>
                  <div><strong>Total no. of flies' stickers replaced:</strong> <span style="background:var(--info-blue-light); color:var(--info-blue); padding:2px 8px; border-radius:4px; font-family:monospace; margin-left:4px;">${log.uvStickersReplaced || 0}</span></div>
                </div>
              </div>
            </div>
          `;

          // Redraw Charts
          const activityCounts = { 'No Activity': 0, 'Captured & Replaced': 0, 'Eaten': 0 };
          baitAudit.forEach(st => {
            if (activityCounts[st.activity] !== undefined) {
              activityCounts[st.activity]++;
            }
          });

          const uvLabels = [];
          const uvRates = [];
          uvAudit.forEach(m => {
            uvLabels.push(`Trap ${m.number}`);
            uvRates.push(m.catchRate);
          });

          const ctxBait = document.getElementById('detailed-bait-chart');
          if (ctxBait) {
            if (detailedBaitChart) detailedBaitChart.destroy();
            detailedBaitChart = new Chart(ctxBait.getContext('2d'), {
              type: 'pie',
              data: {
                labels: Object.keys(activityCounts),
                datasets: [{
                  data: Object.values(activityCounts),
                  backgroundColor: ['#10B981', '#3B82F6', '#EF4444'],
                  borderWidth: 1
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 9 } } }
                }
              }
            });
          }

          const ctxUv = document.getElementById('detailed-uv-chart');
          if (ctxUv) {
            if (detailedUvChart) detailedUvChart.destroy();
            detailedUvChart = new Chart(ctxUv.getContext('2d'), {
              type: 'bar',
              data: {
                labels: uvLabels,
                datasets: [{
                  label: 'Catch Rate %',
                  data: uvRates,
                  backgroundColor: '#3B82F6',
                  borderRadius: 4
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false }
                },
                scales: {
                  y: { min: 0, max: 100, ticks: { font: { size: 8 } } },
                  x: { ticks: { font: { size: 8 } } }
                }
              }
            });
          }
        };

        // Render first audit by default
        renderAuditData(auditLogs[0]);

        // Wire selector listener if date selector exists
        const dateSelect = document.getElementById('report-audit-date-select');
        if (dateSelect) {
          dateSelect.addEventListener('change', (e) => {
            const selectedLog = auditLogs.find(l => l.id === e.target.value);
            if (selectedLog) {
              renderAuditData(selectedLog);
            }
          });
        }

        // Store charts in state if needed
        state.charts.detailedBaitChart = detailedBaitChart;
        state.charts.detailedUvChart = detailedUvChart;
      }
    }

    // If multiple clients selected (regular/detailed), append additional client sections
    if (selectedClientIds.length > 1) {
      const schedules = window.BucklerDB.get('schedules');
      const users = window.BucklerDB.get('users');
      const items = window.BucklerDB.get('items');
      const startDate = els.reportStartDate.value;
      const endDate = els.reportEndDate.value;
      const allClientsData = window.BucklerDB.get('clients');

      selectedClientIds.slice(1).forEach(cid => {
        const c = allClientsData.find(x => x.id === cid);
        if (!c) return;
        const cLogs = window.BucklerDB.getLogs('All').filter(l => {
          if (l.clientId !== cid) return false;
          const ld = l.dateConducted;
          return ld && (startDate ? ld >= startDate : true) && (endDate ? ld <= endDate : true);
        });
        cLogs.sort((a, b) => new Date(a.dateConducted) - new Date(b.dateConducted));

        const rows = cLogs.map(l => {
          const sch = schedules.find(s => s.id === l.scheduleId);
          const tl = sch && sch.teamLeaderId ? sch.teamLeaderId.split(',').map(tid => { const u = users.find(x => x.id === tid.trim()); return u ? u.name : tid; }).join(', ') : 'N/A';
          const svc = sch ? (sch.service.charAt(0).toUpperCase() + sch.service.slice(1)) : 'N/A';
          const day = new Date(l.dateConducted).toLocaleDateString('en-US', { weekday: 'long' });
          return `<tr><td>${l.dateConducted}</td><td>${day}</td><td>${svc}</td><td>${tl}</td><td>${l.timeIn||''} - ${l.timeOut||''}</td><td>${l.timeSpent||''}</td></tr>`;
        }).join('');

        const detailRows = cLogs.map((l, idx) => {
          const sch = schedules.find(s => s.id === l.scheduleId);
          const tl = sch && sch.teamLeaderId ? sch.teamLeaderId.split(',').map(tid => { const u = users.find(x => x.id === tid.trim()); return u ? u.name : tid; }).join(', ') : 'N/A';
          const svc = sch ? (sch.service.charAt(0).toUpperCase() + sch.service.slice(1)) : 'N/A';
          const mats = l.itemsConsumed && l.itemsConsumed.length ? l.itemsConsumed.map(cn => { const it = items.find(i => i.id === cn.itemId); return `${it ? it.name : cn.itemId} (${cn.qty})`; }).join(', ') : 'None';
          return `<div style="border:1px solid var(--border-color);border-radius:8px;padding:1rem;margin-bottom:0.75rem;background:#FAFBFD;">
            <strong>Visit #${idx+1} — ${l.dateConducted} (${svc})</strong><br/>
            <span style="font-size:0.82rem;color:var(--text-medium);">Team Leader: ${tl} | Materials: ${mats} | Notes: ${l.comments || 'N/A'}</span>
          </div>`;
        }).join('');

        const cTypes = (c.contractTypes && c.contractTypes.length) ? c.contractTypes.map(ct => {
          const v = c.serviceVisits && c.serviceVisits[ct] !== undefined ? c.serviceVisits[ct] : '';
          return `${ct}${v !== '' ? ` (${v} visits/mo)` : ''}`;
        }).join(', ') : 'N/A';
        const section = document.createElement('div');
        section.innerHTML = `
          <div style="margin-top:2rem;border-top:3px dashed var(--border-color);padding-top:2rem;">
            <div class="sanitation-report-card print-area">
              <div class="sanitation-report-header">
                <h2 class="sanitation-report-title">${reportType === 'detailed' ? 'Detailed' : 'Regular'} Sanitation &amp; IPM Report</h2>
                <p style="color:var(--text-muted);font-size:0.85rem;margin-top:5px;">Client: ${c.name} | Period: ${startDate} to ${endDate}</p>
              </div>
              <div class="sanitation-report-meta">
                <span><strong>Client Name:</strong> ${c.name}</span>
                <span><strong>Client Code:</strong> ${c.clientCode || c.id}</span>
                <span><strong>Business Sector:</strong> ${c.sector}</span>
                <span><strong>Region / City:</strong> ${c.region} / ${c.city}</span>
                <span><strong>Contract Types:</strong> ${cTypes}</span>
                <span><strong>Monthly Target Visits:</strong> ${c.monthlyVisits || 0} visits</span>
              </div>
              <div style="margin-top:1.5rem;">
                <h3 style="font-size:1.1rem;font-weight:700;color:var(--text-dark);margin-bottom:0.75rem;border-bottom:2px solid var(--primary-red);padding-bottom:0.25rem;">Operational Service Summary</h3>
                <table class="data-table" style="width:100%;"><thead><tr><th>Date</th><th>Day</th><th>Service</th><th>Team Leader</th><th>Time Window</th><th>Duration</th></tr></thead>
                <tbody>${rows || '<tr><td colspan="6" style="text-align:center;color:var(--text-muted);">No visits in this period.</td></tr>'}</tbody></table>
              </div>
              <div style="margin-top:1.5rem;">
                <h3 style="font-size:1.1rem;font-weight:700;color:var(--text-dark);margin-bottom:0.75rem;border-bottom:2px solid var(--primary-red);padding-bottom:0.25rem;">Visit Highlights</h3>
                ${detailRows || '<p style="color:var(--text-muted);">No logs recorded.</p>'}
              </div>
            </div>
          </div>
        `;
        outputContainer.appendChild(section);
      });
    }

    // Show Email Report button
    const emailReportBtn = document.getElementById('btn-email-report');
    if (emailReportBtn) {
      emailReportBtn.style.display = 'inline-flex';
      emailReportBtn.onclick = () => {
        const fc = window.BucklerDB.get('clients').find(c => c.id === clientId);
        if (!fc || !fc.email) { showToast('No email address on file for this client.', 'warning'); return; }
        const sd = els.reportStartDate ? els.reportStartDate.value : '';
        const ed = els.reportEndDate ? els.reportEndDate.value : '';
        const subject = encodeURIComponent(`IPM Report — ${fc.name} — ${sd} to ${ed}`);
        const body = encodeURIComponent(`Dear ${fc.contact || fc.name},\n\nPlease find your Sanitation & IPM report for ${sd} to ${ed}.\n\nBest regards,\nBuckler Operations Team`);
        window.open(`mailto:${fc.email}?subject=${subject}&body=${body}`, '_blank');
      };
    }
  }

  function renderReports() {
    populateReportClientSelect();
  }



  function renderSectors() {
    if (!els.sectorsTableBody) return;

    if (!sectors.length) {
      els.sectorsTableBody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--text-muted); padding:1.5rem;">No sectors registered.</td></tr>`;
      return;
    }

    const canManage = hasEditPermission('clients');

    els.sectorsTableBody.innerHTML = sectors.map(s => `
      <tr>
        <td><code>${s.id}</code></td>
        <td><strong>${s.name}</strong></td>
        <td>
          <div class="table-cell-actions">
            ${canManage ? `
              <button class="btn btn-secondary btn-sm edit-sector-btn" data-id="${s.id}">Edit</button>
              <button class="btn btn-danger btn-sm delete-sector-btn" data-id="${s.id}">Delete</button>
            ` : '-'}
          </div>
        </td>
      </tr>
    `).join('');

    els.sectorsTableBody.querySelectorAll('.edit-sector-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        openSectorModal(btn.getAttribute('data-id'));
      });
    });

    els.sectorsTableBody.querySelectorAll('.delete-sector-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        deleteSector(btn.getAttribute('data-id'));
      });
    });
  }

  function openSectorModal(id = null) {
    const isEdit = !!id;
    state.editingRecord = { entity: 'sectors', id: id };

    const sectors = window.BucklerDB.get('sectors');
    const sector = isEdit ? sectors.find(s => String(s.id) === String(id)) : null;

    const html = `
      <form id="sector-form" onsubmit="event.preventDefault();">
        <div class="form-group">
          <label for="sec-modal-id">Sector ID / Code <span style="color:var(--primary-red);">*</span></label>
          <input type="text" id="sec-modal-id" class="form-control" value="${sector ? sector.id : ''}" required placeholder="e.g. sec-retail" />
        </div>
        <div class="form-group">
          <label for="sec-modal-name">Sector Name <span style="color:var(--primary-red);">*</span></label>
          <input type="text" id="sec-modal-name" class="form-control" value="${sector ? sector.name : ''}" required placeholder="e.g. Retail, Healthcare" />
        </div>
      </form>
    `;

    showModal(isEdit ? 'Edit Business Sector' : 'Add Business Sector', html, true);
  }

  function deleteSector(id) {
    const sectors = window.BucklerDB.get('sectors');
    const sector = sectors.find(s => String(s.id) === String(id));
    if (!sector) return;

    if (confirm(`Are you sure you want to delete the sector "${sector.name}"? All clients assigned to this sector will be set to unassigned.`)) {
      window.BucklerDB.delete('sectors', id);

      // Cascading set to unassigned in client profiles
      const clients = window.BucklerDB.get('clients');
      clients.forEach(c => {
        if (c.sector === sector.name) {
          window.BucklerDB.update('clients', c.id, { sector: '' });
        }
      });

      renderClients();
      renderSectors();
      showToast('Sector deleted successfully', 'success');
    }
  }

  function parseSectorsCSV(file) {
    if (!file.name.endsWith('.csv')) {
      showToast('Please upload a valid CSV file', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
      const text = e.target.result;
      const rows = text.split('\n').map(row => row.trim()).filter(row => row.length > 0);
      
      if (rows.length < 2) {
        showToast('The CSV file is empty or missing data rows', 'error');
        return;
      }

      const headers = rows[0].split(',').map(h => h.trim().toLowerCase());
      const nameIdx = headers.findIndex(h => h === 'name' || h === 'sector' || h === 'sectorname');
      if (nameIdx === -1) {
        showToast('CSV must contain a header column named "name" or "sector"', 'error');
        return;
      }
      
      let importedCount = 0;
      let duplicateCount = 0;
      const existingSectors = window.BucklerDB.get('sectors');

      for (let i = 1; i < rows.length; i++) {
        const cols = parseCSVRow(rows[i]);
        if (cols.length <= nameIdx) continue;

        const name = cols[nameIdx].trim();
        if (!name) continue;

        if (existingSectors.some(s => s.name.toLowerCase() === name.toLowerCase())) {
          duplicateCount++;
          continue;
        }

        const newSec = window.BucklerDB.insert('sectors', { name: name });
        existingSectors.push(newSec);
        importedCount++;
      }

      let msg = `Imported ${importedCount} new sector(s).`;
      if (duplicateCount > 0) {
        msg += ` Ignored ${duplicateCount} duplicate(s).`;
      }
      showToast(msg, 'success');
      renderSectors();
    };
    reader.readAsText(file);
  }

  // Operational Deep Dives & Client Analytics & Detail Popups
  function populateDashConsumeClients(region) {
    if (!els.dashConsumeClient) return;
    const clients = window.BucklerDB.getClients(region);
    const prevVal = els.dashConsumeClient.value;
    els.dashConsumeClient.innerHTML = '<option value="All">All Clients</option>' + 
      clients.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    if (Array.from(els.dashConsumeClient.options).some(o => o.value === prevVal)) {
      els.dashConsumeClient.value = prevVal;
    } else {
      els.dashConsumeClient.value = 'All';
    }
  }

  function populateDashConsumeItems() {
    if (!els.dashConsumeItem) return;
    if (els.dashConsumeItem.options.length > 1) return; // already populated
    const items = window.BucklerDB.get('items');
    els.dashConsumeItem.innerHTML = '<option value="All">All Items</option>' + 
      items.map(i => `<option value="${i.id}">${i.name} (${i.itemCode})</option>`).join('');
  }

  function renderDashConsume() {
    if (!els.dashConsumeChart) return;
    
    const region = els.dashConsumeRegion.value;
    const clientId = els.dashConsumeClient.value;
    const itemId = els.dashConsumeItem.value;
    
    let logs = window.BucklerDB.get('operationLogs');
    const clients = window.BucklerDB.get('clients');
    const items = window.BucklerDB.get('items');
    
    if (region !== 'All') {
      const regionClients = new Set(clients.filter(c => c.region === region).map(c => c.id));
      logs = logs.filter(l => regionClients.has(l.clientId));
    }
    
    if (clientId !== 'All') {
      logs = logs.filter(l => l.clientId === clientId);
    }
    
    const consumptionMap = {};
    items.forEach(itm => {
      consumptionMap[itm.id] = 0;
    });
    
    logs.forEach(l => {
      if (l.itemsConsumed && Array.isArray(l.itemsConsumed)) {
        l.itemsConsumed.forEach(i => {
          if (consumptionMap[i.itemId] !== undefined) {
            consumptionMap[i.itemId] += i.qty;
          }
        });
      }
    });
    
    let chartData = items.map(itm => ({
      id: itm.id,
      name: itm.name,
      code: itm.itemCode,
      qty: consumptionMap[itm.id] || 0
    }));
    
    if (itemId !== 'All') {
      chartData = chartData.filter(d => d.id === itemId);
    } else {
      chartData = chartData.filter(d => d.qty > 0);
    }
    
    const labels = chartData.map(d => d.code);
    const dataValues = chartData.map(d => d.qty);
    const totalQty = dataValues.reduce((sum, q) => sum + q, 0);
    
    els.dashConsumeTotal.textContent = `Total Consumed: ${totalQty} Units`;
    
    if (state.charts.dashConsume) state.charts.dashConsume.destroy();
    
    const ctx = els.dashConsumeChart.getContext('2d');
    state.charts.dashConsume = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels.length ? labels : ['No Data'],
        datasets: [{
          label: 'Quantity Consumed',
          data: dataValues.length ? dataValues : [0],
          backgroundColor: '#C62828',
          borderRadius: 6,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (event, elements, chart) => {
          if (!elements || !elements.length) return;
          const activeElement = elements[0];
          const codeLabel = chart.data.labels[activeElement.index];
          if (codeLabel === 'No Data') return;
          
          const itm = items.find(i => i.itemCode === codeLabel);
          if (!itm) return;
          
          const filteredLogs = logs.filter(l => l.itemsConsumed && l.itemsConsumed.some(i => i.itemId === itm.id));
          const rows = [];
          filteredLogs.forEach(l => {
            const consumedItem = l.itemsConsumed.find(i => i.itemId === itm.id);
            const cli = clients.find(c => c.id === l.clientId);
            rows.push([
              l.dateConducted || 'N/A',
              cli ? cli.name : 'Unknown Client',
              itm.name,
              consumedItem ? consumedItem.qty : 0
            ]);
          });
          showDetailTableModal(`Consumption Details for: ${itm.name}`, ['Date', 'Client', 'Item Name', 'Qty Used'], rows);
        },
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: '#F1F5F9' },
            ticks: { font: { family: 'Inter', size: 9 } }
          },
          x: {
            grid: { display: false },
            ticks: { font: { family: 'Inter', size: 9 } }
          }
        }
      }
    });
  }

  function populateDashComplaintClients(region) {
    if (!els.dashComplaintClient) return;
    const clients = window.BucklerDB.getClients(region);
    const prevVal = els.dashComplaintClient.value;
    els.dashComplaintClient.innerHTML = '<option value="All">All Clients</option>' + 
      clients.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    if (Array.from(els.dashComplaintClient.options).some(o => o.value === prevVal)) {
      els.dashComplaintClient.value = prevVal;
    } else {
      els.dashComplaintClient.value = 'All';
    }
  }

  function renderDashComplaint() {
    if (!els.dashComplaintChart) return;
    
    const region = els.dashComplaintRegion.value;
    const clientId = els.dashComplaintClient.value;
    const status = els.dashComplaintStatus.value;
    
    let complaints = window.BucklerDB.get('complaints');
    const clients = window.BucklerDB.get('clients');
    
    if (region !== 'All') {
      complaints = complaints.filter(c => c.region === region);
    }
    if (clientId !== 'All') {
      complaints = complaints.filter(c => c.clientId === clientId);
    }
    if (status !== 'All') {
      complaints = complaints.filter(c => c.status === status);
    }
    
    const statusCounts = { 'Pending': 0, 'In Progress': 0, 'Resolved': 0 };
    complaints.forEach(c => {
      if (statusCounts[c.status] !== undefined) {
        statusCounts[c.status]++;
      }
    });
    
    const labels = Object.keys(statusCounts);
    const dataValues = Object.values(statusCounts);
    const totalLogged = complaints.length;
    
    els.dashComplaintTotal.textContent = `Total Logged: ${totalLogged} Issues`;
    
    if (state.charts.dashComplaint) state.charts.dashComplaint.destroy();
    
    const ctx = els.dashComplaintChart.getContext('2d');
    state.charts.dashComplaint = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Complaints',
          data: dataValues,
          backgroundColor: ['#DC2626', '#F59E0B', '#10B981'],
          borderRadius: 6,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (event, elements, chart) => {
          if (!elements || !elements.length) return;
          const label = chart.data.labels[elements[0].index];
          
          const filtered = complaints.filter(c => c.status === label);
          const rows = filtered.map(c => {
            const cli = clients.find(x => x.id === c.clientId);
            return [
              c.dateSubmitted,
              cli ? cli.name : 'Unknown Client',
              c.details,
              c.severity,
              c.status
            ];
          });
          showDetailTableModal(`Complaints Detail - Status: ${label}`, ['Date Submitted', 'Client Name', 'Details', 'Severity', 'Status'], rows);
        },
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: '#F1F5F9' },
            ticks: { stepSize: 1, font: { family: 'Inter', size: 9 } }
          },
          x: {
            grid: { display: false },
            ticks: { font: { family: 'Inter', size: 9 } }
          }
        }
      }
    });
  }

  function populateClientAnalysisFilters() {
    if (!els.clientAnalysisSector || !els.clientAnalysisTl) return;
    
    if (els.clientAnalysisSector.options.length <= 1) {
      const sectors = window.BucklerDB.get('sectors');
      els.clientAnalysisSector.innerHTML = '<option value="All">All Sectors</option>' + 
        sectors.map(s => `<option value="${s.name}">${s.name}</option>`).join('');
    }
    
    if (els.clientAnalysisTl.options.length <= 1) {
      const tls = window.BucklerDB.getTeamLeaders();
      els.clientAnalysisTl.innerHTML = '<option value="All">All Team Leaders</option>' + 
        tls.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
    }
  }

  function renderClientAnalysis() {
    if (!els.clientAnalysisChart || !els.clientAnalysisPieChart) return;
    
    populateClientAnalysisFilters();
    
    const region = els.clientAnalysisRegion.value;
    const sector = els.clientAnalysisSector.value;
    const tlId = els.clientAnalysisTl.value;
    
    let schedules = window.BucklerDB.get('schedules');
    const clients = window.BucklerDB.get('clients');
    
    if (region !== 'All') {
      schedules = schedules.filter(s => s.region === region);
    }
    
    if (sector !== 'All') {
      schedules = schedules.filter(s => {
        const cl = clients.find(c => c.id === s.clientId);
        return cl && cl.sector === sector;
      });
    }
    
    if (tlId !== 'All') {
      schedules = schedules.filter(s => s.teamLeaderId === tlId);
    }
    
    const sectors = window.BucklerDB.get('sectors');
    const sectorVisitsMap = {};
    sectors.forEach(s => { sectorVisitsMap[s.name] = 0; });
    
    schedules.forEach(s => {
      const cl = clients.find(c => c.id === s.clientId);
      if (cl && sectorVisitsMap[cl.sector] !== undefined) {
        sectorVisitsMap[cl.sector]++;
      }
    });
    
    let barLabels = Object.keys(sectorVisitsMap);
    let barValues = Object.values(sectorVisitsMap);
    
    const activeSecIdx = barValues.map((c, i) => c > 0 ? i : -1).filter(i => i !== -1);
    if (activeSecIdx.length > 0) {
      barLabels = activeSecIdx.map(i => barLabels[i]);
      barValues = activeSecIdx.map(i => barValues[i]);
    }
    
    if (state.charts.clientAnalysisBar) state.charts.clientAnalysisBar.destroy();
    const ctxBar = els.clientAnalysisChart.getContext('2d');
    state.charts.clientAnalysisBar = new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: barLabels,
        datasets: [{
          label: 'Visits Conducted/Scheduled',
          data: barValues,
          backgroundColor: '#3B82F6',
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, ticks: { stepSize: 1 } }
        }
      }
    });
    
    const typeCounts = { 'Regular': 0, 'Call-back': 0, 'Inspection': 0 };
    schedules.forEach(s => {
      const type = s.visitType || 'Regular';
      if (typeCounts[type] !== undefined) {
        typeCounts[type]++;
      }
    });
    
    const pieLabels = Object.keys(typeCounts);
    const pieValues = Object.values(typeCounts);
    
    const activePieIdx = pieValues.map((c, i) => c > 0 ? i : -1).filter(i => i !== -1);
    const activePieLabels = activePieIdx.map(i => pieLabels[i]);
    const activePieValues = activePieIdx.map(i => pieValues[i]);
    
    if (state.charts.clientAnalysisPie) state.charts.clientAnalysisPie.destroy();
    const ctxPie = els.clientAnalysisPieChart.getContext('2d');
    state.charts.clientAnalysisPie = new Chart(ctxPie, {
      type: 'pie',
      data: {
        labels: activePieLabels.length ? activePieLabels : ['No Visit Type Data'],
        datasets: [{
          data: activePieValues.length ? activePieValues : [1],
          backgroundColor: ['#3B82F6', '#EF4444', '#10B981'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { font: { size: 9 } } }
        }
      }
    });
  }

  function showDetailTableModal(title, headers, rowsData) {
    const tableHeaderHTML = headers.map(h => `<th>${h}</th>`).join('');
    const tableRowsHTML = rowsData.length ? rowsData.map(row => `
      <tr>
        ${row.map(val => `<td>${val}</td>`).join('')}
      </tr>
    `).join('') : `<tr><td colspan="${headers.length}" style="text-align:center; color:var(--text-muted); padding:1.5rem;">No records found.</td></tr>`;
    
    const html = `
      <div class="table-wrapper" style="max-height: 400px; overflow-y: auto;">
        <table class="data-table">
          <thead>
            <tr>${tableHeaderHTML}</tr>
          </thead>
          <tbody>
            ${tableRowsHTML}
          </tbody>
        </table>
      </div>
    `;
    
    showModal(title, html, false);
    bindEntityClicks(document.getElementById('toast-container').previousElementSibling);
  }

  function renderShiftWidget() {
    const widget = document.getElementById('tl-shift-widget');
    if (!widget) return;

    const isTL = state.currentUser && state.currentUser.role.toLowerCase() === 'team leader';
    if (!isTL) {
      widget.style.display = 'none';
      return;
    }

    widget.style.display = 'block';
    const todayStr = formatDateLocal(new Date());
    const attendance = window.BucklerDB.get('attendanceLog');
    const todayRecord = attendance.find(a => a.teamLeaderId === state.currentUser.id && a.date === todayStr);

    let statusHTML = '';
    let actionHTML = '';

    if (!todayRecord) {
      statusHTML = `<span class="shift-status-pill shift-status-inactive">🔴 Off Duty</span>
                    <span style="font-size:0.75rem; color:#FCA5A5; font-weight:600;">⚠️ Check-In required before logging visits</span>`;
      actionHTML = `<button type="button" class="btn btn-shift-checkin" id="btn-shift-start">Start Day (Check-In)</button>`;
    } else if (!todayRecord.checkOut) {
      statusHTML = `<span class="shift-status-pill shift-status-active">🟢 Active Duty</span>
                    <span class="shift-time-display">Started: <strong>${todayRecord.checkIn}</strong></span>`;
      actionHTML = `<button type="button" class="btn btn-shift-checkout" id="btn-shift-end">End Day (Check-Out)</button>`;
    } else {
      statusHTML = `<span class="shift-status-pill shift-status-inactive">🔴 Checked Out</span>
                    <span class="shift-time-display">Started: <strong>${todayRecord.checkIn}</strong> | Finished: <strong>${todayRecord.checkOut}</strong></span>`;
      actionHTML = `<button type="button" class="btn" style="background:#e2e8f0; color:#64748b; cursor:not-allowed;" disabled>Shift Completed</button>`;
    }

    widget.innerHTML = `
      <div class="shift-widget-card">
        <div style="display:flex; align-items:center; gap:1.25rem; flex-wrap:wrap;">
          <div style="display:flex; flex-direction:column; gap:4px;">
            <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:#94a3b8; font-weight:700;">Daily Attendance</span>
            <strong style="font-size:1.05rem; color:#f8fafc;">${state.currentUser.name}</strong>
          </div>
          ${statusHTML}
        </div>
        <div class="shift-actions">
          ${actionHTML}
        </div>
      </div>
    `;

    const startBtn = document.getElementById('btn-shift-start');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        const timeNow = new Date().toTimeString().slice(0, 5);
        window.BucklerDB.checkInDriver(state.currentUser.id, timeNow);
        showToast('Checked in successfully. Have a safe drive!', 'success');
        renderShiftWidget();
        if (state.activeTab === 'dashboard') renderDashboard();
      });
    }

    const endBtn = document.getElementById('btn-shift-end');
    if (endBtn) {
      endBtn.addEventListener('click', () => {
        const timeNow = new Date().toTimeString().slice(0, 5);
        const success = window.BucklerDB.checkOutDriver(state.currentUser.id, timeNow);
        if (success) {
          showToast('Checked out successfully. Shift closed.', 'success');
        } else {
          showToast('Error closing shift', 'error');
        }
        renderShiftWidget();
        if (state.activeTab === 'dashboard') renderDashboard();
      });
    }
  }

  function setupDriverShiftsPanel() {
    const regions = ['Central', 'Kurdistan', 'South'];
    const tls = window.BucklerDB.getTeamLeaders('All');

    state.selectedShiftRegions = [...regions];
    state.selectedShiftTLs = tls.map(t => t.id);

    const startDateInput = document.getElementById('shifts-start-date');
    const endDateInput = document.getElementById('shifts-end-date');
    if (startDateInput) startDateInput.addEventListener('change', renderDriverShifts);
    if (endDateInput) endDateInput.addEventListener('change', renderDriverShifts);
  }

  function renderShiftRegionPills() {
    const container = document.getElementById('shifts-region-pills');
    if (!container) return;

    const regions = ['Central', 'Kurdistan', 'South'];
    const isAllSelected = regions.every(r => state.selectedShiftRegions.includes(r));

    let html = `
      <div class="tl-pill ${isAllSelected ? 'active' : ''}" data-value="All">
        <span class="pill-avatar">★</span>
        <span>All</span>
      </div>
    `;

    regions.forEach(r => {
      const isSelected = state.selectedShiftRegions.includes(r);
      const initials = r.substring(0, 2).toUpperCase();
      html += `
        <div class="tl-pill ${isSelected ? 'active' : ''}" data-value="${r}">
          <span class="pill-avatar">${initials}</span>
          <span>${r}</span>
        </div>
      `;
    });

    container.innerHTML = html;

    container.querySelectorAll('.tl-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const val = pill.getAttribute('data-value');
        if (val === 'All') {
          if (isAllSelected) {
            state.selectedShiftRegions = [];
          } else {
            state.selectedShiftRegions = [...regions];
          }
        } else {
          const idx = state.selectedShiftRegions.indexOf(val);
          if (idx > -1) {
            state.selectedShiftRegions.splice(idx, 1);
          } else {
            state.selectedShiftRegions.push(val);
          }
        }
        renderShiftRegionPills();
        renderShiftTLPills();
        renderDriverShifts();
      });
    });
  }

  function renderShiftTLPills() {
    const container = document.getElementById('shifts-tl-pills');
    if (!container) return;

    let tls = window.BucklerDB.getTeamLeaders('All');
    if (state.selectedShiftRegions.length > 0) {
      tls = tls.filter(t => state.selectedShiftRegions.includes(t.region));
    }

    state.selectedShiftTLs = state.selectedShiftTLs.filter(id => tls.some(t => t.id === id));
    if (state.selectedShiftTLs.length === 0 && tls.length > 0) {
      state.selectedShiftTLs = tls.map(t => t.id);
    }

    const isAllSelected = tls.length > 0 && tls.every(t => state.selectedShiftTLs.includes(t.id));

    let html = `
      <div class="tl-pill ${isAllSelected ? 'active' : ''}" data-value="All">
        <span class="pill-avatar">★</span>
        <span>All</span>
      </div>
    `;

    tls.forEach(t => {
      const isSelected = state.selectedShiftTLs.includes(t.id);
      const initials = t.name.split(' ').map(n => n[0]).join('').substring(0, 2);
      html += `
        <div class="tl-pill ${isSelected ? 'active' : ''}" data-value="${t.id}">
          <span class="pill-avatar">${initials}</span>
          <span>${t.name}</span>
        </div>
      `;
    });

    container.innerHTML = html;

    container.querySelectorAll('.tl-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const val = pill.getAttribute('data-value');
        if (val === 'All') {
          if (isAllSelected) {
            state.selectedShiftTLs = [];
          } else {
            state.selectedShiftTLs = tls.map(t => t.id);
          }
        } else {
          const idx = state.selectedShiftTLs.indexOf(val);
          if (idx > -1) {
            state.selectedShiftTLs.splice(idx, 1);
          } else {
            state.selectedShiftTLs.push(val);
          }
        }
        renderShiftTLPills();
        renderDriverShifts();
      });
    });
  }

  function renderDriverShifts() {
    const tableBody = document.getElementById('shifts-table-body');
    if (!tableBody) return;

    const isTL = state.currentUser && state.currentUser.role.toLowerCase() === 'team leader';
    const panel = document.getElementById('driver-shifts-panel');
    if (isTL || !hasAccessPermission('dashboard')) {
      if (panel) panel.style.display = 'none';
      return;
    }
    if (panel) panel.style.display = 'block';

    const startDate = document.getElementById('shifts-start-date').value;
    const endDate = document.getElementById('shifts-end-date').value;

    const attendanceLogs = window.BucklerDB.get('attendanceLog');
    const commutes = window.BucklerDB.get('commuteLog');
    const schedules = window.BucklerDB.get('schedules');
    const users = window.BucklerDB.get('users');

    let filteredShifts = attendanceLogs.filter(log => {
      if (startDate && log.date < startDate) return false;
      if (endDate && log.date > endDate) return false;
      if (!state.selectedShiftTLs.includes(log.teamLeaderId)) return false;

      const tl = users.find(u => u.id === log.teamLeaderId);
      if (tl && !state.selectedShiftRegions.includes(tl.region)) return false;

      return true;
    });

    filteredShifts.sort((a, b) => b.date.localeCompare(a.date));

    let totalCommuteDuration = 0;
    let totalVisits = 0;
    let totalWorkMinutes = 0;
    let totalShiftDays = filteredShifts.length;

    const filteredCommutes = commutes.filter(com => {
      const sch = schedules.find(s => s.id === com.scheduleId);
      const date = sch ? sch.date : '';
      if (startDate && date < startDate) return false;
      if (endDate && date > endDate) return false;
      if (!state.selectedShiftTLs.includes(com.teamLeaderId)) return false;
      if (com.region && !state.selectedShiftRegions.includes(com.region)) return false;
      return com.status === 'Completed';
    });
    filteredCommutes.forEach(c => totalCommuteDuration += c.durationMins);

    const filteredSchedules = schedules.filter(sch => {
      if (startDate && sch.date < startDate) return false;
      if (endDate && sch.date > endDate) return false;
      if (sch.status !== 'Conducted') return false;
      
      const tlIds = sch.teamLeaderId ? sch.teamLeaderId.split(',').map(x => x.trim()) : [];
      const matchesTL = tlIds.some(id => state.selectedShiftTLs.includes(id));
      if (!matchesTL) return false;

      if (sch.region && !state.selectedShiftRegions.includes(sch.region)) return false;
      return true;
    });
    totalVisits = filteredSchedules.length;

    let rowsHTML = filteredShifts.map(log => {
      const tl = users.find(u => u.id === log.teamLeaderId);
      const tlName = tl ? tl.name : 'Unknown Driver';
      const tlRegion = tl ? tl.region : 'N/A';

      const dayCommutes = commutes.filter(com => {
        if (com.teamLeaderId !== log.teamLeaderId) return false;
        const sch = schedules.find(s => s.id === com.scheduleId);
        return sch && sch.date === log.date && com.status === 'Completed';
      });
      let dayCommuteTime = 0;
      dayCommutes.forEach(c => dayCommuteTime += c.durationMins);

      const dayVisits = schedules.filter(sch => {
        if (sch.date !== log.date || sch.status !== 'Conducted') return false;
        const tlIds = sch.teamLeaderId ? sch.teamLeaderId.split(',').map(x => x.trim()) : [];
        return tlIds.includes(log.teamLeaderId);
      }).length;

      let workHoursStr = 'Active';
      let workMinutes = 0;
      if (log.checkIn && log.checkOut) {
        const [h1, m1] = log.checkIn.split(':').map(Number);
        const [h2, m2] = log.checkOut.split(':').map(Number);
        let diff = (h2 * 60 + m2) - (h1 * 60 + m1);
        if (diff < 0) diff += 24 * 60;
        workMinutes = diff;
        totalWorkMinutes += diff;
        const hrs = Math.floor(diff / 60);
        const mins = diff % 60;
        workHoursStr = `${hrs}h ${mins}m`;
      } else if (log.checkIn) {
        workHoursStr = 'Active';
      }

      return `
        <tr>
          <td><code>${log.date}</code></td>
          <td><strong><a href="#" class="user-click" data-id="${log.teamLeaderId}" style="color:inherit; text-decoration:none; border-bottom:1px dashed var(--text-muted);">${tlName}</a></strong></td>
          <td><span class="badge-region badge-region-${tlRegion.toLowerCase()}">${tlRegion}</span></td>
          <td><code>${log.checkIn}</code></td>
          <td><code>${log.checkOut || '--:--'}</code></td>
          <td><strong>${dayCommuteTime} mins</strong></td>
          <td><span style="font-weight:700; color:var(--text-dark);">${dayVisits} visits</span></td>
          <td><span style="font-weight:700; color:${log.checkOut ? 'var(--text-medium)' : 'var(--success-green)'};">${workHoursStr}</span></td>
        </tr>
      `;
    }).join('');

    if (!rowsHTML) {
      rowsHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-muted); padding:2rem;">No shift logs found for the selected filters.</td></tr>`;
    }

    tableBody.innerHTML = rowsHTML;
    bindEntityClicks(tableBody);

    document.getElementById('shifts-total-count').textContent = totalShiftDays;
    document.getElementById('shifts-total-commute').textContent = `${totalCommuteDuration} mins`;
    document.getElementById('shifts-total-visits').textContent = totalVisits;

    const avgHours = totalShiftDays > 0 ? ((totalWorkMinutes / 60) / totalShiftDays).toFixed(1) : '0.0';
    document.getElementById('shifts-avg-hours').textContent = `${avgHours} hrs`;
  }

  function setupClientMap() {
    const regions = ['Central', 'Kurdistan', 'South'];
    state.selectedMapRegions = [...regions];

    const tls = window.BucklerDB.getTeamLeaders('All');
    state.selectedMapTLs = tls.map(t => t.id);

    const clients = window.BucklerDB.get('clients');
    state.selectedMapClients = clients.map(c => c.id);

    renderMapRegionPills();
    renderMapTLPills();
    renderMapClientPills();
    renderClientMap();
  }

  function renderMapRegionPills() {
    const container = document.getElementById('map-client-region-pills');
    if (!container) return;

    const regions = ['Central', 'Kurdistan', 'South'];
    const isAllSelected = regions.every(r => state.selectedMapRegions.includes(r));

    let html = `
      <div class="tl-pill ${isAllSelected ? 'active' : ''}" data-value="All">
        <span class="pill-avatar">★</span>
        <span>All</span>
      </div>
    `;

    regions.forEach(r => {
      const isSelected = state.selectedMapRegions.includes(r);
      const initials = r.substring(0, 2).toUpperCase();
      html += `
        <div class="tl-pill ${isSelected ? 'active' : ''}" data-value="${r}">
          <span class="pill-avatar">${initials}</span>
          <span>${r}</span>
        </div>
      `;
    });

    container.innerHTML = html;

    container.querySelectorAll('.tl-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const val = pill.getAttribute('data-value');
        if (val === 'All') {
          if (isAllSelected) {
            state.selectedMapRegions = [];
          } else {
            state.selectedMapRegions = [...regions];
          }
        } else {
          const idx = state.selectedMapRegions.indexOf(val);
          if (idx > -1) {
            state.selectedMapRegions.splice(idx, 1);
          } else {
            state.selectedMapRegions.push(val);
          }
        }
        renderMapRegionPills();
        renderMapTLPills();
        renderMapClientPills();
        renderClientMap();
      });
    });
  }

  function renderMapTLPills() {
    const container = document.getElementById('map-client-tl-pills');
    if (!container) return;

    let tls = window.BucklerDB.getTeamLeaders('All');
    if (state.selectedMapRegions.length > 0) {
      tls = tls.filter(t => state.selectedMapRegions.includes(t.region));
    }

    state.selectedMapTLs = state.selectedMapTLs.filter(id => tls.some(t => t.id === id));
    if (state.selectedMapTLs.length === 0 && tls.length > 0) {
      state.selectedMapTLs = tls.map(t => t.id);
    }

    const isAllSelected = tls.length > 0 && tls.every(t => state.selectedMapTLs.includes(t.id));

    let html = `
      <div class="tl-pill ${isAllSelected ? 'active' : ''}" data-value="All">
        <span class="pill-avatar">★</span>
        <span>All</span>
      </div>
    `;

    tls.forEach(t => {
      const isSelected = state.selectedMapTLs.includes(t.id);
      const initials = t.name.split(' ').map(n => n[0]).join('').substring(0, 2);
      html += `
        <div class="tl-pill ${isSelected ? 'active' : ''}" data-value="${t.id}">
          <span class="pill-avatar">${initials}</span>
          <span>${t.name}</span>
        </div>
      `;
    });

    container.innerHTML = html;

    container.querySelectorAll('.tl-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const val = pill.getAttribute('data-value');
        if (val === 'All') {
          if (isAllSelected) {
            state.selectedMapTLs = [];
          } else {
            state.selectedMapTLs = tls.map(t => t.id);
          }
        } else {
          const idx = state.selectedMapTLs.indexOf(val);
          if (idx > -1) {
            state.selectedMapTLs.splice(idx, 1);
          } else {
            state.selectedMapTLs.push(val);
          }
        }
        renderMapTLPills();
        renderClientMap();
      });
    });
  }

  function renderMapClientPills() {
    const container = document.getElementById('map-client-cli-pills');
    if (!container) return;

    let clients = window.BucklerDB.get('clients');
    if (state.selectedMapRegions.length > 0) {
      clients = clients.filter(c => state.selectedMapRegions.includes(c.region));
    }

    state.selectedMapClients = state.selectedMapClients.filter(id => clients.some(c => c.id === id));
    if (state.selectedMapClients.length === 0 && clients.length > 0) {
      state.selectedMapClients = clients.map(c => c.id);
    }

    const isAllSelected = clients.length > 0 && clients.every(c => state.selectedMapClients.includes(c.id));

    let html = `
      <div class="tl-pill ${isAllSelected ? 'active' : ''}" data-value="All">
        <span class="pill-avatar">★</span>
        <span>All</span>
      </div>
    `;

    clients.forEach(c => {
      const isSelected = state.selectedMapClients.includes(c.id);
      const initials = c.name.substring(0, 2).toUpperCase();
      html += `
        <div class="tl-pill ${isSelected ? 'active' : ''}" data-value="${c.id}">
          <span class="pill-avatar">${initials}</span>
          <span>${c.name}</span>
        </div>
      `;
    });

    container.innerHTML = html;

    container.querySelectorAll('.tl-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const val = pill.getAttribute('data-value');
        if (val === 'All') {
          if (isAllSelected) {
            state.selectedMapClients = [];
          } else {
            state.selectedMapClients = clients.map(c => c.id);
          }
        } else {
          const idx = state.selectedMapClients.indexOf(val);
          if (idx > -1) {
            state.selectedMapClients.splice(idx, 1);
          } else {
            state.selectedMapClients.push(val);
          }
        }
        renderMapClientPills();
        renderClientMap();
      });
    });
  }

  let clientLeafletMap = null;
  let clientMapMarkers = [];

  function initClientMap() {
    if (clientLeafletMap) return;
    
    const mapEl = document.getElementById('client-real-map');
    if (!mapEl) return;
    
    clientLeafletMap = L.map('client-real-map', {
      zoomControl: false,
      attributionControl: false
    }).setView([33.2232, 43.6793], 6);
    
    L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20
    }).addTo(clientLeafletMap);

    L.control.zoom({ position: 'topright' }).addTo(clientLeafletMap);
  }

  function renderClientMap() {
    initClientMap();
    if (!clientLeafletMap) return;
    setTimeout(() => {
      if (clientLeafletMap) clientLeafletMap.invalidateSize();
    }, 100);

    // Clear previous markers
    clientMapMarkers.forEach(m => clientLeafletMap.removeLayer(m));
    clientMapMarkers = [];

    const listContainer = document.getElementById('mapped-client-registry-list');
    if (!listContainer) return;

    const clients = window.BucklerDB.get('clients');
    const schedules = window.BucklerDB.get('schedules');

    const filtered = clients.filter(c => {
      if (!state.selectedMapRegions.includes(c.region)) return false;
      if (!state.selectedMapClients.includes(c.id)) return false;

      const clientSchedules = schedules.filter(s => s.clientId === c.id);
      const hasSelectedTL = clientSchedules.some(s => {
        const sTLs = s.teamLeaderId ? s.teamLeaderId.split(',').map(x => x.trim()) : [];
        return sTLs.some(id => state.selectedMapTLs.includes(id));
      });
      const regionTLs = window.BucklerDB.getTeamLeaders(c.region).map(t => t.id);
      const allRegionTLsSelected = regionTLs.every(id => state.selectedMapTLs.includes(id));
      const matchTL = clientSchedules.length > 0 ? hasSelectedTL : allRegionTLsSelected;

      return matchTL;
    });

    let listHTML = '';

    filtered.forEach(c => {
      const latVal = c.lat ? parseFloat(c.lat) : 33.3152;
      const lngVal = c.lng ? parseFloat(c.lng) : 44.3661;

      let dotColor = '#C62828';
      if (c.region === 'Kurdistan') dotColor = '#3B82F6';
      if (c.region === 'South') dotColor = '#10B981';

      // Create Leaflet marker
      const marker = L.circleMarker([latVal, lngVal], {
        radius: 7,
        fillColor: dotColor,
        color: '#FFFFFF',
        weight: 1.5,
        fillOpacity: 0.95
      }).addTo(clientLeafletMap);

      marker.bindPopup(`
        <div style="font-family:inherit; padding:2px;">
          <strong style="font-size:0.85rem; color:var(--text-dark);">${c.name}</strong><br/>
          <span style="font-size:0.75rem; color:var(--text-muted);">Region: ${c.region} | City: ${c.city}</span><br/>
          <span style="font-size:0.75rem; color:var(--text-medium);">Address: ${c.address || '-'}</span><br/>
          <a href="#" class="popup-profile-link" data-id="${c.id}" style="font-size:0.75rem; font-weight:700; color:var(--primary-red); text-decoration:none; display:inline-block; margin-top:4px;">Open Profile</a>
        </div>
      `);

      marker.on('popupopen', () => {
        const link = document.querySelector('.popup-profile-link');
        if (link) {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            openClientModal(link.getAttribute('data-id'));
          });
        }
      });

      marker.on('mouseover', () => {
        marker.setStyle({ radius: 10, weight: 3 });
        const item = document.getElementById(`registry-item-${c.id}`);
        if (item) {
          item.classList.add('active');
          item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });

      marker.on('mouseout', () => {
        marker.setStyle({ radius: 7, weight: 1.5 });
        const item = document.getElementById(`registry-item-${c.id}`);
        if (item) item.classList.remove('active');
      });

      marker.on('click', () => {
        highlightClientMapSelection(c.id);
      });

      clientMapMarkers.push(marker);

      listHTML += `
        <div class="client-registry-item" data-id="${c.id}" id="registry-item-${c.id}">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <strong style="color:var(--text-dark); font-size:0.8rem;">${c.name}</strong>
            <span class="badge-region badge-region-${c.region.toLowerCase()}" style="font-size:0.6rem; padding:1px 5px;">${c.region}</span>
          </div>
          <div style="font-size:0.7rem; color:var(--text-muted); margin-top:2px;">
            Code: <code>${c.clientCode || c.id}</code> | City: ${c.city}
          </div>
          <div style="font-size:0.7rem; color:var(--text-medium); margin-top:1px;">
            Coordinates: <strong style="font-family:monospace;">${latVal.toFixed(4)}, ${lngVal.toFixed(4)}</strong>
          </div>
        </div>
      `;
    });

    listContainer.innerHTML = listHTML || `<div style="padding:1rem; text-align:center; color:var(--text-muted); font-size:0.75rem;">No clients match selected filters.</div>`;

    const listItems = listContainer.querySelectorAll('.client-registry-item');
    listItems.forEach(item => {
      const cid = item.getAttribute('data-id');
      const marker = clientMapMarkers.find((m, i) => filtered[i].id === cid);

      item.addEventListener('click', () => {
        highlightClientMapSelection(cid);
        if (marker) {
          clientLeafletMap.setView(marker.getLatLng(), 11);
          marker.openPopup();
        }
      });

      item.addEventListener('mouseover', () => {
        if (marker) {
          marker.setStyle({ radius: 10, weight: 3 });
        }
      });

      item.addEventListener('mouseout', () => {
        if (marker) {
          marker.setStyle({ radius: 7, weight: 1.5 });
        }
      });
    });

    // Auto-fit bounds if we have markers
    if (clientMapMarkers.length > 0) {
      const group = L.featureGroup(clientMapMarkers);
      clientLeafletMap.fitBounds(group.getBounds().pad(0.1));
    }
  }

  function highlightClientMapSelection(clientId) {
    document.querySelectorAll('.client-registry-item').forEach(item => {
      if (item.getAttribute('data-id') === clientId) {
        item.classList.add('active');
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        item.classList.remove('active');
      }
    });
  }

  // ============================================================
  // SUPPLIERS MANAGEMENT
  // ============================================================
  function _ensureSuppliersArray() {
    const d = window.BucklerDB.getData();
    if (!Array.isArray(d.suppliers)) {
      d.suppliers = [];
      window.BucklerDB.saveData(d);
    }
  }

  function renderSuppliers() {
    _ensureSuppliersArray();

    const suppliers = window.BucklerDB.get('suppliers') || [];
    const items     = window.BucklerDB.get('items')     || [];
    const searchQ   = (document.getElementById('search-supplier')          || {}).value?.toLowerCase() || '';
    const catFilter = (document.getElementById('filter-supplier-category') || {}).value || 'All';

    let filtered = suppliers.slice();
    if (catFilter !== 'All') filtered = filtered.filter(s => s.category === catFilter);
    if (searchQ)             filtered = filtered.filter(s =>
      s.name.toLowerCase().includes(searchQ) ||
      (s.country       || '').toLowerCase().includes(searchQ) ||
      (s.contactPerson || '').toLowerCase().includes(searchQ)
    );

    // Update stat counters
    const localEl = document.getElementById('stat-suppliers-local');
    const intlEl  = document.getElementById('stat-suppliers-intl');
    if (localEl) localEl.textContent = suppliers.filter(s => s.category === 'Local').length;
    if (intlEl)  intlEl.textContent  = suppliers.filter(s => s.category === 'International').length;

    const tbody = document.getElementById('suppliers-table-body');
    if (!tbody) return;

    tbody.innerHTML = filtered.length ? filtered.map(s => {
      const suppliedItems = (s.productIds || []).map(pid => {
        const item = items.find(i => i.id === pid);
        return item ? item.name : null;
      }).filter(Boolean);

      const catBadge = s.category === 'Local'
        ? `<span style="background:#EFF6FF;color:#3B82F6;font-size:0.7rem;font-weight:700;padding:2px 8px;border-radius:4px;">🏢 Local</span>`
        : `<span style="background:#ECFDF5;color:#10B981;font-size:0.7rem;font-weight:700;padding:2px 8px;border-radius:4px;">🌍 International</span>`;

      const itemTags = suppliedItems.length
        ? suppliedItems.map(n => `<span style="background:#F8FAFC;border:1px solid var(--border-color);padding:1px 6px;border-radius:3px;margin:1px;display:inline-block;font-size:0.75rem;">${n}</span>`).join('')
        : `<span style="color:var(--text-muted);font-size:0.78rem;">None allocated</span>`;

      return `
        <tr>
          <td><strong style="color:var(--text-dark);">${s.name}</strong></td>
          <td>${catBadge}</td>
          <td>${s.country || '-'}</td>
          <td>${s.contactPerson || '-'}</td>
          <td style="font-size:0.8rem;">${s.phone || '-'}${s.email ? `<br/><span style="color:var(--text-muted);">${s.email}</span>` : ''}</td>
          <td style="max-width:220px;">${itemTags}</td>
          <td>
            <div class="table-cell-actions">
              <button class="btn btn-secondary btn-sm edit-supplier-btn" data-id="${s.id}">Edit</button>
              <button class="btn btn-danger btn-sm delete-supplier-btn" data-id="${s.id}">Delete</button>
            </div>
          </td>
        </tr>
      `;
    }).join('') : `<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:2rem;">No suppliers found. Click "Add Supplier" to create one.</td></tr>`;

    // Bind Edit buttons
    tbody.querySelectorAll('.edit-supplier-btn').forEach(b => {
      b.addEventListener('click', () => openSupplierModal(b.getAttribute('data-id')));
    });

    // Bind Delete buttons
    tbody.querySelectorAll('.delete-supplier-btn').forEach(b => {
      b.addEventListener('click', () => {
        const sid = b.getAttribute('data-id');
        const sup = (window.BucklerDB.get('suppliers') || []).find(s => s.id === sid);
        if (confirm(`Delete supplier "${sup ? sup.name : ''}"?`)) {
          window.BucklerDB.delete('suppliers', sid);
          showToast('Supplier deleted', 'success');
          renderSuppliers();
        }
      });
    });

    // Wire filters (once)
    const searchEl = document.getElementById('search-supplier');
    const catEl    = document.getElementById('filter-supplier-category');
    if (searchEl && !searchEl._bound) { searchEl._bound = true; searchEl.addEventListener('input',  renderSuppliers); }
    if (catEl    && !catEl._bound)    { catEl._bound    = true; catEl.addEventListener('change', renderSuppliers); }

    // Wire Add button (once)
    const addBtn = document.getElementById('btn-add-supplier');
    if (addBtn && !addBtn._bound) { addBtn._bound = true; addBtn.addEventListener('click', () => openSupplierModal()); }
  }

  function openSupplierModal(id = null) {
    _ensureSuppliersArray();
    const isEdit   = !!id;
    const supplier = isEdit ? (window.BucklerDB.get('suppliers') || []).find(s => s.id === id) : null;
    const items    = (window.BucklerDB.get('items') || []).sort((a, b) => a.name.localeCompare(b.name));

    state.editingRecord = { entity: 'suppliers', id: id };

    const currentProductIds = supplier ? (supplier.productIds || []) : [];

    // Group items by category for easier selection
    const categories = [...new Set(items.map(i => i.category || 'Uncategorized'))].sort();
    const itemsHTML = categories.map(cat => {
      const catItems = items.filter(i => (i.category || 'Uncategorized') === cat);
      return `
        <div style="margin-bottom:0.5rem;">
          <div style="font-size:0.7rem;font-weight:800;text-transform:uppercase;color:#94A3B8;letter-spacing:0.05em;padding:4px 6px;background:#F1F5F9;border-radius:4px;margin-bottom:4px;">${cat}</div>
          ${catItems.map(item => `
            <label style="display:flex;align-items:center;gap:0.5rem;padding:0.3rem 0.4rem;border-radius:4px;cursor:pointer;font-size:0.82rem;transition:background 0.15s;" onmouseover="this.style.background='#F8FAFC'" onmouseout="this.style.background='transparent'">
              <input type="checkbox" name="sup-product-cb" value="${item.id}" ${currentProductIds.includes(item.id) ? 'checked' : ''} style="width:14px;height:14px;accent-color:var(--primary-red);">
              <span style="flex:1;color:var(--text-dark);">${item.name}</span>
              <span style="color:var(--text-muted);font-size:0.72rem;">${item.itemCode || ''} · ${item.unit || ''}</span>
            </label>
          `).join('')}
        </div>`;
    }).join('') || '<p style="color:var(--text-muted);font-size:0.82rem;padding:0.5rem;">No products in the system yet.</p>';

    const html = `
      <form id="supplier-form" onsubmit="event.preventDefault();">
        <div class="form-group row-split">
          <div>
            <label for="sup-modal-name">Supplier Name <span style="color:var(--primary-red);">*</span></label>
            <input type="text" id="sup-modal-name" class="form-control" value="${supplier ? supplier.name : ''}" required placeholder="e.g. Al-Amin Trading Co.">
          </div>
          <div>
            <label for="sup-modal-category">Category <span style="color:var(--primary-red);">*</span></label>
            <select id="sup-modal-category" class="form-control" required>
              <option value="Local"         ${!supplier || supplier.category === 'Local'          ? 'selected' : ''}>🏢 Local</option>
              <option value="International" ${supplier  && supplier.category === 'International'  ? 'selected' : ''}>🌍 International</option>
            </select>
          </div>
        </div>
        <div class="form-group row-split">
          <div>
            <label for="sup-modal-country">Country</label>
            <input type="text" id="sup-modal-country" class="form-control" value="${supplier ? (supplier.country || '') : ''}" placeholder="e.g. Iraq, Germany, USA">
          </div>
          <div>
            <label for="sup-modal-contact">Contact Person</label>
            <input type="text" id="sup-modal-contact" class="form-control" value="${supplier ? (supplier.contactPerson || '') : ''}" placeholder="Full name">
          </div>
        </div>
        <div class="form-group row-split">
          <div>
            <label for="sup-modal-phone">Phone</label>
            <input type="text" id="sup-modal-phone" class="form-control" value="${supplier ? (supplier.phone || '') : ''}" placeholder="+964...">
          </div>
          <div>
            <label for="sup-modal-email">Email</label>
            <input type="email" id="sup-modal-email" class="form-control" value="${supplier ? (supplier.email || '') : ''}" placeholder="supplier@example.com">
          </div>
        </div>
        <div class="form-group">
          <label for="sup-modal-notes">Notes</label>
          <textarea id="sup-modal-notes" class="form-control" placeholder="Additional notes, terms, delivery schedule..." style="min-height:60px;">${supplier ? (supplier.notes || '') : ''}</textarea>
        </div>
        <div class="form-group">
          <label style="font-weight:700;font-size:0.82rem;margin-bottom:0.5rem;display:flex;justify-content:space-between;align-items:center;">
            <span>Allocated Items / Products</span>
            <span id="sup-selected-count" style="font-size:0.72rem;background:var(--primary-red);color:white;padding:1px 8px;border-radius:10px;">${currentProductIds.length} selected</span>
          </label>
          <div style="max-height:200px;overflow-y:auto;border:1px solid var(--border-color);border-radius:6px;padding:0.5rem;background:#FAFAFA;">
            ${itemsHTML}
          </div>
        </div>
      </form>`;

    showModal(isEdit ? 'Edit Supplier Profile' : 'Add New Supplier', html, true, 'modal-lg');

    // Live counter for selected items
    setTimeout(() => {
      const cbs = document.querySelectorAll('input[name="sup-product-cb"]');
      const counter = document.getElementById('sup-selected-count');
      cbs.forEach(cb => {
        cb.addEventListener('change', () => {
          const cnt = document.querySelectorAll('input[name="sup-product-cb"]:checked').length;
          if (counter) counter.textContent = `${cnt} selected`;
        });
      });
    }, 50);
  }


  // ============================================================
  // SIGN-OUT / SWITCH USER BUTTON
  // ============================================================
  // ============================================================
  // SALES CRM MANAGEMENT
  // ============================================================
  function _ensureSalesDealsArray() {
    const d = window.BucklerDB.getData();
    if (!Array.isArray(d.salesDeals)) {
      d.salesDeals = [];
      window.BucklerDB.saveData(d);
    }
  }

  function renderSalesCRM() {
    _ensureSalesDealsArray();
    const deals = window.BucklerDB.get('salesDeals') || [];

    // KPI Counters
    const prospectsCount = deals.filter(d => d.stage === 'Prospecting').length;
    const proposalsCount = deals.filter(d => d.stage === 'Proposal Sent').length;
    const negotiationsCount = deals.filter(d => d.stage === 'Negotiation').length;
    const wonValue = deals.filter(d => d.stage === 'Closed Won').reduce((sum, d) => sum + (parseFloat(d.expectedValue) || 0), 0);

    const elProspects = document.getElementById('stat-sales-prospects');
    const elProposals = document.getElementById('stat-sales-proposals');
    const elNegotiations = document.getElementById('stat-sales-negotiations');
    const elWonValue = document.getElementById('stat-sales-won-value');

    if (elProspects) elProspects.textContent = prospectsCount;
    if (elProposals) elProposals.textContent = proposalsCount;
    if (elNegotiations) elNegotiations.textContent = negotiationsCount;
    if (elWonValue) elWonValue.textContent = `$${wonValue.toLocaleString()}`;

    // Stages Config
    const stagesConfig = [
      { key: 'Prospecting', containerId: 'kanban-prospecting', countId: 'count-deal-prospecting' },
      { key: 'Qualification', containerId: 'kanban-qualification', countId: 'count-deal-qualification' },
      { key: 'Proposal Sent', containerId: 'kanban-proposal', countId: 'count-deal-proposal' },
      { key: 'Negotiation', containerId: 'kanban-negotiation', countId: 'count-deal-negotiation' },
      { key: 'Closed Won', containerId: 'kanban-won', countId: 'count-deal-won' },
      { key: 'Closed Lost', containerId: 'kanban-lost', countId: 'count-deal-lost' }
    ];

    stagesConfig.forEach(cfg => {
      const colDeals = deals.filter(d => d.stage === cfg.key);
      const countEl = document.getElementById(cfg.countId);
      if (countEl) countEl.textContent = colDeals.length;

      const container = document.getElementById(cfg.containerId);
      if (!container) return;

      container.innerHTML = colDeals.length ? colDeals.map(d => {
        let valText = `$${(d.expectedValue || 0).toLocaleString()}`;
        let costingBadge = d.costStructure 
          ? `<span style="background:#D1FAE5; color:#065F46; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:10px; display:inline-block; margin-top:4px;">📊 Costed</span>`
          : `<span style="background:#FFE4E6; color:#9F1239; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:10px; display:inline-block; margin-top:4px;">⚠️ Price Pending</span>`;

        return `
          <div class="card" style="padding:0.75rem; border:1px solid var(--border-color); background:white; border-radius:6px; box-shadow:0 1px 3px rgba(0,0,0,0.05); margin-bottom:0.5rem; display:flex; flex-direction:column; gap:4px;">
            <div style="font-weight:700; color:var(--text-dark); font-size:0.85rem; line-height:1.2;">${d.name}</div>
            <div style="font-size:0.75rem; color:var(--text-medium); margin-top:2px;">Prospect: <strong>${d.prospectName}</strong></div>
            <div style="font-size:0.72rem; color:var(--text-muted);">Service: ${d.serviceType}</div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.4rem; border-top:1px dashed #F1F5F9; padding-top:4px;">
              <span style="font-weight:800; font-size:0.85rem; color:var(--primary-red);">${valText}</span>
              ${costingBadge}
            </div>
            <div style="display:flex; gap:0.25rem; margin-top:0.5rem; justify-content:flex-end;">
              <button class="btn btn-secondary btn-sm edit-deal-btn" data-id="${d.id}" style="padding:2px 6px; font-size:0.7rem;">Edit</button>
              <button class="btn btn-secondary btn-sm cost-deal-btn" data-id="${d.id}" style="padding:2px 6px; font-size:0.7rem; background:#EFF6FF; color:#1D4ED8; border-color:#BFDBFE;">Costing</button>
              <button class="btn btn-danger btn-sm delete-deal-btn" data-id="${d.id}" style="padding:2px 6px; font-size:0.7rem;">Delete</button>
            </div>
          </div>
        `;
      }).join('') : `<div style="text-align:center; color:var(--text-muted); font-size:0.75rem; padding:1.5rem; border:1px dashed #E2E8F0; border-radius:6px;">Empty</div>`;
    });

    // Bind Edit button click
    document.querySelectorAll('.edit-deal-btn').forEach(btn => {
      btn.onclick = () => openDealModal(btn.getAttribute('data-id'));
    });

    // Bind Cost Calculator button click
    document.querySelectorAll('.cost-deal-btn').forEach(btn => {
      btn.onclick = () => openCostCalculatorModal(btn.getAttribute('data-id'));
    });

    // Bind Delete button click
    document.querySelectorAll('.delete-deal-btn').forEach(btn => {
      btn.onclick = () => {
        const id = btn.getAttribute('data-id');
        const deal = (window.BucklerDB.get('salesDeals') || []).find(d => d.id === id);
        if (deal && confirm(`Delete deal "${deal.name}"?`)) {
          window.BucklerDB.delete('salesDeals', id);
          showToast('Sales opportunity removed ✓', 'success');
          renderSalesCRM();
        }
      };
    });

    // Bind Add Deal button once
    const btnAddDeal = document.getElementById('btn-add-deal');
    if (btnAddDeal && !btnAddDeal._bound) {
      btnAddDeal._bound = true;
      btnAddDeal.addEventListener('click', () => openDealModal());
    }
  }

  function openDealModal(id = null) {
    _ensureSalesDealsArray();
    const isEdit = !!id;
    const deal = isEdit ? (window.BucklerDB.get('salesDeals') || []).find(d => d.id === id) : null;
    const services = window.BucklerDB.get('services') || ['pest control', 'termite treatment'];

    state.editingRecord = { entity: 'salesDeals', id: id };

    const html = `
      <form id="deal-form" onsubmit="event.preventDefault();">
        <div class="form-group">
          <label for="deal-modal-name">Opportunity Name *</label>
          <input type="text" id="deal-modal-name" class="form-control" required value="${deal ? deal.name : ''}" placeholder="e.g. Erbil Mall Pest Control Contract">
        </div>
        <div class="form-group row-split">
          <div>
            <label for="deal-modal-prospect">Prospect / Client Name *</label>
            <input type="text" id="deal-modal-prospect" class="form-control" required value="${deal ? deal.prospectName : ''}" placeholder="e.g. Erbil Mall Ltd">
          </div>
          <div>
            <label for="deal-modal-service">Target Service *</label>
            <select id="deal-modal-service" class="form-control" required>
              ${services.map(s => `<option value="${s}" ${deal && deal.serviceType === s ? 'selected' : ''}>${s.toUpperCase()}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="form-group row-split">
          <div>
            <label for="deal-modal-stage">Pipeline Stage *</label>
            <select id="deal-modal-stage" class="form-control" required>
              <option value="Prospecting" ${!deal || deal.stage === 'Prospecting' ? 'selected' : ''}>🔍 Prospecting</option>
              <option value="Qualification" ${deal && deal.stage === 'Qualification' ? 'selected' : ''}>📋 Qualification</option>
              <option value="Proposal Sent" ${deal && deal.stage === 'Proposal Sent' ? 'selected' : ''}>📄 Proposal Sent</option>
              <option value="Negotiation" ${deal && deal.stage === 'Negotiation' ? 'selected' : ''}>🤝 Negotiation</option>
              <option value="Closed Won" ${deal && deal.stage === 'Closed Won' ? 'selected' : ''}>🎉 Closed Won</option>
              <option value="Closed Lost" ${deal && deal.stage === 'Closed Lost' ? 'selected' : ''}>❌ Closed Lost</option>
            </select>
          </div>
          <div>
            <label for="deal-modal-value">Expected Deal Value (USD/mo) *</label>
            <input type="number" id="deal-modal-value" class="form-control" required value="${deal ? (deal.expectedValue || '') : ''}" placeholder="Calculated or estimated value">
          </div>
        </div>
      </form>
    `;

    showModal(isEdit ? 'Edit Sales Opportunity' : 'Add New Sales Opportunity', html, true);

    const saveBtn = document.getElementById('modal-save-btn');
    if (saveBtn) {
      saveBtn.onclick = () => {
        const form = document.getElementById('deal-form');
        if (!form.checkValidity()) { form.reportValidity(); return; }

        const fields = {
          name: document.getElementById('deal-modal-name').value.trim(),
          prospectName: document.getElementById('deal-modal-prospect').value.trim(),
          serviceType: document.getElementById('deal-modal-service').value,
          stage: document.getElementById('deal-modal-stage').value,
          expectedValue: parseFloat(document.getElementById('deal-modal-value').value) || 0,
          costStructure: deal ? deal.costStructure : null,
          dateCreated: deal ? deal.dateCreated : new Date().toISOString().split('T')[0]
        };

        if (isEdit) {
          window.BucklerDB.update('salesDeals', id, fields);
          showToast('Opportunity updated successfully ✓', 'success');
        } else {
          window.BucklerDB.insert('salesDeals', fields);
          showToast('New opportunity created ✓', 'success');
        }

        els.modalBackdrop.style.display = 'none';
        state.editingRecord = null;
        renderSalesCRM();
      };
    }
  }

  function openCostCalculatorModal(dealId) {
    const deals = window.BucklerDB.get('salesDeals') || [];
    const deal = deals.find(d => d.id === dealId);
    if (!deal) return;

    const cs = deal.costStructure || {};
    const isPest = deal.serviceType.toLowerCase().includes('pest');

    let formHTML = '';

    if (isPest) {
      formHTML = `
        <div style="background:#F8FAFC; border:1px solid var(--border-color); border-radius: var(--radius-md); padding:1rem; margin-bottom:1rem;">
          <h4 style="font-size:0.85rem; font-weight:700; color:var(--text-dark); margin-bottom:0.75rem; border-bottom:1px dashed var(--border-color); padding-bottom:4px;">Pest Control Cost Factors</h4>
          <div class="form-group row-split">
            <div>
              <label for="cost-visits">Visits per Month *</label>
              <input type="number" id="cost-visits" class="form-control calc-trigger" required value="${cs.visitsPerMonth || 4}" min="1">
            </div>
            <div>
              <label for="cost-hours">Hours per Visit *</label>
              <input type="number" id="cost-hours" class="form-control calc-trigger" required value="${cs.hoursPerVisit || 2}" min="0.5" step="0.5">
            </div>
          </div>
          <div class="form-group row-split">
            <div>
              <label for="cost-stations">Rodent Bait Stations Used *</label>
              <input type="number" id="cost-stations" class="form-control calc-trigger" required value="${cs.baitStations || 10}" min="0">
            </div>
            <div>
              <label for="cost-stickers">Monthly Stickers Needed *</label>
              <input type="number" id="cost-stickers" class="form-control calc-trigger" required value="${cs.stickersPerMonth || 10}" min="0">
            </div>
          </div>
          <div class="form-group row-split">
            <div>
              <label for="cost-additional">Additional Material/Other Cost ($) *</label>
              <input type="number" id="cost-additional" class="form-control calc-trigger" required value="${cs.additionalCost || 0}" min="0">
            </div>
            <div>
              <label for="cost-label">Costing Description / Reference</label>
              <input type="text" id="cost-label" class="form-control" value="${cs.label || 'Standard Monthly Service Plan'}" placeholder="e.g. Premium warehouse checklist">
            </div>
          </div>
        </div>

        <div style="background:#FFFBEB; border:1px solid #FCD34D; border-radius: var(--radius-md); padding:1rem; margin-bottom:1rem;">
          <h4 style="font-size:0.85rem; font-weight:700; color:#B45309; margin-bottom:0.75rem; border-bottom:1px dashed #FCD34D; padding-bottom:4px;">Rate Settings & Markup</h4>
          <div class="form-group row-split">
            <div>
              <label for="rate-labor">Labor Hourly Rate ($/hr)</label>
              <input type="number" id="rate-labor" class="form-control calc-trigger" value="${cs.laborRatePerHour || 15}" min="0">
            </div>
            <div>
              <label for="rate-station">Unit Cost per Bait Station ($)</label>
              <input type="number" id="rate-station" class="form-control calc-trigger" value="${cs.costPerBaitStation || 8}" min="0">
            </div>
          </div>
          <div class="form-group row-split">
            <div>
              <label for="rate-sticker">Unit Cost per Sticker ($)</label>
              <input type="number" id="rate-sticker" class="form-control calc-trigger" value="${cs.costPerSticker || 0.50}" min="0" step="0.05">
            </div>
            <div>
              <label for="rate-margin">Desired Profit Margin (%)</label>
              <input type="number" id="rate-margin" class="form-control calc-trigger" value="${cs.profitMargin || 30}" min="0" max="95">
            </div>
          </div>
        </div>
      `;
    } else {
      formHTML = `
        <div style="background:#F8FAFC; border:1px solid var(--border-color); border-radius: var(--radius-md); padding:1rem; margin-bottom:1rem;">
          <h4 style="font-size:0.85rem; font-weight:700; color:var(--text-dark); margin-bottom:0.75rem; border-bottom:1px dashed var(--border-color); padding-bottom:4px;">General Service Cost Factors</h4>
          <p style="font-size:0.78rem; color:var(--text-medium); margin-bottom:0.75rem;">(Price structure for non-pest services is general. Specific structures will be added later.)</p>
          <div class="form-group row-split">
            <div>
              <label for="cost-visits">Visits per Month *</label>
              <input type="number" id="cost-visits" class="form-control calc-trigger" required value="${cs.visitsPerMonth || 4}" min="1">
            </div>
            <div>
              <label for="cost-hours">Hours per Visit *</label>
              <input type="number" id="cost-hours" class="form-control calc-trigger" required value="${cs.hoursPerVisit || 2}" min="0.5" step="0.5">
            </div>
          </div>
          <div class="form-group row-split">
            <div>
              <label for="cost-additional">Additional Cost ($) *</label>
              <input type="number" id="cost-additional" class="form-control calc-trigger" required value="${cs.additionalCost || 0}" min="0">
            </div>
            <div>
              <label for="cost-label">Costing Description / Reference</label>
              <input type="text" id="cost-label" class="form-control" value="${cs.label || 'General monthly service plan'}" placeholder="e.g. Lawn care costing">
            </div>
          </div>
        </div>

        <div style="background:#FFFBEB; border:1px solid #FCD34D; border-radius: var(--radius-md); padding:1rem; margin-bottom:1rem;">
          <h4 style="font-size:0.85rem; font-weight:700; color:#B45309; margin-bottom:0.75rem; border-bottom:1px dashed #FCD34D; padding-bottom:4px;">Rate Settings & Markup</h4>
          <div class="form-group row-split">
            <div>
              <label for="rate-labor">Labor Hourly Rate ($/hr)</label>
              <input type="number" id="rate-labor" class="form-control calc-trigger" value="${cs.laborRatePerHour || 15}" min="0">
            </div>
            <div>
              <label for="rate-margin">Desired Profit Margin (%)</label>
              <input type="number" id="rate-margin" class="form-control calc-trigger" value="${cs.profitMargin || 30}" min="0" max="95">
            </div>
          </div>
        </div>
      `;
    }

    const calculatorHTML = `
      <form id="costing-form" onsubmit="event.preventDefault();" style="display:grid; grid-template-columns:1.8fr 1.2fr; gap:1.5rem; align-items:start; padding:5px;">
        <div>
          ${formHTML}
        </div>
        <div style="background:#EFF6FF; border:1px solid #BFDBFE; border-radius: var(--radius-md); padding:1.25rem; display:flex; flex-direction:column; gap:0.85rem; box-shadow: var(--shadow-sm); position:sticky; top:10px;">
          <h4 style="font-size:0.9rem; font-weight:800; color:#1E40AF; border-bottom:1.5px solid #BFDBFE; padding-bottom:4px; margin-bottom:2px;">Pricing Structure Summary</h4>
          
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:#475569;">
            <span>Labor Cost/mo:</span>
            <span id="calc-lbl-labor" style="font-weight:700;">$0.00</span>
          </div>

          ${isPest ? `
            <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:#475569;">
              <span>Bait Stations (Amortized):</span>
              <span id="calc-lbl-stations" style="font-weight:700;">$0.00</span>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:#475569;">
              <span>Stickers Cost/mo:</span>
              <span id="calc-lbl-stickers" style="font-weight:700;">$0.00</span>
            </div>
          ` : ''}

          <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:#475569;">
            <span>Additional Costs:</span>
            <span id="calc-lbl-additional" style="font-weight:700;">$0.00</span>
          </div>

          <div style="display:flex; justify-content:space-between; font-size:0.82rem; font-weight:800; border-top:1px dashed #BFDBFE; padding-top:6px; color:#1E3A8A; margin-top:2px;">
            <span>Total Base Cost/mo:</span>
            <span id="calc-lbl-base-total">$0.00</span>
          </div>

          <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:#059669; font-weight:600;">
            <span>Markup Value:</span>
            <span id="calc-lbl-markup">$0.00</span>
          </div>

          <div style="background:white; border:1.5px solid #1E40AF; border-radius:6px; padding:0.65rem; display:flex; flex-direction:column; align-items:center; margin-top:5px;">
            <span style="font-size:0.7rem; text-transform:uppercase; font-weight:800; color:#1E40AF; letter-spacing:0.05em; margin-bottom:2px;">Recommended Price / mo</span>
            <span id="calc-lbl-selling-price" style="font-size:1.6rem; font-weight:900; color:var(--primary-red);">$0.00</span>
            <span id="calc-lbl-annual-value" style="font-size:0.72rem; color:var(--text-medium); margin-top:1px;">Annual: $0.00</span>
          </div>
        </div>
      </form>
    `;

    showModal(`Price Costing Structure — ${deal.name}`, calculatorHTML, true, 'modal-xl');

    const updatePricingSummary = () => {
      const visits = parseFloat(document.getElementById('cost-visits').value) || 0;
      const hours = parseFloat(document.getElementById('cost-hours').value) || 0;
      const additional = parseFloat(document.getElementById('cost-additional').value) || 0;
      const laborRate = parseFloat(document.getElementById('rate-labor').value) || 0;
      const margin = parseFloat(document.getElementById('rate-margin').value) || 0;

      let laborCost = visits * hours * laborRate;
      let stationsCost = 0;
      let stickersCost = 0;

      if (isPest) {
        const stations = parseFloat(document.getElementById('cost-stations').value) || 0;
        const stickers = parseFloat(document.getElementById('cost-stickers').value) || 0;
        const stationRate = parseFloat(document.getElementById('rate-station').value) || 0;
        const stickerRate = parseFloat(document.getElementById('rate-sticker').value) || 0;

        stationsCost = (stations * stationRate) / 12;
        stickersCost = stickers * stickerRate;

        const elStations = document.getElementById('calc-lbl-stations');
        const elStickers = document.getElementById('calc-lbl-stickers');
        if (elStations) elStations.textContent = `$${stationsCost.toFixed(2)}`;
        if (elStickers) elStickers.textContent = `$${stickersCost.toFixed(2)}`;
      }

      const baseTotal = laborCost + stationsCost + stickersCost + additional;
      const markupValue = baseTotal * (margin / 100);
      const sellingPrice = baseTotal + markupValue;
      const annualValue = sellingPrice * 12;

      const elLabor = document.getElementById('calc-lbl-labor');
      const elAdd = document.getElementById('calc-lbl-additional');
      const elBase = document.getElementById('calc-lbl-base-total');
      const elMarkup = document.getElementById('calc-lbl-markup');
      const elSell = document.getElementById('calc-lbl-selling-price');
      const elAnn = document.getElementById('calc-lbl-annual-value');

      if (elLabor) elLabor.textContent = `$${laborCost.toFixed(2)}`;
      if (elAdd) elAdd.textContent = `$${additional.toFixed(2)}`;
      if (elBase) elBase.textContent = `$${baseTotal.toFixed(2)}`;
      if (elMarkup) elMarkup.textContent = `$${markupValue.toFixed(2)}`;
      if (elSell) elSell.textContent = `$${sellingPrice.toFixed(2)}`;
      if (elAnn) elAnn.textContent = `Annual: $${annualValue.toFixed(2)}`;
    };

    setTimeout(() => {
      document.querySelectorAll('.calc-trigger').forEach(inp => {
        inp.addEventListener('input', updatePricingSummary);
        inp.addEventListener('change', updatePricingSummary);
      });
      updatePricingSummary();
    }, 100);

    const saveBtn = document.getElementById('modal-save-btn');
    if (saveBtn) {
      saveBtn.onclick = () => {
        const visits = parseFloat(document.getElementById('cost-visits').value) || 0;
        const hours = parseFloat(document.getElementById('cost-hours').value) || 0;
        const additional = parseFloat(document.getElementById('cost-additional').value) || 0;
        const laborRate = parseFloat(document.getElementById('rate-labor').value) || 0;
        const margin = parseFloat(document.getElementById('rate-margin').value) || 0;
        const costLabel = document.getElementById('cost-label').value.trim();

        let laborCost = visits * hours * laborRate;
        let stationsCost = 0;
        let stickersCost = 0;
        let stations = 0;
        let stickers = 0;
        let stationRate = 0;
        let stickerRate = 0;

        if (isPest) {
          stations = parseFloat(document.getElementById('cost-stations').value) || 0;
          stickers = parseFloat(document.getElementById('cost-stickers').value) || 0;
          stationRate = parseFloat(document.getElementById('rate-station').value) || 0;
          stickerRate = parseFloat(document.getElementById('rate-sticker').value) || 0;
          stationsCost = (stations * stationRate) / 12;
          stickersCost = stickers * stickerRate;
        }

        const baseTotal = laborCost + stationsCost + stickersCost + additional;
        const sellingPrice = Math.round(baseTotal + (baseTotal * (margin / 100)));

        const structure = {
          visitsPerMonth: visits,
          hoursPerVisit: hours,
          baitStations: stations,
          stickersPerMonth: stickers,
          additionalCost: additional,
          laborRatePerHour: laborRate,
          costPerBaitStation: stationRate,
          costPerSticker: stickerRate,
          profitMargin: margin,
          label: costLabel
        };

        const updatedFields = {
          expectedValue: sellingPrice,
          costStructure: structure
        };

        window.BucklerDB.update('salesDeals', dealId, updatedFields);
        showToast('Pricing structure saved to opportunity Expected Value ✓', 'success');

        els.modalBackdrop.style.display = 'none';
        renderSalesCRM();
      };
    }
  }

  // ============================================================
  // FORMS & TEMPLATES tab MANAGEMENT
  // ============================================================
  let insSigCanvas = null;
  let insSigCtx = null;
  let isInsDrawing = false;
  let insLastX = 0;
  let insLastY = 0;
  let selectedTmplFile = null;

  function renderFormsAndTemplates() {
    _ensureFormsCollections();

    // ── SUBTAB SWITCHING ──
    const btnInspect = document.getElementById('btn-subtab-inspect');
    const btnRisk = document.getElementById('btn-subtab-risk');
    const btnTmpls = document.getElementById('btn-subtab-templates');

    const contentInspect = document.getElementById('subtab-content-inspect');
    const contentRisk = document.getElementById('subtab-content-risk');
    const contentTmpls = document.getElementById('subtab-content-templates');

    const switchSubtab = (activeBtn, activeContent) => {
      [btnInspect, btnRisk, btnTmpls].forEach(btn => {
        if (btn) {
          btn.classList.remove('active');
          btn.style.fontWeight = '600';
          btn.style.color = 'var(--text-muted)';
          btn.style.borderBottomColor = 'transparent';
        }
      });
      [contentInspect, contentRisk, contentTmpls].forEach(box => { if (box) box.style.display = 'none'; });

      if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.style.fontWeight = '700';
        activeBtn.style.color = 'var(--text-dark)';
        activeBtn.style.borderBottomColor = 'var(--primary-red)';
      }
      if (activeContent) activeContent.style.display = 'block';

      // Re-initialize signature canvas if inspect subtab is shown
      if (activeContent === contentInspect) {
        setTimeout(initInspectSignatureCanvas, 100);
      }
    };

    if (btnInspect && !btnInspect._bound) {
      btnInspect._bound = true;
      btnInspect.onclick = () => switchSubtab(btnInspect, contentInspect);
      btnRisk.onclick = () => switchSubtab(btnRisk, contentRisk);
      btnTmpls.onclick = () => switchSubtab(btnTmpls, contentTmpls);
    }

    // ── POPULATE CLIENT / PROSPECT SELECTS ──
    const clients = window.BucklerDB.get('clients') || [];
    const deals = window.BucklerDB.get('salesDeals') || [];
    const prospects = deals.filter(d => ['Prospecting', 'Qualification'].includes(d.stage));

    let optionsHTML = '<option value="" disabled selected>Select Client / Prospect...</option>';
    clients.forEach(c => {
      optionsHTML += `<option value="client:${c.id}">🏢 Client: ${c.name} (${c.clientCode || c.id})</option>`;
    });
    prospects.forEach(p => {
      optionsHTML += `<option value="prospect:${p.id}">🔍 Prospect: ${p.name} (${p.prospectName})</option>`;
    });

    const selectInspectClient = document.getElementById('ins-client');
    const selectRisk = document.getElementById('risk-client');

    if (selectInspectClient) selectInspectClient.innerHTML = optionsHTML;
    if (selectRisk) selectRisk.innerHTML = optionsHTML;

    // ── RENDER INSPECTIONS LIST ──
    renderSavedInspections();

    // ── RENDER RISK ASSESSMENTS LIST ──
    renderSavedRisks();

    // ── RENDER TEMPLATES LIBRARY ──
    renderSavedTemplates();

    // ── WIRE FORM ACTIONS ──
    setupFormsActions();
  }

  function _ensureFormsCollections() {
    const d = window.BucklerDB.getData();
    let updated = false;
    if (!Array.isArray(d.inspections)) { d.inspections = []; updated = true; }
    if (!Array.isArray(d.riskAssessments)) { d.riskAssessments = []; updated = true; }
    if (!Array.isArray(d.formTemplates)) { d.formTemplates = []; updated = true; }
    if (updated) window.BucklerDB.saveData(d);
  }

  // ── INSPECTION SIGNATURE CANVAS ──
  function initInspectSignatureCanvas() {
    const canvas = document.getElementById('ins-sig-canvas');
    if (!canvas) return;
    insSigCanvas = canvas;
    insSigCtx = canvas.getContext('2d');
    insSigCtx.strokeStyle = '#1E293B';
    insSigCtx.lineWidth = 2.5;
    insSigCtx.lineCap = 'round';

    const getMousePos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const startDraw = (e) => {
      isInsDrawing = true;
      const pos = getMousePos(e);
      insLastX = pos.x;
      insLastY = pos.y;
    };

    const draw = (e) => {
      if (!isInsDrawing) return;
      e.preventDefault();
      const pos = getMousePos(e);
      insSigCtx.beginPath();
      insSigCtx.moveTo(insLastX, insLastY);
      insSigCtx.lineTo(pos.x, pos.y);
      insSigCtx.stroke();
      insLastX = pos.x;
      insLastY = pos.y;
    };

    const stopDraw = () => { isInsDrawing = false; };

    canvas.onmousedown = startDraw;
    canvas.onmousemove = draw;
    canvas.onmouseup = stopDraw;
    canvas.onmouseleave = stopDraw;

    canvas.ontouchstart = startDraw;
    canvas.ontouchmove = draw;
    canvas.ontouchend = stopDraw;

    const btnClear = document.getElementById('btn-ins-sig-clear');
    if (btnClear) {
      btnClear.onclick = () => {
        insSigCtx.clearRect(0, 0, canvas.width, canvas.height);
      };
    }
  }

  function renderSavedInspections() {
    const list = window.BucklerDB.get('inspections') || [];
    const clients = window.BucklerDB.get('clients') || [];
    const deals = window.BucklerDB.get('salesDeals') || [];
    const tbody = document.getElementById('inspections-table-body');
    if (!tbody) return;

    const getRefName = (refId) => {
      if (!refId) return 'Unknown';
      const [type, id] = refId.split(':');
      if (type === 'client') {
        const c = clients.find(x => x.id === id);
        return c ? `🏢 ${c.name}` : `🏢 Client (#${id})`;
      } else {
        const d = deals.find(x => x.id === id);
        return d ? `🔍 Prospect: ${d.name}` : `🔍 Prospect (#${id})`;
      }
    };

    tbody.innerHTML = list.length ? list.map(item => {
      const pestBadge = item.pestActivity === 'None' ? '<span class="badge-status badge-status-conducted">None</span>'
                      : item.pestActivity === 'Low' ? '<span class="badge-status badge-status-scheduled" style="background:#FFF3C7;color:#D97706;">Low</span>'
                      : item.pestActivity === 'Medium' ? '<span class="badge-status badge-status-scheduled" style="background:#FFEDD5;color:#EA580C;">Medium</span>'
                      : '<span class="badge-status badge-status-cancelled">High</span>';

      const hygieneBadge = item.hygiene === 'Good' ? '<span class="badge-status badge-status-conducted">Good</span>'
                         : item.hygiene === 'Fair' ? '<span class="badge-status badge-status-scheduled" style="background:#FFF3C7;color:#D97706;">Fair</span>'
                         : '<span class="badge-status badge-status-cancelled">Poor</span>';

      return `
        <tr>
          <td><strong>${getRefName(item.clientRef)}</strong></td>
          <td>${item.date}</td>
          <td>${item.inspector}</td>
          <td>${pestBadge}</td>
          <td>${hygieneBadge}</td>
          <td>
            <div class="table-cell-actions">
              <button class="btn btn-secondary btn-sm dl-ins-pdf" data-id="${item.id}">Download PDF</button>
              <button class="btn btn-danger btn-sm del-ins" data-id="${item.id}">Delete</button>
            </div>
          </td>
        </tr>
      `;
    }).join('') : `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:1.5rem;">No inspection records found.</td></tr>`;

    tbody.querySelectorAll('.dl-ins-pdf').forEach(btn => {
      btn.onclick = () => downloadInspectionPDF(btn.getAttribute('data-id'));
    });

    tbody.querySelectorAll('.del-ins').forEach(btn => {
      btn.onclick = () => {
        const id = btn.getAttribute('data-id');
        if (confirm('Delete this inspection record permanently?')) {
          window.BucklerDB.delete('inspections', id);
          showToast('Inspection record deleted ✓', 'success');
          renderSavedInspections();
        }
      };
    });
  }

  function downloadInspectionPDF(id) {
    if (!window.jspdf) { showToast('jsPDF library loading...', 'warning'); return; }
    const list = window.BucklerDB.get('inspections') || [];
    const item = list.find(x => x.id === id);
    if (!item) return;

    const clients = window.BucklerDB.get('clients') || [];
    const deals = window.BucklerDB.get('salesDeals') || [];
    const getRefName = (refId) => {
      if (!refId) return 'Unknown';
      const [type, i] = refId.split(':');
      if (type === 'client') {
        const c = clients.find(x => x.id === i);
        return c ? c.name : `Client (${i})`;
      } else {
        const d = deals.find(x => x.id === i);
        return d ? d.name : `Prospect (${i})`;
      }
    };

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 35, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text('FIELD INSPECTION REPORT', 15, 22);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Buckler Pest Control operations audit framework', 15, 29);

    doc.setTextColor(51, 51, 51);

    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Inspection Metadata', 15, 48);
    doc.setDrawColor(226, 232, 240);
    doc.line(15, 51, 195, 51);

    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    let y = 58;
    const drawRow = (label, val) => {
      doc.setFont('helvetica', 'bold');
      doc.text(label + ':', 15, y);
      doc.setFont('helvetica', 'normal');
      doc.text(String(val || '-'), 55, y);
      y += 7;
    };

    drawRow('Client / Prospect', getRefName(item.clientRef));
    drawRow('Date surveyed', item.date);
    drawRow('Inspector', item.inspector);
    drawRow('Pest Activity', item.pestActivity);
    drawRow('Hygiene Standard', item.hygiene);

    y += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('Areas Inspected', 15, y);
    y += 3;
    doc.line(15, y, 195, y);
    y += 6;
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    const areas = item.areasInspected || [];
    doc.text(areas.length ? areas.join(', ') : 'None specified', 15, y);
    y += 10;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('Observations / Structural Defects', 15, y);
    y += 3;
    doc.line(15, y, 195, y);
    y += 6;
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    const obsLines = doc.splitTextToSize(item.observations || 'No observations documented.', 180);
    doc.text(obsLines, 15, y);
    y += (obsLines.length * 5) + 8;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('Recommendations & Treatment Plan', 15, y);
    y += 3;
    doc.line(15, y, 195, y);
    y += 6;
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    const recsLines = doc.splitTextToSize(item.recommendations || 'No recommendations documented.', 180);
    doc.text(recsLines, 15, y);
    y += (recsLines.length * 5) + 12;

    if (y > 230) { doc.addPage(); y = 30; }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('Verification Sign-Off', 15, y);
    y += 3;
    doc.line(15, y, 195, y);
    y += 10;

    if (item.signature && item.signature.startsWith('data:image')) {
      try {
        doc.addImage(item.signature, 'PNG', 15, y, 50, 20);
        doc.setFontSize(8.5);
        doc.setFont('helvetica', 'italic');
        doc.text('Inspector Signature', 15, y + 25);
      } catch (err) {
        console.error('Error drawing inspection signature:', err);
      }
    } else {
      doc.setFontSize(8.5);
      doc.setFont('helvetica', 'italic');
      doc.text('(Signature not captured)', 15, y + 15);
    }

    doc.save(`Inspection-Report-${getRefName(item.clientRef).replace(/\s+/g, '-')}-${item.date}.pdf`);
    showToast('Inspection PDF downloaded ✓', 'success');
  }

  function renderSavedRisks() {
    const list = window.BucklerDB.get('riskAssessments') || [];
    const clients = window.BucklerDB.get('clients') || [];
    const deals = window.BucklerDB.get('salesDeals') || [];
    const tbody = document.getElementById('risks-table-body');
    if (!tbody) return;

    const getRefName = (refId) => {
      if (!refId) return 'Unknown';
      const [type, id] = refId.split(':');
      if (type === 'client') {
        const c = clients.find(x => x.id === id);
        return c ? `🏢 ${c.name}` : `🏢 Client (#${id})`;
      } else {
        const d = deals.find(x => x.id === id);
        return d ? `🔍 Prospect: ${d.name}` : `🔍 Prospect (#${id})`;
      }
    };

    tbody.innerHTML = list.length ? list.map(item => {
      const riskBadge = item.riskLevel === 'Low' ? '<span class="badge-status badge-status-conducted">Low Risk</span>'
                      : item.riskLevel === 'Medium' ? '<span class="badge-status badge-status-scheduled" style="background:#FFF3C7;color:#D97706;">Medium Risk</span>'
                      : '<span class="badge-status badge-status-cancelled">High Risk</span>';

      return `
        <tr>
          <td><strong>${getRefName(item.clientRef)}</strong></td>
          <td>${item.date}</td>
          <td>${item.assessor}</td>
          <td>${riskBadge}</td>
          <td style="font-size:0.75rem; max-width:200px;">${(item.hazards || []).join(', ') || '-'}</td>
          <td>
            <div class="table-cell-actions">
              <button class="btn btn-secondary btn-sm dl-risk-pdf" data-id="${item.id}">Download PDF</button>
              <button class="btn btn-danger btn-sm del-risk" data-id="${item.id}">Delete</button>
            </div>
          </td>
        </tr>
      `;
    }).join('') : `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:1.5rem;">No risk assessment records found.</td></tr>`;

    tbody.querySelectorAll('.dl-risk-pdf').forEach(btn => {
      btn.onclick = () => downloadRiskPDF(btn.getAttribute('data-id'));
    });

    tbody.querySelectorAll('.del-risk').forEach(btn => {
      btn.onclick = () => {
        const id = btn.getAttribute('data-id');
        if (confirm('Delete this risk assessment permanently?')) {
          window.BucklerDB.delete('riskAssessments', id);
          showToast('Risk assessment deleted ✓', 'success');
          renderSavedRisks();
        }
      };
    });
  }

  function downloadRiskPDF(id) {
    if (!window.jspdf) { showToast('jsPDF library loading...', 'warning'); return; }
    const list = window.BucklerDB.get('riskAssessments') || [];
    const item = list.find(x => x.id === id);
    if (!item) return;

    const clients = window.BucklerDB.get('clients') || [];
    const deals = window.BucklerDB.get('salesDeals') || [];
    const getRefName = (refId) => {
      if (!refId) return 'Unknown';
      const [type, i] = refId.split(':');
      if (type === 'client') {
        const c = clients.find(x => x.id === i);
        return c ? c.name : `Client (${i})`;
      } else {
        const d = deals.find(x => x.id === i);
        return d ? d.name : `Prospect (${i})`;
      }
    };

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFillColor(15, 118, 110);
    doc.rect(0, 0, 210, 35, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text('SITE RISK ASSESSMENT (HSE)', 15, 22);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Buckler Safety Framework & Pre-Task Risk Analysis', 15, 29);

    doc.setTextColor(51, 51, 51);

    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Assessment Information', 15, 48);
    doc.setDrawColor(226, 232, 240);
    doc.line(15, 51, 195, 51);

    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    let y = 58;
    const drawRow = (label, val) => {
      doc.setFont('helvetica', 'bold');
      doc.text(label + ':', 15, y);
      doc.setFont('helvetica', 'normal');
      doc.text(String(val || '-'), 55, y);
      y += 7;
    };

    drawRow('Client / Prospect', getRefName(item.clientRef));
    drawRow('Date Checked', item.date);
    drawRow('Assessor Name', item.assessor);
    drawRow('Overall Risk Rating', item.riskLevel.toUpperCase());

    y += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('Hazards Identified on Site', 15, y);
    y += 3;
    doc.line(15, y, 195, y);
    y += 6;
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    const hazards = item.hazards || [];
    doc.text(hazards.length ? hazards.join(', ') : 'No specific hazards checked', 15, y);
    y += 10;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('Mandatory PPE Required', 15, y);
    y += 3;
    doc.line(15, y, 195, y);
    y += 6;
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    const ppe = item.ppeRequired || [];
    doc.text(ppe.length ? ppe.join(', ') : 'Standard workwear only', 15, y);
    y += 10;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('Specific Safety Controls / Preventive Actions', 15, y);
    y += 3;
    doc.line(15, y, 195, y);
    y += 6;
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    const controlsLines = doc.splitTextToSize(item.controlMeasures || 'No specific controls specified.', 180);
    doc.text(controlsLines, 15, y);

    doc.save(`Risk-Assessment-${getRefName(item.clientRef).replace(/\s+/g, '-')}-${item.date}.pdf`);
    showToast('Risk Assessment PDF downloaded ✓', 'success');
  }

  function renderSavedTemplates() {
    const list = window.BucklerDB.get('formTemplates') || [];
    const tbody = document.getElementById('templates-table-body');
    if (!tbody) return;

    tbody.innerHTML = list.length ? list.map(item => {
      return `
        <tr>
          <td><strong style="color:var(--text-dark);">${item.title}</strong></td>
          <td><span style="background:#F1F5F9; padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:700;">${item.category}</span></td>
          <td>${item.description || '-'}</td>
          <td><code>${item.filename}</code></td>
          <td>${item.dateAdded}</td>
          <td>
            <div class="table-cell-actions">
              <button class="btn btn-secondary btn-sm dl-tmpl-btn" data-id="${item.id}">Download</button>
              <button class="btn btn-danger btn-sm del-tmpl-btn" data-id="${item.id}">Delete</button>
            </div>
          </td>
        </tr>
      `;
    }).join('') : `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:1.5rem;">No templates uploaded yet. Use the uploader above to add templates.</td></tr>`;

    tbody.querySelectorAll('.dl-tmpl-btn').forEach(btn => {
      btn.onclick = () => {
        const id = btn.getAttribute('data-id');
        const tmpl = (window.BucklerDB.get('formTemplates') || []).find(x => x.id === id);
        if (!tmpl || !tmpl.fileData) return;

        const link = document.createElement('a');
        link.href = tmpl.fileData;
        link.download = tmpl.filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast(`Downloading template: ${tmpl.filename} ✓`, 'success');
      };
    });

    tbody.querySelectorAll('.del-tmpl-btn').forEach(btn => {
      btn.onclick = () => {
        const id = btn.getAttribute('data-id');
        if (confirm('Delete this template permanently?')) {
          window.BucklerDB.delete('formTemplates', id);
          showToast('Template deleted ✓', 'success');
          renderSavedTemplates();
        }
      };
    });
  }

  function setupFormsActions() {
    const btnSaveInspect = document.getElementById('btn-save-inspection');
    if (btnSaveInspect) {
      btnSaveInspect.onclick = () => {
        const form = document.getElementById('inspect-form');
        if (!form.checkValidity()) { form.reportValidity(); return; }

        const clientRef = document.getElementById('ins-client').value;
        const inspector = document.getElementById('ins-inspector').value.trim();
        const date = document.getElementById('ins-date').value;
        const pest = document.getElementById('ins-pest-activity').value;
        const hygiene = document.getElementById('ins-hygiene').value;
        const obs = document.getElementById('ins-observations').value.trim();
        const recs = document.getElementById('ins-recommendations').value.trim();

        let sigData = null;
        if (insSigCanvas) {
          const blank = document.createElement('canvas');
          blank.width = insSigCanvas.width;
          blank.height = insSigCanvas.height;
          if (insSigCanvas.toDataURL() !== blank.toDataURL()) {
            sigData = insSigCanvas.toDataURL();
          }
        }

        if (!sigData) {
          showToast('Please sign the inspection report verification.', 'error');
          return;
        }

        const checkedAreas = Array.from(document.querySelectorAll('input[name="ins-area-cb"]:checked')).map(cb => cb.value);

        const record = {
          clientRef,
          inspector,
          date,
          pestActivity: pest,
          hygiene,
          areasInspected: checkedAreas,
          observations: obs,
          recommendations: recs,
          signature: sigData
        };

        window.BucklerDB.insert('inspections', record);
        showToast('Field inspection report saved successfully ✓', 'success');

        form.reset();
        if (insSigCtx && insSigCanvas) insSigCtx.clearRect(0, 0, insSigCanvas.width, insSigCanvas.height);
        renderSavedInspections();
      };
    }

    const btnResetInspect = document.getElementById('btn-reset-inspection');
    if (btnResetInspect) {
      btnResetInspect.onclick = () => {
        document.getElementById('inspect-form').reset();
        if (insSigCtx && insSigCanvas) insSigCtx.clearRect(0, 0, insSigCanvas.width, insSigCanvas.height);
      };
    }

    const btnSaveRisk = document.getElementById('btn-save-risk');
    if (btnSaveRisk) {
      btnSaveRisk.onclick = () => {
        const form = document.getElementById('risk-form');
        if (!form.checkValidity()) { form.reportValidity(); return; }

        const clientRef = document.getElementById('risk-client').value;
        const assessor = document.getElementById('risk-assessor').value.trim();
        const date = document.getElementById('risk-date').value;
        const riskLevel = document.getElementById('risk-level').value;
        const controls = document.getElementById('risk-controls').value.trim();

        const checkedHazards = Array.from(document.querySelectorAll('input[name="risk-hazard-cb"]:checked')).map(cb => cb.value);
        const checkedPPE = Array.from(document.querySelectorAll('input[name="risk-ppe-cb"]:checked')).map(cb => cb.value);

        const record = {
          clientRef,
          assessor,
          date,
          riskLevel,
          hazards: checkedHazards,
          ppeRequired: checkedPPE,
          controlMeasures: controls
        };

        window.BucklerDB.insert('riskAssessments', record);
        showToast('Site risk assessment logged ✓', 'success');

        form.reset();
        renderSavedRisks();
      };
    }

    const btnResetRisk = document.getElementById('btn-reset-risk');
    if (btnResetRisk) {
      btnResetRisk.onclick = () => { document.getElementById('risk-form').reset(); };
    }

    const uploadZone = document.getElementById('upload-tmpl-zone');
    const fileInput = document.getElementById('tmpl-file-input');
    const filenameLabel = document.getElementById('tmpl-filename-label');

    if (uploadZone && fileInput) {
      if (!uploadZone._bound) {
        uploadZone._bound = true;
        uploadZone.onclick = () => fileInput.click();

        uploadZone.addEventListener('dragover', (e) => {
          e.preventDefault();
          uploadZone.style.borderColor = 'var(--primary-red)';
          uploadZone.style.background = '#FEF2F2';
        });

        uploadZone.addEventListener('dragleave', () => {
          uploadZone.style.borderColor = 'var(--border-color)';
          uploadZone.style.background = 'transparent';
        });

        uploadZone.addEventListener('drop', (e) => {
          e.preventDefault();
          uploadZone.style.borderColor = 'var(--border-color)';
          uploadZone.style.background = 'transparent';
          if (e.dataTransfer.files.length) {
            handleTemplateFileSelect(e.dataTransfer.files[0]);
          }
        });

        fileInput.addEventListener('change', (e) => {
          if (fileInput.files.length) {
            handleTemplateFileSelect(fileInput.files[0]);
          }
        });
      }
    }

    const btnSaveTmpl = document.getElementById('btn-save-template');
    if (btnSaveTmpl) {
      btnSaveTmpl.onclick = () => {
        const title = document.getElementById('tmpl-title').value.trim();
        const cat = document.getElementById('tmpl-category').value;
        const desc = document.getElementById('tmpl-desc').value.trim();

        if (!title) { showToast('Please enter a template title.', 'error'); return; }
        if (!selectedTmplFile) { showToast('Please select a template file to upload.', 'error'); return; }

        const reader = new FileReader();
        reader.onload = (e) => {
          const fileData = e.target.result;

          const record = {
            title,
            category: cat,
            description: desc,
            filename: selectedTmplFile.name,
            dateAdded: new Date().toISOString().split('T')[0],
            fileData: fileData
          };

          window.BucklerDB.insert('formTemplates', record);
          showToast('Template uploaded successfully to library ✓', 'success');

          document.getElementById('template-upload-form').reset();
          selectedTmplFile = null;
          if (filenameLabel) {
            filenameLabel.style.display = 'none';
            filenameLabel.textContent = '';
          }
          renderSavedTemplates();
        };
        reader.readAsDataURL(selectedTmplFile);
      };
    }
  }

  function handleTemplateFileSelect(file) {
    selectedTmplFile = file;
    const label = document.getElementById('tmpl-filename-label');
    if (label) {
      label.textContent = `Selected file: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
      label.style.display = 'block';
    }
  }

  function setupSignOutButton() {
    const btn = document.getElementById('btn-sign-out');
    if (!btn) return;
    btn.addEventListener('click', () => {
      // Show password verify for each user to let them pick who logs in next
      const users = window.BucklerDB.get('users');
      const html = `
        <div style="display:flex; flex-direction:column; gap:0.85rem;">
          <p style="font-size:0.85rem; color:var(--text-medium);">Select a user to switch to, then enter their password.</p>
          <div class="form-group">
            <label for="signout-user-select">Select User *</label>
            <select id="signout-user-select" class="form-control">
              ${users.map(u => `<option value="${u.id}">${u.name} (${u.role})</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label for="signout-password">Password *</label>
            <input type="password" id="signout-password" class="form-control" placeholder="Enter password" autofocus>
          </div>
        </div>
      `;
      showModal('Sign Out / Switch User', html, false);
      // Hide default save btn and add custom
      const saveBtn = document.getElementById('modal-save-btn');
      if (saveBtn) {
        saveBtn.style.display = 'none';
      }
      // Add a custom switch btn
      const footer = document.getElementById('modal-cancel-btn').parentElement;
      let switchBtn = document.getElementById('custom-switch-btn');
      if (!switchBtn) {
        switchBtn = document.createElement('button');
        switchBtn.id = 'custom-switch-btn';
        switchBtn.className = 'btn btn-primary';
        switchBtn.textContent = 'Switch User';
        footer.appendChild(switchBtn);
      }

      const pwdInput = document.getElementById('signout-password');
      if (pwdInput) setTimeout(() => pwdInput.focus(), 100);

      const doSwitch = () => {
        const targetUserId = document.getElementById('signout-user-select').value;
        const pwd = document.getElementById('signout-password').value;
        const user = users.find(u => u.id === targetUserId);
        if (!user) return;
        const expectedPwd = user.password || 'buckler123';
        if (pwd !== expectedPwd) {
          showToast('Incorrect password. Access denied.', 'error');
          return;
        }
        els.roleSelector.value = targetUserId;
        switchUser(targetUserId);
        els.modalBackdrop.style.display = 'none';
        const sb = document.getElementById('custom-switch-btn');
        if (sb) sb.remove();
        const sv = document.getElementById('modal-save-btn');
        if (sv) sv.style.display = '';
        showToast(`Welcome, ${user.name}!`, 'success');
      };

      switchBtn.onclick = doSwitch;
      if (pwdInput) {
        pwdInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSwitch(); });
      }
    });
  }

  // ============================================================
  // VISIT TYPE KPI CARDS (Regular / Call-back / Inspection)
  // ============================================================
  function renderVisitTypeKPIs() {
    const region = getRestrictedRegion();
    const city = getRestrictedCity();
    let schedules = window.BucklerDB.getSchedules(region);
    if (city !== 'All') schedules = schedules.filter(s => s.city === city);

    const counts = { 'Regular': 0, 'Call-back': 0, 'Inspection': 0 };
    schedules.forEach(s => {
      const t = s.visitType || 'Regular';
      if (counts[t] !== undefined) counts[t]++;
    });

    const rEl = document.getElementById('stat-visit-regular');
    const cbEl = document.getElementById('stat-visit-callback');
    const insEl = document.getElementById('stat-visit-inspection');
    if (rEl) rEl.textContent = counts['Regular'];
    if (cbEl) cbEl.textContent = counts['Call-back'];
    if (insEl) insEl.textContent = counts['Inspection'];

    // Clickable KPI cards
    const makeClickable = (cardId, type) => {
      const card = document.getElementById(cardId);
      if (!card || card._vtBound) return;
      card._vtBound = true;
      card.addEventListener('click', () => {
        const filtered = schedules.filter(s => (s.visitType || 'Regular') === type);
        const clients = window.BucklerDB.get('clients');
        const users = window.BucklerDB.get('users');
        const rows = filtered.map(s => {
          const cli = clients.find(c => c.id === s.clientId);
          const tlNames = s.teamLeaderId ? s.teamLeaderId.split(',').map(tid => {
            const u = users.find(x => x.id === tid.trim());
            return u ? u.name : tid;
          }).join(', ') : 'Unassigned';
          return [cli ? cli.name : 'Unknown', s.service, s.date, s.status, tlNames];
        });
        showDetailTableModal(`${type} Visits Detail`, ['Client', 'Service', 'Date', 'Status', 'Team Leader'], rows);
      });
    };
    makeClickable('dash-card-regular', 'Regular');
    makeClickable('dash-card-callback', 'Call-back');
    makeClickable('dash-card-inspection', 'Inspection');
  }

  // ============================================================
  // MOBILE HAMBURGER MENU
  // ============================================================
  function setupMobileMenu() {
    const menuBtn = document.getElementById('btn-mobile-menu');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (!menuBtn || !sidebar || !overlay) return;

    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
      overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
      overlay.classList.remove('active');
    });

    // Close sidebar when a nav link is clicked on mobile
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('mobile-open');
          overlay.classList.remove('active');
        }
      });
    });
  }

  init();

  // Setup new features after init
  setupSignOutButton();
  setupMobileMenu();

  // Patch renderDashboard to also update visit type KPIs
  const _origRenderDashboard = renderDashboard;
  // We can't easily patch since renderDashboard is hoisted,
  // instead, call renderVisitTypeKPIs after every dashboard render via storage event
  const dashboardObserver = setInterval(() => {
    if (state.activeTab === 'dashboard') {
      renderVisitTypeKPIs();
    }
  }, 2000);
  renderVisitTypeKPIs(); // initial call




});

