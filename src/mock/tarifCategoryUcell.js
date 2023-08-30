export const tariffUcell = [
  {
    category_id: 1,
    name: 'Tariflar',
    company_name: 'UzMobile',
    category: 'Doimiy',
    tarifs: [
      {
        id: 1,
        package_name: 'Doimiy 20',
        category_id: 1,
        deadline: 'oylik',
        time: 'cheksiz',
        ussd_code: `*120#`,
        price: 20000,
        sms: 500,
        minutes: 'Cheksiz',
        internet: '5 GB',
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
        package_name: 'Doimiy 35',
        category_id: 1,
        deadline: 'oylik',
        time: '',
        ussd_code: '*120#',
        price: 35000,
        sms: 1000,
        minutes: 'Cheksiz',
        internet: '10 GB',
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
          Internet-trafikning kvant tarifikatsiyasi – 16 Kb.
          “Traffic”, “E’zoz”, “Constructor”, “Step”, “Salom”, “Salom plus”, “Komfort”, “UzMobile 1200”, “UzMobile 4000”, “UzMobile VIP”, “Ta’lim” tarif rejalaridan o‘tish bepul amalga oshiriladi.`,
      },
      {
        id: 3,
        package_name: 'DOIMIY 50 ',
        category_id: 1,
        deadline: 'oylik',
        time: '',
        ussd_code: '*120#',
        price: 50000,
        sms: 0,
        minutes: 'Cheksiz',
        internet: ' 20 GB',
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
          Internet-trafikning kvant tarifikatsiyasi – 16 Kb.
          “Traffic”, “E’zoz”, “Constructor”, “Step”, “Salom”, “Salom plus”, “Komfort”, “UzMobile 1200”, “UzMobile 4000”, “UzMobile VIP”, “Ta’lim” tarif rejalaridan  “Milliy” TRga o‘tish bepul amalga oshiriladi.`,
      },
      {
        id: 4,
        package_name: 'DOIMIY 70',
        category_id: 1,
        deadline: 'oylik',
        time: '',
        ussd_code: '*120#',
        price: 70000,
        sms: 2000,
        minutes: 'Cheksiz',
        internet: ' 35 GB',
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
          Internet-trafikning kvant tarifikatsiyasi – 16 Kb.
          “Traffic”, “E’zoz”, “Constructor”, “Step”, “Salom”, “Salom plus”, “Komfort”, “UzMobile 1200”, “UzMobile 4000”, “UzMobile VIP”, “Ta’lim” tarif rejalaridan o‘tish bepul amalga oshiriladi.`,
      },
      {
        id: 5,
        package_name: 'DOIMIY 100',
        category_id: 1,
        deadline: 'oylik',
        time: '',
        ussd_code: '*120#',
        price: 100000,
        sms: 0,
        minutes: 'Cheksiz',
        internet: '50 GB',
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
          Internet-trafikning kvant tarifikatsiyasi – 16 Kb.
          “Traffic”, “E’zoz”, “Constructor”, “Step”, “Salom”, “Salom plus”, “Komfort”, “UzMobile 1200”, “UzMobile 4000”, “UzMobile VIP”, “Ta’lim” tarif rejalaridan o‘tish bepul amalga oshiriladi.`,
      },
      {
        id: 6,
        package_name: ' DOIMIY 150 ',
        category_id: 1,
        deadline: 'oylik',
        time: '',
        ussd_code: '*120#',
        price: 150000,
        sms: 0,
        minutes: 'Cheksiz',
        internet: '200 GB',
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
          “Traffic”, “E’zoz”, “Constructor”, “Step”, “Salom”, “Salom plus”, “Komfort”, “UzMobile 1200”, “UzMobile 4000”, “UzMobile VIP”, “Ta’lim” tarif rejalaridan o‘tish bepul amalga oshiriladi.
          Internet-trafikning kvant tarifikatsiyasi – 16 Kb.
          “Barakali 111” ТRga biriktirilgan bepul raqamni ulashda boshqa tarif rejalariga o‘tish imkoniyati boʻlmaydi. Boshqa TRga o‘tish uchun abonent tarif rejasiga muvofiq abonent to‘lovining kamida 12 ta sikli boʻyicha to‘lovni amalga oshirishi kerak.`,
      },
    ],
  },
];
