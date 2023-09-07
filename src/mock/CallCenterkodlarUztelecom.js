import {
  internetMenuIcon,
  operatorMenuIcon,
  emailmenuIcon,
  chatBot,
} from "../assets";

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
    ussdCode: " +99895 504 09 09",
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
];
