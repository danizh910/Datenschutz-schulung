import type { Module } from './module-types';

export const modules: Module[] = [
  {
    id: 1,
    title: "Uvod u zaštitu podataka",
    emoji: "🛡️",
    description: "Upoznajte se s osnovama zaštite podataka i švicarskim DSG-om.",
    videoId: "bGHo6ahlXTI",
    learnContent: [
      {
        heading: "Relevantnost i važnost zaštite podataka",
        text: "Zaštita podataka štiti osobna prava i slobode zaposlenika, klijenata i krajnjih korisnika. Obuhvaćena je svaka obrada osobnih podataka: prikupljanje, pohrana, korištenje, prijenos, arhiviranje ili brisanje.",
        infoBox: {
          variant: "warnung",
          title: "Pozor",
          text: "Čak i nenamjerne povrede mogu dovesti do novčanih kazni do CHF 250.000 — neznanje zakona ne štiti od sankcija.",
        },
      },
      {
        heading: "Temeljni pojmovi zaštite podataka",
        text: "Osobni podaci su informacije koje se odnose na identificiranu ili identifikabilnu fizičku osobu — na primjer, ime, adresa, datum rođenja, e-mail adresa ili IP adresa.",
        infoBox: {
          variant: "merksatz",
          title: "Za zapamtiti",
          text: "I IP adrese i identifikatori uređaja su osobni podaci jer omogućuju identifikaciju.",
        },
      },
      {
        heading: "Posebno osjetljivi osobni podaci",
        text: "Posebnom zaštitom obuhvaćeni su podaci o vjerskim, svjetonazorskim, političkim ili sindikalnim uvjerenjima; o zdravlju, intimnoj sferi i etničkom podrijetlu; o kaznenim i upravnim postupcima te o mjerama socijalne skrbi. Tu spadaju i biometrijski podaci (čl. 5 DSG).",
      },
      {
        heading: "Pravna osnova",
        text: "U Švicarskoj je revidiran Savezni zakon o zaštiti podataka (DSG) na snazi od 1. rujna 2023. Usklađen je s europskim GDPR-om i jača prava pogođenih osoba.",
        infoBox: {
          variant: "merksatz",
          title: "Za zapamtiti",
          text: "Ključna su tri načela: samo nužni podaci (razmjernost), samo za deklarirani cilj (namjena) i pogođene osobe moraju biti obaviještene (transparentnost).",
        },
      },
    ],
    quiz: [
      {
        question: "Koji su osobni podaci posebno osjetljivi?",
        type: "multi",
        options: ["Ime i adresa", "Datum rođenja", "Informacije o zdravlju", "Otisak prsta (biometrijski podaci)", "Zanimanje", "Vjerska pripadnost"],
        correctIndexes: [2, 3, 5],
        explanation: "Zdravstveni, biometrijski i svjetonazorski podaci uživaju posebnu zaštitu (čl. 5 DSG). Ime, adresa, datum rođenja i zanimanje su obični osobni podaci.",
      },
      {
        question: "Što obuhvaća obrada podataka prema DSG-u?",
        type: "multi",
        options: ["Prikupljanje", "Prijenos", "Arhiviranje", "Pohrana", "Brisanje", "Korištenje"],
        correctIndexes: [0, 1, 2, 3, 4, 5],
        explanation: "Obrada podataka obuhvaća sve operacije s osobnim podacima — od prikupljanja do konačnog brisanja.",
      },
    ],
  },
  {
    id: 2,
    title: "Načela zaštite podataka",
    emoji: "⚖️",
    description: "Razumijte temeljna načela koja uređuju obradu osobnih podataka.",
    learnContent: [
      {
        heading: "Namjena i minimizacija podataka",
        text: "Namjena — podaci se smiju prikupljati i obrađivati samo u određene, jasne i legitimne svrhe. Minimizacija podataka — smiju se prikupljati samo podaci koji su zaista nužni za konkretnu svrhu.",
        infoBox: {
          variant: "merksatz",
          title: "Za zapamtiti",
          text: "Samo nužni podaci — i isključivo za svrhu za koju su prikupljeni.",
        },
      },
      {
        heading: "Transparentnost i pravo na pristup",
        text: "Transparentnost — pogođene osobe moraju moći znati koji se njihovi podaci obrađuju i u koje svrhe. Pravo na pristup — imaju pravo dobiti informacije o podacima koji su o njima evidentirani.",
      },
      {
        heading: "Točnost i ažurnost",
        text: "Podaci moraju biti točni i ažurni. Netočni ili zastarjeli podaci moraju se ispraviti ili izbrisati.",
      },
    ],
    quiz: [
      {
        question: "Moraju li pogođene osobe biti obaviještene o obrađivanim podacima i svrhama?",
        type: "single",
        options: ["Ne", "Samo ako osoba to zatraži", "Da"],
        correctIndexes: [2],
        explanation: "To zahtijeva načelo transparentnosti — pogođene osobe moraju biti obaviještene na zahtjev.",
      },
      {
        question: "Što znači načelo minimizacije podataka?",
        type: "single",
        options: ["Smiju se prikupljati samo podaci nužni za konkretnu svrhu", "Podaci su zaštićeni od neovlaštenog pristupa", "Podaci se smiju obrađivati samo u određene i legitimne svrhe"],
        correctIndexes: [0],
        explanation: "Minimizacija podataka znači: što manje podataka. Treća mogućnost opisuje načelo namjene.",
      },
    ],
  },
  {
    id: 3,
    title: "Prava pogođenih osoba",
    emoji: "👤",
    description: "Upoznajte prava koja osobe imaju prema tvrtki.",
    learnContent: [
      {
        heading: "Pravo na pristup",
        text: "Pogođene osobe mogu u svakom trenutku zatražiti informacije o obradi svojih podataka. Zahtjev obrađuje službenik za zaštitu podataka, koji pruža informacije u roku od 30 dana.",
      },
      {
        heading: "Pravo na ispravak i brisanje",
        text: "Ispravak — pogođene osobe mogu zatražiti ispravak netočnih podataka. Brisanje — mogu zatražiti brisanje ako podaci više nisu potrebni ili su obrađivani nezakonito.",
      },
      {
        heading: "Pravo na ograničenje obrade",
        text: "Pogođene osobe mogu zatražiti da se njihovi podaci obrađuju samo na ograničen način — na primjer ako osporavaju njihovu točnost.",
      },
      {
        heading: "Pravo na prigovor i prenosivost podataka",
        text: "Prigovor — pogođene osobe mogu uložiti prigovor na obradu zbog razloga koji se odnose na njihovu konkretnu situaciju. Prenosivost — mogu zatražiti da se njihovi podaci prenesu u strukturiranom, uobičajeno korištenom i strojno čitljivom formatu.",
        infoBox: {
          variant: "merksatz",
          title: "Šest prava",
          text: "Pristup, ispravak, brisanje, ograničenje obrade, prigovor i prenosivost podataka.",
        },
      },
    ],
    quiz: [
      {
        question: "Koja prava imaju pogođene osobe u pogledu svojih podataka?",
        type: "single",
        options: ["Samo pravo na pristup", "Pristup, ispravak, brisanje, ograničenje obrade, prigovor i prenosivost podataka", "Nikakva posebna prava"],
        correctIndexes: [1],
        explanation: "DSG pogođenim osobama dodjeljuje svih šest navedenih prava.",
      },
      {
        question: "U kojem roku mora biti odobren pristup?",
        type: "single",
        options: ["7 dana", "30 dana", "90 dana"],
        correctIndexes: [1],
        explanation: "Pristup se u pravilu odobrava u roku od 30 dana.",
      },
    ],
  },
  {
    id: 4,
    title: "Obveze tvrtke i zaposlenika",
    emoji: "📢",
    description: "Upoznajte svoje obveze i postupak prijave u slučaju povrede podataka.",
    learnContent: [
      {
        heading: "Procesi u skladu sa zaštitom podataka",
        text: "Tvrtka mora uspostaviti procese koji osiguravaju poštivanje svih načela zaštite podataka u svakodnevnom poslovanju. MS Direct Group posjeduje certifikat kvalitete «GoodPrivacy» od SQS-a, koji potvrđuje odgovarajući sustav upravljanja zaštitom podataka.",
        infoBox: {
          variant: "merksatz",
          title: "GoodPrivacy",
          text: "GoodPrivacy (SQS) certificira da MS Direct Group ima verificiran sustav upravljanja zaštitom podataka.",
        },
      },
      {
        heading: "Odgovornosti zaposlenika",
        text: "Svaki zaposlenik suodgovoran je za zaštitu podataka s kojima radi. Svi sudjeluju u osposobljavanjima i poštuju smjernice o zaštiti podataka.",
        infoBox: {
          variant: "merksatz",
          title: "Za zapamtiti",
          text: "Zaštita podataka je timski posao — nije isključiva odgovornost IT odjela.",
        },
      },
      {
        heading: "Obveze tvrtke",
        text: "Tvrtka provodi tehničke i organizacijske mjere (TOM), vodi evidenciju aktivnosti obrade i integrira zaštitu podataka već u razvoj novih procesa (zaštita podataka po dizajnu).",
      },
      {
        heading: "Obveze obavješćivanja u slučaju povrede",
        text: "Interno — incidenti ili sumnje na incidente moraju se odmah prijaviti službeniku za zaštitu podataka ili neposrednom nadređenom. Eksterno — obavješćivanje nadzornog tijela (PFPDT) i pogođenih osoba provodi službenik, po potrebi, i uvijek bez odgode.",
        infoBox: {
          variant: "warnung",
          title: "Pravilo 72 sata",
          text: "Tvrtka ima samo 72 sata od otkrivanja povrede da je prijavi PFPDT-u — odmah stoga prijavite interno!",
        },
      },
    ],
    quiz: [
      {
        question: "Što morate učiniti ako otkrijete povredu zaštite podataka?",
        type: "single",
        options: ["Pričekati da li će netko drugi primijetiti", "Ispraviti sami bez obavješćivanja ikoga", "Odmah obavijestiti neposrednog nadređenog ili službenika za zaštitu podataka", "Poslati e-mail svim zaposlenicima"],
        correctIndexes: [2],
        explanation: "Hitna interna prijava je ključna. Tvrtka ima samo 72 sata za prijavu PFPDT-u. Ispraviti sami i šutjeti nije opcija — pogoršava situaciju.",
      },
      {
        question: "Što znači «zaštita podataka po dizajnu»?",
        type: "single",
        options: ["Zaštita podataka dodaje se naknadno u slučaju problema", "Zaštita podataka integrirana je u sustave i procese od samog početka", "Samo IT odjel odgovoran je za zaštitu podataka"],
        correctIndexes: [1],
        explanation: "Zaštita podataka po dizajnu znači da je sastavni dio svakog procesa i sustava od samog početka — jednako kao sigurnost ili kvaliteta.",
      },
      {
        question: "Što je evidencija aktivnosti obrade (čl. 12 DSG)?",
        type: "single",
        options: ["Popis svih zaposlenika s pristupom podacima", "Dokumentacija svih aktivnosti obrade podataka u tvrtki", "Registar svih povreda u posljednjih 5 godina"],
        correctIndexes: [1],
        explanation: "Evidencija aktivnosti obrade (čl. 12 DSG) sustavno dokumentira sve aktivnosti obrade: koje podatke, u koje svrhe, tko, koliko dugo. To je ključni instrument usklađenosti.",
      },
    ],
  },
  {
    id: 5,
    title: "IT sigurnost i zaštita podataka",
    emoji: "🔒",
    description: "Prepoznajte tipične IT rizike i naučite spriječiti povrede u svakodnevnoj praksi.",
    learnContent: [
      {
        heading: "Načela IT sigurnosti na radnom mjestu",
        text: "Vrijede jasna pravila: koristiti sigurne lozinke, zaključati računalo pri odlasku i ne instalirati nepoznati softver.",
      },
      {
        heading: "Sigurne lozinke i upravljanje lozinkama",
        text: "Koristite duge i složene lozinke s velikim slovima, malim slovima, brojevima i posebnim znakovima — jedinstvenu lozinku za svaku uslugu. Upravitelj lozinkama olakšava sigurno pohranjivanje i upravljanje.",
        infoBox: {
          variant: "merksatz",
          title: "Savjet",
          text: "Win + L (Windows) ili Ctrl + Cmd + Q (Mac) trenutno zaključava zaslon — čak i pri kratkoj odsutnosti.",
        },
      },
      {
        heading: "Prepoznavanje phishinga i socijalnog inženjeringa",
        text: "Phishing e-mailovi oponašaju prave pošiljatelje i traže vjerodajnice ili klikove na poveznice. U sumnji, obrišite e-mail umjesto da riskirate — nikada ne klikajte na poveznice ili privitke i kontaktirajte IT podršku.",
        infoBox: {
          variant: "warnung",
          title: "Stvarnost",
          text: "Više od 80 % svih povreda zaštite podataka uzrokovano je ljudskim pogreškama, a ne tehničkim IT napadima.",
        },
      },
      {
        heading: "Što činiti ✅",
        text: "Zaključati zaslon pri napuštanju radne stanice. Koristiti VPN pri radu od kuće i na javnim Wi-Fi mrežama. Sigurne lozinke + dvofaktorska autentifikacija (2FA). Odmah prijaviti IT podršci sumnjive e-mailove.",
      },
      {
        heading: "Što ne činiti ❌",
        text: "Bez lozinke na post-itu zalijepljenom na monitor. Bez slanja korisničkih podataka putem WhatsAppa ili osobnog e-maila. Bez javnog Wi-Fi-ja bez VPN-a. Bez ostavljanja osjetljivih dokumenata bez nadzora.",
        infoBox: {
          variant: "warnung",
          title: "Nikad",
          text: "NIKADA ne zapisujte svoje lozinke — ni na post-ite ni u nezaštićene datoteke. I: NIKADA ne ostavljajte laptop otključan i bez nadzora, čak ni «samo na trenutak».",
        },
      },
    ],
    quiz: [
      {
        question: "Primate e-mail s adrese 'hr@ms-direct.ch' koji traži potvrdu lozinke. Što činite?",
        type: "single",
        options: ["Klikam na poveznicu i unosim svoju lozinku", "Ignoriram e-mail i brišem ga", "Odmah prijavljujem e-mail IT podršci"],
        correctIndexes: [2],
        explanation: "Riječ je o klasičnom phishingu. Nikada ne klikajte na poveznice niti unosite lozinke. Uvijek prijavite — čak i ako se čini bezazlenim. Brisanje nije dovoljno.",
      },
      {
        question: "Koje mjere učinkovito štite osobne podatke?",
        type: "multi",
        options: ["Lozinka na post-itu na monitoru", "Zaključati zaslon pri napuštanju radne stanice", "Koristiti VPN pri radu od kuće", "Dijeliti korisničke podatke putem WhatsAppa", "Sigurne lozinke + aktiviran 2FA"],
        correctIndexes: [1, 2, 4],
        explanation: "Zaključavanje zaslona, VPN i 2FA temeljne su sigurnosne mjere. Lozinke na post-itima i WhatsApp za korisničke podatke su očite povrede.",
      },
      {
        question: "Gdje se lozinka NE smije čuvati?",
        type: "multi",
        options: ["U šifriranom upravitelju lozinkama", "Na post-itu na monitoru", "U nezaštićenoj tekstualnoj datoteci na radnoj površini", "U pamćenju"],
        correctIndexes: [1, 2],
        explanation: "Lozinke na post-itima ili u nezaštićenim datotekama predstavljaju ozbiljan sigurnosni rizik. Samo šifrirani upravitelji ili pamćenje su sigurne mogućnosti.",
      },
      {
        question: "Morate se kratko udaljiti od radne stanice. Što činite s laptopom?",
        type: "single",
        options: ["Ostavljam ga otvorenim — udaljavat ću se samo na trenutak", "Zatvorim samo trenutni dokument", "Zaključavam zaslon (Win+L / Ctrl+Cmd+Q)"],
        correctIndexes: [2],
        explanation: "Čak i kratka odsutnost dovoljna je za neovlašteni pristup. Zaključavanje je jednostavno (Win+L u Windowsima, Ctrl+Cmd+Q na Macu) i apsolutno nužno.",
      },
    ],
  },
  {
    id: 6,
    title: "Interni kontakti i kanali prijave",
    emoji: "📞",
    description: "Znajte kome se obratiti s pitanjima i u slučaju incidenta.",
    learnContent: [
      {
        heading: "Kome se obratiti?",
        text: "Službenik za zaštitu podataka MS Direct Grupe je Myrio Kluser. Možete ga kontaktirati na myrio.kluser@qmart.ch. On je Vaš kontakt za pitanja i probleme vezane uz zaštitu podataka, zahtjeve pogođenih osoba za informacijama i incidente vezane uz zaštitu podataka.",
        infoBox: {
          variant: "merksatz",
          title: "U slučaju sumnje",
          text: "U slučaju sumnje, ne odlučujte sami — obratite se službeniku za zaštitu podataka.",
        },
      },
      {
        heading: "Kako prijaviti incident?",
        text: "Incidente vezane uz zaštitu podataka ili sumnje na incidente odmah prijavite interno službeniku ili Vašem neposrednom nadređenom. Što brže se prijavi, bolje može reagirati tvrtka — ima samo 72 sata za vanjsku prijavu PFPDT-u.",
      },
    ],
    quiz: [
      {
        question: "Kome prvo prijavljujete incident vezan uz zaštitu podataka?",
        type: "single",
        options: ["Izravno PFPDT-u", "Internom službeniku za zaštitu podataka ili neposrednom nadređenom", "E-mailom svim zaposlenicima"],
        correctIndexes: [1],
        explanation: "Uvijek prvo prijavite interno. Vanjsku prijavu PFPDT-u provodi službenik za zaštitu podataka.",
      },
      {
        question: "Tko je službenik za zaštitu podataka MS Direct Grupe?",
        type: "single",
        options: ["Myrio Kluser", "IT odjel", "Uprava"],
        correctIndexes: [0],
        explanation: "Myrio Kluser (myrio.kluser@qmart.ch) je središnji kontakt za pitanja zaštite podataka.",
      },
    ],
  },
  {
    id: 7,
    title: "Završni kviz",
    emoji: "🏆",
    description: "Pokažite što ste naučili! 5 pitanja iz svih modula — možete to!",
    learnContent: [],
    quiz: [
      {
        question: "Od kada je na snazi revidirani Savezni zakon o zaštiti podataka (DSG)?",
        type: "single",
        options: ["25. svibnja 2018.", "1. siječnja 2022.", "1. rujna 2023."],
        correctIndexes: [2],
        explanation: "Revidirani DSG stupio je na snagu 1. rujna 2023. — gotovo 5 godina nakon europskog GDPR-a.",
      },
      {
        question: "Što NIJE posebno osjetljiv osobni podatak?",
        type: "single",
        options: ["HIV status", "Podaci otisaka prstiju", "Poslovna e-mail adresa"],
        correctIndexes: [2],
        explanation: "Poslovne e-mail adrese su obični osobni podaci. HIV status (zdravlje) i podaci otisaka prstiju (biometrija) posebno su osjetljivi prema čl. 5 DSG.",
      },
      {
        question: "Koje je ponašanje sigurno pri radu od kuće?",
        type: "single",
        options: ["Pohraniti korisničke podatke na privatni USB disk", "Aktivirati VPN i zaključati zaslon pri napuštanju prostorije", "Ostaviti poslovni laptop otključan pri kratkoj odsutnosti"],
        correctIndexes: [1],
        explanation: "VPN + zaključan zaslon apsolutna su osnova pri radu od kuće. Privatni USB diskovi i otključani uređaji su očite sigurnosne povrede.",
      },
      {
        question: "U kojoj lhůtě tvrtka mora prijaviti povredu zaštite podataka PFPDT-u?",
        type: "single",
        options: ["7 dana", "72 sata", "30 dana"],
        correctIndexes: [1],
        explanation: "Rok od 72 sata primjenjuje se analogno s europskim GDPR-om. Zato internu prijavu treba obaviti odmah.",
      },
      {
        question: "Što učiniti pri sumnji na phishing?",
        type: "single",
        options: ["Jednostavno obrisati e-mail i zaboraviti ga", "Kliknuti na poveznicu da provjeri je li zaista phishing", "Prijaviti IT podršci i pričekati upute"],
        correctIndexes: [2],
        explanation: "Uvijek prijavite phishing IT podršci — čak i ako se čini bezazlenim. Brisanje nije dovoljno. Nikada ne klikajte na sumnjive poveznice!",
      },
    ],
  },
];
