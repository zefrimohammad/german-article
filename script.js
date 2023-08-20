// coded by Mohammad Zefri
// contact me on mdzefri.code@gmail.com

const parentOfEmpties = document.getElementById("parent-of-empties");

const frontDiv = document.getElementById("front-div");
const backDiv = document.getElementById("back-div");

const nextButton = document.getElementById("n-button");
const previousButton = document.getElementById("p-button");
const flipButton = document.getElementById("f-button");
const resetButton = document.getElementById("r-button");

const practiceButton = document.getElementById("practice-mode");
const resetButtonOnQuery = document.getElementById("reset-on-query");
const articlesContainer = document.getElementById("articles-container");

const derSquare = document.getElementById("der-square");
const dieSquare = document.getElementById("die-square");
const dasSquare = document.getElementById("das-square");

const derBtnTxt = document.getElementById("der-btn-txt");
const dieBtnTxt = document.getElementById("die-btn-txt");
const dasBtnTxt = document.getElementById("das-btn-txt");

const numberOf = document.getElementById("number-of");



console.log(localStorage.getItem("index"));

if (localStorage.getItem("index") === null) {
    localStorage.setItem("index", 0);
    var index = localStorage.getItem("index");
} else {
    var index = localStorage.getItem("index");
};
index = +index;












var myWords = [
    ["die Sekunde", "", "الثانية"],
    ["die Minute", "", "الدقيقة"],
    ["die Stunde", "", "الساعة"],
    ["der Tag", "", "اليوم"],
    ["die Woche", "", "الاسبوع"],
    ["das Jahr", "", "العام"],
    ["der Sonntag", "", "الأحد"],
    ["der Montag", "", "الاثنين"],
    ["der Dienstag", "", "الثلاثاء"],
    ["der Mittwoch", "", "الأربعاء"],
    ["der Donnerstag", "", "الخميس"],
    ["der Freitag", "", "الجمعة"],
    ["der Samstag", "", "السبت"],
    ["der Morgen", "", "الصباح"],
    ["der Vormittag", "", "قبل الظهر"],
    ["der Mittag", "", "الظهر"],
    ["der Nachmittag", "", "بعد الظهر"],
    ["der Abend", "", "المساء"],
    ["die Nacht", "", "الليل"],
    ["das Brot", "", "الخبز"],
    // 2
    ["das Wasser", "", "الماء"],
    ["der Kaffee", "", "القهوة"],
    ["der Tee", "", "الشاي"],
    ["die Familie", "", "العائلة"],
    ["die Frau", "", "المرأة"],
    ["der Mann", "", "الرجل"],
    ["das Kind", "", "الطفل"],
    ["die Straße", "", "الشارع"],
    ["die Schule", "", "المدرسة"],
    ["der Vater", "", "الأب"],
    ["die Mutter", "", "الأم"],
    ["die Sonne", "", "الشمس"],
    ["der Mond", "", "القمر"],
    ["die Stadt", "", "المدينة"],
    ["die Sprache", "", "اللغة"],
    ["die Farbe", "", "اللون"],
    ["das Hotel", "", "الفندق"],
    ["das Buch", "", "الكتاب"],
    ["der Verkäufer", "", "البائع"],
    ["der Käufer", "", "المشتري"],
    // 3
    ["das Abendessen", "", "العشاء"],
    ["die Abfahrt", "", "السفر, المغادرة"],
    ["die Ankunft", "", "الوصول"],
    ["die Adresse", "", "العنوان"],
    ["die Apotheke", "", "الصيدلية"],
    ["die Arbeit", "", "العمل"],
    ["der Arzt", "", "الطبيب"],
    ["das Auto", "", "السيارة"],
    ["die Bank", "", "البنك"],
    ["der Berg", "", "الجبل"],
    ["die Idee", "", "الفكرة"],
    ["der Hunger", "", "الجوع"],
    ["der Durst", "", "العطش"],
    ["der Honig", "", "العسل"],
    ["die Marmelade", "", "المربى"],
    ["der Saft", "", "العصير"],
    ["der Zucker", "", "السكر"],
    ["das Museum", "", "المتحف"],
    ["das Restaurant", "", "المطعم"],
    ["der Eingang", "", "المدخل"],
    // 4
    ["das Fieber", "", "الحمى"],
    ["das Krankenhaus", "", "المستشفى"],
    ["die Wohnung", "", "الشقة, المسكن"],
    ["die Küche", "", "المطبخ"],
    ["die Zeit", "", "الوقت"],
    ["die Musik", "", "الموسيقى"],
    ["das Hobby", "", "الهواية"],
    ["die Freizeit", "", "وقت الفراغ"],
    ["das Geschenk", "", "الهدية"],
    ["die Überraschung", "", "المفاجأة"],
    ["die Tür", "", "الباب"],
    ["das Geschäft", "", "المتجر"],
    ["der Regen", "", "المطر"],
    ["das Schiff", "", "السفينة"],
    ["das Zimmer", "", "الغرفة"],
    ["der Garten", "", "الحديقة"],
    ["die Treppe", "", "السلم"],
    ["die Hauptstadt", "", "العاصمة"],
    ["der Krankenwagen", "", "سيارة الإسعاف"],
    ["der Flughafen", "", "المطار"],
    // 5
    ["das Flugzeug", "", "الطائرة"],
    ["der Student", "", "الطالب"],
    ["die Studentin", "", "الطالبة"],
    ["der Sport", "", "الرياضة"],
    ["der Kindergarten", "", "روضة الأطفال"],
    ["der Sohn", "", "الإبن"],
    ["die Tochter", "", "الإبنة"],
    ["das Lied", "", "الأغنية"],
    ["das Frühstück", "", "الفطور"],
    ["der Koch", "", "الطباخ"],
    ["die Hexe", "", "الساحرة"],
    ["der Kellner", "", "النادل"],
    ["die Kellnerin", "", "النادلة"],
    ["die Hilfe", "", "المساعدة"],
    ["der Großvater", "", "الجد"],
    ["die Großmutter", "", "الجدة"],
    ["die Biene", "", "النحلة"],
    ["die Ameise", "", "النملة"],
    ["der Schmetterling", "", "الفراشة"],
    ["der Stuhl", "", "الكرسي"],
    // 6
    ["der Freund", "", "الصديق"],
    ["das Gespräch", "", "المحادثة"],
    ["das Getränk", "", "المشروب"],
    ["die Hochzeit", "", "الزفاف"],
    ["der Kühlschrank", "", "الثلاجة"],
    ["die Pause", "", "الإستراحة"],
    ["das Salz", "", "الملح"],
    ["der Termin", "", "الموعد"],
    ["das Fenster", "", "النافذة"],
    ["die Wand", "", "الحائط"],
    ["der Strand", "", "الشاطئ"],
    ["der Traum", "", "الحلم"],
    ["die Verspätung", "", "التأخير"],
    ["das Wohnzimmer", "", "غرفة المعيشة"],
    ["die Freiheit", "", "الحرية"],
    ["die Kerze", "", "الشمعة"],
    ["das Herz", "", "القلب"],
    ["die Liebe", "", "الحب"],
    ["das Tier", "", "الحيوان"],
    ["der Zweifel", "", "الشك"],
    // 7
    ["der Anfang", "", "البداية"],
    ["die Antwort", "", "الإجابة"],
    ["der Baum", "", "الشجرة"],
    ["das Beispiel", "", "المثال"],
    ["das Ergebnis", "", "النتيجة"],
    ["der Glückwunsch", "", "التهنئة"],
    ["der Hund", "", "الكلب"],
    ["der Vogel", "", "الطائر"],
    ["die Frage", "", "السؤال"],
    ["der Junge", "", "الولد"],
    ["das Mädchen", "", "الفتاة"],
    ["die Brücke", "", "الجسر"],
    ["das Schlafzimmer", "", "غرفة النوم"],
    ["der Friedhof", "", "المقبرة"],
    ["der Löwe", "", "الأسد"],
    ["der Tiger", "", "النمر"],
    ["der Esel", "", "الحمار"],
    ["der Spiegel", "", "المرآة"],
    ["die Muttersprache", "", "اللغة الأم"],
    ["die Nationalität", "", "الجنسية"],
    // 8
    ["die Krankheit", "", "المرض"],
    ["die Gesundheit", "", "الصحة"],
    ["die Angst", "", "الخوف"],
    ["der Fahrer", "", "السائق"],
    ["das Ende", "", "النهاية"],
    ["die Fremdsprache", "", "اللغة الأجنبية"],
    ["das Schwein", "", "الخنزير"],
    ["die Kuh", "", "البقرة"],
    ["die Katze", "", "القطة"],
    ["das Pferd", "", "الحصان"],
    ["der Winter", "", "الشتاء"],
    ["der Sommer", "", "الصيف"],
    ["der Frühling", "", "الربيع"],
    ["der Herbst", "", "الخريف"],
    ["das Feuer", "", "النار"],
    ["das Alter", "", "العمر"],
    ["der Monat", "", "الشهر"],
    ["der Laptop", "", ""],
    ["der Balkon", "", "الشرفة"],
    ["das Esszimmer", "", "غرفة الطعام"],
    // 9
    ["der Brief", "", "الرسالة"],
    ["der Fehler", "", "الخطأ"],
    ["der Text", "", "النص"],
    ["das Messer", "", "السكين"],
    ["der Preis", "", "الثمن"],
    ["die Milch", "", "الحليب"],
    ["das Abenteuer", "", "المغامرة"],
    ["die Freundschaft", "", "الصداقة"],
    ["das Ei", "", "البيضة"],
    ["der Wettbewerb", "", "المنافسة"],
    ["die Suppe", "", "الحساء"],
    ["die Lampe", "", "المصباح"],
    ["der Bär", "", "الدب"],
    ["der Richter", "", "القاضي"],
    ["das Fahrrad", "", "الدراجة"],
    ["der Ort", "", "المكان"],
    ["das Bett", "", "السرير"],
    ["der Wecker", "", "المنبه"],
    ["der Nagel", "", "المسمار"],
    ["der Hammer", "", "المطرقة"],
    // 10
    ["der Ventilator", "", ""],
    ["die Tafel", "", ""],
    ["das Bücherregal", "", ""],
    ["die Uhr", "", ""],
    ["der Bleistift", "", "قلم الرصاص"],
    ["das Wörterbuch", "", ""],
    ["das Whiteboard", "", ""],
    ["das Notizbuch", "", "الدفتر"],
    ["die Handtasche", "", ""],
    ["der Tisch", "", "المنضدة"],
    ["der Gürtel", "", "الحزام"],
    ["der Anzug", "", ""],
    ["die Halskette", "", ""],
    ["der Januar", "", "يناير"],
    ["der Februar", "", "فبراير"],
    ["der März", "", "مارس"],
    ["der April", "", "أبريل"],
    ["der Mai", "", "مايو"],
    ["der Juni", "", "يونيو"],
    ["der Juli", "", "يوليو"],
    // 11
    ["der Beweis", "", "الدليل"],
    ["der Mörder", "", "القاتل"],
    ["die Mörderin", "", "القاتلة"],
    ["die Kapsel", "", ""],
    ["der Unfall", "", "الحادث"],
    ["die Wahreit", "", "الحقيقة"],
    ["der Stadtplan", "", "خريطة المدينة"],
    ["der Verbrecher", "", "المجرم"],
    ["das Opfer", "", "الضحية"],
    ["der Idiot", "", "الغبي"],
    ["die Schauspielerin", "", "الممثلة"],
    ["der Fußboden", "", "الأرضية"],
    ["das Rätsel", "", "اللغز"],
    ["die Schatzkarte", "", "خريطة الكنز"],
    ["das Gold", "", "الذهب"],
    ["der Zettel", "", "الورقة"],
    ["die Ruhe", "", "الهدوء"],
    ["die Goldmünze", "", ""],
    ["die Bombe", "", "القنبلة"],
    ["die Explosion", "", "الانفجار"],
    // 12
    ["die Absicht", "", "النية"],
    ["die Zahnpasta", "", " معجون أسنان"],
    ["das Labor", "", "المختبر"],
    ["das Missverständnis", "", "سوء الفهم"],
    ["der Pianist", "", "عازف بيانو"],
    ["die Insel", "", "جزيرة"],
    ["der Musiker", "", "الموسيقي"],
    ["der Raum", "", "الغرفة"],
    ["die Halle", "", "القاعة"],
    ["das Blut", "", "الدم"],
    ["der Mord", "", "القتل"],
    ["die Armbanduhr", "", "ساعة يد"],
    ["der Tunnel", "", "النفق"],
    ["der Schauspieler", "", "الممثل"],
    ["die Entscheidung", "", "القرار"],
    ["die Vergangenheit", "", "الماضي"],
    ["der Hubschrauber", "", ""],
    ["der Killer", "", "القاتل"],
    ["das Alibi", "", "اثبات التغيب عن مكان الجريمة"],
    ["der Drache", "", "التنين"],
    // 13
    ["die Schublade", "", "الدرج"],
    ["die Kommode", "", "خزانة صغيرة بأدراج"],
    ["das Kissen", "", "الوسادة"],
    ["der Akku", "", "البطارية"],
    ["das Geheimnis", "", "السر"],
    ["der Zufall", "", "الصدفة"],
    ["die Braut", "", "العروسة"],
    ["der Scherz", "", "المزحة"],
    ["der Fahrstuhl", "", "المصعد"],
    ["die Schulter", "", "الكتف"],
    ["der Kompass", "", "البوصلة"],
    ["das Gewitter", "", "العاصفة"],
    ["das Gespenst", "", "الشبح"],
    ["der Keller", "", "القبو"],
    ["der Käfig", "", "القفص"],
    ["der Dieb", "", "اللص"],
    ["die Aussicht", "", "المنظر"],
    ["die Blume", "", "الزهرة"],
    ["der Schlüssel", "", "المفتاح"],
    ["die Türschwelle", "", "عتبة الباب"],
    // 14
    ["die Erlaubnis", "", "الإذن"],
    ["das Seil", "", "الحبل"],
    ["der Bauch", "", "البطن"],
    ["das Gefühl", "", "الشعور"],
    ["die Vermutung", "", "التخمين"],
    ["der Grund", "", "السبب"],
    ["das Gedächtnis", "", "الذاكرة"],
    ["der Lkw", "", ""],
    ["der Bus", "", "الحافلة"],
    ["die Kneipe", "", "الحانة"],
    ["die Grundschule", "", "المدرسة الابتدائية"],
    ["die Rache", "", "الانتقام"],
    ["der Fall", "", "القضية"],
    ["das Gefängnis", "", "السجن"],
    ["die Badewanne", "", ""],
    ["die Verabredung", "", "الموعد"],
    ["die Axt", "", "الفأس"],
    ["der Wald", "", "الغابة"],
    ["die Bemerkung", "", "الملاحظة"],
    ["das Klo", "", "المرحاض"],
    // 15
    ["die Stimme", "", "الصوت"],
    ["die Ärztin", "", "الطبيبة"],
    ["die Möglichkeit", "", "الامكانية"],
    ["die Leiche", "", "الجثة"],
    ["der Tempel", "", "المعبد"],
    ["das Kloster", "", "الدير"],
    ["die Geduld", "", "الصبر"],
    ["der Monitor", "", "الشاشة"],
    ["das Fernglas", "", "المنظار"],
    ["die Puppe", "", "الدمية"],
    ["das Licht", "", "الضوء"],
    ["die Wirklichkeit", "", "الواقع"],
    ["das Problem", "", "المشكلة"],
    ["der Körper", "", "الجسد"],
    ["das Loch", "", "الحفرة"],
    ["das Feuerzeug", "", ""],
    ["der Mund", "", "الفم"],
    ["das Auge", "", "العين"],
    ["die Hand", "", "اليد"],
    ["die Nase", "", "الانف"],
    // 16
    ["die Zahnbürste", "", "فرشاة الاسنان"],
    ["das Erdbeben", "", "الزلزال"],
    ["der Künstler", "", "الفنان"],
    ["die Beziehung", "", "العلاقة"],
    ["die Brille", "", "النظارة"],
    ["die Angelschnur", "", "خيط السنارة"],
    ["die Signatur", "", "الامضاء"],
    ["der Schatz", "", "الكنز"],
    ["die Welt", "", "العالَم"],
    ["der Geruch", "", "الرائحة"],
    ["die Glocke", "", "الجرس"],
    ["die Höhle", "", "الكهف"],
    ["der Held", "", "البطل"],
    ["der Wasserhahn", "", "صنبور المياه"],
    ["der Affe", "", "القرد"],
    ["die Schere", "", "المقص"],
    ["der Schnee", "", "الثلج"],
    ["die Eule", "", "البومة"],
    ["der Vulkan", "", "البركان"],
    ["die Zunge", "", "اللسان"],
    // 17
    ["der Topf", "", ""],
    ["die Schüssel", "", ""],
    ["der Herd", "", ""],
    ["die Fantasie", "", "الخيال"],
    ["der Zahnarzt", "", "طبيب الاسنان"],
    ["der Verlust", "", "الخسارة"],
    ["der Entführer", "", "المختطف"],
    ["das Vertrauen", "", "الثقة"],
    ["der Planet", "", ""],
    ["der Stern", "", ""],
    ["die Weise", "", "الطريقة"],
    ["der Besen", "", "المكنسة"],
    ["der Eimer", "", "الدلو"],
    ["das Lineal", "", ""],
    ["der Teppich", "", ""],
    ["die Hose", "", "السروال"],
    ["das Geld", "", "المال"],
    ["der Himmel", "", "السماء"],
    ["die Höhe", "", "الارتفاع"],
    ["das Kompliment", "", "المجاملة"],
    // 18
    ["die Flasche", "", ""],
    ["die Herausforderung", "", "التحد"],
    ["der Rest", "", "البقية"],
    ["der Schreibtisch", "", "المكتب"],
    ["das Rauchen", "", "التدخين"],
    ["die Ausstellung", "", "المعرض"],
    ["der Zauberer", "", "الساحر"],
    ["der Gegner", "", "الخصم"],
    ["die Aufmerksamkeit", "", "الاهتمام"],
    ["der Bankräuber", "", "سارق البنك"],
    ["die Entführung", "", "الاختطاف"],
    ["die Gefahr", "", "الخطر"],
    ["der Wahn", "", "الوهم"],
    ["der Lärm", "", "الضوضاء"],
    ["der Wettlauf", "", "السباق"],
    ["das Gebiet", "", "المنطقة"],
    ["der Kamin", "", ""],
    ["der Horror", "", "الرعب"],
    ["die Therapie", "", "العلاج"],
    ["der Flur", "", ""],
    // 19
    ["die Wange", "", "الخد"],
    ["die Suche", "", "البحث"],
    ["die Taube", "", "الحمامة"],
    ["der Brunnen", "", "البئر"],
    ["die Ausnahme", "", "الاستثناء"],
    ["die Katastrophe", "", "الكارثة"],
    ["die Aufgabe", "", "المهمة"],
    ["die Gelegenheit", "", "الفرصة"],
    ["die Mauer", "", "الجدار"],
    ["die Dummheit", "", "الغباء"],
    ["der Ausgang", "", "المخرج"],
    ["der Krieg", "", "الحرب"],
    ["die Zigarette", "", "السيجارة"],
    ["der Aufzug", "", "المصعد"],
    ["der Sonnenaufgang", "", "شروق الشمس"],
    ["der Sonnenuntergang", "", "غروب الشمس"],
    ["das Paradies", "", "الجنة"],
    ["das Metall", "", "المعدن"],
    ["der Mensch", "", "الانسان"],
    ["die Verzweiflung", "", "اليأس, الاحباط"],
    // 20
    ["die Menschheit", "", "البشرية"],
    ["der Geschmack", "", "المذاق"],
    ["der Fisch", "", ""],
    ["der Zug", "", "القطار"],
    ["der Kampf", "", "المعركة"],
    ["die Kultur", "", "الثقافة"],
    ["die Zukunft", "", "المستقبل"],
    ["der Selbstmord", "", "الانتحار"],
    ["der Lippenstift", "", "أحمر الشفاه"],
    ["die Lust", "", "الرغبة"],
    ["der Feuerwehrmann", "", "رجل الاطفاء"],
    ["die Pistole", "", "المسدس"],
    ["der König", "", "الملك"],
    ["die Zeitschrift", "", "المجلة"],
    ["die Zeitung", "", "الصحيفة"],
    ["der Führerschein", "", "رخصة القيادة"],
    ["der Papagei", "", "الببغاء"],
    ["der Besuch", "", "الزيارة"],
    ["die Prinzessin", "", "الاميرة"],
    ["der Unterschied", "", "الفرق"],
    // 21
    ["der Apfel", "", "التفاحة"],
    ["das Mittagessen", "", "الغداء"],
    ["das Fräulein", "", "الآنسة"],
    ["der Applaus", "", "التصفيق"],
    ["die Unterschrift", "", "التوقيع"],
    ["der Soldat", "", "الجندي"],
    ["die Hoffnung", "", "الأمل"],
    ["das Abendbrot", "", "العشاء"],
    ["die Freude", "", "السعادة"],
    ["der Markt", "", "السوق"],
    ["die Lehrerin", "", "المعلمة"],
    ["die Kirche", "", "الكنيسة"],
    ["der Hut", "", ""],
    ["die Vorbereitung", "", "التحضير"],
    ["die Nachbarin", "", "الجارة"],
    ["der Briefträger", "", "ساعي البريد"],
    ["die Mine", "", "المنجم"],
    ["der Nachbar", "", "الجار"],
    ["die Lüge", "", "الكذب"],
    ["die Freundin", "", "الصديقة"],
    // 22
    ["der Blick", "", "النظرة"],
    ["der Stall", "", "الاسطبل, الحظيرة"],
    ["der Teich", "", ""],
    ["der Kürbis", "", ""],
    ["der Prinz", "", "الامير"],
    ["der Absender", "", "المرسل"],
    ["das Gesicht", "", "الوجه"],
    ["der Respekt", "", "الاحترام"],
    ["die Stirn", "", ""],
    ["die Halluzination", "", "الهلوسة"],
    ["der Frieden", "", "السلام"],
    ["die Verkäuferin", "", "البائعة"],
    ["die Karte", "", "الخريطة"],
    ["die Chance", "", "الفرصة"],
    ["die Mannschaft", "", "الفريق"],
    ["der Pirat", "", "القرصان"],
    ["die Bewegung", "", "الحركة"],
    ["der Schritt", "", "الخطوة"],
    ["der Arm", "", "الذراع"],
    ["der Clown", "", "المهرج"],
    // 23
    ["die Kanone", "", "المدفع"],
    ["der Angriff", "", "الهجوم"],
    ["das Baby", "", "الرضيع"],
    ["der Wal", "", "الحوت"],
    ["die Pfanne", "", "المقلاة"],
    ["die Dunkelheit", "", "العتمة"],
    ["das Fahrzeug", "", "المركبة"],
    ["der Lehrer", "", "المدرس"],
    ["die Prüfung", "", "الاختبار"],
    ["der Gast", "", "الضيف - نزيل الفندق"],
    ["das Bein", "", "الساق"],
    ["der Nebel", "", "الضباب"],
    ["die Kutsche", "", ""],
    ["die Kiste", "", ""],
    ["das Signal", "", "الاشارة"],
    ["die Sicherheit", "", "الامن"],
    ["die Schatzinsel", "", "جزيرة الكنز"],
    ["der Abschied", "", "الوداع"],
    ["die Reise", "", "الرحلة"],
    ["der Hafen", "", "الميناء"],
    // 24
    ["der Besitzer", "", "المالك"],
    ["das Wetter", "", "الطقس"],
    ["das Boot", "", "القارب"],
    ["die Waffe", "", "السلاح"],
    ["der Sturm", "", "العاصفة"],
    ["der Stiefvater", "", "زوج الأم"],
    ["die Stiefmutter", "", "زوجة الأب"],
    ["die Schwiegermutter", "", "الحماة - أم الزوج او الزوجة"],
    ["der Schwiegervater", "", "الحمو - والد الزوج او الزوجة"],
    ["die Butter", "", "الزبدة"],
    ["die Meuterei", "", "التمرد"],
    ["die Rose", "", "الوردة"],
    ["das Grab", "", "القبر"],
    ["die Gruppe", "", "المجموعة"],
    ["das Monster", "", "الوحش"],
    ["der Fluss", "", "النهر"],
    ["der Schüler", "", "التلميذ"],
    ["die Schülerin", "", "التلميذة"],
    ["die Physik", "", "الفيزياء"],
    ["die Chemie", "", "الكيمياء"],
    // 25
    ["die Biologie", "", "علم الأحياء"],
    ["die Mathematik", "", "الرياضيات"],
    ["das Englisch", "", "الانجليزيه"],
    ["die Flagge", "", "العلم"],
    ["der Hügel", "", "التل - الهضبة"],
    ["die Hütte", "", "الكوخ"],
    ["das Fort", "", "الحصن"],
    ["die Falle", "", "الفخ"],
    ["das Tor", "", "البوابة"],
    ["der Zentimeter", "", "السنتميتر"],
    ["das Brötchen", "", "الخبز او قطعة منه"],
    ["das Kaninchen", "", "الأرنب"],
    ["die Jacke", "", "السترة"],
    ["die Bluse", "", "البلوزة"],
    ["das Holz", "", "الخشب"],
    ["die Kugel", "", "الرصاصة"],
    ["die Schaufel", "", ""],
    ["der Hai", "", "القرش"],
    ["die Krücke", "", "العكاز"],
    ["die Hölle", "", "الجحيم"],
    // 26
    ["das Gesetz", "", "القانون"],
    ["die Meinung", "", "الرأي"],
    ["das Gewehr", "", "البندقية"],
    ["der Mut", "", "الشجاعة"],
    ["der Ring", "", "الخاتم"],
    ["die Unhöflichkeit", "", "الفظاظة"],
    ["die Kindheit", "", "الطفولة"],
    ["die Neugier", "", "الفضول"],
    ["die Strafe", "", "العقاب"],
    ["der Kopf", "", "الرأس"],
    ["die Schuld", "", "الخطأ"],
    ["der Vorschlag", "", "الاقتراح"],
    ["die Königin", "", "الملكة"],
    ["die Schönheit", "", "الجمال"],
    ["das Kleid", "", "الفستان"],
    ["der Löffel", "", "الملعقة"],
    ["das Fest", "", "الحفلة"],
    ["das Schicksal", "", "المصير"],
    ["das Schloss", "", ""],
    ["die Einladung", "", "الدعوة"],
    // 27
    ["die Wespe", "", "الدبور"],
    ["der Jäger", "", "الصياد"],
    ["der Räuber", "", "السارق"],
    ["das Haus", "", "المنزل"],
    ["das Zeichen", "", "العلامة"],
    ["der Kreis", "", "الدائرة"],
    ["das Wort", "", "الكلمة"],
    ["der Onkel", "", "العم او الخال"],
    ["die Tante", "", "العمة او الخالة"],
    ["das Eichhörnchen", "", "السنجاب"],
    ["die Schlange", "", "الثعبان"],
    ["der Magen", "", "المعدة"],
    ["das Badezimmer", "", "الحمام"],
    ["die Garage", "", ""],
    ["der Palast", "", "القصر"],
    ["die Wolke", "", "السحابة"],
    ["der Regenbogen", "", "قوس المطر"],
    ["das Wochenende", "", "عطلة نهاية الاسبوع"],
    ["die Fledermaus", "", "الخفاش"],
    ["die Lösung", "", "الحل"],
    // 28
    ["die Sorge", "", "القلق"],
    ["das Dorf", "", "القرية"],
    ["das Knie", "", "الركبة"],
    ["der Stiefsohn", "", "ابن الزوج او الزوجة"],
    ["die Stieftochter", "", "بنت الزوج او الزوجة"],
    ["die Nichte", "", "ابنة الأخ - إبنة الأخت"],
    ["der Neffe", "", "إبن الأخ - إبن الأخت"],
    ["der Enkel", "", "الحفيد"],
    ["die Enkelin", "", "الحفيدة"],
    ["der Schwager", "", "اخ الزوج او الزوجة"],
    ["die Schwägerin", "", "اخت الزوج او الزوجة"],
    ["der Stiefbruder", "", "اخ من ناحية واحدة"],
    ["die Stiefschwester", "", "اخت من ناحية واحدة"],
    ["der Kamm", "", "المشط"],
    ["die Feier", "", "الحفلة"],
    ["das Gegenteil", "", "العكس"],
    ["das Schwert", "", "السيف"],
    ["die Traurigkeit", "", "الحزن"],
    ["der Panda", "", ""],
    ["das Wunder", "", "المعجزة"],
    // 29
    ["der August", "", "أغسطس"],
    ["der September", "", "سبتمبر"],
    ["der Oktober", "", "أكتوبر"],
    ["der November", "", "نوفمبر"],
    ["der Dezember", "", "ديسمبر"],
    ["die Jugend", "", "الشباب"],
    ["die Seele", "", "الروح"],
    ["der Sieg", "", "النصر"],
    ["der Beginn", "", "البداية"],
    ["die Nachricht", "", "الخبر"],
    ["der Befehl", "", "الامر"],
    ["der Anruf", "", ""],
    ["die Kamera", "", ""],
    ["die Tasche", "", ""],
    ["die Uniform", "", ""],
    ["der Kunde", "", "الزبون"],
    ["der Schornstein", "", "المدخنة"],
    ["der Rauch", "", "الدخان"],
    ["der Reichtum", "", "الثروة"],
    ["die Leiter", "", "السلم"],
    // 30
    ["der Vorname", "", "الاسم الاول"],
    ["der Familienname", "", "الاسم العائلي"],
    ["der Satz", "", "الجملة"],
    ["das Versteck", "", "المخبأ"],
    ["der Verräter", "", "الخائن"],
    ["der Bruder", "", "الأخ"],
    ["die Schwester", "", "الأخت"],
    ["der Kontinent", "", "القارة"],
    ["die Moschee", "", "المسجد"],
    ["die Erde", "", ""],
    ["die Bande", "", "العصابة"],
    ["der Plan", "", "الخطة"],
    ["die Geschichte", "", "القصة"],
    ["der Norden", "", "الشمال"],
    ["der Süden", "", "الجنوب"],
    ["der Osten", "", "الشرق"],
    ["der Westen", "", "الغرب"],
    ["der Anführer", "", "القائد"],
    ["der Feigling", "", "الجبان"],
    ["die Mütze", "", ""],
    // 31
    ["der Lügner", "", "الكذاب"],
    ["das Nest", "", "العش"],
    ["die Luft", "", "الهواء"],
    ["die Kraft", "", "القوة"],
    ["das Kino", "", "السينما"],
    ["der Geburtstag", "", "عيد ميلاد"],
    ["der Wunsch", "", "الأمنية"],
    ["die Banane", "", "الموزة"],
    ["die Birne", "", ""],
    ["der Pfirsich", "", "الخوخ"],
    ["der Granatapfel", "", ""],
    ["die Mandarine", "", ""],
    ["die Ananas", "", ""],
    ["die Zitrone", "", ""],
    ["die Limette", "", ""],
    ["die Orange", "", "البرتقالة"],
    ["die Erdbeere", "", ""],
    ["die Zwiebel", "", ""],
    ["der Knoblauch", "", "الثوم"],
    ["die Kartoffel", "", ""],
    // 32
    ["die Abreise", "", "الرحيل"],
    ["der Wind", "", "الريح"],
    ["der Bauer", "", "المزارع"],
    ["der Kümmel", "", "الكمون"],
    ["der Käse", "", ""],
    ["das Fleisch", "", "اللحم"],
    ["die Ehre", "", "الشرف"],
    ["die Situation", "", "الموقف"],
    ["die Realität", "", "الحقيقة"],
    ["das Mitglied", "", "العضو"],
    ["die Beerdigung", "", "الجنازة"],
    ["das Zelt", "", "الخيمة"],
    ["die Kette", "", "القلادة"],
    ["der Bahnhof", "", "محطة القطار"],
    ["der Weg", "", "الطريق"],
    ["die Pflanze", "", "النبتة"],
    ["der Sessel", "", ""],
    ["die Hitze", "", "الحرارة"],
    ["das Eis", "", "الجليد"],
    ["die Tastatur", "", ""],
    // 33
    ["die Identität", "", "الهوية"],
    ["das Foto", "", ""],
    ["der Anblick", "", "المنظر"],
    ["das Gebäude", "", "المبنى"],
    ["der Stock", "", ""],
    ["die Warnung", "", "التحذير"],
    ["die Untersuchung", "", "التحقيق"],
    ["die Wahrscheinlichkeit", "", "الاحتمال"],
    ["der Platz", "", "المكان"],
    ["der Gewinner", "", "الفائز"],
    ["das Bild", "", ""],
    ["die Batterie", "", "البطارية"],
    ["der Turm", "", "البرج"],
    ["die Bekanntschaft", "", "المعرفة"],
    ["die Verantwortung", "", "المسؤولية"],
    ["der Diebstahl", "", "السرقة"],
    ["das Ziel", "", "الهدف"],
    ["die Energie", "", "الطاقة"],
    ["die Steckdose", "", ""],
    ["das Essen", "", "الطعام"],
    // 34
    ["das Vergnügen", "", "السرور"],
    ["der Drucker", "", ""],
    ["der Beruf", "", "المهنة"],
    ["der Polizist", "", "الشرطي"],
    ["der Regenschirm", "", "المظلة"],
    ["der Mantel", "", "المعطف"],
    ["der Täter", "", "المجرم"],
    ["die Ampel", "", ""],
    ["der Erfolg", "", "النجاح"],
    ["die Taschenlampe", "", ""],
    ["der Kugelschreiber", "", ""],
    ["die Ahnung", "", "الفكرة"],
    ["die Erinnerung", "", "الذكرى"],
    ["das Büro", "", ""],
    ["das Bier", "", "البيرة"],
    ["die Journalistin", "", "الصحافية"],
    ["die Leistung", "", "الأداء"],
    ["der Job", "", "العمل"],
    ["die Belohnung", "", "المكافأة"],
    ["das Mal", "", "المرة"],
    // 35
    ["der Wasserfall", "", "الشلال"],
    ["die Weile", "", "الفترة"],
    ["die Welle", "", "الموجة"],
    ["der Reis", "", "الأرز"],
    ["die Schlacht", "", "المعركة"],
    ["das Leben", "", "الحياة"],
    ["der Tod", "", "الموت"],
    ["die Gesellschaft", "", "المجتمع"],
    ["der Versager", "", "الفاشل"],
    ["der Anfänger", "", "المبتدئ"],
    ["die Wunde", "", "الجرح"],
    ["der Wille", "", "الارادة"],
    ["der Narr", "", "الاحمق"],
    ["die Hinrichtung", "", "الاعدام"],
    ["der Zustand", "", "الحالة"],
    ["die Pflicht", "", "الواجب"],
    ["der Händler", "", "التاجر"],
    ["der Bäcker", "", "الخباز, عامل مخبز"],
    ["der Feind", "", "العدو"],
    ["der Vorhang", "", "الستار"],
    // 36
    ["der Ausflug", "", "الرحلة"],
    ["der Fernseher", "", ""],
    ["das Sofa", "", "الكنبة"],
    ["die Waschmachine", "", "غسالة الملابس"],
    ["die Seife", "", "الصابون"],
    ["das Handtuch", "", "المنشفة"],
    ["die Schwäche", "", "الضعف"],
    ["die Entschlossenheit", "", "العزيمة"],
    ["das T-Shirt", "", ""],
    ["die Hypothese", "", "الفرضية"],
    ["der Kandidat", "", "المتنافس"],
    ["die Bedingung", "", "الشرط"],
    ["die Schnelligkeit", "", "السرعة"],
    ["die Route", "", "الطريق"],
    ["die Tour", "", "الجولة - الرحلة"],
    ["die Toilette", "", "المرحاض"],
    ["der Optimismus", "", "التفاؤل"],
    ["das Training", "", "التدريب"],
    ["der Kamerad", "", "الرفيق"],
    ["die Linie", "", "الخط"],
    // 37
    ["der Empfang", "", "الاستقبال"],
    ["das Spiel", "", "اللعبة"],
    ["die Münze", "", ""],
    ["die Spinne", "", "العنكبوت"],
    ["die Auktion", "", "المزاد"],
    ["der Versuch", "", "المحاولة"],
    ["das Timing", "", "التوقيت"],
    ["das Formular", "", "الاستمارة"],
    ["die Barriere", "", "الحاجز - العقبة"],
    ["der Betrag", "", "المبلغ"],
    ["der Stoß", "", "الدفعة"],
    ["die Methode", "", "الطريقة"],
    ["der Friseur", "", "الحلاق"],
    ["der Ball", "", "الكرة"],
    ["der Name", "", "الاسم"],
    ["das Thema", "", "الموضوع"],
    ["die Hausaufgabe", "", "الواجب المنزلي"],
    ["der Moment", "", "اللحظة"],
    ["die Box", "", ""],
    ["der Stecker", "", ""],
    // 38
    ["der Spitzel", "", "الجاسوس"],
    ["der Fuß", "", "القدم"],
    ["das Ohr", "", "الأذن"],
    ["der Zahn", "", "السن"],
    ["die U-Bahn", "", ""],
    ["der Augenblick", "", "اللحظة"],
    ["der Patient", "", "المريض"],
    ["die Krankschreibung", "", "الشهادة المرضية"],
    ["der Alkohol", "", "الكحول"],
    ["der Chef", "", "الرئيس"],
    ["der Austausch", "", "التبادل"],
    ["die Krawatte", "", ""],
    ["der Sieger", "", "الفائز"],
    ["der Hinweis", "", "التلميح"],
    ["der Stein", "", "الحجر"],
    ["der Geldbeutel", "", "محفظة نقود"],
    ["die Phase", "", "المرحلة"],
    ["die Fahrkarte", "", "التذكرة"],
    ["der Blitz", "", "البرق"],
    ["der Donner", "", "الرعد"],
    // 39
    ["die Maus", "", "الفأرة"],
    ["das Talent", "", "الموهبة"],
    ["die Kreuzung", "", ""],
    ["der Kreisverkehr", "", ""],
    ["die Option", "", "الخيار"],
    ["die Drohung", "", "التهديد"],
    ["der Urlaub", "", "الاجازة"],
    ["das Meer", "", "البحر"],
    ["der See", "", "البحيرة"],
    ["die Feder", "", "الريشة"],
    ["die Wüste", "", "الصحراء"],
    ["die Party", "", "الحفلة"],
    ["der Oktopus", "", "الاخطبوط"],
    ["der Deal", "", "الصفقة"],
    ["das Handy", "", ""],
    ["die Kreditkarte", "", "البطاقة المصرفية"],
    ["das Telefon", "", ""],
    ["der Verlierer", "", "الخاسر"],
    ["das Taxi", "", ""],
    ["die Persönlichkeit", "", "الشخصية"],
    // 40
    ["die Hauptsache", "", "الاهم"],
    ["die Wahl", "", "الخيار"],
    ["die Geisel", "", "الرهينة"],
    ["der Kollege", "", "الزميل"],
    ["das Versprechen", "", "العهد"],
    ["der Hass", "", "الكره"],
    ["das Pech", "", "سوء الحظ"],
    ["das Handgepäck", "", ""],
    ["der Flug", "", "رحلة الطيران"],
    ["der Pass", "", "جواز السفر"],
    ["das Ticket", "", "التذكرة"],
    ["der Koffer", "", ""],
    ["der Fußball", "", "كرة القدم"],
    ["die Person", "", "الشخص"],
    ["das Gift", "", "السم"],
    ["der Detektiv", "", "المحقق"],
    ["die Fliege", "", "الذبابة"],
    ["der Ohrring", "", ""],
    ["die Kopie", "", "النسخة"],
    ["der Mars", "", "المريخ"],
    // 41
    ["die Kälte", "", "البروده"],
    ["die Tapferkeit", "", "الشجاعة"],
    ["das Lächeln", "", "الابتسامة"],
    ["der Fußballspieler", "", "لاعب كرة قدم"],
    ["die Notwendigkeit", "", "الضرورة"],
    ["die Regel", "", "القاعده"],
    ["der Helm", "", "الخوذة"],
    ["das Rezept", "", "الوصفة"],
    ["das Lieblingsgericht", "", "الطبق المفضل"],
    ["die Gegend", "", "المنطقة"],
    ["der Kuchen", "", "الكعكة"],
    ["der Flügel", "", "الجناح"],
    ["die Erfahrung", "", "الخبرة"],
    ["der Korb", "", "السلة"],
    ["das Gefäß", "", "الوعاء"],
    ["das Unglück", "", "المصيبه"],
    ["der Reiter", "", ""],
    ["der Besitz", "", "الملكية"],
    ["der Irrtum", "", "الخطأ"],
    ["der Überfall", "", "الهجوم"],
    // 42
    ["das Einschreiten", "", "التدخل"],
    ["die Mitternacht", "", "منتصف الليل"],
    ["der Betrüger", "", "المحتال"],
    ["der Pilz", "", "الفطر"],
    ["das Bauchweh", "", "وجع البطن"],
    ["das Morgengrauen", "", "مطلع الفجر"],
    ["die Rückkehr", "", "العوده"],
    ["die Wärme", "", "الدفئ"],
    ["die Forderung", "", "الطلب"],
    ["die Terrororganisation", "", "منظمة ارهابية"],
    ["die Waffenruhe", "", "وقف اطلاق النار"],
    ["das Gesundheitsministerium", "", "وزارة الصحة"],
    ["die Panik", "", "الذعر"],
    ["der Rücken", "", "الظهر"],
    ["der Sand", "", "الرمل"],
    ["der Zweck", "", "الغايه"],
    ["der Gefallen", "", "الخدمه - العروف"],
    ["das Internet", "", "الانترنت"],
    ["der User", "", "المستخدم"],
    ["der Elefant", "", "الفيل"],
    // 43
    ["das Souvenir", "", "تَذكار"],
    ["die Tasse", "", "فنجان"],
    ["der Schlüsselanhänger", "", "ميدالية مفاتيح"],
    ["die Muschel", "", "صَدفة البحر"],
    ["die Trommel", "", "طبلة"],
    ["das Freundschaftsbändchen", "", "حظاظة"],
    ["das Schach", "", "الشطرنج"],
    ["die Interesse", "", "الاهتمام"],
    ["das Gymnasium", "", "المدرسة الثانوية"],
    ["der Pausenhof", "", "فناء المدرسة"],
    ["das Schuljahr", "", "العام الدراسي"],
    ["der Rollstuhl", "", "كرسي متحرك"],
    ["die Hauptfigur", "", "البطل (الشخصية الرئيسية في الفلم)"],
    ["das Skateboard", "", "لوح تزحلق"],
    ["der Fischer", "", "صياد سمك"],
    ["die Angelrute", "", "سنارة صيد"],
    ["die Schildkröte", "", "السلحفاة"],
    ["der Fuchs", "", "الثعلب"],
    ["der Ast", "", "الغصن"],
    ["der Wolf", "", "الذئب"],
    // 44
    ["der Meter", "", "المتر"],
    ["die Tomate", "", ""],
    ["der Teller", "", "الصحن"],
    ["die Gabel", "", "الشوكة"],
    ["der Frosch", "", "الضفدع"],
    ["der Tischler", "", "النجار"],
    ["der Fleischer", "", "الجزار"],
    ["der Anwalt", "", "المحامي"],
    ["das Shampoo", "", ""],
    ["das Einzelzimmer", "", ""],
    ["das Doppelzimmer", "", ""],
    ["der Euro", "", ""],
    ["der Cent", "", ""],
    ["der Ausweis", "", "بطاقة هوية"],
    ["das Insekt", "", "الحشرة"],
    ["der Park", "", "الحديقة"],
    ["der Buchstabe", "", "الحرف"],
    ["das Café", "", "المقهى"],
    ["die Breite", "", "العرض"],
    ["der Zaun", "", ""],
    // 45
    ["die Karotte", "", "جزرة"],
    ["der Zoo", "", "حديقة الحيوانات"],
    ["der Radiergummi", "", "الممحاة"],
    ["die Schokolade", "", ""],
    ["der Schal", "", ""],
    ["das Schaf", "", "الخروف"],
    ["der Bildschirm", "", "الشاشة"],
    ["der Pullover", "", ""],
    ["die Armee", "", "الجيش"],
    ["die Diät", "", "نظام غذائي"],
    ["die Ente", "", "البطة"],
    ["die Qualle", "", "قنديل البحر"],
    ["der Pinguin", "", "البطريق"],
    ["die Quelle", "", "المصدر"],
    ["die Rakete", "", "الصاروخ"],
    ["die Beschreibung", "", "الوصف"],
    ["der Ehemann", "", "الزوج"],
    ["die Ehefrau", "", "الزوجة"],
    ["die Kundin", "", "الزبونة"],
    ["die Kunst", "", "الفن"],
    // 46
    ["der Kuss", "", "القُبلة"],
    ["die Sehenswürdigkeit", "", "المعْلم"],
    ["das Produkt", "", "المنتَج"],
    ["die Rechnung", "", "الفاتورة"],
    ["das Radio", "", ""],
    ["das Gewicht", "", "الوزن"],
    ["der Kaugummi", "", "لبان"],
    ["der Text", "", "النص"],
    ["die Wassermelone", "", ""],
    ["die Intelligenz", "", "الذكاء"],
    ["die Begründung", "", "التبرير"],
    ["die Kreativität", "", "الابداع"],
    ["die Flucht", "", "الهروب"],
    ["die Industrie", "", "الصناعة"],
    ["die Qualität", "", "الجودة"],
    ["die Konkurrenz", "", "المنافسة"],
    ["der Tourismus", "", "السياحة"],
    ["die Presse", "", "الصحافة"],
    ["der Export", "", "التصدير"],
    ["der Import", "", "الاستيراد"],
    // 47
    ["der Passagier", "", "المسافر"],
    ["die Tankstelle", "", ""],
    ["das Zertifikat", "", "الشهادة"],
    ["die Schwierigkeit", "", "الصعوبة"],
    ["der Inhalt", "", "المحتوى"],
    ["das Gehalt", "", "الراتب"],
    ["der Schmerz", "", "الالم"],
    ["der Vergleich", "", "المقارنة"],
    ["der Muskel", "", "العضلة"],
    ["das Heft", "", "الدفتر"],
    ["der Empfänger", "", "المرسَل اليه"],
    ["die Firma", "", "الشركة"],
    ["die Grippe", "", "الانفلونزا"],
    ["der Link", "", "الرابط"],
    ["das Medikament", "", "الدواء"],
    ["die Pizza", "", ""],
    ["der Vertrag", "", "العَقد"],
    ["die Dauer", "", "المدة"],
    ["der Film", "", "الفلم"],
    ["der Bauernhof", "", "المزرعة"],
    // 48
    ["die Neuigkeit", "", "خبر جديد"],
    ["der Ausländer", "", "الاجنبي"],
    ["der Fan", "", "المعجب"],
    ["der Kinderwagen", "", "عربة اطفال"],
    ["der Krankenpfleger", "", "الممرض"],
    ["die Krankenschwester", "", "الممرضة"],
    ["der Ingenieur", "", "المهندس"],
    ["das Mehl", "", "الطحين"],
    ["die Politik", "", "السياسة"],
    ["das Pflaster", "", ""],
    ["der Quatsch", "", "هراء"],
    ["der Titel", "", "العنوان"],
    ["der Pilot", "", "الطيار"],
    ["das Nilpferd", "", "فرس النهر"],
    ["das Krokodil", "", "التمساح"],
    ["die Schnecke", "", "حلزون"],
    ["das Kamel", "", "الجمل"],
    ["der Igel", "", "القنفذ"],
    ["der Sonnenschirm", "", ""],
    ["der Paprika", "", ""],
    // 49
    ["die Glühbirne", "", "لمبة"],
    ["die Konzentration", "", "التركيز"],
    ["der Sinn", "", "المعنى"],
    ["der Ratschlag", "", "النصيحة"],
    ["der Neid", "", "الحسد"],
    ["der Schlaf", "", "النوم"],
    ["die Natur", "", "الطبيعة"],
    ["die Ehe", "", "الزواج"],
    ["die Scheidung", "", "الطلاق"],
    ["das Klavier", "", "بيانو"],
    ["die Übung", "", "التمرين"],
    ["die Wissenschaft", "", "العِلم"],
    ["die Präsentation", "", "العرض"],
    ["die Bibliothek", "", "المكتبة"],
    ["die Buchhandlung", "", ""],
    ["der Computer", "", "حاسوب"],
    ["die Programmierung", "", "البرمجة"],
    ["der Lebenslauf", "", "السيرة الذاتية"],
    ["der Nachteil", "", "امر سلبي"],
    ["der Vorteil", "", "امر ايجابي"],
    // 50
    ["der Skorpion", "", "العقرب"],
    ["der Stress", "", "الاجهاد"],
    ["die Universität", "", "الجامعة"],
    ["der Cousin", "", "ابن العم, ابن الخال, ابن الخالة, ابن العمة"],
    ["die Cousine", "", "بنت العم, بنت الخال, بنت الخالة, بنت العمة"],
    ["das Modul", "", "وحدة"],
    ["der Punkt", "", "النقطة"],
    ["das Jahrzehnt", "", "العقد, عشر سنوات"],
    ["das Jahrhundert", "", "القرن, مائة سنة"],
    ["das Jahrtausend", "", "الالفية"],
    ["der Bart", "", "اللحية"],
    ["der Bürger", "", "المواطن"],
    ["die Bürgerin", "", "المواطِنة"],
    ["der Dialog", "", "الحوار"],
    ["das Diplom", "", "دبلوم"],
    ["die Hälfte", "", "النصف"],
    ["das Mineralwasser", "", "ماء معدني"],
    ["das Parfüm", "", "العطر"],
    ["die Sucht", "", "الادمان"],
    ["der Witz", "", "النكتة"],
    // 51
    ["die Rolle", "", "الدور"],
    ["die Drohne", "", "طائرة مسيرة"],
    ["der Präsident", "", "الرئيس"],
    ["die Bahn", "", "القطار"],
    ["die Truhe", "", "الصندوق"],
    ["das Bad", "", "الحمام"],
    ["die Etage", "", "الطابق"],
    ["die Couch", "", "الاريكة"],
    ["die See", "", "البحر"],
    ["die Wanderung", "", "التنزه"],
    ["der Rucksack", "", "حقيبة الظهر"],
    ["der Proviant", "", "الزاد"],
    ["das Geräusch", "", "صوت"],
    ["der Astronaut", "", "رائد فضاء"],
    ["das Motorrad", "", "دراجة نارية"],
    ["die Magie", "", "السحر"],
    ["die Generation", "", "الجيل"],
    ["der Ofen", "", "الفرن"],
    ["der Konflikt", "", "الصراع"],
    ["die Invasion", "", "الغزو"],
    // 52
    ["die Gurke", "", "خيارة"],
    ["der Delfin", "", "دلفين"],
    ["der Hase", "", "الأرنب"],
    ["das Nashorn", "", "وحيد القرن"],
    ["die Nummer", "", "الرقم"],
    ["das Kinderzimmer", "", "غرفة الاطفال"],
    ["der Lieblingstag", "", "اليوم المفضل"],
    ["das Fach", "", "المادة الدراسية"],
    ["das Lieblingsfach", "", "المادة المفضلة"],
    ["das Lieblingsbuch", "", "الكتاب المفضل"],
    ["die Medizin", "", "الطب"],
    ["die Lieblingsfarbe", "", "اللون المفضل"],
    ["der Designer", "", "المصمم"],
    ["die Sängerin", "", "المغنية"],
    ["die Polizistin", "", "الشرطية"],
    ["der Becher", "", "الكأس"],
    ["die Hausnummer", "", "رقم المنزل"],
    ["der Schatten", "", "الظل"],
    ["der Wagen", "", "السيارة"],
    ["der Hals", "", "العنق"],
    // 53
    ["der Leser", "", "القارئ"],
    ["das Waschbecken", "", ""],
    ["das Toilettenpapier", "", ""],
    ["der Finger", "", "الاصبع"],
    ["der Klebestift", "", ""],
    ["der Spitzer", "", ""],
    ["das Mäppchen", "", "المقلمة"],
    ["der Rock", "", ""],
    ["die Gasse", "", "الزقاق"],
    ["die Burg", "", "القلعة"],
    ["die Klassenfahrt", "", "رحلة مدرسية"],
    ["das Stadtzentrum", "", "وسط المدينة"],
    ["der Lieblingsort", "", "المكان المفضل"],
    ["das Land", "", "الدولة"],
    ["der Kiosk", "", "كشك"],
    ["die Kontrolle", "", "السيطرة"],
    ["die Klasse", "", "الصف"],
    ["der Laden", "", "المتجر"],
    ["der Streit", "", "النزاع"],
    ["der Skifahrer", "", "متزحلق"],
    // 54
    ["das Tablet", "", ""],
    ["der Pfeil", "", "السهم"],
    ["das Volk", "", "الشعب"],
    ["der Husten", "", "كحة"],
    ["der Teil", "", "الجزء"],
    ["das Silber", "", "الفضة"],
    ["die Krone", "", "التاج"],
    ["die Bäckerei", "", "مخبز"],
    ["die Umwelt", "", "البيئة"],
    ["der Apotheker", "", "صيدلاني"],
    ["die Apothekerin", "", "صيدلانية"],
    ["die Schaukel", "", "الارجوحة"],
    ["der Müll", "", "القمامة"],
    ["die Vase", "", "زهرية"],
    ["die Fabrik", "", "المعمل"],
    ["die Speisekarte", "", "قائمة الطعام"],
    ["die Erfindung", "", "الاختراع"],
    ["der Tourist", "", "السائح"],
    ["das Theater", "", "المسرح"],
    ["der Knochen", "", "عظْم"],
    // 55
    ["die Gitarre", "", ""],
    ["das Blatt", "", ""],
    ["die Pandemie", "", "الجائحة"],
    ["der Kommentar", "", "التعليق"],
    ["das Passwort", "", "كلمة المرور"],
    ["das Konto", "", "الحساب"],
    ["die Demokratie", "", "الديموقراطية"],
    ["die Regierung", "", "الحكومة"],
    ["die Bitte", "", "رجاء"],
    ["die Solidarität", "", "التضامن"],
    ["die Feindseligkeit", "", "العداوة"],
    ["die Beleidigung", "", "الاهانة"],
    ["die Verzeihung", "", "المغفرة"],
    ["der Essig", "", "الخل"],
    ["die Pflaume", "", ""],
    ["der Obstsalat", "", "سلطة فواكه"],
    ["die Dattel", "", "تمرة"],
    ["die Touristin", "", "السائحة"],
    ["die Partei", "", "الحزب"],
    ["die E-Mail-Adresse", "", "عنوان البريد الالكتروني"],
    // 56
    ["das Gehirn", "", "المخ"],
    ["die Lippe", "", "الشفة"],
    ["die Brust", "", "الصدر"],
    ["der Ellbogen", "", "كوع اليد"],
    ["der Zeh", "", "اصبع القدم"],
    ["die Tätigkeit", "", "الحركة"],
    ["der Überblick", "", "نظرة عامة"],
    ["das Quiz", "", "اختبار"],
    ["die Lektion", "", "الدرس"],
    ["das Verständnis", "", "الفهم"],
    ["die Sprachbeherrschung", "", "اتقان اللغة"],
    ["das Feature", "", "الميزة"],
    ["der Stundenplan", "", ""],
    ["die Übersetzung", "", "الترجمة"],
    ["das Unternehmen", "", "الشركة"],
    ["der Schneider", "", "الخياط"],
    ["der Schäfer", "", "الراعي"],
    ["das Fragezeichen", "", "علامة الاستفهام"],
    ["das Komma", "", "الفاصلة"],
    ["der Flugbegleiter", "", "مضيف الطيران"],
    // 57
    ["die Flugbegleiterin", "", "مضيفة طيران"],
    ["die Socke", "", "الجورب"],
    ["der Handschuh", "", ""],
    ["der Schuh", "", "حذاء"],
    ["der Kleiderschrank", "", ""],
    ["der Zebrastreifen", "", "ممر الراجلين"],
    ["das Schneidbrett", "", ""],
    ["der Wasserkocher", "", ""],
    ["der Anker", "", "المرساة"],
    ["der Staubsauger", "", ""],
    ["das Croissant", "", ""],
    ["das Spiegelei", "", "بيضة مقلية"],
    ["der Schiedsrichter", "", "الحَكم"],
    ["das Schlauchboot", "", "قارب مطاطي"],
    ["der Hahn", "", "الديك"],
    ["der Elfmeter", "", "ضربة جزاء"],
    ["das Fußballspiel", "", "مباراة كرة قدم"],
    ["der Trainer", "", "المدرب"],
    ["der Busfahrer", "", "سائق الحافلة"],
    ["die Existenz", "", "الوجود"],
    // 58
    ["der Mülleimer", "", ""],
    ["der Abfalleimer", "", ""],
    ["die Künstlerin", "", "الفنانة"],
    ["die Wissenschaftlerin", "", "العالمة"],
    ["die Tierärztin", "", "طبيبة بيطرية"],
    ["der Schmied", "", "الحَداد"],
    ["der Minister", "", "الوزير"],
    ["der Übersetzer", "", "المترجم"],
    ["der Buchhalter", "", "المحاسب"],
    ["der Schriftsteller", "", "الكاتب"],
    ["die Schriftstellerin", "", "الكاتبة"],
    ["der Klempner", "", ""],
    ["der Mechaniker", "", "الميكانيكي"],
    ["die Sekretärin", "", "سكرتيرة"],
    ["die Kompetenz", "", "الكفاءة"],
    ["das Selbstvertrauen", "", "الثقة بالنفس"],
    ["der Verkauf", "", "البيع"],
    ["der Code", "", "الكود"],
    ["das Militär", "", "الجيش"],
    ["der Kommandeur", "", "القائد"],
    // 59
    ["der Hungerstreik", "", "اضراب عن الطعام"],
    ["die Eskalation", "", "التصعيد"],
    ["der Militäreinsatz", "", "العملية العسكرية"],
    ["das Westjordanland", "", "الضفة الغربية"],
    ["der Gazastreifen", "", "قطاع غزة"],
    ["der Beschuss", "", "القصف"],
    ["der Häftling", "", "السجين"],
    ["die Aggression", "", "العدوان"],
    ["die Lage", "", "الوضع"],
    ["das Mittelmeer", "", "البحر الأبيض المتوسط"],
    ["die Feuerpause", "", "وقف اطلاق النار"],
    ["die Synagoge", "", "كنيس يهودي"],
    ["die Region", "", "المنطقة"],
    ["die Beilegung", "", "التسوية"],
    ["die Vermittlung", "", "الوساطة"],
    ["die Opferzahl", "", "عدد الضحايا"],
    ["der Brand", "", "الحريق"],
    ["der Direktor", "", "المدير"],
    ["die Zahl", "", "العدد"],
    ["die Blockade", "", "الحصار"],
    // 60
    ["das Blutvergießen", "", "اراقة الدماء"],
    ["der Außenminister", "", "وزير الخارجية"],
    ["die Außenministerin", "", "وزيرة الخارجية"],
    ["das Treffen", "", "الاجتماع"],
    ["der Staat", "", "الدولة"],
    ["die Grundlage", "", "اساس"],
    ["die Tötung", "", "القتل"],
    ["die Seite", "", "الجانب"],
    ["die Delegation", "", "الوفْد"],
    ["der Sprecher", "", "المتحدث"],
    ["die Provokation", "", "الاستفزاز"],
    ["der Verteidigungsminister", "", "وزير الدفاع"],
    ["der Premierminister", "", "رئيس الوزراء"],
    ["der Fernsehsender", "", "قناة تلفزيونية"],
    ["der Angreifer", "", "المهاجم"],
    ["der Terror", "", "الإرهاب"],
    ["das Telefonat", "", "مكالمة هاتفية"],
    ["der Anschlag", "", "الهجوم"],
    ["der Botschafter", "", "السفير"],
    ["die Kommunikationsfähigkeit", "", "القدرة على التواصل"],
    // 61
    ["die Pressekonferenz", "", "المؤتمر الصحفي"],
    ["die Kanne", "", "الابريق"],
    ["der Partner", "", "الشريك"],
    ["die Partnerin", "", "الشريكة"],
    ["das Geburtsdatum", "", "تاريخ الميلاد"],
    ["der Account", "", "الحساب"],
    ["der Nachname", "", "الاسم العائلي"],
    ["die Konfrontation", "", "المواجهة"],
    ["der Widerstand", "", "المقاومة"],
    ["die Unterstützung", "", "الدعم"],
    ["das Wartezimmer", "", "غرفة الانتظار"],
    ["der Orangensaft", "", "عصير البرتقال"],
    ["die Umarmung", "", "العناق"],
    ["der Händedruck", "", "المصافحة"],
    ["das Leid", "", "المعاناة"],
    ["der Atomkrieg", "", "الحرب النووية"],
    ["die Opposition", "", "المعارضة"],
    ["die Migration", "", "الهجرة"],
    ["die Straßenbahn", "", ""],
    ["der Vermieter", "", "المؤجر"],
    // 62
    ["die Besichtigung", "", "الزيارة"],
    ["die Arbeitszeit", "", "وقت العمل"],
    ["das Verkehrsmittel", "", "وسيلة نقل"],
    ["die Struktur", "", "البنية"],
    ["das Heimatland", "", "الوطن"],
    ["der Textaufbau", "", "بنية النص"],
    ["das Sprachinstitut", "", "معهد لغة"],
    ["die Anrede", "", ""],
    ["der Gruß", "", ""],
    ["die Einleitung", "", "المقدمة"],
    ["der Schluss", "", "الخاتمة"],
    ["der Artikel", "", "المقال"],
    ["das Ausland", "", "خارج البلاد"],
    ["der Schulstress", "", "الاجهاد المدرسي"],
    ["die Abschlussparty", "", "حفلة الختام"],
    ["die Änderung", "", "التغيير"],
    ["der Schnupfen", "", "زكام"],
    ["die Spritze", "", "حقنة"],
    ["die Klinik", "", "عيادة"],
    ["die Tablette", "", ""],
    // 63
    ["die Telefonnummer", "", "رقم الهاتف"],
    ["das Bankkonto", "", "الحساب البنكي"],
    ["die EC-Karte", "", "البطاقة البنكية"],
    ["der Flüchtling", "", "اللاجئ"],
    ["das Visum", "", "التاشيرة (الفيزه)"],
    ["der Notfall", "", "حالة طارئة"],
    ["der Bruch", "", "الكسر"],
    ["die Operation", "", "العملية"],
    ["die Kollegin", "", "الزميلة"],
    ["die Landschaft", "", "المنظر الطبيعي"],
    ["der Umweltschutz", "", "حماية البيئة"],
    ["das Klima", "", "المناخ"],
    ["das Paket", "", "طرد"],
    ["das Rennen", "", "السباق"],
    ["die Verräterin", "", "الخائنة"],
    ["die Datei", "", ""],
    ["der Ordner", "", ""],
    ["die Webseite", "", "موقع الكتروني"],
    ["der Torwart", "", "حارس المرمى"],
    ["die Liste", "", "القائمة"],
    // 64
    ["das Waisenkind", "", "الطفل اليتيم"],
    ["der Schultag", "", "يوم دراسي"],
    ["der Unsinn", "", "هراء"],
    ["die Mechanikerin", "", "الميكانيكية"],
    ["das Einzelkind", "", "طفل وحيد"],
    ["der Trick", "", "الخدعة"],
    ["der Roboter", "", "روبوت"],
    ["das Huhn", "", "الدجاجة"],
    ["das Reh", "", "الغزال"],
    ["der Hinterhalt", "", "الكمين"],
    ["das Rindfleisch", "", "لحم البقر"],
    ["das Schweinefleisch", "", "لحم الخنزير"],
    ["das Lammfleisch", "", "لحم الغنم"],
    ["der Sänger", "", "المغني"],
    ["der Fotograf", "", "المصور"],
    ["das Tennis", "", "كرة المضرب"],
    ["der Basketball", "", "كرة السلة"],
    ["der Volleyball", "", "الكرة الطائرة"],
    ["die Hauslehrerin", "", "المعلمة المنزلية"],
    ["die Köchin", "", "الطباخة"],
    // 65
    ["der Zivilist", "", "مدني"],
    ["die Siedlung", "", "مغتصبه (مستوطنه)"],
    ["die Ingenieurin", "", "المهندسة"],
    ["der Journalist", "", "الصحافي"],
    ["die Tabelle", "", "الجدول"],
    ["das Schwimmbad", "", "المسبح"],
    ["das Konzert", "", "حفلة موسيقية"],
    ["die Landkarte", "", "خريطة البلد"],
    ["die Weltkarte", "", "خريطة العالم"],
    ["das Computerspiel", "", "لعبة كومبيوتر"],
    ["das Erdgeschoss", "", "الطابق الارضي"],
    ["die Anzeige", "", "الاعلان"],
    ["die Miete", "", "الايجار"],
    ["das Stadtviertel", "", "الحي"],
    ["die Altstadt", "", "المدينة القديمة"],
    ["der Bademantel", "", ""],
    ["der Techniker", "", "تقني"],
    ["die Aufnahmeprüfung", "", "امتحان القبول"],
    ["das Studium", "", "الدراسة"],
    ["der Politiker", "", "السياسي"],
    // 66
    ["das Taschentuch", "", "المنديل"],
    ["der Verrat", "", "الخيانة"],
    ["die Sprachnachricht", "", "رسالة صوتية"],
    ["die Korruption", "", "الفساد"],
    ["der Raketenangriff", "", "هجوم صاروخي"],
    ["die Reaktion", "", "رد فعل"],
    ["der Schwiegersohn", "", "زوج الابنة"],
    ["die Schwiegertochter", "", "زوجة الابن"],
    ["das Picknick", "", "نزهة"],
    ["der Mitbewohner", "", "شريك سكن"],
    ["der Einkauf", "", "التسوق"],
    ["der Eintritt", "", "الدخول"],
    ["die Eintrittskarte", "", "تذكرة الدخول"],
    ["das Kostüm", "", "زي تنكري"],
    ["das Theaterstück", "", "المسرحية"],
    ["die Ermäßigung", "", "التخفيض"],
    ["der Handball", "", "كرة اليد"],
    ["das Abschiedsfest", "", "حفل الوداع"],
    ["die Trainerin", "", "المدربة"],
    ["der Tipp", "", "النصيحة"],
    // 67
    ["die Bestrafung", "", "العقوبة"],
    ["der Arbeiter", "", "العامل"],
    ["das Kreuz", "", "الصليب"],
    ["der Bogen", "", "القوس"],
    ["der Briefumschlag", "", "الظرف"],
    ["der Karton", "", ""],
    ["das Motivationsschreiben", "", "رسالة تحفيزية"],
    ["das Team", "", "الفريق"],
    ["die Bewerbung", "", "الطلب"],
    ["der Zuschauer", "", "المشاهد"],
    ["der Rezeptionist", "", "موظف استقبال"],
    ["der Zimmerschlüssel", "", "مفتاح الغرفة"],
    ["der Postbote", "", "ساعي البريد"],
    ["die Ausbildung", "", "تدريب مهني"],
    ["die Teamfähigkeit", "", "قدرة العمل في فريق"],
    ["die Attacke", "", "الهجوم"],
    ["der Ritter", "", "الفارس"],
    ["der Ausweg", "", "المخرج"],
    ["das Prinzip", "", "المبدأ"],
    ["der Hauptgrund", "", "السبب الرئيسي"],
    // 68
    ["die Einsamkeit", "", "شعور بالوحدة"],
    ["die Vergiftung", "", "التسمم"],
    ["der Bandit", "", "قاطع الطريق"],
    ["die Ähnlichkeit", "", "الشبه"],
    ["der Kratzer", "", "خدش"],
    ["die Vergebung", "", "الصفح"],
    ["die Legende", "", "الاسطورة"],
    ["die Abkürzung", "", "طريق مختصر"],
    ["die Eile", "", "العجلة"],
    ["die Gerechtigkeit", "", "العدالة"],
    ["das Andenken", "", "تذكار"],
    ["das Spielzeug", "", "لعبة"],
    ["die Sendung", "", "برنامج"],
    ["die Unschuld", "", "البراءة"],
    ["der Farmer", "", "المزارع"],
    ["der Opa", "", "الجد"],
    ["die Oma", "", "الجدة"],
    ["der Veganer", "", "نباتي"],
    ["die Debatte", "", "المناقشة"],
    ["die Studie", "", "الدراسة"],
    // 69
    ["das Interview", "", "المقابلة"],
    ["die Ernährung", "", "التغذية"],
    ["die Ursache", "", "السبب"],
    ["die Alternative", "", "البديل"],
    ["der Strom", "", "الكهرباء"],
    ["die Verschmutzung", "", "التلوث"],
    ["die Niederlage", "", "الهزيمة"],
    ["der Überraschungsangriff", "", "هجوم مفاجئ"],
    ["die Dame", "", "السيدة"],
    ["der Ersatzmann", "", "البديل"],
    ["der Besucher", "", "الزائر"],
    ["die Angelegenheit", "", "مسألة"],
    ["der Diener", "", "الخادم"],
    ["die Unterkunft", "", "الإقامة"],
    ["das Mittel", "", "وسيلة"],
    ["die Shau", "", "العرض"],
    ["das Verhältnis", "", "علاقة"],
    ["der Irrsinn", "", "جنون"],
    ["die Runde", "", "الجولة"],
    ["das Gepäck", "", "أمتعة"],
    // 70
    ["das Geburtsjahr", "", "سنة الميلاد"],
    ["der Schock", "", "صدمة"],
    ["der Krach", "", "ضجة"],
    ["der Stromausfall", "", "انقطاع التيار الكهربائي"],
    ["das Virus", "", "فيروس"],
    ["das Tageslicht", "", "ضوء النهار"],
    ["die Gastfreundschaft", "", "كرم الضيافة"],
    ["die Balance", "", "التوازن"],
    ["der Ministerpräsident", "", "رئيس الوزراء"],
    ["der Cham­pi­on", "", "البطل"],
    ["der Herausforderer", "", "المتحدي"],
    ["der Druck", "", "الضغط"],
    ["der Mitbewerber", "", "المنافس"],
    ["der Test", "", "الاختبار"],
    ["die Langeweile", "", "الملل"],
    ["die Pyramide", "", "الهرم"],
    ["der Auftrag", "", "المهمة"],
    ["die Tragödie", "", "المأساة"],
    ["die Räuberin", "", "اللصة"],
    ["die Vermieterin", "", "المؤجرة"],
    // 71
    ["die Ungerechtigkeit", "", "الظلم"],
    ["der Albtraum", "", "الكابوس"],
    ["die Diebin", "", "السارقة"],
    ["die Verbrecherin", "", "المجرمة"],
    ["die Geburtstagsparty", "", "حفلة عيد ميلاد"],
    ["die Geburtstagsüberraschung", "", "مفاجأة عيد ميلاد"],
    ["der Geburtstagskuchen", "", "كعكة عيد ميلاد"],
    ["der Countdown", "", "العد التنازلي"],
    ["die Schachtel", "", "الصندوق"],
    ["der Draht", "", "السلك"],
    ["das Geburtstagsgeschenk", "", "هدية عيد ميلاد"],
    ["die Spur", "", "الاثر"],
    ["das Lieblingslied", "", "الأغنية المفضلة"],
    ["die Melone", "", "البطيخة"],
    ["der Boden", "", "الأرض"],
    ["das Recycling", "", "إعادة التدوير"],
    ["die Maschine", "", "الالة"],
    ["der Bericht", "", "التقرير"],
    ["der Lohn", "", "الراتب"],
    ["der Forumsbeitrag", "", "مشاركة في منتدى"],
    // 72
    ["die Chefin", "", "الرئيسة"],
    ["der Alltag", "", "الحياة اليومية"],
    ["das Passagierschiff", "", "سفينة ركاب"],
    ["das Piratenschiff", "", "سفينة قراصنة"],
    ["die Loyalität", "", "الولاء"],
    ["das Parlament", "", "البرلمان"],
    ["die Zufriedenheit", "", "الرضا"],
    ["die Umfrage", "", "الاستطلاع"],
    ["die Kommunikation", "", "التواصل"],
    ["die Dankbarkeit", "", "الامتنان"],
    ["die Enttäuschung", "", "خيبة أمل"],
    ["die Rettung", "", "الإنقاذ"],
    ["die Piratin", "", "القرصانة"],
    ["der Selbstmordversuch", "", "محاولة الانتحار"],
    ["das Imperium", "", "الإمبراطورية"],
    ["die Rebellion", "", "التمرد"],
    ["der Krieger", "", "المحارب"],
    ["die Summe", "", "المبلغ"],
    ["das Finale", "", "النهائي"],
    ["die Heimat", "", "الوطن"],
    // 73
    ["die Abmachung", "", "الاتفاقية"],
    ["die Reservierung", "", "الحجز"],
    ["die Beantragung", "", "التقديم"],
    ["die Registrierung", "", "التسجيل"],
    ["die Passnummer", "", "رقم جواز السفر"],
    ["der Zugang", "", "الوصول"],
    ["die Nachfrage", "", "الطلب"],
    ["die Botschaft", "", "السفارة"],
    ["das Duell", "", "المواجهة"],
    ["die Zeitverschwendung", "", "إضاعة الوقت"],
    ["das Böse", "", "الشر"],
    ["die Durchsage", "", "الإعلان الصوتي"],
    ["der Moderator", "", "المذيع"],
    ["die Moderatorin", "", "المذيعة"],
    ["die Ministerin", "", "الوزيرة"],
    ["die Giraffe", "", "الزرافة"],
    ["die Mücke", "", "الناموسة"],
    ["das Abonnement", "", "الاشتراك"],
    ["die Absenderin", "", "المرسلة"],
    ["die Anmeldung", "", "التسجيل"],
    // 74
    ["die Annonce", "", "الإعلان"],
    ["die Ansage", "", "الإعلان الصوتي"],
    ["die Anwältin", "", "المحامية"],
    ["das Apartment", "", "الشقة"],
    ["die Arbeiterin", "", "العاملة"],
    ["der Arbeitsplatz", "", "مكان عمل"],
    ["die Arbeitsstelle", "", "مكان عمل"],
    ["der Architekt", "", "المهندس المعماري"],
    ["die Architektin", "", "المهندسة المعمارية"],
    ["das Asyl", "", "اللجوء"],
    ["der Beamte", "", "الموظف"],
    ["die Beamtin", "", "الموظفة"],
    ["der Bereich", "", "المجال"],
    ["der Bewohner", "", "الساكن"],
    ["die Bewohnerin", "", "الساكنة"],
    ["das Billett", "", "تذكرة"],
    ["die Briefmarke", "", "طابع بريدي"],
    ["die Eröffnung", "", "الافتتاح"],
    ["die Frucht", "", "الفاكهة"],
    ["das Gedicht", "", "القصيدة"],
];

var myWordsBackUp = myWords;




if (index > 0) {
    practiceButton.style.display = "none";
};


if (localStorage.getItem("practiceMode") === null) {
    localStorage.setItem("practiceMode", "practice by time added");
};

if (localStorage.getItem("practiceMode") === "practice by time added") {
    practiceButton.innerHTML = "practice randomly";
} else if (localStorage.getItem("practiceMode") === "practice randomly") {
    practiceButton.innerHTML = "practice by time added";
};





if (localStorage.getItem("myNormalWordsLocal") === null
    || localStorage.getItem("myWordsLocal") === null) {
    if (localStorage.practiceMode === "practice by time added") {
        localStorage.setItem("myNormalWordsLocal", JSON.stringify(myWords));
        myWords = JSON.parse(localStorage.getItem("myNormalWordsLocal"));
    } else if (localStorage.practiceMode === "practice randomly") {
        shuffleArray(myWords);
        localStorage.setItem("myWordsLocal", JSON.stringify(myWords));
        myWords = JSON.parse(localStorage.getItem("myWordsLocal"));
    };
} else {
    if (localStorage.practiceMode === "practice by time added") {
        myWords = JSON.parse(localStorage.getItem("myNormalWordsLocal"));
    } else if (localStorage.practiceMode === "practice randomly") {
        myWords = JSON.parse(localStorage.getItem("myWordsLocal"));
    };
};






function displayWord() {
    frontDiv.innerHTML = myWords[index][0].slice(4);
};
displayWord();

function displayTranslation() {
    backDiv.innerHTML = myWords[index][2];
};
displayTranslation();



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
};


practiceButton.addEventListener("click", function(){
    if (localStorage.practiceMode === "practice randomly") {
        practiceButton.innerHTML = "practice randomly";
        localStorage.practiceMode = "practice by time added";
        myWords = JSON.parse(localStorage.getItem("myNormalWordsLocal"));
        displayWord();
        displayTranslation();


    } else if (localStorage.practiceMode === "practice by time added") {
        practiceButton.innerHTML = "practice by time added";
        localStorage.practiceMode = "practice randomly";


        shuffleArray(myWords);
        localStorage.setItem("myWordsLocal", JSON.stringify(myWords));
        myWords = JSON.parse(localStorage.getItem("myWordsLocal"));

        displayWord();
        displayTranslation();
    };
});





function zfill(str, width) {
    const padding = "0".repeat(width - str.length);
    return padding + str;
};

function displayNumber() {
    if (index.toString().length < myWords.length.toString().length) {
        let str = (index + 1).toString();
        numberOf.innerHTML = `${zfill(str, myWords.length.toString().length)} of ${myWords.length}`;
    } else {
        numberOf.innerHTML = `${index + 1} of ${myWords.length}`;
    };
};
displayNumber();






derSquare.onclick = function() {
    if (getComputedStyle(derSquare).backgroundColor === "rgb(255, 255, 255)") {
        if (myWords[index][0].slice(0, 3) === "der") {
            derSquare.style.backgroundColor = "#00FF00";
        } else {
            derSquare.style.backgroundColor = "#FF0000";
        };
    };
};

dieSquare.onclick = function() {
    if (getComputedStyle(dieSquare).backgroundColor === "rgb(255, 255, 255)") {
        if (myWords[index][0].slice(0, 3) === "die") {
            dieSquare.style.backgroundColor = "#00FF00";
        } else {
            dieSquare.style.backgroundColor = "#FF0000";
        };
    };
};

dasSquare.onclick = function() {
    if (getComputedStyle(dasSquare).backgroundColor === "rgb(255, 255, 255)") {
        if (myWords[index][0].slice(0, 3) === "das") {
            dasSquare.style.backgroundColor = "#00FF00";
        } else {
            dasSquare.style.backgroundColor = "#FF0000";
        };
    };
};



derBtnTxt.addEventListener("click", function(){
    if (getComputedStyle(derSquare).backgroundColor === "rgb(255, 255, 255)") {
        if (myWords[index][0].slice(0, 3) === "der") {
            derSquare.style.backgroundColor = "#00FF00";
        } else {
            derSquare.style.backgroundColor = "#FF0000";
        };
    };
});

dieBtnTxt.addEventListener("click", function(){
    if (getComputedStyle(dieSquare).backgroundColor === "rgb(255, 255, 255)") {
        if (myWords[index][0].slice(0, 3) === "die") {
            dieSquare.style.backgroundColor = "#00FF00";
        } else {
            dieSquare.style.backgroundColor = "#FF0000";
        };
    };
});

dasBtnTxt.addEventListener("click", function(){
    if (getComputedStyle(dasSquare).backgroundColor === "rgb(255, 255, 255)") {
        if (myWords[index][0].slice(0, 3) === "das") {
            dasSquare.style.backgroundColor = "#00FF00";
        } else {
            dasSquare.style.backgroundColor = "#FF0000";
        };
    };
});


function resetSquares() {
    derSquare.style.backgroundColor = "#FFFFFF";
    dieSquare.style.backgroundColor = "#FFFFFF";
    dasSquare.style.backgroundColor = "#FFFFFF";
};









nextButton.onclick = function() {
    if (index < myWords.length - 1) {
        practiceButton.style.display = "none";
        resetSquares();
        index++;
        localStorage.index = +(localStorage.index) + 1;
        displayNumber();
        displayWord();
        displayTranslation();
    };
};

previousButton.onclick = function () {
    if (index > 0) {
        resetSquares();
        index--;
        localStorage.index = +(localStorage.index) - 1;
        displayNumber();
        displayWord();
        displayTranslation();
    };
    if (localStorage.getItem("index") == 0) {
        practiceButton.style.display = "initial";
    };
};

resetButton.onclick = function () {
    localStorage.removeItem("myWordsNormalLocal");
    localStorage.removeItem("myWordsLocal");

    if (checkFliped === true) {
        flipButton.click();
    };
    if (getComputedStyle(practiceButton).display === "none") {
        practiceButton.style.display = "initial";
    };


    
    if (localStorage.getItem("practiceMode") === null) {
        localStorage.setItem("practiceMode", "practice by time added");
    };

    if (localStorage.getItem("practiceMode") === "practice by time added") {
        practiceButton.innerHTML = "practice randomly";
    } else if (localStorage.getItem("practiceMode") === "practice randomly") {
        practiceButton.innerHTML = "practice by time added";
    };





    if (localStorage.getItem("myNormalWordsLocal") === null
        || localStorage.getItem("myWordsLocal") === null) {
        if (localStorage.practiceMode === "practice by time added") {
            localStorage.setItem("myNormalWordsLocal", JSON.stringify(myWords));
            myWords = JSON.parse(localStorage.getItem("myNormalWordsLocal"));
        } else if (localStorage.practiceMode === "practice randomly") {
            shuffleArray(myWordsBackUp);
            localStorage.setItem("myWordsLocal", JSON.stringify(myWordsBackUp));
            myWords = JSON.parse(localStorage.getItem("myWordsLocal"));
        };
    };





    resetSquares();
    index = 0;
    localStorage.index=0;
    displayNumber();
    displayWord();
    displayTranslation();
};

resetButtonOnQuery.addEventListener("click", function(){
    localStorage.removeItem("myWordsNormalLocal");
    localStorage.removeItem("myWordsLocal");


    if (checkFliped === true) {
        flipButton.click();
    };
    if (getComputedStyle(practiceButton).display === "none") {
        practiceButton.style.display = "initial";
    };



    
    if (localStorage.getItem("practiceMode") === null) {
        localStorage.setItem("practiceMode", "practice by time added");
    };

    if (localStorage.getItem("practiceMode") === "practice by time added") {
        practiceButton.innerHTML = "practice randomly";
    } else if (localStorage.getItem("practiceMode") === "practice randomly") {
        practiceButton.innerHTML = "practice by time added";
    };





    if (localStorage.getItem("myNormalWordsLocal") === null
        || localStorage.getItem("myWordsLocal") === null) {
        if (localStorage.practiceMode === "practice by time added") {
            localStorage.setItem("myNormalWordsLocal", JSON.stringify(myWords));
            myWords = JSON.parse(localStorage.getItem("myNormalWordsLocal"));
        } else if (localStorage.practiceMode === "practice randomly") {
            shuffleArray(myWordsBackUp);
            localStorage.setItem("myWordsLocal", JSON.stringify(myWordsBackUp));
            myWords = JSON.parse(localStorage.getItem("myWordsLocal"));
        };
    };





    resetSquares();
    index = 0;
    localStorage.index=0;
    displayNumber();
    displayWord();
    displayTranslation();
});



var checkFliped = false;
var noned = false;
function flipTreatment(fBtnOne){
    if (checkFliped === false) {
        if (getComputedStyle(resetButton).display === "none"
        && getComputedStyle(document.getElementById("der-square"), "::after").content === '""') {
            document.getElementById("first-parent").childNodes.forEach(function(ele){
                if (ele.id === articlesContainer.id) {
                    articlesContainer.style.display = "none";
                    noned = true;
                };
            });
        };
        fBtnOne.innerHTML = "&#10563;";
        checkFliped = true;
        parentOfEmpties.style.display = "none";
        frontDiv.style.display = "none";
        backDiv.style.display = "initial";
        displayTranslation();
    } else {
        if (noned 
            && getComputedStyle(resetButton).display === "none"
            && getComputedStyle(document.getElementById("der-square"), "::after").content === '""') {
                articlesContainer.style.display = "flex";
                noned = false;
            };
            fBtnOne.innerHTML = "&#10562;";
        checkFliped = false;
        parentOfEmpties.style.display = "flex";
        frontDiv.style.display = "initial";
        backDiv.style.display = "none";
    };
};


flipButton.onclick = function () {
    flipTreatment(flipButton);
};







function speakWord() {
    const utterance = new SpeechSynthesisUtterance(frontDiv.innerHTML);
    utterance.lang = "de-DE";
    speechSynthesis.speak(utterance);
};

frontDiv.onclick = function () {
    speakWord();
};
