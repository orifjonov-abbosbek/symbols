let test = [
  {
    id: 0,
    symbol_title: "Yo'l bering",
    symbol_img: "./images/yol_bering.gif"
  },
  {
    id: 1,
    symbol_title: "Turar-joy dahasi",
    symbol_img: "./images/aholi_punkti.gif"
  },
  {
    id: 2,
    symbol_title: "Asosiy yolning oxiri",
    symbol_img: "./images/asosiy_tugash.gif"
  },
  {
    id: 3,
    symbol_title: "Asosiy yo’lning yo’nalishi",
    symbol_img: "./images/asosiy_yol_sxemasi.gif"
  },
  {
    id: 4,
    symbol_title: "Asosiy yol",
    symbol_img: "./images/asosiy_yol.gif"
  },
  {
    id: 5,
    symbol_title: "Avtomagistral",
    symbol_img: "./images/avtomagistral.gif"
  },
  {
    id: 6,
    symbol_title: "Avtomagistral oxiri",
    symbol_img: "./images/avtomagistral_tugashi.gif"
  },
  {
    id: 7,
    symbol_title: "Velosiped yolkasi",
    symbol_img: "./images/velosiped_yolkasi.gif"
  },
  {
    id: 8,
    symbol_title: "Transport vositalarini yuvish joyi",
    symbol_img: "./images/avtomoyka.gif"
  },
  {
    id: 9,
    symbol_title: "Texnik xizmat ko’rsatish joyi",
    symbol_img: "./images/avtoservis.gif"
  },
  {
    id: 10,
    symbol_title: "Aylanma harakatlanish",
    symbol_img: "./images/aylanma_yol.gif"
  },
  {
    id: 11,
    symbol_title: "Belgilangan yo’nalishli transport vositalari uchun mo’ljallangan bo’lak",
    symbol_img: "./images/belgilangan_yonalishli_transport_yolak.gif"
  },
  {
    id: 12,
    symbol_title: "Yonilg’i shaxobchasi",
    symbol_img: "./images/benzin.gif"
  },
  {
    id: 13,
    symbol_title: "Bir izli temir yo’l",
    varian2: "hxzfjdhjhdjf",
    symbol_img: "./images/bir_izli_temir.gif"
  },
  {
    id: 14,
    symbol_title: "Bolalar",
    symbol_img: "./images/bolalar.gif"
  },
  {
    id: 15,
    symbol_title: "Oxiri berk yo’l, ko’cha",
    symbol_img: "./images/boshi_berk_kocha.gif"
  },
  {
    id: 16,
    symbol_title: "Boshqa xavf-xatar",
    symbol_img: "./images/boshqa_xavf.gif"
  },
  {
    id: 17,
    symbol_title: "Chapga burilish taqiqlanadi",
    symbol_img: "./images/burilish_taqiqlanadi.gif"
  },
  {
    id: 18,
    symbol_title: "Eng kam tezlik belgilangan yo’lning oxiri",
    symbol_img: "./images/eng_kam_tezlik_oxiri.gif"
  },
  {
    id: 19,
    symbol_title: "Avtomobillarni ko’rikdan o’tkazish joyi",
    symbol_img: "./images/estakada.gif"
  },
  {
    id: 20,
    symbol_title: "Harakatlanish taqiqlangan",
    symbol_img: "./images/faqat_odamlaga.gif"
  },
  {
    id: 21,
    symbol_title: "Harakatlanish chapga",
    symbol_img: "./images/harakatlanish_chapga.gif"
  },
  {
    id: 22,
    symbol_title: "Harakatlanish o'nga",
    symbol_img: "./images/harakatlanish_onga.gif"
  },
  {
    id: 23,
    symbol_title: "Harakatlanish o'nga yoki tog'riga",
    symbol_img: "./images/harakatlanish_onga_togriga.gif"
  },
  {
    id: 24,
    symbol_title: "Harakatlanish tasviri",
    symbol_img: "./images/harakatlanish_tasviri.gif"
  },
  {
    id: 25,
    symbol_title: "Harakatlanish tog'riga",
    symbol_img: "./images/harakatlanish_togriga.gif"
  },
  {
    id: 26,
    symbol_title: "Ichimlik suvi",
    symbol_img: "./images/ichimlik_suvi.gif"
  },
  {
    id: 27,
    symbol_title: "Ikki tomonlama harakatlanish",
    symbol_img: "./images/ikki_tomonlama_xarakatlanish.gif"
  },
  {
    id: 28,
    symbol_title: "Dam olish joyi",
    symbol_img: "./images/kemping.gif"
  },
  {
    id: 29,
    symbol_title: "Kirish taqiqlangan",
    symbol_img: "./images/kirish_taqiqlanadi.gif"
  },
  {
    id: 30,
    symbol_title: "Mehmonxona",
    symbol_img: "./images/kasalxona.gif"
  },
  {
    id: 31,
    symbol_title: "Kotarma koprik",
    symbol_img: "./images/kotarma_koprik.gif"
  },
  {
    id: 32,
    symbol_title: "Cheklangan balandlik",
    symbol_img: "./images/maksimal_balandlik.gif"
  },
  {
    id: 33,
    symbol_title: "Cheklangan kenglik",
    symbol_img: "./images/maksimal_kenglik.gif"
  },
  {
    id: 34,
    symbol_title: "Vazn cheklangan",
    symbol_img: "./images/maksimal_ogrlik.gif"
  },
  {
    id: 35,
    symbol_title: "Cheklangan uzunlik",
    symbol_img: "./images/maksimal_uzunlik.gif"
  },
  {
    id: 36,
    symbol_title: "Avtobus va trolleybus to’xtash joyi",
    symbol_img: "./images/marshrut.gif"
  },
  {
    id: 37,
    symbol_title: "Mexanik transport vositalarining harakatlanishi taqiqlangan",
    symbol_img: "./images/mexanik_taqiqlangan.gif"
  },
  {
    id: 38,
    symbol_title: "Mototsikllar harakatlanishi taqiqlangan",
    symbol_img: "./images/motosikl_taqiqlanadi.gif"
  },
  {
    id: 39,
    symbol_title: "Eng kam oraliq",
    symbol_img: "./images/oraliq_masofa.gif"
  },
  {
    id: 40,
    symbol_title: "Oshxona",
    symbol_img: "./images/oshxona.gif"
  },
  {
    id: 41,
    symbol_title: "Ot-arava harakatlanishi taqiqlangan",
    symbol_img: "./images/ot_arava_taqiqlanadi.gif"
  },
  {
    id: 42,
    symbol_title: "To’xtab turish joyi",
    symbol_img: "./images/parkovka.gif"
  },
  {
    id: 43,
    symbol_title: "Pastlab uchuvchi samolyotlar",
    symbol_img: "./images/pastlab_uchuvchi_samolyot.gif"
  },
  {
    id: 44,
    symbol_title: "Piyodalar o’tish joyi",
    symbol_img: "./images/piyodalar_otish_joyi.gif"
  },
  {
    id: 45,
    symbol_title: "Piyodalar yo’lkasi",
    symbol_img: "./images/piyodalar_yolagi.gif"
  },
  {
    id: 46,
    symbol_title: "Shlagbaumsiz temir yo’l kesishmasi",
    symbol_img: "./images/poyezd.gif"
  },
  {
    id: 47,
    symbol_title: "Qayrilish ta'qiqlanadi",
    symbol_img: "./images/qayrilish_taqiqlanadi.gif"
  },
  {
    id: 48,
    symbol_title: "Boshqa qatnov qismiga qayta tizilishning boshlang’ich ko’rsatkichi",
    symbol_img: "./images/qayta_tizilish_sxemasi.gif"
  },
  {
    id: 49,
    symbol_title: "Quvib o’tish taqiqlanadi",
    symbol_img: "./images/quvib_otish_taqiqlanadi.gif"
  },
  {
    id: 50,
    symbol_title: "Quvib o’tish ta'qiqlangan hududning oxiri",
    symbol_img: "./images/quvib_otish_taqiqlanadi_tugadi.gif"
  },
  {
    id: 51,
    symbol_title: "Radar",
    symbol_img: "./images/radar.jpg"
  },
  {
    id: 52,
    symbol_title: "Ro’paradagi harakatlanishga nisbatan imtiyoz",
    symbol_img: "./images/ropara_imtiyo.gif"
  },
  {
    id: 53,
    symbol_title: "Ro’para harakatlanishning ustunligi",
    symbol_img: "./images/ropara_ustunlik.gif"
  },
  {
    id: 54,
    symbol_title: "Shlagbaumli temir yo'l kesishmasi",
    symbol_img: "./images/shlakbaumli_temiryol.gif"
  },
  {
    id: 55,
    symbol_title: "Sirpanchiq yo’l",
    symbol_img: "./images/sirpanchiq_yol.gif"
  },
  {
    id: 56,
    symbol_title: "Sohilga chiqish",
    symbol_img: "./images/soxilga_chiqish.gif"
  },
  {
    id: 57,
    symbol_title: "To’xtamasdan harakatlanish taqiqlangan",
    symbol_img: "./images/stop.gif"
  },
  {
    id: 58,
    symbol_title: "Svetofor tartibga soladi",
    symbol_img: "./images/svetofor.gif"
  },
  {
    id: 59,
    symbol_title: "Ta’mirlash ishlari",
    symbol_img: "./images/tamirlash_ishlari.gif"
  },
  {
    id: 60,
    symbol_title: "Ta’sir oralig’i",
    symbol_img: "./images/tasir_doirasi.gif"
  },
  {
    id: 61,
    symbol_title: "Taksi to’xtab turish joyi",
    symbol_img: "./images/taxi.gif"
  },
  {
    id: 62,
    symbol_title: "Telefon",
    symbol_img: "./images/telefon.gif"
  },
  {
    id: 63,
    symbol_title: "Temir yo’l kesishmasining yaqinligi haqida ogohlantirish",
    symbol_img: "./images/temiryol_kesishmasining_yaqinligi.gif"
  },
  {
    id: 64,
    symbol_title: "Yuqori tezlik cheklangan",
    symbol_img: "./images/tezlik-cheklangan.gif"
  },
  {
    id: 65,
    symbol_title: "Tik nishablik",
    symbol_img: "./images/tik_nishablik.gif"
  },
  {
    id: 66,
    symbol_title: "Tik balandlik",
    symbol_img: "./images/tik_qiyalik.gif"
  },
  {
    id: 67,
    symbol_title: "Tirkama bilan harakatlanish taqiqlangan",
    symbol_img: "./images/tirkama_taqiq.gif"
  },
  {
    id: 68,
    symbol_title: "Xojatxona",
    symbol_img: "./images/toilet.gif"
  },
  {
    id: 69,
    symbol_title: "Tonnel",
    symbol_img: "./images/tonnel.gif"
  },
  {
    id: 70,
    symbol_title: "Tosh otilishi",
    symbol_img: "./images/tosh_otilishi.gif"
  },
  {
    id: 71,
    symbol_title: "Toshlar tushishi",
    symbol_img: "./images/tosh_tushishi.gif"
  },
  {
    id: 72,
    symbol_title: "To’siqni o’ngdan yoki chapdan chetlab o’tish",
    symbol_img: "./images/tosiq_chap_ili_ong.gif"
  },
  {
    id: 73,
    symbol_title: "To’siqni chapdan chetlab o’tish",
    symbol_img: "./images/tosiq_chapdan.gif"
  },
  {
    id: 74,
    symbol_title: "To’siqni chapdan o'ngdan chetlab o'tish",
    symbol_img: "./images/tosiq_ongdan.gif"
  },
  {
    id: 75,
    symbol_title: "Tovush moslamalaridan foydalanish ta'qiqlangan",
    symbol_img: "./images/tovushli_signal.gif"
  },
  {
    id: 76,
    symbol_title: "To’xtab turish ta'qiqlangan",
    symbol_img: "./images/toxtab_turish.gif"
  },
  {
    id: 77,
    symbol_title: "To’xtash taqiqlangan",
    symbol_img: "./images/toxtash_taqiqlanadi.gif"
  },
  {
    id: 78,
    symbol_title: "Transport vositasini to’xtab turish joyiga qo’yish usuli",
    symbol_img: "./images/toxtash_usuli.gif"
  },
  {
    id: 79,
    symbol_title: "Traktorlar harakatlanishi taqiqlangan",
    symbol_img: "./images/traktor.gif"
  },
  {
    id: 80,
    symbol_title: "Tramvay yo’li bilan kesishuv",
    symbol_img: "./images/tramvay_kesishuv.gif"
  },
  {
    id: 81,
    symbol_title: "Tramvay to’xtash joyi",
    symbol_img: "./images/tramvay.gif"
  },
  {
    id: 82,
    symbol_title: "Transport vositasining turi",
    symbol_img: "./images/transport_vositasi_turi.gif"
  },
  {
    id: 83,
    symbol_title: "Turar-joy dahasining oxiri",
    symbol_img: "./images/turar_joy_tugash.gif"
  },
  {
    id: 84,
    symbol_title: "Mol haydab o’tish",
    symbol_img: "./images/uy_hayvonlari.gif"
  },
  {
    id: 85,
    symbol_title: "Velosipedda harakatlanish ta'qiqlangan",
    symbol_img: "./images/velik_taqiqlanadi.gif"
  },
  {
    id: 86,
    symbol_title: "Velosiped yo’lkasi bilan kesishuv",
    symbol_img: "./images/velosiped.gif"
  },
  {
    id: 87,
    symbol_title: "Piyodalarning yer ostidan o’tish joyi",
    symbol_img: "./images/yer_osti_yoli.gif"
  },
  {
    id: 88,
    symbol_title: "Piyodalarning yer ustidan o’tish joyi",
    symbol_img: "./images/yer_usti_yoli.gif"
  },
  {
    id: 89,
    symbol_title: "Yonlama shamol",
    symbol_img: "./images/yonlama_shamol.gif"
  },
  {
    id: 90,
    symbol_title: "Yovvoyi hayvonlar",
    symbol_img: "./images/yovvoyi_hayvonlar.gif"
  },
  {
    id: 91,
    symbol_title: "Yuk avtomobillarida quvib o’tish taqiqlangan",
    symbol_img: "./images/yuk_avtomobil_quvish_taqiqlanadi.gif"
  },
  {
    id: 92,
    symbol_title: "Yuk avtommobillarida quvib o’tish taqiqlangan hududning oxiri",
    symbol_img: "./images/yuk_avtomobil_quvish_taqiqlanadi_oxiri.gif"
  },
  {
    id: 93,
    symbol_title: "Tirbandlik",
    symbol_img: "./images/tirbandlik.gif"
  },
  {
    id: 94,
    symbol_title: "Notekis yo’l",
    symbol_img: "./images/notekis_yol.gif"
  },
  {
    id: 95,
    symbol_title: "Barcha cheklovlarning oxiri",
    symbol_img: "./images/barcha.gif"
  },
  {
    id: 96,
    symbol_title: "Tavsiya etilgan tezlik",
    symbol_img: "./images/tavsiya_etilgan_tezlik.gif"
  },
  {
    id: 97,
    symbol_title: "Surat va video",
    symbol_img: "./images/surat_foto.png"
  },
  {
    id: 98,
    symbol_title: "Falokatli holatlar uchun kirish yo’li",
    symbol_img: "./images/xatar_yol.gif"
  },
  {
    id: 99,
    symbol_title: "Shifoxona",
    symbol_img: "./images/shifoxona.gif"
  },
  {
    id: 100,
    symbol_title: "Yuqori tezlik cheklangan hududning oxiri",
    symbol_img: "./images/maksimal_tezlik_tugadi.gif"
  },
]
export default test;