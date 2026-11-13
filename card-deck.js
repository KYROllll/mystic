/* Generated from card-deck.jsx by `npm run build` — edit the .jsx source, not this file. */
// card-deck.jsx
// Tarot card data + Card component for the "Card of the Day" interactive section.
// 22 Major Arcana cards, each with name / keywords / reading in the four
// site languages. Consumers read the fields with the active language code.

const TAROT_DECK = [{
  num: '0',
  name: {
    he: 'השוטה',
    ru: 'Шут',
    en: 'The Fool',
    tr: 'Soytarı'
  },
  keywords: {
    he: 'התחלות · תמימות · קפיצת אמונה',
    ru: 'Начала · наивность · прыжок веры',
    en: 'Beginnings · innocence · leap of faith',
    tr: 'Başlangıçlar · masumiyet · inanç sıçraması'
  },
  reading: {
    he: 'הדרך פתוחה לפנייך. צעדי בלי לדעת את הסוף — הסוד הוא לבטוח שהיקום אוחז אותך.',
    ru: 'Дорога открыта перед вами. Шагните, не зная финала — секрет в доверии: вселенная держит вас.',
    en: 'The road is open before you. Step forward without knowing the ending — the secret is trusting that the universe holds you.',
    tr: 'Yol önünde açık. Sonunu bilmeden bir adım at — sır, evrenin seni tuttuğuna güvenmekte.'
  }
}, {
  num: 'I',
  name: {
    he: 'הקוסם',
    ru: 'Маг',
    en: 'The Magician',
    tr: 'Büyücü'
  },
  keywords: {
    he: 'מימוש · יצירה · רצון',
    ru: 'Воплощение · творение · воля',
    en: 'Manifestation · creation · will',
    tr: 'Tezahür · yaratım · irade'
  },
  reading: {
    he: 'כל הכלים נמצאים בידייך. זה הרגע לפעול ולתרגם את הרעיון למציאות מוחשית.',
    ru: 'Все инструменты уже в ваших руках. Сейчас время действовать и превратить идею в осязаемую реальность.',
    en: 'Every tool is already in your hands. This is the moment to act and turn the idea into something tangible.',
    tr: 'Tüm araçlar zaten elinde. Fikri somut bir gerçeğe dönüştürmek için tam zamanı.'
  }
}, {
  num: 'II',
  name: {
    he: 'הכוהנת הגדולה',
    ru: 'Верховная Жрица',
    en: 'The High Priestess',
    tr: 'Baş Rahibe'
  },
  keywords: {
    he: 'אינטואיציה · סוד · ירח',
    ru: 'Интуиция · тайна · луна',
    en: 'Intuition · mystery · moon',
    tr: 'Sezgi · gizem · ay'
  },
  reading: {
    he: 'הקולות השקטים מדברים אלייך. הקשיבי לבטן, לא רק לראש — שם נמצאת התשובה.',
    ru: 'Тихие голоса говорят с вами. Слушайте живот, а не только голову — ответ там.',
    en: 'The quiet voices are speaking to you. Listen to your gut, not only your head — the answer lives there.',
    tr: 'Sessiz sesler sana konuşuyor. Sadece aklını değil, içgüdünü dinle — cevap orada.'
  }
}, {
  num: 'III',
  name: {
    he: 'הקיסרית',
    ru: 'Императрица',
    en: 'The Empress',
    tr: 'İmparatoriçe'
  },
  keywords: {
    he: 'שפע · נשיות · יצירתיות',
    ru: 'Изобилие · женственность · творчество',
    en: 'Abundance · femininity · creativity',
    tr: 'Bolluk · dişilik · yaratıcılık'
  },
  reading: {
    he: 'תקופה של פריחה ופוריות, פנימית או חיצונית. טפחי את מה שצומח בתוכך.',
    ru: 'Время расцвета и плодородия — внутреннего или внешнего. Ухаживайте за тем, что растёт внутри вас.',
    en: 'A season of blossoming and fertility, inward or outward. Tend to what is growing inside you.',
    tr: 'İçte ya da dışta bir çiçeklenme ve bereket dönemi. İçinde büyüyen şeye özen göster.'
  }
}, {
  num: 'IV',
  name: {
    he: 'הקיסר',
    ru: 'Император',
    en: 'The Emperor',
    tr: 'İmparator'
  },
  keywords: {
    he: 'יציבות · מבנה · גבולות',
    ru: 'Стабильность · структура · границы',
    en: 'Stability · structure · boundaries',
    tr: 'İstikrar · yapı · sınırlar'
  },
  reading: {
    he: 'הגיע הזמן לבסס. שרטטי את הגבולות, בני את היסודות — מהם תצמח חירות אמיתית.',
    ru: 'Пришло время заложить основу. Очертите границы, постройте фундамент — из него вырастет настоящая свобода.',
    en: 'It is time to build a foundation. Set your boundaries, lay the ground — real freedom grows from there.',
    tr: 'Temel atmanın zamanı. Sınırlarını çiz, zemini hazırla — gerçek özgürlük oradan büyür.'
  }
}, {
  num: 'V',
  name: {
    he: 'הכוהן',
    ru: 'Иерофант',
    en: 'The Hierophant',
    tr: 'Başrahip'
  },
  keywords: {
    he: 'מסורת · מורה · אמונה',
    ru: 'Традиция · учитель · вера',
    en: 'Tradition · teacher · faith',
    tr: 'Gelenek · öğretmen · inanç'
  },
  reading: {
    he: 'מורה או חוכמה עתיקה צפויים לחצות את דרכך. הקשיבי בלב פתוח.',
    ru: 'На вашем пути, возможно, появится учитель или древняя мудрость. Слушайте с открытым сердцем.',
    en: 'A teacher or an old wisdom may cross your path. Listen with an open heart.',
    tr: 'Yoluna bir öğretmen ya da kadim bir bilgelik çıkabilir. Açık bir kalple dinle.'
  }
}, {
  num: 'VI',
  name: {
    he: 'האוהבים',
    ru: 'Влюблённые',
    en: 'The Lovers',
    tr: 'Aşıklar'
  },
  keywords: {
    he: 'בחירה · אהבה · איחוד',
    ru: 'Выбор · любовь · союз',
    en: 'Choice · love · union',
    tr: 'Seçim · aşk · birleşme'
  },
  reading: {
    he: 'עומדת בפנייך בחירה של לב. שתי הדרכים יפות — חשוב לבחור מתוך אמת ולא מתוך פחד.',
    ru: 'Перед вами выбор сердца. Оба пути прекрасны — важно выбрать из правды, а не из страха.',
    en: 'A choice of the heart stands before you. Both roads are beautiful — choose from truth, not from fear.',
    tr: 'Önünde kalbin bir seçimi var. İki yol da güzel — korkudan değil, gerçekten seç.'
  }
}, {
  num: 'VII',
  name: {
    he: 'המרכבה',
    ru: 'Колесница',
    en: 'The Chariot',
    tr: 'Savaş Arabası'
  },
  keywords: {
    he: 'התקדמות · ניצחון · שליטה',
    ru: 'Движение · победа · контроль',
    en: 'Progress · victory · control',
    tr: 'İlerleme · zafer · kontrol'
  },
  reading: {
    he: 'הכוחות הפנימיים שלך מתאחדים. החזיקי במושכות, כווני קדימה — הניצחון קרוב.',
    ru: 'Внутренние силы объединяются. Держите вожжи, двигайтесь вперёд — победа близко.',
    en: 'Your inner forces are coming together. Take the reins and move forward — victory is close.',
    tr: 'İç güçlerin birleşiyor. Dizginleri tut, ileri git — zafer yakın.'
  }
}, {
  num: 'VIII',
  name: {
    he: 'הכוח',
    ru: 'Сила',
    en: 'Strength',
    tr: 'Güç'
  },
  keywords: {
    he: 'אומץ · עדינות · ריסון',
    ru: 'Смелость · нежность · сдержанность',
    en: 'Courage · gentleness · restraint',
    tr: 'Cesaret · nezaket · ölçülülük'
  },
  reading: {
    he: 'הכוח האמיתי הוא רך. כשאת מאלפת את הלביאה הפנימית באהבה — הכול נפתח.',
    ru: 'Настоящая сила мягка. Когда вы приручаете внутреннюю львицу с любовью, всё открывается.',
    en: 'True strength is gentle. When you tame the inner lioness with love, everything opens.',
    tr: 'Gerçek güç yumuşaktır. İçindeki aslanı sevgiyle evcilleştirdiğinde her şey açılır.'
  }
}, {
  num: 'IX',
  name: {
    he: 'הנזיר',
    ru: 'Отшельник',
    en: 'The Hermit',
    tr: 'Münzevi'
  },
  keywords: {
    he: 'התבוננות · אור פנימי · שתיקה',
    ru: 'Созерцание · внутренний свет · тишина',
    en: 'Reflection · inner light · silence',
    tr: 'Tefekkür · içsel ışık · sessizlik'
  },
  reading: {
    he: 'הגיעה עת ההתבודדות. רק בשקט תמצאי את הנר שיאיר את הדרך הבאה.',
    ru: 'Пришло время уединения. Только в тишине вы найдёте свечу, которая осветит следующий шаг.',
    en: 'The time for solitude has come. Only in silence will you find the candle that lights the next step.',
    tr: 'Yalnızlık vakti geldi. Bir sonraki adımı aydınlatan mumu ancak sessizlikte bulursun.'
  }
}, {
  num: 'X',
  name: {
    he: 'גלגל המזל',
    ru: 'Колесо Фортуны',
    en: 'Wheel of Fortune',
    tr: 'Kader Çarkı'
  },
  keywords: {
    he: 'גורל · מחזורים · שינוי',
    ru: 'Судьба · циклы · перемены',
    en: 'Fate · cycles · change',
    tr: 'Kader · döngüler · değişim'
  },
  reading: {
    he: 'הגלגל מסתובב לטובתך. שחררי שליטה — היקום עובד עבורך, גם אם לא תמיד גלוי לעין.',
    ru: 'Колесо вращается в вашу пользу. Отпустите контроль — вселенная работает на вас, даже если это не всегда видно.',
    en: 'The wheel is turning in your favour. Release control — the universe is working for you, even when it is not visible.',
    tr: 'Çark senin lehine dönüyor. Kontrolü bırak — evren senin için çalışıyor, görünmese bile.'
  }
}, {
  num: 'XI',
  name: {
    he: 'הצדק',
    ru: 'Справедливость',
    en: 'Justice',
    tr: 'Adalet'
  },
  keywords: {
    he: 'איזון · אמת · בהירות',
    ru: 'Равновесие · истина · ясность',
    en: 'Balance · truth · clarity',
    tr: 'Denge · gerçek · berraklık'
  },
  reading: {
    he: 'האמת תצא לאור. פעלי מתוך יושרה, והשפה תמיד תיטה לכיוונך.',
    ru: 'Правда выйдет наружу. Действуйте честно — и чаша всегда склонится в вашу сторону.',
    en: 'The truth will come to light. Act with integrity, and the scales will always tip your way.',
    tr: 'Gerçek gün yüzüne çıkacak. Dürüst davran, terazi her zaman senin tarafına döner.'
  }
}, {
  num: 'XII',
  name: {
    he: 'התלוי',
    ru: 'Повешенный',
    en: 'The Hanged Man',
    tr: 'Asılmış Adam'
  },
  keywords: {
    he: 'נקודת מבט · ויתור · המתנה',
    ru: 'Точка зрения · отпускание · ожидание',
    en: 'Perspective · surrender · waiting',
    tr: 'Bakış açısı · teslimiyet · bekleme'
  },
  reading: {
    he: 'הפכי את התמונה. מה שנראה תקוע יפתח כשתסכימי להסתכל מזווית שונה לגמרי.',
    ru: 'Переверните картинку. То, что кажется застрявшим, откроется, если согласитесь взглянуть совсем под другим углом.',
    en: 'Turn the picture upside down. What looks stuck will open the moment you agree to see it from a completely different angle.',
    tr: 'Resmi ters çevir. Tıkanmış görünen şey, tamamen farklı bir açıdan bakmayı kabul ettiğinde açılır.'
  }
}, {
  num: 'XIII',
  name: {
    he: 'המוות',
    ru: 'Смерть',
    en: 'Death',
    tr: 'Ölüm'
  },
  keywords: {
    he: 'סיום · התחדשות · שינוי',
    ru: 'Завершение · обновление · перемена',
    en: 'Ending · renewal · transformation',
    tr: 'Son · yenilenme · dönüşüm'
  },
  reading: {
    he: 'משהו חייב להסתיים כדי שמשהו חדש ייוולד. אל תפחדי — זו לידה, לא קץ.',
    ru: 'Что-то должно закончиться, чтобы родилось новое. Не бойтесь — это рождение, а не конец.',
    en: 'Something must end so that something new can be born. Do not be afraid — this is a birth, not an end.',
    tr: 'Yeni bir şey doğsun diye bir şeyin bitmesi gerek. Korkma — bu bir son değil, doğum.'
  }
}, {
  num: 'XIV',
  name: {
    he: 'המתינות',
    ru: 'Умеренность',
    en: 'Temperance',
    tr: 'Denge'
  },
  keywords: {
    he: 'מיזוג · אלכימיה · סבלנות',
    ru: 'Слияние · алхимия · терпение',
    en: 'Blending · alchemy · patience',
    tr: 'Karışım · simya · sabır'
  },
  reading: {
    he: 'התקופה דורשת מזיגה עדינה. אל תמהרי — הניסים מתבשלים בקצב שלהם.',
    ru: 'Период требует бережного смешения. Не спешите — чудеса зреют в своём ритме.',
    en: 'This season asks for a gentle blending. Do not rush — miracles ripen at their own pace.',
    tr: 'Bu dönem özenli bir karışım istiyor. Acele etme — mucizeler kendi ritminde olgunlaşır.'
  }
}, {
  num: 'XV',
  name: {
    he: 'השטן',
    ru: 'Дьявол',
    en: 'The Devil',
    tr: 'Şeytan'
  },
  keywords: {
    he: 'כבלים · התמכרות · צל',
    ru: 'Цепи · зависимость · тень',
    en: 'Chains · attachment · shadow',
    tr: 'Zincirler · bağımlılık · gölge'
  },
  reading: {
    he: 'הביטי במה שכובל אותך באמת. הכבלים פתוחים — נשאר רק להחליט לקום וללכת.',
    ru: 'Посмотрите, что на самом деле вас держит. Цепи открыты — осталось решить встать и уйти.',
    en: 'Look at what truly holds you. The chains are loose — all that remains is deciding to stand up and walk.',
    tr: 'Seni gerçekten neyin tuttuğuna bak. Zincirler gevşek — geriye sadece kalkıp gitmeye karar vermek kalıyor.'
  }
}, {
  num: 'XVI',
  name: {
    he: 'המגדל',
    ru: 'Башня',
    en: 'The Tower',
    tr: 'Kule'
  },
  keywords: {
    he: 'התפרצות · אמת · שחרור',
    ru: 'Взрыв · истина · освобождение',
    en: 'Upheaval · truth · release',
    tr: 'Yıkım · gerçek · özgürleşme'
  },
  reading: {
    he: 'ההריסה היא טהרה. מה שייפול היה ממילא רעוע — מקומך עכשיו על אדמה אמיתית.',
    ru: 'Разрушение — это очищение. То, что упадёт, и так было непрочным — теперь вы на настоящей земле.',
    en: 'Collapse is a cleansing. What falls was already unsteady — your ground is real now.',
    tr: 'Yıkım bir arınmadır. Düşen zaten çürüktü — artık gerçek zemindesin.'
  }
}, {
  num: 'XVII',
  name: {
    he: 'הכוכב',
    ru: 'Звезда',
    en: 'The Star',
    tr: 'Yıldız'
  },
  keywords: {
    he: 'תקווה · השראה · שמיים פתוחים',
    ru: 'Надежда · вдохновение · открытое небо',
    en: 'Hope · inspiration · open sky',
    tr: 'Umut · ilham · açık gökyüzü'
  },
  reading: {
    he: 'אור עדין חוזר. הקלף הזה מבטיח: התפילות שלך נשמעו, התשובה כבר בדרך.',
    ru: 'Мягкий свет возвращается. Эта карта обещает: ваши молитвы услышаны, ответ уже в пути.',
    en: 'A gentle light returns. This card promises: your prayers were heard, the answer is already on its way.',
    tr: 'Yumuşak bir ışık geri dönüyor. Bu kart söz veriyor: duaların duyuldu, cevap yolda.'
  }
}, {
  num: 'XVIII',
  name: {
    he: 'הירח',
    ru: 'Луна',
    en: 'The Moon',
    tr: 'Ay'
  },
  keywords: {
    he: 'חלום · אינטואיציה · מסתורין',
    ru: 'Сон · интуиция · тайна',
    en: 'Dream · intuition · mystery',
    tr: 'Rüya · sezgi · gizem'
  },
  reading: {
    he: 'לא הכול ברור — וזה בסדר. סמכי על האינטואיציה, גם כשהשכל מתעקש לדעת.',
    ru: 'Не всё ясно — и это нормально. Доверьтесь интуиции, даже когда ум настаивает знать.',
    en: 'Not everything is clear — and that is fine. Trust your intuition, even when your mind insists on knowing.',
    tr: 'Her şey net değil — ve bu sorun değil. Aklın bilmekte ısrar etse de sezgine güven.'
  }
}, {
  num: 'XIX',
  name: {
    he: 'השמש',
    ru: 'Солнце',
    en: 'The Sun',
    tr: 'Güneş'
  },
  keywords: {
    he: 'שמחה · בהירות · חיוּת',
    ru: 'Радость · ясность · жизненность',
    en: 'Joy · clarity · vitality',
    tr: 'Sevinç · berraklık · canlılık'
  },
  reading: {
    he: 'הקלף הזוהר ביותר. תקופה של חיוך, אהבה והצלחה — הרשי לעצמך להיות מאושרת.',
    ru: 'Самая сияющая карта. Период улыбок, любви и успеха — разрешите себе быть счастливой.',
    en: 'The brightest card of the deck. A season of smiles, love and success — allow yourself to be happy.',
    tr: 'Destenin en parlak kartı. Gülümseme, aşk ve başarı dönemi — mutlu olmaya izin ver.'
  }
}, {
  num: 'XX',
  name: {
    he: 'המשפט',
    ru: 'Суд',
    en: 'Judgement',
    tr: 'Yargı'
  },
  keywords: {
    he: 'התעוררות · קריאה · חידוש',
    ru: 'Пробуждение · зов · обновление',
    en: 'Awakening · calling · renewal',
    tr: 'Uyanış · çağrı · yenilenme'
  },
  reading: {
    he: 'קריאה גדולה מהדהדת בלבך. הקשיבי — הנשמה שלך זוכרת למה היא כאן.',
    ru: 'Великий зов звучит в вашем сердце. Слушайте — ваша душа помнит, зачем она здесь.',
    en: 'A great calling echoes in your heart. Listen — your soul remembers why it is here.',
    tr: 'Kalpinde büyük bir çağrı yankılanıyor. Dinle — ruhun burada neden olduğunu hatırlıyor.'
  }
}, {
  num: 'XXI',
  name: {
    he: 'העולם',
    ru: 'Мир',
    en: 'The World',
    tr: 'Dünya'
  },
  keywords: {
    he: 'סיום · שלמות · גמר',
    ru: 'Завершение · целостность · финал',
    en: 'Completion · wholeness · finale',
    tr: 'Tamamlanma · bütünlük · final'
  },
  reading: {
    he: 'מעגל נסגר בשלום. גאה במסע — ומיד בעקבותיו מעגל חדש ורחב יותר ייפתח.',
    ru: 'Круг завершается в мире. Гордитесь путём — и сразу за ним откроется новый, более широкий круг.',
    en: 'A circle closes in peace. Be proud of the journey — and right behind it, a new and wider circle opens.',
    tr: 'Bir çember huzurla kapanıyor. Yolculuğunla gurur duy — hemen ardından yeni ve daha geniş bir çember açılacak.'
  }
}];

// SVG glyph drawn on each card back — concentric mystical sigil
function CardBackArt() {
  // Three backs are on screen at once — the gradient needs a unique id per
  // instance or the last card's <defs> wins for all of them.
  const gradId = `cb-grad-${React.useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 160",
    className: "card-back-art",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gradId,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--gold)",
    stopOpacity: "0.55"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--gold)",
    stopOpacity: "0.18"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "5",
    width: "90",
    height: "150",
    rx: "3",
    fill: "none",
    stroke: `url(#${gradId})`,
    strokeWidth: "0.6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "8",
    width: "84",
    height: "144",
    rx: "2",
    fill: "none",
    stroke: "var(--gold)",
    strokeOpacity: "0.25",
    strokeWidth: "0.3"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(50 28)",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: "0.5",
    strokeOpacity: "0.7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -7 L 5 0 L 0 7 L -5 0 Z"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "1.5",
    fill: "var(--gold)",
    fillOpacity: "0.6"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(50 80)",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: "0.5"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "22",
    strokeOpacity: "0.5"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "16",
    strokeOpacity: "0.7"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "10",
    strokeOpacity: "0.5"
  }), /*#__PURE__*/React.createElement("g", {
    strokeOpacity: "0.85"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 -22 L0 22"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-22 0 L22 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-15.5 -15.5 L15.5 15.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-15.5 15.5 L15.5 -15.5"
  })), /*#__PURE__*/React.createElement("circle", {
    r: "3.5",
    fill: "var(--gold)",
    fillOpacity: "0.65",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "6",
    strokeOpacity: "0.4"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(50 132)",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: "0.5",
    strokeOpacity: "0.7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -7 L 5 0 L 0 7 L -5 0 Z"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "1.5",
    fill: "var(--gold)",
    fillOpacity: "0.6"
  })), [[14, 14], [86, 14], [14, 146], [86, 146]].map(([cx, cy], i) => /*#__PURE__*/React.createElement("g", {
    key: i,
    transform: `translate(${cx} ${cy})`,
    stroke: "var(--gold)",
    strokeWidth: "0.3",
    strokeOpacity: "0.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M-1.5 0 L1.5 0 M0 -1.5 L0 1.5"
  }))));
}

// Card face — illustrated SVG glyph specific to each card, plus number & name
function CardFaceArt({
  num,
  name
}) {
  const glowId = `face-glow-${React.useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 160",
    className: "card-face-art",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: glowId,
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--gold)",
    stopOpacity: "0.25"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--gold)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "5",
    width: "90",
    height: "150",
    rx: "3",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: "0.6",
    strokeOpacity: "0.8"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "8",
    width: "84",
    height: "144",
    rx: "2",
    fill: "none",
    stroke: "var(--gold)",
    strokeOpacity: "0.3",
    strokeWidth: "0.3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "80",
    r: "36",
    fill: `url(#${glowId})`
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(50 70)",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: "0.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -15 0 A 12 12 0 1 0 -15 -0.1 A 9 9 0 1 1 -15 0 Z",
    fill: "var(--gold)",
    fillOpacity: "0.5",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(15 0)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "5",
    fill: "var(--gold)",
    fillOpacity: "0.55",
    stroke: "none"
  }), [0, 45, 90, 135, 180, 225, 270, 315].map(a => /*#__PURE__*/React.createElement("line", {
    key: a,
    x1: Math.cos(a * Math.PI / 180) * 7,
    y1: Math.sin(a * Math.PI / 180) * 7,
    x2: Math.cos(a * Math.PI / 180) * 10,
    y2: Math.sin(a * Math.PI / 180) * 10,
    strokeOpacity: "0.7"
  }))), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 -16)",
    strokeOpacity: "0.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 -4 L1 -1 L4 -1 L1.5 1 L2.5 4 L0 2 L-2.5 4 L-1.5 1 L-4 -1 L-1 -1 Z",
    fill: "var(--gold)",
    fillOpacity: "0.4"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M 15 110 Q 30 105, 50 110 T 85 110",
    fill: "none",
    stroke: "var(--gold)",
    strokeOpacity: "0.55",
    strokeWidth: "0.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15 116 Q 30 112, 50 116 T 85 116",
    fill: "none",
    stroke: "var(--gold)",
    strokeOpacity: "0.3",
    strokeWidth: "0.4"
  }), /*#__PURE__*/React.createElement("text", {
    x: "50",
    y: "22",
    textAnchor: "middle",
    fontSize: "6.5",
    letterSpacing: "2",
    fill: "var(--gold)",
    fillOpacity: "0.85",
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: 'italic'
    }
  }, num), /*#__PURE__*/React.createElement("text", {
    x: "50",
    y: "138",
    textAnchor: "middle",
    fontSize: "7",
    letterSpacing: "1.5",
    fill: "var(--gold)",
    fillOpacity: "0.95",
    style: {
      fontFamily: "'Frank Ruhl Libre', serif",
      fontWeight: 500
    }
  }, name), /*#__PURE__*/React.createElement("line", {
    x1: "30",
    y1: "143",
    x2: "70",
    y2: "143",
    stroke: "var(--gold)",
    strokeOpacity: "0.5",
    strokeWidth: "0.3"
  }));
}
Object.assign(window, {
  TAROT_DECK,
  CardBackArt,
  CardFaceArt
});
