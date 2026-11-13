// card-deck.jsx
// Tarot card data + Card component for the "Card of the Day" interactive section.
// 22 Major Arcana cards, each with name / keywords / reading in the four
// site languages. Consumers read the fields with the active language code.

const TAROT_DECK = [
  { num: '0',
    name: { he: 'השוטה', ru: 'Шут', az: 'Axmaq', tr: 'Soytarı' },
    keywords: { he: 'התחלות · תמימות · קפיצת אמונה', ru: 'Начала · наивность · прыжок веры', az: 'Başlanğıclar · sadəlik · inam sıçrayışı', tr: 'Başlangıçlar · masumiyet · inanç sıçraması' },
    reading: {
      he: 'הדרך פתוחה לפנייך. צעדי בלי לדעת את הסוף — הסוד הוא לבטוח שהיקום אוחז אותך.',
      ru: 'Дорога открыта перед вами. Шагните, не зная финала — секрет в доверии: вселенная держит вас.',
      az: 'Yol qarşında açıqdır. Sonunu bilmədən addım at — sirr, kainatın səni tutduğuna inanmaqdır.',
      tr: 'Yol önünde açık. Sonunu bilmeden bir adım at — sır, evrenin seni tuttuğuna güvenmekte.' } },
  { num: 'I',
    name: { he: 'הקוסם', ru: 'Маг', az: 'Sehrbaz', tr: 'Büyücü' },
    keywords: { he: 'מימוש · יצירה · רצון', ru: 'Воплощение · творение · воля', az: 'Təzahür · yaradıcılıq · iradə', tr: 'Tezahür · yaratım · irade' },
    reading: {
      he: 'כל הכלים נמצאים בידייך. זה הרגע לפעול ולתרגם את הרעיון למציאות מוחשית.',
      ru: 'Все инструменты уже в ваших руках. Сейчас время действовать и превратить идею в осязаемую реальность.',
      az: 'Bütün alətlər artıq sənin əlindədir. İdeyanı maddi reallığa çevirmək üçün hərəkətə keçmək vaxtıdır.',
      tr: 'Tüm araçlar zaten elinde. Fikri somut bir gerçeğe dönüştürmek için tam zamanı.' } },
  { num: 'II',
    name: { he: 'הכוהנת הגדולה', ru: 'Верховная Жрица', az: 'Baş kahinə', tr: 'Baş Rahibe' },
    keywords: { he: 'אינטואיציה · סוד · ירח', ru: 'Интуиция · тайна · луна', az: 'İntuisiya · sirr · ay', tr: 'Sezgi · gizem · ay' },
    reading: {
      he: 'הקולות השקטים מדברים אלייך. הקשיבי לבטן, לא רק לראש — שם נמצאת התשובה.',
      ru: 'Тихие голоса говорят с вами. Слушайте живот, а не только голову — ответ там.',
      az: 'Səssiz səslər sənə danışır. Yalnız başına deyil, batinə də qulaq as — cavab oradadır.',
      tr: 'Sessiz sesler sana konuşuyor. Sadece aklını değil, içgüdünü dinle — cevap orada.' } },
  { num: 'III',
    name: { he: 'הקיסרית', ru: 'Императрица', az: 'İmperatriça', tr: 'İmparatoriçe' },
    keywords: { he: 'שפע · נשיות · יצירתיות', ru: 'Изобилие · женственность · творчество', az: 'Bolluq · qadınlıq · yaradıcılıq', tr: 'Bolluk · dişilik · yaratıcılık' },
    reading: {
      he: 'תקופה של פריחה ופוריות, פנימית או חיצונית. טפחי את מה שצומח בתוכך.',
      ru: 'Время расцвета и плодородия — внутреннего или внешнего. Ухаживайте за тем, что растёт внутри вас.',
      az: 'İçdə və ya zahirdə çiçəklənmə və bərəkət dövrü. İçində böyüyən şeyə qayğı göstər.',
      tr: 'İçte ya da dışta bir çiçeklenme ve bereket dönemi. İçinde büyüyen şeye özen göster.' } },
  { num: 'IV',
    name: { he: 'הקיסר', ru: 'Император', az: 'İmperator', tr: 'İmparator' },
    keywords: { he: 'יציבות · מבנה · גבולות', ru: 'Стабильность · структура · границы', az: 'Sabitlik · struktur · sərhədlər', tr: 'İstikrar · yapı · sınırlar' },
    reading: {
      he: 'הגיע הזמן לבסס. שרטטי את הגבולות, בני את היסודות — מהם תצמח חירות אמיתית.',
      ru: 'Пришло время заложить основу. Очертите границы, постройте фундамент — из него вырастет настоящая свобода.',
      az: 'Təməl qurmaq vaxtıdır. Sərhədlərini müəyyən et, zəmini hazırla — əsl azadlıq oradan böyüyür.',
      tr: 'Temel atmanın zamanı. Sınırlarını çiz, zemini hazırla — gerçek özgürlük oradan büyür.' } },
  { num: 'V',
    name: { he: 'הכוהן', ru: 'Иерофант', az: 'Baş kahin', tr: 'Başrahip' },
    keywords: { he: 'מסורת · מורה · אמונה', ru: 'Традиция · учитель · вера', az: 'Ənənə · müəllim · iman', tr: 'Gelenek · öğretmen · inanç' },
    reading: {
      he: 'מורה או חוכמה עתיקה צפויים לחצות את דרכך. הקשיבי בלב פתוח.',
      ru: 'На вашем пути, возможно, появится учитель или древняя мудрость. Слушайте с открытым сердцем.',
      az: 'Yolunda bir müəllim və ya qədim hikmət çıxa bilər. Açıq qəlblə dinlə.',
      tr: 'Yoluna bir öğretmen ya da kadim bir bilgelik çıkabilir. Açık bir kalple dinle.' } },
  { num: 'VI',
    name: { he: 'האוהבים', ru: 'Влюблённые', az: 'Aşiqlər', tr: 'Aşıklar' },
    keywords: { he: 'בחירה · אהבה · איחוד', ru: 'Выбор · любовь · союз', az: 'Seçim · sevgi · birləşmə', tr: 'Seçim · aşk · birleşme' },
    reading: {
      he: 'עומדת בפנייך בחירה של לב. שתי הדרכים יפות — חשוב לבחור מתוך אמת ולא מתוך פחד.',
      ru: 'Перед вами выбор сердца. Оба пути прекрасны — важно выбрать из правды, а не из страха.',
      az: 'Qarşında qəlbin seçimi durur. Hər iki yol gözəldir — qorxudan deyil, həqiqətdən seç.',
      tr: 'Önünde kalbin bir seçimi var. İki yol da güzel — korkudan değil, gerçekten seç.' } },
  { num: 'VII',
    name: { he: 'המרכבה', ru: 'Колесница', az: 'Araba', tr: 'Savaş Arabası' },
    keywords: { he: 'התקדמות · ניצחון · שליטה', ru: 'Движение · победа · контроль', az: 'İrəliləyiş · qələbə · nəzarət', tr: 'İlerleme · zafer · kontrol' },
    reading: {
      he: 'הכוחות הפנימיים שלך מתאחדים. החזיקי במושכות, כווני קדימה — הניצחון קרוב.',
      ru: 'Внутренние силы объединяются. Держите вожжи, двигайтесь вперёд — победа близко.',
      az: 'Daxili güclərin birləşir. Cılovu tut, irəli get — qələbə yaxındır.',
      tr: 'İç güçlerin birleşiyor. Dizginleri tut, ileri git — zafer yakın.' } },
  { num: 'VIII',
    name: { he: 'הכוח', ru: 'Сила', az: 'Güc', tr: 'Güç' },
    keywords: { he: 'אומץ · עדינות · ריסון', ru: 'Смелость · нежность · сдержанность', az: 'Cəsarət · nəzakət · təmkin', tr: 'Cesaret · nezaket · ölçülülük' },
    reading: {
      he: 'הכוח האמיתי הוא רך. כשאת מאלפת את הלביאה הפנימית באהבה — הכול נפתח.',
      ru: 'Настоящая сила мягка. Когда вы приручаете внутреннюю львицу с любовью, всё открывается.',
      az: 'Əsl güc yumşaqdır. İçindəki aslanı sevgi ilə ram etdikdə hər şey açılır.',
      tr: 'Gerçek güç yumuşaktır. İçindeki aslanı sevgiyle evcilleştirdiğinde her şey açılır.' } },
  { num: 'IX',
    name: { he: 'הנזיר', ru: 'Отшельник', az: 'Zahid', tr: 'Münzevi' },
    keywords: { he: 'התבוננות · אור פנימי · שתיקה', ru: 'Созерцание · внутренний свет · тишина', az: 'Təfəkkür · daxili işıq · sükut', tr: 'Tefekkür · içsel ışık · sessizlik' },
    reading: {
      he: 'הגיעה עת ההתבודדות. רק בשקט תמצאי את הנר שיאיר את הדרך הבאה.',
      ru: 'Пришло время уединения. Только в тишине вы найдёте свечу, которая осветит следующий шаг.',
      az: 'Təklik vaxtı gəldi. Növbəti addımı işıqlandıran şamı yalnız sükutda taparsan.',
      tr: 'Yalnızlık vakti geldi. Bir sonraki adımı aydınlatan mumu ancak sessizlikte bulursun.' } },
  { num: 'X',
    name: { he: 'גלגל המזל', ru: 'Колесо Фортуны', az: 'Tale çarxı', tr: 'Kader Çarkı' },
    keywords: { he: 'גורל · מחזורים · שינוי', ru: 'Судьба · циклы · перемены', az: 'Qədər · dövrlər · dəyişim', tr: 'Kader · döngüler · değişim' },
    reading: {
      he: 'הגלגל מסתובב לטובתך. שחררי שליטה — היקום עובד עבורך, גם אם לא תמיד גלוי לעין.',
      ru: 'Колесо вращается в вашу пользу. Отпустите контроль — вселенная работает на вас, даже если это не всегда видно.',
      az: 'Çarx sənin xeyrinə fırlanır. Nəzarəti burax — kainat sənin üçün çalışır, hətta görünməsə də.',
      tr: 'Çark senin lehine dönüyor. Kontrolü bırak — evren senin için çalışıyor, görünmese bile.' } },
  { num: 'XI',
    name: { he: 'הצדק', ru: 'Справедливость', az: 'Ədalət', tr: 'Adalet' },
    keywords: { he: 'איזון · אמת · בהירות', ru: 'Равновесие · истина · ясность', az: 'Tarazlıq · həqiqət · aydınlıq', tr: 'Denge · gerçek · berraklık' },
    reading: {
      he: 'האמת תצא לאור. פעלי מתוך יושרה, והשפה תמיד תיטה לכיוונך.',
      ru: 'Правда выйдет наружу. Действуйте честно — и чаша всегда склонится в вашу сторону.',
      az: 'Həqiqət üzə çıxacaq. Vicdanla hərəkət et, tərəzi həmişə sənin tərəfinə dönəcək.',
      tr: 'Gerçek gün yüzüne çıkacak. Dürüst davran, terazi her zaman senin tarafına döner.' } },
  { num: 'XII',
    name: { he: 'התלוי', ru: 'Повешенный', az: 'Asılmış adam', tr: 'Asılmış Adam' },
    keywords: { he: 'נקודת מבט · ויתור · המתנה', ru: 'Точка зрения · отпускание · ожидание', az: 'Baxış bucağı · təslimiyyət · gözləmə', tr: 'Bakış açısı · teslimiyet · bekleme' },
    reading: {
      he: 'הפכי את התמונה. מה שנראה תקוע יפתח כשתסכימי להסתכל מזווית שונה לגמרי.',
      ru: 'Переверните картинку. То, что кажется застрявшим, откроется, если согласитесь взглянуть совсем под другим углом.',
      az: 'Şəkli tərs çevir. Tıxanmış görünən şey, tamamilə fərqli bucaqdan baxmağa razı olduğun an açılır.',
      tr: 'Resmi ters çevir. Tıkanmış görünen şey, tamamen farklı bir açıdan bakmayı kabul ettiğinde açılır.' } },
  { num: 'XIII',
    name: { he: 'המוות', ru: 'Смерть', az: 'Ölüm', tr: 'Ölüm' },
    keywords: { he: 'סיום · התחדשות · שינוי', ru: 'Завершение · обновление · перемена', az: 'Son · yenilənmə · dönüşüm', tr: 'Son · yenilenme · dönüşüm' },
    reading: {
      he: 'משהו חייב להסתיים כדי שמשהו חדש ייוולד. אל תפחדי — זו לידה, לא קץ.',
      ru: 'Что-то должно закончиться, чтобы родилось новое. Не бойтесь — это рождение, а не конец.',
      az: 'Yenisinin doğulması üçün nəyinsə bitməsi lazımdır. Qorxma — bu son deyil, doğumdur.',
      tr: 'Yeni bir şey doğsun diye bir şeyin bitmesi gerek. Korkma — bu bir son değil, doğum.' } },
  { num: 'XIV',
    name: { he: 'המתינות', ru: 'Умеренность', az: 'Təmkin', tr: 'Denge' },
    keywords: { he: 'מיזוג · אלכימיה · סבלנות', ru: 'Слияние · алхимия · терпение', az: 'Qarışım · kimya · səbir', tr: 'Karışım · simya · sabır' },
    reading: {
      he: 'התקופה דורשת מזיגה עדינה. אל תמהרי — הניסים מתבשלים בקצב שלהם.',
      ru: 'Период требует бережного смешения. Не спешите — чудеса зреют в своём ритме.',
      az: 'Bu dövr incə bir qarışım tələb edir. Tələsmə — möcüzələr öz ritmində yetişir.',
      tr: 'Bu dönem özenli bir karışım istiyor. Acele etme — mucizeler kendi ritminde olgunlaşır.' } },
  { num: 'XV',
    name: { he: 'השטן', ru: 'Дьявол', az: 'Şeytan', tr: 'Şeytan' },
    keywords: { he: 'כבלים · התמכרות · צל', ru: 'Цепи · зависимость · тень', az: 'Zəncirlər · asılılıq · kölgə', tr: 'Zincirler · bağımlılık · gölge' },
    reading: {
      he: 'הביטי במה שכובל אותך באמת. הכבלים פתוחים — נשאר רק להחליט לקום וללכת.',
      ru: 'Посмотрите, что на самом деле вас держит. Цепи открыты — осталось решить встать и уйти.',
      az: 'Səni həqiqətən nəyin saxladığına bax. Zəncirlər boşdur — yalnız qalxıb getməyə qərar vermək qalır.',
      tr: 'Seni gerçekten neyin tuttuğuna bak. Zincirler gevşek — geriye sadece kalkıp gitmeye karar vermek kalıyor.' } },
  { num: 'XVI',
    name: { he: 'המגדל', ru: 'Башня', az: 'Qüllə', tr: 'Kule' },
    keywords: { he: 'התפרצות · אמת · שחרור', ru: 'Взрыв · истина · освобождение', az: 'Dağılma · həqiqət · azadlıq', tr: 'Yıkım · gerçek · özgürleşme' },
    reading: {
      he: 'ההריסה היא טהרה. מה שייפול היה ממילא רעוע — מקומך עכשיו על אדמה אמיתית.',
      ru: 'Разрушение — это очищение. То, что упадёт, и так было непрочным — теперь вы на настоящей земле.',
      az: 'Dağılma bir təmizlənmədir. Düşən artıq kövrək idi — indi əsl zəmindəsən.',
      tr: 'Yıkım bir arınmadır. Düşen zaten çürüktü — artık gerçek zemindesin.' } },
  { num: 'XVII',
    name: { he: 'הכוכב', ru: 'Звезда', az: 'Ulduz', tr: 'Yıldız' },
    keywords: { he: 'תקווה · השראה · שמיים פתוחים', ru: 'Надежда · вдохновение · открытое небо', az: 'Ümid · ilham · açıq səma', tr: 'Umut · ilham · açık gökyüzü' },
    reading: {
      he: 'אור עדין חוזר. הקלף הזה מבטיח: התפילות שלך נשמעו, התשובה כבר בדרך.',
      ru: 'Мягкий свет возвращается. Эта карта обещает: ваши молитвы услышаны, ответ уже в пути.',
      az: 'Yumşaq bir işıq qayıdır. Bu kart söz verir: duaların eşidildi, cavab artıq yoldadır.',
      tr: 'Yumuşak bir ışık geri dönüyor. Bu kart söz veriyor: duaların duyuldu, cevap yolda.' } },
  { num: 'XVIII',
    name: { he: 'הירח', ru: 'Луна', az: 'Ay', tr: 'Ay' },
    keywords: { he: 'חלום · אינטואיציה · מסתורין', ru: 'Сон · интуиция · тайна', az: 'Yuxu · intuisiya · sirr', tr: 'Rüya · sezgi · gizem' },
    reading: {
      he: 'לא הכול ברור — וזה בסדר. סמכי על האינטואיציה, גם כשהשכל מתעקש לדעת.',
      ru: 'Не всё ясно — и это нормально. Доверьтесь интуиции, даже когда ум настаивает знать.',
      az: 'Hər şey aydın deyil — və bu normaldır. Ağıl bilməkdə israr etsə də, intuisiyana güvən.',
      tr: 'Her şey net değil — ve bu sorun değil. Aklın bilmekte ısrar etse de sezgine güven.' } },
  { num: 'XIX',
    name: { he: 'השמש', ru: 'Солнце', az: 'Günəş', tr: 'Güneş' },
    keywords: { he: 'שמחה · בהירות · חיוּת', ru: 'Радость · ясность · жизненность', az: 'Sevinc · aydınlıq · canlılıq', tr: 'Sevinç · berraklık · canlılık' },
    reading: {
      he: 'הקלף הזוהר ביותר. תקופה של חיוך, אהבה והצלחה — הרשי לעצמך להיות מאושרת.',
      ru: 'Самая сияющая карта. Период улыбок, любви и успеха — разрешите себе быть счастливой.',
      az: 'Dəstənin ən parlaq kartı. Gülüş, sevgi və uğur dövrü — özünə xoşbəxt olmağa icazə ver.',
      tr: 'Destenin en parlak kartı. Gülümseme, aşk ve başarı dönemi — mutlu olmaya izin ver.' } },
  { num: 'XX',
    name: { he: 'המשפט', ru: 'Суд', az: 'Mühakimə', tr: 'Yargı' },
    keywords: { he: 'התעוררות · קריאה · חידוש', ru: 'Пробуждение · зов · обновление', az: 'Oyanış · çağırış · yenilənmə', tr: 'Uyanış · çağrı · yenilenme' },
    reading: {
      he: 'קריאה גדולה מהדהדת בלבך. הקשיבי — הנשמה שלך זוכרת למה היא כאן.',
      ru: 'Великий зов звучит в вашем сердце. Слушайте — ваша душа помнит, зачем она здесь.',
      az: 'Qəlbində böyük bir çağırış əks-səda verir. Dinlə — ruhun burada nə üçün olduğunu xatırlayır.',
      tr: 'Kalpinde büyük bir çağrı yankılanıyor. Dinle — ruhun burada neden olduğunu hatırlıyor.' } },
  { num: 'XXI',
    name: { he: 'העולם', ru: 'Мир', az: 'Dünya', tr: 'Dünya' },
    keywords: { he: 'סיום · שלמות · גמר', ru: 'Завершение · целостность · финал', az: 'Tamamlanma · bütövlük · final', tr: 'Tamamlanma · bütünlük · final' },
    reading: {
      he: 'מעגל נסגר בשלום. גאה במסע — ומיד בעקבותיו מעגל חדש ורחב יותר ייפתח.',
      ru: 'Круг завершается в мире. Гордитесь путём — и сразу за ним откроется новый, более широкий круг.',
      az: 'Bir dairə sülhlə bağlanır. Yolçuluğunla qürur duy — və dərhal ardınca yeni, daha geniş bir dairə açılacaq.',
      tr: 'Bir çember huzurla kapanıyor. Yolculuğunla gurur duy — hemen ardından yeni ve daha geniş bir çember açılacak.' } },
];

// SVG glyph drawn on each card back — concentric mystical sigil
function CardBackArt() {
  // Three backs are on screen at once — the gradient needs a unique id per
  // instance or the last card's <defs> wins for all of them.
  const gradId = `cb-grad-${React.useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  return (
    <svg viewBox="0 0 100 160" className="card-back-art" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="var(--gold)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      {/* Outer frame */}
      <rect x="5" y="5" width="90" height="150" rx="3" fill="none"
            stroke={`url(#${gradId})`} strokeWidth="0.6" />
      <rect x="8" y="8" width="84" height="144" rx="2" fill="none"
            stroke="var(--gold)" strokeOpacity="0.25" strokeWidth="0.3" />
      {/* Top decorative diamond */}
      <g transform="translate(50 28)" fill="none" stroke="var(--gold)" strokeWidth="0.5" strokeOpacity="0.7">
        <path d="M 0 -7 L 5 0 L 0 7 L -5 0 Z" />
        <circle r="1.5" fill="var(--gold)" fillOpacity="0.6" />
      </g>
      {/* Center mandala */}
      <g transform="translate(50 80)" fill="none" stroke="var(--gold)" strokeWidth="0.5">
        <circle r="22" strokeOpacity="0.5" />
        <circle r="16" strokeOpacity="0.7" />
        <circle r="10" strokeOpacity="0.5" />
        {/* 8-pointed star */}
        <g strokeOpacity="0.85">
          <path d="M0 -22 L0 22" />
          <path d="M-22 0 L22 0" />
          <path d="M-15.5 -15.5 L15.5 15.5" />
          <path d="M-15.5 15.5 L15.5 -15.5" />
        </g>
        {/* Center sun */}
        <circle r="3.5" fill="var(--gold)" fillOpacity="0.65" stroke="none" />
        <circle r="6" strokeOpacity="0.4" />
      </g>
      {/* Bottom decorative diamond */}
      <g transform="translate(50 132)" fill="none" stroke="var(--gold)" strokeWidth="0.5" strokeOpacity="0.7">
        <path d="M 0 -7 L 5 0 L 0 7 L -5 0 Z" />
        <circle r="1.5" fill="var(--gold)" fillOpacity="0.6" />
      </g>
      {/* Tiny corner stars */}
      {[[14,14],[86,14],[14,146],[86,146]].map(([cx,cy],i)=>(
        <g key={i} transform={`translate(${cx} ${cy})`} stroke="var(--gold)" strokeWidth="0.3" strokeOpacity="0.5">
          <path d="M-1.5 0 L1.5 0 M0 -1.5 L0 1.5" />
        </g>
      ))}
    </svg>
  );
}

// Card face — illustrated SVG glyph specific to each card, plus number & name
function CardFaceArt({ num, name }) {
  const glowId = `face-glow-${React.useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  return (
    <svg viewBox="0 0 100 160" className="card-face-art" aria-hidden="true">
      <defs>
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="var(--gold)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="5" y="5" width="90" height="150" rx="3" fill="none"
            stroke="var(--gold)" strokeWidth="0.6" strokeOpacity="0.8" />
      <rect x="8" y="8" width="84" height="144" rx="2" fill="none"
            stroke="var(--gold)" strokeOpacity="0.3" strokeWidth="0.3" />
      <circle cx="50" cy="80" r="36" fill={`url(#${glowId})`} />
      {/* Generic mystical glyph — sun, moon, star arrangement */}
      <g transform="translate(50 70)" fill="none" stroke="var(--gold)" strokeWidth="0.6">
        {/* Crescent moon */}
        <path d="M -15 0 A 12 12 0 1 0 -15 -0.1 A 9 9 0 1 1 -15 0 Z"
              fill="var(--gold)" fillOpacity="0.5" stroke="none" />
        {/* Sun */}
        <g transform="translate(15 0)">
          <circle r="5" fill="var(--gold)" fillOpacity="0.55" stroke="none" />
          {[0,45,90,135,180,225,270,315].map(a=>(
            <line key={a} x1={Math.cos(a*Math.PI/180)*7} y1={Math.sin(a*Math.PI/180)*7}
                  x2={Math.cos(a*Math.PI/180)*10} y2={Math.sin(a*Math.PI/180)*10}
                  strokeOpacity="0.7" />
          ))}
        </g>
        {/* Top star */}
        <g transform="translate(0 -16)" strokeOpacity="0.8">
          <path d="M0 -4 L1 -1 L4 -1 L1.5 1 L2.5 4 L0 2 L-2.5 4 L-1.5 1 L-4 -1 L-1 -1 Z"
                fill="var(--gold)" fillOpacity="0.4" />
        </g>
      </g>
      {/* Wave / ground line */}
      <path d="M 15 110 Q 30 105, 50 110 T 85 110" fill="none"
            stroke="var(--gold)" strokeOpacity="0.55" strokeWidth="0.6" />
      <path d="M 15 116 Q 30 112, 50 116 T 85 116" fill="none"
            stroke="var(--gold)" strokeOpacity="0.3" strokeWidth="0.4" />
      {/* Number top */}
      <text x="50" y="22" textAnchor="middle" fontSize="6.5" letterSpacing="2"
            fill="var(--gold)" fillOpacity="0.85"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
        {num}
      </text>
      {/* Name bottom */}
      <text x="50" y="138" textAnchor="middle" fontSize="7" letterSpacing="1.5"
            fill="var(--gold)" fillOpacity="0.95"
            style={{ fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 500 }}>
        {name}
      </text>
      <line x1="30" y1="143" x2="70" y2="143" stroke="var(--gold)" strokeOpacity="0.5" strokeWidth="0.3" />
    </svg>
  );
}

Object.assign(window, { TAROT_DECK, CardBackArt, CardFaceArt });
