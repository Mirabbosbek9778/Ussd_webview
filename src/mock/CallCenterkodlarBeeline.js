import {
    internetMenuIcon,
    operatorMenuIcon,
    emailmenuIcon,
    chatBot
} from '../assets';

export const CallCenterCodesBeeline = [
    {
        id: 1,
        icon: operatorMenuIcon,
        ussdCode: "0611",
        description: " Beeline mobil raqamidan",
    },
    {
        id: 2,
        icon: operatorMenuIcon,
        ussdCode: "90 185-00-55",
        description: " Shaxar telefonidan",
    },
    {
        id: 3,
        icon: internetMenuIcon,
        ussdCode: "https://beeline.uz/",
        description: "Beeline web sahifasi",
    },
    {
        id: 4,
        icon: emailmenuIcon,
        ussdCode: "0611@beeline.uz",
        description: "Beeline elektron pochtasi",
    },
    {
        id: 5,
        icon: chatBot,
        ussdCode: "https://t.me/ConsultantBeelineUzBot",
        description: "Savol yo'llash uchun telegram-bot",
    },
]