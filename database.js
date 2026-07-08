// Buckler Iraq Operations CRM - Database Engine (localStorage adapter)

const DB_KEY = 'buckler_crm_data';

// Default Seeding Data
const DEFAULT_DATA = {
  regions: ['Central', 'South', 'Kurdistan'],
  
  sectors: [
    { id: 'sec-1', name: 'Retail' },
    { id: 'sec-2', name: 'Hospitality' },
    { id: 'sec-3', name: 'Healthcare' },
    { id: 'sec-4', name: 'Corporate' },
    { id: 'sec-5', name: 'Education' },
    { id: 'sec-6', name: 'Logistics' },
    { id: 'sec-7', name: 'Oil & Gas' }
  ],

  services: [
    'pest control',
    'termite treatment',
    'weed removal',
    'animal control',
    'bird control',
    'poultry disinfection',
    'landscaping',
    'products sales'
  ],

  users: [
    { id: 'usr-gm', username: 'gm.hassan', name: 'Hassan Al-Sadi', role: 'GM', region: 'All', city: 'All', email: 'hassan.gm@buckler-iraq.com' },
    { id: 'usr-tm', username: 'tech.rami', name: 'Rami Hanna', role: 'tech manager', region: 'All', city: 'All', email: 'rami.tm@buckler-iraq.com' },
    
    // Admin Coordinators
    { id: 'usr-ac-c', username: 'admin.yasmin', name: 'Yasmin Kassim', role: 'admin coordinator', region: 'Central', city: 'Baghdad', email: 'yasmin.c@buckler-iraq.com' },
    { id: 'usr-ac-k', username: 'admin.avan', name: 'Avan Jalal', role: 'admin coordinator', region: 'Kurdistan', city: 'Erbil', email: 'avan.k@buckler-iraq.com' },
    { id: 'usr-ac-s', username: 'admin.ali', name: 'Ali Jasim', role: 'admin coordinator', region: 'South', city: 'Basra', email: 'ali.s@buckler-iraq.com' },
    
    // Tech Supervisors
    { id: 'usr-ts-c', username: 'sup.ahmed', name: 'Ahmed Khalil', role: 'tech supervisor', region: 'Central', city: 'Baghdad', email: 'ahmed.sup@buckler-iraq.com' },
    { id: 'usr-ts-k', username: 'sup.diar', name: 'Diar Slemani', role: 'tech supervisor', region: 'Kurdistan', city: 'Erbil', email: 'diar.sup@buckler-iraq.com' },
    { id: 'usr-ts-s', username: 'sup.sajjad', name: 'Sajjad Salman', role: 'tech supervisor', region: 'South', city: 'Basra', email: 'sajjad.sup@buckler-iraq.com' },
    
    // Operations Managers
    { id: 'usr-om-c', username: 'ops.mustafa', name: 'Mustafa Al-Sudani', role: 'operations manager', region: 'Central', city: 'Baghdad', email: 'mustafa.ops@buckler-iraq.com' },
    { id: 'usr-om-k', username: 'ops.zana', name: 'Zana Barzani', role: 'operations manager', region: 'Kurdistan', city: 'Erbil', email: 'zana.ops@buckler-iraq.com' },
    { id: 'usr-om-s', username: 'ops.hussein', name: 'Hussein Jawad', role: 'operations manager', region: 'South', city: 'Basra', email: 'hussein.ops@buckler-iraq.com' },
    
    // Team Leaders
    { id: 'tl-faris', username: 'tl.faris', name: 'Faris Naji', role: 'team leader', region: 'Central', city: 'Baghdad', email: 'faris.tl@buckler-iraq.com', vehicleType: 'Toyota Hilux', vehicleModel: '2024', vehiclePlateNo: 'A-10293 Baghdad' },
    { id: 'tl-omar', username: 'tl.omar', name: 'Omar Al-Tikriti', role: 'team leader', region: 'Central', city: 'Baghdad', email: 'omar.tl@buckler-iraq.com', vehicleType: '', vehicleModel: '', vehiclePlateNo: '' },
    { id: 'tl-karwan', username: 'tl.karwan', name: 'Karwan Rekani', role: 'team leader', region: 'Kurdistan', city: 'Erbil', email: 'karwan.tl@buckler-iraq.com', vehicleType: 'Nissan Frontier', vehicleModel: '2023', vehiclePlateNo: 'K-98721 Erbil' },
    { id: 'tl-sherwan', username: 'tl.sherwan', name: 'Sherwan Sorani', role: 'team leader', region: 'Kurdistan', city: 'Erbil', email: 'sherwan.tl@buckler-iraq.com', vehicleType: '', vehicleModel: '', vehiclePlateNo: '' },
    { id: 'tl-murtadha', username: 'tl.murtadha', name: 'Murtadha Jabbar', role: 'team leader', region: 'South', city: 'Basra', email: 'murtadha.tl@buckler-iraq.com', vehicleType: 'Mitsubishi L200', vehicleModel: '2022', vehiclePlateNo: 'S-45302 Basra' },
    { id: 'tl-karrar', username: 'tl.karrar', name: 'Karrar Fadel', role: 'team leader', region: 'South', city: 'Basra', email: 'karrar.tl@buckler-iraq.com', vehicleType: '', vehicleModel: '', vehiclePlateNo: '' }
  ],

  clients: [
    { id: 'cli-c1', clientCode: 'BGD-MALL', name: 'Baghdad Mall', contact: 'Zaid Mahmoud', phone: '+964 770 123 4567', email: 'info@baghdadmall.iq', region: 'Central', city: 'Baghdad', address: 'Al-Harthiya, Baghdad', lat: 33.3130, lng: 44.3640, sector: 'Retail', contractValue: 2500, contractCurrency: 'USD', monthlyVisits: 4, baitStationsCount: 12, uvMachinesCount: 4 },
    { id: 'cli-c2', clientCode: 'MAN-HOTEL', name: 'Al-Mansour Hotel', contact: 'Mona Al-Alusi', phone: '+964 780 987 6543', email: 'frontdesk@mansourhotel.iq', region: 'Central', city: 'Baghdad', address: 'Al-Mansour, Baghdad', lat: 33.3032, lng: 44.3567, sector: 'Hospitality', contractValue: 3000, contractCurrency: 'USD', monthlyVisits: 4, baitStationsCount: 15, uvMachinesCount: 6 },
    { id: 'cli-c3', clientCode: 'BBY-HOSP', name: 'Babylon Hospital', contact: 'Dr. Laith Ahmed', phone: '+964 790 333 4444', email: 'admin@babylonhosp.com', region: 'Central', city: 'Baghdad', address: 'Al-Karrada, Baghdad', lat: 33.3210, lng: 44.4250, sector: 'Healthcare', contractValue: 4000000, contractCurrency: 'IQD', monthlyVisits: 8, baitStationsCount: 30, uvMachinesCount: 10 },
    { id: 'cli-c4', clientCode: 'ASIA-HQ', name: 'Asiacell HQ Baghdad', contact: 'Hassan Hadi', phone: '+964 771 888 9999', email: 'yasir.h@asiacell.com', region: 'Central', city: 'Baghdad', address: 'Al-Jadriyah, Baghdad', lat: 33.2840, lng: 44.3980, sector: 'Corporate', contractValue: 1500, contractCurrency: 'USD', monthlyVisits: 2, baitStationsCount: 8, uvMachinesCount: 2 },
    { id: 'cli-k1', clientCode: 'FAM-ERB', name: 'Family Mall Erbil', contact: 'Sherzad Taha', phone: '+964 750 445 1122', email: 'ops@familymallerbir.com', region: 'Kurdistan', city: 'Erbil', address: '100m Road, Erbil', lat: 36.1950, lng: 43.9780, sector: 'Retail', contractValue: 2000, contractCurrency: 'USD', monthlyVisits: 4, baitStationsCount: 10, uvMachinesCount: 4 },
    { id: 'cli-k2', clientCode: 'ROT-ERB', name: 'Rotana Hotel Erbil', contact: 'Nizar Salih', phone: '+964 750 889 0011', email: 'erbil@rotana.com', region: 'Kurdistan', city: 'Erbil', address: 'Gulan Street, Erbil', lat: 36.2110, lng: 44.0040, sector: 'Hospitality', contractValue: 3500, contractCurrency: 'USD', monthlyVisits: 4, baitStationsCount: 18, uvMachinesCount: 8 },
    { id: 'cli-k3', clientCode: 'SUL-UNIV', name: 'Sulaymaniyah University', contact: 'Aram Qadir', phone: '+964 770 155 3344', email: 'estate@univsul.edu.iq', region: 'Kurdistan', city: 'Suleimaniah', address: 'Qlyasan Street, Sulaymaniyah', lat: 35.5620, lng: 45.3850, sector: 'Education', contractValue: 5000000, contractCurrency: 'IQD', monthlyVisits: 6, baitStationsCount: 25, uvMachinesCount: 5 },
    { id: 'cli-k4', clientCode: 'KOR-TEL', name: 'Korek Telecom HQ', contact: 'Darya Karim', phone: '+964 750 111 2222', email: 'hq@korek.com', region: 'Kurdistan', city: 'Erbil', address: 'Erbil-Massif Road', lat: 36.2650, lng: 44.1120, sector: 'Corporate', contractValue: 1800, contractCurrency: 'USD', monthlyVisits: 2, baitStationsCount: 8, uvMachinesCount: 2 },
    { id: 'cli-s1', clientCode: 'BGT-TERM', name: 'Basra Gateway Terminal', contact: 'Capt. Jaafar Radi', phone: '+964 781 222 3344', email: 'j.radi@bgt.com.iq', region: 'South', city: 'Basra', address: 'Umm Qasr Port, Basra', lat: 30.0380, lng: 47.9350, sector: 'Logistics', contractValue: 5000, contractCurrency: 'USD', monthlyVisits: 4, baitStationsCount: 20, uvMachinesCount: 10 },
    { id: 'cli-s2', clientCode: 'SHER-BAS', name: 'Al-Basra Sheraton', contact: 'Karim Mansour', phone: '+964 782 555 6677', email: 'basra.sheraton@sheraton.com', region: 'South', city: 'Basra', address: 'Shatt Al-Arab Corniche, Basra', lat: 30.5220, lng: 47.8480, sector: 'Hospitality', contractValue: 3200, contractCurrency: 'USD', monthlyVisits: 4, baitStationsCount: 16, uvMachinesCount: 6 },
    { id: 'cli-s3', clientCode: 'RUM-CLN', name: 'Rumaila Oil Field Clinic', contact: 'Dr. Amjad Ali', phone: '+964 780 111 9988', email: 'clinic@rumaila-ops.com', region: 'South', city: 'Roumailah', address: 'Rumaila North Camp, Basra', lat: 30.3450, lng: 47.4200, sector: 'Healthcare', contractValue: 1200, contractCurrency: 'USD', monthlyVisits: 2, baitStationsCount: 6, uvMachinesCount: 2 },
    { id: 'cli-s4', clientCode: 'MAJ-CAMP', name: 'Majnoon Camp Services', contact: 'Mazin Salim', phone: '+964 783 777 8888', email: 'mazin.s@majnoon-field.com', region: 'South', city: 'Basra', address: 'Majnoon Oil Field, Basra', lat: 31.0500, lng: 47.3800, sector: 'Oil & Gas', contractValue: 4500, contractCurrency: 'USD', monthlyVisits: 4, baitStationsCount: 22, uvMachinesCount: 8 }
  ],

  items: [
    { id: 'itm-1', itemCode: 'PERM-10', name: 'Permethrin 10% EC', unit: 'Liters', stock: 120, category: 'Pesticides' },
    { id: 'itm-2', itemCode: 'TERM-HE', name: 'Termidor HE Termiticide', unit: 'Liters', stock: 85, category: 'Pesticides' },
    { id: 'itm-3', itemCode: 'GLY-480', name: 'Glyphosate 480 Herbicide', unit: 'Liters', stock: 150, category: 'Pesticides' },
    { id: 'itm-4', itemCode: 'FLOC-B', name: 'Flocoumafen Rodent Bait Blocks', unit: 'Packs (500g)', stock: 200, category: 'Bait Stations' },
    { id: 'itm-5', itemCode: 'VIRK-S', name: 'Virkon S Disinfectant', unit: 'Kg', stock: 90, category: 'Others' },
    { id: 'itm-6', itemCode: 'SS-SPIKES', name: 'Stainless Steel Bird Spikes', unit: 'Meters', stock: 500, category: 'Others' },
    { id: 'itm-7', itemCode: 'NPK-FERT', name: 'Organic NPK Fertilizer', unit: 'Bags (25kg)', stock: 300, category: 'Others' },
    { id: 'itm-8', itemCode: 'NOZ-B2', name: 'Professional Sprayer Nozzle B2', unit: 'Units', stock: 60, category: 'Others' },
    { id: 'itm-9', itemCode: 'PEST-DEF', name: 'Buckler Pest Defense Spray', unit: 'Bottles (1L)', stock: 400, category: 'Pesticides' },
    { id: 'itm-10', itemCode: 'BROM-STN', name: 'Bromadiolone Bait Stations', unit: 'Units', stock: 180, category: 'Bait Stations' },
    { id: 'itm-uv-1', itemCode: 'UV-TRAP-A', name: 'UV Insect Trap Type A', unit: 'Units', stock: 35, category: 'UV Machines' },
    { id: 'itm-uv-2', itemCode: 'UV-TRAP-B', name: 'UV Insect Trap Type B', unit: 'Units', stock: 20, category: 'UV Machines' },
    { id: 'itm-uv-3', itemCode: 'UV-TRAP-C', name: 'UV Insect Trap Type C', unit: 'Units', stock: 15, category: 'UV Machines' }
  ],

  schedules: [
    { id: 'sch-1', clientId: 'cli-c1', service: 'pest control', date: '2026-06-01', time: '09:00', teamLeaderId: 'tl-faris', region: 'Central', city: 'Baghdad', status: 'Conducted', assignedBy: 'admin.yasmin' },
    { id: 'sch-2', clientId: 'cli-c2', service: 'termite treatment', date: '2026-06-02', time: '11:30', teamLeaderId: 'tl-omar', region: 'Central', city: 'Baghdad', status: 'Conducted', assignedBy: 'admin.yasmin' },
    { id: 'sch-3', clientId: 'cli-k1', service: 'pest control', date: '2026-06-03', time: '08:30', teamLeaderId: 'tl-karwan', region: 'Kurdistan', city: 'Erbil', status: 'Conducted', assignedBy: 'admin.avan' },
    { id: 'sch-4', clientId: 'cli-c3', service: 'poultry disinfection', date: '2026-06-04', time: '10:00', teamLeaderId: 'tl-faris', region: 'Central', city: 'Baghdad', status: 'Scheduled', assignedBy: 'admin.yasmin' },
    { id: 'sch-5', clientId: 'cli-k2', service: 'bird control', date: '2026-06-04', time: '14:00', teamLeaderId: 'tl-sherwan', region: 'Kurdistan', city: 'Erbil', status: 'Scheduled', assignedBy: 'admin.avan' },
    { id: 'sch-6', clientId: 'cli-s1', service: 'weed removal', date: '2026-06-04', time: '09:00', teamLeaderId: 'tl-murtadha', region: 'South', city: 'Basra', status: 'Scheduled', assignedBy: 'admin.ali' },
    { id: 'sch-7', clientId: 'cli-s2', service: 'products sales', date: '2026-06-04', time: '13:00', teamLeaderId: 'tl-karrar', region: 'South', city: 'Basra', status: 'Scheduled', assignedBy: 'admin.ali' },
    { id: 'sch-8', clientId: 'cli-c4', service: 'landscaping', date: '2026-06-05', time: '08:00', teamLeaderId: 'tl-omar', region: 'Central', city: 'Baghdad', status: 'Scheduled', assignedBy: 'admin.yasmin' },
    { id: 'sch-9', clientId: 'cli-k3', service: 'pest control', date: '2026-06-06', time: '10:30', teamLeaderId: 'tl-karwan', region: 'Kurdistan', city: 'Suleimaniah', status: 'Scheduled', assignedBy: 'admin.avan' },
    { id: 'sch-10', clientId: 'cli-s3', service: 'animal control', date: '2026-06-07', time: '15:00', teamLeaderId: 'tl-murtadha', region: 'South', city: 'Roumailah', status: 'Scheduled', assignedBy: 'admin.ali' }
  ],

  operationLogs: [
    {
      id: 'log-1',
      scheduleId: 'sch-1',
      clientId: 'cli-c1',
      timeIn: '09:00',
      timeOut: '11:30',
      timeSpent: '2.50 hours',
      itemsConsumed: [{ itemId: 'itm-1', qty: 4 }, { itemId: 'itm-4', qty: 10 }, { itemId: 'itm-uv-1', qty: 2 }],
      comments: 'Sprayed the food court perimeter and external garbage bins. Installed 2 UV Fly Traps on the back walls.',
      clientComments: 'Very satisfied with the quick response and detailed inspection.',
      clientSignature: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40"><path d="M10,25 Q30,5 50,25 T90,25" fill="none" stroke="red" stroke-width="2"/></svg>',
      geoLocation: '33.3130, 44.3640',
      dateConducted: '2026-06-01',
      pictures: [],
      baitStationsAudit: [
        { number: 1, location: "External Wall 1", activity: "No Activity", comments: "Clear" },
        { number: 2, location: "External Wall 2", activity: "Eaten", comments: "Replaced block" },
        { number: 3, location: "External Wall 3", activity: "No Activity", comments: "Clear" },
        { number: 4, location: "External Wall 4", activity: "Captured & Replaced", comments: "Mice found" },
        { number: 5, location: "External Wall 5", activity: "No Activity", comments: "Clear" },
        { number: 6, location: "External Wall 6", activity: "No Activity", comments: "Clear" },
        { number: 7, location: "External Wall 7", activity: "Eaten", comments: "Replaced block" },
        { number: 8, location: "External Wall 8", activity: "No Activity", comments: "Clear" },
        { number: 9, location: "External Wall 9", activity: "No Activity", comments: "Clear" },
        { number: 10, location: "External Wall 10", activity: "No Activity", comments: "Clear" },
        { number: 11, location: "External Wall 11", activity: "No Activity", comments: "Clear" },
        { number: 12, location: "External Wall 12", activity: "Captured & Replaced", comments: "Mice found" }
      ],
      uvMachinesAudit: [
        { number: 1, location: "Zone Area 1", catchRate: 15 },
        { number: 2, location: "Zone Area 2", catchRate: 25 },
        { number: 3, location: "Zone Area 3", catchRate: 8 },
        { number: 4, location: "Zone Area 4", catchRate: 30 }
      ],
      baitStickersReplaced: 4,
      uvStickersReplaced: 2
    },
    {
      id: 'log-2',
      scheduleId: 'sch-2',
      clientId: 'cli-c2',
      timeIn: '11:30',
      timeOut: '15:30',
      timeSpent: '4.00 hours',
      itemsConsumed: [{ itemId: 'itm-2', qty: 8 }],
      comments: 'Subterranean termite pre-treatment done in basement expansion joint. Injected Termidor barrier.',
      clientComments: 'Works done according to SOW. Supervisor was very professional.',
      clientSignature: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40"><path d="M15,10 C20,35 40,35 45,15 S60,5 85,30" fill="none" stroke="red" stroke-width="2"/></svg>',
      geoLocation: '33.3032, 44.3567',
      dateConducted: '2026-06-02',
      pictures: []
    },
    {
      id: 'log-3',
      scheduleId: 'sch-3',
      clientId: 'cli-k1',
      timeIn: '08:30',
      timeOut: '10:30',
      timeSpent: '2.00 hours',
      itemsConsumed: [{ itemId: 'itm-1', qty: 3 }, { itemId: 'itm-6', qty: 15 }, { itemId: 'itm-uv-2', qty: 1 }],
      comments: 'Cleaned roof gutters and installed bird spikes on main entry canopy. Installed 1 UV Trap Type B in the warehouse corridor.',
      clientComments: 'Good work, hope the spikes will keep the pigeons away.',
      clientSignature: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40"><path d="M10,20 L30,30 L50,10 L70,30 L90,20" fill="none" stroke="red" stroke-width="2"/></svg>',
      geoLocation: '36.1950, 43.9780',
      dateConducted: '2026-06-03',
      pictures: [],
      baitStationsAudit: [
        { number: 1, location: "External Wall 1", activity: "No Activity", comments: "Clear" },
        { number: 2, location: "External Wall 2", activity: "No Activity", comments: "Clear" },
        { number: 3, location: "External Wall 3", activity: "Eaten", comments: "Replaced block" },
        { number: 4, location: "External Wall 4", activity: "No Activity", comments: "Clear" },
        { number: 5, location: "External Wall 5", activity: "No Activity", comments: "Clear" },
        { number: 6, location: "External Wall 6", activity: "Captured & Replaced", comments: "Mice found" },
        { number: 7, location: "External Wall 7", activity: "No Activity", comments: "Clear" },
        { number: 8, location: "External Wall 8", activity: "No Activity", comments: "Clear" },
        { number: 9, location: "External Wall 9", activity: "No Activity", comments: "Clear" },
        { number: 10, location: "External Wall 10", activity: "No Activity", comments: "Clear" }
      ],
      uvMachinesAudit: [
        { number: 1, location: "Zone Area 1", catchRate: 12 },
        { number: 2, location: "Zone Area 2", catchRate: 16 },
        { number: 3, location: "Zone Area 3", catchRate: 5 },
        { number: 4, location: "Zone Area 4", catchRate: 20 }
      ],
      baitStickersReplaced: 2,
      uvStickersReplaced: 1
    }
  ],

  commuteLog: [
    { id: 'com-1', scheduleId: 'sch-1', region: 'Central', teamLeaderId: 'tl-faris', startLocation: 'Buckler Central Hub', endLocation: 'Al-Harthiya, Baghdad', distanceKm: 12.5, durationMins: 35, fuelUsedLiters: 1.8, status: 'Completed' },
    { id: 'com-2', scheduleId: 'sch-2', region: 'Central', teamLeaderId: 'tl-omar', startLocation: 'Buckler Central Hub', endLocation: 'Al-Mansour, Baghdad', distanceKm: 8.2, durationMins: 22, fuelUsedLiters: 1.2, status: 'Completed' },
    { id: 'com-3', scheduleId: 'sch-3', region: 'Kurdistan', teamLeaderId: 'tl-karwan', startLocation: 'Buckler Kurdistan Hub', endLocation: '100m Road, Erbil', distanceKm: 15.0, durationMins: 28, fuelUsedLiters: 2.1, status: 'Completed' },
    { id: 'com-4', scheduleId: 'sch-4', region: 'Central', teamLeaderId: 'tl-faris', startLocation: 'Buckler Central Hub', endLocation: 'Al-Karrada, Baghdad', distanceKm: 6.4, durationMins: 18, fuelUsedLiters: 0.9, status: 'Dispatched' },
    { id: 'com-5', scheduleId: 'sch-5', region: 'Kurdistan', teamLeaderId: 'tl-sherwan', startLocation: 'Buckler Kurdistan Hub', endLocation: 'Gulan Street, Erbil', distanceKm: 9.1, durationMins: 20, fuelUsedLiters: 1.3, status: 'Scheduled' },
    { id: 'com-6', scheduleId: 'sch-6', region: 'South', teamLeaderId: 'tl-murtadha', startLocation: 'Buckler South Hub', endLocation: 'Umm Qasr Port, Basra', distanceKm: 58.0, durationMins: 65, fuelUsedLiters: 7.5, status: 'Dispatched' },
    { id: 'com-7', scheduleId: 'sch-7', region: 'South', teamLeaderId: 'tl-karrar', startLocation: 'Buckler South Hub', endLocation: 'Shatt Corniche, Basra', distanceKm: 4.5, durationMins: 12, fuelUsedLiters: 0.6, status: 'Scheduled' }
  ],

  // Seeding Complaints Tracking Table
  complaints: [
    { id: 'cmp-1', clientId: 'cli-c1', complainantName: 'Zaid Mahmoud', phone: '+964 770 123 4567', details: 'Flies activity noted in food court zone again. Urgent callback needed.', severity: 'High', status: 'Pending', dateSubmitted: '2026-06-03', region: 'Central', city: 'Baghdad', assignedStaffId: 'usr-ts-c', resolutionDetails: '' },
    { id: 'cmp-2', clientId: 'cli-k1', complainantName: 'Sherzad Taha', phone: '+964 750 445 1122', details: 'Minor bird nests observed on structural girders post bird-spikes installation.', severity: 'Medium', status: 'In Progress', dateSubmitted: '2026-06-04', region: 'Kurdistan', city: 'Erbil', assignedStaffId: 'usr-ts-k', resolutionDetails: 'Inspecting spikes tomorrow.' },
    { id: 'cmp-3', clientId: 'cli-s2', complainantName: 'Karim Mansour', phone: '+964 782 555 6677', details: 'Requested immediate delivery of NPK fertilizer. Slight delay.', severity: 'Low', status: 'Resolved', dateSubmitted: '2026-06-02', region: 'South', city: 'Basra', assignedStaffId: 'usr-om-s', resolutionDetails: 'Fertilizers delivered on morning of June 3rd.' }
  ],

  // Seeding System Notifications
  notifications: [
    { id: 'ntf-1', userId: 'usr-gm', title: 'New Complaint Registered', message: 'Zaid Mahmoud (Baghdad Mall) has filed a High severity complaint.', date: '2026-06-03', read: false },
    { id: 'ntf-2', userId: 'tl-faris', title: 'New Job Assigned', message: 'You have been assigned to conduct poultry disinfection at Babylon Hospital on June 4.', date: '2026-06-04', read: false },
    { id: 'ntf-3', userId: 'usr-ac-c', title: 'Operation Log Submitted', message: 'Faris Naji completed and logged the visit for Baghdad Mall.', date: '2026-06-01', read: true }
  ],

  // Seeding Chats/Messages
  messages: [
    { id: 'msg-1', senderId: 'usr-ac-c', receiverId: 'usr-gm', text: 'Good morning Hassan, the Central region schedules for today are fully allocated.', timestamp: '2026-06-04T08:30:00.000Z' },
    { id: 'msg-2', senderId: 'usr-gm', receiverId: 'usr-ac-c', text: 'Thank you Yasmin. Please follow up on the Baghdad Mall complaint.', timestamp: '2026-06-04T08:45:00.000Z' },
    { id: 'msg-3', senderId: 'usr-ac-c', receiverId: 'chan-central', text: 'Central Ops Update: Today we have 2 operations scheduled.', timestamp: '2026-06-04T09:00:00.000Z' }
  ],

  attendanceLog: [
    { id: 'att-1', teamLeaderId: 'tl-faris', date: '2026-06-01', checkIn: '08:00', checkOut: '17:30' },
    { id: 'att-2', teamLeaderId: 'tl-omar', date: '2026-06-01', checkIn: '08:30', checkOut: '16:45' },
    { id: 'att-3', teamLeaderId: 'tl-karwan', date: '2026-06-01', checkIn: '07:45', checkOut: '17:00' },
    { id: 'att-4', teamLeaderId: 'tl-faris', date: '2026-06-02', checkIn: '08:15', checkOut: '18:00' },
    { id: 'att-5', teamLeaderId: 'tl-karwan', date: '2026-06-02', checkIn: '07:50', checkOut: '17:10' },
    { id: 'att-6', teamLeaderId: 'tl-murtadha', date: '2026-06-02', checkIn: '08:00', checkOut: '17:30' },
    { id: 'att-7', teamLeaderId: 'tl-omar', date: '2026-06-03', checkIn: '08:05', checkOut: '17:00' },
    { id: 'att-8', teamLeaderId: 'tl-karwan', date: '2026-06-03', checkIn: '07:55', checkOut: '17:45' },
    { id: 'att-9', teamLeaderId: 'tl-karrar', date: '2026-06-03', checkIn: '08:10', checkOut: '17:20' }
  ],

  vehicles: [
    { id: 'veh-1', type: 'Toyota Hilux', model: '2024', plateNo: 'A-10293 Baghdad', region: 'Central', teamLeaderId: 'tl-faris' },
    { id: 'veh-2', type: 'Nissan Frontier', model: '2023', plateNo: 'K-98721 Erbil', region: 'Kurdistan', teamLeaderId: 'tl-karwan' },
    { id: 'veh-3', type: 'Mitsubishi L200', model: '2022', plateNo: 'S-45302 Basra', region: 'South', teamLeaderId: 'tl-murtadha' }
  ]
};

// Database class
const ENTITY_TO_TABLE = {
  users: 'users',
  clients: 'clients',
  items: 'items',
  schedules: 'schedules',
  operationLogs: 'operation_logs',
  commuteLog: 'commute_logs',
  complaints: 'complaints',
  notifications: 'notifications',
  messages: 'messages',
  attendanceLog: 'attendance_logs',
  vehicles: 'vehicles',
  sectors: 'sectors',
  sanitationNotes: 'sanitation_notes'
};

// ============================================================
// Supabase Cloud Database Configuration
// All users connecting via the website will automatically
// use this shared cloud database — no manual setup needed.
// ============================================================
const SUPABASE_URL = 'https://fwbcqbahxgvafxgumjfd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3YmNxYmFoeGd2YWZ4Z3VtamZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0OTYyMzEsImV4cCI6MjA5OTA3MjIzMX0.tdFmfXyDObrgcOORmQ89LYhEoUVvyTrXa6R_PBhKFmg';

class Database {
  constructor() {
    this.importSharedState();
    this.init();

    this.isSupabase = false;
    this.supabase = null;
    this.realtimeChannel = null;
    try {
      if (window.supabase && SUPABASE_URL && SUPABASE_ANON_KEY) {
        this.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        this.isSupabase = true;
        console.log('Auto-connected to Supabase cloud database.');

        this.fetchSupabaseData();
        this.setupRealtimeSubscriptions();
      }
    } catch (e) {
      console.error('Error initializing Supabase client:', e);
    }
  }

  async connectSupabase(url, key) {
    if (!window.supabase) {
      throw new Error('Supabase client SDK library not loaded.');
    }
    const client = window.supabase.createClient(url, key);
    const { error } = await client.from('users').select('*').limit(1);
    if (error) {
      throw new Error('Connection failed: ' + error.message);
    }
    
    localStorage.setItem('buckler_supabase_config', JSON.stringify({ url, key }));
    this.supabase = client;
    this.isSupabase = true;
    
    await this.fetchSupabaseData();
    this.setupRealtimeSubscriptions();
    return true;
  }

  disconnectSupabase() {
    localStorage.removeItem('buckler_supabase_config');
    if (this.realtimeChannel) {
      this.realtimeChannel.unsubscribe();
    }
    this.isSupabase = false;
    this.supabase = null;
    this.reset();
  }

  async fetchSupabaseData() {
    if (!this.isSupabase) return;
    try {
      console.log('Fetching database updates from Supabase...');
      const localData = this.getData();
      
      const promises = Object.entries(ENTITY_TO_TABLE).map(async ([entity, table]) => {
        const { data, error } = await this.supabase.from(table).select('*');
        if (error) {
          throw error;
        }
        if (data) {
          if (entity === 'sanitationNotes') {
            localData.sanitationNotes = {};
            data.forEach(row => {
              if (row.data) {
                localData.sanitationNotes[row.id] = row.data.notes || '';
              }
            });
          } else {
            localData[entity] = data.map(row => row.data);
          }
        }
      });
      
      await Promise.all(promises);
      this.saveData(localData);
      console.log('Database synced from Supabase successfully.');

      // On first sync for this browser, reload the page so the UI
      // renders fresh cloud data instead of old local data.
      const syncKey = 'buckler_supabase_synced';
      if (!sessionStorage.getItem(syncKey)) {
        sessionStorage.setItem(syncKey, '1');
        console.log('First Supabase sync detected — reloading page to apply cloud data...');
        window.location.reload();
        return;
      }

      window.dispatchEvent(new Event('storage'));
    } catch (e) {
      console.error('Failed to fetch data from Supabase:', e);
    }
  }

  async pushLocalDataToSupabase() {
    if (!this.isSupabase) throw new Error('Supabase is not connected.');
    console.log('Pushing local data to Supabase...');
    const localData = this.getData();
    
    for (const [entity, table] of Object.entries(ENTITY_TO_TABLE)) {
      if (entity === 'sanitationNotes') {
        const notesObj = localData.sanitationNotes || {};
        for (const [key, notes] of Object.entries(notesObj)) {
          const { error } = await this.supabase.from('sanitation_notes').upsert({ id: key, data: { notes } });
          if (error) {
            console.error(`Error uploading sanitation note ${key} to Supabase:`, error);
          }
        }
      } else {
        const records = localData[entity] || [];
        if (records.length === 0) continue;
        
        for (const rec of records) {
          const { error } = await this.supabase.from(table).upsert({ id: rec.id, data: rec });
          if (error) {
            console.error(`Error uploading record ${rec.id} to table ${table}:`, error);
          }
        }
      }
    }
    console.log('Successfully pushed local data to Supabase.');
  }

  setupRealtimeSubscriptions() {
    if (!this.isSupabase) return;
    
    this.realtimeChannel = this.supabase.channel('buckler-realtime-changes')
      .on('postgres_changes', { event: '*', schema: 'public' }, (payload) => {
        this.handleServerChange(payload);
      })
      .subscribe((status) => {
        console.log('Supabase Realtime subscription status:', status);
      });
  }

  handleServerChange(payload) {
    const entity = Object.keys(ENTITY_TO_TABLE).find(k => ENTITY_TO_TABLE[k] === payload.table);
    if (!entity) return;

    const localData = this.getData();
    if (!localData[entity] && entity !== 'sanitationNotes') localData[entity] = [];

    const recordId = payload.new ? payload.new.id : (payload.old ? payload.old.id : null);
    if (!recordId) return;

    const recordData = payload.new ? payload.new.data : null;

    if (entity === 'sanitationNotes') {
      if (!localData.sanitationNotes) localData.sanitationNotes = {};
      if (payload.eventType === 'DELETE') {
        delete localData.sanitationNotes[recordId];
      } else if (recordData) {
        localData.sanitationNotes[recordId] = recordData.notes || '';
      }
    } else {
      if (payload.eventType === 'INSERT') {
        const exists = localData[entity].some(item => String(item.id) === String(recordId));
        if (!exists && recordData) {
          localData[entity].push(recordData);
        }
      } else if (payload.eventType === 'UPDATE') {
        const idx = localData[entity].findIndex(item => String(item.id) === String(recordId));
        if (idx !== -1 && recordData) {
          localData[entity][idx] = recordData;
        } else if (recordData) {
          localData[entity].push(recordData);
        }
      } else if (payload.eventType === 'DELETE') {
        localData[entity] = localData[entity].filter(item => String(item.id) !== String(recordId));
      }
    }

    this.saveData(localData);
    window.dispatchEvent(new Event('storage'));
  }

  async importSharedState() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // 1. Check for Base64 offline DB state parameter
    const sharedDbData = urlParams.get('db');
    if (sharedDbData) {
      try {
        const decodedJSON = decodeURIComponent(escape(atob(sharedDbData)));
        const parsed = JSON.parse(decodedJSON);
        if (parsed && typeof parsed === 'object') {
          localStorage.setItem(DB_KEY, decodedJSON);
          console.log('Imported shared Buckler CRM database state.');
          const cleanUrl = window.location.pathname;
          window.history.replaceState({}, document.title, cleanUrl);
        }
      } catch (e) {
        console.error('Error importing shared database state:', e);
      }
    }

    // 2. Check for Cloud share ID parameter
    const shareId = urlParams.get('share');
    if (shareId) {
      // Create and attach loading overlay
      const overlay = document.createElement('div');
      overlay.id = 'share-loading-overlay';
      overlay.style = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(15,23,42,0.95); z-index:99999; display:flex; flex-direction:column; align-items:center; justify-content:center; color:white; font-family:sans-serif; gap:1.2rem;';
      overlay.innerHTML = `
        <div style="width:50px; height:50px; border:5px solid rgba(255,255,255,0.1); border-top-color:#3B82F6; border-radius:50%; animation:spinShare 1s linear infinite;"></div>
        <p style="font-weight:700; font-size:1.15rem; letter-spacing:0.05em; margin:0;">SYNCING BUCKLER CRM STATE...</p>
        <p style="font-size:0.85rem; color:#94A3B8; margin:0;">Retrieving cloud database state vault...</p>
        <style>
          @keyframes spinShare { to { transform: rotate(360deg); } }
        </style>
      `;
      document.body.appendChild(overlay);

      try {
        const res = await fetch(`https://kvdb.io/FEbmm6WytJQ3UyTmUAV16B/${shareId}`);
        if (!res.ok) throw new Error('Shared vault not found or link expired');
        const text = await res.text();
        const parsed = JSON.parse(text);
        if (parsed && typeof parsed === 'object') {
          localStorage.setItem(DB_KEY, text);
          console.log('Successfully imported cloud-shared CRM state.');
          
          // Strip parameters and reload page to initialize application with the new database
          const cleanUrl = window.location.pathname;
          window.history.replaceState({}, document.title, cleanUrl);
          window.location.reload();
        } else {
          throw new Error('Database payload format invalid');
        }
      } catch (e) {
        console.error('Failed to import cloud shared state:', e);
        overlay.innerHTML = `
          <div style="background:#1E293B; border:1px solid #334155; border-radius:12px; padding:2rem; text-align:center; max-width:400px; width:90%; box-shadow:0 10px 25px rgba(0,0,0,0.5);">
            <div style="color:#EF4444; font-size:2rem; margin-bottom:0.5rem;">⚠️</div>
            <p style="color:#EF4444; font-weight:700; font-size:1.1rem; margin-bottom:0.5rem;">Import Synced State Failed</p>
            <p style="font-size:0.85rem; color:#94A3B8; line-height:1.5; margin-bottom:1.5rem;">The share link may be incorrect, expired, or the service is temporarily unreachable: <br><strong>${e.message}</strong></p>
            <button onclick="document.getElementById('share-loading-overlay').remove();" style="background:#3B82F6; color:white; border:none; padding:0.6rem 1.5rem; border-radius:6px; cursor:pointer; font-weight:700; font-size:0.85rem; transition: background 0.2s;" onmouseover="this.style.background='#2563EB'" onmouseout="this.style.background='#3B82F6'">Continue with Local Data</button>
          </div>
        `;
      }
    }
  }

  init() {
    if (!localStorage.getItem(DB_KEY)) {
      localStorage.setItem(DB_KEY, JSON.stringify(DEFAULT_DATA));
    }
    try {
      const data = JSON.parse(localStorage.getItem(DB_KEY));
      let updated = false;
      if (!data.sectors) {
        data.sectors = [
          { id: 'sec-1', name: 'Retail' },
          { id: 'sec-2', name: 'Hospitality' },
          { id: 'sec-3', name: 'Healthcare' },
          { id: 'sec-4', name: 'Corporate' },
          { id: 'sec-5', name: 'Education' },
          { id: 'sec-6', name: 'Logistics' },
          { id: 'sec-7', name: 'Oil & Gas' }
        ];
        updated = true;
      }
      if (data.clients) {
        const defaultSectorsMap = {
          'cli-c1': 'Retail',
          'cli-c2': 'Hospitality',
          'cli-c3': 'Healthcare',
          'cli-c4': 'Corporate',
          'cli-k1': 'Retail',
          'cli-k2': 'Hospitality',
          'cli-k3': 'Education',
          'cli-k4': 'Corporate',
          'cli-s1': 'Logistics',
          'cli-s2': 'Hospitality',
          'cli-s3': 'Healthcare',
          'cli-s4': 'Oil & Gas'
        };
        data.clients.forEach(c => {
          if (!c.sector) {
            c.sector = defaultSectorsMap[c.id] || 'Retail';
            updated = true;
          }
          if (c.contractValue === undefined || c.contractValue === null) {
            c.contractValue = c.id === 'cli-c3' ? 4000000 : c.id === 'cli-k3' ? 5000000 : 2500;
            c.contractCurrency = (c.id === 'cli-c3' || c.id === 'cli-k3') ? 'IQD' : 'USD';
            c.monthlyVisits = c.id === 'cli-c3' ? 8 : c.id === 'cli-k3' ? 6 : (c.id === 'cli-c4' || c.id === 'cli-k4' || c.id === 'cli-s3') ? 2 : 4;
            c.baitStationsCount = c.id === 'cli-c1' ? 12 : c.id === 'cli-c2' ? 15 : c.id === 'cli-c3' ? 30 : c.id === 'cli-c4' ? 8 : c.id === 'cli-k1' ? 10 : c.id === 'cli-k2' ? 18 : c.id === 'cli-k3' ? 25 : c.id === 'cli-k4' ? 8 : c.id === 'cli-s1' ? 20 : c.id === 'cli-s2' ? 16 : c.id === 'cli-s3' ? 6 : 22;
            c.uvMachinesCount = c.id === 'cli-c1' ? 4 : c.id === 'cli-c2' ? 6 : c.id === 'cli-c3' ? 10 : c.id === 'cli-c4' ? 2 : c.id === 'cli-k1' ? 4 : c.id === 'cli-k2' ? 8 : c.id === 'cli-k3' ? 5 : c.id === 'cli-k4' ? 2 : c.id === 'cli-s1' ? 10 : c.id === 'cli-s2' ? 6 : c.id === 'cli-s3' ? 2 : 8;
            updated = true;
          }
        });
      }
      if (data.items) {
        data.items.forEach(item => {
          if (!item.category) {
            if (['itm-1', 'itm-2', 'itm-3', 'itm-9'].includes(item.id)) {
              item.category = 'Pesticides';
            } else if (['itm-4', 'itm-10'].includes(item.id)) {
              item.category = 'Bait Stations';
            } else if (item.id.includes('uv')) {
              item.category = 'UV Machines';
            } else {
              item.category = 'Others';
            }
            updated = true;
          }
        });
      }
      if (!data.sanitationNotes) {
        data.sanitationNotes = {};
        updated = true;
      }

      // Migrate Users: ensure password and permission configurations
      if (data.users) {
        const getDefaultPermissions = (role) => {
          const r = String(role).toLowerCase();
          if (r === 'gm') {
            return {
              dashboard: 'edit', schedules: 'edit', clients: 'edit', items: 'edit',
              complaints: 'edit', messages: 'edit', 'uv-sales': 'edit',
              reports: 'edit', users: 'edit'
            };
          } else if (r === 'tech manager' || r === 'operations manager' || r === 'admin coordinator') {
            return {
              dashboard: 'see', schedules: 'edit', clients: 'edit', items: 'edit',
              complaints: 'edit', messages: 'edit', 'uv-sales': 'see',
              reports: 'see', users: 'see'
            };
          } else if (r === 'tech supervisor') {
            return {
              dashboard: 'see', schedules: 'see', clients: 'see', items: 'see',
              complaints: 'edit', messages: 'edit', 'uv-sales': 'see',
              reports: 'see', users: 'none'
            };
          } else { // team leader
            return {
              dashboard: 'none', schedules: 'edit', clients: 'none', items: 'none',
              complaints: 'see', messages: 'edit', 'uv-sales': 'none',
              reports: 'none', users: 'none'
            };
          }
        };

        data.users.forEach(u => {
          if (!u.password) {
            u.password = 'buckler123';
            updated = true;
          }
          if (u.permissions) {
            if (u.permissions['sanitation-report'] !== undefined) {
              delete u.permissions['sanitation-report'];
              updated = true;
            }
            if (u.permissions['reports'] === undefined) {
              u.permissions['reports'] = getDefaultPermissions(u.role)['reports'] || 'see';
              updated = true;
            }
          } else {
            u.permissions = getDefaultPermissions(u.role);
            updated = true;
          }
        });
      }

      // Migrate Schedules: ensure visitType property
      if (data.schedules) {
        data.schedules.forEach(s => {
          if (!s.visitType) {
            s.visitType = 'Regular';
            updated = true;
          }
        });
      }

      if (!data.attendanceLog) {
        data.attendanceLog = DEFAULT_DATA.attendanceLog;
        updated = true;
      }

      if (!data.vehicles) {
        data.vehicles = [
          { id: 'veh-1', type: 'Toyota Hilux', model: '2024', plateNo: 'A-10293 Baghdad', region: 'Central', teamLeaderId: 'tl-faris' },
          { id: 'veh-2', type: 'Nissan Frontier', model: '2023', plateNo: 'K-98721 Erbil', region: 'Kurdistan', teamLeaderId: 'tl-karwan' },
          { id: 'veh-3', type: 'Mitsubishi L200', model: '2022', plateNo: 'S-45302 Basra', region: 'South', teamLeaderId: 'tl-murtadha' }
        ];
        updated = true;
      }

      if (data.users) {
        data.users.forEach(u => {
          if (u.role.toLowerCase() === 'team leader') {
            if (u.vehicleType === undefined) {
              const assignedVeh = data.vehicles.find(v => v.teamLeaderId === u.id);
              u.vehicleType = assignedVeh ? assignedVeh.type : '';
              u.vehicleModel = assignedVeh ? assignedVeh.model : '';
              u.vehiclePlateNo = assignedVeh ? assignedVeh.plateNo : '';
              updated = true;
            }
          }
        });
      }

      if (updated) {
        localStorage.setItem(DB_KEY, JSON.stringify(data));
        console.log('Migrated Buckler database storage to include default client sectors, categories, passwords, permissions, and visit types.');
      }
    } catch (e) {
      console.error('Migration failed:', e);
    }
  }

  getData() {
    this.init();
    return JSON.parse(localStorage.getItem(DB_KEY));
  }

  saveData(data) {
    localStorage.setItem(DB_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event('storage'));
  }

  reset() {
    localStorage.setItem(DB_KEY, JSON.stringify(DEFAULT_DATA));
    window.dispatchEvent(new Event('storage'));
  }

  get(entity) {
    const data = this.getData();
    return data[entity] || [];
  }

  insert(entity, record) {
    const data = this.getData();
    if (!data[entity]) data[entity] = [];
    
    if (!record.id) {
      const prefix = entity.substring(0, 3);
      record.id = `${prefix}-${Date.now()}`;
    }
    
    data[entity].push(record);
    this.saveData(data);

    if (this.isSupabase && ENTITY_TO_TABLE[entity]) {
      this.supabase.from(ENTITY_TO_TABLE[entity]).insert({ id: record.id, data: record }).then(({ error }) => {
        if (error) console.error(`Error inserting to Supabase table ${ENTITY_TO_TABLE[entity]}:`, error);
      });
    }

    if (entity === 'schedules') {
      this.triggerScheduleAlert(record);
    } else if (entity === 'complaints') {
      this.triggerComplaintAlert(record);
    } else if (entity === 'messages') {
      this.triggerMessageAlert(record);
    }

    return record;
  }

  update(entity, id, updatedFields) {
    const data = this.getData();
    if (!data[entity]) return false;
    
    const idx = data[entity].findIndex(item => String(item.id) === String(id));
    if (idx === -1) return false;
    
    const updatedRecord = { ...data[entity][idx], ...updatedFields };
    data[entity][idx] = updatedRecord;
    this.saveData(data);

    if (this.isSupabase && ENTITY_TO_TABLE[entity]) {
      this.supabase.from(ENTITY_TO_TABLE[entity]).update({ data: updatedRecord }).eq('id', id).then(({ error }) => {
        if (error) console.error(`Error updating Supabase table ${ENTITY_TO_TABLE[entity]}:`, error);
      });
    }

    return updatedRecord;
  }

  delete(entity, id) {
    const data = this.getData();
    if (!data[entity]) return false;
    
    const initialLen = data[entity].length;
    data[entity] = data[entity].filter(item => String(item.id) !== String(id));
    const success = data[entity].length < initialLen;
    if (success) {
      this.saveData(data);

      if (this.isSupabase && ENTITY_TO_TABLE[entity]) {
        this.supabase.from(ENTITY_TO_TABLE[entity]).delete().eq('id', id).then(({ error }) => {
          if (error) console.error(`Error deleting from Supabase table ${ENTITY_TO_TABLE[entity]}:`, error);
        });
      }
    }
    return success;
  }

  // Specialized helpers
  getClients(region = 'All') {
    const clients = this.get('clients');
    if (region === 'All') return clients;
    return clients.filter(c => c.region === region);
  }

  getItems(region = 'All') {
    return this.get('items');
  }

  getSchedules(region = 'All', tlId = 'All') {
    let schedules = this.get('schedules');
    if (region !== 'All') {
      schedules = schedules.filter(s => s.region === region);
    }
    if (tlId !== 'All') {
      schedules = schedules.filter(s => s.teamLeaderId === tlId);
    }
    return schedules;
  }

  getLogs(region = 'All') {
    const logs = this.get('operationLogs');
    const schedules = this.getSchedules(region);
    const scheduleIds = new Set(schedules.map(s => s.id));
    return logs.filter(l => scheduleIds.has(l.scheduleId));
  }

  getTeamLeaders(region = 'All') {
    const users = this.get('users');
    let tls = users.filter(u => u.role === 'team leader');
    if (region !== 'All') {
      tls = tls.filter(t => t.region === region);
    }
    return tls;
  }

  getComplaints(region = 'All') {
    const complaints = this.get('complaints');
    if (region === 'All') return complaints;
    return complaints.filter(c => c.region === region);
  }

  // Notification generation
  triggerScheduleAlert(schedule) {
    this.insert('notifications', {
      userId: schedule.teamLeaderId,
      title: 'New Visit Scheduled',
      message: `Admin scheduled a ${schedule.service} operations visit on ${schedule.date} @ ${schedule.time}.`,
      date: new Date().toISOString().split('T')[0],
      read: false
    });
  }
  triggerComplaintAlert(complaint) {
    // Notify operations manager and supervisors in that region, and Tech Manager/GM
    const users = this.get('users');
    const recipients = users.filter(u => 
      ['GM', 'tech manager'].includes(u.role) || 
      (u.region === complaint.region && ['operations manager', 'tech supervisor'].includes(u.role))
    );

    recipients.forEach(u => {
      this.insert('notifications', {
        userId: u.id,
        title: 'Customer Complaint Filed',
        message: `New ${complaint.severity} severity complaint registered for region: ${complaint.region}.`,
        date: new Date().toISOString().split('T')[0],
        read: false
      });
    });
  }

  triggerMessageAlert(message) {
    const users = this.get('users');
    const sender = users.find(u => u.id === message.senderId);
    const senderName = sender ? sender.name : 'Staff';

    if (message.receiverId.startsWith('chan-')) {
      // Channel broadcast: Notify all regional staff (excluding sender)
      const region = message.receiverId.replace('chan-', '');
      const regName = region.charAt(0).toUpperCase() + region.slice(1);
      const recipients = users.filter(u => u.id !== message.senderId && (u.region === regName || u.region === 'All'));
      recipients.forEach(u => {
        this.insert('notifications', {
          userId: u.id,
          title: 'New Channel Message',
          message: `${senderName} posted in #${regName} channel: "${message.text.substring(0, 35)}..."`,
          date: new Date().toISOString().split('T')[0],
          read: false
        });
      });
    } else {
      // Direct message: Notify the recipient
      this.insert('notifications', {
        userId: message.receiverId,
        title: 'New Message Received',
        message: `${senderName} sent you a message: "${message.text.substring(0, 35)}..."`,
        date: new Date().toISOString().split('T')[0],
        read: false
      });
    }
  }

  calculateDurationStr(timeIn, timeOut) {
    if (!timeIn || !timeOut) return 'N/A';
    const [h1, m1] = timeIn.split(':').map(Number);
    const [h2, m2] = timeOut.split(':').map(Number);
    
    let diffMins = (h2 * 60 + m2) - (h1 * 60 + m1);
    if (diffMins < 0) {
      diffMins += 24 * 60;
    }
    
    const hrs = Math.floor(diffMins / 60);
    const mins = diffMins % 60;
    return `${hrs}.${mins < 10 ? '0' : ''}${mins} hours`;
  }

  conductVisit(scheduleId, logDetails) {
    const schedules = this.get('schedules');
    const schedule = schedules.find(s => s.id === scheduleId);
    if (!schedule) return false;

    this.update('schedules', scheduleId, { status: 'Conducted' });

    if (logDetails.itemsConsumed && Array.isArray(logDetails.itemsConsumed)) {
      logDetails.itemsConsumed.forEach(cons => {
        const item = this.get('items').find(i => i.id === cons.itemId);
        if (item) {
          const newStock = Math.max(0, parseFloat((item.stock - cons.qty).toFixed(3)));
          this.update('items', cons.itemId, { stock: newStock });
        }
      });
    }

    const duration = this.calculateDurationStr(logDetails.timeIn, logDetails.timeOut);

    const newLog = {
      id: `log-${Date.now()}`,
      scheduleId: scheduleId,
      clientId: schedule.clientId,
      timeIn: logDetails.timeIn,
      timeOut: logDetails.timeOut,
      timeSpent: duration,
      itemsConsumed: logDetails.itemsConsumed,
      comments: logDetails.comments,
      clientComments: logDetails.clientComments,
      clientSignature: logDetails.clientSignature,
      geoLocation: logDetails.geoLocation || 'N/A',
      dateConducted: (() => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; })(),
      pictures: logDetails.pictures || [],
      baitStationsAudit: logDetails.baitStationsAudit || null,
      uvMachinesAudit: logDetails.uvMachinesAudit || null,
      baitStickersReplaced: logDetails.baitStickersReplaced || 0,
      uvStickersReplaced: logDetails.uvStickersReplaced || 0
    };
    this.insert('operationLogs', newLog);

    const commutes = this.get('commuteLog');
    const commute = commutes.find(c => c.scheduleId === scheduleId);
    if (commute) {
      this.update('commuteLog', commute.id, { status: 'Completed' });
    } else {
      const clients = this.get('clients');
      const client = clients.find(c => c.id === schedule.clientId);
      this.insert('commuteLog', {
        scheduleId: scheduleId,
        region: schedule.region,
        teamLeaderId: schedule.teamLeaderId,
        startLocation: `Buckler ${schedule.region} Hub`,
        endLocation: client ? client.address : 'Client Location',
        distanceKm: parseFloat((Math.random() * 20 + 2).toFixed(1)),
        durationMins: Math.floor(Math.random() * 40 + 10),
        fuelUsedLiters: parseFloat((Math.random() * 3 + 0.5).toFixed(1)),
        status: 'Completed'
      });
    }

    // Update client geo location if valid GPS coordinates are logged
    if (logDetails.geoLocation && logDetails.geoLocation !== 'N/A') {
      const parts = logDetails.geoLocation.split(',').map(p => parseFloat(p.trim()));
      if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
        this.update('clients', schedule.clientId, { lat: parts[0], lng: parts[1] });
      }
    }

    // Trigger Notification for Conducted Visit
    const users = this.get('users');
    const managerRecipients = users.filter(u => 
      ['GM', 'tech manager'].includes(u.role) || 
      (u.region === schedule.region && ['operations manager', 'tech supervisor', 'admin coordinator'].includes(u.role))
    );

    const client = this.get('clients').find(c => c.id === schedule.clientId);
    const clientName = client ? client.name : 'Client';

    managerRecipients.forEach(u => {
      this.insert('notifications', {
        userId: u.id,
        title: 'Operation Log Logged',
        message: `TL completed and logged the visit for ${clientName} (${schedule.region}).`,
        date: new Date().toISOString().split('T')[0],
        read: false
      });
    });

    return true;
  }

  saveSanitationNotes(clientId, periodKey, notes) {
    const key = `${clientId}_${periodKey}`;
    const data = this.getData();
    if (!data.sanitationNotes) data.sanitationNotes = {};
    data.sanitationNotes[key] = notes;
    this.saveData(data);

    if (this.isSupabase) {
      this.supabase.from('sanitation_notes').upsert({ id: key, data: { notes } }).then(({ error }) => {
        if (error) console.error(`Error saving sanitation note to Supabase:`, error);
      });
    }
    return true;
  }

  getSanitationNotes(clientId, periodKey) {
    const data = this.getData();
    if (!data.sanitationNotes) return '';
    return data.sanitationNotes[`${clientId}_${periodKey}`] || '';
  }

  checkInDriver(tlId, timeStr, dateStr) {
    const log = {
      id: `att-${Date.now()}`,
      teamLeaderId: tlId,
      date: dateStr || new Date().toISOString().split('T')[0],
      checkIn: timeStr,
      checkOut: null
    };
    this.insert('attendanceLog', log);
    return log;
  }

  checkOutDriver(tlId, timeStr, dateStr) {
    const logs = this.get('attendanceLog');
    const today = dateStr || new Date().toISOString().split('T')[0];
    const activeLog = logs.find(l => l.teamLeaderId === tlId && l.date === today && !l.checkOut);
    if (activeLog) {
      this.update('attendanceLog', activeLog.id, { checkOut: timeStr });
      return true;
    }
    return false;
  }
}

// Instantiate db globally
window.BucklerDB = new Database();
console.log('Buckler Iraq CRM Database Engine loaded and seeded.');
