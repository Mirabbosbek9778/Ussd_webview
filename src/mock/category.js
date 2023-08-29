import {
  internetMenuIcon,
  restMenuIcon,
  serviceMenuIcon,
  tarifMenuIcon,
  ussdMenuIcon,
  operatorMenuIcon,
} from '../assets';

// import messageIcon from "../assets/icons/messageIcon.svg";
// import phoneIcons from "../assets/icons/phoneIcons.svg";
// import globusinternet from '../assets/icons/internetGlobus.svg';


export const category = [
  {
    id: 1,
    name: "Ussd kodlar",
    icon: ussdMenuIcon,
    path: "/ussd",
  },
  {
    id: 2,
    name: "Tarif rejalar",
    icon: tarifMenuIcon,
    path: "/tarif",
  },
  {
    id: 3,
    name: "Internet",
    icon: internetMenuIcon,
    path: "/internet",
  },
  {
    id: 4,
    name: "Xizmatlar",
    icon: serviceMenuIcon,
    path: "/services",
  },
  {
    id: 5,
    name: "Restart xizmati",
    icon: restMenuIcon,
    path: "/restart",
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