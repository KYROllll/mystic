/* Generated from i18n.jsx by `npm run build` — edit the .jsx source, not this file. */
// i18n.jsx
// Language metadata + all site copy for Hebrew (he), Russian (ru),
// Azerbaijani (az) and Turkish (tr). The selected language lives in App state
// and is mirrored to <html lang/dir> and localStorage.
//
// The brand is shown as a single localized title in every language — never as a
// Hebrew mark with a Cyrillic/Latin sub-line next to it.

const LANG_STORAGE_KEY = 'or-vaderech-lang';
const LANGS = {
  he: {
    code: 'he',
    dir: 'rtl',
    name: 'עברית',
    english: 'Hebrew',
    title: 'אור ודרך · ייעוץ רוחני, קלפי טארוט וניקוי רוחני'
  },
  ru: {
    code: 'ru',
    dir: 'ltr',
    name: 'Русский',
    english: 'Russian',
    title: 'Свет и путь · эзотерические консультации, Таро и духовная чистка'
  },
  az: {
    code: 'az',
    dir: 'ltr',
    name: 'Azərbaycanca',
    english: 'Azerbaijani',
    title: 'İşıq və Yol · ezoterik məsləhətlər, tarot və ruhi təmizlənmə'
  },
  tr: {
    code: 'tr',
    dir: 'ltr',
    name: 'Türkçe',
    english: 'Turkish',
    title: 'Işık ve Yol · ezoterik danışmanlık, tarot ve ruhsal arınma'
  }
};
const LANG_ORDER = ['he', 'ru', 'az', 'tr'];

// Only a saved choice overrides the Hebrew default — never guess from the
// browser locale, so everyone lands on the brand's primary language.
function getInitialLang() {
  try {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && LANGS[saved]) return saved;
  } catch (e) {/* storage may be blocked on file:// — fall through */}
  return 'he';
}
const I18N = {
  // ── Hebrew ────────────────────────────────────────────────────────────────
  he: {
    meta: {
      title: 'אור ודרך · ייעוץ רוחני, קלפי טארוט וניקוי רוחני',
      description: 'אור ודרך — ייעוץ רוחני, קלפי טארוט וניקוי רוחני. קריאה בקלפים, ניקוי רוחני והגנה מעין הרע, טיפולי רייקי וייעוץ רוחני ועסקי. 28 שנות ניסיון, מענה אישי ודיסקרטי.'
    },
    brand: {
      name: 'אור ודרך',
      focus: 'ייעוץ רוחני · קלפי טארוט · ניקוי רוחני',
      focusLong: 'ייעוץ רוחני, קלפי טארוט וניקוי רוחני'
    },
    nav: {
      about: 'אודות',
      services: 'שירותים',
      oracle: 'קלף היום',
      voices: 'מילות לקוחות',
      contact: 'יצירת קשר',
      cta: 'תיאום ייעוץ',
      book: 'קביעת ייעוץ אישי',
      menuOpen: 'פתיחת תפריט',
      menuClose: 'סגירת תפריט',
      langLabel: 'בחירת שפה'
    },
    hero: {
      eyebrow: 'ייעוץ רוחני, קלפי טארוט וניקוי רוחני',
      name: 'ייעוץ רוחני · קלפי טארוט · ניקוי רוחני',
      tagline: 'מרחב של אור, בהירות ורוגע — ייעוץ רוחני אישי, קריאה בקלפים וניקוי אנרגטי, בעברית, רוסית וקווקזית.',
      ctaPrimary: 'קביעת ייעוץ אישי',
      ctaSecondary: 'שליפת קלף היום',
      meta: ['28 שנות ניסיון', 'עברית · רוסית · קווקזית', 'מענה אישי ודיסקרטי'],
      scroll: 'גלגלי מטה'
    },
    about: {
      name: 'מרים',
      title: 'אודותיי',
      lede: 'אור ודרך — ייעוץ רוחני, קלפי טארוט וניקוי רוחני. כבר 28 שנה אני מלווה אנשים במסע אל תוך עצמם, בדרך של אור, בהירות ורוגע.',
      p1: 'אני מעניקה ייעוץ רוחני אישי, קריאה בקלפי טארוט, ניקוי רוחני והגנה מעין הרע, טיפולי רייקי לאיזון אנרגטי, והכוונה רוחנית ועסקית לפתיחת עסק — בגישה מחזקת, בונה ותומכת שמשיגה תוצאות.',
      p2: 'המפגשים מתקיימים במרחב בטוח ואינטימי — בפגישה אישית או בשיחה טלפונית. השירות ניתן באופן מקצועי בשפות: עברית, רוסית וקווקזית.',
      extra: 'השירות ניתן גם ברוסית — בגישה חמה, אישית וללא שיפוטיות.',
      creds: [['28', 'שנות ניסיון והצלחה'], ['3', 'שפות: עברית, רוסית וקווקזית'], ['∞', 'גישה מחזקת ותומכת']],
      caption: '— טארוט וייעוץ רוחני —'
    },
    services: {
      title: 'השירותים שלי',
      sub: 'ייעוץ רוחני, קלפי טארוט וניקוי רוחני — בהתאמה אישית, בעברית, רוסית וקווקזית.',
      subExtra: 'Эзотерические консультации и духовные практики',
      note: '* מחירים בפרטי · ניתן לתאם פגישה אישית או שיחת ייעוץ טלפונית · השירות ניתן בעברית, רוסית וקווקזית',
      items: [{
        tag: 'קריאה וראייה',
        title: 'קלפי טארוט',
        duration: 'קריאה אישית',
        subtitle: 'קלפים · תמונה · כף יד וקפה',
        price: 'מחיר בפרטי',
        desc: 'קריאה בקלפי טארוט, פריסת קלפים עם תמונה, קריאת כף יד וקפה. חיבור מעמיק לקבלת בהירות, מענה לשאלות הלב והכוונה מדויקת.',
        features: ['קריאה בקלפי טארוט', 'פריסת קלפים עם תמונה', 'קריאת כף היד וקפה', 'ראייה אינטואיטיבית ומענה מעמיק'],
        cta: 'לתיאום מפגש ←',
        topic: 'קלפי טארוט — קריאה אישית בקלפים'
      }, {
        tag: 'טיהור והגנה',
        title: 'ניקוי רוחני והגנה',
        duration: 'טיהור וברכה',
        subtitle: 'מים קדושים · עין הרע · רייקי',
        price: 'מחיר בפרטי',
        desc: 'ניקוי רוחני במים קדושים, הסרת עין הרע וכישופים, ברכה וליווי לפריון וילודה, וטיפולי רייקי לשחרור חסימות ואיזון אנרגטי עמוק.',
        features: ['ניקוי רוחני ופתיחה במים קדושים', 'הגנה והסרת עין הרע וכישופים', 'ברכה וליווי לפריון וילודה', 'טיפולי רייקי ואיזון אנרגטי'],
        cta: 'לתיאום מפגש ←',
        topic: 'ניקוי רוחני והגנה — מים קדושים, עין הרע ורייקי'
      }, {
        tag: '28 שנות ניסיון',
        title: 'ייעוץ רוחני ועסקי',
        duration: 'ייעוץ ממוקד תוצאות',
        subtitle: 'עברית · רוסית · קווקזית',
        price: 'מחיר בפרטי',
        desc: 'שיחת ייעוץ מקצועית ורוחנית לפתיחת עסק, ליווי אישי והכוונה בדרך — עם 28 שנות ניסיון. גישה מחזקת, בונה ותומכת, שמשיגה תוצאות.',
        features: ['28 שנות ניסיון בליווי ובהצלחה', 'שיחת ייעוץ מקצועית ורוחנית', 'גישה מחזקת, בונה ותומכת שמשיגה תוצאות', 'דוברת עברית, רוסית וקווקזית'],
        cta: 'לתיאום מפגש ←',
        topic: 'ייעוץ רוחני ועסקי (28 שנות ניסיון)'
      }]
    },
    oracle: {
      title: 'קלף היום',
      sub: 'קחי רגע. נשמי עמוק. חשבי על שאלה אחת — ובחרי קלף.',
      cardNames: ['קלף ראשון', 'קלף שני', 'קלף שלישי'],
      drawAria: n => `${n} — שליפת קלף היום`,
      prompt: 'הקלפים מחכים. סמכי על הלב שלך — הוא יודע.',
      eyebrow: '— הקלף שלך היום —',
      again: 'שליפת קלף נוסף ↻'
    },
    voices: {
      title: 'מילים שנשארות איתי',
      prev: 'העדות הקודמת',
      next: 'העדות הבאה',
      dot: n => `עדות ${n}`,
      items: [{
        text: 'הגעתי במצב לב סוער ויצאתי עם בהירות שכבר חודשים חיפשתי. הקריאה הייתה מדויקת, רכה, ובדיוק במקום הנכון. אני חוזרת.',
        name: 'דנה ק.',
        city: 'תל אביב'
      }, {
        text: 'הרגשתי שמישהי באמת רואה אותי — לא מנחשת. הקלפים פתחו שיחה שלא ידעתי שאני צריכה. תודה גדולה.',
        name: 'מיכל ב.',
        city: 'חיפה'
      }, {
        text: 'באתי סקפטי לחלוטין. יצאתי עם תחושת ביטחון שלא הייתה לי כבר שנים. מעבר לקלפים, יש פה אדם שמקשיב לעומק.',
        name: 'יואב ש.',
        city: 'רעננה'
      }]
    },
    contact: {
      title: 'תיאום ייעוץ',
      sub: 'השאירי פרטים ואחזור אלייך בתוך 24 שעות. אם זה דחוף — אפשר גם בטלפון.',
      telephone: '— טלפון —',
      pending: '— יתעדכן בקרוב —',
      hours: 'זמינה ימים א׳–ה׳ · 10:00–21:00',
      waTitle: 'שליחת הודעה בוואטסאפ',
      waSub: 'מענה מהיר · ישירות לצ׳אט',
      waAria: 'פתיחת צ׳אט בוואטסאפ',
      name: 'שם מלא',
      namePh: 'שמך כאן',
      phone: 'טלפון',
      topic: 'סוג השירות',
      topicOther: 'אחר — אסביר בהודעה',
      message: 'משהו שתרצי לשתף לפני הפגישה?',
      messagePh: 'שאלה ראשונית, העדפת שעות, או כל דבר שירגיש לך נכון...',
      submit: 'שליחה ישירה לוואטסאפ',
      submitting: '✓ פותח שיחת WhatsApp לשליחה...',
      fine: 'בלחיצה על שליחה תיפתח שיחת WhatsApp עם כל הפרטים שמילאת ישירות לטלפון של מרים.',
      waIntro: 'שלום מרים, פנייה חדשה מאתר אור ודרך:',
      waName: '• שם מלא: ',
      waPhone: '• טלפון: ',
      waService: '• שירות מבוקש: ',
      waDetails: '• פרטים / שאלות: '
    },
    footer: {
      tag: 'ייעוץ רוחני · קלפי טארוט · ניקוי רוחני והגנה',
      tagExtra: 'Эзотерические консультации и духовные практики',
      fine: 'כל הזכויות שמורות · נבנה באהבה בלילה כוכבים'
    },
    wa: {
      float: 'צ׳אט בוואטסאפ'
    }
  },
  // ── Russian ───────────────────────────────────────────────────────────────
  ru: {
    meta: {
      title: 'Свет и путь · эзотерические консультации, Таро и духовная чистка',
      description: 'Свет и путь — эзотерические консультации, расклады Таро и духовная чистка. Снятие сглаза и защита, сеансы рейки, духовное и деловое наставничество. 28 лет практики, личный и конфиденциальный подход.'
    },
    brand: {
      name: 'Свет и путь',
      focus: 'Эзотерические консультации · Таро · духовная чистка',
      focusLong: 'Эзотерические консультации и духовные практики'
    },
    nav: {
      about: 'Обо мне',
      services: 'Услуги',
      oracle: 'Карта дня',
      voices: 'Отзывы',
      contact: 'Контакты',
      cta: 'Записаться',
      book: 'Записаться на сессию',
      menuOpen: 'Открыть меню',
      menuClose: 'Закрыть меню',
      langLabel: 'Выбор языка'
    },
    hero: {
      eyebrow: 'Эзотерические консультации · Таро · духовная чистка',
      name: 'Эзотерические консультации · Таро · духовная чистка',
      tagline: 'Пространство света, ясности и покоя — личные эзотерические консультации, расклады Таро и энергетическая чистка. 28 лет практики, внимательный и конфиденциальный подход.',
      ctaPrimary: 'Записаться на консультацию',
      ctaSecondary: 'Вытянуть карту дня',
      meta: ['28 лет практики', 'иврит · русский · кавказские языки', 'лично и конфиденциально'],
      scroll: 'Прокрутить вниз'
    },
    about: {
      name: 'Мирьям',
      title: 'Обо мне',
      lede: '«Свет и путь» — эзотерические консультации, карты Таро и духовные практики. Уже 28 лет я сопровождаю людей в пути к самим себе — путём света, ясности и покоя.',
      p1: 'Я провожу личные эзотерические консультации, чтение карт Таро, духовную чистку и защиту от сглаза, сеансы рейки для энергетического баланса, а также духовное и деловое наставничество для открытия своего дела — в поддерживающем, созидательном подходе, который приносит результат.',
      p2: 'Встречи проходят в безопасном и сокровенном пространстве — лично или по телефону. Услуги предоставляются профессионально на иврите, русском и кавказских языках.',
      extra: 'Консультации проходят и на русском языке — тепло, лично и без осуждения.',
      creds: [['28', 'лет опыта и результатов'], ['3', 'языка: иврит, русский, кавказские'], ['∞', 'поддерживающий подход']],
      caption: '— Таро и духовное наставничество —'
    },
    services: {
      title: 'Мои услуги',
      sub: 'Эзотерические консультации, Таро и духовная чистка — индивидуально, на иврите, русском и кавказских языках.',
      subExtra: 'Личный подход · 28 лет практики',
      note: '* Стоимость обсуждается индивидуально · возможна личная встреча или консультация по телефону · на иврите, русском и кавказских языках',
      items: [{
        tag: 'Прояснение и взгляд',
        title: 'Карты Таро',
        duration: 'Личный расклад',
        subtitle: 'Карты · фото · рука и кофе',
        price: 'Цена по запросу',
        desc: 'Чтение Таро, расклад по фотографии, хиромантия и гадание на кофе. Глубокое погружение для ясности, ответы на вопросы сердца и точные ориентиры.',
        features: ['Расклад Таро', 'Расклад по фотографии', 'Хиромантия и кофе', 'Интуитивное видение и глубокий ответ'],
        cta: 'Записаться на встречу →',
        topic: 'Таро — личный расклад'
      }, {
        tag: 'Очищение и защита',
        title: 'Духовная чистка и защита',
        duration: 'Очищение и благословение',
        subtitle: 'Святая вода · сглаз · рейки',
        price: 'Цена по запросу',
        desc: 'Духовная чистка святой водой, снятие сглаза и порчи, благословение и поддержка в вопросах плодородия, а также сеансы рейки для снятия блоков и глубокого энергетического баланса.',
        features: ['Чистка и открытие святой водой', 'Защита, снятие сглаза и порчи', 'Благословение на плодородие', 'Рейки и энергетический баланс'],
        cta: 'Записаться на встречу →',
        topic: 'Духовная чистка и защита — святая вода, сглаз и рейки'
      }, {
        tag: '28 лет практики',
        title: 'Духовное и деловое наставничество',
        duration: 'Консультация с результатом',
        subtitle: 'Иврит · русский · кавказские',
        price: 'Цена по запросу',
        desc: 'Профессиональная и духовная консультация для открытия дела, личное сопровождение и ориентиры в пути — с 28-летним опытом. Поддерживающий подход, который приносит результат.',
        features: ['28 лет сопровождения и результатов', 'Профессиональная духовная консультация', 'Поддерживающий подход с результатом', 'Говорю на иврите, русском, кавказских'],
        cta: 'Записаться на встречу →',
        topic: 'Духовное и деловое наставничество (28 лет практики)'
      }]
    },
    oracle: {
      title: 'Карта дня',
      sub: 'Остановитесь на мгновение. Сделайте глубокий вдох. Подумайте об одном вопросе — и выберите карту.',
      cardNames: ['первая карта', 'вторая карта', 'третья карта'],
      drawAria: n => `${n} — вытянуть карту дня`,
      prompt: 'Карты ждут. Доверьтесь сердцу — оно знает.',
      eyebrow: '— Ваша карта на сегодня —',
      again: 'Вытянуть ещё карту ↻'
    },
    voices: {
      title: 'Слова, которые остаются со мной',
      prev: 'Предыдущий отзыв',
      next: 'Следующий отзыв',
      dot: n => `Отзыв ${n}`,
      items: [{
        text: 'Я пришла с бурей в сердце, а ушла с ясностью, которую искала месяцами. Расклад был точным, мягким и ровно там, где нужно. Я возвращаюсь.',
        name: 'Дана К.',
        city: 'Тель-Авив'
      }, {
        text: 'Я почувствовала, что меня действительно видят — а не угадывают. Карты открыли разговор, о котором я не знала, что он мне нужен. Большое спасибо.',
        name: 'Михаль Б.',
        city: 'Хайфа'
      }, {
        text: 'Пришёл полным скептиком. Ушёл с чувством уверенности, которого не было много лет. Помимо карт, здесь есть человек, который слушает глубоко.',
        name: 'Йоав Ш.',
        city: 'Раанана'
      }]
    },
    contact: {
      title: 'Запись на консультацию',
      sub: 'Оставьте свои данные, и я вернусь к вам в течение 24 часов. Если срочно — можно позвонить.',
      telephone: '— Телефон —',
      pending: '— скоро появится —',
      hours: 'Воскресенье–четверг · 10:00–21:00',
      waTitle: 'Написать в WhatsApp',
      waSub: 'Быстрый ответ · сразу в чат',
      waAria: 'Открыть чат WhatsApp',
      name: 'Имя и фамилия',
      namePh: 'Ваше имя',
      phone: 'Телефон',
      topic: 'Услуга',
      topicOther: 'Другое — объясню в сообщении',
      message: 'Что-то, чем хотите поделиться до встречи?',
      messagePh: 'Первый вопрос, удобное время или что угодно, что вам откликается…',
      submit: 'Отправить в WhatsApp',
      submitting: '✓ Открываю WhatsApp для отправки…',
      fine: 'При отправке откроется чат WhatsApp со всеми данными, которые вы заполнили, — сразу на телефон Мирьям.',
      waIntro: 'Здравствуйте, Мирьям! Новая заявка с сайта «Свет и путь»:',
      waName: '• Имя: ',
      waPhone: '• Телефон: ',
      waService: '• Услуга: ',
      waDetails: '• Подробности / вопросы: '
    },
    footer: {
      tag: 'Эзотерические консультации · Таро · чистка и защита',
      tagExtra: 'на русском и иврите',
      fine: 'Все права защищены · сделано с любовью под звёздным небом'
    },
    wa: {
      float: 'Чат в WhatsApp'
    }
  },
  // ── Azerbaijani ───────────────────────────────────────────────────────────
  az: {
    meta: {
      title: 'İşıq və Yol · ezoterik məsləhətlər, tarot və ruhi təmizlənmə',
      description: 'İşıq və Yol — ezoterik məsləhətlər, tarot oxumaları və ruhi təmizlənmə. Nəzərdən qorunma, reyki seansları, ruhi və biznes məsləhətləri. 28 illik təcrübə, fərdi və məxfi yanaşma.'
    },
    brand: {
      name: 'İşıq və Yol',
      focus: 'Ezoterik məsləhətlər · Tarot · Ruhi təmizlənmə',
      focusLong: 'Ezoterik məsləhətlər və ruhi təcrübələr'
    },
    nav: {
      about: 'Haqqımda',
      services: 'Xidmətlər',
      oracle: 'Günün kartı',
      voices: 'Rəylər',
      contact: 'Əlaqə',
      cta: 'Randevu',
      book: 'Şəxsi randevu al',
      menuOpen: 'Menyunu aç',
      menuClose: 'Menyunu bağla',
      langLabel: 'Dil seçimi'
    },
    hero: {
      eyebrow: 'Ezoterik məsləhətlər · Tarot · Ruhi təmizlənmə',
      name: 'Ezoterik məsləhətlər · Tarot · Ruhi təmizlənmə',
      tagline: 'İşıq, aydınlıq və sakitlik məkanı — fərdi ezoterik məsləhətlər, tarot oxumaları və enerji təmizlənməsi. 28 illik təcrübə, səmimi və məxfi yanaşma ilə.',
      ctaPrimary: 'Şəxsi randevu al',
      ctaSecondary: 'Günün kartını çək',
      meta: ['28 illik təcrübə', 'ivrit · rus · Qafqaz dilləri', 'fərdi və məxfi'],
      scroll: 'Aşağı sürüşdür'
    },
    about: {
      name: 'Miriam',
      title: 'Haqqımda',
      lede: '«İşıq və Yol» — ezoterik məsləhətlər, tarot kartları və ruhi təcrübələr. 28 ildir insanlara özlərinə qayıdış yolunda işıq, aydınlıq və sakitlik yolu ilə yoldaşlıq edirəm.',
      p1: 'Fərdi ezoterik məsləhətlər, tarot oxumaları, ruhi təmizlənmə və nəzərdən qorunma, enerji balansı üçün reyki seansları, həmçinin iş qurmaq üçün ruhi və biznes məsləhətləri təqdim edirəm — nəticə verən, gücləndirən və dəstəkləyən yanaşma ilə.',
      p2: 'Görüşlər təhlükəsiz və intim məkanda — şəxsi görüş və ya telefon söhbəti ilə keçir. Xidmətlər ivrit, rus və Qafqaz dillərində peşəkar şəkildə göstərilir.',
      extra: 'Konsultasiyalar rus dilində də keçirilir — səmimi, fərdi və mühakiməsiz yanaşma ilə.',
      creds: [['28', 'illik təcrübə və nəticələr'], ['3', 'dil: ivrit, rus, Qafqaz dilləri'], ['∞', 'gücləndirən və dəstəkləyən yanaşma']],
      caption: '— Tarot və ruhi bələdçilik —'
    },
    services: {
      title: 'Xidmətlərim',
      sub: 'Ezoterik məsləhətlər, tarot və ruhi təmizlənmə — sizə uyğun, ivrit, rus və Qafqaz dillərində.',
      subExtra: 'Fərdi yanaşma · 28 illik təcrübə',
      note: '* Qiymətlər fərdi qaydada · şəxsi görüş və ya telefonla konsultasiya · ivrit, rus və Qafqaz dillərində',
      items: [{
        tag: 'Aydınlıq və baxış',
        title: 'Tarot kartları',
        duration: 'Fərdi oxuma',
        subtitle: 'Kartlar · foto · əl və qəhvə',
        price: 'Qiymət fərdi',
        desc: 'Tarot oxuması, foto ilə kart açımı, əl falı və qəhvə falı. Aydınlıq üçün dərin bağ, qəlbin suallarına cavablar və dəqiq yönləndirmə.',
        features: ['Tarot kartı oxuması', 'Foto ilə kart açımı', 'Əl falı və qəhvə falı', 'İntuitiv baxış və dərin cavablar'],
        cta: 'Görüş üçün randevu →',
        topic: 'Tarot — fərdi kart oxuması'
      }, {
        tag: 'Təmizlənmə və qorunma',
        title: 'Ruhi təmizlənmə və qorunma',
        duration: 'Təmizlənmə və xeyir-dua',
        subtitle: 'Müqəddəs su · nəzər · reyki',
        price: 'Qiymət fərdi',
        desc: 'Müqəddəs su ilə ruhi təmizlənmə, nəzərin və büyünün aradan qaldırılması, bərəkət və nəsil üçün xeyir-dua və dəstək, blokları açmaq və dərin enerji balansı üçün reyki seansları.',
        features: ['Müqəddəs su ilə təmizlənmə və açılış', 'Qorunma, nəzər və büyünün aradan qaldırılması', 'Bərəkət və nəsil üçün xeyir-dua', 'Reyki və enerji balansı'],
        cta: 'Görüş üçün randevu →',
        topic: 'Ruhi təmizlənmə və qorunma — müqəddəs su, nəzər və reyki'
      }, {
        tag: '28 illik təcrübə',
        title: 'Ruhi və biznes məsləhətləri',
        duration: 'Nəticəyə yönəlmiş konsultasiya',
        subtitle: 'İvrit · rus · Qafqaz dilləri',
        price: 'Qiymət fərdi',
        desc: 'İş qurmaq üçün peşəkar və ruhi konsultasiya, fərdi müşayiət və yolda yönləndirmə — 28 illik təcrübə ilə. Nəticə verən, gücləndirən və dəstəkləyən yanaşma.',
        features: ['28 illik müşayiət və nəticə', 'Peşəkar ruhi konsultasiya', 'Nəticə verən dəstəkləyici yanaşma', 'İvrit, rus və Qafqaz dillərində'],
        cta: 'Görüş üçün randevu →',
        topic: 'Ruhi və biznes məsləhətləri (28 illik təcrübə)'
      }]
    },
    oracle: {
      title: 'Günün kartı',
      sub: 'Bir an dayanın. Dərin nəfəs alın. Bir sual düşünün — və bir kart seçin.',
      cardNames: ['birinci kart', 'ikinci kart', 'üçüncü kart'],
      drawAria: n => `${n} — günün kartını çək`,
      prompt: 'Kartlar gözləyir. Qəlbinizə güvənin — o bilir.',
      eyebrow: '— Bugünkü kartınız —',
      again: 'Başqa kart çək ↻'
    },
    voices: {
      title: 'Məndə qalan sözlər',
      prev: 'Əvvəlki rəy',
      next: 'Növbəti rəy',
      dot: n => `Rəy ${n}`,
      items: [{
        text: 'Qəlbimdə fırtına ilə gəldim, aylarla axtardığım aydınlıqla ayrıldım. Oxuma dəqiq, yumşaq və tam yerində idi. Yenə gəlirəm.',
        name: 'Dana K.',
        city: 'Tel-Əviv'
      }, {
        text: 'Birinin məni həqiqətən gördüyünü hiss etdim — təxmin etmədiyini. Kartlar ehtiyacım olduğunu bilmədiyim bir söhbət açdı. Çox sağ olun.',
        name: 'Mixal B.',
        city: 'Xayfa'
      }, {
        text: 'Tam skeptik kimi gəldim. İllərlə hiss etmədiyim bir inamla ayrıldım. Kartlardan başqa, burada dərindən dinləyən bir insan var.',
        name: 'Yoav Ş.',
        city: 'Raanana'
      }]
    },
    contact: {
      title: 'Randevu alın',
      sub: 'Məlumatlarınızı buraxın, 24 saat ərzində sizə qayıdacağam. Təcili olarsa, telefonla da əlaqə saxlaya bilərsiniz.',
      telephone: '— Telefon —',
      pending: '— tezliklə —',
      hours: 'Bazar – cümə axşamı · 10:00–21:00',
      waTitle: 'WhatsApp mesajı göndər',
      waSub: 'Sürətli cavab · birbaşa çata',
      waAria: 'WhatsApp çatını aç',
      name: 'Ad və soyad',
      namePh: 'Adınız',
      phone: 'Telefon',
      topic: 'Xidmət',
      topicOther: 'Digər — mesajda izah edəcəyəm',
      message: 'Görüşdən əvvəl paylaşmaq istədiyiniz nəsə?',
      messagePh: 'İlk sualınız, uyğun saatlar və ya sizə doğru gələn hər şey…',
      submit: 'Birbaşa WhatsApp-a göndər',
      submitting: '✓ Göndərmək üçün WhatsApp açılır…',
      fine: 'Göndər düyməsinə basdıqda doldurduğunuz bütün məlumatlarla WhatsApp çatı açılır və birbaşa Miriamın telefonuna gedir.',
      waIntro: 'Salam Miriam, İşıq və Yol saytından yeni müraciət:',
      waName: '• Ad və soyad: ',
      waPhone: '• Telefon: ',
      waService: '• İstənilən xidmət: ',
      waDetails: '• Təfərrüatlar / suallar: '
    },
    footer: {
      tag: 'Ezoterik məsləhətlər · Tarot · Təmizlənmə və qorunma',
      tagExtra: 'ivrit və rus dillərində',
      fine: 'Bütün hüquqlar qorunur · ulduzlu səma altında sevgi ilə hazırlanıb'
    },
    wa: {
      float: 'WhatsApp çatı'
    }
  },
  // ── Turkish ───────────────────────────────────────────────────────────────
  tr: {
    meta: {
      title: 'Işık ve Yol · ezoterik danışmanlık, tarot ve ruhsal arınma',
      description: 'Işık ve Yol — ezoterik danışmanlık, tarot okumaları ve ruhsal arınma. Nazardan korunma, reiki seansları, ruhsal ve iş danışmanlığı. 28 yıllık deneyim, kişiye özel ve gizli.'
    },
    brand: {
      name: 'Işık ve Yol',
      focus: 'Ezoterik danışmanlık · Tarot · Ruhsal arınma',
      focusLong: 'Ezoterik danışmanlık ve ruhsal uygulamalar'
    },
    nav: {
      about: 'Hakkımda',
      services: 'Hizmetler',
      oracle: 'Günün Kartı',
      voices: 'Yorumlar',
      contact: 'İletişim',
      cta: 'Randevu',
      book: 'Kişisel randevu al',
      menuOpen: 'Menüyü aç',
      menuClose: 'Menüyü kapat',
      langLabel: 'Dil seçimi'
    },
    hero: {
      eyebrow: 'Ezoterik danışmanlık · Tarot · Ruhsal arınma',
      name: 'Ezoterik danışmanlık · Tarot · Ruhsal arınma',
      tagline: 'Işık, berraklık ve huzur alanı — kişisel ezoterik danışmanlık, tarot okumaları ve enerji temizliği. 28 yıllık deneyim, sıcak ve gizliliğe saygılı bir yaklaşımla.',
      ctaPrimary: 'Kişisel randevu al',
      ctaSecondary: 'Günün kartını çek',
      meta: ['28 yıllık deneyim', 'İbranice · Rusça · Kafkas dilleri', 'kişiye özel ve gizli'],
      scroll: 'Aşağı kaydır'
    },
    about: {
      name: 'Miriam',
      title: 'Hakkımda',
      lede: 'Işık ve Yol — ezoterik danışmanlık, tarot kartları ve ruhsal uygulamalar. 28 yıldır insanlara kendilerine dönüş yolculuklarında eşlik ediyorum; ışık, berraklık ve huzur yolunda.',
      p1: 'Kişisel ezoterik danışmanlık, tarot okumaları, ruhsal arınma ve nazardan korunma, enerji dengesi için reiki seansları ve iş kurmaya yönelik ruhsal ve iş danışmanlığı sunuyorum — sonuç getiren, güçlendiren ve yapıcı bir yaklaşımla.',
      p2: 'Görüşmeler güvenli ve mahrem bir ortamda — yüz yüze ya da telefonla yapılır. Hizmetler İbranice, Rusça ve Kafkas dillerinde profesyonel olarak verilir.',
      extra: 'Türkçe görüşme de mümkündür — sıcak, kişiye özel ve yargısız bir yaklaşımla.',
      creds: [['28', 'yıllık deneyim ve başarı'], ['3', 'dil: İbranice, Rusça, Kafkas dilleri'], ['∞', 'güçlendiren ve destekleyen yaklaşım']],
      caption: '— Tarot ve Ruhsal Rehberlik —'
    },
    services: {
      title: 'Hizmetlerim',
      sub: 'Ezoterik danışmanlık, tarot ve ruhsal arınma — size özel, İbranice, Rusça ve Kafkas dillerinde.',
      subExtra: 'Kişiye özel yaklaşım · 28 yıllık deneyim',
      note: '* Fiyatlar özel olarak paylaşılır · yüz yüze görüşme veya telefonla danışmanlık · İbranice, Rusça ve Kafkas dillerinde',
      items: [{
        tag: 'İçgörü ve bakış',
        title: 'Tarot Kartları',
        duration: 'Kişisel okuma',
        subtitle: 'Kartlar · fotoğraf · el ve kahve',
        price: 'Fiyat özel',
        desc: 'Tarot okuması, fotoğraftan açılım, el falı ve kahve falı. Berraklık için derin bir bağ, kalbin sorularına cevaplar ve isabetli yönlendirme.',
        features: ['Tarot kartı okuması', 'Fotoğraftan kart açılımı', 'El falı ve kahve falı', 'Sezgisel bakış ve derin cevaplar'],
        cta: 'Randevu al →',
        topic: 'Tarot — kişisel kart okuması'
      }, {
        tag: 'Arınma ve koruma',
        title: 'Ruhsal Arınma ve Koruma',
        duration: 'Arınma ve bereket',
        subtitle: 'Kutsal su · nazar · reiki',
        price: 'Fiyat özel',
        desc: 'Kutsal suyla ruhsal arınma, nazar ve büyünün kaldırılması, bereket ve doğurganlık için dua ve destek, blokajları çözmek ve derin enerji dengesi için reiki seansları.',
        features: ['Kutsal suyla arınma ve açılış', 'Koruma, nazar ve büyünün kaldırılması', 'Bereket ve doğurganlık için dua', 'Reiki ve enerji dengesi'],
        cta: 'Randevu al →',
        topic: 'Ruhsal arınma ve koruma — kutsal su, nazar ve reiki'
      }, {
        tag: '28 yıllık deneyim',
        title: 'Ruhsal ve İş Danışmanlığı',
        duration: 'Sonuç odaklı danışmanlık',
        subtitle: 'İbranice · Rusça · Kafkas dilleri',
        price: 'Fiyat özel',
        desc: 'İş kurmak için profesyonel ve ruhsal danışmanlık, kişisel eşlik ve yolda yönlendirme — 28 yıllık deneyimle. Sonuç getiren, güçlendiren ve yapıcı bir yaklaşım.',
        features: ['28 yıllık eşlik ve başarı', 'Profesyonel ruhsal danışmanlık', 'Sonuç getiren destekleyici yaklaşım', 'İbranice, Rusça ve Kafkas dilleri'],
        cta: 'Randevu al →',
        topic: 'Ruhsal ve iş danışmanlığı (28 yıllık deneyim)'
      }]
    },
    oracle: {
      title: 'Günün Kartı',
      sub: 'Bir an durun. Derin bir nefes alın. Tek bir soru düşünün — ve bir kart seçin.',
      cardNames: ['birinci kart', 'ikinci kart', 'üçüncü kart'],
      drawAria: n => `${n} — günün kartını çek`,
      prompt: 'Kartlar bekliyor. Kalbinize güvenin — o biliyor.',
      eyebrow: '— Bugünkü kartınız —',
      again: 'Başka bir kart çek ↻'
    },
    voices: {
      title: 'Bende kalan sözler',
      prev: 'Önceki yorum',
      next: 'Sonraki yorum',
      dot: n => `Yorum ${n}`,
      items: [{
        text: 'Kalp fırtınasıyla geldim, aylardır aradığım berraklıkla ayrıldım. Okuma isabetli, yumuşak ve tam yerindeydi. Geri dönüyorum.',
        name: 'Dana K.',
        city: 'Tel Aviv'
      }, {
        text: 'Birinin beni gerçekten gördüğünü hissettim — tahmin etmediğini. Kartlar, ihtiyacım olduğunu bilmediğim bir konuşma açtı. Çok teşekkürler.',
        name: 'Michal B.',
        city: 'Hayfa'
      }, {
        text: 'Tam bir şüpheci olarak geldim. Yıllardır hissetmediğim bir güvenle ayrıldım. Kartların ötesinde, burada derinlemesine dinleyen biri var.',
        name: 'Yoav S.',
        city: 'Ra’anana'
      }]
    },
    contact: {
      title: 'Randevu Alın',
      sub: 'Bilgilerinizi bırakın, 24 saat içinde size dönüş yapayım. Acilse telefonla da ulaşabilirsiniz.',
      telephone: '— Telefon —',
      pending: '— yakında —',
      hours: 'Pazar–Perşembe · 10:00–21:00',
      waTitle: 'WhatsApp mesajı gönder',
      waSub: 'Hızlı yanıt · doğrudan sohbete',
      waAria: 'WhatsApp sohbetini aç',
      name: 'Ad soyad',
      namePh: 'Adınız',
      phone: 'Telefon',
      topic: 'Hizmet',
      topicOther: 'Diğer — mesajda açıklarım',
      message: 'Görüşmeden önce paylaşmak istediğiniz bir şey?',
      messagePh: 'İlk sorunuz, tercih ettiğiniz saatler ya da size iyi gelen her şey…',
      submit: 'Doğrudan WhatsApp’a gönder',
      submitting: '✓ Göndermek için WhatsApp açılıyor…',
      fine: 'Gönder’e bastığınızda, doldurduğunuz tüm bilgilerle WhatsApp sohbeti açılır ve doğrudan Miriam’ın telefonuna gider.',
      waIntro: 'Merhaba Miriam, Işık ve Yol sitesinden yeni bir talep:',
      waName: '• Ad soyad: ',
      waPhone: '• Telefon: ',
      waService: '• İstenen hizmet: ',
      waDetails: '• Ayrıntılar / sorular: '
    },
    footer: {
      tag: 'Ezoterik danışmanlık · Tarot · Arınma ve koruma',
      tagExtra: 'İbranice ve Rusça',
      fine: 'Tüm hakları saklıdır · yıldızlı bir gökyüzü altında sevgiyle yapıldı'
    },
    wa: {
      float: 'WhatsApp sohbeti'
    }
  }
};

// Shared React context so every section reads the same language + dictionary.
const LangContext = React.createContext({
  lang: 'he',
  dir: 'rtl',
  t: I18N.he,
  setLang: () => {},
  meta: LANGS.he
});
function useI18n() {
  return React.useContext(LangContext);
}
Object.assign(window, {
  LANG_STORAGE_KEY,
  LANGS,
  LANG_ORDER,
  I18N,
  getInitialLang,
  LangContext,
  useI18n
});
