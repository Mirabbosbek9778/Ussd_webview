import {
  internetMenuIcon,
  restMenuIcon,
  serviceMenuIcon,
  tarifMenuIcon,
  ussdMenuIcon,
} from '../assets';

// import messageIcon from "../assets/icons/messageIcon.svg";
// import phoneIcons from "../assets/icons/phoneIcons.svg";
// import globusinternet from '../assets/icons/internetGlobus.svg';

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
        description: `*O‘zbekiston bo‘yicha daqiqalar/SMS limiti
        Oyiga 45 000 daqiqalik texnologik cheklov o‘rnatilgan. 45 000 daqiqadan so‘ng barcha chiquvchi qo‘ng‘iroqlar bloklanadi.
        Ushbu tarif rejasiga (TR) ulanish va boshqa tarif rejalariga o‘tish UZTELECOM sotuv va xizmat ko‘rsatish ofislarida, dilerlik xizmat ko‘rsatish joylarida, shuningdek, MyUZTELECOM mobil ilovasi orqali amalga oshiriladi.
        Resurslardan faqat shaxsiy hisobda yetarli miqdorda mablagʻlar boʻlganda foydalanish mumkin.
        Abonent to‘lovi (keyingi o‘rinlarda - AT) hisoblanishi abonent “faol” holatda bo‘lganda amalga oshiriladi. Agar abonent hisob raqamida yetarli miqdorda pul mablagʻlari bo‘lmaganligi sababli bloklangan bo‘lsa, AT to‘lov kiritilmagunga qadar hisoblanmaydi.
        Ushbu TR doirasida AT hisoblanishining boshlanishi yagona jadval bo‘yicha emas, balki har bir abonent uchun alohida hisob-kitob davri bo‘yicha aniq soniyaga qadar amalga oshiriladi. TR doirasida ATni yechib olish vaqti aniq belgilanmagan bo‘lib, xizmatlardan foydalanish imkoniyati taqdim etilgan vaqtga bog‘liq bo‘ladi.
        ATning hisob-kitob davri kalendar oyining 1-sanasiga bog‘lanmagan holda 1 (bir) oyni tashkil etadi va abonentga xizmatdan foydalanish imkoniyati taqdim etilgan sanadan boshlab hisoblanadi. Hisob-kitob sanasi abonentning hisob-kitob davri uchun ATni hisoblashdagi boshlang‘ich nuqtasi hisoblanadi. 
        Misol uchun, abonent TRga 10-sanada ulangan bo‘lsa, u holda navbatdagi oylik AT keyingi oyning 10-sanasida abonentning shaxsiy hisob raqamida TR bo‘yicha AT uchun yetarli miqdorda pul mablag‘lari bo‘lgandagina yechib olinadi. Agarda abonent 31-avgust kuni ulangan bo‘lsa, u holda navbatdagi ATni yechib olishga urinish 
        30-sentabr kuni amalga oshiriladi.
        Limitlar TR bo‘yicha AT muvaffaqiyatli yechib olinganda taqdim etiladi va joriy hisob-kitob davri tugagunga qadar amal qiladi, TR bo‘yicha foydalanilmay qoldirilgan limitlar keyingi hisob-kitob davriga o‘tkazilmaydi.
        Xizmatlar limiti va AT masshtablashtirilmaydi.
        Masalan: Abonent UZTELECOM GSM tarmog‘iga 30-yanvar kuni ulanganda, AT yechib olinishi 28- yoki 29-fevral kuni (kalendar yiliga ko‘ra) amalga oshiriladi va hisob-kitob davri yakunida Abonent hisobida AT uchun yetarli miqdorda pul mablag‘lari bo‘lmasa, abonent raqami bloklanadi. Abonent tomonidan balans 5 yoki 
        10 kundan keyin to‘ldirilsa, abonent hisobidan AT to‘liq hajmda yechib olinadi, 
        TR doirasidagi xizmatning barcha limitlari keyingi oyda AT yechib olingunga qadar bir oy muddatga to‘liq hajmda taqdim etiladi, bunda, har oylik ATni yechib olish sanasi keyingi muvaffaqiyatli AT yechib olinadigan sanaga suriladi.
        Amaldagi TR “Barakali” tarif rejalari toʻplamidagi TRga o‘zgartirilganda, “Raqam ijarasi” xizmati yoqilgan bo‘lsa, xizmat uchun hisob-kitob davri yangi TR bo‘yicha keyingi davrdan boshlab abonent to‘lovini hisoblash davri bilan tenglashtiriladi.
        Barcha qo‘ng‘iroqlar  so‘zlashuvning birinchi soniyasidan boshlab narxlanadi va to‘liq daqiqa sifatida yaxlitlanib, hisobga olinadi.
        To‘plamdagi barcha tarif rejalarida quyidagi xizmatlar mavjud: “Qabul qilinmagan qo‘ng‘iroq/Tarmoqda”, “Shaxsiy raqam uzatilishini taqiqlash”, “Tezkor o‘tkazmalar”, “Raqam ijarasi”, “Yashirin qo‘ng‘iroq”, “Restart”, “Qo‘llab yubor” xizmatlari, shuningdek, ulanish imkoniyati berilgan qo‘shimcha MB va SMS-paketlari.
        “Barakali” to‘plamidagi TRga quyidagi tarif rejalaridan o‘tish mumkin: “Milliy”,  “Ishbilarmon”, “Flash”, “OnLime”, “Street Upgrade”, “Royal”, “Flash Upgrade”, “Aloqachi”, “Yoshlar”, “Oddiy 10”, “Street”, “Traffic”, “E’zoz”, “Constructor”, “Step”, “C 1”, “C 2”, “C 3”, “C 4”, “Salom”, “Salom plus”, “Komfort”, “UzMobile 1200”, “UzMobile 4000”, “UzMobile VIP”, “UNITS”, ”Bolajon”, “TA’LIM B2C”,  “MAKTAB”, “VOLUNTEER”, “Ta’lim” tarif rejalaridan va “Barakali” toʻplamidagi tarif rejalaridan.  
        “Barakali” TRdan quyidagi tarif rejalariga o‘tish mumkin: “UNITS”, “Aloqachi”, “C1”, “C2”, “C3”, “C4”, “TA’LIM B2C”, “MAKTAB”, “Milliy” va “Barakali”  toʻplamidagi tarif rejalariga.
        TR toʻplami ichida boshqa tarif rejlariga o‘tish narxi - 4 200 so‘m.
        “VOLUNTEER”, “Milliy”, “Ishbilarmon”, “Flash”, “OnLime”, “Street Upgrade”, “Royal”, “Flash Upgrade”, “Aloqachi”, “Yoshlar”, “Oddiy 10”, “Street”, “C1”, “C2”, “C3”, “C4” tarif rejalaridan, “UNITS” toʻplamidagi tarif rejalaridan, “Bolajon”, “TA’LIM B2C”, “MAKTAB” va boshqa amaldagi tarif rejalaridan “Barakali” TRga o‘tish narxi - 4 200 so‘m.
        “Traffic”, “E’zoz”, “Constructor”, “Step”, “Salom”, “Salom plus”, “Komfort”, “UzMobile 1200”, “UzMobile 4000”, “UzMobile VIP”, “Ta’lim” tarif rejalaridan o‘tish bepul amalga oshiriladi..`,
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
        description: `*O‘zbekiston bo‘yicha daqiqalar/SMS limiti
        Oyiga 45 000 daqiqalik texnologik cheklov o‘rnatilgan. 45 000 daqiqadan so‘ng barcha chiquvchi qo‘ng‘iroqlar bloklanadi.
        Ushbu tarif rejasiga (TR) ulanish va boshqa tarif rejalariga o‘tish UZTELECOM sotuv va xizmat ko‘rsatish ofislarida, dilerlik xizmat ko‘rsatish joylarida, shuningdek, MyUZTELECOM mobil ilovasi orqali amalga oshiriladi.
        Resurslardan faqat shaxsiy hisobda yetarli miqdorda mablagʻlar boʻlganda foydalanish mumkin.
        Abonent to‘lovi (keyingi o‘rinlarda - AT) hisoblanishi abonent “faol” holatda bo‘lganda amalga oshiriladi. Agar abonent hisob raqamida yetarli miqdorda pul mablagʻlari bo‘lmaganligi sababli bloklangan bo‘lsa, AT to‘lov kiritilmagunga qadar hisoblanmaydi.
        Ushbu TR doirasida AT hisoblanishining boshlanishi yagona jadval bo‘yicha emas, balki har bir abonent uchun alohida hisob-kitob davri bo‘yicha aniq soniyaga qadar amalga oshiriladi. TR doirasida ATni yechib olish vaqti aniq belgilanmagan bo‘lib, xizmatlardan foydalanish imkoniyati taqdim etilgan vaqtga bog‘liq bo‘ladi.
        ATning hisob-kitob davri kalendar oyining 1-sanasiga bog‘lanmagan holda 1 (bir) oyni tashkil etadi va abonentga xizmatdan foydalanish imkoniyati taqdim etilgan sanadan boshlab hisoblanadi. Hisob-kitob sanasi abonentning hisob-kitob davri uchun ATni hisoblashdagi boshlang‘ich nuqtasi hisoblanadi. 
        Misol uchun, abonent TRga 10-sanada ulangan bo‘lsa, u holda navbatdagi oylik AT keyingi oyning 10-sanasida abonentning shaxsiy hisob raqamida TR bo‘yicha AT uchun yetarli miqdorda pul mablag‘lari bo‘lgandagina yechib olinadi. Agarda abonent 31-avgust kuni ulangan bo‘lsa, u holda navbatdagi ATni yechib olishga urinish 
        30-sentabr kuni amalga oshiriladi.
        Limitlar TR bo‘yicha AT muvaffaqiyatli yechib olinganda taqdim etiladi va joriy hisob-kitob davri tugagunga qadar amal qiladi, TR bo‘yicha foydalanilmay qoldirilgan limitlar keyingi hisob-kitob davriga o‘tkazilmaydi.
        Xizmatlar limiti va AT masshtablashtirilmaydi.
        Masalan: Abonent UZTELECOM GSM tarmog‘iga 30-yanvar kuni ulanganda, AT yechib olinishi 28- yoki 29-fevral kuni (kalendar yiliga ko‘ra) amalga oshiriladi va hisob-kitob davri yakunida Abonent hisobida AT uchun yetarli miqdorda pul mablag‘lari bo‘lmasa, abonent raqami bloklanadi. Abonent tomonidan balans 5 yoki 
        10 kundan keyin to‘ldirilsa, abonent hisobidan AT to‘liq hajmda yechib olinadi, 
        TR doirasidagi xizmatning barcha limitlari keyingi oyda AT yechib olingunga qadar bir oy muddatga to‘liq hajmda taqdim etiladi, bunda, har oylik ATni yechib olish sanasi keyingi muvaffaqiyatli AT yechib olinadigan sanaga suriladi.
        Amaldagi TR “Barakali” tarif rejalari toʻplamidagi TRga o‘zgartirilganda, “Raqam ijarasi” xizmati yoqilgan bo‘lsa, xizmat uchun hisob-kitob davri yangi TR bo‘yicha keyingi davrdan boshlab abonent to‘lovini hisoblash davri bilan tenglashtiriladi.
        Barcha qo‘ng‘iroqlar  so‘zlashuvning birinchi soniyasidan boshlab narxlanadi va to‘liq daqiqa sifatida yaxlitlanib, hisobga olinadi.
        To‘plamdagi barcha tarif rejalarida quyidagi xizmatlar mavjud: “Qabul qilinmagan qo‘ng‘iroq/Tarmoqda”, “Shaxsiy raqam uzatilishini taqiqlash”, “Tezkor o‘tkazmalar”, “Raqam ijarasi”, “Yashirin qo‘ng‘iroq”, “Restart”, “Qo‘llab yubor” xizmatlari, shuningdek, ulanish imkoniyati berilgan qo‘shimcha MB va SMS-paketlari.
        “Barakali” to‘plamidagi TRga quyidagi tarif rejalaridan o‘tish mumkin: “Milliy”,  “Ishbilarmon”, “Flash”, “OnLime”, “Street Upgrade”, “Royal”, “Flash Upgrade”, “Aloqachi”, “Yoshlar”, “Oddiy 10”, “Street”, “Traffic”, “E’zoz”, “Constructor”, “Step”, “C 1”, “C 2”, “C 3”, “C 4”, “Salom”, “Salom plus”, “Komfort”, “UzMobile 1200”, “UzMobile 4000”, “UzMobile VIP”, “UNITS”, ”Bolajon”, “TA’LIM B2C”,  “MAKTAB”, “VOLUNTEER”, “Ta’lim” tarif rejalaridan va “Barakali” toʻplamidagi tarif rejalaridan.  
        “Barakali” TRdan quyidagi tarif rejalariga o‘tish mumkin: “UNITS”, “Aloqachi”, “C1”, “C2”, “C3”, “C4”, “TA’LIM B2C”, “MAKTAB”, “Milliy” va “Barakali”  toʻplamidagi tarif rejalariga.
        TR toʻplami ichida boshqa tarif rejlariga o‘tish narxi - 4 200 so‘m.
        “VOLUNTEER”, “Milliy”, “Ishbilarmon”, “Flash”, “OnLime”, “Street Upgrade”, “Royal”, “Flash Upgrade”, “Aloqachi”, “Yoshlar”, “Oddiy 10”, “Street”, “C1”, “C2”, “C3”, “C4” tarif rejalaridan, “UNITS” toʻplamidagi tarif rejalaridan, “Bolajon”, “TA’LIM B2C”, “MAKTAB” va boshqa amaldagi tarif rejalaridan “Barakali” TRga o‘tish narxi - 4 200 so‘m.
        “Traffic”, “E’zoz”, “Constructor”, “Step”, “Salom”, “Salom plus”, “Komfort”, “UzMobile 1200”, “UzMobile 4000”, “UzMobile VIP”, “Ta’lim” tarif rejalaridan o‘tish bepul amalga oshiriladi.`,
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
        description: `*O‘zbekiston bo‘yicha daqiqalar/SMS limiti
        Oyiga 45 000 daqiqalik texnologik cheklov o‘rnatilgan. 45 000 daqiqadan so‘ng barcha chiquvchi qo‘ng‘iroqlar bloklanadi.
        Ushbu tarif rejasiga (TR) ulanish va boshqa tarif rejalariga o‘tish UZTELECOM sotuv va xizmat ko‘rsatish ofislarida, dilerlik xizmat ko‘rsatish joylarida, shuningdek, MyUZTELECOM mobil ilovasi orqali amalga oshiriladi.
        Resurslardan faqat shaxsiy hisobda yetarli miqdorda mablagʻlar boʻlganda foydalanish mumkin.
        Abonent to‘lovi (keyingi o‘rinlarda - AT) hisoblanishi abonent “faol” holatda bo‘lganda amalga oshiriladi. Agar abonent hisob raqamida yetarli miqdorda pul mablagʻlari bo‘lmaganligi sababli bloklangan bo‘lsa, AT to‘lov kiritilmagunga qadar hisoblanmaydi.
        Ushbu TR doirasida AT hisoblanishining boshlanishi yagona jadval bo‘yicha emas, balki har bir abonent uchun alohida hisob-kitob davri bo‘yicha aniq soniyaga qadar amalga oshiriladi. TR doirasida ATni yechib olish vaqti aniq belgilanmagan bo‘lib, xizmatlardan foydalanish imkoniyati taqdim etilgan vaqtga bog‘liq bo‘ladi.
        ATning hisob-kitob davri kalendar oyining 1-sanasiga bog‘lanmagan holda 1 (bir) oyni tashkil etadi va abonentga xizmatdan foydalanish imkoniyati taqdim etilgan sanadan boshlab hisoblanadi. Hisob-kitob sanasi abonentning hisob-kitob davri uchun ATni hisoblashdagi boshlang‘ich nuqtasi hisoblanadi. 
        Misol uchun, abonent TRga 10-sanada ulangan bo‘lsa, u holda navbatdagi oylik AT keyingi oyning 10-sanasida abonentning shaxsiy hisob raqamida TR bo‘yicha AT uchun yetarli miqdorda pul mablag‘lari bo‘lgandagina yechib olinadi. Agarda abonent 31-avgust kuni ulangan bo‘lsa, u holda navbatdagi ATni yechib olishga urinish 
        30-sentabr kuni amalga oshiriladi.
        Limitlar TR bo‘yicha AT muvaffaqiyatli yechib olinganda taqdim etiladi va joriy hisob-kitob davri tugagunga qadar amal qiladi, TR bo‘yicha foydalanilmay qoldirilgan limitlar keyingi hisob-kitob davriga o‘tkazilmaydi.
        Xizmatlar limiti va AT masshtablashtirilmaydi.
        Masalan: Abonent UZTELECOM GSM tarmog‘iga 30-yanvar kuni ulanganda, AT yechib olinishi 28- yoki 29-fevral kuni (kalendar yiliga ko‘ra) amalga oshiriladi va hisob-kitob davri yakunida Abonent hisobida AT uchun yetarli miqdorda pul mablag‘lari bo‘lmasa, abonent raqami bloklanadi. Abonent tomonidan balans 5 yoki 
        10 kundan keyin to‘ldirilsa, abonent hisobidan AT to‘liq hajmda yechib olinadi, 
        TR doirasidagi xizmatning barcha limitlari keyingi oyda AT yechib olingunga qadar bir oy muddatga to‘liq hajmda taqdim etiladi, bunda, har oylik ATni yechib olish sanasi keyingi muvaffaqiyatli AT yechib olinadigan sanaga suriladi.
        Amaldagi TR “Barakali” tarif rejalari toʻplamidagi TRga o‘zgartirilganda, “Raqam ijarasi” xizmati yoqilgan bo‘lsa, xizmat uchun hisob-kitob davri yangi TR bo‘yicha keyingi davrdan boshlab abonent to‘lovini hisoblash davri bilan tenglashtiriladi.
        Barcha qo‘ng‘iroqlar  so‘zlashuvning birinchi soniyasidan boshlab narxlanadi va to‘liq daqiqa sifatida yaxlitlanib, hisobga olinadi.
        To‘plamdagi barcha tarif rejalarida quyidagi xizmatlar mavjud: “Qabul qilinmagan qo‘ng‘iroq/Tarmoqda”, “Shaxsiy raqam uzatilishini taqiqlash”, “Tezkor o‘tkazmalar”, “Raqam ijarasi”, “Yashirin qo‘ng‘iroq”, “Restart”, “Qo‘llab yubor” xizmatlari, shuningdek, ulanish imkoniyati berilgan qo‘shimcha MB va SMS-paketlari.
        “Barakali” to‘plamidagi TRga quyidagi tarif rejalaridan o‘tish mumkin: “Milliy”,  “Ishbilarmon”, “Flash”, “OnLime”, “Street Upgrade”, “Royal”, “Flash Upgrade”, “Aloqachi”, “Yoshlar”, “Oddiy 10”, “Street”, “Traffic”, “E’zoz”, “Constructor”, “Step”, “C 1”, “C 2”, “C 3”, “C 4”, “Salom”, “Salom plus”, “Komfort”, “UzMobile 1200”, “UzMobile 4000”, “UzMobile VIP”, “UNITS”, ”Bolajon”, “TA’LIM B2C”,  “MAKTAB”, “VOLUNTEER”, “Ta’lim” tarif rejalaridan va “Barakali” toʻplamidagi tarif rejalaridan.  
        “Barakali” TRdan quyidagi tarif rejalariga o‘tish mumkin: “UNITS”, “Aloqachi”, “C1”, “C2”, “C3”, “C4”, “TA’LIM B2C”, “MAKTAB”, “Milliy” va “Barakali”  toʻplamidagi tarif rejalariga.
        TR toʻplami ichida boshqa tarif rejlariga o‘tish narxi - 4 200 so‘m.
        “VOLUNTEER”, “Milliy”, “Ishbilarmon”, “Flash”, “OnLime”, “Street Upgrade”, “Royal”, “Flash Upgrade”, “Aloqachi”, “Yoshlar”, “Oddiy 10”, “Street”, “C1”, “C2”, “C3”, “C4” tarif rejalaridan, “UNITS” toʻplamidagi tarif rejalaridan, “Bolajon”, “TA’LIM B2C”, “MAKTAB” va boshqa amaldagi tarif rejalaridan “Barakali” TRga o‘tish narxi - 4 200 so‘m.
        “Traffic”, “E’zoz”, “Constructor”, “Step”, “Salom”, “Salom plus”, “Komfort”, “UzMobile 1200”, “UzMobile 4000”, “UzMobile VIP”, “Ta’lim” tarif rejalaridan o‘tish bepul amalga oshiriladi.`,
      },
    ],
  },
];
