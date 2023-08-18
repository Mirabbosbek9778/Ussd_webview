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
export const UssdCodes = [{
  id: 1,
  title: "Shaxsiy raqamingizni  tekshirish",
  code: "*100*4#",
}, {
  id: 2,
  title: "Shaxsiy balansingizni tekshirish",
  code: "*100*5*",
}, {
  id: 3,
  title: "Batafsil hisobot",
  code: "*100*2#",
}, {
  id: 4,
  title: "4G  akitv qilish ",
  code: "*111*1*7*1#",
}, {
  id: 5,
  title: "4G aktivatisiyadan o'chirish ",
  code: "*111*1*7*2#",
}, {
  id: 6,
  title: "Sizga qo'g'iroq qilishdi xizmati ",
  code: "*111*2*4*1#",
}, {
  id: 7,
  title: "Qulay almashinuv xizmati ",
  code: "*545#",
}, {
  id: 8,
  title: "Qo'shimcha balans ",
  code: "*150#",
}, {
  id: 9,
  title: "Pullik  hizmatlarni  o'chirish ",
  code: "*199#",
}, {
  id: 10,
  title: "Menga  qong'iroq  qiling  xizmati",
  code: "*126*998xx xxx xx xx#",
}];
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
