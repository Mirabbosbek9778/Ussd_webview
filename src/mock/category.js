import {
  internetMenuIcon,
  operatorMenuIcon,
  restMenuIcon,
  serviceMenuIcon,
  tarifMenuIcon,
  ussdMenuIcon,
} from "../assets";

export const category = [
  {
    id: 1,
    name: "Ussd kodlar",
    icon: ussdMenuIcon,
  },
  {
    id: 2,
    name: "Tarif rejalar",
    icon: tarifMenuIcon,
  },
  {
    id: 3,
    name: "Internet",
    icon: internetMenuIcon,
  },
  {
    id: 4,
    name: "Xizmatlar",
    icon: serviceMenuIcon,
  },
  {
    id: 5,
    name: "Restart xizmati",
    icon: restMenuIcon,
  },
//   {
//     id: 6,
//     name: "Operator bilan bog’lanish",
//     icon: operatorMenuIcon,
//   },
];

export const sms = [
  {
    category_id: 1,
    name: "Sms",
    company_name: "Beeline",
    pakets: [
      {
        id: 1,
        package_name: "100 sms",
        category_id: 1,
        deadline: "oylik",
        time: "",
        ussd_code: "*100#",
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
      {
        id: 2,
        package_name: "150 sms",
        category_id: 1,
        deadline: "haftalik",
        time: "",
        ussd_code: "*100#",
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
      {
        id: 3,
        package_name: "200 sms",
        category_id: 1,
        deadline: "kunlik",
        time: "",
        ussd_code: "*100#",
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
    ],
  },
];

export const internet = [
  {
    category_id: 2,
    name: "Internet",
    company_name: "Beeline",
    pakets: [
      {
        id: 1,
        package_name: "1 GB",
        category_id: 2,
        deadline: "oylik",
        time: "",
        ussd_code: "*100#",
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
      {
        id: 2,
        package_name: "10 GB",
        category_id: 2,
        deadline: "haftalik",
        time: "",
        ussd_code: "*100#",
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
      {
        id: 3,
        package_name: "15 GB",
        category_id: 2,
        deadline: "kunlik",
        time: "",
        ussd_code: "*100#",
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
    ],
  },
];

export const phone = [
  {
    category_id: 3,
    name: "Daqiqalar",
    company_name: "Beeline",
    pakets: [
      {
        id: 1,
        package_name: "100 daqiqa",
        category_id: 3,
        deadline: "oylik",
        time: "",
        ussd_code: "*100#",
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
      {
        id: 2,
        package_name: "1000 daqiqa",
        category_id: 3,
        deadline: "haftalik",
        time: "",
        ussd_code: "*100#",
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
      {
        id: 3,
        package_name: "1500 daqiqa",
        category_id: 3,
        deadline: "kunlik",
        time: "",
        ussd_code: "*100#",
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
    ],
  },
];

export const tariff = [
  {
    category_id: 4,
    name: "Tariflar",
    company_name: "Beeline",
    tarifs: [
      {
        id: 1,
        package_name: "Barakali 22",
        category_id: 4,
        deadline: "oylik",
        time: "",
        ussd_code: "*100#",
        price: 15000,
        sms: "500 sms",
        minutes: "1000 daq",
        internet: "1000 GB",
        description: "bu yerda description bo'ladi",
      },
      {
        id: 2,
        package_name: "Barakali 24",
        category_id: 4,
        deadline: "oylik",
        time: "",
        ussd_code: "*100#",
        price: 15000,
        sms: "500 sms",
        minutes: "1000 daq",
        internet: "1000 GB",
        description: "bu yerda description bo'ladi",
      },
      {
        id: 3,
        package_name: "Barakali 23",
        category_id: 4,
        deadline: "oylik",
        time: "",
        ussd_code: "*100#",
        price: 15000,
        sms: "500 sms",
        minutes: "1000 daq",
        internet: "1000 GB",
        description: "bu yerda description bo'ladi",
      },
    ],
  },
];
