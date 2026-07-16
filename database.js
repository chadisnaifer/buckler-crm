// Buckler Iraq Operations CRM - Database Engine (localStorage adapter)

const DB_KEY = 'buckler_crm_data';

// Default Seeding Data
const DEFAULT_DATA = {
  "regions": [
    "Central",
    "South",
    "Kurdistan"
  ],
  "sectors": [
    {
      "id": "sec-1",
      "name": "Additional Services"
    },
    {
      "id": "sec-2",
      "name": "Hotels"
    },
    {
      "id": "sec-3",
      "name": "Hospitals"
    },
    {
      "id": "sec-4",
      "name": "Industrial"
    },
    {
      "id": "sec-5",
      "name": "Malls"
    },
    {
      "id": "sec-6",
      "name": "Medical"
    },
    {
      "id": "sec-7",
      "name": "Multiple Environment"
    },
    {
      "id": "C1",
      "name": "Power Plants"
    },
    {
      "id": "B1",
      "name": "Schools"
    },
    {
      "id": "N1",
      "name": "Supermarkets"
    },
    {
      "id": "W1",
      "name": "Warehouses"
    },
    {
      "id": "F1",
      "name": "F&B"
    }
  ],
  "services": [
    "pest control",
    "termite treatment",
    "weed removal",
    "animal control",
    "bird control",
    "poultry disinfection",
    "landscaping (design)",
    "landscaping (gardening)",
    "landscaping (maintenance)",
    "products sales",
    "cleaning",
    "maintenance"
  ],
  "users": [
    {
      "id": "usr-gm",
      "username": "Chadi",
      "name": "Chadi Snaifer",
      "role": "GM",
      "region": "All",
      "city": "All",
      "email": "csnaifer@bucklerpestcontrol.com",
      "password": "buckler123",
      "permissions": {
        "dashboard": "edit",
        "schedules": "edit",
        "clients": "edit",
        "items": "edit",
        "complaints": "edit",
        "messages": "edit",
        "uv-sales": "edit",
        "reports": "edit",
        "users": "edit"
      },
      "vehicleType": "",
      "vehicleModel": "",
      "vehiclePlateNo": ""
    },
    {
      "id": "usr-tm",
      "username": "Hunar",
      "name": "Mohamad Hunar",
      "role": "operations manager",
      "region": "All",
      "city": "All",
      "email": "mhunar@bucklerpestcontrol.com",
      "password": "buckler123",
      "permissions": {
        "dashboard": "see",
        "schedules": "edit",
        "clients": "edit",
        "items": "edit",
        "complaints": "edit",
        "messages": "edit",
        "uv-sales": "see",
        "reports": "see",
        "users": "see"
      },
      "vehicleType": "",
      "vehicleModel": "",
      "vehiclePlateNo": ""
    },
    {
      "id": "usr-ac-c",
      "username": "Duha",
      "name": "Duha Finjan",
      "role": "admin coordinator",
      "region": "Central",
      "city": "Baghdad",
      "email": "operations@bucklerpestcontrol.com",
      "password": "buckler123",
      "permissions": {
        "dashboard": "see",
        "schedules": "edit",
        "clients": "edit",
        "items": "edit",
        "complaints": "edit",
        "messages": "edit",
        "uv-sales": "see",
        "reports": "see",
        "users": "see"
      },
      "vehicleType": "",
      "vehicleModel": "",
      "vehiclePlateNo": ""
    },
    {
      "id": "usr-ac-k",
      "username": "sara",
      "name": "Sara ",
      "role": "admin coordinator",
      "region": "Kurdistan",
      "city": "Erbil",
      "email": "operationskrd@bucklerpestcontrol.com",
      "password": "buckler123",
      "permissions": {
        "dashboard": "see",
        "schedules": "edit",
        "clients": "edit",
        "items": "edit",
        "complaints": "edit",
        "messages": "edit",
        "uv-sales": "see",
        "reports": "see",
        "users": "see"
      },
      "vehicleType": "",
      "vehicleModel": "",
      "vehiclePlateNo": ""
    },
    {
      "id": "usr-ts-c",
      "username": "sup.ahmed",
      "name": "Ahmed Khalil",
      "role": "tech supervisor",
      "region": "Central",
      "city": "Baghdad",
      "email": "ahmed.sup@buckler-iraq.com",
      "password": "buckler123",
      "permissions": {
        "dashboard": "see",
        "schedules": "see",
        "clients": "see",
        "items": "see",
        "complaints": "edit",
        "messages": "edit",
        "uv-sales": "see",
        "reports": "see",
        "users": "none"
      }
    },
    {
      "id": "usr-ts-k",
      "username": "Mahmoud",
      "name": "Mahmoud Mohamad",
      "role": "tech supervisor",
      "region": "Kurdistan",
      "city": "Erbil",
      "email": "diar.sup@buckler-iraq.com",
      "password": "buckler123",
      "permissions": {
        "dashboard": "see",
        "schedules": "see",
        "clients": "see",
        "items": "see",
        "complaints": "edit",
        "messages": "edit",
        "uv-sales": "see",
        "reports": "see",
        "users": "none"
      },
      "vehicleType": "",
      "vehicleModel": "",
      "vehiclePlateNo": ""
    },
    {
      "id": "usr-ts-s",
      "username": "Hamid",
      "name": "Mohamad Hamid",
      "role": "tech supervisor",
      "region": "Central",
      "city": "All",
      "email": "sajjad.sup@buckler-iraq.com",
      "password": "buckler123",
      "permissions": {
        "dashboard": "see",
        "schedules": "see",
        "clients": "see",
        "items": "see",
        "complaints": "edit",
        "messages": "edit",
        "uv-sales": "see",
        "reports": "see",
        "users": "none"
      },
      "vehicleType": "",
      "vehicleModel": "",
      "vehiclePlateNo": ""
    },
    {
      "id": "usr-om-c",
      "username": "radwan",
      "name": "Radwan Alobeidy",
      "role": "operations manager",
      "region": "South",
      "city": "All",
      "email": "mustafa.ops@buckler-iraq.com",
      "password": "buckler123",
      "permissions": {
        "dashboard": "see",
        "schedules": "edit",
        "clients": "edit",
        "items": "edit",
        "complaints": "edit",
        "messages": "edit",
        "uv-sales": "see",
        "reports": "see",
        "users": "see"
      },
      "vehicleType": "",
      "vehicleModel": "",
      "vehiclePlateNo": ""
    },
    {
      "id": "tl-faris",
      "username": "Ali",
      "name": "Ali Raheem",
      "role": "team leader",
      "region": "Central",
      "city": "Baghdad",
      "email": "faris.tl@buckler-iraq.com",
      "vehicleType": "Mitsubishi L200",
      "vehicleModel": "2024",
      "vehiclePlateNo": "11222",
      "password": "buckler123",
      "permissions": {
        "dashboard": "none",
        "schedules": "edit",
        "clients": "none",
        "items": "none",
        "complaints": "see",
        "messages": "edit",
        "uv-sales": "none",
        "reports": "none",
        "users": "none"
      }
    },
    {
      "id": "tl-omar",
      "username": "Karrar",
      "name": "Karrar Haidar",
      "role": "team leader",
      "region": "Central",
      "city": "Baghdad",
      "email": "omar.tl@buckler-iraq.com",
      "vehicleType": "",
      "vehicleModel": "",
      "vehiclePlateNo": "",
      "password": "buckler123",
      "permissions": {
        "dashboard": "none",
        "schedules": "edit",
        "clients": "none",
        "items": "none",
        "complaints": "see",
        "messages": "edit",
        "uv-sales": "none",
        "reports": "none",
        "users": "none"
      }
    },
    {
      "id": "tl-karwan",
      "username": "Ahmad",
      "name": "Ahmad",
      "role": "team leader",
      "region": "Kurdistan",
      "city": "Erbil",
      "email": "karwan.tl@buckler-iraq.com",
      "vehicleType": "Toyota Hilux",
      "vehicleModel": "2023",
      "vehiclePlateNo": "K-98721 Erbil",
      "password": "buckler123",
      "permissions": {
        "dashboard": "none",
        "schedules": "edit",
        "clients": "none",
        "items": "none",
        "complaints": "see",
        "messages": "edit",
        "uv-sales": "none",
        "reports": "none",
        "users": "none"
      }
    },
    {
      "id": "tl-sherwan",
      "username": "Bahaa",
      "name": "Bahaa Kazeem",
      "role": "team leader",
      "region": "Central",
      "city": "All",
      "email": "bahaa@buckler-iraq.com",
      "vehicleType": "Toyota Hilux",
      "vehicleModel": "2024",
      "vehiclePlateNo": "A-10293 Baghdad",
      "password": "buckler123",
      "permissions": {
        "dashboard": "none",
        "schedules": "edit",
        "clients": "none",
        "items": "none",
        "complaints": "see",
        "messages": "edit",
        "uv-sales": "none",
        "reports": "none",
        "users": "none"
      }
    },
    {
      "id": "tl-murtadha",
      "username": "tl.murtadha",
      "name": "Murtadha Jabbar",
      "role": "team leader",
      "region": "South",
      "city": "Basra",
      "email": "murtadha.tl@buckler-iraq.com",
      "vehicleType": "Mitsubishi L200",
      "vehicleModel": "2022",
      "vehiclePlateNo": "S-45302 Basra",
      "password": "buckler123",
      "permissions": {
        "dashboard": "none",
        "schedules": "edit",
        "clients": "none",
        "items": "none",
        "complaints": "see",
        "messages": "edit",
        "uv-sales": "none",
        "reports": "none",
        "users": "none"
      }
    },
    {
      "id": "tl-karrar",
      "username": "tl.karrar",
      "name": "Karrar Fadel",
      "role": "team leader",
      "region": "South",
      "city": "Basra",
      "email": "karrar.tl@buckler-iraq.com",
      "vehicleType": "",
      "vehicleModel": "",
      "vehiclePlateNo": "",
      "password": "buckler123",
      "permissions": {
        "dashboard": "none",
        "schedules": "edit",
        "clients": "none",
        "items": "none",
        "complaints": "see",
        "messages": "edit",
        "uv-sales": "none",
        "reports": "none",
        "users": "none"
      }
    },
    {
      "name": "Rusul Al Saeidi",
      "username": "Rusul",
      "role": "sales manager",
      "region": "Central",
      "city": "All",
      "email": "Ralsaedi@bucklerpestcontrol.com",
      "password": "buckler123",
      "permissions": {
        "dashboard": "none",
        "schedules": "none",
        "clients": "none",
        "items": "none",
        "complaints": "see",
        "messages": "edit",
        "uv-sales": "none",
        "reports": "see",
        "users": "none"
      },
      "vehicleType": "",
      "vehicleModel": "",
      "vehiclePlateNo": "",
      "id": "use-1783676099532"
    },
    {
      "name": "Zain",
      "username": "Zain",
      "role": "sales representative",
      "region": "Central",
      "city": "All",
      "email": "z@bucklerpestcontrol.com",
      "password": "buckler123",
      "permissions": {
        "dashboard": "none",
        "schedules": "none",
        "clients": "none",
        "items": "none",
        "complaints": "see",
        "messages": "none",
        "uv-sales": "none",
        "reports": "see",
        "users": "none"
      },
      "vehicleType": "",
      "vehicleModel": "",
      "vehiclePlateNo": "",
      "id": "use-1783676143027"
    }
  ],
  "clients": [
    {
      "id": "cli-c1",
      "clientCode": "BGD-MALL",
      "name": "Baghdad Mall",
      "contact": "Zaid Mahmoud",
      "phone": "+964 770 123 4567",
      "email": "info@baghdadmall.iq",
      "region": "Central",
      "city": "Baghdad",
      "address": "Al-Harthiya, Baghdad",
      "lat": 33.934142,
      "lng": 35.648771,
      "sector": "Malls",
      "contractValue": 2500,
      "contractCurrency": "USD",
      "monthlyVisits": 0,
      "baitStationsCount": 12,
      "uvMachinesCount": 4,
      "contractTypes": [],
      "serviceVisits": {}
    },
    {
      "id": "cli-c2",
      "clientCode": "MAN-HOTEL",
      "name": "Al-Mansour Hotel",
      "contact": "Mona Al-Alusi",
      "phone": "+964 780 987 6543",
      "email": "frontdesk@mansourhotel.iq",
      "region": "Central",
      "city": "Baghdad",
      "address": "Al-Mansour, Baghdad",
      "lat": 33.3032,
      "lng": 44.3567,
      "sector": "Hotels",
      "contractValue": 3000,
      "contractCurrency": "USD",
      "monthlyVisits": 0,
      "baitStationsCount": 15,
      "uvMachinesCount": 6,
      "contractTypes": [],
      "serviceVisits": {}
    },
    {
      "id": "cli-c3",
      "clientCode": "BBY-HOSP",
      "name": "Babylon Hospital",
      "contact": "Dr. Laith Ahmed",
      "phone": "+964 790 333 4444",
      "email": "admin@babylonhosp.com",
      "region": "Central",
      "city": "Baghdad",
      "address": "Al-Karrada, Baghdad",
      "lat": 33.321,
      "lng": 44.425,
      "sector": "Hospitals",
      "contractValue": 4000000,
      "contractCurrency": "IQD",
      "monthlyVisits": 0,
      "baitStationsCount": 30,
      "uvMachinesCount": 10,
      "contractTypes": [],
      "serviceVisits": {}
    },
    {
      "id": "cli-c4",
      "clientCode": "ASIA-HQ",
      "name": "Asiacell HQ Baghdad",
      "contact": "Hassan Hadi",
      "phone": "+964 771 888 9999",
      "email": "yasir.h@asiacell.com",
      "region": "Central",
      "city": "Baghdad",
      "address": "Al-Jadriyah, Baghdad",
      "lat": 33.284,
      "lng": 44.398,
      "sector": "Additional Services",
      "contractValue": 1500,
      "contractCurrency": "USD",
      "monthlyVisits": 0,
      "baitStationsCount": 8,
      "uvMachinesCount": 2,
      "contractTypes": [],
      "serviceVisits": {}
    },
    {
      "id": "cli-k1",
      "clientCode": "FAM-ERB",
      "name": "Family Mall Erbil",
      "contact": "Sherzad Taha",
      "phone": "+964 750 445 1122",
      "email": "ops@familymallerbir.com",
      "region": "Kurdistan",
      "city": "Erbil",
      "address": "100m Road, Erbil",
      "lat": 33.934108,
      "lng": 35.648749,
      "sector": "Malls",
      "contractValue": 2000,
      "contractCurrency": "USD",
      "monthlyVisits": 0,
      "baitStationsCount": 10,
      "uvMachinesCount": 4,
      "contractTypes": [],
      "serviceVisits": {}
    },
    {
      "id": "cli-k2",
      "clientCode": "ROT-ERB",
      "name": "Rotana Hotel Erbil",
      "contact": "Nizar Salih",
      "phone": "+964 750 889 0011",
      "email": "erbil@rotana.com",
      "region": "Kurdistan",
      "city": "Erbil",
      "address": "Gulan Street, Erbil",
      "lat": 36.211,
      "lng": 44.004,
      "sector": "Hotels",
      "contractValue": 3500,
      "contractCurrency": "USD",
      "monthlyVisits": 0,
      "baitStationsCount": 18,
      "uvMachinesCount": 8,
      "contractTypes": [],
      "serviceVisits": {}
    },
    {
      "id": "cli-k3",
      "clientCode": "SUL-UNIV",
      "name": "Sulaymaniyah University",
      "contact": "Aram Qadir",
      "phone": "+964 770 155 3344",
      "email": "estate@univsul.edu.iq",
      "region": "Kurdistan",
      "city": "Suleimaniah",
      "address": "Qlyasan Street, Sulaymaniyah",
      "lat": 35.562,
      "lng": 45.385,
      "sector": "Multiple Environment",
      "contractValue": 5000000,
      "contractCurrency": "IQD",
      "monthlyVisits": 0,
      "baitStationsCount": 25,
      "uvMachinesCount": 5,
      "contractTypes": [],
      "serviceVisits": {}
    },
    {
      "id": "cli-k4",
      "clientCode": "KOR-TEL",
      "name": "Korek Telecom HQ",
      "contact": "Darya Karim",
      "phone": "+964 750 111 2222",
      "email": "hq@korek.com",
      "region": "Kurdistan",
      "city": "Erbil",
      "address": "Erbil-Massif Road",
      "lat": 36.265,
      "lng": 44.112,
      "sector": "Multiple Environment",
      "contractValue": 1800,
      "contractCurrency": "USD",
      "monthlyVisits": 0,
      "baitStationsCount": 8,
      "uvMachinesCount": 2,
      "contractTypes": [],
      "serviceVisits": {}
    },
    {
      "id": "cli-s1",
      "clientCode": "BGT-TERM",
      "name": "Basra Gateway Terminal",
      "contact": "Capt. Jaafar Radi",
      "phone": "+964 781 222 3344",
      "email": "j.radi@bgt.com.iq",
      "region": "South",
      "city": "Basra",
      "address": "Umm Qasr Port, Basra",
      "lat": 30.038,
      "lng": 47.935,
      "sector": "Multiple Environment",
      "contractValue": 5000,
      "contractCurrency": "USD",
      "monthlyVisits": 0,
      "baitStationsCount": 20,
      "uvMachinesCount": 10,
      "contractTypes": [],
      "serviceVisits": {}
    },
    {
      "id": "cli-s2",
      "clientCode": "SHER-BAS",
      "name": "Al-Basra Sheraton",
      "contact": "Karim Mansour",
      "phone": "+964 782 555 6677",
      "email": "basra.sheraton@sheraton.com",
      "region": "South",
      "city": "Basra",
      "address": "Shatt Al-Arab Corniche, Basra",
      "lat": 30.522,
      "lng": 47.848,
      "sector": "Hotels",
      "contractValue": 1400000,
      "contractCurrency": "IQD",
      "monthlyVisits": 0,
      "baitStationsCount": 16,
      "uvMachinesCount": 6,
      "contractTypes": [],
      "serviceVisits": {}
    },
    {
      "id": "cli-s3",
      "clientCode": "RUM-CLN",
      "name": "Rumaila Oil Field Clinic",
      "contact": "Dr. Amjad Ali",
      "phone": "+964 780 111 9988",
      "email": "clinic@rumaila-ops.com",
      "region": "South",
      "city": "Roumailah",
      "address": "Rumaila North Camp, Basra",
      "lat": 30.345,
      "lng": 47.42,
      "sector": "Hospitals",
      "contractValue": 1200,
      "contractCurrency": "USD",
      "monthlyVisits": 2,
      "baitStationsCount": 6,
      "uvMachinesCount": 2
    },
    {
      "id": "cli-s4",
      "clientCode": "MAJ-CAMP",
      "name": "Majnoon Camp Services",
      "contact": "Mazin Salim",
      "phone": "+964 783 777 8888",
      "email": "mazin.s@majnoon-field.com",
      "region": "South",
      "city": "Basra",
      "address": "Majnoon Oil Field, Basra",
      "lat": 31.05,
      "lng": 47.38,
      "sector": "Multiple Environment",
      "contractValue": 4500,
      "contractCurrency": "USD",
      "monthlyVisits": 4,
      "baitStationsCount": 22,
      "uvMachinesCount": 8
    },
    {
      "clientCode": "B11",
      "name": "Saniour",
      "sector": "F&B",
      "contact": "Elie",
      "region": "Central",
      "city": "Baghdad",
      "phone": "",
      "email": "",
      "address": "baghdad ",
      "lat": null,
      "lng": null,
      "monthlyVisits": 0,
      "contractTypes": [
        "Pest Control"
      ],
      "id": "cli-1783662046286",
      "contractValue": 2500,
      "contractCurrency": "USD",
      "baitStationsCount": 22,
      "uvMachinesCount": 8,
      "serviceVisits": {
        "Pest Control": 0
      }
    },
    {
      "clientCode": "ERBIL-IN-181",
      "name": "Erbil Intl Hotel",
      "sector": "Additional Services",
      "contact": "Erbil International Hotel Full Treatment",
      "region": "Central",
      "city": "Baghdad",
      "phone": "",
      "email": "",
      "address": "Baghdad, Iraq (Sales Portal Won)",
      "lat": null,
      "lng": null,
      "monthlyVisits": 4,
      "contractTypes": [
        "Pest Control"
      ],
      "serviceVisits": {
        "Pest Control": 4
      },
      "id": "cli-1783676502573",
      "contractValue": 2500,
      "contractCurrency": "USD",
      "baitStationsCount": 22,
      "uvMachinesCount": 8
    },
    {
      "id": "cli-deal-deal-2",
      "clientCode": "SOUTH-OI-942",
      "name": "South Oil Co.",
      "contact": "Basra Oil Terminal Baiting Contract",
      "phone": "",
      "email": "",
      "region": "Central",
      "city": "All",
      "address": "All, Iraq (Sales Portal Won)",
      "lat": 33.315,
      "lng": 44.366,
      "sector": "Commercial",
      "contractValue": 524,
      "contractCurrency": "USD",
      "monthlyVisits": 4,
      "baitStationsCount": 50,
      "uvMachinesCount": 0,
      "contractTypes": [
        "pest control"
      ],
      "serviceVisits": {}
    },
    {
      "clientCode": "BASRA-PA-783",
      "name": "Basra park",
      "sector": "Additional Services",
      "contact": "Basra Park",
      "region": "South",
      "city": "Basra",
      "phone": "",
      "email": "",
      "address": "All, Iraq (Sales Portal Won)",
      "lat": null,
      "lng": null,
      "monthlyVisits": 0,
      "contractTypes": [
        "Weed Removal",
        "Landscaping (Design)"
      ],
      "serviceVisits": {
        "Weed Removal": 0,
        "Landscaping (Design)": 0
      },
      "id": "cli-1783679846216",
      "contractValue": 2500,
      "contractCurrency": "USD",
      "baitStationsCount": 22,
      "uvMachinesCount": 8
    },
    {
      "clientCode": "MILLENNI-478",
      "name": "Millennium",
      "sector": "Additional Services",
      "contact": "Millennium Compound",
      "region": "Central",
      "city": "Baghdad",
      "phone": "",
      "email": "",
      "address": "Baghdad, Iraq (Sales Portal Won)",
      "lat": null,
      "lng": null,
      "monthlyVisits": 0,
      "contractTypes": [
        "Pest Control"
      ],
      "serviceVisits": {
        "Pest Control": 0
      },
      "id": "cli-1783739345151",
      "contractValue": 2500,
      "contractCurrency": "USD",
      "baitStationsCount": 22,
      "uvMachinesCount": 8
    }
  ],
  "items": [
    {
      "id": "itm-1",
      "itemCode": "PERM-10",
      "name": "Permethrin 10% EC",
      "unit": "Liters",
      "stock": 119,
      "category": "Pesticides"
    },
    {
      "id": "itm-2",
      "itemCode": "TERM-HE",
      "name": "Termidor HE Termiticide",
      "unit": "Liters",
      "stock": 85,
      "category": "Pesticides"
    },
    {
      "id": "itm-3",
      "itemCode": "GLY-480",
      "name": "Glyphosate 480 Herbicide",
      "unit": "Liters",
      "stock": 148.5,
      "category": "Pesticides"
    },
    {
      "id": "itm-4",
      "itemCode": "FLOC-B",
      "name": "Flocoumafen Rodent Bait Blocks",
      "unit": "Kg",
      "stock": 198,
      "category": "Bait Stations",
      "supplierIds": [
        "sup-1783666333552"
      ]
    },
    {
      "id": "itm-5",
      "itemCode": "VIRK-S",
      "name": "Virkon S Disinfectant",
      "unit": "Kg",
      "stock": 90,
      "category": "Others"
    },
    {
      "id": "itm-6",
      "itemCode": "SS-SPIKES",
      "name": "Stainless Steel Bird Spikes",
      "unit": "Meters",
      "stock": 500,
      "category": "Others",
      "supplierIds": [
        "sup-1783677833120"
      ]
    },
    {
      "id": "itm-7",
      "itemCode": "NPK-FERT",
      "name": "Organic NPK Fertilizer",
      "unit": "Bags (25kg)",
      "stock": 300,
      "category": "Others"
    },
    {
      "id": "itm-8",
      "itemCode": "NOZ-B2",
      "name": "Professional Sprayer Nozzle B2",
      "unit": "Units",
      "stock": 60,
      "category": "Others"
    },
    {
      "id": "itm-9",
      "itemCode": "S1",
      "name": "Sentrin",
      "unit": "Liters",
      "stock": 398,
      "category": "Pesticides",
      "supplierIds": [
        "sup-1783666333552"
      ]
    },
    {
      "id": "itm-10",
      "itemCode": "A1",
      "name": "Agimob",
      "unit": "Liters",
      "stock": 176,
      "category": "Bait Stations",
      "supplierIds": [
        "sup-1783666333552"
      ]
    },
    {
      "id": "itm-uv-1",
      "itemCode": "UV-TRAP-A",
      "name": "UV Flies Trap I-20",
      "unit": "Units",
      "stock": 33,
      "category": "UV Machines",
      "supplierIds": [
        "sup-1783677787233"
      ]
    },
    {
      "id": "itm-uv-2",
      "itemCode": "UV-TRAP-B",
      "name": "UV Flies tTap I-50",
      "unit": "Units",
      "stock": 20,
      "category": "UV Machines",
      "supplierIds": [
        "sup-1783677787233"
      ]
    },
    {
      "id": "itm-uv-3",
      "itemCode": "UV-TRAP-C",
      "name": "UV Flies Trap X-50",
      "unit": "Units",
      "stock": 15,
      "category": "UV Machines",
      "supplierIds": [
        "sup-1783677787233"
      ]
    }
  ],
  "schedules": [
    {
      "id": "sch-1",
      "clientId": "cli-c1",
      "service": "pest control",
      "date": "2026-06-18",
      "time": "09:00",
      "teamLeaderId": "tl-faris",
      "region": "Central",
      "city": "Baghdad",
      "status": "Conducted",
      "assignedBy": "admin.yasmin",
      "visitType": "Regular"
    },
    {
      "id": "sch-2",
      "clientId": "cli-c2",
      "service": "termite treatment",
      "date": "2026-06-13",
      "time": "11:30",
      "teamLeaderId": "tl-omar",
      "region": "Central",
      "city": "Baghdad",
      "status": "Conducted",
      "assignedBy": "admin.yasmin",
      "visitType": "Regular"
    },
    {
      "id": "sch-3",
      "clientId": "cli-k1",
      "service": "pest control",
      "date": "2026-06-03",
      "time": "08:30",
      "teamLeaderId": "tl-karwan",
      "region": "Kurdistan",
      "city": "Erbil",
      "status": "Conducted",
      "assignedBy": "admin.avan",
      "visitType": "Regular"
    },
    {
      "id": "sch-4",
      "clientId": "cli-c3",
      "service": "poultry disinfection",
      "date": "2026-06-18",
      "time": "10:00",
      "teamLeaderId": "tl-faris",
      "region": "Central",
      "city": "Baghdad",
      "status": "Scheduled",
      "assignedBy": "admin.yasmin",
      "visitType": "Regular"
    },
    {
      "id": "sch-5",
      "clientId": "cli-k2",
      "service": "bird control",
      "date": "2026-06-11",
      "time": "14:00",
      "teamLeaderId": "tl-sherwan",
      "region": "Kurdistan",
      "city": "Erbil",
      "status": "Scheduled",
      "assignedBy": "admin.avan",
      "visitType": "Regular"
    },
    {
      "id": "sch-6",
      "clientId": "cli-s1",
      "service": "weed removal",
      "date": "2026-07-09",
      "time": "09:00",
      "teamLeaderId": "tl-murtadha",
      "region": "South",
      "city": "Basra",
      "status": "Scheduled",
      "assignedBy": "Chadi",
      "visitType": "Regular"
    },
    {
      "id": "sch-7",
      "clientId": "cli-s2",
      "service": "products sales",
      "date": "2026-06-17",
      "time": "13:00",
      "teamLeaderId": "tl-karrar",
      "region": "South",
      "city": "Basra",
      "status": "Conducted",
      "assignedBy": "admin.ali",
      "visitType": "Regular"
    },
    {
      "id": "sch-8",
      "clientId": "cli-c4",
      "service": "landscaping",
      "date": "2026-06-20",
      "time": "08:00",
      "teamLeaderId": "tl-omar",
      "region": "Central",
      "city": "Baghdad",
      "status": "Scheduled",
      "assignedBy": "admin.yasmin",
      "visitType": "Regular"
    },
    {
      "id": "sch-9",
      "clientId": "cli-k3",
      "service": "pest control",
      "date": "2026-06-17",
      "time": "10:30",
      "teamLeaderId": "tl-karwan",
      "region": "Kurdistan",
      "city": "Suleimaniah",
      "status": "Scheduled",
      "assignedBy": "Chadi",
      "visitType": "Regular"
    },
    {
      "id": "sch-10",
      "clientId": "cli-s3",
      "service": "animal control",
      "date": "2026-06-07",
      "time": "15:00",
      "teamLeaderId": "tl-murtadha",
      "region": "South",
      "city": "Roumailah",
      "status": "Scheduled",
      "assignedBy": "admin.ali",
      "visitType": "Regular"
    },
    {
      "clientId": "cli-c1",
      "region": "Central",
      "city": "Baghdad",
      "service": "pest control",
      "date": "2026-07-10",
      "time": "09:00",
      "teamLeaderId": "tl-omar",
      "visitType": "Call-back",
      "status": "Scheduled",
      "assignedBy": "Chadi",
      "id": "sch-1783514108778"
    },
    {
      "clientId": "cli-c3",
      "region": "Central",
      "city": "Baghdad",
      "service": "termite treatment",
      "date": "2026-07-08",
      "time": "09:00",
      "teamLeaderId": "tl-sherwan",
      "visitType": "Regular",
      "status": "Scheduled",
      "assignedBy": "Chadi",
      "id": "sch-1783514135212"
    },
    {
      "clientId": "cli-k2",
      "region": "Kurdistan",
      "city": "Erbil",
      "service": "pest control",
      "date": "2026-07-11",
      "time": "09:00",
      "teamLeaderId": "tl-karwan",
      "visitType": "Regular",
      "status": "Scheduled",
      "assignedBy": "Chadi",
      "id": "sch-1783514191934"
    },
    {
      "clientId": "cli-c1",
      "region": "Central",
      "city": "Baghdad",
      "service": "pest control",
      "date": "2026-07-09",
      "time": "09:00",
      "teamLeaderId": "tl-omar",
      "visitType": "Call-back",
      "status": "Scheduled",
      "assignedBy": "Chadi",
      "id": "sch-1783596656406"
    },
    {
      "clientId": "cli-c1",
      "region": "Central",
      "city": "Baghdad",
      "service": "pest control",
      "date": "2026-07-09",
      "time": "09:00",
      "teamLeaderId": "tl-omar",
      "visitType": "Regular",
      "status": "Scheduled",
      "assignedBy": "Chadi",
      "id": "sch-1783601249114"
    },
    {
      "clientId": "cli-c1",
      "region": "Central",
      "city": "Baghdad",
      "service": "pest control",
      "date": "2026-07-11",
      "time": "09:00",
      "teamLeaderId": "tl-sherwan",
      "visitType": "Regular",
      "status": "Conducted",
      "assignedBy": "Chadi",
      "id": "sch-1783740321330"
    },
    {
      "clientId": "cli-1783662046286",
      "region": "Central",
      "city": "Baghdad",
      "service": "pest control",
      "date": "2026-07-11",
      "time": "09:00",
      "teamLeaderId": "tl-sherwan",
      "visitType": "Regular",
      "status": "Scheduled",
      "assignedBy": "Chadi",
      "id": "sch-1783741728681"
    },
    {
      "clientId": "cli-k1",
      "region": "Kurdistan",
      "city": "Erbil",
      "service": "cleaning",
      "date": "2026-07-12",
      "time": "09:00",
      "teamLeaderId": "tl-karwan",
      "visitType": "Regular",
      "status": "Conducted",
      "assignedBy": "Chadi",
      "id": "sch-1783808553825"
    }
  ],
  "operationLogs": [
    {
      "id": "log-1",
      "scheduleId": "sch-1",
      "clientId": "cli-c1",
      "timeIn": "09:00",
      "timeOut": "11:30",
      "timeSpent": "2.50 hours",
      "itemsConsumed": [
        {
          "itemId": "itm-1",
          "qty": 4
        },
        {
          "itemId": "itm-4",
          "qty": 10
        },
        {
          "itemId": "itm-uv-1",
          "qty": 2
        }
      ],
      "comments": "Sprayed the food court perimeter and external garbage bins. Installed 2 UV Fly Traps on the back walls.",
      "clientComments": "Very satisfied with the quick response and detailed inspection.",
      "clientSignature": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"40\"><path d=\"M10,25 Q30,5 50,25 T90,25\" fill=\"none\" stroke=\"red\" stroke-width=\"2\"/></svg>",
      "geoLocation": "33.3130, 44.3640",
      "dateConducted": "2026-06-01",
      "pictures": [],
      "baitStationsAudit": [
        {
          "number": 1,
          "location": "External Wall 1",
          "activity": "No Activity",
          "comments": "Clear"
        },
        {
          "number": 2,
          "location": "External Wall 2",
          "activity": "Eaten",
          "comments": "Replaced block"
        },
        {
          "number": 3,
          "location": "External Wall 3",
          "activity": "No Activity",
          "comments": "Clear"
        },
        {
          "number": 4,
          "location": "External Wall 4",
          "activity": "Captured & Replaced",
          "comments": "Mice found"
        },
        {
          "number": 5,
          "location": "External Wall 5",
          "activity": "No Activity",
          "comments": "Clear"
        },
        {
          "number": 6,
          "location": "External Wall 6",
          "activity": "No Activity",
          "comments": "Clear"
        },
        {
          "number": 7,
          "location": "External Wall 7",
          "activity": "Eaten",
          "comments": "Replaced block"
        },
        {
          "number": 8,
          "location": "External Wall 8",
          "activity": "No Activity",
          "comments": "Clear"
        },
        {
          "number": 9,
          "location": "External Wall 9",
          "activity": "No Activity",
          "comments": "Clear"
        },
        {
          "number": 10,
          "location": "External Wall 10",
          "activity": "No Activity",
          "comments": "Clear"
        },
        {
          "number": 11,
          "location": "External Wall 11",
          "activity": "No Activity",
          "comments": "Clear"
        },
        {
          "number": 12,
          "location": "External Wall 12",
          "activity": "Captured & Replaced",
          "comments": "Mice found"
        }
      ],
      "uvMachinesAudit": [
        {
          "number": 1,
          "location": "Zone Area 1",
          "catchRate": 15
        },
        {
          "number": 2,
          "location": "Zone Area 2",
          "catchRate": 25
        },
        {
          "number": 3,
          "location": "Zone Area 3",
          "catchRate": 8
        },
        {
          "number": 4,
          "location": "Zone Area 4",
          "catchRate": 30
        }
      ],
      "baitStickersReplaced": 4,
      "uvStickersReplaced": 2
    },
    {
      "id": "log-2",
      "scheduleId": "sch-2",
      "clientId": "cli-c2",
      "timeIn": "11:30",
      "timeOut": "15:30",
      "timeSpent": "4.00 hours",
      "itemsConsumed": [
        {
          "itemId": "itm-2",
          "qty": 8
        }
      ],
      "comments": "Subterranean termite pre-treatment done in basement expansion joint. Injected Termidor barrier.",
      "clientComments": "Works done according to SOW. Supervisor was very professional.",
      "clientSignature": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"40\"><path d=\"M15,10 C20,35 40,35 45,15 S60,5 85,30\" fill=\"none\" stroke=\"red\" stroke-width=\"2\"/></svg>",
      "geoLocation": "33.3032, 44.3567",
      "dateConducted": "2026-06-02",
      "pictures": []
    },
    {
      "id": "log-3",
      "scheduleId": "sch-3",
      "clientId": "cli-k1",
      "timeIn": "08:30",
      "timeOut": "10:30",
      "timeSpent": "2.00 hours",
      "itemsConsumed": [
        {
          "itemId": "itm-1",
          "qty": 3
        },
        {
          "itemId": "itm-6",
          "qty": 15
        },
        {
          "itemId": "itm-uv-2",
          "qty": 1
        }
      ],
      "comments": "Cleaned roof gutters and installed bird spikes on main entry canopy. Installed 1 UV Trap Type B in the warehouse corridor.",
      "clientComments": "Good work, hope the spikes will keep the pigeons away.",
      "clientSignature": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"40\"><path d=\"M10,20 L30,30 L50,10 L70,30 L90,20\" fill=\"none\" stroke=\"red\" stroke-width=\"2\"/></svg>",
      "geoLocation": "36.1950, 43.9780",
      "dateConducted": "2026-06-03",
      "pictures": [],
      "baitStationsAudit": [
        {
          "number": 1,
          "location": "External Wall 1",
          "activity": "No Activity",
          "comments": "Clear"
        },
        {
          "number": 2,
          "location": "External Wall 2",
          "activity": "No Activity",
          "comments": "Clear"
        },
        {
          "number": 3,
          "location": "External Wall 3",
          "activity": "Eaten",
          "comments": "Replaced block"
        },
        {
          "number": 4,
          "location": "External Wall 4",
          "activity": "No Activity",
          "comments": "Clear"
        },
        {
          "number": 5,
          "location": "External Wall 5",
          "activity": "No Activity",
          "comments": "Clear"
        },
        {
          "number": 6,
          "location": "External Wall 6",
          "activity": "Captured & Replaced",
          "comments": "Mice found"
        },
        {
          "number": 7,
          "location": "External Wall 7",
          "activity": "No Activity",
          "comments": "Clear"
        },
        {
          "number": 8,
          "location": "External Wall 8",
          "activity": "No Activity",
          "comments": "Clear"
        },
        {
          "number": 9,
          "location": "External Wall 9",
          "activity": "No Activity",
          "comments": "Clear"
        },
        {
          "number": 10,
          "location": "External Wall 10",
          "activity": "No Activity",
          "comments": "Clear"
        }
      ],
      "uvMachinesAudit": [
        {
          "number": 1,
          "location": "Zone Area 1",
          "catchRate": 12
        },
        {
          "number": 2,
          "location": "Zone Area 2",
          "catchRate": 16
        },
        {
          "number": 3,
          "location": "Zone Area 3",
          "catchRate": 5
        },
        {
          "number": 4,
          "location": "Zone Area 4",
          "catchRate": 20
        }
      ],
      "baitStickersReplaced": 2,
      "uvStickersReplaced": 1
    },
    {
      "id": "log-1783601706934",
      "scheduleId": "sch-7",
      "clientId": "cli-s2",
      "timeIn": "15:54",
      "timeOut": "17:54",
      "timeSpent": "2.00 hours",
      "itemsConsumed": [
        {
          "itemId": "itm-1",
          "qty": 1
        }
      ],
      "comments": "ccc",
      "clientComments": "dfdfdf",
      "clientSignature": "data:image/png;base64,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",
      "geoLocation": "30.522, 47.848",
      "dateConducted": "2026-07-09",
      "pictures": [
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAHAAyADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAwQBAgUABgf/xABEEAACAQMCAwUGAwcDAwIHAQEBAgMABBESIQUxQRMiUWFxBhQygZGxQqHBIzNSctHh8BVi8SQ0gkOiFlNjg5KywnNE/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EADERAAICAgICAQMCBQQDAQEAAAABAhEDIRIxBEFREyIyFGEFcYGx8CNCkaEzUtHB8f/aAAwDAQACEQMRAD8A+mV1cNxmppklZY1ljaN+TDBxVLaRnixJ+8Q6X9R1+ex+dFpeb9hL7x/6ZGJfLwb5df7U1vQMYqBzI+dTUHZx57Uhlq6urqQAbnCmKQgnRIOXn3f/AOqS4g5e5twD3RIR/wC00xxWQx8NuCp73Ztp9cUhdH9lG43IkQ/IkA/kapdB7GMCpGOgqNs1bPgKQzsnwrt/GqsxzgbseQqkzNHAzYDMB8IbTn50AYHH51uLgW4KMF2Ia2divz5c8VlMHMyQopjH4hrSPT44AySOvOnPdrqaV5JV0sfhEtw0gI5YIGOYroYILNmee5hjJ2wqKuPmd6LELXmS4VQWJG+mLWR4fFt40PiEq21hFbNIgeTvsJJdBHhsgzTDNw66lIiaS5Yd4gkkYHMeHlVLnizwzErZwpg7STSohI6bbmhCZkxQSSEG3hZj4wWhb/3SGtCz4fd+8LJdQzCNDnElwG36dxdudUPGLy4yEuEPgLaBpD9WwK0+GrL7uZJ3mZ3OcS4BA9BsOtXBXKiJy4xbHe17oAizj+I13aynkVX0GarUE4GTXWcFFTqeQlnY42G+PtVgqjfAqF2XfnzNTQBJOBk8hUJkIM8zuahzkBf4jiud1RSzHYUD7Ilk0ABQC7bKP19KmNAiBRv1J8T41SFWJMjKS7dAPhHhRHEixltGAPE0kDa6OTcE+Jqaulu2kAsBt0FEFun4mY/OiyLAZA5mq6gZMDJwOgpxYo15IKFbd6aZwNtWkfKiwsoEkblGfnVxbyHmVH500AcVbTS5AJTQ9nbuxckgbVeO3jCLlcnHXerXo/Zqo/E4FHUbUXoAYVV+FQKk0ULQ3+I0rE9Czb3yDwQ0dtqXQ6r9z4KBR3O9UxFa7Fd0rutBIvcfvIcfx/pR+tAn/fwfzUemDOqwGTVasvOkCLsD2TL5UG0yLWP0o7Hun0pWCVEtkDOo26mkjRh37yelCqrXUWdmLfyqTQzOxPchc+ZwKpIzkGU98UKfu3sLeORVA9wdwiL6nNBue3LxNJIAdW2lcYppbEaY51zMFzlgPU0kIGb45pG+eKsLWLqmfWlSCwrXMAGDKp9N6AbhPwq7egooiUfCoFQwxtimqJbGOByHTcR4Iw+oDyI/tWr3vKsbhbaOJuvSSPP0P962s1xZlU2ev48uWNEAHxrxvEYBFxC4jxsSSPv+tey1Dxrz3HoB74JhndRn7Gsmbovbgi3jzz0jP0q/WqqcKB4CrA7iuw4vZ5vhdzp9pbyMnaZ3A9QdvyzXoDXhYbkxcSS6J5Saj6Z3r3XmKmDtFTVMtTNq3xL86VHLHhRIW0yqenKqZK0x2uqa6kaFa41NRQBFRVqigRWoq1RTAwvaiy94sBcIO/Acn+U868dX0x0V0ZHAKsMEeIr55xG1ayvpbds4U90+I6VE17LTFqipzUVmxnUOTvEJ48/SiGhp3iX8eXpSGi9RU1FAHVFdmuoGRXV1dQBFdXV1AEV1dUUAdUV1dQB1dXVFAHVNRXUgCRSvC4eNirDqKYuOKX1ymie7mdf4S5IpOooCiSc1FRXUDPu1uxaCMnOSgO/pRaFEjC3jVtmVR9cUQHOx2I6U2BNdjOxrq6kMBa/s9Vuc5i+HzU8vsR8qM/LVt3TmgzDRPDKAOZjY56H+4H1pim/kS+Dq6qocZQ81+1UuH0RnBwTsKkYtcsJXIJ7o2xWYMnhMsY700KMm/VlGx+ex+dP6R1zSrhYb5SR+zuV0HyYAkfUZ+gqhjSsCoK7gjIxUSOVGFGWbYUKwYtYwagdQQA+oq8eXkdz0OkeX+GkBdE0jnknmfGsX2hncBYoTcCTp2cIfz67VtSNoQtkbDqcfnXkLiRLm7lklC6FO+bsvpH8WkedAhK6uJlCiUtgjcz3Cx/8AtG9AyjhTBh85w0FqXPM9X5UfDXMjSQEsc/8A/PaZzn/c1F/068mUB7Vyc4BubjY/JftR0BaKQ2lhJNJKUeU6EFzJsQOfdXl4UgYvhaBPjOoG3te0bHiS3jW5cWJIRUvVtoI106UiU48dzy3pJhw0vJHdTyTLGA2rtCdQOOenz+4obEhRbeeaVY5RKQxwBPdBf/YtegjRY41RBhVAAHgKTsxw9sm0sjEF27QxnfxwTvWjEkbnHZsSD+I1viWrObyJdIGWHiKq5JwoUnUfCngqjkoHyoI79y7dEGkfrWyZytghFIegHqauLc/if6Cj1SaRYoXkdgoA5mixW3oSdo0lLSMdC7Z8f8/WjwRdo6zSR6FX92hG/qfP7UGxiMr+8SDzjU/h8/WtHG4pMbdaRwB8KDc5LRR/xNk+gpor4UqO/fMeka4+Z/wUIkOBmrha5auBmkxoG5CIzeAzS9kpFupPNu8fnVr9sWjjq5Cj5miRrpUDwFNdC9hVq9UFWzUlIUuu9dQJ4ZamF2FLE6uIN/sTH1o5liT45FX1NUxIL0pdviNcbuLkpZv5VJoJmdj3YW/8iBQkxSZS23uZ2/3Y/Kjud6TtDMQ7IVGXOSd+tFaKRj35m+QxVNbIYUnaqNNGvxOo+dU93Q/FlvU5qyxRryQD5U9CF5Zka4iK6mAzyBovbOfhhb5nFVlH/WQgD8JNHOBzOKAsFm4boi/nV0hlbdpiB/tGKhriFTvIv1qBeJp7odvRcfeh2CYQ28eli7O3qxoNrHH2QIReeOVQ905BCxY/mb+lBhkmEWAUXc9M9aCm2O48q48qTZpDzlb5YFUKKfiLN6sTRRNMaaRE+J1HqaWvLiJo10NqIYfCCetVCKvJQPlVHdSsig7oMkUxVQ174oI0wyN57CoN5MT3Yo1HmxP6UGuoodFzcXB/9RV/lX+tCbW/xzSN88faprqApBOHARcRhYZ3JUkknYj+uK9NpHhXlA2hlfONDBvoc16oMSMgc65PIX3Wej4j+xotWbxlUa3V25AlTt41o97ypa+iLWcmDuBq+m9YHWZQqsz9nbyyH8CFvyqRS/E208Kuz/8ASI+u1db6OJdnhG3Br2/Cp/eOGQSE5OnSfUbV4k8vnXpfZabVbzQE7owYeh/4rPG9mmTo3hzqRVatWpkPxNrjU+VWoFo2xXw3pioZqtoioqa6gCpqKtUUwKmoNWNQaBEV5v2ustcMd6g3TuP6Hkfr969JQrmBLm3kgkGVkUqaGrGj5rXUW4ge3uJIJBho2KmhViyyknIKObbVYDAwKqvect4bCrUhnVBrq40ARUV1dQM6urqigDqipqKAOqDUmooA6oqaigDqiurqAOqK6uoA6orsjxqM+tIZNdUZPhVd29PvSA+/VDKD5EcjS4imgH/TuHXpHKTt6NufHnn5URZs4DxSIx6ac/mNqqvgV/JcNhtLbHp4GrVX94pDoQM9agEodLnyDeNIZW7jMts6oAXGGUE47wOR+YFWhlWaFJU5MM78x5etEpKUNZSNcRjNu5zMn8H+8fqPn45a3oHrY0wzhlxqHL+lJPMtwxZTsDjHUGmbh8RZjYZbkeYIrNZG160ISXGMH4X8s0hjGBQbqETwMisEfZkb+FhuD9atFKkhIwQ6/ErcxRcgUDEOFXInt5AAQySsGX+Ek5I+RJHypqPIlkXzDD6f2pJE9040zLns7wcvB1H6jNOAn3l9s9wfc0AIcZvoLZBHcqHVsbGNm3ztyFY/vcUEYa3sNCgYDMqoMepq/E5Zri5c9nxBY0+IGRY1APUHPSsmWK3E/e9z7vJpGaVz57bUhDcnGZmIUT2seegZpT/7dqJaSXL9rPJLPiMd3XGsSMT/AJ1pcLJpxELoqOsUawr9aJfgQWUdvm0Rj35RdO0mCfTnTSE2Z1ylvHJ2sq2QJbP7SZ5mI8gNqtE8kDxTLLLJGVILR2wiVRjnnmTsDv4V3bylYzbydsAwDC3g0A4IxgnfwFFig96uhHPAysrhtM1yCQOZOkY/WjsOjX4fEY0wiktnUdchYZPicc/KnYYWijKmVmJJJOAOdL8PJi12r84twfFTyP6eoNO11xVKjzssm5NkPIEjZjyAzVLdSsI1fEdz60O6YYRCQAxyxPQChm7afCWCB/GVgQg9P4vl9arozSbGJpo4I9craV5DqSfADqaz7pZLgq0/cBP7OE/hH8TefP0phYBC4mmdp7g7KWHL+UdP83qCpa6Ck5b8R/z50qstNR2huBdKD61k3ntD2F28MSIyptqO+TU8V4iVUwW58mavNmBWlZ2JJJrmy5d1E93+H/w1KPPMu/R6BfaOQj4I/of61aDjIRnZoQS5ycNisARgchsKdF8RY9jJb60Qg6hsMef9azWSXyd+TwfHa/Bf2PT2fELa77sb4f8AgbnTZdUGWYKPM14CS6tg4lguViYbiMuDj0bNep4JNacSt9S9m0yfGAQfnW+PIpakeJ53grCueLr4+Bm7uIZJYVWQMA2ptO/L0oouD+CGRvMgD71UIPfmAAwigfWmsbb1s6R5fYDtLk8o419STUFbhvinx/KoFFa4t02aRM+Gcmgtex47iux8lx96P6CF4IFlllZyzYbG5502lvGvwoo+VI287pHtGO8S3ebxq7XE5/EqjyWqdgPaQOlCdwoJJAxSTNI3xTSH54+1CKIMsVBx1O9CQg9ncQpB3pBkknA3NXa6U/AkjfLH3oEY0xqPACrUwaLNcSn4YlH8zVUyznm6j0WoNRQKijAtMpaRydJ648PCp7NCd1z6713/AKvotWpgcAByAFTUV1IZxqkZ7nzP3NXocfwn+Y/c0xF81FdUUBZxpZ7QNK0okdSwwQp2NMk1BOBvQJ7Kx/uk3J2G5qTQopF7NRqBxttvRMk8lY/KgCaipCyHlH9TUiGU/wAI/OgVoowBBB5EYr0thL2thBIeZQZ9a897uxG8n0Fa3AmLWGgk5jdl/X9aw8hfamdnhzXJo081Sc4gk/lP2q2nxJodwALeTb8JrlXZ6D6MWs/j7aeCz+ZUfmK0jWP7Tvp4Uq/xygfkTXVLo449nkj0rU9npuy4oik4EqlD9x9qzDzFXglMM0cq80YMPlWMXTNpbR7/AB0rhuBnn1qFYOodTkMMg1I5kfOtzBBYG0yjz2p6s0VoRtqQN4ipZpBlq6urqRZFRU1BoJIqDVqimBWoqTXUAeR9rrLs5471B3ZO4/qOX5favNucLtzOwr6PxK0W+sJbc4yy90+B6V85KsJWDjBQ6SD0PWs5oqLOAAAA6V1dXVBRFdXVBYeIoA41FQWHn9K7J8DQMmoqO94D613e8RQBNRUYPjVcZOM8udAE5HPO1cWXxqcAdBXUAV1eAP0rsnw+tTXUAV38hUYPjVqigCMeZrsDwqaikM6uNdVT3vSgDvi9PvU11dSA++V1dXUxnVxAIIIyDU1BONutAFA3ZkK57pOFY/Y0SoxkEMAQelKXRlhTEBDZ/C5/X/mjsDPZja3fZ8rWRsRHpG38PkD0+nhTWjIwxyKWncSQPHdW8gQjB0jXnzGnJodlex5NtcXKdtGcAkgGQdDjx8fMUPYdBbiDGJYyQ68m5kDw8x5faiwzB+6wCSAZK55+YPUUXApC4ECsI45G7QHKog1FT4+X2oALxBC9qWjGZIiJE8yN8fPl86R4jfxraNcABopIVIzL2Z3yRvRfe7hRi+ZbVVXUWXBLD88efP1ryay28YIMEUiK+pXlbcLnbYEev9aAO94hSE3SW8e2SshkZ9zzU8s86hZrtz/0isych2Menb1xmjvOO07GF9LKclLe31HPqQPyql1FPKo7QSqD1uZgn/tNICbSzlmvA14U0J3nDza2AHlmqyTG4neSK+fBOwgsyz49WGT8qsYYrPhhaa9MbTnCvAhbYeg3+1LZaYdkX4vKSp0KxECN6AdKpaRL2QWlOqGdLhnLBh75OEOnpseW/Qc60uFQnJlgisT+DVGzEjGM7436ctqy4hHFpM8XDkkGAzPN2rfIKTj6V6W1t/2CAuO6MfsxpUnqQB51eJXLZlnnxgDuZJLaaO7mESIo0OQ53B8duh+5obcVlnQe5W7ac4MjeHiF2J+eKlLeO8vWyuYLc4wd9b+fpWhIVijZsAACt0rZyNqNJrZkKC8+u6iuLnGwDL3VP8o2+9PdtdOoMNsMHbvEjH1Ao1uojgGogE7nNWNxEPxg+m9VVdEOVvoALecsZppsMOSpyH+frS0hVYZJSSSTgZP+eBpq4ux2DBFYn0xWB7SXLxcMENqymXVobSwJQY5n8/rUTfGJ0+HHlmTl0tmVc8WhN4IF7R8bMyDOKL77YQd64acnnpOF/UVrex/DeFKNKq086LrkmdcIpxnAB5+poPtheWsmYUt4lcjbCAEfSuNxPb/Wzt6MK69pEjyvD7WKP/ey5NY11e3d42qe4eT1Ow+VBaNg5AAPkdqjQcZXIPhSMZ55z7YMlgdyTTVjxC5sbhJ7aVkkU7EGgEnqKG2xyOtMhSaPqfA+Jji1m1xrKy5xKqnGDj7U80YJ7w1epzXgfYu9aDi6wE4juAUOT15j89vnX0LcGuvFNyieZ5OJQnrplRH4YFc8bLGzeAJoua52Aix4kD86u2YJIBGmABp5Cr6MnlRtSg1WRgBkUWVSQrINLYFBl/dOPEEUd9zQZOQ82A/OrRky9dmoLBeZA9TVe0Xpk+gJoJLV1QNZ+GJz+VSIpz+BV9TmmKyg/fH+UfrRBQlika5dDIAQo5D1phbZfxSOfnigLKgdTUFkH4h8jTSW0A30A+u9EKIg2UfSpsZnas/CrH/xqkQkcMFTkx5mtE+QpS05yjwaqJsr2Mp/hX86sLZvxSH5CmK7FKwsB7sn4ix9TVuwiAJCiiEV3TFMVilrjEgxuGNHzS8G1xMv+7NM1RD7Iya7eprvpSEQaZ4G+me6iPirj57fpS9W4cdHGADykjI+Ywf61nlVwZ0eLKsqN0sB1oN2w92ffpRwAOlAvtrVvUfeuGPaPYn+LMo1g+1b4trZPFyfoP71vGvM+1j5mtk8EJ+p/tXTPo5IdmAedTUHnXZrE2Z7Tgc3bcKhzzQaD8uX5Yp/8QPyrz3srOD29vkdHH2P6V6LpW6dowenR1N2rZQr4UpRbZtMoHQ7UMcXTHa6urqk2OqKmooERUVNdQIqag1Y1BpgVrxPtTZe7cS7dBiO4Grl+Lr+hr2xrN49Ze/cMkRRmRO+nqOn0zSatDR4DHmajSPP61aorEuyNI8BXVNRQB1RXVFAzq6uqCcDJoAhjjlzNcBgVAG+o86tQBFdXVFAHVFTUUAdUV1dQBFdXVU77CkBx32HKpqK6gZNdUV1AH3wHIzXEhRk0OeTsIzJpLDIGkc8k4/WrIpzrcd8/QeQp17At3jz2HgKkADkKmupDO5CkJZO0kJAOOlM3MmlNPU0pqFAzu94VncXLQ9jcxqjS6uyCvyYMcYPzwflWjnyNZd+huL221fDFOoUZ5nGon7fnQAVeEQaWMrvqcd7sj2Q+i4/PNWEJ4fAzRNGYUGSrqFP1H9KdwSedZl0ffuILZKcwxd+c+Pgv+edHYha5ZbqIXl7LDCnO3imbA/mPiawnlUMZDJZCVDqaKOInUvIEHkdjyr0nF0uJtMcLWhhJGvtV3A69f0rNfh9wU0/6g2AcD3eLSdPhkUmBnRdvOpI/wBSmVtxnESY/MYqsUKtKqIljG7HA1SGZvoMj8qYht+FxGRL2YM0TlV7WcAaemB6beopmKfhqW0txZxx/sdtSIefq2KLsBLiN0HuTDa3F6piXSsVtFgMR0B5/Slhw68uwkk/Bp5pAMarq60gfLnj500bzifvT3H+mPpAKxPNIIlRfQ9T60Gbit4wzJxDhkA8EJmb8tVVti0hq24ddWrrJKnD4UTcxwx6mPlls0xPevFCltbp+3dcJk8h/EfKlILqXsFWK7a8nnOVzHoVANskdB96YtIBAHLHXMT33I5+GPAVtiWjmzyV79BrYSW9ukKMoCjc4ySeprpCz4VpGOT44q2aqDlyfDauhKjju3Z2kZGwPrVqgnl611AFX3dF89R+X98V57jSiK67NFJaWUvnxyFwK9Ah1Su2+2F/X9fyql5FFLbsZFZmAwAF1deg8aw8iHKOvR1+FkUJtS9mDb3FzwC87TnE40yBeXn9/wDOteMQ296vvET6g++ob49aeJQvJb3gZ/eT3YVALfzeXX86yL+2fgNyjB3e1l5BuY8q5nvXs7row2tsSkE59KpI628bKyapDyH8Nack4uZs2sW5PdZeppXitgLIRm5lBmkyzINyKai3tkyaXRmszOAV69DVHR8bqQRvTEcWpFK7ivScG4U9/GIX2BBBPhnrRGNukKU1GPJmJ7OxSS8as1jGSJVY+gOT+QNfUckneh2nCre1XECRxA8+zQDPzpxbSHHey3qc10whwRwZ831Wq9AGdRzYD1NUZwzoo1HfOwPhT6Rxp8MYHyoOR/qAwANCferMbBaJiNoz8zirLbTsu5RfzptyTVd80WDYqbM/ilPyApa5t0WSFASdTb5PlWnikJ976EeAJqoszkwggiT4YwPlVsAcgKKw2FUoslkVFWrqAoTi3vJj5AUzStuc3dx5Nj7U3VMklSRRGbVz50KpBqSkySBSdp+9nH+/9BThpO0/f3A/3/oKa6F7GcVBqag0AQeVQa4+lQflQIUXa/k8Copn60tJ3eIpv8Sn9KZ+tWS+zvlXfSu+Vd86QjqErCK/tZT+GQL9dv1on1pa8JWFnUZZMMPUUNWmioS4yTPU6hS1+3/T433IpiNg8auOTAGluJH9io/3V50PyR7uT8WZxryftSxPEkHPTGBz8zXq68d7QNr4zN/tCj8hW+To5cfZlaQSSc+masEXwFQKsKyNrNDgUwg4rD0D9w/P++K9nXz5GKOrqcMpyDXvYZBNCkq/C6hh861h0ZTWy4228KsCQc+FV8KmrJNJTqUEdRXUG1bMePCj1BsnaIrq6uoGRUVNRQIioNTUUxEGqmrGoNAzwHH7L3LikiqMRyd9PQ9Prms2va+1Nl7zw3t0GZLc6vVev9flXiqykqZSIqK6uqRnVFdXUDOqnxN5CpbwHOuAwMCgCaipxtmooAiurqigDqipIIOCN6igDqipYFTgjBqpPQUgOJzsK6uqKAOqK6uoGdXVFdSA+8yjXNGg5Kdbfp+e/wAqPQoUZQzyYMjnLY6eA+VFqmCOqCcDJqaBcthNAOCefpUjF5GEkhY/Ko2qAo6k1OFHSgYKebQqqmDI50r68/sCaVulETWfMgT7k9SQd/qaedEfGtQdJyKT4kES0DKoAikR8AeDCmAe6m7C1kmP4VzSdnGllw4zXD6JJu+7EZOTyFW422eHlBydguaX4vekD3a1vreKY93s2XUc+n9qBGJPdOWEsXEJTDI2mMQWoySOe5xSkkdxcI7tY8QnC8jdz9mp/LH50zPephhDeXu40GG2g04brjYUrJw8Npk/0y4m2y0t7Powfy+9AmLh0hdW1cMgB7pEZ7cqOeSO9v028advpjKqcOYXlzGn71raMAs/PTjoB6UEwvIPd0Th6CRCWNuofs16sW3+WDzoayQ47G2ueMTIDjsrdSoz1zk/pQgLmxkRjMvAyMc5b26xn1G1WiaWHs3gbhYyQgjtkV2ZvDUc1Q2KRIZ5OCMkY3aW8nP2GM09Z2c0cvvrxQwwOhWKFUyVz18jj501t0hN0rYxawGFWeRg80hy7+J8vKicpM55r9v+akCQ/BG5Hn/eqsJDMEACnBBJ3A5Y+ddipKjzXcm2yxOkEnkKojAKMbk77VMlsQ6Kz5YnPLkKOLdepY/OqIbSAMxJB2XxzUFlAJJ1ADJppYY15IKBeEEpGBsTv9/0oSFzspCrCNQIznmfDPM0dYpWIyABRY10oBRgmRjxobEpbMThts81zJctjVK+pRy2HL6cqW9sii8LgZlABcDlz2rctISkbwdUJAA367V43264hGzRWETBip7R8dDjb7mvAxRnHyLf72fQycXAx7biDcN1SWgQlyAQ4zj08KXu7w3Vw00mHZuZIGPlWc7nAGetSj4GCMivS5OqOavZo2kkUcUh053B0+H+bV7P2JV5YZrhmIXOlUB2HLf1rwFuytcoHyE/F6V6KwnSxnF1Zzaf4gDzHgarHXKzPKpShxR9JUVcCg2hka2iaUYkKAsPA43o4rdnnI6koTqvrhvAhadJxv4Vn2GWR3PNnJ/OnHpkyHjXV1dSGSeRrOPe4n/Kn3/4rQfYetZ1v3uITHwAH+fWqj7Il2OPzFVqz86rQBFRU5rqYhK0/wC4uT/v/QU1Stn8cx8W/Smqp9kE12aiupDJzStt/wBzP/NRy6rzYD1NIpdQRXkoklQZ5DO5ppaBdmhUfWljfw5wqysfKM/eqm7kPwWsnqSAKVMpoZIqDSxlu2PdiiXzLE1VhePznRf5U/rTol0RdHTdQN4nT/n0po7Df86zLmGVShkuJHyeuB9hRxZRY72pvUk1daIbGGliQZeRAP5qp75b/hl1fygmqJawxnuxqPlRAijkoopE2U98Q/BHK3/jj70KSaWRSBblRjcs1NY8hXEGgLNbhEuvhVvncqmk+o2/Sq8TYlYwNuZoHs8//SzRH/05SPrv+tG4me/GPI156VZKPc5csKYjg9a8RxRtfE7pv/qMPpXuOor5/M5klkkPNmJ+pq8hniKVNVqazNCa9h7PTdtwpATloyUP3H5GvH1vey0+Jp7cn4lDj5bH71cHsmXR6Tp6VNVHgeVSvLfn1rUzGLZsPjxpsHakIzhgabMiIup2Cr4k4qGax6CVFJtxbh6HBvYCfAOCfyof+sWpOIluJf5IHP6UiqNA1BrP/wBRmf8AdcNum820r9zUGfijfBYwp5vNn7Ciwo0DUVn6OLvzmtIx/tjZj+ZqRaXrfvOJSf8AhGo/Q0WFDxqpNJjhoJzJd3b/AP3iPtiuPCLEnLwLIfFyWP50WBa4urSMFLieFAwwQ7gZ+tfPryOOG7ljhkWSNWOl1OQR03r6IlnbRDEcEajyUV5r2s4esaxXkKBRnQ+kfQ/f8qUlaGjzNRXV1ZlHVwBY4UEnwAqKKqNHCs5OCxxH4+ZpDSIFtNp1dmf1+lGHD5+wimIASTlnnzxV7aW6cZSIyqNs4/WnReCa3eylV0lwezDDGDjl86m2uzZRx1YlFa+9anAZYkOlT4ipnsV1kw50gbKTufnXNcMOxgiYqsaAv035kf51okN5DJsxEbdM8jUybXRUVBrZmYOrTg5zjFaUdktrbG4nAeQ7RoeQPifHFWS3Q8Xh1EKr5O/iB/xTF9m7uext2QLGuFLHA9arlqxQxq3ZjsMvoBLSMe8xpiG0xnSVzuSzbBR50S24dcpe/tAugAnWDkGuvkZYTGvdLMAfSplaaTKjFU5UZxUySsIzkZ+IjHzqGCR7A6m6npTCRSSHsLZCcbsTt8yaHPDDCNPbdrJ10fCPn1qlbMpJJC5qKk1FUZnVZY2ZcjGPNgKrWkI0ChCoKkYNS3RcI8jPMMnPTn0OaoVIOCMHzrTitrJULPM5wcEkEAHwq72IlQm2lDf+WoU6ZXBUfaScAmuqudZwu4B3NXpmaKuQqFjyAzSLs0jlsc+VFv51VexB77jl4DxoAbbAzQBOD41OnxJqMnoK7DeVIZOkVWRFkieNh3XBB9Kkg+NdpHXNAGTdlpOBsH/eQnSfUHFLTRXt5NruDZrEEBjlCAsreODn9KLxNuxknjEsSpKNWG5lsYwN+Z2rCS8ZV7NuJKhwAEityXXwBOOfzoegNE2N1MQZuMTttuLddIJ+VZ3EbThVkwDK813NsrXEuAP9zeVVu0Vo+zMl/eTN8EbHY+eMk4qlrY3ahBNw62EzHGu4k+gC5H0o7F0PxS2PCrBJi6SGU4aQRl9ePQbAdByq0ftEspAjguwCcKNAUufBRuTS/GL9+HyoYbiNI1XSsMSKSceeNhnwrKlFtfz+8TPxK6kIwXRRFGPLUTyp16FY9ctxSa6E17FbQxD93HdSgAHxIyMmtmxWZolNxJFI3xZiHd35Y8dvvWJBwmOMhouCqo5lppGY4+gH51vxhxDllEEQ6A5bHhtyrTGqdsxzXJKC9hXJGFXdzy8vOhSSQW8WmVhvzHMmse8v5YncWsQSI8yg3+dY8145JyedKfkV0d2D+EJq8j/oj0LcQt1nL6mOBgA9KAvHMu2UXSp3rzHvDa+ZyDyoUs5VHAPxGsfrTb7O79D40Iv7Uexi49ZOwDloweRIyKLGyXV1rjZWUbAg/wCeArwHbnOAeVHhvZYGEkUjIw5FTXastHz0vFi39uj6SB3lB2zy86DfXCR28ipJiTG2DuK8il208KTPNMGZckByBmqC8YIV7Qk/7q55eReqPW8b+EwxyWRysHxS/uzqHbMCOTDnXlbjVrLu5ZmOSSck1v3Jdsk9ayrmHmQOdZKXyb+V46T5QM/Yjzq5cvz3PjXdlk7bGtTgXBW4rxOO2eQqjZLMozgAZq1vR58tK2ZIBRjnGfI5rd9lbI8Q4xFGQTEh1PtkYHQ+vL51s8b9iUiZX4bcAazpEUnjjxrW9j+CTcJt5ZLxFW4kOMAg6V9R41qscr2c088ODaez04qwqoqwrY4EDuXEdtIxOAFNLcPXTaxA88VbijgWTKT8ZC/WqJd20KqrzoCByzVJfaQ3scqaTPEYeSLK/wDKhqDezN+7tG9WYCjix8kNychWdY73Fw3i/wCgq7y3z/hijHzNKWkc7IxWYoNbZ0jnuaqKpESlbs02PeqpdV5so9TSptdRzJNK3/liuFnbg5MYY+J3opC5BGvLcHHbKT4Dc0M30ecIkrH+UiiCOMclFW5DkKehchC0llCvohJyx3JHiaPqu25LGn1NU4d+4f8Anb7mm6b7ELdnct8Vxp/lAFd7oG3kmlY/zEUxU5wD6UWJC/udvzaMMfE70CJFHEJUAGkIMD5mndcQXLzIvqazluoBxKVhKrAooGDnPOmths17K3Se4WJmCA+FN8Q4fDbW4kR21ZxhjzrEN6gPdjlJ/kIqHvZX/wDQb/ycVDjJyTs1jOKg4uO/kYNRShnuTyWJfmTVS1ww704H8qYqzDiy9+P2IPgw+9HVhpBJA2rPuI2aB9c0j4UncgfarLBFjdSw/wBzFvvTsrgOPNCgy8igeZoYvbU/DJr8kGaCkMUfwRovooFXpBwRPvyH4IZm9Vx96qbyZvhtsfzOP0rjUbUD4of9n5XF5crLpUuqsADkbE5+4pviTZuFAPJazuFuI+KwH/5gZPyz/wDzT/ETm7PkAK5ZL/VZ6eJ3gSEbhzFbyyZ+BGb6CvCHlXtOKuE4Zck9YyPrtXi26VGTs0xkVNQKmoKJpzg83YcVhfoW0H57frSdcpIwRz5ihOmDWj6BUrzP1oVtKJ7aKYfjQN+VFHMH5V0GSLSSCGFpCM6RnHj5VNrw21KiWS3haY/G+gZLdTS9xIhnhgZgMtrOds45D64+laFo3eZfnUOmaRtBVgiT4I1HoKvpAqssyRuiE5eQ4VRzPjRKRbTK4rqmuxQIriuxU0C8n92tXlxqI+EeJ6UN0CVukFNVNDtc+7IWftGIyzDkT1otCBqnRQ0vf2q3llNbPykXAPgeh+tMmqh1LFQQSOeOlMD5fIjRyNG4IZCQR4EU1Y27uSzwMUK7MV2+taftRYaOKrLCMpc+HRhsf89aw5Elt3BOVbmpBrCS9G0NfdWhm8tR2RkjXSV+IeVMpw972VBrEdvEoTVjc+OBQ7OSW4RxNgRgYaU7Y2/M072kZtfd4nYMwY8t8E/rmoTa/I3qMtr2Ji/uhPIlpIBbxk4yi4Cj5UeK5nu7cSzRxAq3ccLvVooS6iFWQZ6tt9qEfeoWKdrrAbDK7ZH1pOdotQcWmy5uboR5hGpv4Qg+fKhpJLOxMlmJJVbSNK5bbzFFimjim1ZJG/L0qtncywSSylwNR2UD9amMr02VNO9AhG8bv2inUveUOd1PyoEiZyWjLegBrVmvbe6Qxy6RORsyjP1rGMN1MUMcLqx+FuQIoaV6J/FBLWRoWLRs2nkR0z86PdvrIZ1AYE6QOeNqiJZLcaXYTOfhONh/X7etVmKRAtM5dzuRnmfOhpjivYKUuLbBkCITuM7tWeytz0kD0pl5y+0YVcdMUF2xsx1N+QqosyypN2BqKIFGNTnHlR4yhjwvLO4xVOREcTfYW34Le3ChwgRT1Y/oKYa3mgjCzDcbZHI0oWujJiCeTfkoc072tx2fZ3N1rxzUkADyzSdNGkI06oU4kR2EexB6DkPM1nxl0YFGYN4g71oXsE88naZQr0wTRo4Us4g2P2h5t1/tT6RDg5SPtIGBgVVnxkDmPyqNLP8AGSo/hU4+poNywSPQpxvvVGIA7sWO7NzNTmq6fEmpwKRROoeNdq9a7YVVpMHSoy3hQBO5PKozvjbNR3j8TYHgKW4hKsVqw92adGBBVcDH1NAGXxWSR5cXMMShc6CrZzgE+XLY1jLdXUAgEMsUjOp0xogLAdCzYyBVJHM5aDg1oWdiWlJwUQnz5dKJa8PFpC9xdzwGTGZNZD7+nWmxFJIrLtHaS8urq5f94YRgN5Z8K62gG8nCbPTIuR27uSF6HB5E70FuIe/xtFc3k0cA/DHEMyfTAAp26t4YLCKyh4bdXiN32QEKQT44BoQjMaG5hL9vxLhkDZJZ2kDyH6ZPyoPvFksmtuO3ksgGD7tEwJ+ZIp4WNzEmYvZ+wt08buXVj6kVMPv4OhOL8OttRxosoA5/9q5/OigD8DtbNpXvEt7xWUfvrphlh1wPTz60xd8YaR9FsimIbESR8zWlbWrw2Igmv5JZDnVK27nPQZzigycO4eoy7TE+PbMPyBApybqkdHjrHCXOat+jJn4q4tBbx/shjS3eO/psMVh3Ee3Punr4V6C+4bGyE2czr/tlbUD8+YrD90vMkJA2M4K9Kxkpez08WbE0+OjKk1I2H5ryPiKXnJZgcmt//wCH+I3RAjh+prm9juMiMYhhcAZx2g1Z/wA86rHHds5fLzLjxizza+tXJOMDrTV1wy9s9Uc1rNEc76lOPkeVLwI7TAFeRzWz0jgguUkjUVtEMaeAob78qq0ozgbnqasNxXJZ9AqqkBaRlB21eWaRnutXdELA+ZrSZQaWlhDbkb00zLLGTWmIBH7Ptm06c4wOdafD+IXHDZI57OTQzgqSVByNtt6SeDfJG1Q0j6BGdkXkKpS+DieLf3HubHj3+pNF20QEke407Bj8+VbQmvG+C3Rf5mr5rwP3l+IqkJYLKwjLdAx5Z+h/OvqqjYDngV24cjapnjefhxwalDV+hcLfP8UyJ/KtcbWVh+1upW9Dj7U2AagkDmQPU1ryZ59GXeWsKmGMrrLvjv78t+vpTkcEajCxqAPKlryeL3+HVIulFLE56/4aMvELcLsWf+VSat3ROrGQuOlTppRuIj/07eQ+pAobX9yw7sUa+rE1NMehubuxv/LSvDRqtEb+LvfWl5Zrp0btJlC430pihxo6RKnbSaQMYzj7VSWqJfdmo2BzwKC9xDGO/Ki+ppDsUxhgWB/iJb71ZI0T4FVfQYp0Khg3sGMqWf8AkUmqG9yDogkOfHA+9DrhQHFFLaWZIiFjQAsx7zeZq/a3JP7xB6LVY/gHnvVqYUV/annPIfIYH6VXslySS5z4uTRK7NAAhDEraliQHxCjNcP+4Y+KD7miVT/1fVaBFq6uqKBnV1dXUAVYalI8RiohOqFD4qKtQ4P3QHhkfQ4oAJU1GKmgCDUYqSMV2OVAUdG5iuYJBzWVfoTg/kTWnetm7k9f0rJmUmJgpwxBx61oM4lPaKdm7wrHIvus7MD+xxM3j7Y4S4/iZR+ef0ryLEatzXp/aVv+hiT+KTP0B/rXmtJxq6E4zXPPs68a+0rkef0q8aNLIqKpLMcCo0sBkg48cU1w/CyyP+JIyRWbdI1hHlJITJOOVWCsQcDYDfyrQtuGa4o5Lh9Pa/Ag54/iP6VTiTRRSC0t/wB3Fszfxt1JotXQ3jajyZvezk3a8LCE7xMV/X9a11G1eY9l5tN1NAT8a6h6j/mvQzTSwjUkJfz1Ab1uno5+NyoVuovekmlLDCMVT0Gx/PNH4XO6RDXsIjgsx6f8V0M3ZRCKaGSPSO8dHd9ds4oHFZ1gswsIGZzzHhWUtPkjtx/dFY3/AENbhqds0l/KcyS7KP4EHJf6+dOuyopZyFUcyeQpfhcfZcOgj8E39etNGriqRjN3IpHJHKuqJ1dfFTkUnxXiAsIAQuqR9kHT1NK3gWC4E9lCUlz39JwD6r/xSd8EvOMwF9KIEDOTvpxnn+VRKTql2bQxK7fRowXxCxxyZZ8ZkO2cnfAH+bV3EpYJRBHIGZDIGbSOexwPmcVg3CGxuZBbzsempW5g1PCrl4JjJI7vEilgGJ29Kz+p/tZr9FflE2L+7R290i1xsgyzo5Xs9uW3P7Vny3tzw+WHvSSxt3j2rklh5A8h1ofDUW6uJb65BaNWyEHJm8/SqcbkSTiHaa+g28Nv60Sm+PIqMIxfDs3ZJve44vd2GiQZJ8vCs+5u4u2FortHbqf2xAwznw8h4/SkpZ7OGFopFMncwisuNOd81mKi3GWSRuzUZYKCTiiWX0KGJI9JdGDiOi1iQAoC6MTpC4GP1xXnbkPE4iKKNT6W1jYCtHhWQwMbup5Rgb58cms7iRLXbQwjKocDfOPGpm00pDjHjcV0dPGk0axICkf4FXb5mgSxiGRHDEmMBVxnlVXnaaZSF1MuyFMjSPL+9HyhBYStrTmUIwD4UlTQ330UWSZCJV0kK3lsfQ0VrWQcNW7eWNBcS4VS3fYDIzp8M1C8TuFnklibRI6aO0VQCBjG3gfPnWcA0IMjkSMxwA2+3U1EaHJyoJrXWySYyu24zvUwGKa5WORzECPi57+lRJl4w7KiAcyBS8cZnOs6ljBxqP2FVwVkcpUbEnDHVO0gnWbHTGDWXatK8oVSV/D/AJ9KeXifuemMv2nTIrPluwsjugwzFgCPNic/Q4quKTJttDEs0drJ2QLSSscMQMkUKSFZLghmK4GSM7+uaTy4UtIqEc89aIxjaLIVlKjODk4FA22FD2+0VvAZnOwO+/pVby1a0CGdk7Vt9CnOn1qtvK1rLqBxsQfMVEi6mMs7nUeS+Ao5JqyeLeiscJkHaSE6fDxoqQx6ttQJHwgZzUBj2QcYxyGd6Lb4I7a6fEQOEjHxOfTwpK2ylFIvbQtqd021Dd+oHl4etcZIIs6YxI3LU/L6UK4v3diixBUB+E/rQZZ3xp0RqPARjP151TaXQ016DQSThj2r6g3IE8/Qc6NNLqwRzXbfoaz42j7xkIxpNQs7mMIzasnJzz+vWpb0T0fco7hSrbhtIyGU5DDxzSCyPKzSODuxwB0od5wuJWV7aQQXOSxmSNQxz0OAAR6iloTLCix8Qd2IO0id1T4bD7HNbOvRyputjzyhB32Vf5jiqmVyDoRm8yMD86tGIVy0SoNXMqBvUhtTkjcDapKICTH4pAv8oyfrVkjVc7kk8yTzqxJxyNI8R4nDYRM0jLqAzjPKgYxd3UFnC0szBQBmvI3fEX41ci3luXsbaT4BoOZfnyA+9NQ21xxWZrziTpFAgzFDLyY9C4yNvKry3E6rPPdtZGFlIjkiwWwPr96YjNccPiTM1rNhDpTGApA5ADrVjZ8RlcTy2UfZZysMx0qvm24yaizVbt0uruSYJGALdFGSB48+dRItrdXJkThl9dMNss2kfkDSAdsjcm6AF3w+NV7zx26qTgeeD96HJbDiMr3C8UvliJI7OMsi/n/SmrC3EVu7Hh8doznGkksdPnmrysMdAB0FV6GlfYnb2VjZkmGBS55u/eY/Ojm4CrsAPDagSzIg1MRWfJdgk5Owpci0jUE4PQGhtJGSSVzWU9+qR896EL8E90GlyKNf3pR8KAfLNFi1yuqruzHYVipdbEnxrW4FIzPLMx+EYHlTTsTdKz0KEKqwRDZR328TTkR5Y5VnwMOyXB5jJNMh9KZOwrQwHmZAvfxjzrF4pwThl8pLQLG5/wDUjGk/3qs1y0kmFNNRo5TcmihqTi7R4y89mLu3y1qFuIx/D8Q+VZDq0blHBVhzBGCK9wbowXjQSHHUUj7RWYu7JrhVzNEM6h+JeorGeJVaPRwebK1Gf/J5E1U1AapJxsawPRKxhCwMi6lB3FLyQHpRypzlTkVdWzswoshxT7M+KS4srpJ4SVZWB2OM4Od69/w7jMnEYtSSLG4A1IV3HnXk+yDDbDDwNWU9mNcTFWToNiK3w5XGRweZ4UcuN/K6PZlpm+O4lIPTIH2qnZJ1BbP8TFvvWHZccZCEuu+vLV1H9a3Y3SWMSRsGRhkEV6MZJ9HzGTDKHZSNEWdtCKuFHIY8aLQ4jl5D/ux+QonWqM/RNQaiuoEUnGYHA6qRVqpMe4P5l+4q9AHV2aiuoA6urqimIrDvBGf9o+1Xodt/20X8i/aiUCOqKmuoArVD++X+U/cUShN/3Mf8jfdaBBK6urjjoaB0RXVOk9AfpVuyf+A0DoHiqQ8nHg5/r+tMiCU/g/OlkimNxIqMgydRBU+AHj5UA9BBXVb3SZuc+n+UD9asbIMO/K59G0/agnmgW9VZ1Ud5gvqaY9ygxhlLj/cc1ZLaCP4I1HoKYuYl28ZOzhv5d/tVE7b3WGaF20qNJHocZxWloQfhH0pXhGpYZEkT4ZDgMuxBH/NY5oconZ4Ofjk2tCfGcTcPiuMA5OhB/uP9gfrWDcnTNojOBF3QR49T9a3OOuqzRwwqF7P9sVzt1/p+dZh4aY+Gm8ll32ATG+on+lcTvls9alx+zoiK4Qr+2kXPkp/OtGykspVWP3eN5AQFaNdJIPMHG52rDRGkdUQFmY4AHU1qcNjuLK6EqW+p1yMt5+VQ4qLtG2PJKapoZuJYPeVlhXs4k0jTknAGB19KxBHJctLNgKuSzHoOuKfuw4maLTo7XJAbp/m9LzqyWqoo7gPPGM1MHT37LzLktdIrwqbsOJ275wNWk+h2/WvZy96WKPpnWfly/Mj6V4j3ebsxIFyp5EGvQvxVtJkQAM8S94H4T6epNdCyRitnF9Cc5Uka00yxyxqc5kOBj/PSlLuJbi+gTSSI2y56bjI+1Za304uY3vCxXOQcYGPKnpLsR2bG3dXlJLZHTI3JqPqqd30dC8d42mux9bt5JuyEvZW8felfPTwz51oTXyQQNNMpRAMqD8R+XSvHWs0zMyxyHtOa58fEedbNnIXtVu7pxJLGuUizks42BI/M+o8KUJt7KnijGl6NizlFxGWkdHdhllVgQg6D1/zwrIu5rd70EzqU7y6xyC5Bx+RxSPF45LSGHs3bXoJnOe7luSADr5eQNZUxJtEmllzMxwUX8I8/OiU38BCCu70aPvkeXCNoQ8kO4pad7wtLFLbtHFIgAcgHSCRvnpSrAo0T3MWhH72lGw2n55H5VVpopYhBFBqIfuSt8WMjnis7dbNJNehq1kisoJ40Ytg8wfjPp86Ua81sW3D5zqJ5egpKdjGDGhweozmjcPXTC8shXPJS3Tzqa5OgUqHJ8RWwdhJ+0OGZ0x3uZ39MfWg214sFyCk7IuRun57HY9auLmK5kWF5zMVXSFJKgeg2Gf8AmqGwKSdnKqCJPhI5tnfc86rju0O21RqWN7JLK5WJRkEd04G+MnHShcQihiupZ+3SNc/uwvwgDG5zsf1NLPdiziFvZYGBqZs70iwYEtKBk+AwPXFFpomqdEmeF2/ZSKBnJJGS1MRyQaOzSIeenO/nWFKZYp3WNtSjyo0UmlNRLjfZeYzU0w5JaNZog2lYyfQ9aBPntVWTugEAHw8aHDcXEQZxIVTTnnkfMcq6W+EuGQLDJ5nY0Jewc70aMqRRwl2wQF2yeZPIf54UjECmNcaEHkAME0O4eRreNBqdt874UD16fegS8Q7JhGgZjyLY3PpTv4E3vZoy9kAAFCueSk5Py8KTaLXKcazqOSoOxNKRgm7WadmHUhjv9BTsKme4PZ6uzxq1EY286VNjU18BltpOyBjjQsepOdP96WlVomxL8XPxqbq4ljYIrEDG+KVEzgN2KBs7kvvn9BV2vRmxi3mGiSMqCsYypPQf2oLSbFsjbnvUxEzITIiAA4GBjJ8aG0qLIpY4jB1aR+PH6VLdsfSs0re20Q9rdMEjxnSem333peYxs4aAYGeRoE1y92QzSgkfChGAPTzoSyv8JbTvz5U3+wJo0DZyuodCoHUE4z6Ug9wscrLIuW+El+nniiw3nZHJRZGP8Q1UrO4kmMjKqAnOOQ+VANjE8Qdh7rOpSQkYA+vP5UnI7RssYkUuBudOfltV0WHtdiSfBRyo2qKF9QjIJ2DE70yWfagrk5kkZiRvyFToUggjIPMHeo1H+E1xJAycADqTVmYIW6xuTbuYz/DjKn5f0IqXuEtUL3Tqud9uRrKvuPwQDTbt2srnACjP/NYcxveIXnYOrTXJ37ENhYx4uRy9B/an/MX8jQ4j7TaspZjSM41EZJPgPOosOGTPNFc8RB7RjmGF98H+N/ToPTrWjwngMNiwuLgrPdY2bThY/JR09abhliWOS9ndVV/hJ2wg5fXn86LChDjUyQwLDJYGePONeoDGeZz0rzSxm8uhHYQhbOJtfZuxKkA7k5PKi8QvzfTSIk0xty2ArOSZD4Ach61o2fC7WPspJe0knwdSqO6gxyG3y+tIAk8z28R03tlajkuykj8jWd2sc0ypLx67mdyAFhVlBJ+grZlh4eigzWiADkZnAH5mqx3NgYZXg9zVYx3mhw2PoDTA5zFbW6orEhBpy3M461i3nEBkhW3NRxfikc8CPBIrqQQSqlRkc9jvWGrZbUxqZSLj0HmuZGOTkigSzMUPPeuMuslRz6UtPJhNzipKO7TmGNR2+k7Uk8/hvQWlY9aBWaT3ZGMGtLgnFxHO8DtpEg7pPLV4Vi2XDb++V3trd5FQZZuQHzpKSTS5U7kHBp7BrWz6nwm4EtuwJzoODnpRru9OOzrwvsrxmSDiIguHJjmGkE9D0r1bPrunTmQeVaJ6MhuA98MelaMco0Bs86QfCoCOWKpwi47WSeFtyhyvoauxC/tJbyvJBeWpAZDpdScZB5UW1uQkWLjYEYING42ry8MmWLZwNSn0rzLXtvFHCHikurqTZFDE6j6VSS7FbEuK2sdtfutscxN3k8h4UoAcbmtu+4NxMJ7w1ksQxnQswcj5c6wmclsEculcc4tM9zx8sZwW9kjA5bVYMOqg1TV05VYZqDoQRGwcjaisvbQSMAutBnzI60DOKNYuPenRt9SHFOPZOT8WjN7TatfgPETDKUc/syQCPDzrCLHlTFm2MnxNdE5NK0eP42NTm4S6aPdw/u8/xEn6miUCxkEljC/+wD6bUQyxg7uv1r0Iu1Z89kh9Obg/Wi1dVO1XoGPopqQzt8MLn6VRnZD/ABIPFv0NWobCUzohQKdyMn5eHnR1trj8TRgeQP8AWgVlOnnXUQWb5y07EeGBVhZRg6i0h8ixIoFYAkDmcVRpYwD31JxyBzTgs7cNqES58cV12iJayEKBgUBYhFKohQBXOFA+A1cNI3wwP88U9bKBAuwo2KBNmcqXLD90q/8Aln9Ksttcn4mjHop/rT+KkCiw2IrZSA5a4Y+WB/SojtES8XUWbu9WJ+/pWjilZcC9T0H3pXY1pjKwQI2RGKgomdkFWJrs1Jo2Vx5VxqTUZoJINIINPEnHQj+taFZ8nd4pH4EH9P61USZdDmK7FWFd8qLIopp3qTGfCiRnS2aZLhl3UE+dJyaLjBNGbIoKEMAR1BFZtlGrXs0Dg6SodQCRj6etbM6js3IGMA1jxZTi8BH/AKilT/nyFKSUls0wTlCaSZk8bdBxSRWBKqoXnvy8/Wh8QlPYRxg9wsW+eKji0c0t9dOkTthyMgZ5bfpVba0muljWYdnGgJZsb6R4V58/ys9/Ff03F+wdrNbRNqmikkYfCQ+kA+O2/wCdNrd6gNEjYG25NKT26a/2ZKLjkw3NMNEHkcoNMSEADHP/ADNZTal0dGKMoXY1a3UhkJZy5RSVEh1cugzyzVZpYrkjseZfGgjGkn9KHLZPGA8bBlI2Ybb+HOhxzIEj2VpYxjXn0x9qTTqpGl7uI5c2GuBEXfTzKkZz+noaxVaRo1DfDk7+NHurztbzJkeNXOGcLyB8BQJDbrKi2zM5/EWpyVkcqNOTtLqy/eosa92Ndi7Hl8hXWMZmTVqJVg2MDc4xtj/yFLGCKJu8RNLJud8hP9o8/P6YpUN2U6NFlWjbIIbJp6T2Fya0NSSm0uCIbjUrKNQI0nfflv8AWmbe6jwrkEAnOQTnHp0pFoo7yVnzpc7kHYk0OduyjjGrBO2Ou1La6BNf7gl/O9yxBOgB+7oIwgHLaut5Lebu9sGGRnO3+Ck1mhCsbiJm2z8WKCzQq47FLiPUmSJFB2PUEUqvYc6GOJX3vNzJcFmwzd1QeQ6D6UutyY4xJoJYOD5EVZextk/burHHwilpbhpB3BpXkRgCq7MXLZxuDJJrbOXJ+tT7w5iJGw5BTvmlo5YySBG2oDnqzvRIo3dshnfqVUE0UJSZfW7KNcakDmF7prR/1NDZqRr1jKqHbUfmaTkZ44tccDAqd+0XG1KMQ6KyMVViSdj3eVKrRSlxeh61jN/PpjL9p/F0BrbaLh9nGDeTe8TsNOx0gk+QrNlS5tbDMYS0Rv8A5rYdvkM/nWRCdUzGdzqAyCT8WNyORyT98VaBujSe5hMjqkPZs2QQfD15mgFV04JK5/Cx2Pz51YXMSR97S4fqwpa4eOdVQuqYOxXG1SDfyFtJOy7ZGTKFvhJ5+NPK/DQgZ7cFCN33OKy1idUYGQMTv4ZrkkLKR2OIyO8C328KOmSmalxb2rw9pYSqdG5j1ZIHl16cqzWdWI0jDKdsnFCiKJIFT4ejGjSTargINEjEd47/AHpvuwbtF7UZm7OIa28F5D1NEumYSyiWRVYAHSm/yzUQukUZigkddbYcouX8hnO1RcxW8K/sXkE2rfJzkdfKlYehZO0cEsWGeWV50e3eMyPExZkP+4gZqVkgZMTCTONyuN/tRreW2iwsNuznOQzkZFFL5M+bXqwNy3YoY1wwHLpgUoQrnUyYYjoxpu8mGTqUBycAZ2+tZydpO2GBYDpnlTSLbHsRqpCtp8NuY9aHL2jZbK4823NVe2eEBnBKHng7CuVXmGhSFjHUjf8AvTqgt9FUXBLIHfHMgZqpPaPgthRzABOfKm1DpD2SsCfTFBFvKh2Go+VLZLaXsm2QKSSjaemWo7mBgQxAc8yTjHkKo8c4iAEPLmRzP50mTGcjSM00mPno+oS+1rSFY7O0LyNyXdj9BQZ4+MXidtxKYWVtnfWd/wD8R+tIW3tbZ2duFsuGxwbd7cnJ9ds/OmvcuLccih4hctbdixzHA7NjwGwG/wBfWqsiiLC3a5YpwVDFETh7+fdyOugdPl9a9Rw6wtuG2whtUO+7ud2c+JNZklxxLhamS6gsHj2wsczIfDYEYpO/9rGMTLZQnWBlmHe00DNzi16lrZtrcIzYHPBxncj5ZrzV7NxDjiBbOAR2id1SzaF+vX5UXgVlDxS6lu725S9EYGI1O2rnvncgbeXPwq/FZeDXV8tvd2lxEy4JKRqB5Zxk0CM2DhF5wuQyTcTtLVivjqYDy2+1VvprJcQ33Hbt5Y8hhCjEt13zt4beVa9yQIGtoLF7jsl1Qkys+TtjYj+wpUR8aLs8XCOHWyk/vJUGr1JLGnVAZEf+iZ/6fh3E71z/AB4UH6ZNbyRTQ8OjHDODxpJJ32hkZmA8MnbehW44tLOsU/HrUZOTFbsoYgcwNIGKX4tc8KuJ2964tdA5/dQI2/12poTKcSsOK3sCxXacJsIwc7MEI/M1mvwu0hj7/HbQsOian/MCjRxcAzmDh3E7tj/GQgP0p+GByv8A0PsrGh8bh2cfnipaQ02jJt+C3k8QntNM8eSAy5GceuKUvuFcReYAWkmD4DNfQEPZwKgSJMDBWJdK564FU1VtHAmtnNPynGVJHhbf2W4jMR2gSJfFjW3Y+ytjbspuGa4fIGDsv0rdLYGahZIoS09zII4YlLOx6f5+tX9OEVZCzZMslFasS9rL+Pg3s/2FuAkt33I1XYKo3J+wr5jpzyra9quLnjnFWkjYC3hHZwDHNfE+Z51i6XT4ht41g9uzub9IJCjGVQuQc5z4V7LhfEWeWJ5XHar3WB/GP615i0QpGJW/Hy8qcQ4IIODWMpbO3F4ylj+7tnuZ7hIkkV/w7r6Vj2nEVi4nHMuyk6X9DWdd8X1P7kwxKiJpc/iyoJ+e9BWRXGCNL+Hj6Vcp0cLi0z39z3lZQMhhXzaK9PDPaJZn76wOy1st7QXCWqRdmGdF0hiefrXnrhLi9zmIdpksWHWn9SxKLZ63gN/w68v5m4qTI0rZjkLHSB4eVOcc9j5WDXnCW7ZW3MTHvfI9a+eJa3HadnoKk717XgHtNd8KjSCbM0CjGlj3h6GpclVSOrBiypuUDz7RPDIY5UZHU7qwwRXcq+nNFwT2pttQ0mUD4h3ZEryHGfZO/wCHFpIgbi3H4kG49RUOHtHbj8mLfGWmedJKnyrtTLPHIhIYYwRUvvkdRS0shjwx5AH8qlGmR0hZnySSeZ3pq3B0AnkPzpJirkqNmz9a1IVG2rkPHrWuRnF4Ubk2eu9noY5+GBpkDFXIGfDAP61rrDGowEGKzfZqQScNKYwUbf51r4rvwv8A00fO/wAQVeTP+ZUKo5KBU9KtjauxWlnJQg3e4oo/hX+n9KdYYxSkXe4nIfBR+tPPzFNiSB4qcVOKmkBXFL8R2sZT/tNNUrxT/sJPQ/amuwa0FgH7FaJVIP3KelEFJiR1SBmuFXRQTvSZaRGjakpxi9j9P1rXSNcDAOaRv4dN1EfGlGW6LljaVndKj51bFQQfCmZkV3yrt/EfWu2/iFMR1IXZC3sLeJx9z+lPFl8T9Kz+IY7SJhnY/wBv1qo9ikzQrsVwO3KpBPh+VSIipyxFTk+NRg53JoGJ3FzPAWSQLJCy/EPiXPj5UlcI47KZMBo2286aupo/eEaJlLqCrA8iPCg3q9paMsf7PAyNRx9MVy/VduKZ7K8WNQySW/a6sq9vHHPqa1d2xvLjBJ6nFJ3hgSQOA7MuWdHOO7jetGPiEc+sOAmjp1I8aBeGCVFAmTW20YyASfDyrBpPpnesjjqS7E55ewnMJRTKd+zkHdG3Qg/1pWVo0cL2j6wup08M1LyjNujqWYsNL7kgYyu5G+2x9KFcWjK6zKwjQ8ttiRjAz+dZvukaK6siedpNQlIRAV5csDG2PlSbRftGCSLjljrRLmcamKjT2i6NO+nb58h+lZsc0ccr91d/Df6GlJExkkxxbaVcskgBIUEDcE+O9SAYWESj9oQDsOeDtXLI0LgZKk7AMMEH0NRdSyRQvcSDBB0IemfGhtUO1ZNzdLbSjsQqSJzdTjfnyOaz7m8kuXYsilidm5Adc0OImQtIYTIvM4GAPnS+rvYORkZ2qjJyZpQOyRHtxIxYfsyj/Xpn6EVE0xaQE5BTYazvjxPnigQXU0NvIsZZEfuvpYd7y5Z9ceIocSFoj3gpJIU5+tFCTZe4Z3jUQoX17nHhXSXD4WGRnPZppGdtt9vqT9aiS3ngUFHUgsU1LIDnHlnPXmaHplLDtHZiAdi3lRQuWxc4Ldzc5586KuoQsOjbbjfPlRTbSxNs0TEgggYIXI/oan3NUXVPMFxuM7U6JcheWCSHTrAGsZAB25UPU6g4dgCMHB6eH5VrDhxkkiNtdLcKUBkcjCxk/hBzuefQdPGr3MFhbYW4V5WG5AOKHopJsyoZmRR2UjkgHugcv601DOLFhOY1eY99FJyFJ/EcdfLp5U8slrcxGC1VolGM4Xp5kVmTxFHLFtgSOVSnbLqumMwCS7kE1y5mlb+IbIPsKm5jt4dpSijz3Y+gqwmEMC5Pwj6mkzaSz/tmGQxzqxzosK+AZ7OaQhAqIMlS525eXiR9TR4o4YotTKrnnk8qX7ARswZ1wdgN/wClUuNosFiVU4GKonoLJLG3dbKg/iGBRFEeNC628zjJpNFV30tyOK0I1MTxgA4XGrbnQyb3smO1Hx3TjPgoqpiSS4CwRHJ5DJ3rSuUguLdpUKqUGSQKVt3ECER96V/jboPKl0W42wVxGlo4aUjWx5ISceeTQpIijhEBI6Va57YMuMDV161XtxrQbFkUjI60LaJlpgu1NuzalDMOWBV47mW7JUFY8DpjJoRhlJJbByM5zyNBVcNqLkHxxzppUTr0GER7TTNkY336+lGkUWzAx5dh8WkZAqkfbyadAkdfHGRV2ikiGTrQnl0o7C6HbW4inXTjBPNTST2rLOyK+nfY+HrTXC4VndzMdTJyHj50XiMXuqCeN9ycaXO3rT3RrqSsz5Y1h70s8hHkcZoYvnzhQAo5ZO/1oJSW6cnU0jjoOQ+dMxWIQjt3XJ2wN6kmm+kGj4gmCC3eUcuYPzpCZhLKZcAFuYG29aFzZLbxgxQK2RuWJNLRrHEmuWEyFuWW/SrdmSUU9GikUpIEdrK3/wBsnNeptZ/aW5SKK0s2toUXSqhNCqPHLb17nNdqoKPKRezFxKwm4vfFzkZSMnffqxr0dnZW9nCI7WJYk8FGM+vjV5yOyIxnJH3q5cAbmkBm8V4PbXSGaNBFdDlMgKv9QR+eaxoIvaC0iPbXlmYjtmdgG/8AyA51q8XtuH8Rj0TygeJQDUfrStvw/h0Nq1tH73LE3NGY4/LlTEYENx2V+Wk4tLCuc/sP2iH1wd/mKn3fgbyZZ+IXjfxKowfqa9FHacPgTu8MRAOshBH5mhy3PDh3ZU4ap5DDKW+gBoASsVtIbeSez4XIj57NQ795/HptVIf9ad8wcAsYh0aRNTfUmi315Z8LmCniE8BA7yxq0hPkM7AUo3tREykW/wDqNw3TVCmPyNP9g/cfW29p3bLXtrbr/CqqMfl+tXTh19FKtxdcWmn0nPZqWIJ6day4uI8bunPYcMdEPIyhz+oFbnDfesD36CGKXOrEakbdM7nzpwVyojJLjGyzFjgCNj8qqUl59lgeZxT7ygHA3boBVNLM2pz6AchXWmeZJiXYTkajpQAcjvWJ7WiJeE28E1yY5JZC7KF+JR1O/Tp4mtzjXFrXhViZrg5c/CgO7V894xPe32jiHE+482exQDcJ446Dw8d6yyS9Hb4sNOZjHDMVTnV4+0ZxCD3m/KhSMNwud+ZPOtPg1uMM7jvHlnwrnlKkd+DH9SaQ3DCEgETDIAxvQnhaM5QkrTpAFCJxXPZ7XFJUZ92SvHCx6BP/ANBT6vHKOeDSl6ur2imXwOPooojwkHK5BrSfZyeIrjL2rCyI4OSM1Edz2Dauy3HnVY53j7r7ijYilGR3TWZq/GxS6VFGKXLRMHKGPOBjnmii3J/GDQHgdO8oyPKoWVl2bIFHZqko3oftzPayrLbzGN15MrYNey4P7XAqIOK6QeQlXkfUV87lil5rISDyoBhm/wDmH61UW0Y5oxyKnE+scV9meGcZi94tysUrDIkj5N61869pvZ/iPC1Xt4tcWrHaKMgj9OVdwTjfFuDTA28uqInvRPup/pX0bhPtLwzjcYt5wsU7DvQS7hvQ9a1TjJnBP6uOLXo+NWsZaUZPcBzWxEqkjcKPvXueNewdpPqn4URDJzMZ+E/0ryU3Br+1cxz2jgjwI/rU5Is38SeOMavZ6H2V1G3uAR3QwwfHb/it2vM+yaOlzcjJCqoDodiDnbb616eu3B/40fP/AMTS/VSa91/YjFdU11bHAI2Y1X1w3+7H5CnX+Kk+Gd55X8WI+m36U63xGnLsS6K11WqKQzqU4nvZsPE4pvFK8S/7dR4uPvTj2J9BoR+yT+UUSqwj9in8oomKGJIgVdc5qo9auBvUstIaikGnFI8RbNxAQc7n9KOcdDSV2T20OfH+lTGO7NZz+2i7MeWTQzRHNDatEc0iKg11Qaog4mlOID9mhHRh9x/SmCwHMgfOlb+RfdmwwyM9fI00JGlDvEh8hV8YqltvbofKgz3c0D9+zZo/40bP5VlOSjtnThwyyOo/3LSz4u4bcDJcFmPgN8fnR6UiKXNwtxEwKmPTn0YH+tXN3EboWuTrPPA8s1nHJ2386OzJ4m4wXpWzr1UeHDqGyevSs4FbYElyqEkHxHhvTXFLpYI02zljnHQDn96yrrN9ZhYmRWZgd2226Z8anJLG3T7H48PJxpTj+L9F/eY8K8qF2ZtLqNsnfFLcThsHiV4F7MhgX7ukoPGgGSWzEZnjxJnUOoyP70K5umvHZ3ABb4tA51xSdNo9njGUVN/Hv/4NF7eVY+yl1lCMtryT5+v9aQ4jcOF7ZVBjQaY9/h+VEsUhiM/aI40gEtjkMjI8+lZssrXCMMKcEk4xj5flQ07sltOFB7ezhuolE7sHI7o2wp9Ky1RIbjspCV0tpbA3FNW12ROxkYLGx7uTjH/NTf3IS8SVdCsw72Rkk8v6UldidVoNJonkEuG7KJQrYB5b450pc6JJdDSHQpB58zjoPGmYOIRxJJHMRIZB3ivgRy9aSxIgMWQQQDr8fnSSYSkhiO4lI0WsSogBAZzv64pWWydFV5dODtrHL6UKazkhhWTVzPLH61WKUTMVCnurkYHPFWlRk5OSGFEejuch+JuVXsIPfLuLsrlY9LqCGZUITO5Grmee2/MfJO7nKAQxjGB38jr4UqJn6Y//ABFUhW/Z6DjVpbcLu4Rbt28zZJy+dQyd28DyG223Kk72SWd1K5jizgKP1NILI4x3yXPRQOXqKvHqMqd5juDljmhie3ZdJZUB0tso6DrQ7gZm/Yu0qHB1MuN8b/nTksIGuWaQkZ6nJPlSyz2+snS3LbAH0oD0XRbh7cQdsyxjPdXkfXxq0UUESMkw7Q6TpOk90nrtUNfRovciLfzHGKG08s5CMwUMdlUHH9aOgXJlAHgbUkuTju4JBNPMJlhJlCtE6n1GetdHYhZP2skbuB8H+HatCIyuT3QqgYK1DkbKD6YrZ2ysFLqGXdkxsBnpj5dfGmbqUxLpjTtJiNvBRVZyyONP4RyHIZ/WlHugh04588c6jt2aqoqhOaG6aQyFDk77YNDeOW40pHHk9QPGnI5Sz4BIB3J8BTkJtVXEZOrnyxVpmTSfRmRWs8WXeIgAbk0N1kJLqxAOxwa0by8DRNHDhmOxzSaa4xrMbAdQRkGm2TxDLMsMHbfjI3HifOhQzTSpqVhGM9F+tUn0NHrj746r/DTipHGuJMhQOQ2o0O3ehcgmVHMjHT1berRRmNiRIgB6lsVwu1kYra22vSOZNKyO8hzgBj5UyGkxuTRoIeVAOfaLvjyrOKs8pWMmQnlgHJ+VSscsshTSWfpvsBTVkzQzNrQBxtpA33pkpKy0Nxc2yap1kKKOTAjPzp+HilpOmiTukjBWQbH50x7i8kfaxlg3VD1oc3BIpkZkJRgM6cbZqlfof1Yx9gBC8F4s1qwEeNlHLzFRxR3uuwj0MqfEepJ5YovDl0xSwMoDKcjfNGgDm7jKrq077nlUtu0hLJ9zXoHbWLqg1r2SD8A5n1NHkggt01tEp88Z/vTNwxlkJJ2pe/uVtbZWOSScAU41uhfXbpUUhnS4TKju+GKBfQt2WI1Xyzt9qPAEkw8e2eYppodSYIrN5OOmc7X3Wj6XpJHxGoVdiCSTk1itxy7ssf6rw14k6zxNrT12GR86va8aW+mccOjWUHfU7aV8D5/QVodVmq6qZEQDrqOd9h/fFTNhYWIfszj4gB+tZ6rxbtmftbXDYGBG2QPXNZPHr1re20cRgR2OVBQEncdCRgfIUITIlteNTzyNBxW3jgB6aNQ9cD9az5YY3kIuvaiZsbFIw5GfltVOHvw+C394hsZGbGCiXLa/QjSAaZhfI/6b2b0k75l1N+lACD23s+jZkl4hcN4qo/XetLhacMkuMwcLmVI119rLIdscthsTRDJxtB+y4dbQjxSA7fXNEe6vY+HlL29EUzvkOdMYVfLln+9NIGwUkvGJZma04FbHJz2kw1E/UiukHtUVy9xYWC+ij75rInntdRF1x6+uAeYjOR+bULs/ZxW1NLdynPQaifXOMfU0WKjXMF3OQlz7VKXP4YHJ/JcVsWiMIgsbsUACiR92YDbO/wBd6yuGPwuZytlw6ZOzXKySNjvZwNhsT1+Vb6AKgA6Ct8S1Zx+XPqJKqFG3z86W4nxCDhlm1xO2w+FerHwotxcRWtu887BUQZJryFpb3HthxYzz5Th0DYC/xn+H+pq5SpGWDC8kt9BOE8Pl47cNx3jI/wClU/8ATwnk/nj+Efn9/N+0F+b/AIlLNnKA6U9BXuPa/iCWPC/doMLkdmgG2PGvmb6pJAiAlmOAB1rmbvZ6zSilFHW8LXEwRQTvvXp4bcQ4GBk86FYWsVkgDDVJzY+dXmuwWrCcrZ6vjYfpRt9sifutVAocqvicVUzCTI8KJZrrvoAeWsE+md6hLZu5JKzOuW1+0V24/wDmv98U4sgbZx86zLeTtL2eb+Jifqac1g+VXPs5fDdYwske2RuKoGCnGalZdPI1Zkjl3B0t+VQdffQN3kiOVbauF3naRQaKkUoGl1V18apLZg7pQS1LtBIj2g2x8qsUx0pIQzRNlc0zHcyDaRM0ApemW0+VAuLO4mSa5h1KtrGHLDPVgMeu+fkadVwy5K6a9bwOwifgLo+/visHPgpBAH6/OtcMeUjj/iOWOLDb9tGX7L+2l1bhbbiObiEbB/xr/WvfI1hxi11xlJUPUcxXxSON7a7eGQYeNirDzFek4ZfXFm6y20jI3l19ark0cHFSVo9sOC+5TSywjWHAGeoAzt+dUIxzFG4Rx9LpVS8URyHbV+E/0rTntI51yuA3iK6MeRJUcHk+M5y5Lsxs71WQ4jY+ANFuoZLfdl28RS8pPZPkdK6Fvo82ScXTAcKH7JmHVifzz+tOH4jS3CFK2MWeekZ+lM571N9iXRGKmprqQyKT4n+5T/8A0X/9hTpIHMgUhxNlMcYVgf2i8j/uFVHsT6HIh+yT+UVfFA94gijXXKq4HWqHiVmOUyt/LvRTBVQ0KtSH+qQH4EmPrGw/SoHEpCcJZSnzyv8AWlxY7RoVm8ZuBaQpcOrMkZycY25VY3d+f3VrHj/cxH6GkuMRXl7YNDPoiWQhdhqxuPSjixpq9mfc+1YiVGa3Cq47pZsZ/I1ny+2DH932Y9QT/Ss+e3lvYYYjaXLdiMAxrz/Kui9n7t/g4XcH+dsfoKyvIdSjgXa/z/kNJ7WXLfC5H8qY+5pV/aS8bOZJD8wPsKdT2V4lIuBZQw56s+f1NNW/sfxJQAZrVR441H/9aVZPkangStRX+f8AJ59+L3ch2Zznxdj+tDM1251MjBep0nb517u39hp5ADLxUr5JF/enE9gbLQe3vLqQ46ED9DUNfLNozf8Atj/n/RPD7xmsYikEkmUB2BHTzo4urgtgWrof92P0NavBLUW1gsC7rESgJ54Bx+laBiVuaitXlSdUcsfGtXZ5eVZ1kEyRRK2csc4z67HPXes1p2t+ItMiZkGTkgnyPKtF5b2x4qYbvLROxx4EHwpbiySxtFdw5KyR5kQDdMY5+VcmSfJWvR7ODF9N01pr5/6ATz9tCXbKuGyUPI5pC5tJPdlkhfsgpDJ3NQJHQ55b1o3cqPpa30r2iiPTzLHoT65oDqILNAJGjkDENpz05HB5Vne7N+K41QCBprkGCV11lSWdsADG+RgfTalHjj7csVywA7uBjx6U4zSSyR6has4O0mSufDOOuf1pW4WZW1IgMh7vcwYiM+Ocg+tKcb3Yk+ItxBw3xg6dPeYdf8FZEUaxtqjkJUnG+dh1rUkEMkTR3EwUFiSFyceWcYNdbWNozqEuDMvMLnAB5b7VC12YufKVIyXhLKzHICgHI8B0oEzx41AEA/ACdwOteg4ZCl9PNJJCkVug3UE79d8noOfKszMfEOIzXCRqsSHTEoGAANht8q1SsmVRjbA8OtIbmTVNPGqqRlCwBYeuajiD26Xn/ROWi0j4twD4Vrzdg8AaRQGQYZs/5/n5YcksYmxbLqZtgOhpcaYKSorgyqNZ2zjwpmKYQJ2dtH6tVfcruSNVXABznfFHg4Y8ZY9qxUcs7HFOg5V0Z80c7DtJXOqTORn5UpJGykbd09a9HLY9pHpEmgnkcZrLWzBLW/vDqUY5Ujb1A+XP0qqIUr7BWFu8s2SGEanDYOD6CnHs44gJG+EEfEdjjpVEMlggjR49ROrLDOf8xTk91NcNEFVQWQKksg6A42A/v1oF9zejNnYyXXI6Ozyu/lzpRu7+8iPeGVycfOtSSGSG+MFw6mRSc97OP6eh3qFdQmJXQadgDilRZnQjtJURS255Vpw2rC4zE+QRyK4PL12oEbJ2xktkDMuNtwCSfL50570bLCzMkrEYOBpP0/4oBXaA3VoI43Z1dHA8Pi2zRBfs0Y7RlWRQANI3J/v+ta1tLb3Vv2Z0sp5Hx9fOsK7tvdr54HdDg5yeZGM5qe0auPHaCvM/umrBaRhk1na3aXUBg8xjlWlFdx6cQozuDgkjApY28xXTHGzP5Nikgl+wNsADuKD1Kk5b13+1Wt4ZLpzEr6V6nOP+aWmhnicLJqyxwCScVq8KjKSEFix8aqiI7dMQubU202z5Utucb1eDiCoQjqWXzo98yLKolQupbcBsE/PpSIaJJAyxsFJyusijsqf2vRpRrEb4a1fRIvdJUd0+e1VVjHxTsLoKY32BPWtOxntuJwiGQaJ0GxqJbdwwSZAJEPdcjnVONbRyvK26loBb2S2k0yqp0nkcVmzSPFM6CPSSdi1elfD24PNgKWThq38WtnA0N8IFLg3IWPKttmFZxXB1XKICI/iPjWnC6XUXb22Flxv5+Val3DBZcLl7JcahisThtq0Y7YMdWO6oq2qpMG+Sckattch1BLaZRzU020yvg4wwrMeNLkAlSkorUMINsksZBIHeFFPtHNNITNqpuDMpA23HjUWeUaXA3xgUTXk1QKyuSvWs8mRRaY4cnpnIMNhxzoHEOGvdMjxtlU5LTfMb86mBjGTvzpRyRSotck7QKzsjGAX5+FNMuBRVfI8ah8Vx5pp9Fptu2ew0rd3YOP2EB22+OT+g+58qhuE2HvIuY4BDMDnXCShPrjn86YjCRRrHEhCqMAAVbLH8B/Ku6zpouxOk6SAema83eT8ee+Ig4dazRLydkOT6Zb9K0+I3EAiZHvYrdx1M+gj13rAtrVYw92fad5FT4yGLj6ZNNCHbw8ck0GN7awUDvKzL98UnJHckf9V7RxJ4iOUn8gRSci+z4kaV7m8uHc5JVAPvirLccGA/6fhd1O3+98fbNMAsVlwu4mWN+LT3LucALG361PE7zgyzi2urS7nEQ0IkYAXbz1ZpyxmQQTTx8HW2eMfs85LMT8h5UGOT2nJK23DrSJM7No3/ADY0/QvYgl3bB8Wfsk8o6M7E/wD8n703DP7Qsc2nALK3XpmPcf8AuH2q8tt7UnvXHF7a2TzKpj/20ueHvO6x3XtYHdyFCJMWyT5BqQzasjxFkVeKGPtgxbTGoAUdBt8/rT1BsoNEIVAdIGFzzwNhSHtJxD/TuGuVOJZO6vl4muqP2qjy53kyaMTjlxNx3i8fB7JsRKf2jjcADm39K9dZ28HDOHLFAoSONcKPHz/X51i+yHDDa2Iu5l/6i7w2/ML0H6/Oj+1XEhY2D6D3vhX+Y1lOR6XjwXfpf4zxPtTxD3ziThWykXdHr1rK4U4XituzbjXil5nLMd+danA+GTPcJdSr2cKd4M22fSsZaR04k55FRqyriRg3KgtHG3KrXEwedyvw52oR73XFc57nZRo1jwwwKLbv2ST3Gf3ULt8yMD8zQHjbxzUXb9hwRwTvcShR/Ku5/Mj6VUFs5fIlxxsRsE/ZMx6mjkYqbRNFuqnmd6sy4NDdsWKHHGilTgnlU6fA1NItI4PKnJj9aLFcsDv+dUAqduopFq17G1mDeFc86IM6R9KVGByq4I/EARQXyZVpmmOOQr6DwDfglqf9pH5mvCxxx81Ir2PBre6bhMGmfQhBwANx3jXT4v5s8f8AjCf0E33f/wCM837XcPMHHVuIxhLhdR/mGx/Si2UIMYyaf9qLGaO3guGleVUYq2rG2fQeVKWTqUXoaeWNSOXxJcsas2LVV04xWracX91OiV+74Hr6VjQyAV0rZwV2YHIzShKu+i8uNyWuz2lrd21/FmNlYdVPMUlxLhrtbSe67sRsprM4c6PEs0Xdc/ER0bqK2IeJKgVbkgZOA3St+LjuPRwLJDL9mRUzCjkuoF7JbUgrt3/7E1UPxBpN4o1GOYbP3FeplgiuVztnoRWZPaSQuSRlcbGtY5Uzmy+NKG10ZZi4gx/7iMDw0HP3rjZzv8V3IPTH6intPpU4HjV8jnoRHDl/HNI3/kR9qVv7KGIRYBYlxnWS3UeNbOB4n6Vn8T+OAD+OnFtsTVIJHYWygYiXPpijC3jHJBRQMDlUg+QpWx0igjUclA+VWC1bJ8q7J8aVjpEaT4UnxUEWoPg4+4p45AzSXFhiwc5yRvRF7CS0Mxf9unpU4qsToIFBdQccs1VriBN2kAoDVBMVwpY8QtBymVvIEVA4lb6sBZT6RsfsKdMFRsWjknSRmnumKxYOIhf3dtK/pgffFNi+mZcrblT4OwH2JrmnF2ehhmlHYaxxiVeqyN+Zz+tZV/JxLhl00iSNNbTHA1b9kTRbW5u1nuNUUCAuDtIW/CP9o8KrfS8QlVo1kjWEjvGPOv5DlUTizfBNLTBXUjQxJ/qOi4RgHA1YZSfA/KkGuo5rlLX/AE1173eaOZWLKNyBkgb5332Gaz7qPsr1Ynmug22kShTz89WKUleS0uGE03ZlhgBWGWB6c9xt41g5O+jvUI12N8TmhivElKMsJyYm7uUbPIldiOePCk5ZS6zGLYoR3VHI6Rj8/tUSXXaWzQyxkom+Sw223rLjuOxuFk0iSIn4FOCV8cUW7E0oqh2S3ltIQzy6VRAGOd8+AqbWaN1VLu07K0U6i4Pec/Xrt9qmOGK9ibiEskrxg4WNjkavTwAx+dDvbqK1mRniMoVC0cZHxOdlz5Z3xRHs4/u5bFbu2T3yRraExRSbxh3GR47Zz8vOg2zvZTvFdKeyOCJQu2fPNWubdp4xJcTBVIxnnqbwA8M7AUqLeS1tzIUmQZA72QTnHyG/rRTZvFqFS9mtxJ2t+HzJEgD3MmWIG2CBn6nNZNjoiMlw7u0KHYEYZz0Boj3k01sBLHjS2xLc9jRDG/uitHKsUYO7adR1Z32HnQVKSu+0Z8k/av2s+VJGQmNseXypSNSkIl0lXzlW8anTcy3HZuxkVX3bJwd+ma0OKYFrGFC5znHlV0Y8tlouJhoRiFjJjcJuKbt5hMncOpXB+VIcEuVRtOQHZsjP4vL/ADxpviKPBe291bABXYBxy3yP8+VRJXs6Mf2R0HspROsksw0wqcL/ALvOodrW7Do6aVI7hXofE+NY6Sz3BjsLcEqNjg8z1OfDnTrtacIh7MsZ7g+ew+VVfyQ1afH+pnLC0ndY62jJGPDeq3McizKgDElc7fOry5kHbgyGbVhmxgAYGMY+f5UGZpGmDuzM4wcsc/Wi10Z8WnY3aWcqqH92cl85JYDSNsEfPNHveBzlBPGQe0yUXA3xz3o8/EILUKWy7kA6UYHT8+VVXignUrCsyAAhdRyOW+3Q4pS0tBjbk9mdNbi3ijiRmYyEZIUDBxyO/jn+3KnYrLISFnL6ckazsueZ8qatIkjjQyldR5avrT9tfWkrFJYE1AaWOnJx96lfdqzf6aMO5mt7WTTAXJ5ZU4J8/wC1NRW0nEojK6JEG2MhGpmHLbwp7iljEwWZFUxnqp5GonuIrGwiGoBnHdyaaVMvjXfR5+8RLK5c24Yadu8edXt784yVKnwG9aQso5YQ1zP2KnfPNiCMHb0JoZh4KkZjQTsV/Hq/wflT12RxkujkuLeaPTMgYUu8EdtOlxBcBVB/EMjHgcUBpYomxbrqbkGk5b+VW/6lpfdpIgS2CGQdM0Kyea9hriCO4uC5XUc4A1bCipwy0XvXM6gfw55fM1SAFUQ6SW06iMVsWNmktoz3KJqbcYIOB8qcY2LLkjjVtWF4bZWEsXa2rh2Q+PKmpZcgiWLYdTWAsNxwriWuAEQt4cvnWtFxOO5mNvKulsZzjatIuKfE5c2SU+gQK6iFxg1PDG7KadCdiMiqSQqj642yCelWQgFm6kYoTqWzl6I4qwe3VE7w1AmlLVVnuRHnGkU065izzzUWliLaN7mWQDPWk1yls0jN8aCmBoSHwCRXNy1I5U9RRIrgSghuXjUyKpTIHLrVxakrRm38ihOTvzqw6VDR6twcEVYAgDNcuXHyLUqKspzXKCDRQAav2YxkVwy+x0aqVohWIqxbNVK4qKhtMD6CNhXM2lSQpYjoOZqg1H8NCummihLxhCw6EE5+leqdJ57jfFuGyzC3v7G8cpg6BpA+ZDUo1xwxEjaw4DJOX2YPq7v5HNNR3XtI0upeFWoQncYwT8y1EeP2mlkZu2hto+i4Xb54qhC8dxxA/wDacAgiHTVGf7Uwo9p5Phjgtx5Iv96Xe3vicXftFDH4hbjH6iut+GWMsyhuLG6dMOVAJB36ncYooLocu1vTaxQzcUjt5QCZJjIE38ByrInsbPGb72sMo6gOX+xNW4jc+zs07SXslxPJnOmOMjA6DJxQFvvZtRi34LdSt4O39zTYkD919lEGpr+7uG8EjO/1UVq+z8HBbu6I4fY3SPH/AOrNsBnw3O+M0rDxIj/tPZRR4Egt/wDzXpeDm8ntlllt4baQ57gU93w6/wCZoj2KbqJsJboigLXg+Ir/APEHtlHYLvbQnv8AhpXdvqdvnXreITXdnYT3MtxHpjQkBUxk9Opry/sRaNILvibuwZ37JR4gbnPzI+laejLHG+ketfSuWGAFGBXzD2w4qb3iJgjb9jASAByLdT+le19qOKDhvCZXU/tGGlPU/wCZr5XAytdxdqcqXGrPhms2zspJKKNnhfCFRUub1cs3eSM9B0J/pWldT5TQnXmarJMpYmV+8enh5UszR5yHya5pSs9nFjjjjSBNsaqT4VZmDdaoVPNTSLJwTgYJJ5AUDix7biMVkhylsug75Grm357U1DIbWKW9k5QjuA9XPIfr8qQ4bGXLzOSWbr4+NaLUbOPN/q5FjXrbGTsdq5gCKs6EDJqoOag6v2BEEHauBbwojDqKpv4UENUcNedqnURsakEVOR1oHX7nAg1I867K9KpnJwKQN0E145Gvons/L23ArRuWE0/QkfpXzgRlt1O9e59mbyCHgsccsiqys2xO/P8AvXR4/wCVHlfxW3hTfyO8biW5t0tG2ExK58Nsg/lXih2lndPbXAKuhwa9hd30DXkB75CgtshPl0HnWdx60i4sglt4nS5XYMRgMPA5xXXlxuSVdnjeL5H05NS6Ynb3IOAWo0lwCuDtnrXndVzZzdncxtGfMc63eClLmYmTBWMAjO+TnauNJ3R7HJNWanC0u4SXSB2t5MEnG4PiB1p7imewjGOci8/UUyeIRxBFZhucEmmpFgnVWcI3UZFdWOfHTPO8jx/qPktMrbzSW6AqcqBuprSt7mK6TYjPVTXmNNhe3ZghvnSbO0WdtvD/AJqptpeHzJpdwwGzByQfrTcYz67MoyyYfzVo9FcWAyXj+lZk9xb2zaZ5VjPg21OWHF1lIiuMK/Ruhpu7so7lckDPQ1Kk4upFTwwyLljME8StcbMW/lGftSV5eRzywFFkAD9UYdD5U/Pw2eNyAMjxpG4gdJYcqdn/AP5NdEZR9HFLFNfkg7cTfYLaSHz1L/UVDX1yRlIY/Rmx9s0Lr6VI51VIxtki6vGG5jQ+Xe/QVUy3hPeuRj/ahH61IG+9Q2eQ69fCgNlCsjnUbmU9B8P9KHcQqbaXU8jdw83PhTGMDAqk+9vKP9h+1AJkGCM81LfzEn71IgiU5WNB6KKupyKtSKKgVdNjUCroNTYFA0hy3B5nlTOaXjIUACjoARvXPI64dUBjyL6XwKJj1y1FlDtE4jOlyO6fA0sJ2e90jMQKEgkZzgj+tKW0r2NtcxzTo+gaoyGz9fnj86hy9nRHE+r2vRm8RklvYg0kZE0JKtpX8jvnxpNex937a4CuzE5woL55758eWfOtJpntElaTs+0ZcKy4YHOMZ+YP0rzVxcSwlWK7BhggnA3rkbqR6idR60MXLhJNK6ZU0lsIoXn96Vj7Z427rBd8tp3OPCq29xljqfTgYIzuVzyGedMtdkuLdIZ5QVGBkKuOmfpTW+zPI72mkRw8RlpIohliBkDcf8nPlVeLSxScaaFf3kBGnOCPh54PhmrW3E7SC6jtYo1RdXfcvtk+fX1qL6y1X0rCdA9wcd7OT1IGM/8AFP1QouUkJpdzPchoG0pGcA+I61oLxE6P2wDJgltQG2OfrVY+FBIiSScDOGGnUfU7fnWfal+1lW9iMcmsIVIxhOfzGw364o9aFGWRS30Xv2spQkttkHOdBBAI8qNKgbhUaRlkJVdxzzzNUu8x6kRAWi+AkZ26UiLztY+zSTVvnlj1H1zVOJCmmmCuJPdJTEwLy+fKlgLq+cAKWJ2AHQU9FaoJlnI7wPU1oRJHBGVhQIefPbNKUmkGKEZOjCWFpCVYd/ODj6Vq3NrdRW6GWKbsoyGUsDsQNqetBFaEe7qNWMGUjJJ/Su4lKzWTvI+pl3BPSld9G8cfFO2YkM4s7dktxiaT45PDyFJwrrkYsSzZzknOaOkPvFlNLFMitGQNJOC2fD/ipgtBGwJcgnkfGro5nJjCo2vC4wVwap7p7/e9lGtuoC51RBsfnuTUxtJLKYj3QBzA3q8Sa7kpA/fT4iDjFFDT3RS64KyDVGzE+LLii2FoiW6MJkkd89pHy7PB2yeuRvRYeJ3UTlGxKB49am6e1mInEBinXqCAp+VZu6o2VXaEb27Ms6QoMDOM43zVppZLeHtNBLOxy3TO/wClWhMOsswAYsTy3xRp44ZpFPaHAHdHhQgavsHw+9mnJtWdu9jOeR/pTpguLjKMFzGNsinuG8OtbeMssYYSDGTzBrSjhCbkdOfjV8TCXkcTFi4RM4VpnJSYd7/bSdrZ6eNm0kOUaF1z9jXq9X7DA2AHKsfREt+lwytlNgVNNxUWjP8AUOTZirZL2/ZSZI1aWNeilsEhEckPNR3T40vbwhJZnY6u0YsM74FPWr+7WLvOSyFth1FXCPsnJkU9RRU9zTNb4SXGG09eVUjJaWbOTnepkjeIiaLvxnf0o0Uyau0Cghhg1Ta9nO3J9i4jS6ISY4Wre52cVwCrZYbZo89sI3WWM9w8x4UK4VI5Oe+KhJxtslt9AZ4RGSUcFSeVCwzAkKdutWjLSa9iQKPayoqlX/OoS5sHoAiK8JA2IqYmWRTDKcrRZYQO/F8xSrLh9Q28aptxdsFdjUUEaRlUO2OtCQuFIO46VHaMWGNhVXlKnAqvqRS0Pi2WBGM0AzDViqzSkL50pHIXO/PNZymVGHyPiXBplZVZcg7+FI6GIyKoxeEg71z5MDmrNE0tD7OKoWoCzCUc96hnKcztXFPxZR6NE0z6VmsfjUdxIALbiXumSNTNKFAHlWhcTLBHqm2XqdJb7CvI3T+y91cvNNduWOwCQuoX07tesjZjPuk0ULG59plMcgxu4YH03+1JCz4Em03GJJCP4Ub+hqGk9mYX7IW13MF3yNh9x9quOIcJH/a8DeY/7m/saYFdXs3GwAF7cZ6gAD8yK0UnsIOHNc2dlL+0PZ6WbDOB574HOl4uIXRkVbX2ciiU/iZTt+Qpu+m4u82OF20LaQMlkGAeuMn0oVCdiEXFLjP/AE3ssAf4mVm/PSKYF77UyfuOFWsQ6dzB/NqsLf2wn+K8hhHgFUfZTUHgXtBKP+p47Io/2SN/agZZYPa6cjtrqK2Q89KrsPkDXrLNGWPLZyd8nnXl+GcDSy4jHcXXFGuHGQA7cttzuT0z9a9YLm3VRpkB/l3ql0ZZGrMH25mMPASgP7xwP1rH4HeyQ+z8FvZgAqnaSTuNlLEnAHU71oe3LC64OnZBu6++VI5g152Xjdivs/a2guEWQQKjKvMHGDWlKlY4OlowePcRnvrponnMsUTEJyAJ6ms2CPVcxKdwWAP1q+ATgMD60xw+2ea+jA20nUT4AVizeCcpJGqICzFnzua5oFJwq09KwXYEHHlmlXlznBP0rmPfSQu0IUEk4oSI8kixxZLMcAVdxrPxn5iqX03+mxGCM5vJlwcf+kp6fzH8hVRjZhnyLHGwHE5xc3EdjAwMMB7zjk7dW/QUYfs4wqfCOVAtbQwx7jLnnRCrA7U5OzLDjlBOUu2QZOmfzqUaoKg89jVdJXkc1JrbTDasHeoYdRyqAdS71UEqfKgqyRXYrjg7g4qytgb70CIFTozyrsoeR3q4xjnSBJMhVdWytes9nGLcNbPMSEfkK8tqxXpvZlQeHyPnnKR+Qro8b/yHn/xVJeM/5o0tjdk9UjH5n+1FxQ4t55m8wv0Gf1oifCDXonywOa3iuIzHPGroehFZg4W9hcNcWByhUhom3+nzrYrK47xmHhlsyrKvvTDuJzI8z4fOomotXI2wzyKVQMHiPELhpDCqM7n8K7mvW+zXF7e84anayDt4xpkXqCK87wTilmlsJ4kJvCMTMxOW9OgruIcTWV8QIo3ydsEmuJy47PYex2XhF5ce1BuLcCOzWUSdqzgeBIA5889K9JfypLpCsCRXiF4heMulGVFXkA1bvC4pEh7W4cs7jO/QVphk5SObyZKONp+xzkcVrcJ4hIH7CTLL0PhWS2W2A2PWrxO0bAg94V1TjyR52HI4Tv0b97dx28bSykBRXnbjikt6GNtB3RyPWs/2lvpXiRATozvXofZH3d+GKw0lj8VcMe9nrtqS10Y9pOZ1bWpVwdwaYHOvQ3fDbeXU6KFc9RWFPC1sT2uwzzrtxz5KjyvIwODtdAmOkeJPIVKjA8T1NQoJOtvkPAVatDlIxVZRmJx4qaJUMMqR4igZSM5iU/7RRByoVvvbRH/YPtRlGdhSZR1FjTPLY1QqQcYo9ucOCeVS3ouK2codWzg7UcyhYXcg4VSSPSpmiW4j0mSSPHWNsUnNbzQxMGu9URBB7TnjHj1rCc38HbhxRtfcL8UuDHBCyydk+nTqO3hml14orQiO5dZEYghj4Z/MV3GJopVR0cZzsGHjWZ2qyxtHOxMqlVSMjpnqTsBy+tcbk+WmeslHim0O8QjjFvlWHZnPZ5GAQDjPPlnNZbviAQ3CpGxHdf8AjB2xnnyJrV4hwwWlrG2cxCRdUevLN5DYee1eavZRLcOyZKEalLDB5bfOiUXF2yFlU40hQNCJtCNHIYwT2z5IxjYY/LP2puGTTwx5UcaG7vdGPLAzQPc4LfUl1IxbrHAMsPInkKXlUxwslt2qRqyy4dw2+cDoKVE6XYKQQC71s4wCMLp+LH9a0mu7a5MSSSSJpfUwAIYYB223545ULhPu7XUiywxtgAKzePhT93bwxRSTQwhX2LaVzsPDz8qG9o0hF8XT7Ou7i5trrCTdgqqckNsfrjypVpry/wB52iaMDuOFwTv+dUaL/VLmTMjrHhQSdyu2Tt6j8qcu4ntOy/ZtN2p0qUAAB899qojI5f7VYrcusEYZ8AKAqhT9BQ3hgUm4tguk95sjP/B3pv3KJrhnuZC6RqMhTgZHP89qSjSPWytJsc4UnYDw9cU+0ZdOyY5zLOEWJu6M6gNqaVfesdnIi7EA4zv6VmhxDLIqsWDfhUZz8+tWjumWJSBpcdBtSqy4tJ2xiSO+tpgk2J4Se66d3T6ijXTJLEkOchtyCOlBF9NIhQgOR+Enegdr2MmuUHQynA6ggE/1of7Gqf8AwMFre3Xupq8dIxS7Jb3FxHcgMpU95NWRSMl07yEjYeGOVUhlupJSY91zv3RQo0iXk5Oq0bV0izKBkKByJ6UOyMUbSRQZZmU5Y7DNKO7sghmLDcbjYkfYUzcWY7ERwM6Fd8HGD55HOmV27RdYbeEkT3OW5sI+Z9DQri9gd0tra1TU5wGYZz8zUcNtGuLkxgaZ4xkFx8XpT91w/TPHcGEqrnDrjk3jTUdWYzz19tGS9hO0CXEWrWTjTjGK3uD2uIlF1AQ+fxCj8Mk7ey0TgdpExWmnEiOrLIez6qadLs5pZpbQ3NEAS4UBQOlLzMyKuptmpn3hWt3DbbUheOHiQasDlmrnfHRiqbOMxSNweo2oSYUq0sepWoJLBMHBNMMAFiTl40fkTVImJo431MNKscCiyyjtBHgEeVJvMPeVQ4Kjxo5LSya0bSemKpP0gdUAknltpmIbKHmtFFxG0OUTGaV4jNb2kRWJO1lc95yc4oNu8mjUyELUP4Lq1Y7Ldu0Og8hS8jPK40nO1DnYFcg86FDOVfBqW/TBRp2h2Cc24zj1Bp3FvcqCpCsaQWSOVtLDBq3Z9me6afNRja6E429hzHPAT+JaqQH3xiuErgDc+hqwdTzFc2bOmtDjB2UCAGhlf2mT0o5K0NsV5+PyGpUzZxtCM57SfAGwqeyXkvOjOuM451SPugk16McnN2TVIp2kkY23rveVk2kXehNJ39+VcyBu8tbxk60Q18hCic0OKoWPJ+VRyGauF19aTpjR9Au7u2dGikLMOTKrLn71nrHwghVXh6nSMDXH+uDQryHj0ty4s5o0iAGGeNcsfoaSbhXtRMne4l2Zz0bTj6Cns6jZR40P7HhijzRc/wBKMZrkLlbZUH+8Bf1ry0/Ab7lxH2jWMdQ9wf1IoI4JwWFc3HH4X8dBDH8iaew0eqa6aSKTtJ4EVR3tMynHrttSbcYtYI/23FrNSOkbs2PoaT7Lg/DeHLEbqQQTYkL9kSzjbpjYcudZzXXsjG2oWl5OfEAj7sKbBGq3tHwojfikjeSwOfuKXb2l4WD3Vv5PNUVB96T/ANa9no/3HAnc/wD1Cv8Aem7LjPbTxpa+zsMSMwBkO4UeOyipoZ6LhUi3NulyiSorrlRI2o7/ANsU+MdapENMQ2AJ3xXE1qlo5pSt2Y/HyHura1dsJcpIq55axgj7GvnHtLYvaXysARFIuVH8J6j617v2u4Vf8QW2uOGyDtrZtSoTg5yNweWdqQnthxzh4jvIHtrrmyOhUq38S55g0+9FwdKz52HYbZr0XACsULyyAu7AHCjJx0FZ/EeCX9g57WBnj6SIMqf6V6DhUC2HC400/tpu++2+/IVH0+WmdOLLwfJKyk93LjAttI/3MKTMsznC22SeWDWpNb9mnbXTLBH/ABSHGfQcz8qyp+LFiYOERtnk1wwwfl4fek8MEbfrcr9l7i9HDI8FVa/Pwp8Qh8z/ALvLpWXbSJHK090XMzHOWGaPBaCI6mOuQ8yaZMKgZfAFH09UR9eXPm9sot1bycpFBooYAd1vzoJWPkkY9cUM2wbfdfTas3i+GdMfOftDRbPPHzFVMed8Z9DS3u7jlM4qjPPDuHDD6VLxyRqvMxvtDOjB2bHrXMDzFKrxMcpY8+lHjurWX4X0HwbapaaNY5ccumdnxBFcDmjYzyIIqOzHhUlcGV0ahtzrhledXC6TnP1omBz2oK4Aw2ob7V7PgKBODwd0AtknzOT/AGrxpZc7CvoHDrVY7C2jXODGNLjk2Rn9etdPjak2eR/F3eNRXyDg+F2P4pG/I4/SueaK3idriRY0jGSzHAxWVxHj9rwi3SNiJ7krns0PInfveH3rDh4fxr2onSa7Yw2pPcBGF/8AEdfWuyWT0jw4YG1ylpDPEfae4vZ/cuAwyO7nAkC5Zv5R09ftTvCvYS4J974y3aSE57EPnf8A3Hr8q9L7P8AteDkdkgSTTuTuzeea2XlGcLWDbb3s648VGo6/ueYk4RZKjxCzijDfFoQKfyrAveCzRTaLYmUbbMMEZz/SvfNGknfkGo4xzpGTh/ayzqj6W0ppJ30kZI/SrkoT7RhF5Yfi7PM8O4KsM2q5IdlAbQoOD9fStjXrmOndVxn18KZS3ka7gLYQyoVIPiN8feguvZh2wQxbbzPIfpWkFGKqJhllOTuRJ3cAdBUEB9vA/SpWInJkOSeg2FXAC7Yx4VoZ0LTwJMvZzKCDyNBs4Rwy5VoJCqkFmGdsCnZmCISQD5Gk0gMtzGzs2kqxCjYY2pOKe2hqcouos9TY3yXMClwUkxup51e9t0uIdwNQ5V59B2MivEArZ+tbVleC4GG+IcxXPKPF2j0cWVZY8ZdmNIpRiCNxVcbVvTWcUxLFQGrIuIDC5XG3Sto5FI48vjyhtdAMVw32qwBb4frUAVdnNQG22tYf/wDNftRlODS8DAW0e4ACgZJqRd22cG4iz4axQUNF81wYgilzcIBnvsPFELfYVKTh/hjl+cZX74pUVbHRKSMaivmKgiEkMQzMORZyf1pOQSS9w2s5X/a6j7NVo7S4RR2EGj+aRj+W9ZSjvo6cc9flRS+jjwJEjBcuM6twSSB+teavHSGfYFy5z+zwd84IP/PnuK9LdwXq28jvoRVGrq3LfbYeFLpwCa4uXuDOEiYfszGd8nmc7eYxuKxyYVa4o6cPkvi+bMrit7PFeREx6IoV1BA4Zc+PdP8ATFKy3QuriQSLEDg6Qve+WcnpnrVHkWG8lknUSygh9auMb7/qOVNiT3u2W5WVgwYDDHORyxy22Gfn61hN9o7Md6Z569jEc0jZ3J7qg8h4mmnW6u+HQmG2nkGoFyIzv3tsY6AD86btLK3HEZDeRSOqrjVnunOT860+3kggZrdgkUQGoKrHQvl/m1JNGscT/JmVwsTQ2ADRxRs+WVnU/Iny9Olct7IxkxJFcPGAQIYScN0IOd8c/lUvcW815dNHJG+m0kKalK7gdc7Vg2klwsgWBpYy7ZOgnvY6ZHPrRTG5pJJGvaSPbl3bUpdQp1DB3/U4/I09NfJb24jnfWXIK4HI5JHL0/zNLiO8VD23ZhRgnWM5XnyH0pC9RJ5YypIXkGJwF3O/rmpasV8UPxsZW0lueNTeP+b0pxBQqoka5QksxAz5VHvKR2Q0P+0bfbfFXgu4I2ZbtXB2I0rkct+voBWlejmar7jNiDC6jIGnJwMjYVsNbGUgGIg9XyNqRvOISthYIViU7b94/wBKrFxS7t4xFIUk07DUO98yP1o0TLk9oi4gjtb/ALglCBRnfmcfbyq0l0J4pEKEY+Etjz/rQjcG5udWyMw3yduVSGtnKq0mkrnJIyPIfPek+zWMmo0ykCWscMwulcyMuIwDgZ8fP09alGGkKhwBvjUamOWASJHKTkHulVJ36Ua8ikkjAhDAruGwRt6cxQ22XClZQZRGeMKQfi3yB/SpnuJVt45FdlZTjINTw6zvZZXXQmpE14O2oVE8ZFtG3Z4XWVCkb5HQ/wCdKKYcl6NW3nEMSyKpZnQMXGwGQDXoYJIb2xRg6nIw2PGsCwvY5StrdRkpjAcrtWtZQJaGRYQDC++lRyNXBGGfJF6rZD2r27syjUreFEdAsS5IIYbVySSwFzu0fQGqXDwzwh2PZlTt4VXH7aOTuQuzlUdD1oRUyokXnRHKkbEMehFGt0BcMeYFTB8lTCuLE5okjdVDnu86rJOMswbJAwKvdEPIxU8z0pV0xHkdKHaeilTWyyqWi7RtieVXguCISjHvHYYpdp9a4PdxtULpUg55VEnVUCj8hjbooJ0cznHnRe2GnsXj2NVkvRowRsOtBubxHIdBhwKvS6ZKTfZ0sa4xGCPKl1Xcg7EUSF2lywkAPhRJYhz1jNS43tGi1piolaNxkU7FOGxmlV7ISAyGmOziPeVtqnjapDYfXmuzQl0DmwomV6GuPJ47GpotqNRrqwXIyKqyVxzw8SlJFDvQXOFIoxFBdCcitcM60NoUcMSSOVBjndJArcqfEZC4xSlxbnXqArvhNIEr7HNOpQaqGwcVEDMFAIohQHetXkiZcGj0M3Br3s19449Kjn4g0xx8txSo4LYyzdvJx2GUw4c4cNgDx3NRLw72bhJkPEgqnbuNr+wNES29n7K1Wdbq6MdwCo06hrA55G1WdIpJa+zHbvJccVlmkcksVQnJ+S0ezt/Zia5SC3juZ3blsQNhnfcUMXfszB8HD7l/M4x+bU/a3vD/AHGW8s+GrFpOhTqGXPhkDbpTXYN6F7/jHCIbgrc2M1wR3RnTowPDegR8esv/APj9m4z4bj9FosfH7tO5aez40jk3efP0FFHGvaCTaLhUaesD/qaGwSKrx3ix/wC24Aiesbn+laHC7vjFzK3+o28UEJGAFjwSfmT0H50kLn2rl+GNI/5YkH3NatibwQr/AKhKZJxnVkAYz0225Ypx2yMj4xs0i+1UZyaqH2qdWa1o5bs5N2rnSOaUI6BlUZI8zsP1rlx0qsDZ1v8AxNt6DYUMEZ/ErGe3t5J7W9ZAoyElQPnyzzrxt5xXjoyqyKg8UQA17fjUwFuI88zlvSvI3DK7ltsUqddnTBWrZ5mdLyeUyXLPI3UsSaYhkdE0aQoHlitGQryUCl5dCxlmGBU1RoVWbSO6NTGoLMxy9QjqR3Rt4muJzyxRYFtQ8KnXmqCoLZOBSsZLN4UrMS21Hdgq7Utz3NJgDEOdzVjAukDFXZsAKOfOrI2+D9KmgFuykjOUdh6GmIJLkrs4PkwojaTt1rrbZqOKZccko9MkXUy7SQ59DRluYiuWDR+ZFWKgiqqi7qRsdiKTxI3j5eRd7CaEkXIIYfxLzFaF37RcRvIU4XwiOSOOJFjeT8R0jHP8I29aQsOGNc30Vtav2ckraVJO3zr2tzw88OjihSGGMdouSoOCT+LHjVY8bT2c3m+SpRVLZicN4FZ8GvlfiSLezAZI/Ch9Dz+deq/1OK7GmOB0Ycm2wKz+JWV00wkOgq42cDZh48/OotbOaNgHuQqsp04I2Pgdq61CKjaPBn5GR5XGT0aqcXt3jMcpdHUbEjkfEUaLiFsxQmaIcw2Wxg/0rCHDp9A1ys65/Cf6UvPw7BVlmkXfByzbjpzPjR9JeiF5sk/uR6Vrrvfs5EILDkQdjVVvI4765DyqF1ALk7E6R1rDtOHQNcltKsoG6tuDsc1HC27IrJGsYOWHwDocfpS+n6NY+WuPJ/5/lm0t1bniHYvPEEQGRW7QYJbbHrnP5U008MzJGSkgLg9wauQPh5rSsPFBFfo8tup7WPQdB5kbjn6mmZOK2YuYH0SL39+6DsQf1+9Q4y+DaOfG1+QORreQH9hcxkdewfB/KgBAynEcr/ygD7kVrxcRt0z28mnUcrlTyqlzxS0ghLQSRvK5wi5xknx8B1NClJeimsb3yR591nlvBCLeTSi6iGKjPhnBNWdLoXaDsY86GwDIfFf9teghktIoDm4immbvM+oZdv8AOnhWY15FNxSHRC7sVbOllx+HxPl1q1OzOWNLp9gfd7xtGY0XLeBP9KPAJrKfVMFORnurj9TWoxfAVrdyTuMMv9aCRDIx1HMmO8CMFfryqXLkqZpGLxtNDaOskOtTzpa6tveoSMEGkobiS3lBwTAWwfKtaW4RYwyEb1lfFndFrJG0YsfDI1J1SS58DI39apccLtdLExK7Yz31z96fmnjCmQuKhSJLVmBzkGtYZOTOHNh4GVwmxtzb6jEgIJGwA6mtJbaJeSDHrS/Cf3Dj/wCo3/7GnwK0k9mEVatgxFGPwL9KsFUclA+VXxXYqLLUThU12KkCkUKcSKe6lXI72QB1Ox5eNYdtwy5lh/Z3EoQ89QOAOYAGd963rqASIzSEsByXoKQt5Z4uFRmF4kVAA7SZJHTAA5nNTKCkrZvjyuDUY9sxLq1uODcSgv5Gjn1atQX4iNJySD5ZPy3xWPcNH700UDfs40XGhxg7AHrvv4fbevQ6eNhJJ4bETMxODIqhx6Att/m1YAhHBJtd7HocthUBzpPjz3/4rmlFJUjuxyblbaKKJ427AyMurY6l3xS9tNxABpYdcca7F5FGCfDcb460Oe6d70T28naO5wNQwD4c+lc0s1zchLi5EjHBGPhBGdgOg3qUjXmBsIu3vUi7kpYEMFyBp67/ACpi4u4LO6mXXiYOy91c6T474FOcLijghjlgbVp1CYFcHcHBHlWDxHv8VucDnITvz33qtEerHLR7m6t2WQtMrt+8LYK+VVkjkEoQIdK7YUg4P5ef50a0Hu1ll5XK9RudI8KHHdx3Fy0sMTIoGFZuXpQjNydsXF5BbysrQtI2rfJxj70zcmVkhkeBYxISFUHJPLyqY+FGe8eTIGo6iANq1b06OxYci2CPI86GzXFBSTZivYzSxPcMAqocMD1PQVmsrkMSceJrX4kHYGC3I0wDW7HmWPKlIbhZQAyL2mcMTy9aUQyKtIXt7aV1LOvcxzP3pmytDJIxVMqo+Jd8nwzWg1uyZFxpJP4WGw+VZnbm3uyLR/2fUEZGaqjBSu0O3UE0UyrbRqswXct9qa4HKty0sN3+/jY5AOQ68iPDxqbPic11cJA626BttZDEfTPOtFIba3uSJLZUbIcSRk7kHqPmflTikS5tKrJs9FrOV06wMiNyN9B6fI1otNaRyJELZSzk/elZbcySg26ls7iuFpJ22Z5UXbA33/znV/sYW2xqeK2ZCxtFJzsABmlDICxa1V10cwaLHcwSSSFbsSJnSFXktENsH0zQSAE9ehFJpMGmxZr10UCQKQeeapPNbPHpZSoPhRrmwMy4V11HwoDcPZSBJIpGNwTSjy2mC9MHbwRKHeKYFfA9KLHL2aseeRS7WkcYKpKAvXBoscPZphZNXrUpOLtA9i9sxMkmtiM0OUZPdYEUxLbt2TEMAaoljqAdWyfCm3SBPYlKmjlg5/Kha+nWmZ48OUbIal3jw4HKs3tWzT9iVYOwB5CrNGmsPkE1HZMiljyoTpI6Y5HNNXQJIMYkLlmYD0NVd4tPdc1VbN3OosPQUQ2+N+VUr+B6+RdlV8jJyOtVjEeMFjkUWUrGNjmg4JUlV51Hsa2i4WMn94dvOiiXAypyBQVjJAOMGr6QBsKUmhMct7oNtTOsEVmxsqmrJdoZNDnFc+TA5dDVeh0sM1XI50B3Xmr5qO0PjXN+ncXopMdQq3Orm3R96WhZcbmmopE8a1qaWydXoE9oelU7JlG9aA3qrID0rJzZSZJk9lhKsfZTyHOBgMAPqaO95wK3i7nDGYDoQv8AetALwaM6lsFJHUIp+2aKl5aLtFaD/wDFh/8AzXraNDEXjtop/wCj4DGT03A+y03f8RuomRbXh8U0oUMU0swU+WPn9a0zdSSKwjthFtsxXNRbyXejMdmVz/GmCfzNOxGOvE/aeUYTh8Mf/wBrH3NW1+10nJkj9FjraMnEOZRU/wDMD7igyXrxjE3ELOP+eZR/SlYzKNl7SyHXdcSeOMbvpfTgdeQrWQnAJJydzmhLIt2hC3kU6khT2LkgdfGnY7CEjvam/mOfvW2Nas5PIltRKgmuaaNPjkRfVsUwnD7NTn3ePPjpFMLDCuyoBVNoxVmW95CImMc0bNyXDZ3Owq6ypGqqA+lRjOg4+uKPdhXuoYVGAO+3y5f55VHE3SO0KBRmTu8unWgqNt0eP43xbXK6q6EZwNILViyXPcDSSMdX4VUDFat32ZkKxoAo61kSEGRmXGM7VMrR2pHZBXJ2PXegTMgYBjsu+M0XfGortQOz1OWdgB4VLKKtPq2RcCrKcCuaeGMYUg+lBacue6tSwDM+NhzNSuVG9DjRickVeQ6V3oGBlbUcVSuBBJJNUmbSm3XakBCHVIT0Jpo6VXagRhUj3XJqMs58KQBUUE58KJGMPmqouBV0B1VQDFUckd4dKtmoZsdNqYDnDLgQ8RtLgnAjlVifIGvX8SuZW4pb2oc9m+osudjscfmBXhrTD3CqMYDA4I6Zr2d2AvtDoTBKQgYPiSP61pDZxeU6aGReXnbGCOYIqHYbHP1FGWaeRNEvZksOfZLv+VIXcOm5cIQSoG3ypy1CJw2WVgDkgb9DW2qPIUpub38nCSaEKDDDIg/EUOofQ1El2ds2sbqTjuyOM/el7a6ZH0u2pQTg53FRNIQ2qLcat1zzP9apKzB5Glr+wWC+EbSj3Ml9JbPa42x6UDhc8casWtD2ZJ0lZNxuT1GDUsS8DTgkBARnHjt96mwObKMMu7pqyOR2oaVmkcknC3/YYup7Rgj6ZkZGU95FIAzg8j4E1E7WjsiicDAO5idcbGqTfte1jYbhNPLxpeJjMYu6MmMk/lRX7kc99Gm81vMiSe8RqAg+IlfuKUt40uP2rXMKjGERpFBA89+dBmwWEAwViBDEdSDyokjrqIVSTgY32FEU60PJKLk+SGTCmqNTPAUG7ftF5fWkriN5eIymLEwYjHZkN9qJGo7aNY93PMk1lSR44zIRzB5/X+lNJ2NOHB6NVLW9j3MMwJ8FIxV9N4OazjHjmlVklXGmaQbdHNX95uhyupxgf/Mb+tW0znTh8sbvHcSRjW2kICaWvOKPHFpQ5z4Gunu72IgpdzDuAnLk77+NLyXl3PlZpe1T/coP6VyZsTyQpdnqeP5Sw5Xb0wKzyTLuzHqd+VMTcSvIYmjhnKqF5YB6V1u7xpL2Sx5XGzIDn6irT8QmEZ/6W0fK/iiHhWPi+P8AS2+2a+b5aytKLpF+CcbSO2KXCSM4JLMMbksTW3b8QjumxFqGNzkV5GwlspNbT9rFIdysSDQN+m9bXDZbQTFY5ZWLKBgxhf1rrlVWYKclPj6PRAVNBSwRkDRzy4O4yc1ZLV4n1GdmUdDWCmmdrxyWwtcKnFUklSP42A8qokiYZif0NJ8K/dyL4O3/AOxph/epY2MMYVcfi5ms/htldyCftJzG2sgqvIZAP60c0lQvpyck0i15xZEtHmt5Iwgfs1ldgqs3gCdvny9a8dxW3jnbtPelurucHvpsitkbAY5edervkFrbNZRzqwCaOzT8Ixy8q89HbRBZJ5o2jSPYELjJI/i/SufK+R6HjYuKcmYdhw9IpFN8s0sjEaIoBjP8x6VsT3fu9q0drDDAeixIGI/Sizx2/C7qWZizIIRoYtnPPP2H1rz91NcPc3LPIV0EA4+mB6b/AEqLro6HGltmpBf2U9rFDcXbRy7s2RgOSeZ6Vi8XhX39HtpVcEd5lO48/p9qPFYww28c97PnWNSqOZz/AJmjmwtzIG0BWx+InODStDfJxoVZ5bi3FpHEzOw7xXkM5wPypyDg8drEjSdn2nNsvk5+W1NWaKhwsuVYYUjz8+oqkiC2v7cOxMuh2znZcnTn5Cl30aQjW2cqCVJCMMq/GQMgV0NvdXXYJEqvDuoIPLlzo/DJoOH3DADMT5D75+da8EGi5SawKvbyfGoPLzFYzyuD4td9GMmotuP/AEATgMkE7ySFZI5dOVA3UgYrD9oOBzJxgNYxnEg1BVG2ete5Dnsyp5ik5BNLfJ2GCFG9YYPIc8v7VsznJ1Z4niHDXu7I3/fWUr30xzYHBpi+4Rb2/CwY49M4RSxJ643/AFre4jAkR7BJN8ZbHj/gFLxwTTjTkEAE5I26/wBa9GLTOX6j/E8rapruY4Y9OpiN2OBivVXELrhtQMYHMtnFWjgXtZu+GjYZ5bg4oTxxSxkx9mr8sF9xQ46FLJyDPBPDCVBYpjutG3OqFSlpFNuzFRqHXf8A5paOAq2HdVPPANMx9r26RTscnfPjSlkUFyYJW6QxDZQSTB0xHtsANqPcIQrFTyGAOgoltE0YYMQwzkGpmXukCvDnmnKShGVqzqUElbWzHte+GOo6hzrrhEkAMhIPiKc7LsZAxcZOzZ61SaEHDBgRyxXvRT4nHL8rM4Rus5C5dHXniqRRXTTYI7oPOnJbkBTGrBMcxQoLjPdQ5x1pTSoabGkVMmNtydqI4Sxt992PKl41YzB1UkrzNCvZjO432XbFRJuqLjGlYvcapmEqbkGolCFlLrg4o4wseOWaWudsb5NVyUk6J2gVzJlNCk/Kk5LeYJ2j6gnga0rWEKrSvz570peTl3/aEBB08apRpbNIOtIXjuZI/g+HzqXuZn2INKyTRSHREpyOpokUjrhCct4GpZbj7oIWLjGMGj2gcnQBzqmGznTRrfV2q6ehrNuhVY3NZXECaimQaziZdZBQ4r29sVkt1Djp1oY4fb9prKisPrapl/S+DyUdlcSyLoQ79a1G9nHaMyudwOVekCRKAFUDFdd3Cw251HmKpZP3HxpHglgAlZNwVOKu7Iu2retF0iLs2Rljml3s4i2rGTWrnBrZluwMA1HJNNwodec7VVYugWmo0Irmy5UlRSQZCaJkY3oSmrE158slvQ6DIfaR1B0wxk9FjT9c1wtvamXY3QQeWkfYUxLb+0UyYW6KE9Q2n7Cgf6Lx1hmbisyr1/bOcCvfouxmKx4stnJBLcyzXEjDvdox7MeRPI8/qKUk9lryXJu+Kvg9GYkD6tTlzwZr9kE7AQRppXW3M+PP0+lZ49l+FwEmbisKeWtF/WqZKOPs5wqI/t+MQKf/APRB+tSOE+zcW8nFlb+WQH7CpHCPZ1Pj4sjekqn7CrRWnsw0oijnaVzk4GvoMnfAHIVNFWbfCbKzgjxZ5MPxBjnJJ6/atEbE0jw+5ieIdm2QeoG1OjJNbrSo86cuUrCKc1cY61RQaHczC3t5JCCdKk4HWigTpWwNsRLdzzcxq0KfIf3zWRx+7yzKrYxsK1LZja2GWOWC5J8TXkeJT9pK29V7NvHV7EZGQc2ZqA3ZxjWyY9aNkKC5GcVmTu80mScCobo6zprotnGAOm3Kl+yD/FJnyo2gZAIyPOu1RLyXJqHvsCqW8Y/CKKBGvTlVCWYZ+FfvQy560dAFedQMKKWdtQOas2/KhttSbGVxQn70yr0XnRTgDNBjGGJPjUgGIJ9KNGoFDXejqNqaAIuCKnlVcYNSOdMCwFczYGBua45xQycZ1D0oAHbuRfA46cq99ZIbj2juZ2+FDz+oH2rwljiTjFsmCQXAYAcxXuuBTd25nbI1Ox1DyGa0x9M4fM/KP9QrxSTTSyhhpdzirzF0txb4+JgSc7UrHdkRoDGDjrUSzu0hIyFAzpztW9OzxearXsGtvIWOnBx50tJFIXJGQehB3o8U5BbtNXLAxSgujGxJLFvA9d6q2Qo/+oxJPJDw24L5JkGNuu4H186twy4leLsY49kzgE/alprmP/TihyGIxgimLO4jeAGNWWVd1bapbNFfCn0HnkukmPaRlX5AnqKBa3MgudGAp7wyfwgnOflR7viXvT7R6cKFYHfB8RSsMyO11M40uRgUcnWwUI8nQ2koUMI8vrJKknO2TjNE7RQpAILMe81J2s+iHQkoUso1M32FNTTrEFVHWTI3IOTVKS6M5QdtjdiR7wmkDAzvWM0qvxeTAYjoQOfP+tNmZpgGmKKMHYVmpcqOISbjA2HnuapNXYJPg4mlhiP4dvWrxQ6mAJbfzoAuAH3GQPOmor0EaWXG3jRKXwZY4K/uC3luss74IGiNdz86A9lJpZtQI00SCWS67RmDEouSVHSq4iZSe0LMxAGRnG9Z7R0ycZO/kmKDTY3D5yWC7+FZ02o7F8939K1GVobV1yCGwpJ6bUjJAhxiZNx40JimtJIyrEt2jqMEAZrd4bEzTgnbArD4fC5ncKM7Y2PpXoeGLKkp1gAYxTb0aNJ5Uw6Xc8RCLcMo8OdNW19ObhBLNqiPPbyNZj4Ep22pzhsyLfQhgQobckbcjSkoqN0EJ5Pq1y1Zsr7xcfu17JP4m5/IUZYLe0QzzMCV5u9LcQ43a2Soe9IX5aRt9azeIXzX9tE0bHQXGpB471xuTbo9/H4/T9fJpXPG4I1/ZRtJ+VYC8UvXv5Hib3eIYLIdySR/aqtKiEagee+obf5tWfNdGS9hCErGzMdjzOOdaR42o+znyRyKMsrf2rqv/o8ZJZA0bR4jfd2DbtvkjPTPWq3HDxbQdskUMUb7ZyDny3OT9KosjNKBnKqBtnxoUt9C7OQxnkhYIVHJfED/ADyqMkIpWjTD5OVtRe3Sf/PRn3gZIkDntFYlQWB25YG9ZU88eosRr7SRm29ef505xe4nltEWRHSDKnPInOcCs3vLDH2a4GogsTzH+fasGqejslJzWwkhBjzgnYnT40xbcUDyJbTxLMF2V84IxyGd8ihmW0SGPto2kZsjAOAMcwaLbW0sp1JaRwqOTY3xVNkY4OO0WtrqN42lYHQmSVPP0zRJLhbq4jZl0toCYJyQNzz+YoSQtB2gD9x85XGOex/ImkjI6XolRkbJGAGHMf3FT/I3+6PaNuLgt/dZHYyJHjIfTsa3eD2h4dBJbuxJY6skY0nHSr8G4/NcWKC4VVlUDIzzHQ1oOzXEXadmQDyJrzvIzSk3D2Z/sKmYdous8+dd2iwQyPqIXq2KSuY7snuQM2DnI2FG4c3a6u1KlZBp0E5FcvjylH8vYnGyUt7eZEnUBiwyG8ak2scbO8eQSuMZ2p1rYwxqsSp2Q5BelB06pCpGx51pOeSEqvTJ4L4PNCOQRyz/AIAdI/3ZpYWsuoxtqHI90asVqcXluLe/7CCLtJMZTbZB5CvOy3V0JWadm5kMGOMn0r2YtNJnLwZoRIwuliJDnPQ4Nesk4XFJboyhgy4O53rxhvleAEQoJjglgDmvRcE4jfe7ky27PHqAUjoDWOaHJGuJV2jQeExnuHKmutoXmkOBsOdOXFnLoEsZznfFCtJTCWDjST415EcXDKnLSNyslqC4Z4wAOuKxOLRLFN3RgHwr0TsbmRVDYUc6yfaKNgqJbhMZ7zGvTw5HdozyQTR51iHJGgk+NRCjRksFIHnW5ZWLRW4eTDE9cU20ERTdRvUZPNUZONdELE6M7h5LW8jEb1khTksOp5Vt29syTvHq7hOwrNvbR4ZSEbbet8WRSpfI5qoqgTNlQAMmlLgO0igHTRoWZH7xBIrpbpHcqcaq0hUXxM38nPvGI9YHnWdOiSSdkDq8xRJ4ebEM3kKVeSZV/ZQlR41q3XY4r4CLGiNhk+dFMSY1rvUWvaXa6RGxcc9qZisbp5OzSM5rlk3F6Ne+xeO4LHsyhHmaLF20EoeNCwB6CtObgN0kSuuC3UVayluLTK3NqdPiKiU7VopRSNGzvY54gCNDDmDR3cgZ1ZFJu1tcp3BoakyJYiVLkiuaUU+uyzUaVTybBqkoEg75yKzbeQmXBbNaYjDrgtipqgqzIu+xVu4arGWK7cqburGFQWDb1CWmYcqckVuloyYIMcdKkOKAA7S6KJPC8KhsZzWGVXpAosIDVs0CJsjeiZrjaoGaEnBuOTPluIyqvgJXqbXgk9ncie4uTPJg6FYnn47n5fOgN7M38o/6jiDN/MSfuaKODolkLHt40jDlpJHIXUf8/wD1r6ZCZD8BsDE/v17bxu7amYSKD9TQ14b7MQppbilufP3gE/lSzezXAIzmfjEYPX9ug/SpHCPZKL4+JI//AN7P2FKhhDF7Iw/HxAP6Fz9hVxJwGKDtuHK76nETNpYbHc41eW3zoHZ+xcR/e6z5dqa65jtXvoobHENvEA2+Ru2CSc+WKqCtmWefHGz2Fj7q8Km3C7YyMYIpkrjlWNwcYUSh1fUMEitkPV0zji04lhypHiCmSWCDo7aj6Df74psy1nrKZ+JSP+GIaB9z+lVFMJNUA47KLa2WMHdt68g+Wck71rcauu3uWOe6Nq8/dXeFKx8vGhuls7cUeMaKXtwANGRgUkLgMcKvzqvxtqeijQFJUDas22zUEznUcqT86urbbgZ8PCrIgI2+pqjxqu+oCkBWQvzzQWyaKJVBxzqTpYbHFIYEZHOqtudqswAPPJoe5fA9MUgDQwl1LMO7y+dChjDJk16LicMNtw+2SIEGK375IxlyST+Z/KvOQOU2ptUTCSkrQ0qBRV9qD2oAobTFtlosoM8nQVMTEnehRoTuaPgKKALO2OVCBLN3ufSpySasMagBuRQBp+ysOris8x529vJIPpp//qvVcMi7H2ckf8TgjPq2KwvZuDs+CcXv2XBZRCjep7w/Na9AQYvZmFc4YhP0NbY1o8vzJfc/2QuLJxga15VzWkm5BXcVW3mkedELnDbGrpJKbkpr7oY5z0Uc/wAhWv3HkJQYq1vIoYnHdpX3SaRgoUEk+NGuHd2kdTgHzpMSzRgYdvPeq2EV/wCpS8hkjt0DDulhjwpqxhlEaqVzq3U+NLXk0nYxqxOSf6UzCX7EAMcdBmp3ZpJ/6as543WcakwWOn1pdxp1nG2oiitNM8fZnvYbIJ5g0upZpdI2yd81MmaY467GkjYSgAEaR3iR1NHK6RjT9RTkMQAKbl37xYjn4mjMwCSHbAApqaRjKEm7MxgMnIA8gMVnxY/1B9h1PKtm8kRnUqQdt8VjQtm/fyyPzqrsIJrkv2H67mRUZpiO1lHZSyRMInOQxGxxQ3RnGLbpHFzFiJduretEhIEZ551L8t6pbqs80jON8Zp5baPsmBJwcHOaLSRVOUtC0szPb9kSCTgkn0pJhkb1qm1haLKE7Y3B8qWa1jyF7Q5zjFSpIqUJN2YNltM2D+deg4Of2zAnPdrLhsAkpYShwTgaf1rZ4bAI5C+rOxHKkpxaaR1ZMM4ZIyfsiSRBMQ7ADJ5/OiW5he4jUaGYsAB470pcAm6AXmcj86vAsqXMTAkEMDz8xTfRivz38nrUtwLRYpSABzxWVfXPCrOdreEBZzpPZrGdJPMdMA46jx3zTwV7iyZXJdtWxNVuOHpIEn7JWuEQJnr9fnXHL+Z7uOVdL0eZv5e0V1RSJBnuttyNZd0Pd72FFVgNY0nmRyzitfiEUivIsoViTuuMj86y3iMlyGTBZAGGs6gOfPkf8FatL82c+Od/6EWrbfz8f/w0lQ6XeIE5ZiFHXyrNntorV41aEapDmRU3DEnlv/m9dJLdKxdyjE8yFwPSqGVbs6Lo5GPi6AemMH6VlObnFfsdXj4oYMrdtt92Aln94maG9fQu7MMagPQDnSjpbsvZ2yuVU5BbnV+ytzIUidW3wMbE/KraFt4HA+MgjzH+fpSq+y7260wtolrw+zF1OA8zAmKLmQN/pnf607Y2lxxGaV7lpokX8CsU/Ksbh1s3E7poZ9apHhVdOa55Z8q97bxvEiFyDIqgFh1rg8rO4rjHs3cvSPB3XAL66mkjRmkCTdmGY9POjS8ESHi72sKgrCgEpU5AJGRjzr3I0s7PpAZvix1qI7WFu1dY1WR9mbG5rOPmt6Zm4sxHsLOVQo1gltaMrEFSeePWvT2lukVoqtMXGPHYUha2qwPJrVdJOVYelWVpf3Nu3dzuMVDk139wRvt9hL1kaFoluGVTsRjp60LhkItMLDCzxYwWIqrwyxDU8mR1yOdMW95fkDRDGYAObHBqY7lvRoNSgFNSjnSSrvrkYA+AplpTIhc6UI86zJ3d2yoLKDvpqcz1oKNBJI0LSJGGlYY5V4v2gtLlZ5HuYSnaHVtuK9PaXOl9Jwh8+dF4hHBcW5Vixc8iDXX42b7dmWSF7R4Wwj93fVupDDuk7Hyr3PDuKxTxFTD2eg42Gx9K8/Hb2dhO3vY7STOoLzppuI8RljzaWQROhPOtsjUloUW0esVldVEb7mlb+AOmAe941j8Jvbi3Z5b9TuNvKmP9cjnlIMZVR+dc+WMXGmaRbew5VLKEdvOFDdc0lPLbynHxKDkHxpXiT++sHVJDGnLFZr3CqDoDk1zt3qJaPRSXCC3A6UJJNtJPpWRFdPKFiA71aXDLOa4Vmdu8DWebHKe12JlowTdAg7VmcWYR3gMmdBraWLsbkK9E4pw+3urcgqC55Gt/GdJN9oiUbVHkHiXvNENjSSrC0pWXIbxr00Hs/cRRZeUEeGK609nIZJWkuBkmvQWRdmXB9GZZwqZVGsFfOtleGwMM6RvTY9n7RR3Bgjwo5tTEmFOcVy+TOT3AuEK7F+G8Oht3YhR3jmivGIr0OoGDVBIyNRTIjjvHBrHHnc417RdUMuwKZpU6HBBAIqf/AEzvnNKKjqSVb5VoptLYNWVmsY2fUmxpW6tDpJztTbzTKQOzJB61I1y5XQarUg2YMCwxzEM/eJ8a2LSIPIBnY1n8R4fHB+2k2IOab4bcrLECh3FS1bHZrvYRFdwDSxtEiBKCmY7o6cMKlpEcVUqaoRhtAq3OsDnR5UEkZyM0S5jAJYGl1kKjB5VxNyi9iEEtnaQgZxmmfdNK86L2yjOOdKz3TNlRTuL7IYQezBhdZrm5EgQg6Svxb8udXvOB29/I0t7eRxDbA1qDgev1roOCNYmWKOZZJpVwWxp0A7ePr9BQH9lLAtruL9UPgHUAfWvfrQvZT/4f9nI/3vF09PeE/pVhw/2Ri+O+R/8A7hP2qv8A8Pez0f7ziqfO4T+lWHD/AGTh+O9jf/7pP2pFBIYvZLtNMA7STBYDEmNhk89ulAt4re4mMk0oVnbUQdudXnXgyWhbhQ1NI3Zl+9sOZxn5fWloo9bgAczitscdWeb52Taieh4TF7vIVRw0bd4HPOtgNtWfw+HskC9QKe2AO+4qmzGKpESyiKJpGOAozmsxZvd+FtK2zy5J9TvSXHL2RYzCjHExxjwHWs69u3Wzjjdjy5ZovRrhXKaRn307SyFV5Ui0eo4LYFRLNMWJRQBQGNydyKzbs9MZKQRjLHNDlmAUaUGPDFCXtgd1qxkXtNL+FKwI7Vn2Jx6VHYhtyc10kZHeSqLIT3TtS/mBLRxoN2oDSjktHNtqOWbNd2cUYyTSGLDUdyK0/Zu3FxxZGZSyRd8j05VnyyZyFGBXqPZK0KWMkhCg3Oyu3JQKSq1Zh5EnHG6A+1brHojU7uNR39a8yDgVp+0c5l4k+CCE7oxy2rLWNzuQcU5O2XhjxxpHDU58qPHEBuaiMKDvTAxjakkaEgADaoY1GcVGNfLnTA7yHM0RV0gkeG5rkTG550xZRia6SM40k5OfCk3SsTej19rGtn7IrB2YJKGSTPVjvy8th8q0rCftrNG0KI12UHnWTJMbiBoyw7PIJC+Hh96tbStGyoHJTptWf6mPR57xylt9mxNcxW4WRoUIz4VDXEOgaYlJl8B0pG4kjRO8GKMc7naqC4idAUZAuNwdqiXmJdAvGk3uglze2kOVaCNj4Af2qqyWrjJs0+QqP2DSMJI033Bzk4zVZLy3RgsStjHext6U35yrSCPhyt8qFp/cbi8ghW2CnJLZ8MGtAGwWMMtv3fGkhJA8glaHQy7A53xnfcUS4n0RZQDxAPPND813of6Rcd0Gk/04LvbKTjIzSEEVkL/tCFMbA4Qn4Tt1rMu5JJNXeOD0G9CikcIH7XSRyXnmo/UZHTbD9NFLSPVrcQmN8YQbhfL1pJJ01qRJmJh3hnGG8qx+2IAUNnfOWztVI5O93TqBHLFJ5XdoawWtm9psZGY6nXB3ORSMdjbrcPIsxyScDbcUoJArYJHhpz150ZpQlz3sEc0IyTg9MVp+pyEfo4U3Q8YYUG7augP9qlb+G3tJYC5ZW55OSpH+fnWYzSTvpDrkABQDjIoEkgYks+3wnSOfyqXnyN7ZcfExw6RoLeW6rkaix8BgHzJq0V52zGJ8KCPPxrMCosS51IOZIG+agSRQzJp1qTsQxzvTWWfdh+lxvVHpVile3xb4AwNgeVAazvBIJNOWHXIqIp4o4ho7kjAc9sjxoC8SfJV5wdv4q64ZrjdHI/EXNRb7ApHMplUoyuDqAG/j/StbhRldTIw7mMA6cZNYsl5idZFfugDYdT/hrRt7sG2Uq7ZAGzZqE6+49LJFTSxe17Lspa8yBnTvyz41ZZ+zmQbZBHTz9a57qJQWiyGPxHqKzf8AUrdixdzqByDkCtI5VN0ebl8XJiXL5bPcrctJbyPGmllOAGoU7vJYK5cq2d9JxmlIeJ2AjdRcLLqGTgj9KovtBYo3ZwAGNQS7KCQvrtWNpHoqMpr+glxKQg7HTkDJ01jXpWMq8bsXxnbcHmd6c4xxQ3MjNaxllIGSUPP50l2c80khkjMaqO7nHhy51pPlxsx8VY/qtV93p/4xS+aeO1WQSYJYNgdBjrV2j7HuPIDPjnjkdOcUxckGFVXQ2MZRSe7tigcQy83aSqUQnZV+Jtv7Cud9ujtwKT/NbQtewww3L4OyqDnrn+tKM7yqO0cb88flRblnNm4aFcwgHG4UnP57ZNW4dw+S8VY1IVyh1Ejb6USdKza1dM9Nw72YuOGqLwXKOZFGuML08jWrCpCEud8bCg8Ha9t4Vs5f20SKFR8EnbxpiXCyciPGvJ8pxc1NCoqy6RqFWVu4B51x3jqihmGFG9cdPtAEKowUszj0G1SoEal4yTnbeqXUdzDaFkK6sbLXDWsShh03rsyXCKAvCBLKA+/WmrrKwnTjHhSMT6Jcj5VS7eQDvEgsaPHmuNsBJYEtjJdzSSBeik1r2r2z2+qIalbrWVdwSXWlckAbU1a2ktrbFAxYcxVRyp3SD2VuIf8ArdY0accsUA28r3bOr9z8Io8hZm14OeRFVEpBAHjXHLO1Jpjo4wpw+2kvLtRLKeWF+gFRw4XnEE7VrZoFJ2Dc6eijkuHGsgxDpWmrKi4UYAr1MaU42yGef4jatDCzMhdsbAdayOGiS6uhG0egqcsCK9TJITK0knwgYArOs0b3+ScppVuVTUIjNWK3iCaNI5V5ji1osFy3ZqO9vXqImyTSl1wpbuXXITgdAarj9RaC6PPcMs9U4lZgTXqIoFhj1KME86Rh4Jb28muIsD603NFcFAqScvKp+k1dj5CN0GadSBvmmRHKFDYzQZu0VMPuR1qYruRU0nesIRSbTGW0yM4LOQvhRgccqX94DHLkAUtc8RRDojOTXTGSUbIkaeuqO23Osj3qUjIbFVFzcZ3YGueeZMFJD0skafFSUlwrSY7MlfEVMYM79+mQYojpYCph3ZV2Li+jLdkpwwqe23q81nC7dovOgNHoO1YeRzTtPQGlBIrqARTAEab4FZ1s4AzV5Jyc4NdcM/HGnLsTVsV43CbqLSlIWULWo7+1OPcFTvypaSSOZsMcVUcykhUaEcoZdt6qBIzbAigWrIW0Ic0xNObXcjIrOTvZV0CkilMgBzirXMCiHbnirx3iyjNTIQ+2djSbjWg7MlVY7eFT2IIyRWgLZRuDVWiFc/GnZLQk/BDfQRwhxHBGuAxHMnrj0H1zSknstZWzL2lyz9SMqNuu3OolvYlXSO8+T3s5IzVEvEIDAqug7g8t69mWdvpGP3eh5fZbhGSxu3G+dIkXb8qt/ofAIwNcjO38Pab/AJUp7w50yqo1MDjG3zpd5SwJc4JHIeNS88/SL2Pyw2EZCWzdnFHnAJzkk7/OqLJFDKhUMVPxMMb7+FZski4Gp8E8s7mhrcnWG18hyyd/WnHNk9s58mCMnyfZ6iy4vYwQqJJnlkwAcfh22zXNxqB91DI+rqc5HrXlTMo1OCygnfA3FQ85Hdc7gjGkAfpWjyzrWiF46NeeUXdyr5UY2AJxQeKQFpBIUIiIwCD8J8KzIZJ2uF0KDp3AblWg12vYFpCWG/PGAfLyohkyuSXo1hhUHaESIUGAxqmuL+Oi/wCkyGMyyNEigBm1vjSCMjP9KTmiWAqHCZYZwBuK67ZsH1KeT7elJNKrsSVzk1MkwERCggnblildZFS2MP2oBOMgVRinMnBoWs1xbPMCpAuZcbA1Qsc561XI8Kq2PE0hl1UzOEXmTivXWUxht44kJCouBjqMbn6/50rD4TalGW4cHOe6COdaTNKe0cuxYDqeXTA/zpXPk+58TOWzB4jIHmDHxOfrVIJ8AK24q95bOkRZ/GkVJroNB89mxO9Qr6RsfrSyufGra2pgMlwetQCFOVO9CDk1bVQAwZxjenbLAVmzg4ArJ1HP9q3LPsRaBnViWB8vLn9PzqJvVEt0FDuZAoYnUM4P58vSjvczQd4sB0wOp54NMxjhyHS/Z5AwGI1fMipmureOQG2hjkLg4LKNl8f+a5Wq3QuSvRMTPcq7yu5jVgFwdhS7SO0ixrIqBjkgtg77VY6khPYg6JDlVIwT/QUncl1LKGUbZwARy6VlWwHrzMESt2rO6kA4JxsM5+VDQxdhrmdc/hCbnH+Yq0Ya4jfWCYsAMA3XyG3hS1yFJRYCyIOa53A3O+1EV6YJhrScmWMSuOz3B36+dS04VpgjEqDhPIUh2T6iQNSFc6qqZHMLagCMd0Db51twTehNIN8eSpBOcAc/nVlGSAygYByF5cquAIF7xwcZIB6+lAZg+Ty08wKVW9E2vRd5AAQ4DgjOQOnlQDLMsj5DZO2M5xUmRQToG/8AD4YrpGLOANyDpJxVRF1sPaqxdS40yR94Npyx3zvV4BGFOht2Yjly+dcJjq0xyMoOBnTvjrk/3pYlolLxNq8F6+VHYXaGZx2eVLDLHpuUGaiP4O0VypAAAdQSxpVZSzKCTqzuwGT48j50wzFZGVC2pjz60+KQ260D3LN3mwOerb/OlWEam4Re2BVhqYjkPCpkAIHPcAbdcbUMqEwSCQauCXTI5VtD+uASYedQcZJ59NqCcCQrEGyBqIONx5ZpW3TVIScaT8Q8qLMjxzMdOI9IGflWuk6RKjJw5NhVk7QkoNWd8Y5c+YHSjL2cccKtICDsxZdvLHlWaJ21BI0ww5Feu9NW6ydm0hVyRsQRtg0q9FOcl0OzRBYHkjcEvtqXqRjHpzqXihVI5MghlGVHPPWqiwmFiJx47LkUPtNOUOxZd1xtRFr0zRweVJtf/DTsZrW1iuGkVyJVKBcnbas+CGG3uYydRAxnfAbwz+VTFIkUgMpAUDK6uf8AnOqXWuVshdjyUeFW3ykPHCOLG1dts9G1nEIgdMarjIIA3rJlcSuFXHZqWZmLHAHj9qXiuJVVAuWUBgAW5EjH+elS4e2t2uZEyR8A6Z8ftUSny7Lx4VhtLTIla2RNIiYas7sSCfPFLRxTTmP9o4YHU5ZtgM9P+aH2x7AMSxkfDuTv6ACk7i51ZCjJGCfln+tZu1I15wlHsaa3xxCNZpFeJECEpyx1OPGmeHRTPxD/AKJ1kEe5IOMj0pOJljjQCQSMANeOQJ6UzYAxXP8A011O7nYdz4T9eW1OS+2kZLbbfo9rBNdNAo907I9RnNGuACD44rrS5nktEMyjVjfAoEkpMuMHNebmSjrs0XQGOXRLoYc6eiCLv1pMquvJ50UShCAa5Mc1FbANIY3OmQk10kadnkZI9asApTJoDy6UK9K6L9MYuriKU5xU6O3ftJM6RyoMNs08zbkgU/HEwXs2HLlWeKD4gwDjkRtijQTEDHOhSAoSDVIW1Ma5ubjMCLwHtNcfzFVQQgrITv1BrUt4Y2XLCl+KWUZgYpscc67F4ra+oibC2s8L5RSM0dsDrWBwOSLSwkYdopwd61mmi/jrpjN8FYVsK2g86XuiAnc/Kqs6uO41LtMIs696iU+S4sT1smK67PGrxp9bsMBivPXEwY5WuhvGXbrWMPI+n9orTZ6VSDuTVZZ0Ub0lZzF171HmiUrmulZm42iqBSujgnIrKnkVHwrCmXQyNoXauPDolXU3Os3GU9pCcqECwkBDtigJb/tOeR0o8sXZy6lAIpmKVWGCgzWMZU3FsXIA0eF2FLlirYNaLrkbVnTqwYkipyxrZEg8MmDRbgiRfMUhG+DimFckU8crQlJoNbysRpbpUyUs8pQd0b1ZJCw3qMsl0a2SX0nFQ0m1VkAzmhMa5JdlXotIdS8s0rJbSuMrtTkQzRx4VvinxWxGVYxXEF2GwSOtehZEuEGoUoNjsKctxpQlq9DHPloJCsqJCMAChK+9A4hdoLjRmqJKCNjXHmk1OiUzQVhipOKUSXzo2vIoiyrPL6BKToCgMMirpGsV0TNgtgHGM5zSaSKruY1Izzxn51YzSZUMcgjANeq0QOTXIVDEikk8xyzvQGjbGqVmUsfhGN/0qZGEceCg14zknf5UtJcgoF0qPlUpfAm36KSr3uYJH0FVjBL4yAedVbLgYBB65q6hkkU55jp0rZKgXRZkc93J36g4qqxhSw1ZHXemFIjlR8Ky/izv/hofxPoXAHidwPOhAtl9BjXCMSZMZUcsUO7kDgRA4OQv51dXwxYtlgudungKQkimnmXRuc7Y51tiVKwrZ6viME3uUqzdi8eoBS0eCTq0g5z4A15a7k7W7dugOBvnYVt9pLDwsG64glxiUmMCTPJD0I8a88W25VtJiRV2ztQztUknPKoLHwqCjudRXZqCTSA41e2iEs4VjheZoRNanDAYoiwVWdyMAjeok6Qm6RoGR5YkRSFEa7DpUMkvbK3JCfHnVA8cjAElWPMld9v71K3DMwCBTpHJticGsFp2ZrQrxOQlTEoyMc6xBtyrWvbrvtDEMnqaycc8V0vs2L4zuKspzVEPQ1cc6ACDapqo3qSelMRK5LD1rftojI0UY2jC+OCfH1rI4bCJr+JDyzk+eOlejSERy6wXV1XYlcEHw+foflWGWXoTAT2ebspG+lwSSufhH+GropRjbtoYZyGJ8emenL86A4Ze0+LOxCjY5/pzFWe2kgRc5LEamXG4PhUJ+myJaRoS6hEgWUkA4BxnIBwPSsuUapGIYvk4CjOR+m9N5aVlWWQqcbHO2eVTDaxrM0jHvaTpYnYEH4qz6HF+i0kspjw76crtk5J28/Kg62jjkczJ3GwUJOW9fzozJEZZCnZsCrE6hnT8sePh0rGMEjNqCssbcznY+NEYp7KaOWeRxjUAg2z+lNKodUAUgDG56/KgwW5aY4IUZAAPj6UeN2jmOtWyeS+FbLa0RJlrgamJEhZjsTjn9KXJwckEH8W31ojBi474APWgSxs5UtJk5I0g8hUJJCj0FDJI5kXOCCNsc/OiF1SI6wEz8Jzy55oMUYQaWyEbfI8asypqKFthy1YopCdBBL2kp09oZSndUYXfHMHpQ4BLDCFlfvAbeWOlEWAoGcB9Xw6tXLy8qEMqGPfXHI5NH7IadlSwcMeZO9MI37JdfM8hjHSlVVinfywPU0cBBD+11d3fHhyFaWEtkLLmUDSNPLJOKvMGYjLbDGCTnNFjliRA8WExsGJqplj78jYCggZPUn/DRHvoiT3ogz5UK3MjAA2x51eWfWVjVWKkAMRVJnikV3IxpAG1RbSIrEyRll3wAedPvZp90IV8mnwzg3axyTK41ZOkZ6VsR8MjNqIjlWYYYjrWTY3zWBjEgGiToq4K+vjzr0MU6TIGjbIO9ef5GTJF2jVU0rL3kEUfC3ix3UXavNWVs15HIVXBXmW8PCvUviaIo4ypG9AteHAQPFGQqsTlqXjZ9P5Lt9ejzTW0rgwscFNwARv6U1w3hrFmebIj06ApyCavccBkE5uS7y9iwK6jzI5VtIjvEHKFBjcHpWvlZ5KP2ezOOOkrPOrYOl1JAHISMaxgb46Ctx4o5eH9k4BGnrQ5ba5eV2gTJdAo+tNXELxKEIwcVzZs8njjL4Lp3tmKeFdpdQXBwoiQjTjnmsC/tDbxN2zOBG4V9I5565r38FiZIgxfc7UK/wCFRtCQYzMVywjBxqbG2TWvj5c1/ctEyhFuzwfDoraWVmAJl6K/P19a9XwomwiHaQIHxk7DUR40Hg9j2Wr3tB7xE2SAPh8vOtP3YTXq3DLgoMHbmK3z5qfFCjFraYY8UeSRY0j3POjocyZYA+dUhhi1s6HGeh51zHBrhcmkuTNCk2NRIpd2/aL5UyF1vjxoU1v2LZY5FcE4SlbXQ0WEzM+OlXdRIpG+aY4fFG0eo86ZWOIMa7MeCUopt9g2D4bCIk3G9FuEYHUlW2X4ahpNsGu1xShxJM6c5Bzzpe2PfxT1zEHBxSAheNia8zLjl9ROijWhcKOdLcTlbsCFGSRtS8VxpYBjTgKSAZ3rvx5eUaTJrZgWPApXLSSOwLb7HFacHCTb75LeprVjZVXFdJOoGM1vwjW2FsQcKi7KAayb5ia07iXc1m3JDqRXLklyVEz6M8NnaoOQc1bThqsRkVzODaMVIf4fP4mnproaMA1gRsySYHWnRqIGaqE5KNGylaDLNhsipkndxjNAcFd6jVVrJKqI6ZfTnOalEwarGcmmFFRH7mUzgNqBcRgg0zQpdwa6KVUSzIkGhquklTcjc0rqIaub8WQOag1WBHSl0JooNYZHbNUWc0Impc0LO9SkDY1CaMx3paI1aV8CtIK9FXo5pisoApuW40W+fKsftMzZzTbN2iYrrhLigu0ZU0byzGQZyTTMSyKoyDTMaDVuKcULjkKJNT7H2hBWONwRRo5CNqNLGuO6KWwVO4rJwrog8hHHPJKSAygH5U8EmUFi4JH4m3JNLRPPOx0EDRzIUU0ZEWEBpACRgBdxXsTsYsIp5kZ0GSPPFUKfCAmpsb5PKmHuJNB7MMyeKjAJqkEaySM0hKlP4TzFVGNgyqyBJEY4DeJ3xvRHnV2YnDnPMjAruwRnwdR22JxzrkgjaLB2k5+FNwV7EmUleQd0kc8+tXjZZA4cY22HLAqlzCUwFOBzwOdX0LhjhsjYKW+H1p8A9ArptEYjUbk5OKJwXu3PvMzSLFbkMzIucHOwPrSbsS+Qxz1862OE9ilhM95G7wM6uViIySp2DDoDmt4oTJ4y0AjkEMaLGG0RgKQQebE53zWA21aHG7gy3p2w2MsNsAnfbyrOPLJol2C6KE1U1xNRmpGdUE1xNUJ3pAXQa3A8TW3ESFUBAANgWzy+XyrO4aMT9pj4Bketava6iDpy2Rnz+dZyfomRWRnGSDtz22NVtUD9rI6v+zUNjp8zRrldbKN1U88cx5H8qVbKRuFLdRt1HnUV6JRnwnKTyHnyzS2BzFM/DaOP91KgitzUjrV1O1dgc6jNABAanNUU1OaBGhwvUsxmDY0Yz47+H0rXLxs/aHMhI05B6b7Vk2Hdgk1nCEjNaEQEYUkEIdyOpHU1lNWxPfYyi4bXKQBgMFwdvKrSTTmLUHwCNgOg/rQtGmGQyOXVV5Z588EeNVIYpGEGo4Dcue/LzrPhexBBA7qJVlA0jJVuePEfSqrJNrVd1UKdSsuxH+Yp0MWRUVMPk51DkPWlJpBqB1PjIDEdBywBmpTsXsmyR0JtzJoD5yTuT5f540wdElyIFtnBiQnIPgfClZI27dgjcvxZ6jffzpqGOW4mSdWA0KUGATlupO/rvQ4xatvY7ZMJjt11OG0sQwGxY4Pj05UpcIkr62aQFzvoYb/lRJySoRuZbJyOuNvlQgmZCiAHu50gkDIHjSwpt2iHLYvIhL6YxpUnAC9BjFHNuiaQUcuwyN8YNQyndjjtC+MHbTvj6YqZyNmU6QpJXx26/wB60nFr2SmWSNNY1ucYAcY5GihIhHG0bkDrnkPpSunNuHYSAM3XkRjFEXIj1ZQKBsAOZ896S+B9l3jj0bucYOM5yv8AzSQjPfIQOoycluVGaQSAxrHqYjbBxjHr86mEOkOnAAbmW32NXSY1pFUVWUKiEjAOc71McRZHkHd1MAPuTioQqtocgYVdOSdzjyq6jICscgA7H8Xz+VCkkRsoZxiOORQpGOSDfr/nrW8ojaMFIYsHkMYwPPzrEbRG6Mq75xjl1zv/AJ0q8UsyIzSM2RybO2/QfnWsMij2W4KlTK3TKdSg6NTZGrl6UPRcrKqx4B7z5U4055+u1WGuRdD/ABRnKgjffzoaOYLkSSkqoxgjcnpUSbXRpHq5DMdtcGUosuE04wAPHnW7wmynXW8RUKDgasknxrJXiEUTJAI4+1kY6mJ6Z8frtWrw66vbm7dVh/Yowwy8j41hk5caZEUm7Rt9nIY8HA86pDM8QEZPM86JKWwQM0jMWUjAJryNRlo6fQzHd9rfNb5BjQZPrWkQLjCbBRWRG8AA7PAdj3j1p6ImNPi1EnmRiutSvfoQ4UWIgqMtQLp9ZAKcqt70sZCEZY9ah3IU4xvSnUo6GFtkLJtsBUmAiYtrOMVeJtMSiqySYBNX9sYpewF4YEt5JHY6mc5O1VllypZVGKsdLka849aHcxsSBAdjzok3xqIl2JiR2bu02Y2CZIolrYjmx3p7sgEwd6yjgc42xtmOG0sD4Gi3LCSKou4NJLLSbTlRg1xtvFcZAhm1kaMeVNpmTekYMyqNIrQgR0Xeujx5N69DZY6lFBMhJxTDnagKMtXVJfBIRBqqsygKaYVQq0jfSkKQKtpRiJ7Mq5kAlwKftmOgUitozvrbrvWlEuhMVwYccubm9DsuWYikp5WQ5JNM9oTkUrdLqU11Tf26JYpLcsaD2mrnQnJDEVG9cH1dmbtnN8VXUZFVwTzoqCtY5EyOAFl3zTMUu2DUFarpxypSdOy4qhlmDJihgbVVQetEFS52WkRGCDvTKUEURDTiwoIaFJyohO1Cc1unoliM65pQphqflYUqxBrOckRx2XjC4rpGXpQsmuArnlKy0irHNVxvRdFRppIdF49hQp32om+MClbjIzW8EJi5c69qct5tt6zw2DvV1fetKsEaQkw2asbjwpFZDVtRzTqikhvt2rjIW5igpk1cnSN6B0ebRDHC+VOSd1qsg1sF0MeoGOQqDIWIGosSMnaiZXs9SsFBOCuK9Z/JCQUaI0ATUwA2XPU1UFkDPuurYqaEjhmLRklR/EMZ9K5++O+2Rtzpb9FBhIHwB3scidqBONMrKrEnp1yamKMFW7NhgHbJ610cTTOxJUaRz33qu9sOi4YBNODq6mukLJBKScuc/WrBAMg7EHnTMES+6mZlBLHug/etYpyZJhSLImnUpBO/KtuER2lgzxRSrPNGDqcgoAO8cY8cVC8OubyKSVFBWPcnx64Hypia/gm4NFbCHs5o10E9GGCM+W1axVBK6MLtUkZnYZJOTtS00gZthgUS5dEHZx7460plieVQ2MtmoqN/Cu5c6kDmNUHOpO9cqgnA5mkM1OGJmF2IzqOM5xitQRKyYjbBBwCD+dZ8biBBHGAdIAJxzNGiSUN3g++T5nFR2ZyIlEqJq7QMztsv9TV1ikkm/arhf4gcjNFli7P4pM7bA8hQ1kYQvpUcu63gf8xQ+6SBbMe5OljCu5ByxFKrGx2FaM8SW6LGDl33Y+VKSygDC7VpRoDICbZzXDJqocDpmrBmNAFhtUjnUZrl+IetAjYsk024MnXvYzTysHJb8QXceHjS3ZAIAVO/LT6VaMNoII05yNRGxrKLt2T7s0BIr2mgh+4uCFPPNU76rE8baNI2HgP8+9XzpttTHCMylQve/KrQyyMuCAisoYMdts8qmUtiWtoDGLgSt2ZUqDpJzXJEgYq753BCgbHff54q08i2wwxDM+dLA/DvzrihEYZHGokDVjfGRn05VFjYa57FY2WM6inw8xgnn9qDDfGGHQ6SLLghcj4gT+VBMZiH70SKjZOVxr/pS0efeG7jHI2IGMUcVLTEvgeWRJgTINTHHM7+VWdoxMgAKr126edDtVIi1MxyoI3GwqksmpwSMMO7jyro48I6Ia2DMn7QBiQnPUNql21E6MhPA7EjzqWRTOqsurK5Hl40UsrIA2NR5bchWL32FJCDSmSIQocFiTnGMelGtYnEneOVI3I5ee/j/WrRoqrl0KYOnI6il8hIjKrZTJBwoGKVt9Gl2qCFx71sQcHHPyrQijxjKgsMjI2Axms+W3BuSITy5kggE/8AOavErR68OwGNO7Z642qoSXsiaRwCxxLqGNhjwB32/KivI8UeEUOzci3PHT9aiaRMgKGCEAkkbbCrsuuJyMrkcztiiKb2hWUUuMKUjPQZ++1THIGEgnkwiv3ivMZquf2jEEBD/CCNqZJjmdJIxpgbCSbdTy+m1Digit6E/eZe0kU5HZg8jzNQkTTHSzu2VyBjcHwIFTFHqdtZQxgMQ65JDeFa3s3aWt9e6rjWGG4bOM9MVpTS2VKTk6Mbs5riWOKKNm5kZGMj519B4LIvukNusJTSg1ZFS3A7K3uPeYF0yAYJ8am3lETNkYPKvO8jMozUX0bQjSGLtCJEKY0H4hSN7eW9vscA09LIJAADvisU2d/ayNIYo7oOxOScFB0FZuPK2iwlq8bydqkZyeWRzok15IsmCgznbNN29qyqZJG3I2HQUu6drLokTrtWa5KOwDQs0xIGDR7tWjVWGfOmLe0it48pzNdcMGjINVPHxhTYdgknBhBFUdywwDWbLcdm+hTtmnbNM9922Nc0cjyOigumR4yFXerRs8aaXXvU1DNHnShBIoUr9pNp08utdijSUk9khbZsLgmjO+FNJ50naukm7u9U8tRCjpiGjJrHEBnmIHLO9PNMCpGatahUOTXHxWVqx3Q3aWyQxgYozPgUubpNWnIzRR31rvglVRJZRpB1oOsatqidGUHFIdqVkwaJviI2lYFaFLCHO9BgmyBvTBfaqUlJADEaqKC7DlmpnlwKS1sz1MppaJGgooU692iJsK5yMUqtBZiTxEOTQwtaUyAmgGLwrzsuKnoKAqtECVZUxU4xWS0OjtORUFKuKmr5Wh0UAriKsRioJqG6GcKupoWasDRGQmFJ2oUh2ri21Cdq2UyWLTtSobLUxNvS42ajjyJTDKuaKI6rERRxypSgi4gytUK0WqtgUqBg8YociBxvUySAVRXya0ToXYq9sc8q5YD4VoLg1bsxUuZVCIhNWEBJFOaRXEAVopuh0dDGoG9CugOlXMgxjNDYhqIX2wbPKzLhCWGBgHunmKqAZgWwCFAz0/Kml4Tfl+/YTkdDpo68HvQO7ZzDHiOde1TRmhDs3B1IQBnqN8UZodMZyck7DPSmjwriBT/tJgfSqjhfEQQBaS4HiDU1IOSEosx5yc4PyNF7YFwy8uR9KO3Cr/XgWso/8Tignhl+gKixnJPURnFOn8C5FIi0s/ZAkqeZrUghlv7qOztth1PRR1NIKpsYisylZjsQRgimuHcbWwgmj7IMZSp1g4IAPL0rph9sb9jiuTSZ6PivY8N4O6w7JEpVfNjtn86+ezTsx2bFaPHOOTcTZVxohTkgPXxNY3Ok2XN29dEEnPOurjUZqSDs1UmuJqOdAEGm7CMlu1IyE5DzpQ7natW3URW8asCC2/Lnmok9AxmN1IZiQCCMEbflRjPoZZWODpzv4GltUUTNGSuojoOW1CnIULECCwO/9KhEVbHTrZhgjfJBJ686iTXHbqJSNQzsDnr/AHoSmWHTpBzncqNqSubtmcqzbjY45U4bdjiLXcrNMTmgBSaszAtlhU+jVoWcExU12/WozTAmrIMyKPOqZo1suqdc7b0mI14y+ltJyCcJ/mKbsUE8rRykkRprx4+efpSM9yQgXUxbTjVnf/BT1rDAzKxkBIwCCd9/LnXO3S2RZdoLhIm0x4UnuBSBkkjljrV7TVoX3lTnoV5eYOf71DydnEDM7nD4QHcY5DqKFdXkcCmNSrEtnVknljpmhyvQ0ybuRrhmwioAM8s4/wAzS6cSkWEadpBhA3z/ALfnVorxEc5j7QsOo2PrQje9m41RxuDuVZQceh50+Poaph47SSaQHvRqTpHMDP8ATagzW6xOezmLgkgd7f6U1e3jdiMsrADvRg+PXOP83pVHMzGY6VP4cdfL9OVJNoTdB17bsVwVQ+YyfMmrEog1k623xkYG3Kl0mV2PxHB1ZG2BXaXcA4cqD3sfTaqlJy7M92EZioDgDUTkfT/Nq6SaFdC9qdf4sry9aDLGxdSp0qrb8sgCphjj1aiMhWJ1EjNTSK0QJVycuSMjG3PP+CuZtOUbY9oFdlbIPrmryTqQ8ey6Eynezk7bUk7RlzMqOAw76qdvM0UMfe5j7TVgqgYLlAd/7VVZkdgGKtIRsBvg5/w0k7kSaAO6yDOOhqsJGssI86euckb1SiqoK0NWiTe7PqdgNWkDpTL64YwmnGkbHBGaiO5hWBB2Y1fiA3OeWKAJ3dxk7qdwg2JpNsh2y7SM27sNOwOQef0qBO0kJWIKAkurJ236fLYUvMXdgjMcDnkYzvUR7g5BKAeHIUL5Y1o9HYQNcRxq8DBGTBwQAM4yRtWjJwpQ8UdrmPDg5U71Xgd5Hc2oSTuvGAMVqG4e2VpYYw7gbAmvOy+XkeVRlqjVRVGlHHNFCFmcPgc6Ult3kJYd1eeapJNd3DGM90aAcjofCujafsuylbONjSzShP8AJaNFoCJj8EZ73jRRdSqTGw6c6JbwJ2ynGMUbicSNblk2YdRWUbcG0x+xeO9JYIxFEB7WTINYfa9k5YgseWa2OFzq0uWG3jRik5SSkNj1vFPnvN3egosluGGM1E99Gmy71RL6MjzrtcYVRKbM3iPCw8fdbD52py0sT7mFkY5AoVzcFm1DkKLFfAoFJGa5oRxqTK2da27QSHfnTZXO9VVgyg1LOAK2hBRVeibBuMUpcsRGSKm6mIO1JSSuQVPWuXI1dIorbSiXK53FadvENPOsO0Ts5WbxNPrcSDYGojkhHsAt7baZBKjbim7WUlBmkRI7kBuVPQqFWuvDNS3ETDSkMu9Zk8OWyKclciqquvmK0l92hUKRMUNNiXK86HPFppTttBwalfbphQadsmhx86G8gNdHKOVQ3skYeUKKWkuRnnQrxyqal3rOjZ5ZN+VRkm0EUaaylztRgNqDCgVaNqAFYK3tlMo2M1WpY5qprFvYE12armu1VNgWJqhNcWqhapbsDia4NVCajNSmIKW2oTHNdqrqrkLsE65pd0OacIqCma2hkDiAjyDTGraqaMVJGBVc7GlROqgTPgVZjilpySNq0SIkxeSXvVeF8mlHB1b0xByzVuCoqJoIaJq2paNqMGGKy4lHM1Akl6V00oxtSbSZNbQh8ibC9pUmUCli9QzbVpwIbNluNIo2hOPFnoDe0UfQwKfOTNeYFjkksMmirYLscYr1+bJpG2/tKAcdpEP5VJoT+0bY7srH+WP+orPWyQdKMtqg6AUcpBoIfaCZutx9QP1oLcZuXYDs3IJ3LSHajC2Qb4pe/wBNvBkAZPTyoTd7C0Zt3K0sxdskUs7U+JI5owSBy50nNbE5MfKtGhoVPOqnyq7ROozg/ShnI2wakZGa6oNRmkBxrhzrqtFG0kgRRlm2FIA1jbm4uADnSNyfKttUUQMAdLAnBFBtIRBHpG5PM0UoTmsJyt6OeeRt6OFoon1soJI2BNFltI2GZmAyckDrVFEmDhsZG9WbUdIZsgbCobfyTzZeUq0JRCBn4R1NYvuJXLTbdcVsDaXUefP6UK4TU+oEd7mK3wRTTNcTMdoolBJGfACgCFjuBgVqTBFGCQABliB+VIyXBziOMAedaNUbARGynOQaYiZTsyjPpQe1c80FR2hyDpxigAszYOAgXy60Xh0eu4JcZAU0uZj+GMZ8TvWnw/BQsNiRvUT6ZGR1FjRVSuWUE8jtV4QqN3cqB1FQoDb5yc8qnUOQPWuY5eTOYJIACO6p2zV0tomIyFBPIYqgwQSBketFDAYOOoxvSdhyZCW0RPeYgDGTUe5xNjSNQVsk9SKszY5gePOrB2KHRgDqeVJN/I+TRQ2cbOAAQMdd8cqYTh0AOXkJHMjliqCduzZc5GOpqVdtQyy7cqTcn7E5svJDB2MsSKQNiTnc0s0DHfBxjln8zVi7ZOokgiuIYgvvpwBQrQcmcsKlHjY6sg7k8hQhaoqgM7EjmKJspB+ddqIAbJzzzT2PmDXh5PeVcHJGaullHoCHfoSNs1cMxUk7k7AZqEkwnePLl5U7l8h9Rg/c0dgUHdGwHXFFW1SMdnEqqAMkjnmpjl0kAnP6VYmLDqdWSehouQnkkLrYKGZVYH5czVorRIgVaUMzHOw2x50ZmUd1QcA4wapqyW2Axn0zQ22H1JPsoY42n724PLHhUwxopOGb0PKu31ggAegqMk4BOMZ28KBc2aPDbgxXOEh7VjsBy3rdeZ0AMqd7wFef4W5S4Qa1iXmXYV6BGedXSFH0Lv2jDGquHycbltHXgarse4cGkhaWXIBOworwxrkg4yc71EPdtEXyq8SrMhElXwXFRSNgEbAFjnlVRKJgUJ261M9sEzoasd7owyld81wJZIypoo2bmO2htMYGTtTUEUSQhQByrCZJry3EgJCruK1bSUvCueYFd2OcfglmdexTe+aIzhTWlBbCOMZ3NGVFMmojerzHTGT5VpFKrARLR4cEjIpazkiaVlYjINLi2luLhn1FUJ6Ub3WG2BOe8etZuNtSHZuwqpj7vKqyRnpSNjdkDSN6YlvNPxV0ucONsnZSSDVzoS2upuVUn4kixlhvTXDp1njDeNYQUJy0U20hWS0w2wosVqAOVOyKM1AOKlePBSsVgRbgdKKq4q2quJrdKK6AoUBO9XQCqk1AfBppoCZk1Kawr9SmSK3iwIrL4igdDipmk0CMmC4190neruzLuKz9Dxyk+dMmYdnk1hWw6CmbWmDUwIFOaTVstTavgVGRbGNdpgc6C10pbGqlLm4IUhTvWYkzGXc1TxXGyWeiWVSOdXBDDasuCTIptJMcjXHJUCYciq1GvNTmswIJqpNSaqaloRUmozXGqGhIRYmpU1SrCgaDKKvpoamiA00jRMqVqjDAopobGqQMVkoBPjTEtLsK6Ysxa2AkQE0RFAWu0E1YIQKdstHIcVLPtVRVJjgVUdsGAlkwaXaTJ2rpTk0I7V1qOiGE14qDJQiaExINVRDR/9k="
      ],
      "baitStationsAudit": [
        {
          "number": 1,
          "location": "External Wall 1",
          "activity": "No Activity",
          "comments": ""
        }
      ],
      "uvMachinesAudit": [
        {
          "number": 1,
          "location": "Zone Area 1",
          "catchRate": 0
        }
      ],
      "baitStickersReplaced": 0,
      "uvStickersReplaced": 0
    },
    {
      "id": "log-1783740510658",
      "scheduleId": "sch-1783740321330",
      "clientId": "cli-c1",
      "timeIn": "06:25",
      "timeOut": "08:25",
      "timeSpent": "2.00 hours",
      "itemsConsumed": [
        {
          "itemId": "itm-uv-1",
          "qty": 2
        },
        {
          "itemId": "itm-9",
          "qty": 2
        },
        {
          "itemId": "itm-4",
          "qty": 2
        },
        {
          "itemId": "itm-3",
          "qty": 0.5
        },
        {
          "itemId": "itm-10",
          "qty": 2
        }
      ],
      "comments": "doors are open ",
      "clientComments": "will close doors ",
      "clientSignature": "data:image/png;base64,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",
      "geoLocation": "33.934142, 35.648771",
      "dateConducted": "2026-07-11",
      "pictures": [
        "data:image/jpeg;base64,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"
      ],
      "baitStationsAudit": [
        {
          "number": 1,
          "location": "External Wall 1",
          "activity": "Captured & Replaced",
          "comments": "eaten"
        },
        {
          "number": 2,
          "location": "External Wall 2",
          "activity": "Eaten",
          "comments": "poison changed"
        }
      ],
      "uvMachinesAudit": [
        {
          "number": 1,
          "location": "Zone Area 1",
          "catchRate": 25
        },
        {
          "number": 2,
          "location": "Zone Area 2",
          "catchRate": 50
        }
      ],
      "baitStickersReplaced": 15,
      "uvStickersReplaced": 5
    },
    {
      "id": "log-1783808602605",
      "scheduleId": "sch-1783808553825",
      "clientId": "cli-k1",
      "timeIn": "01:22",
      "timeOut": "03:22",
      "timeSpent": "2.00 hours",
      "itemsConsumed": [
        {
          "itemId": "itm-3",
          "qty": 1
        },
        {
          "itemId": "itm-10",
          "qty": 2
        }
      ],
      "comments": "sss",
      "clientComments": "",
      "clientSignature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA0EAAAB4CAYAAAA0YPkhAAAQAElEQVR4Aezdz3Mb533H8edZgKQo2XFS1+PYcSzLIrmQnThxPEr4Q4qTprn0np56aqe9tIf21ntPPbUznemhP27Nf9BTxtPYlkjKqZJOHdfCD1m0PXbHtaLEaURJBLH75PtdYMEFBP7Er/3xxmCxzy4Wu8/zWpDcD5/FwjPcEEAAAQQQQAABBBBAAIECCRCCCrSzaWpSgDICCCCAAAIIIIBAUQUIQUXd87QbAQSKKUCrEUAAAQQQQMAQgngTIIAAAggggEDuBWggAgggkBQgBCU1KCOAAAIIIIAAAgggkB8BWrKPACFoHxhmI4AAAggggAACCCCAQD4FCEH53K97raKEAAIIIIAAAggggAACPQKEoB4OJhBAIC8CtAMBBBBAAAEEENhPgBC0nwzzEUAAAQQQyJ4ANUYAAQQQOIIAIegISCyCAAIIIIAAAgggkGYB6obA8QQIQcfzYmkEUiXw2rlz25uVSrhRqbiDhnXfb6Wq4lQGAQQQQAABBBCYokBuQtAUDdk0AhMR2PD9oD/onJ6bO+2MseaQm7W2pK+9UqnsHrIoTyOAAAIIIIAAArkXIATlfhfTwKwLSHgJpbfHGWsH/bweq3klY8qyPndlaYkwdCw5FkYAAQQQQACBPAl4eWoMbUEgLwJvVCoPNn0/XK9UnLTJ6oOM97u7ezs791arVTtomNnZafa/sOR5URh687nn7vU/xzQC2RCglggggAACCJxcgBB0cjteicBIBf6zUtnR4KM9NTPGzDkrt74t2CBoDQg63u9vbZ3pW7Q7eXFra05f44JgpzuzUyifOjWv2+xMMkIAAQQQSLsA9UMAgZEIEIJGwshKEDi5gISe6MIGu8bMavAZtCbPOadBZqXRkHw0aInD5601Gqd0HTNB0NMzpNvU0+1+VqlsHb4WlkAAAQQQQAABBCYvMOotEoJGLcr6EDiiQBx+ZPGHLmygp79ZCT4y3tHgslyrjexn9WKj0e4ZMkZWL1uXuxYeGPPc+rlzn8gkdwQQQAABBBBAINcCIzuwyrUSjUuBQH6qsOH7ofa8SIt6wo8GEQ0+0iO0s1at2hUJPjI+JcuN5S7r9u5b23OKnJ2be/L6M8/8eiwbZKUIIIAAAggggEBKBAhBKdkRVCP/Ahp+pPfHGWsHXejASSiJgs+r1erYgk+/8vdu3IhOkUvObz7yyOeuVirbyXmUpyjAphFAAAEEEEBg5AKEoJGTskIEegX0wgNx+Ol9xhjP2vhCB1P9WVypVr+WrJtU5jRBKClCGQEEJi3A9hBAAIFxCsixzjhXz7oRKK5A3POjFx5IKjiZ8IKgGX3W58aNE1/oQFYzsrs15m2tT3KF8svh9BXf5xLaSRTKCCCAAAIIjFeAtU9IQI5zJrQlNoNAQQTeqlSCQT0/cfjR096WG425NHKsVquSh/ZqVrJ2niC050EJAQQQQAABBPIhQAhK236kPpkVuHb+/I6Gn8CY3p8r54xegCDN4SeJPigIven795PLUEYAAQQQQAABBLIs0HuwluWWUHcEpiiw4fthODMz21MFCT+BtTurtZrVCxD0PJfyif4gVLb21OsvvHB3nNVm3QgggAACCCCAwKQECEGTkmY7uRSQnp/oi071im/dBkr4sWEYaPi5fOPGxK701t3+iAr9F0uYDcMzry8sfDyi1bMaBBBoC/CIAAIIIDAFAULQFNDZZPYF1hcX70kA0o/52GRrQmOchp+Ver2cnJ/FsjTsoYslzJbLT//kq1+9mcX2UGcEEEAAgTQJUBcEpitACJquP1vPoMB6pRLaUmk+WXUJDE5PIbtUrebuZ0rblWxra3f3/FXf95PzKBdT4Lr0DF7x/eDq0lKop4Ruys+G/Hy4eNB/FIx08H2n29mQ7ck/IoL1s2c/K6Y8rUYAAQQQGFZgagdsw1ac1yMwaQE56HqgB3QSeOS+t3XpDrq7ksPws9dCY/qDkGdtVYLQo8llKOdH4CcvvLB9rRJd5VBP99TB6Xtfw42EkKis003pGSxZ68nNGmut/CxYKwzxIMXR3nXt1lrjyTuwVPLs/PxjWo9o0ICkIWxhoWW4IYAAAgggcIgAIegQIJ5GQAXWfV97f/ovax31/qxVq8cJA7q6TA6rfZfPttb+fyYbUuBKS7i5OyjcRCGiUumGm1YYng6N0b8PVrh0kJExUcFGj+bQm5NIdOhCR1/AHba+dr2sLZdLcXs25ef2jZdeunX0rbAkAggggEBRBPSPXFHaSjsROLbAa+fObW/KwaGVW/LFeslrCQWF+/mRNnePgLWgp0IlXShPXuCN8+c/WF9aCqSnMtxcWgrl/Rr299jEoUDCzZlB4eaotY5jjY51kPeAM5JOwjB0LgzDVrP5ib5HoqFWs9FYwnN7XB1qeq2zvtbOzi9dEIQmDJ11kozkvl/9nfzczjSb56L2+77T0/b2W5b5CCCAAALFEijcQVyxdi+tHUbgrQsXdk/PzZ3Wg714PVKOen+ydsnruP6jGMsvDTmObq+pZK1Mtss8jlZg8+mn/2FjcXE3Cje+H33mJj6YT56SNjMz86z1PM+WStbJSN6jVsKJMe1Hc5SbvMbokFhWJ51ptcKy592LQ8xaJ9DoWAc9DXS1VvMu1eveWr1e+vatW08l1jGW4re3th5fazRKq/W6tyLblu13w5WEolArPnDD4qFMsaH2Eg1cjpkIjFqA9SGAQCoFOIBJ5W6hUtMW0P+oB871XOFNv/NHDvwK/zOzXK2Wkgea676fnJz2rsvE9uOAIwfkofi1A444Rj04lYrTkOM+97m/MKVSOQo31loJNTZqnBSlHBUPfXi4l0T3lZM3cSjhZjsZbtY6Aaczz5Oxt3rzZumb77575tDtpGQBCUWluB27s7Nb0ljtqXq4dmKovUTiH1nLPuBzRA8rMQcBBBAYSiDtL5a/hWmvIvVDYLICejqR/kc9udWZZ5/9apa/8yfZllGU3S9/+R/xeqy15trSUhBPF3187Utf+rtrCwtNOcA+NOCIldWbhBorg7EyI7rbbimaHPQgB/hR740sqQf6Lgzbp6Tt7u5+KAGm3TvSOYWsO12tRuFGg6yEm0cGrTcv8159++3nJRB5cU+R/FMj1FPoHmqfWFtr488R8T5+CIgZCCCAQD4FCEH53K8paFU2qxAFIGPkuNJENylEp79d/NGP3olm8BAJXPr00+/JL4/uaXGh58lk9FQhHt5cWLirp1N1gk50SWgpRxcWCB999C/DcnlGIOTY2lpjrQ7GyozoLpPRuP8h7rXZG0efeXGBHL4Hwe79e/f+NhFmrBzgR0P/KWmvvvfe2f5VM23M5VqtpKfQqWGr2QxM7NyL40mvkPvx17/++d7ZTCGAAAII5E2gUAcuedt5tGd0AteXl7+hB7Hy3/Xusaqs3ekBpoy5DxDQ3oTkbD2FKzmdhfIbS0v/fXVxsbW+tBSdktY9Ha1SiQKNvicGDeVy+YyeTiVttHLbCzgywwwaOgfc8v5qP+vcwwEn7rXZG0efeVlrNDwZZr/34Yd/3X4xj8MKfPvWrXLcQ2RlX+j64n2j+3Pu/v1fXX/lldM6nwEBBBBAIJ8ChKB87ldadQwBOcgNm5999tPkS1wYag9Qan8+Ni5c+FcdknWeRrl5587V7natNRsLC1M7neitpaVPdV92hgNDjP63X5ZzM573klcqlaznWWPl1m3M8Qp6AK1D1LsgB9V6lzU4Iz043m9+8/fxAfda/LmbWo2AI0BpuK/IvtDeodlmc++LV601ze3t7TTUL0t1oK4IIIBAlgRSe5CXJUTqmk2BK5VK9CWQUnsrQ/deCsPdtXo9tT8b0mtxUQ62/1iHqNyt+eQL37l9+7Ic6HdPizPl8ljd1hcWPtXT0HTQIKM9NzpooAk87wkR0H2pgxT3v1u7/yISYPZ/YecZKyFZis4Lgrt6AL0m4UaHKOzIQfWaDDLfW200Zpc//vivZFnuKRe4eOvWF2Sf9bwx9AIpKa821UMAgekLUIOMCoz1gCWjJlQ75wJvVSqBHjSXjOk54DFy275//9ffqtdnpZjau+d53at1JcvTqrAc6Avl3tbj0+Le8v26OLdkiMKmjA/snTno+Tjo2HL5CT0NTQdrbbQD7d6me0pRz0zPnN6J6HlJPNrrFwZBsBuGb69qmIlPR5OyTg8aViQky3xvudF4tHetTGVdoBNws94M6o8AAgggcIgAIegQoEOfZoHMCFyrtMNPYMxD73sbBOGqHPR+/4MPMvWBaDmQf3rYHfCTpaWfbV64sCMh5MRhpacOEk5kXS6wdlHma0CyMh7qvt8KpP3RFdIkyxj9bIcOkmd+ofsy6pmRfarlQUP0vPTYaK/fpUaj/Gq9/rWhKsmLEUAAAQQQQCAzAg8dDGam5lQUgSMKXH3qqS09KA/Nw+FHfgBaeoC80mjowfoR1zjlxcLw+4ka/FDbdpIh7l1ped7LEiK098sm1nto8bgLaGA57mv6l+/8l96VnPtE95sGmWiQ3psVCTQ6XG409LS4/pcyjQACCCCAAAIIdAXkGLBbpoBA7gReO39+23vsseeSDYuO9FutXT2IXq5W9VLGyadTX37QbP6NVHJHhqHukcOANQwTVpKv7ZQDCSwNtdawouNhhvg0tG/Vak8NqDqzEBhawHl7fxa1Z3HACpmFAAIIIJADgb3f9jloDE1AICmwfuHCg/mZmZ7L3M60Ws0VPUXq5k3t+Ugunpnyd99//4G5e/cLxtrdUVRae1estc1yGP6XBpRhwoq+Nq6ThiwZPAksS/E8xgikVeD6889f1x5VCe/ytjXRaZbLWeohTiss9cqRAE1BIF8ChKB87U9a0xH48Ve+8u/yX9y56GimM0/Cj3fx5s25zmSmR6sffXR/9caNWQ0tww7au7Jy48bcN+v1b4wCZWZnpxmvRw8o5cAyjKcZI5BGgWtnz/5vc3b2Fa1b93eGc/L21TkMCCCAAAJ5FDhyCMpj42lTfgVONZt/kGydBiA5uOGgJokypvLFra05+cUSJFZv1xcWWolpigikRuD1F1+8E87P95xeqb8o9DLnqakkFUEAAQQQGLmAHKuMfJ2sEIGpC2jvhoYe6Q1yQwagqbclixVYrlbLpv1dOlH1bblcWl9cfBBN8IBASgQ2JJzPBsHvJKujPavJ0zqTz1FGAAEEEMiPACEoP/uSlvQJaPhZqdU8DUN9TzE5AYHVel1/v+g/1aOt2VIpF6ciRo0pxEO+G3nV9wMj4TxupZPCI573PzLijgACCCBQAAE9SClAM2kiAghMQ0D+q+7pwWW87Y1KJTkZz2aMwEQF1peWQs/anr9/a9Wqfendd78y0YqwsXQKUCsEECiEQM8fgUK0mEYigMBEBfTgMrlB/dLa5DRlBCYpsOn7ofU86SDubtVJWE9Od5+ggAACCBRJoGhtJQQVbY/TXgSmIGCDoHuFOCl4rz3++DtTqAabLLDAD435kw3fd87aKUo92AAADL9JREFUbuDRzwxKAOLvYIHfFzQdAQSKK8Av/+Lu+76WM4nA+ARW2t+30j0V7vQTT7w4vq2xZgR6Ba6dPfvJuUrlX8xe/jGhc6F+ZrB3SaYQQAABBIoiQAgqyp6mnQhMWWClWv1asgr6uYzk9NTKbDjXAuu+3wrn55+MG+mcM4ExrUu1WimexxgBBBBAoHgChKDi7XNajMBUBKwxPzetlhx/tjevn8t4w/e5bHabg8cxCGxUKqG1di/sSABqhuHW5Wp1Zgyby9wqqTACCCBQZAFCUJH3Pm1HYMICqzdv9nx/0Iy1XDZ7wvugKJvTACRtlewtj3LXczFv1Wp/9t1G43mZ5I4AAsUVoOUIRAKEoIiBBwQQmJRA5/uDupvTq3V1JyggMKTAvxnzpxKANPPsBSDn3Fq1av/ImH8ecvW8HAEEEEAgJwLFC0E52XE0A4EsC+w6txPXX6/Wte77u/E0YwROKvD6iy/+6vlK5Z/6Xh+u1Wr8retDYRIBBBAougB/GIr+DqD9hRFIU0NfrdVOSX30v/UyMsZaW5YJfh8ZbicV2FxaCmeD4PM9r2+1gtVqde8zQT1PMoEAAgggUGQBDjqKvPdpOwJTFJCD057fP9d8vzXF6rDpDAtE3/+T/AJU58yDIHg/+gyaMRluGVVHAAEEEBiXQM9ByLg2wnoRQACBQQLzzn0cz9fT4jYXF4N4mjEChwlI708r+vyPbX/8R3oTjQxutVazv9donDvs9TyPQL4FaB0CCBwkQAg6SIfnEEBgrAIv12rPOOfCeCOuVOJ3UozB+EABCT+h87zuqW4SfoxxLlirVnkPHSjHkwgggEDOBY7YPP5YHBGKxRBAYDwCa7VaKTqA7axeDm6Tk525jBBoC/x4YeHD9UpF3yPt7p/2bLNWrVp5L5U7k4wQQAABBBA4UIAQdCAPT2ZQgCpnUEAPYJPV3vD9bu9Qcj7lYgu8sbjYnCuXvxynH+ec8YIgXJUAVGwZWo8AAgggcFwBQtBxxVgeAQTGIpC8bLZeLk56hMKxbCi3K813w/TzYjOl0kyylaUHDz5dbjS6p8Qln6OMAAIIIIDAQQKEoIN0eA4BBCYmoJfNtmGYvDCCvXb+PFeMm9geSO+Gri4thT2fF3POzJfL/7j8wQdPprfW1GxiAmwIAQQQOIEAIegEaLwEAQTGI7BSr5et27tQQjgzU7r25S9vj2drrDULAtoj6CUuf22Nia7+9vI77/x5FupPHRFAAIFxCbDe4QQIQcP58WoEEBixwEqtVjJO/tXfWW945szpq5XK3c4kowIJbPh+zwUQXBi6Fa7+VqB3AE1FAAEExidACBqf7ZjXzOoRyK/Aaq3W87tJJs4QhPK7vwe1THqAnOl8/48+74wJ1+p1eSvoFAMCCCCAAALDCfAHZTg/Xo0AAmMS6L/il/yy0iC0bca0PVabDgHp/Qk7l8COKiThR68Ap9//wwUQIhEeEEAAAQRGISDHFaNYDetAAAEERi+w88UvzuhBcLxm+YV1+orv34unGedHoBt+rNwSzZL9v73caPD9P8aYBAtFBBBAAIEhBeSYYsg18HIEEEBgTALfff31Vv93CJWsnScIjQl8Cqs9IPwY7Q28VK0+MoVqsUkEEEiPADVBYCwChKCxsLJSBBAYpUDzzp2ryfVpEPrpM898lpxHOVsCG0tL7dPepOPH9lU9MOah8Nu3CJMIIIAAAggMJZD+EDRU83gxAgjkQeA7t29fLs/O1pNt2XnkkcfWfZ/vEUqiZKDc7fnxPNsffrzd3UB7fy5Xqz1fipqBZlFFBBBAAIGMCRCCMrbDqG5xBGhpr8A3337bD3Z2PknOtdaW1hcXw+Q8yicTuP7KKzNvPfvsL9587rmdzXPndjVgXvH9YFMGKQdXpecm6r2R8WalEm7IsC6DPB9qsNGxLOcOGuQ1zshO6wk/zukV0aPws/zee3z252S7j1chgAACCBxTgBB0TDAWRwCB6Qlc3tp6SnsKkjWwpZLVg/DkvKyU3Q9+UBpJ8KhUnAYMHSSYOPGIhqjcea6n7Pvd5fU1OjS3t5vB6dOPl0+dmnVzc2XJKiJrPWetdNlYT27WaO+NDM4YzTFWHqw8b4210VhGWtx3MH0351ywWqvZtVotGX76lmISAQQQQACB0QsQgkZvyhoRQGDMAhqErDFyLN7ZkBx964F8Z+rAkbzIk+Bxe78ej03p6Tisx0O31RMqNGhosJDhofn6nAzaQ6KvSw6bP/95ayTBI9FicTGSQqIhKpv2radsk1Pt50f9KM7dVUrYkb3VmSM9P0GrFeg+JPx0iSggYIwBAQEEJilACJqkNttCAIGRCaxUq54Nw86RdXu1GjB6QoiEEp2XHDYrlUCCx+/u1+PhpKfjsB4P3VoyRkRlDRYyRGVdQIaesjwns8Z+jwJHZytJnKgsAUSfj8qyjI6jQebrOWlWntQhLstzcjfOBoFTaxmHXhiGLgxDmQ70AgbhvXu7c3fvfta8c2djtVq18bCWLEtvj/b4RM9J+fLNm/T8iD93BBBAAAFjzJQQCEFTgmezCCAwvMBKve4Z6VVIrmkawUO3r2lBxzpE5XawMFFZZ8oQlyVraM4wycAh9dano7AhIcPpIEHDyS2U5UL5ZR2EOzuB3dlpzezsNKX8fx9Vq+UoWPQHjs50TxDReRJApPfFxvN1HA0yX0KKt1KrRUNcluc8Wb+30mh4ai3j0nK9XlqTQabLegGDSx9+OPvKRx994Tu3b69JE7kjgAACCCCQCQH5u5qJelLJ/ArQMgSGEliVXgUJBJ/qSqIUoQUZtCyj6DQsCRLROJqWUjdwaDkMXRQ4nHMSNvRlGjjC0JjQScDSK5YFrVZLxs15Y97XHigJBt0ej7gsgaE7Lyq3g0U3cOhy0XwJI1EQkec1dMSBo7PeKGxIyPB0kKDhybIlWa60LIHn0tZWeWVra+bi1taclL/4h8ZIZ0ynVYwQQAABBBBA4MgChKAjU7EgAgikVUACwZNxyOgGDQkbOk9ChpUgYXUcTVerXjdwaLlebweOuBekWtXAUbok4zUJWMvvvVe+fPPmjIznXq5Wz3UC1AgoWAUCCCCAAAIITEuAEDQtebaLAAIIIIBAEQVoMwIIIJACAUJQCnYCVUAAAQQQQAABBBDItwCtS5cAIShd+4PaIIAAAggggAACCCCAwJgFCEFjBt5bPSUEEEAAAQQQQAABBBBIgwAhKA17gTogkGcB2oYAAggggAACCKRMgBCUsh1CdRBAAAEE8iFAKxBAAAEE0itACErvvqFmCCCAAAIIIIBA1gSoLwKZECAEZWI3UUkEEEAAAQQQQAABBBAYlcDoQ9CoasZ6EEAAAQQQQAABBBBAAIExCBCCxoDKKospQKsRQAABBBBAAAEEsiFACMrGfqKWCCCAQFoFqBcCCCCAAAKZEyAEZW6XUWEEEEAAAQQQmL4ANUAAgSwLEIKyvPeoOwIIIIAAAggggAACkxTIybYIQTnZkTQDAQQQQAABBBBAAAEEjiZACDqaE0vtCVBCAAEEEEAAAQQQQCDTAoSgTO8+Ko8AApMTYEsIIIAAAgggkBcBQlBe9iTtQAABBBBAYBwCrBMBBBDIoQAhKIc7lSYhgAACCCCAAAIIDCfAq/MtQAjK9/6ldQgggAACCCCAAAIIINAnQAjqA9mbpIQAAggggAACCCCAAAJ5FCAE5XGv0iYEhhHgtQgggAACCCCAQM4FCEE538E0DwEEEEDgaAIshQACCCBQHAFCUHH2NS1FAAEEEEAAAQT6BZhGoJAChKBC7nYajQACCCCAAAIIIIBAcQU8U9y203IEEEAAAQQQQAABBBAooAA9QQXc6TS5LcAjAggggAACCCCAQDEFCEHF3O+0GgEEiitAyxFAAAEEECi8ACGo8G8BABBAAAEEECiCAG1EAAEE9gQIQXsWlBBAAAEEEEAAAQQQyJcArRkoQAgayMJMBBBAAAEEEEAAAQQQyKsAISive3avXZQQQAABBBBAAAEEEEAgIUAISmBQRACBPAnQFgQQQAABBBBAYLAAIWiwC3MRQAABBBDIpgC1RgABBBA4VIAQdCgRCyCAAAIIIIAAAgikXYD6IXAcAULQcbRYFgEEEEAAAQQQQAABBDIvkKMQlPl9QQMQQAABBBBAAAEEEEBgAgKEoAkgswkExirAyhFAAAEEEEAAAQSOJUAIOhYXCyOAAAIIpEWAeiCAAAIIIHBSAULQSeV4HQIIIIAAAgggMHkBtogAAiMQIASNAJFVIIAAAggggAACCCCAwDgFRrtuQtBoPVkbAggggAACCCCAAAIIpFyAEJTyHUT19gQoIYAAAggggAACCCAwCoHfAgAA//+fKEBFAAAABklEQVQDAIdK04diKG2lAAAAAElFTkSuQmCC",
      "geoLocation": "33.934108, 35.648749",
      "dateConducted": "2026-07-12",
      "pictures": [],
      "baitStationsAudit": null,
      "uvMachinesAudit": null,
      "baitStickersReplaced": 0,
      "uvStickersReplaced": 0
    }
  ],
  "commuteLog": [
    {
      "id": "com-1",
      "scheduleId": "sch-1",
      "region": "Central",
      "teamLeaderId": "tl-faris",
      "startLocation": "Buckler Central Hub",
      "endLocation": "Al-Harthiya, Baghdad",
      "distanceKm": 12.5,
      "durationMins": 35,
      "fuelUsedLiters": 1.8,
      "status": "Completed"
    },
    {
      "id": "com-2",
      "scheduleId": "sch-2",
      "region": "Central",
      "teamLeaderId": "tl-omar",
      "startLocation": "Buckler Central Hub",
      "endLocation": "Al-Mansour, Baghdad",
      "distanceKm": 8.2,
      "durationMins": 22,
      "fuelUsedLiters": 1.2,
      "status": "Completed"
    },
    {
      "id": "com-3",
      "scheduleId": "sch-3",
      "region": "Kurdistan",
      "teamLeaderId": "tl-karwan",
      "startLocation": "Buckler Kurdistan Hub",
      "endLocation": "100m Road, Erbil",
      "distanceKm": 15,
      "durationMins": 28,
      "fuelUsedLiters": 2.1,
      "status": "Completed"
    },
    {
      "id": "com-4",
      "scheduleId": "sch-4",
      "region": "Central",
      "teamLeaderId": "tl-faris",
      "startLocation": "Buckler Central Hub",
      "endLocation": "Al-Karrada, Baghdad",
      "distanceKm": 6.4,
      "durationMins": 18,
      "fuelUsedLiters": 0.9,
      "status": "Dispatched"
    },
    {
      "id": "com-5",
      "scheduleId": "sch-5",
      "region": "Kurdistan",
      "teamLeaderId": "tl-sherwan",
      "startLocation": "Buckler Kurdistan Hub",
      "endLocation": "Gulan Street, Erbil",
      "distanceKm": 9.1,
      "durationMins": 20,
      "fuelUsedLiters": 1.3,
      "status": "Scheduled"
    },
    {
      "id": "com-6",
      "scheduleId": "sch-6",
      "region": "South",
      "teamLeaderId": "tl-murtadha",
      "startLocation": "Buckler South Hub",
      "endLocation": "Umm Qasr Port, Basra",
      "distanceKm": 58,
      "durationMins": 65,
      "fuelUsedLiters": 7.5,
      "status": "Dispatched"
    },
    {
      "id": "com-7",
      "scheduleId": "sch-7",
      "region": "South",
      "teamLeaderId": "tl-karrar",
      "startLocation": "Buckler South Hub",
      "endLocation": "Shatt Corniche, Basra",
      "distanceKm": 4.5,
      "durationMins": 12,
      "fuelUsedLiters": 0.6,
      "status": "Completed"
    },
    {
      "scheduleId": "sch-1783740321330",
      "region": "Central",
      "teamLeaderId": "tl-sherwan",
      "startLocation": "Buckler Central Hub",
      "endLocation": "Al-Harthiya, Baghdad",
      "distanceKm": 5.2,
      "durationMins": 32,
      "fuelUsedLiters": 0.9,
      "status": "Completed",
      "id": "com-1783740510666"
    },
    {
      "scheduleId": "sch-1783808553825",
      "region": "Kurdistan",
      "teamLeaderId": "tl-karwan",
      "startLocation": "Buckler Kurdistan Hub",
      "endLocation": "100m Road, Erbil",
      "distanceKm": 5,
      "durationMins": 14,
      "fuelUsedLiters": 2,
      "status": "Completed",
      "id": "com-1783808602616"
    }
  ],
  "complaints": [
    {
      "id": "cmp-1",
      "clientId": "cli-c1",
      "complainantName": "Zaid Mahmoud",
      "phone": "+964 770 123 4567",
      "details": "Flies activity noted in food court zone again. Urgent callback needed.",
      "severity": "High",
      "status": "Pending",
      "dateSubmitted": "2026-07-09",
      "region": "Central",
      "city": "Baghdad",
      "assignedStaffId": "usr-ts-c",
      "resolutionDetails": ""
    },
    {
      "id": "cmp-2",
      "clientId": "cli-k1",
      "complainantName": "Sherzad Taha",
      "phone": "+964 750 445 1122",
      "details": "Minor bird nests observed on structural girders post bird-spikes installation.",
      "severity": "Medium",
      "status": "In Progress",
      "dateSubmitted": "2026-06-04",
      "region": "Kurdistan",
      "city": "Erbil",
      "assignedStaffId": "usr-ts-k",
      "resolutionDetails": "Inspecting spikes tomorrow."
    },
    {
      "id": "cmp-3",
      "clientId": "cli-s2",
      "complainantName": "Karim Mansour",
      "phone": "+964 782 555 6677",
      "details": "Requested immediate delivery of NPK fertilizer. Slight delay.",
      "severity": "Low",
      "status": "Resolved",
      "dateSubmitted": "2026-06-02",
      "region": "South",
      "city": "Basra",
      "assignedStaffId": "usr-om-s",
      "resolutionDetails": "Fertilizers delivered on morning of June 3rd."
    },
    {
      "clientId": "cli-c1",
      "region": "Central",
      "city": "Baghdad",
      "complainantName": "Flies",
      "phone": "+9647866772202",
      "severity": "High",
      "status": "In Progress",
      "assignedStaffId": "tl-sherwan",
      "details": "lots  of flies ",
      "dateSubmitted": "2026-07-11",
      "id": "com-1783740957915"
    }
  ],
  "notifications": [
    {
      "id": "ntf-1783741040595-2",
      "type": "complaint",
      "message": "🔔 Complaint update: Baghdad Mall — In Progress [High]",
      "read": false,
      "timestamp": "2026-07-11T03:37:20.595Z"
    },
    {
      "id": "ntf-1783741040595-1",
      "type": "complaint",
      "message": "📋 Complaint for Baghdad Mall updated → In Progress",
      "read": false,
      "timestamp": "2026-07-11T03:37:20.595Z"
    },
    {
      "id": "ntf-1783740957948-g",
      "type": "complaint",
      "message": "⚠️ New High complaint: Baghdad Mall",
      "read": false,
      "timestamp": "2026-07-11T03:35:57.948Z"
    },
    {
      "id": "ntf-1783740957948-a",
      "type": "complaint",
      "message": "⚠️ New complaint assigned to you — Client: Baghdad Mall [High]",
      "read": false,
      "timestamp": "2026-07-11T03:35:57.948Z"
    },
    {
      "id": "ntf-1",
      "userId": "usr-gm",
      "title": "New Complaint Registered",
      "message": "Zaid Mahmoud (Baghdad Mall) has filed a High severity complaint.",
      "date": "2026-06-03",
      "read": true
    },
    {
      "id": "ntf-2",
      "userId": "tl-faris",
      "title": "New Job Assigned",
      "message": "You have been assigned to conduct poultry disinfection at Babylon Hospital on June 4.",
      "date": "2026-06-04",
      "read": false
    },
    {
      "id": "ntf-3",
      "userId": "usr-ac-c",
      "title": "Operation Log Submitted",
      "message": "Faris Naji completed and logged the visit for Baghdad Mall.",
      "date": "2026-06-01",
      "read": true
    },
    {
      "userId": "tl-omar",
      "title": "New Visit Scheduled",
      "message": "Admin scheduled a pest control operations visit on 2026-07-10 @ 09:00.",
      "date": "2026-07-08",
      "read": false,
      "id": "not-1783514108779"
    },
    {
      "userId": "tl-sherwan",
      "title": "New Visit Scheduled",
      "message": "Admin scheduled a termite treatment operations visit on 2026-07-08 @ 09:00.",
      "date": "2026-07-08",
      "read": false,
      "id": "not-1783514135213"
    },
    {
      "userId": "tl-karwan",
      "title": "New Visit Scheduled",
      "message": "Admin scheduled a pest control operations visit on 2026-07-10 @ 09:00.",
      "date": "2026-07-08",
      "read": false,
      "id": "not-1783514191935"
    },
    {
      "userId": "tl-omar",
      "title": "New Visit Scheduled",
      "message": "Admin scheduled a pest control operations visit on 2026-07-09 @ 09:00.",
      "date": "2026-07-09",
      "read": false,
      "id": "not-1783596656408"
    },
    {
      "userId": "tl-omar",
      "title": "New Visit Scheduled",
      "message": "Admin scheduled a pest control operations visit on 2026-07-09 @ 09:00.",
      "date": "2026-07-09",
      "read": false,
      "id": "not-1783601249117"
    },
    {
      "userId": "usr-gm",
      "title": "Operation Log Logged",
      "message": "TL completed and logged the visit for Al-Basra Sheraton (South).",
      "date": "2026-07-09",
      "read": true,
      "id": "not-1783601706951"
    },
    {
      "userId": "usr-om-c",
      "title": "Operation Log Logged",
      "message": "TL completed and logged the visit for Al-Basra Sheraton (South).",
      "date": "2026-07-09",
      "read": false,
      "id": "not-1783601706954"
    },
    {
      "id": "noti-sales-1783676532353-441439",
      "title": "📝 Sales Deal Updated",
      "message": "Opportunity \"Poultry Halls Abu Sajad\" details or stage changed to \"Prospecting\". ",
      "date": "7/10/2026, 12:42:12 PM",
      "read": false,
      "userId": "use-1783676143027"
    },
    {
      "id": "noti-sales-1783676532388-980970",
      "title": "📝 Sales Deal Updated",
      "message": "Opportunity \"Poultry Halls Abu Sajad\" details or stage changed to \"Prospecting\". ",
      "date": "7/10/2026, 12:42:12 PM",
      "read": false,
      "userId": "use-1783676099532"
    },
    {
      "id": "noti-sales-1783676532411-499088",
      "title": "📝 Sales Deal Updated",
      "message": "Opportunity \"Poultry Halls Abu Sajad\" details or stage changed to \"Prospecting\". ",
      "date": "7/10/2026, 12:42:12 PM",
      "read": true,
      "userId": "usr-gm"
    },
    {
      "id": "noti-sales-1783676628333-352129",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Poultry Halls Abu Sajad\": SM (✅), OM (✅), GM (❌).",
      "date": "7/10/2026, 12:43:48 PM",
      "read": false,
      "userId": "use-1783676143027"
    },
    {
      "id": "noti-sales-1783676628358-790539",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Poultry Halls Abu Sajad\": SM (✅), OM (✅), GM (❌).",
      "date": "7/10/2026, 12:43:48 PM",
      "read": false,
      "userId": "use-1783676099532"
    },
    {
      "id": "noti-sales-1783676628390-177187",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Poultry Halls Abu Sajad\": SM (✅), OM (✅), GM (❌).",
      "date": "7/10/2026, 12:43:48 PM",
      "read": true,
      "userId": "usr-gm"
    },
    {
      "id": "noti-sales-1783676628415-809123",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Poultry Halls Abu Sajad\": SM (✅), OM (✅), GM (❌).",
      "date": "7/10/2026, 12:43:48 PM",
      "read": false,
      "userId": "usr-tm"
    },
    {
      "id": "noti-sales-1783676628438-965037",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Poultry Halls Abu Sajad\": SM (✅), OM (✅), GM (❌).",
      "date": "7/10/2026, 12:43:48 PM",
      "read": false,
      "userId": "usr-om-c"
    },
    {
      "id": "noti-sales-1783676630796-322492",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Poultry Halls Abu Sajad\": SM (✅), OM (✅), GM (✅).",
      "date": "7/10/2026, 12:43:50 PM",
      "read": false,
      "userId": "use-1783676143027"
    },
    {
      "id": "noti-sales-1783676630817-565401",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Poultry Halls Abu Sajad\": SM (✅), OM (✅), GM (✅).",
      "date": "7/10/2026, 12:43:50 PM",
      "read": false,
      "userId": "use-1783676099532"
    },
    {
      "id": "noti-sales-1783676630838-443696",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Poultry Halls Abu Sajad\": SM (✅), OM (✅), GM (✅).",
      "date": "7/10/2026, 12:43:50 PM",
      "read": true,
      "userId": "usr-gm"
    },
    {
      "id": "noti-sales-1783676630863-630145",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Poultry Halls Abu Sajad\": SM (✅), OM (✅), GM (✅).",
      "date": "7/10/2026, 12:43:50 PM",
      "read": false,
      "userId": "usr-tm"
    },
    {
      "id": "noti-sales-1783676630885-161041",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Poultry Halls Abu Sajad\": SM (✅), OM (✅), GM (✅).",
      "date": "7/10/2026, 12:43:50 PM",
      "read": false,
      "userId": "usr-om-c"
    },
    {
      "id": "noti-sales-1783677183224-77250",
      "title": "📝 Sales Deal Updated",
      "message": "Opportunity \"Poultry Halls Abu Sajad\" details or stage changed to \"Prospecting\". ",
      "date": "7/10/2026, 12:53:03 PM",
      "read": false,
      "userId": "use-1783676143027"
    },
    {
      "id": "noti-sales-1783677183264-650539",
      "title": "📝 Sales Deal Updated",
      "message": "Opportunity \"Poultry Halls Abu Sajad\" details or stage changed to \"Prospecting\". ",
      "date": "7/10/2026, 12:53:03 PM",
      "read": false,
      "userId": "use-1783676099532"
    },
    {
      "id": "noti-sales-1783677183287-271330",
      "title": "📝 Sales Deal Updated",
      "message": "Opportunity \"Poultry Halls Abu Sajad\" details or stage changed to \"Prospecting\". ",
      "date": "7/10/2026, 12:53:03 PM",
      "read": true,
      "userId": "usr-gm"
    },
    {
      "id": "noti-sales-1783679382388-564278",
      "title": "📝 Sales Deal Updated",
      "message": "Opportunity \"Erbil International Hotel Full Treatment\" details or stage changed to \"Prospecting\". ",
      "date": "7/10/2026, 1:29:42 PM",
      "read": false,
      "userId": "use-1783676143027"
    },
    {
      "id": "noti-sales-1783679382429-27948",
      "title": "📝 Sales Deal Updated",
      "message": "Opportunity \"Erbil International Hotel Full Treatment\" details or stage changed to \"Prospecting\". ",
      "date": "7/10/2026, 1:29:42 PM",
      "read": false,
      "userId": "use-1783676099532"
    },
    {
      "id": "noti-sales-1783679382456-719754",
      "title": "📝 Sales Deal Updated",
      "message": "Opportunity \"Erbil International Hotel Full Treatment\" details or stage changed to \"Prospecting\". ",
      "date": "7/10/2026, 1:29:42 PM",
      "read": true,
      "userId": "usr-gm"
    },
    {
      "id": "noti-sales-1783679413489-64403",
      "title": "📝 Sales Deal Updated",
      "message": "Opportunity \"Erbil International Hotel Full Treatment\" details or stage changed to \"Prospecting\". ",
      "date": "7/10/2026, 1:30:13 PM",
      "read": false,
      "userId": "use-1783676143027"
    },
    {
      "id": "noti-sales-1783679413502-89358",
      "title": "📝 Sales Deal Updated",
      "message": "Opportunity \"Erbil International Hotel Full Treatment\" details or stage changed to \"Prospecting\". ",
      "date": "7/10/2026, 1:30:13 PM",
      "read": false,
      "userId": "use-1783676099532"
    },
    {
      "id": "noti-sales-1783679413514-710173",
      "title": "📝 Sales Deal Updated",
      "message": "Opportunity \"Erbil International Hotel Full Treatment\" details or stage changed to \"Prospecting\". ",
      "date": "7/10/2026, 1:30:13 PM",
      "read": true,
      "userId": "usr-gm"
    },
    {
      "id": "noti-sales-1783679533735-951993",
      "title": "🆕 Sales Deal Registered",
      "message": "Opportunity \"Basra Park\" for prospect \"Basra park\" has been created. Assigned Rep: Radwan Alobeidy.",
      "date": "7/10/2026, 1:32:13 PM",
      "read": false,
      "userId": "usr-om-c"
    },
    {
      "id": "noti-sales-1783679533748-122082",
      "title": "🆕 Sales Deal Registered",
      "message": "Opportunity \"Basra Park\" for prospect \"Basra park\" has been created. Assigned Rep: Radwan Alobeidy.",
      "date": "7/10/2026, 1:32:13 PM",
      "read": false,
      "userId": "use-1783676099532"
    },
    {
      "id": "noti-sales-1783679533759-540619",
      "title": "🆕 Sales Deal Registered",
      "message": "Opportunity \"Basra Park\" for prospect \"Basra park\" has been created. Assigned Rep: Radwan Alobeidy.",
      "date": "7/10/2026, 1:32:13 PM",
      "read": true,
      "userId": "usr-gm"
    },
    {
      "id": "noti-sales-1783679612374-920033",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Basra Park\": SM (✅), OM (❌), GM (❌).",
      "date": "7/10/2026, 1:33:32 PM",
      "read": false,
      "userId": "usr-om-c"
    },
    {
      "id": "noti-sales-1783679612386-484888",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Basra Park\": SM (✅), OM (❌), GM (❌).",
      "date": "7/10/2026, 1:33:32 PM",
      "read": false,
      "userId": "use-1783676099532"
    },
    {
      "id": "noti-sales-1783679612397-226349",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Basra Park\": SM (✅), OM (❌), GM (❌).",
      "date": "7/10/2026, 1:33:32 PM",
      "read": true,
      "userId": "usr-gm"
    },
    {
      "id": "noti-sales-1783679612407-325586",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Basra Park\": SM (✅), OM (❌), GM (❌).",
      "date": "7/10/2026, 1:33:32 PM",
      "read": false,
      "userId": "usr-tm"
    },
    {
      "id": "noti-sales-1783679613582-704245",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Basra Park\": SM (✅), OM (✅), GM (❌).",
      "date": "7/10/2026, 1:33:33 PM",
      "read": false,
      "userId": "usr-om-c"
    },
    {
      "id": "noti-sales-1783679613593-839569",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Basra Park\": SM (✅), OM (✅), GM (❌).",
      "date": "7/10/2026, 1:33:33 PM",
      "read": false,
      "userId": "use-1783676099532"
    },
    {
      "id": "noti-sales-1783679613603-594944",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Basra Park\": SM (✅), OM (✅), GM (❌).",
      "date": "7/10/2026, 1:33:33 PM",
      "read": true,
      "userId": "usr-gm"
    },
    {
      "id": "noti-sales-1783679613613-841477",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Basra Park\": SM (✅), OM (✅), GM (❌).",
      "date": "7/10/2026, 1:33:33 PM",
      "read": false,
      "userId": "usr-tm"
    },
    {
      "id": "noti-sales-1783679614624-757914",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Basra Park\": SM (✅), OM (✅), GM (✅).",
      "date": "7/10/2026, 1:33:34 PM",
      "read": false,
      "userId": "usr-om-c"
    },
    {
      "id": "noti-sales-1783679614634-639423",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Basra Park\": SM (✅), OM (✅), GM (✅).",
      "date": "7/10/2026, 1:33:34 PM",
      "read": false,
      "userId": "use-1783676099532"
    },
    {
      "id": "noti-sales-1783679614644-599981",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Basra Park\": SM (✅), OM (✅), GM (✅).",
      "date": "7/10/2026, 1:33:34 PM",
      "read": true,
      "userId": "usr-gm"
    },
    {
      "id": "noti-sales-1783679614654-50356",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Basra Park\": SM (✅), OM (✅), GM (✅).",
      "date": "7/10/2026, 1:33:34 PM",
      "read": false,
      "userId": "usr-tm"
    },
    {
      "id": "noti-sales-1783679615729-789034",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Basra Park\": SM (✅), OM (✅), GM (❌).",
      "date": "7/10/2026, 1:33:35 PM",
      "read": false,
      "userId": "usr-om-c"
    },
    {
      "id": "noti-sales-1783679615739-773266",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Basra Park\": SM (✅), OM (✅), GM (❌).",
      "date": "7/10/2026, 1:33:35 PM",
      "read": false,
      "userId": "use-1783676099532"
    },
    {
      "id": "noti-sales-1783679615748-413495",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Basra Park\": SM (✅), OM (✅), GM (❌).",
      "date": "7/10/2026, 1:33:35 PM",
      "read": true,
      "userId": "usr-gm"
    },
    {
      "id": "noti-sales-1783679615759-475117",
      "title": "✅ Quotation Approval Update",
      "message": "Approvals for \"Basra Park\": SM (✅), OM (✅), GM (❌).",
      "date": "7/10/2026, 1:33:35 PM",
      "read": false,
      "userId": "usr-tm"
    },
    {
      "id": "notif-expiry-deal-2-1783679659897",
      "title": "Contract Expiry Warning: \"Basra Oil Terminal Baiting Contract\"",
      "message": "[Deal ID: deal-2] The contract for \"South Oil Co.\" (assigned to Rusul Al Saeidi) expires on 2026-07-31 (in less than 30 days). Plan renewal contact.",
      "timestamp": "7/10/2026, 1:34:19 PM",
      "read": false,
      "userRole": "GM"
    },
    {
      "id": "noti-sales-1783679659916-468495",
      "title": "🎉 Deal CLOSED WON!",
      "message": "Opportunity for \"South Oil Co.\" was Won! Value: $524. Expiry: 2026-07-31. Admin coordinator scheduling visits soon.",
      "date": "7/10/2026, 1:34:19 PM",
      "read": false,
      "userId": "use-1783676099532"
    },
    {
      "id": "noti-sales-1783679659947-385481",
      "title": "🎉 Deal CLOSED WON!",
      "message": "Opportunity for \"South Oil Co.\" was Won! Value: $524. Expiry: 2026-07-31. Admin coordinator scheduling visits soon.",
      "date": "7/10/2026, 1:34:19 PM",
      "read": true,
      "userId": "usr-gm"
    },
    {
      "id": "noti-sales-1783679659965-359630",
      "title": "🎉 Deal CLOSED WON!",
      "message": "Opportunity for \"South Oil Co.\" was Won! Value: $524. Expiry: 2026-07-31. Admin coordinator scheduling visits soon.",
      "date": "7/10/2026, 1:34:19 PM",
      "read": false,
      "userId": "usr-tm"
    },
    {
      "id": "noti-sales-1783679659981-474289",
      "title": "🎉 Deal CLOSED WON!",
      "message": "Opportunity for \"South Oil Co.\" was Won! Value: $524. Expiry: 2026-07-31. Admin coordinator scheduling visits soon.",
      "date": "7/10/2026, 1:34:19 PM",
      "read": false,
      "userId": "usr-om-c"
    },
    {
      "id": "noti-sales-1783679659998-203681",
      "title": "🎉 Deal CLOSED WON!",
      "message": "Opportunity for \"South Oil Co.\" was Won! Value: $524. Expiry: 2026-07-31. Admin coordinator scheduling visits soon.",
      "date": "7/10/2026, 1:34:19 PM",
      "read": false,
      "userId": "usr-ac-c"
    },
    {
      "id": "noti-sales-1783679660014-462764",
      "title": "🎉 Deal CLOSED WON!",
      "message": "Opportunity for \"South Oil Co.\" was Won! Value: $524. Expiry: 2026-07-31. Admin coordinator scheduling visits soon.",
      "date": "7/10/2026, 1:34:20 PM",
      "read": false,
      "userId": "usr-ac-k"
    },
    {
      "userId": "tl-sherwan",
      "title": "New Visit Scheduled",
      "message": "Admin scheduled a pest control operations visit on 2026-07-11 @ 09:00.",
      "date": "2026-07-11",
      "read": false,
      "id": "not-1783740321336"
    },
    {
      "userId": "usr-gm",
      "title": "Operation Log Logged",
      "message": "TL completed and logged the visit for Baghdad Mall (Central).",
      "date": "2026-07-11",
      "read": false,
      "id": "not-1783740510681"
    },
    {
      "userId": "usr-ac-c",
      "title": "Operation Log Logged",
      "message": "TL completed and logged the visit for Baghdad Mall (Central).",
      "date": "2026-07-11",
      "read": false,
      "id": "not-1783740510687"
    },
    {
      "userId": "usr-ts-c",
      "title": "Operation Log Logged",
      "message": "TL completed and logged the visit for Baghdad Mall (Central).",
      "date": "2026-07-11",
      "read": false,
      "id": "not-1783740510694"
    },
    {
      "userId": "usr-ts-s",
      "title": "Operation Log Logged",
      "message": "TL completed and logged the visit for Baghdad Mall (Central).",
      "date": "2026-07-11",
      "read": false,
      "id": "not-1783740510700"
    },
    {
      "userId": "usr-gm",
      "title": "Customer Complaint Filed",
      "message": "New High severity complaint registered for region: Central.",
      "date": "2026-07-11",
      "read": false,
      "id": "not-1783740957926"
    },
    {
      "userId": "usr-ts-c",
      "title": "Customer Complaint Filed",
      "message": "New High severity complaint registered for region: Central.",
      "date": "2026-07-11",
      "read": false,
      "id": "not-1783740957934"
    },
    {
      "userId": "usr-ts-s",
      "title": "Customer Complaint Filed",
      "message": "New High severity complaint registered for region: Central.",
      "date": "2026-07-11",
      "read": false,
      "id": "not-1783740957941"
    },
    {
      "userId": "tl-sherwan",
      "title": "New Visit Scheduled",
      "message": "Admin scheduled a pest control operations visit on 2026-07-11 @ 09:00.",
      "date": "2026-07-11",
      "read": false,
      "id": "not-1783741728689"
    },
    {
      "userId": "tl-karwan",
      "title": "New Visit Scheduled",
      "message": "Admin scheduled a cleaning operations visit on 2026-07-12 @ 09:00.",
      "date": "2026-07-11",
      "read": false,
      "id": "not-1783808553832"
    },
    {
      "userId": "usr-gm",
      "title": "Operation Log Logged",
      "message": "TL completed and logged the visit for Family Mall Erbil (Kurdistan).",
      "date": "2026-07-11",
      "read": false,
      "id": "not-1783808602633"
    },
    {
      "userId": "usr-ac-k",
      "title": "Operation Log Logged",
      "message": "TL completed and logged the visit for Family Mall Erbil (Kurdistan).",
      "date": "2026-07-11",
      "read": false,
      "id": "not-1783808602642"
    },
    {
      "userId": "usr-ts-k",
      "title": "Operation Log Logged",
      "message": "TL completed and logged the visit for Family Mall Erbil (Kurdistan).",
      "date": "2026-07-11",
      "read": false,
      "id": "not-1783808602648"
    }
  ],
  "messages": [
    {
      "id": "msg-1",
      "senderId": "usr-ac-c",
      "receiverId": "usr-gm",
      "text": "Good morning Hassan, the Central region schedules for today are fully allocated.",
      "timestamp": "2026-06-04T08:30:00.000Z"
    },
    {
      "id": "msg-2",
      "senderId": "usr-gm",
      "receiverId": "usr-ac-c",
      "text": "Thank you Yasmin. Please follow up on the Baghdad Mall complaint.",
      "timestamp": "2026-06-04T08:45:00.000Z"
    },
    {
      "id": "msg-3",
      "senderId": "usr-ac-c",
      "receiverId": "chan-central",
      "text": "Central Ops Update: Today we have 2 operations scheduled.",
      "timestamp": "2026-06-04T09:00:00.000Z"
    }
  ],
  "attendanceLog": [
    {
      "id": "att-1",
      "teamLeaderId": "tl-faris",
      "date": "2026-06-01",
      "checkIn": "08:00",
      "checkOut": "17:30"
    },
    {
      "id": "att-2",
      "teamLeaderId": "tl-omar",
      "date": "2026-06-01",
      "checkIn": "08:30",
      "checkOut": "16:45"
    },
    {
      "id": "att-3",
      "teamLeaderId": "tl-karwan",
      "date": "2026-06-01",
      "checkIn": "07:45",
      "checkOut": "17:00"
    },
    {
      "id": "att-4",
      "teamLeaderId": "tl-faris",
      "date": "2026-06-02",
      "checkIn": "08:15",
      "checkOut": "18:00"
    },
    {
      "id": "att-5",
      "teamLeaderId": "tl-karwan",
      "date": "2026-06-02",
      "checkIn": "07:50",
      "checkOut": "17:10"
    },
    {
      "id": "att-6",
      "teamLeaderId": "tl-murtadha",
      "date": "2026-06-02",
      "checkIn": "08:00",
      "checkOut": "17:30"
    },
    {
      "id": "att-7",
      "teamLeaderId": "tl-omar",
      "date": "2026-06-03",
      "checkIn": "08:05",
      "checkOut": "17:00"
    },
    {
      "id": "att-8",
      "teamLeaderId": "tl-karwan",
      "date": "2026-06-03",
      "checkIn": "07:55",
      "checkOut": "17:45"
    },
    {
      "id": "att-9",
      "teamLeaderId": "tl-karrar",
      "date": "2026-06-03",
      "checkIn": "08:10",
      "checkOut": "17:20"
    },
    {
      "id": "att-1783601630979",
      "teamLeaderId": "tl-sherwan",
      "date": "2026-07-09",
      "checkIn": "15:53",
      "checkOut": null
    },
    {
      "id": "att-1783601642402",
      "teamLeaderId": "tl-murtadha",
      "date": "2026-07-09",
      "checkIn": "15:54",
      "checkOut": null
    },
    {
      "id": "att-1783601652826",
      "teamLeaderId": "tl-karrar",
      "date": "2026-07-09",
      "checkIn": "15:54",
      "checkOut": "15:55"
    },
    {
      "id": "att-1783740340055",
      "teamLeaderId": "tl-sherwan",
      "date": "2026-07-11",
      "checkIn": "06:25",
      "checkOut": "06:28"
    },
    {
      "id": "att-1783808566189",
      "teamLeaderId": "tl-karwan",
      "date": "2026-07-12",
      "checkIn": "01:22",
      "checkOut": null
    }
  ],
  "vehicles": [
    {
      "id": "veh-1",
      "type": "Toyota Hilux",
      "model": "2024",
      "plateNo": "A-10293 Baghdad",
      "region": "Central",
      "teamLeaderId": "tl-sherwan"
    },
    {
      "id": "veh-2",
      "type": "Toyota Hilux",
      "model": "2023",
      "plateNo": "K-98721 Erbil",
      "region": "Kurdistan",
      "teamLeaderId": "tl-karwan"
    },
    {
      "id": "veh-3",
      "type": "Mitsubishi L200",
      "model": "2022",
      "plateNo": "S-45302 Basra",
      "region": "South",
      "teamLeaderId": "tl-murtadha"
    },
    {
      "type": "Mitsubishi L200",
      "model": "2024",
      "plateNo": "11222",
      "region": "Central",
      "teamLeaderId": "tl-faris",
      "id": "veh-1783513606132"
    }
  ],
  "sanitationNotes": {},
  "suppliers": [
    {
      "name": "Agros",
      "category": "International",
      "country": "India",
      "contactPerson": "Pradeep",
      "phone": "",
      "email": "",
      "notes": "",
      "productIds": [
        "itm-10",
        "itm-4",
        "itm-9"
      ],
      "id": "sup-1783666333552"
    },
    {
      "name": "Alcochem",
      "category": "International",
      "country": "Netherlands",
      "contactPerson": "Nick",
      "phone": "",
      "email": "",
      "notes": "",
      "productIds": [
        "itm-uv-1",
        "itm-uv-2",
        "itm-uv-3"
      ],
      "id": "sup-1783677787233"
    },
    {
      "name": "Guanzho",
      "category": "International",
      "country": "China",
      "contactPerson": "Ken",
      "phone": "",
      "email": "",
      "notes": "",
      "productIds": [
        "itm-6"
      ],
      "id": "sup-1783677833120"
    }
  ],
  "salesDeals": [
    {
      "id": "deal-1",
      "name": "Erbil International Hotel Full Treatment",
      "prospectName": "Erbil Intl Hotel",
      "stage": "Prospecting",
      "expectedValue": 3500,
      "serviceType": "pest control",
      "dateCreated": "2026-07-01",
      "approvals": {
        "salesManager": false,
        "opsManager": false,
        "gm": true
      },
      "assignedSalesRepId": "use-1783676143027",
      "assignedSalesRepName": "Zain",
      "currency": "USD",
      "contractExpiryDate": null
    },
    {
      "id": "deal-2",
      "name": "Basra Oil Terminal Baiting Contract",
      "prospectName": "South Oil Co.",
      "stage": "Closed Won",
      "expectedValue": 524,
      "serviceType": "pest control",
      "costStructure": {
        "visitsPerMonth": 4,
        "hoursPerVisit": 3,
        "baitStations": 50,
        "stickersPerMonth": 50,
        "additionalCost": 200,
        "laborRatePerHour": 10,
        "costPerSticker": 0.15,
        "profitMargin": 60,
        "label": "Standard Rodent Treatment Plan"
      },
      "dateCreated": "2026-07-03",
      "assignedSalesRepId": "use-1783676099532",
      "assignedSalesRepName": "Rusul Al Saeidi",
      "currency": "USD",
      "contractExpiryDate": "2026-07-31",
      "approvals": {
        "salesManager": true,
        "opsManager": true,
        "gm": true
      },
      "customCosts": []
    },
    {
      "name": "Millennium Compound",
      "prospectName": "Millennium",
      "serviceType": "landscaping (maintenance)",
      "stage": "Closed Won",
      "expectedValue": 30000,
      "costStructure": null,
      "dateCreated": "2026-07-10",
      "id": "sal-1783674934837"
    },
    {
      "name": "Poultry Halls Abu Sajad",
      "prospectName": "Abu Sajad",
      "assignedSalesRepId": "use-1783676143027",
      "assignedSalesRepName": "Zain",
      "serviceType": "poultry disinfection",
      "stage": "Prospecting",
      "expectedValue": 130156,
      "currency": "IQD",
      "dateCreated": "2026-07-10",
      "contractExpiryDate": null,
      "costStructure": {
        "visitsPerMonth": 4,
        "hoursPerVisit": 2,
        "baitStations": 0,
        "stickersPerMonth": 0,
        "additionalCost": 0,
        "laborRatePerHour": 15,
        "costPerSticker": 0,
        "profitMargin": 30,
        "label": "General monthly service plan"
      },
      "customCosts": [
        {
          "name": "lift",
          "amount": 100000
        }
      ],
      "approvals": {
        "salesManager": true,
        "opsManager": true,
        "gm": true
      },
      "id": "sal-1783676192130"
    },
    {
      "name": "Basra Park",
      "prospectName": "Basra park",
      "assignedSalesRepId": "usr-om-c",
      "assignedSalesRepName": "Radwan Alobeidy",
      "serviceType": "landscaping (design)",
      "stage": "Prospecting",
      "expectedValue": 5000000,
      "currency": "IQD",
      "dateCreated": "2026-07-10",
      "contractExpiryDate": null,
      "costStructure": {
        "visitsPerMonth": 4,
        "hoursPerVisit": 2,
        "baitStations": 0,
        "stickersPerMonth": 0,
        "additionalCost": 0,
        "laborRatePerHour": 35000,
        "costPerSticker": 0,
        "profitMargin": 1063,
        "label": "General monthly service plan"
      },
      "customCosts": [
        {
          "name": "transportation",
          "amount": 100000
        },
        {
          "name": "chemicals",
          "amount": 50000
        }
      ],
      "approvals": {
        "salesManager": true,
        "opsManager": true,
        "gm": false
      },
      "id": "sal-1783679533722"
    }
  ],
  "inspections": [],
  "riskAssessments": [],
  "formTemplates": [
    {
      "id": "tmpl-d1",
      "title": "Fumigation Safety Checklist",
      "category": "Safety",
      "description": "Mandatory standard procedure checklist for phosphine gas fumigations.",
      "filename": "fumigation_safety_v2.pdf",
      "dateAdded": "2026-07-05",
      "fileData": "data:application/pdf;base64,JVBERi0xLjQKJ..."
    }
  ],
  "roles": [
    "admin coordinator",
    "team leader",
    "tech supervisor",
    "operations manager",
    "tech manager",
    "GM",
    "sales representative",
    "sales manager"
  ],
  "mediaCategories": [
    {
        "id": "certificates",
        "name": "certificates"
    },
    {
        "id": "profile",
        "name": "profile"
    },
    {
        "id": "brochures",
        "name": "brochures"
    }
],
  "media": [
    {
        "id": "med-1",
        "name": "iso_certification_2026.pdf",
        "category": "certificates",
        "type": "application/pdf",
        "size": 358400,
        "uploadDate": "2026-06-01",
        "uploadedBy": "usr-gm",
        "data": "data:application/pdf;base64,JVBERi0xLjQKJcOkw7zDtsOfCjEgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagozIDAgb2JqCjw8Ci9UeXBlIC9QYWdlCi9QYXJlbnQgMiAwIFIKL01lZGlhQm94IFswIDAgNTk1IDg0Ml0KL1Jlc291cmNlcyA8PAovRm9udCA8PAovRjEgNCAwIFIKPj4KPj4KL0NvbnRlbnRzIDUgMCBSCj4+CmVuZG9iago0IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMQovQmFzZUZvbnQgL0hlbHZldGljYQo+PgplbmRvYmoKNSAwIG9iago8PAovTGVuZ3RoIDQ0Cj4+CnN0cmVhbQpCVAovRjEgMTIgVGYKMTAwIDcwMCBUZAooQmFja2xlciBQZXN0IENvbnRyb2wgSVNPIENlcnRpZmljYXRlKSBUagogRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA3MCAwMDAwMCBuIAowMDAwMDAwMTMwIDAwMDAwIGYgCjAwMDAwMDAyOTEgMDAwMDAgbiAKMDAwMDAwMDM3NCAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjQ2OQolJUVPRgo="
    },
    {
        "id": "med-2",
        "name": "buckler_profile_v2.pdf",
        "category": "profile",
        "type": "application/pdf",
        "size": 1280000,
        "uploadDate": "2026-06-02",
        "uploadedBy": "usr-gm",
        "data": "data:application/pdf;base64,JVBERi0xLjQKJcOkw7zDtsOfCjEgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagozIDAgb2JqCjw8Ci9UeXBlIC9QYWdlCi9QYXJlbnQgMiAwIFIKL01lZGlhQm94IFswIDAgNTk1IDg0Ml0KL1Jlc291cmNlcyA8PAovRm9udCA8PAovRjEgNCAwIFIKPj4KPj4KL0NvbnRlbnRzIDUgMCBSCj4+CmVuZG9iago0IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMQovQmFzZUZvbnQgL0hlbHZldGljYQo+PgplbmRvYmoKNSAwIG9iago8PAovTGVuZ3RoIDQxCj4+CnN0cmVhbQpCVAovRjEgMTIgVGYKMTAwIDcwMCBUZAooQmFja2xlciBQZXN0IENvbnRyb2wgQ29tcGFueSBQcm9maWxlKSBUagogRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA3MCAwMDAwMCBuIAowMDAwMDAwMTMwIDAwMDAwIGYgCjAwMDAwMDAyOTEgMDAwMDAgbiAKMDAwMDAwMDM3NCAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjQ2NgolJUVPRgo="
    },
    {
        "id": "med-3",
        "name": "brochure_commercial_pest_control.pdf",
        "category": "brochures",
        "type": "application/pdf",
        "size": 737280,
        "uploadDate": "2026-06-03",
        "uploadedBy": "usr-gm",
        "data": "data:application/pdf;base64,JVBERi0xLjQKJcOkw7zDtsOfCjEgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagozIDAgb2JqCjw8Ci9UeXBlIC9QYWdlCi9QYXJlbnQgMiAwIFIKL01lZGlhQm94IFswIDAgNTk1IDg0Ml0KL1Jlc291cmNlcyA8PAovRm9udCA8PAovRjEgNCAwIFIKPj4KPj4KL0NvbnRlbnRzIDUgMCBSCj4+CmVuZG9iago0IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMQovQmFzZUZvbnQgL0hlbHZldGljYQo+PgplbmRvYmoKNSAwIG9iago8PAovTGVuZ3RoIDQzCj4+CnN0cmVhbQpCVAovRjEgMTIgVGYKMTAwIDcwMCBUZAooQmFja2xlciBQZXN0IENvbnRyb2wgQ29tbWVyY2lhbCBCcm9jaHVyZSkgVagogRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA3MCAwMDAwMCBuIAowMDAwMDAwMTMwIDAwMDAwIGYgCjAwMDAwMDAyOTEgMDAwMDAgbiAKMDAwMDAwMDM3NCAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjQ2OApJJUVPRgo="
    }
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
  sanitationNotes: 'sanitation_notes',
  media: 'media',
  mediaCategories: 'media_categories',
  suppliers: 'suppliers',
  salesDeals: 'sales_deals',
  driverShifts: 'driver_shifts',
  inspections: 'inspections',
  riskAssessments: 'risk_assessments',
  formTemplates: 'form_templates'
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
    this.isServer = false;
    this.currentUser = null;
    this.isSupabase = false;
    this.supabase = null;
    this.realtimeChannel = null;

    if (window.location.protocol.startsWith('http')) {
      this.initServerConnection();
    } else {
      console.log('Running locally as file. Falling back to local storage.');
      this.importSharedState();
      this.init();
    }
  }

  async initServerConnection() {
    try {
      const res = await fetch('/api/auth/session');
      if (res.ok) {
        this.currentUser = await res.json();
        this.isServer = true;
        console.log('Connected to secure backend. Session verified for:', this.currentUser.username);
        this.showServerStatusBadge(true);
        await this.syncWithServer();
        setInterval(() => this.syncWithServer(), 4000);
      } else {
        this.isServer = true;
        this.showServerStatusBadge(true);
        console.log('Connected to secure backend. Authentication required.');
        await this.syncWithServer();
        setInterval(() => this.syncWithServer(), 4000);
      }
    } catch (e) {
      console.error('Failed to connect to backend server. Falling back to local storage.', e);
      this.isServer = false;
      this.importSharedState();
      this.init();
      this.showServerStatusBadge(false);
    }
  }

  showServerStatusBadge(connected) {
    let badge = document.getElementById('backend-status-badge');
    if (!badge) {
      badge = document.createElement('div');
      badge.id = 'backend-status-badge';
      badge.style.position = 'fixed';
      badge.style.bottom = '10px';
      badge.style.right = '10px';
      badge.style.padding = '0.35rem 0.75rem';
      badge.style.borderRadius = '20px';
      badge.style.fontSize = '0.72rem';
      badge.style.fontWeight = '700';
      badge.style.zIndex = '9999';
      badge.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
      badge.style.display = 'flex';
      badge.style.alignItems = 'center';
      badge.style.gap = '6px';
      badge.style.pointerEvents = 'none';
      document.body.appendChild(badge);
    }
    if (connected) {
      badge.style.background = '#E8F5E9';
      badge.style.color = '#2E7D32';
      badge.style.border = '1px solid #A5D6A7';
      badge.innerHTML = `<span style="width: 8px; height: 8px; border-radius: 50%; background: #4CAF50; display: inline-block;"></span> Hosted Backend Connected`;
    } else {
      badge.style.background = '#FFF3E0';
      badge.style.color = '#E65100';
      badge.style.border = '1px solid #FFCC80';
      badge.innerHTML = `<span style="width: 8px; height: 8px; border-radius: 50%; background: #FF9800; display: inline-block;"></span> Offline Fallback (Local Storage)`;
    }
  }

  async syncWithServer() {
    if (!this.isServer) return;
    try {
      const entities = [
        'users', 'clients', 'items', 'schedules', 'operationLogs', 'commuteLog',
        'complaints', 'notifications', 'messages', 'attendanceLog', 'vehicles',
        'sectors', 'sanitationNotes', 'media', 'mediaCategories', 'suppliers',
        'salesDeals', 'driverShifts', 'inspections', 'riskAssessments', 'formTemplates'
      ];
      
      const data = {};
      await Promise.all(entities.map(async (entity) => {
        const res = await fetch(`/api/${entity}`);
        if (res.ok) {
          data[entity] = await res.json();
        }
      }));
      
      localStorage.setItem(DB_KEY, JSON.stringify({ ...this.getDataFromStorageOnly(), ...data }));
      window.dispatchEvent(new Event('storage'));
    } catch (e) {
      console.error('Failed to sync with server:', e);
    }
  }

  getDataFromStorageOnly() {
    if (!localStorage.getItem(DB_KEY)) {
      localStorage.setItem(DB_KEY, JSON.stringify(DEFAULT_DATA));
    }
    return JSON.parse(localStorage.getItem(DB_KEY));
  }

  async login(username, password) {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Login failed');
    }
    const user = await res.json();
    this.currentUser = user;
    await this.syncWithServer();
    return user;
  }

  async logout() {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      this.currentUser = null;
    } catch (e) {
      console.error('Logout error:', e);
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
      if (data && (!data.db_migrated_to_full_backup || !data.media || data.media.length === 0)) {
        console.log('Migrating local storage database to the full backup dataset with media...');
        localStorage.setItem(DB_KEY, JSON.stringify(DEFAULT_DATA));
        const newData = JSON.parse(localStorage.getItem(DB_KEY));
        newData.db_migrated_to_full_backup = true;
        localStorage.setItem(DB_KEY, JSON.stringify(newData));
        window.location.reload();
        return;
      }
      let updated = false;
      if (data.services) {
        if (data.services.includes('landscaping') && !data.services.includes('landscaping (design)')) {
          const idx = data.services.indexOf('landscaping');
          if (idx !== -1) {
            data.services.splice(idx, 1, 'landscaping (design)', 'landscaping (gardening)', 'landscaping (maintenance)');
            updated = true;
          }
        }
        if (!data.services.includes('cleaning')) {
          data.services.push('cleaning');
          updated = true;
        }
        if (!data.services.includes('maintenance')) {
          data.services.push('maintenance');
          updated = true;
        }
      }
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
              reports: 'edit', users: 'edit', sales: 'edit', forms: 'edit'
            };
          } else if (r === 'tech manager' || r === 'operations manager' || r === 'admin coordinator') {
            return {
              dashboard: 'see', schedules: 'edit', clients: 'edit', items: 'edit',
              complaints: 'edit', messages: 'edit', 'uv-sales': 'see',
              reports: 'see', users: 'see', sales: 'edit', forms: 'edit'
            };
          } else if (r === 'tech supervisor') {
            return {
              dashboard: 'see', schedules: 'see', clients: 'see', items: 'see',
              complaints: 'edit', messages: 'edit', 'uv-sales': 'see',
              reports: 'see', users: 'none', sales: 'see', forms: 'edit'
            };
          } else if (r === 'sales manager' || r === 'sales representative') {
            return {
              dashboard: 'see', schedules: 'see', clients: 'see', items: 'see',
              complaints: 'see', messages: 'edit', 'uv-sales': 'see',
              reports: 'see', users: 'none', sales: 'edit', forms: 'see'
            };
          } else { // team leader
            return {
              dashboard: 'none', schedules: 'edit', clients: 'none', items: 'none',
              complaints: 'see', messages: 'edit', 'uv-sales': 'none',
              reports: 'none', users: 'none', sales: 'none', forms: 'none'
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

      if (!data.suppliers) {
        data.suppliers = [];
        updated = true;
      }

      if (!data.salesDeals) {
        data.salesDeals = [
          { id: 'deal-1', name: 'Erbil International Hotel Full Treatment', prospectName: 'Erbil Intl Hotel', stage: 'Prospecting', expectedValue: 3500, serviceType: 'Pest Control', dateCreated: '2026-07-01' },
          { id: 'deal-2', name: 'Basra Oil Terminal Baiting Contract', prospectName: 'South Oil Co.', stage: 'Proposal Sent', expectedValue: 4800, serviceType: 'Pest Control', costStructure: { visitsPerMonth: 4, hoursPerVisit: 3, baitStations: 50, stickersPerMonth: 50, additionalCost: 200, label: 'Standard Rodent Treatment Plan' }, dateCreated: '2026-07-03' }
        ];
        updated = true;
      }

      if (!data.inspections) {
        data.inspections = [];
        updated = true;
      }

      if (!data.riskAssessments) {
        data.riskAssessments = [];
        updated = true;
      }

      if (!data.formTemplates) {
        data.formTemplates = [
          { id: 'tmpl-d1', title: 'Fumigation Safety Checklist', category: 'Safety', description: 'Mandatory standard procedure checklist for phosphine gas fumigations.', filename: 'fumigation_safety_v2.pdf', dateAdded: '2026-07-05', fileData: 'data:application/pdf;base64,JVBERi0xLjQKJ...' }
        ];
        updated = true;
      }

      if (!data.roles) {
        data.roles = ['admin coordinator', 'team leader', 'tech supervisor', 'operations manager', 'tech manager', 'GM', 'sales representative', 'sales manager'];
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
    const list = data[entity] || [];
    if (entity === 'salesDeals') {
      return list.map(d => {
        if (d.stage === 'Qualification') d.stage = 'Prospecting';
        if (d.stage === 'Negotiation') d.stage = 'Proposal Sent';
        return d;
      });
    }
    return list;
  }

  insert(entity, record) {
    const data = this.getData();
    if (!data[entity]) data[entity] = [];
    
    if (!record.id) {
      const prefix = entity.substring(0, 3).toLowerCase();
      record.id = `${prefix}-${Date.now()}`;
    }
    
    data[entity].push(record);
    this.saveData(data);

    if (this.isServer) {
      fetch(`/api/${entity}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
      }).catch(err => console.error(`Error inserting to backend table ${entity}:`, err));
    } else if (this.isSupabase && ENTITY_TO_TABLE[entity]) {
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

    if (this.isServer) {
      fetch(`/api/${entity}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFields)
      }).catch(err => console.error(`Error updating backend table ${entity}:`, err));
    } else if (this.isSupabase && ENTITY_TO_TABLE[entity]) {
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

      if (this.isServer) {
        fetch(`/api/${entity}/${id}`, {
          method: 'DELETE'
        }).catch(err => console.error(`Error deleting from backend table ${entity}:`, err));
      } else if (this.isSupabase && ENTITY_TO_TABLE[entity]) {
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
    const tlIds = schedule.teamLeaderId ? schedule.teamLeaderId.split(',').map(x => x.trim()) : [];
    tlIds.forEach(id => {
      this.insert('notifications', {
        userId: id,
        title: 'New Visit Scheduled',
        message: `Admin scheduled a ${schedule.service} operations visit on ${schedule.date} @ ${schedule.time}.`,
        date: new Date().toISOString().split('T')[0],
        read: false
      });
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
    let today = dateStr;
    if (!today) {
      const d = new Date();
      today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }
    const log = {
      id: `att-${Date.now()}`,
      teamLeaderId: tlId,
      date: today,
      checkIn: timeStr,
      checkOut: null
    };
    this.insert('attendanceLog', log);
    return log;
  }

  checkOutDriver(tlId, timeStr, dateStr) {
    const logs = this.get('attendanceLog');
    const activeLog = [...logs].reverse().find(l => l.teamLeaderId === tlId && !l.checkOut);
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
