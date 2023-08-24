import {
  internetMenuIcon,
  restMenuIcon,
  serviceMenuIcon,
  tarifMenuIcon,
  ussdMenuIcon,
  operatorMenuIcon,
  emailmenuIcon,
  chatBot,
  arrowR

} from '../assets';

import messageIcon from '../assets/icons/messageIcon.svg';
import phoneIcons from '../assets/icons/phoneIcons.svg';
import globusinternet from '../assets/icons/internetGlobus.svg';

export const category = [
  {
    id: 1,
    name: 'Ussd kodlar',
    icon: ussdMenuIcon,
    path: '/ussd',
  },
  {
    id: 2,
    name: 'Tarif rejalar',
    icon: tarifMenuIcon,
    path: '/tarif',
  },
  {
    id: 3,
    name: 'Internet',
    icon: internetMenuIcon,
    path: '/internet',
  },
  {
    id: 4,
    name: 'Xizmatlar',
    icon: serviceMenuIcon,
    path: '/services',
  },
  {
    id: 5,
    name: 'Restart xizmati',
    icon: restMenuIcon,
    path: '/restart',
  },
  {
    id: 6,
    name: 'Operator bilan Aloqa',
    icon: operatorMenuIcon,
    path: '/call-center',
  },
];

export const sms = [
  {
    category_id: 1,
    name: 'Sms',
    company_name: 'Beeline',
    pakets: [
      {
        id: 1,
        package_name: '100 sms',
        category_id: 1,
        deadline: 'oylik',
        time: '',
        ussd_code: '*100#',
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
      {
        id: 2,
        package_name: '150 sms',
        category_id: 1,
        deadline: 'haftalik',
        time: '',
        ussd_code: '*100#',
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
      {
        id: 3,
        package_name: '200 sms',
        category_id: 1,
        deadline: 'kunlik',
        time: '',
        ussd_code: '*100#',
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
    ],
  },
];

export const internet = [
  {
    category_id: 2,
    name1: '30 kunlik paketlar',
    company_name: 'Beeline',
    company_name: 'Beeline',
    pakets: [
      {
        id: 1,
        package_name: '1 GB',
        category_id: 2,
        deadline: '30 kun',
        time: '',
        ussd_code: '*100#',
        price: 9000,
        deadline: 'oylik',
        time: '',
        ussd_code: '*100#',
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
      {
        id: 2,
        package_name: '1.5 GB',
        category_id: 2,
        deadline: '30 kun',
        time: '',
        ussd_code: '*100#',
        package_name: '10 GB',
        category_id: 2,
        deadline: 'haftalik',
        time: '',
        ussd_code: '*100#',
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
      {
        id: 3,
        package_name: '2 GB',
        category_id: 2,
        deadline: '30 kun',
        time: '',
        ussd_code: '*100#',
        package_name: '15 GB',
        category_id: 2,
        deadline: 'kunlik',
        time: '',
        ussd_code: '*100#',
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
    ],
  },
  {
    category_id: 3,
    name1: 'Kunlik paketlar',
    company_name: 'Beeline',
    pakets: [
      {
        id: 1,
        package_name: '1 GB',
        category_id: 2,
        deadline: '1 kun',
        time: '',
        ussd_code: '*100#',
        price: 9000,
        description: "bu yerda description bo'ladi",
      },
      {
        id: 2,
        package_name: '1.5 GB',
        category_id: 2,
        deadline: '1 kun',
        time: '',
        ussd_code: '*100#',
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
      {
        id: 3,
        package_name: '2 GB',
        category_id: 2,
        deadline: '1 kun',
        time: '',
        ussd_code: '*100#',
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
    ],
  },
];
export const UssdCodes = [
  {
    id: 1,
    title: 'Shaxsiy raqamingizni  tekshirish',
    code: '*100*4#',
  },
  {
    id: 2,
    title: 'Shaxsiy balansingizni tekshirish',
    code: '*100*5*',
  },
  {
    id: 3,
    title: 'Batafsil hisobot',
    code: '*100*2#',
  },
  {
    id: 4,
    title: '4G  akitv qilish ',
    code: '*111*1*7*1#',
  },
  {
    id: 5,
    title: "4G aktivatisiyadan o'chirish ",
    code: '*111*1*7*2#',
  },
  {
    id: 6,
    title: "Sizga qo'g'iroq qilishdi xizmati ",
    code: '*111*2*4*1#',
  },
  {
    id: 7,
    title: 'Qulay almashinuv xizmati ',
    code: '*545#',
  },
  {
    id: 8,
    title: "Qo'shimcha balans ",
    code: '*150#',
  },
  {
    id: 9,
    title: "Pullik  hizmatlarni  o'chirish ",
    code: '*199#',
  },
  {
    id: 10,
    title: "Menga  qong'iroq  qiling  xizmati",
    code: '*126*998xx xxx xx xx#',
  },
];
export const phone = [
  {
    category_id: 3,
    name: 'Daqiqalar',
    company_name: 'Beeline',
    pakets: [
      {
        id: 1,
        package_name: '100 daqiqa',
        category_id: 3,
        deadline: 'oylik',
        time: '',
        ussd_code: '*100#',
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
      {
        id: 2,
        package_name: '1000 daqiqa',
        category_id: 3,
        deadline: 'haftalik',
        time: '',
        ussd_code: '*100#',
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
      {
        id: 3,
        package_name: '1500 daqiqa',
        category_id: 3,
        deadline: 'kunlik',
        time: '',
        ussd_code: '*100#',
        price: 15000,
        description: "bu yerda description bo'ladi",
      },
    ],
  },
];

export const tariff = [
  {
    category_id: 4,
    name: 'Tariflar',
    company_name: 'Beeline',
    tarifs: [
      {
        id: 1,
        package_name: 'Barakali 22',
        category_id: 4,
        deadline: 'oylik',
        time: '',
        ussd_code: '*100#',
        price: 15000,
        sms: 0,
        minutes: 'Cheksiz',
        internet: '6GB',
        description: "bu yerda description bo'ladi",
        imginternet: globusinternet,
        imginternet2: phoneIcons,
        imginternet3: messageIcon,
      },
      {
        id: 2,
        package_name: 'Barakali 24',
        category_id: 4,
        deadline: 'oylik',
        time: '',
        ussd_code: '*100#',
        price: 15000,
        sms: 0,
        minutes: 'Cheksiz',
        internet: '6GB',
        description: "bu yerda description bo'ladi",
        imginternet: globusinternet,
        imginternet2: phoneIcons,
        imginternet3: messageIcon,
      },
      {
        id: 3,
        package_name: 'Barakali 23',
        category_id: 4,
        deadline: 'oylik',
        time: '',
        ussd_code: '*100#',
        price: 15000,
        sms: 0,
        minutes: 'Cheksiz',
        internet: '6GB',
        description: "bu yerda description bo'ladi",
        imginternet: globusinternet,
        imginternet2: phoneIcons,
        imginternet3: messageIcon,
      },
    ],
  },
];
export const CallCenterCodes = [
  {
    id: 1,
    icon: operatorMenuIcon,
    ussdCode: "1099",
    description: "O'zbekiston ichidagi UZMOBILE abonentlari uchun",
  },
  {
    id: 2,
    icon: operatorMenuIcon,
    ussdCode: "1155",
    description: "UZMOBILE korparativ abonentlari uchun",
  },
  {
    id: 3,
    icon: operatorMenuIcon,
    ussdCode: "+998 (95) 504 09 09",
    description: "Qolgan abonentlar uchun",
  },
  {
    id: 4,
    icon: internetMenuIcon,
    ussdCode: "https://uztelecom.uz/index.php/ru",
    description: "UZTELECOM web sahifasi",
  },
  {
    id: 5,
    icon: emailmenuIcon,
    ussdCode: "info@uztelecom.uz",
    description: "UZTELECOM elektron pochtasi",
  },
  {
    id: 6,
    icon: chatBot,
    ussdCode: "https://t.me/utc_uzbot",
    description: "Savol yo'llash uchun telegram-bot",
  },
]
export const Services = [{
  id: 1,
  title: "Qo'llab yubor",
  icon: arrowR
},
{
  id: 2,
  title: "Chaqiruvni kutish",
  icon: arrowR
},
{
  id: 3,
  title: "Konferens aloqa",
  icon: arrowR
},
{
  id: 4,
  title: "Menga qo’ng’iroq qiling",
  icon: arrowR
}, {
  id: 5,
  title: "Qabul qilinmagan qo’ng’iroq",
  icon: arrowR
}, {
  id: 6,
  title: "Yashirin qo’ng’iroq",
  icon: arrowR
}, {
  id: 7,
  title: "Kontent xizmatlarni o’chirish",
  icon: arrowR
}, {
  id: 8,
  title: "Foydali almashtiruv",
  icon: arrowR
},
]