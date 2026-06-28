import type { Module } from './module-types';

export const modules: Module[] = [
  {
    id: 1,
    title: "Úvod do ochrany dat",
    emoji: "🛡️",
    description: "Seznamte se se základy ochrany dat a švýcarským zákonem DSG.",
    videoId: "bGHo6ahlXTI",
    learnContent: [
      {
        heading: "Relevance a význam ochrany dat",
        text: "Ochrana dat chrání osobní práva a svobody zaměstnanců, zákazníků a koncových uživatelů. Dotčeno je veškeré zpracování osobních údajů: shromažďování, uchovávání, používání, předávání, archivování nebo mazání.",
        infoBox: {
          variant: "warnung",
          title: "Pozor",
          text: "Úmyslná porušení ze strany fyzických osob mohou vést k pokutám až CHF 250 000 (čl. 60–63 DSG). Neznalost zákona neomlouvá.",
        },
      },
      {
        heading: "Základní pojmy ochrany dat",
        text: "Osobní údaje jsou informace vztahující se k identifikované nebo identifikovatelné fyzické osobě — například jméno, adresa, datum narození, e-mailová adresa nebo IP adresa.",
        infoBox: {
          variant: "merksatz",
          title: "K zapamatování",
          text: "I IP adresy a identifikátory zařízení jsou osobními údaji, protože umožňují identifikaci.",
        },
      },
      {
        heading: "Zvláště citlivé osobní údaje",
        text: "Zvláštní ochrany požívají údaje o náboženském, světonázorovém, politickém nebo odborovém přesvědčení; o zdraví, intimní sféře a etnickém původu; o trestním a správním řízení a o opatřeních sociální pomoci. Součástí jsou i biometrické údaje (art. 5 DSG).",
      },
      {
        heading: "Právní základ",
        text: "Ve Švýcarsku je revidovaný spolkový zákon o ochraně dat (DSG) v platnosti od 1. září 2023. Přizpůsobuje se evropskému GDPR a posiluje práva dotčených osob.",
        infoBox: {
          variant: "merksatz",
          title: "K zapamatování",
          text: "Klíčové jsou tři zásady: pouze nezbytné údaje (přiměřenost), pouze pro deklarovaný účel (účelové omezení) a dotčené osoby musí být informovány (transparentnost).",
        },
      },
    ],
    quiz: [
      {
        question: "Které osobní údaje jsou zvláště citlivé?",
        type: "multi",
        options: ["Jméno a adresa", "Datum narození", "Informace o zdravotním stavu", "Otisk prstu (biometrické údaje)", "Povolání", "Náboženské vyznání"],
        correctIndexes: [2, 3, 5],
        explanation: "Zdravotní, biometrické a světonázorové údaje požívají zvláštní ochrany (art. 5 DSG). Jméno, adresa, datum narození a povolání jsou běžné osobní údaje.",
      },
      {
        question: "Co zahrnuje zpracování dat podle DSG?",
        type: "multi",
        options: ["Shromažďování", "Předávání", "Archivování", "Uchovávání", "Mazání", "Používání"],
        correctIndexes: [0, 1, 2, 3, 4, 5],
        explanation: "Zpracování dat zahrnuje veškeré operace s osobními údaji — od shromažďování až po definitivní vymazání.",
      },
    ],
  },
  {
    id: 2,
    title: "Zásady ochrany dat",
    emoji: "⚖️",
    description: "Porozumějte základním zásadám zpracování osobních údajů.",
    learnContent: [
      {
        heading: "Účelové omezení a minimalizace dat",
        text: "Účelové omezení — údaje lze shromažďovat a zpracovávat pouze za stanovenými, výslovnými a legitimními účely. Minimalizace dat — lze shromažďovat pouze ty údaje, které jsou pro daný konkrétní účel skutečně nezbytné.",
        infoBox: {
          variant: "merksatz",
          title: "K zapamatování",
          text: "Pouze nezbytné údaje — a pouze pro účel, pro který byly shromážděny.",
        },
      },
      {
        heading: "Transparentnost a právo na přístup",
        text: "Transparentnost — dotčené osoby musí mít možnost vědět, jaké jejich údaje jsou zpracovávány a k jakým účelům. Právo na přístup — mají právo získat informace o údajích, které jsou o nich evidovány.",
      },
      {
        heading: "Přesnost a aktuálnost",
        text: "Údaje musí být správné a aktuální. Nepřesné nebo zastaralé údaje musí být opraveny nebo vymazány.",
      },
    ],
    quiz: [
      {
        question: "Musí být dotčené osoby informovány o zpracovávaných údajích a účelech?",
        type: "single",
        options: ["Ne", "Pouze na žádost", "Ano"],
        correctIndexes: [2],
        explanation: "To vyžaduje zásada transparentnosti — dotčené osoby musí být na žádost informovány.",
      },
      {
        question: "Co znamená zásada minimalizace dat?",
        type: "single",
        options: ["Lze shromažďovat pouze údaje nezbytné pro konkrétní účel", "Údaje jsou chráněny před neoprávněným přístupem", "Údaje lze zpracovávat pouze za stanovenými a legitimními účely"],
        correctIndexes: [0],
        explanation: "Minimalizace dat znamená: co nejméně údajů. Třetí možnost popisuje účelové omezení.",
      },
    ],
  },
  {
    id: 3,
    title: "Práva dotčených osob",
    emoji: "👤",
    description: "Seznamte se s právy, která mají osoby vůči společnosti.",
    learnContent: [
      {
        heading: "Právo na přístup",
        text: "Dotčené osoby mohou kdykoli požádat o informace o zpracování svých údajů. Žádost vyřizuje pověřenec pro ochranu dat, který poskytne informace do 30 dnů.",
      },
      {
        heading: "Právo na opravu a výmaz",
        text: "Oprava — dotčené osoby mohou požádat o opravu nepřesných údajů. Výmaz — mohou požádat o vymazání, pokud údaje již nejsou potřebné nebo byly zpracovávány protiprávně.",
      },
      {
        heading: "Právo na blokování údajů",
        text: "Dotčené osoby mohou požádat o blokování svých údajů — například pokud zpochybňují jejich přesnost nebo pokud zpracování není zákonné (z ochrany osobnosti, čl. 32 DSG).",
      },
      {
        heading: "Vydání údajů (čl. 28 DSG)",
        text: "Dotčené osoby mohou požádat o vydání svých údajů v běžném elektronickém formátu — za předpokladu, že jsou údaje zpracovávány automaticky a účel to dovoluje.",
        infoBox: {
          variant: "merksatz",
          title: "Klíčová práva podle švýcarského DSG",
          text: "Právo na přístup (čl. 25), oprava/výmaz/blokování (čl. 32) a vydání údajů (čl. 28). Švýcarský DSG nezná výslovné právo vznést námitku jako GDPR EU.",
        },
      },
    ],
    quiz: [
      {
        question: "Jaká práva předpokládá švýcarský DSG pro dotčené osoby?",
        type: "single",
        options: ["Pouze právo na přístup", "Přístup, oprava/výmaz/blokování a vydání údajů", "Přístup, oprava, výmaz, omezení zpracování, námitka a přenositelnost dat (jako GDPR EU)"],
        correctIndexes: [1],
        explanation: "Švýcarský DSG zaručuje právo na přístup (čl. 25), opravu/výmaz/blokování (čl. 32) a vydání údajů (čl. 28). Švýcarský DSG nezná výslovné právo vznést námitku ani omezení jako GDPR EU.",
      },
      {
        question: "Ve jaké lhůtě musí být přístup poskytnut?",
        type: "single",
        options: ["7 dní", "30 dní", "90 dní"],
        correctIndexes: [1],
        explanation: "Přístup se zpravidla poskytuje do 30 dnů.",
      },
    ],
  },
  {
    id: 4,
    title: "Povinnosti společnosti a zaměstnanců",
    emoji: "📢",
    description: "Seznamte se se svými povinnostmi a postupem hlášení při porušení ochrany dat.",
    learnContent: [
      {
        heading: "Procesy odpovídající ochraně dat",
        text: "Společnost musí zavést procesy zajišťující dodržování všech zásad ochrany dat v každodenním provozu. MS Direct Group vlastní certifikát kvality «GoodPrivacy» od SQS, který osvědčuje odpovídající systém řízení ochrany dat.",
        infoBox: {
          variant: "merksatz",
          title: "GoodPrivacy",
          text: "GoodPrivacy (SQS) certifikuje, že MS Direct Group disponuje ověřeným systémem řízení ochrany dat.",
        },
      },
      {
        heading: "Odpovědnosti zaměstnanců",
        text: "Každý zaměstnanec nese spoluodpovědnost za ochranu dat, se kterými pracuje. Všichni se účastní školení a dodržují směrnice o ochraně dat.",
        infoBox: {
          variant: "merksatz",
          title: "K zapamatování",
          text: "Ochrana dat je týmová práce — není výhradní odpovědností IT oddělení.",
        },
      },
      {
        heading: "Povinnosti společnosti",
        text: "Společnost zavádí technická a organizační opatření (TOO), vede záznamy o činnostech zpracování a začleňuje ochranu dat již při vývoji nových procesů (záměrná a standardní ochrana dat).",
      },
      {
        heading: "Povinnosti hlášení při porušení",
        text: "Interně — incidenty nebo podezření na incidenty musí být ihned nahlášeny pověřenci pro ochranu dat nebo nadřízenému. Externě — zda a kdy je třeba oznámit dozorový orgán (PFPDT) nebo dotčené osoby, posuzuje a rozhoduje pověřenec pro ochranu dat.",
        infoBox: {
          variant: "warnung",
          title: "Povinnost hlášení",
          text: "Ihned interně nahlaste jakýkoli incident nebo podezření na incident v oblasti ochrany dat. Pověřenec pro ochranu dat posoudí, zda je oznámení PFPDT nutné. Pokud je oznámení nezbytné, musí být provedeno co nejdříve.",
        },
      },
    ],
    quiz: [
      {
        question: "Co musíte udělat, pokud zjistíte porušení ochrany dat?",
        type: "single",
        options: ["Počkat, zda si toho někdo jiný všimne", "Opravit to sami, aniž byste kohokoli informovali", "Ihned informovat nadřízeného nebo pověřence pro ochranu dat", "Rozeslat e-mail všem zaměstnancům"],
        correctIndexes: [2],
        explanation: "Okamžité interní hlášení je zásadní. Švýcarský DSG nestanoví pevnou lhůtu 72 hodin — to je pravidlo evropského GDPR. Porušení s vysokým rizikem musí být oznámena PFPDT co nejdříve. Opravit to sami mlčky není možností.",
      },
      {
        question: "Co znamená «záměrná ochrana dat»?",
        type: "single",
        options: ["Ochrana dat se doplňuje dodatečně při výskytu problémů", "Ochrana dat je integrována do systémů a procesů od samého počátku", "Za ochranu dat odpovídá výhradně IT oddělení"],
        correctIndexes: [1],
        explanation: "Záměrná ochrana dat znamená, že je nedílnou součástí každého procesu a systému od samého začátku — stejně jako bezpečnost nebo kvalita.",
      },
      {
        question: "Co je záznam o činnostech zpracování (art. 12 DSG)?",
        type: "single",
        options: ["Seznam všech zaměstnanců s přístupem k datům", "Dokumentace všech činností zpracování dat ve společnosti", "Přehled všech porušení za posledních 5 let"],
        correctIndexes: [1],
        explanation: "Záznam o činnostech zpracování (art. 12 DSG) systematicky dokumentuje veškeré činnosti zpracování: jaké údaje, za jakým účelem, kým, po jakou dobu. Je klíčovým nástrojem pro zajištění souladu s předpisy.",
      },
    ],
  },
  {
    id: 5,
    title: "Bezpečnost IT a ochrana dat",
    emoji: "🔒",
    description: "Rozpoznejte typická IT rizika a naučte se předcházet porušením v každodenní praxi.",
    learnContent: [
      {
        heading: "Zásady IT bezpečnosti na pracovišti",
        text: "Platí jasná pravidla: používat bezpečná hesla, při odchodu zamknout počítač a neinstalovat neznámý software.",
      },
      {
        heading: "Bezpečná hesla a správa hesel",
        text: "Používejte dlouhá a složitá hesla s velkými písmeny, malými písmeny, číslicemi a speciálními znaky — unikátní heslo pro každou službu. Správce hesel usnadňuje bezpečné ukládání a správu.",
        infoBox: {
          variant: "merksatz",
          title: "Tip",
          text: "Win + L (Windows) nebo Ctrl + Cmd + Q (Mac) okamžitě zamkne obrazovku — i při krátkém vzdálení od počítače.",
        },
      },
      {
        heading: "Rozpoznání phishingu a sociálního inženýrství",
        text: "Phishingové e-maily napodobují skutečné odesílatele a žádají přihlašovací údaje nebo kliknutí na odkaz. V případě pochybností e-mail raději smažte, než abyste riskovali — nikdy neklikejte na odkazy nebo přílohy a kontaktujte IT podporu.",
        infoBox: {
          variant: "warnung",
          title: "Skutečnost",
          text: "Více než 80 % veškerých porušení ochrany dat je způsobeno lidskými chybami, nikoli technickými IT útoky.",
        },
      },
      {
        heading: "Co dělat ✅",
        text: "Zamknout obrazovku při opuštění pracovní stanice. Používat VPN při práci z domova a na veřejných sítích Wi-Fi. Silná hesla + dvoufaktorová autentizace (2FA). Podezřelé e-maily okamžitě nahlásit IT podpoře.",
      },
      {
        heading: "Co nedělat ❌",
        text: "Heslo na post-it přilepený na monitor — ne. Zákaznická data přes WhatsApp nebo osobní e-mail — ne. Veřejná Wi-Fi bez VPN — ne. Citlivé dokumenty ponechané bez dozoru — ne.",
        infoBox: {
          variant: "warnung",
          title: "Nikdy",
          text: "NIKDY si svá hesla nezapisujte — ani na post-ity, ani do nechráněných souborů. A: NIKDY nenechávejte svůj notebook odemčený bez dozoru, i když to je jen na chvilku.",
        },
      },
    ],
    quiz: [
      {
        question: "Dostanete e-mail z adresy 'hr@ms-direct.ch' žádající potvrzení vašeho hesla. Co uděláte?",
        type: "single",
        options: ["Kliknu na odkaz a zadám své heslo", "E-mail ignoruji a smažu ho", "Okamžitě nahlásím e-mail IT podpoře"],
        correctIndexes: [2],
        explanation: "Jde o klasický phishing. Nikdy neklikejte na odkazy ani nezadávejte hesla. Vždy hlaste — i když se to zdá neškodné. Smazání nestačí.",
      },
      {
        question: "Která opatření účinně chrání osobní údaje?",
        type: "multi",
        options: ["Heslo na post-it na monitoru", "Zamknout obrazovku při opuštění pracovní stanice", "Používat VPN při práci z domova", "Sdílet zákaznická data přes WhatsApp", "Silná hesla + aktivované 2FA"],
        correctIndexes: [1, 2, 4],
        explanation: "Zamčení obrazovky, VPN a 2FA jsou základní bezpečnostní opatření. Hesla na post-itech a WhatsApp pro zákaznická data jsou zjevná porušení.",
      },
      {
        question: "Kde heslo NESMÍ být uloženo?",
        type: "multi",
        options: ["V šifrovaném správci hesel", "Na post-itu na monitoru", "V nechráněném textovém souboru na ploše", "V paměti"],
        correctIndexes: [1, 2],
        explanation: "Hesla na post-itech nebo v nechráněných souborech představují závažné bezpečnostní riziko. Bezpečné možnosti jsou pouze šifrovaní správci nebo paměť.",
      },
      {
        question: "Musíte se krátce vzdálit od pracovní stanice. Co uděláte s notebookem?",
        type: "single",
        options: ["Nechám ho otevřený — vzdálím se jen na chvíli", "Zavřu pouze aktuální dokument", "Zamknu obrazovku (Win+L / Ctrl+Cmd+Q)"],
        correctIndexes: [2],
        explanation: "Již krátká nepřítomnost stačí k neoprávněnému přístupu. Zamčení je jednoduché (Win+L v systému Windows, Ctrl+Cmd+Q na Macu) a naprosto nezbytné.",
      },
    ],
  },
  {
    id: 6,
    title: "Interní kontakty a nahlašovací kanály",
    emoji: "📞",
    description: "Vězte, na koho se obrátit s dotazy a při incidentu.",
    learnContent: [
      {
        heading: "Na koho se obrátit?",
        text: "Pověřencem pro ochranu dat MS Direct Group je Myrio Kluser. Kontaktovat ho můžete na myrio.kluser@qmart.ch. Je vaším kontaktem pro dotazy a problémy v oblasti ochrany dat, žádosti dotčených osob o informace a incidenty týkající se ochrany dat.",
        infoBox: {
          variant: "merksatz",
          title: "V případě pochybností",
          text: "V případě pochybností nerozhodujte sami — obraťte se na pověřence pro ochranu dat.",
        },
      },
      {
        heading: "Jak nahlásit incident?",
        text: "Incidenty v oblasti ochrany dat nebo podezření na ně nahlaste ihned interně pověřenci nebo svému nadřízenému. Čím dříve se nahlásí, tím lépe může společnost reagovat. Pověřenec pro ochranu dat posoudí, zda a kdy je nutné externí oznámení PFPDT.",
      },
    ],
    quiz: [
      {
        question: "Komu jako prvnímu nahlásíte incident v oblasti ochrany dat?",
        type: "single",
        options: ["Přímo PFPDT", "Internímu pověřenci pro ochranu dat nebo nadřízenému", "E-mailem všem zaměstnancům"],
        correctIndexes: [1],
        explanation: "Vždy hlaste nejprve interně. Externí oznámení PFPDT zajišťuje pověřenec pro ochranu dat.",
      },
      {
        question: "Kdo je pověřencem pro ochranu dat MS Direct Group?",
        type: "single",
        options: ["Myrio Kluser", "IT oddělení", "Vedení společnosti"],
        correctIndexes: [0],
        explanation: "Myrio Kluser (myrio.kluser@qmart.ch) je ústředním kontaktem pro otázky ochrany dat.",
      },
    ],
  },
  {
    id: 7,
    title: "Závěrečný kvíz",
    emoji: "🏆",
    description: "Ukažte, co jste se naučili! 5 otázek ze všech modulů — zvládnete to!",
    learnContent: [],
    quiz: [
      {
        question: "Od kdy je v platnosti revidovaný spolkový zákon o ochraně dat (DSG)?",
        type: "single",
        options: ["25. května 2018", "1. ledna 2022", "1. září 2023"],
        correctIndexes: [2],
        explanation: "Revidovaný DSG vstoupil v platnost 1. září 2023 — téměř 5 let po evropském GDPR.",
      },
      {
        question: "Co NENÍ zvláště citlivý osobní údaj?",
        type: "single",
        options: ["HIV status", "Data otisků prstů", "Pracovní e-mailová adresa"],
        correctIndexes: [2],
        explanation: "Pracovní e-mailové adresy jsou běžné osobní údaje. HIV status (zdraví) a data otisků prstů (biometrie) jsou zvláště citlivé podle art. 5 DSG.",
      },
      {
        question: "Jaké chování je bezpečné při práci z domova?",
        type: "single",
        options: ["Uložit zákaznická data na soukromý USB disk", "Aktivovat VPN a zamknout obrazovku při opuštění místnosti", "Ponechat firemní notebook odemčený při krátkém vzdálení"],
        correctIndexes: [1],
        explanation: "VPN + zamčená obrazovka jsou absolutním základem při práci z domova. Soukromé USB disky a odemčená zařízení jsou zjevná bezpečnostní porušení.",
      },
      {
        question: "Co vyžaduje švýcarský DSG při oznamování porušení ochrany dat PFPDT?",
        type: "single",
        options: ["Pevnou lhůtu 72 hodin, jako v evropském GDPR", "Porušení ochrany dat není nikdy třeba oznamovat externě", "Oznámení musí být provedeno co nejdříve, pokud existuje vysoké riziko"],
        correctIndexes: [2],
        explanation: "Švýcarský DSG NESTANOVÍ pevnou lhůtu 72 hodin — to je pravidlo evropského GDPR. Porušení, která pravděpodobně představují vysoké riziko pro osobnost nebo základní práva, musí být oznámena PFPDT co nejdříve.",
      },
      {
        question: "Co dělat při podezření na phishing?",
        type: "single",
        options: ["Prostě e-mail smazat a zapomenout na něj", "Kliknout na odkaz, abych ověřil, zda jde skutečně o phishing", "Nahlásit IT podpoře a vyčkat pokynů"],
        correctIndexes: [2],
        explanation: "Phishing vždy hlaste IT podpoře — i když se to zdá neškodné. Smazání nestačí. Nikdy neklikejte na podezřelé odkazy!",
      },
    ],
  },
];
