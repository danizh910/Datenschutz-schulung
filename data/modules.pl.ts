import type { Module } from './module-types';

export const modules: Module[] = [
  {
    id: 1,
    title: "Wprowadzenie do ochrony danych",
    emoji: "🛡️",
    description: "Poznaj podstawy ochrony danych i szwajcarską ustawę DSG.",
    videoId: "bGHo6ahlXTI",
    learnContent: [
      {
        heading: "Znaczenie i ważność ochrony danych",
        text: "Ochrona danych chroni prawa osobiste i wolności pracowników, klientów i użytkowników końcowych. Dotyczy wszelkiego przetwarzania danych osobowych: zbierania, przechowywania, wykorzystywania, przekazywania, archiwizowania lub usuwania.",
        infoBox: {
          variant: "warnung",
          title: "Uwaga",
          text: "Umyślne naruszenia przez osoby fizyczne mogą skutkować karami do CHF 250 000 (art. 60–63 DSG). Nieznajomość prawa nie chroni przed sankcjami.",
        },
      },
      {
        heading: "Podstawowe pojęcia ochrony danych",
        text: "Dane osobowe to informacje dotyczące zidentyfikowanej lub możliwej do zidentyfikowania osoby fizycznej — na przykład imię i nazwisko, adres, data urodzenia, adres e-mail lub adres IP.",
        infoBox: {
          variant: "merksatz",
          title: "Do zapamiętania",
          text: "Adresy IP i identyfikatory urządzeń również są danymi osobowymi, ponieważ umożliwiają identyfikację.",
        },
      },
      {
        heading: "Szczególnie wrażliwe dane osobowe",
        text: "Szczególnej ochrony wymagają dane dotyczące przekonań religijnych, światopoglądowych, politycznych lub związkowych; stanu zdrowia, sfery intymnej i przynależności etnicznej; postępowań karnych i administracyjnych oraz środków pomocy społecznej. Zaliczają się do nich również dane biometryczne (art. 5 DSG).",
      },
      {
        heading: "Podstawa prawna",
        text: "W Szwajcarii znowelizowana federalna ustawa o ochronie danych (DSG) obowiązuje od 1 września 2023 r. Jest dostosowana do europejskiego RODO i wzmacnia prawa osób, których dane dotyczą.",
        infoBox: {
          variant: "merksatz",
          title: "Do zapamiętania",
          text: "Kluczowe są trzy zasady: tylko niezbędne dane (proporcjonalność), tylko do zadeklarowanego celu (celowość) i osoby, których dane dotyczą, muszą być informowane (przejrzystość).",
        },
      },
    ],
    quiz: [
      {
        question: "Które dane osobowe są szczególnie wrażliwe?",
        type: "multi",
        options: ["Imię i nazwisko oraz adres", "Data urodzenia", "Informacje o stanie zdrowia", "Odcisk palca (dane biometryczne)", "Zawód", "Przynależność religijna"],
        correctIndexes: [2, 3, 5],
        explanation: "Dane dotyczące zdrowia, dane biometryczne i światopoglądowe podlegają szczególnej ochronie (art. 5 DSG). Imię i nazwisko, adres, data urodzenia i zawód to zwykłe dane osobowe.",
      },
      {
        question: "Co obejmuje przetwarzanie danych zgodnie z DSG?",
        type: "multi",
        options: ["Zbieranie", "Przekazywanie", "Archiwizowanie", "Przechowywanie", "Usuwanie", "Wykorzystywanie"],
        correctIndexes: [0, 1, 2, 3, 4, 5],
        explanation: "Przetwarzanie danych obejmuje wszelkie operacje na danych osobowych — od zbierania aż do ostatecznego usunięcia.",
      },
    ],
  },
  {
    id: 2,
    title: "Zasady ochrony danych",
    emoji: "⚖️",
    description: "Poznaj podstawowe zasady rządzące przetwarzaniem danych osobowych.",
    learnContent: [
      {
        heading: "Celowość i minimalizacja danych",
        text: "Celowość — dane mogą być zbierane i przetwarzane wyłącznie w określonych, wyraźnych i prawnie uzasadnionych celach. Minimalizacja danych — można zbierać jedynie te dane, które są rzeczywiście niezbędne do osiągnięcia konkretnego celu.",
        infoBox: {
          variant: "merksatz",
          title: "Do zapamiętania",
          text: "Tylko niezbędne dane — i wyłącznie w celu, dla którego zostały zebrane.",
        },
      },
      {
        heading: "Przejrzystość i prawo dostępu",
        text: "Przejrzystość — osoby, których dane dotyczą, muszą mieć możliwość wiedzieć, jakie ich dane są przetwarzane i w jakich celach. Prawo dostępu — mają prawo uzyskać informacje o danych zarejestrowanych na ich temat.",
      },
      {
        heading: "Prawidłowość i aktualność",
        text: "Dane muszą być prawidłowe i aktualne. Nieprawidłowe lub nieaktualne dane należy poprawić lub usunąć.",
      },
    ],
    quiz: [
      {
        question: "Czy osoby, których dane dotyczą, muszą być informowane o przetwarzanych danych i celach?",
        type: "single",
        options: ["Nie", "Tylko na żądanie osoby", "Tak"],
        correctIndexes: [2],
        explanation: "Wymaga tego zasada przejrzystości — osoby, których dane dotyczą, muszą być informowane na żądanie.",
      },
      {
        question: "Co oznacza zasada minimalizacji danych?",
        type: "single",
        options: ["Można zbierać tylko dane niezbędne do konkretnego celu", "Dane są chronione przed nieuprawnionym dostępem", "Dane mogą być przetwarzane tylko w określonych i prawnie uzasadnionych celach"],
        correctIndexes: [0],
        explanation: "Minimalizacja danych oznacza: jak najmniej danych. Trzecia opcja opisuje zasadę celowości.",
      },
    ],
  },
  {
    id: 3,
    title: "Prawa osób, których dane dotyczą",
    emoji: "👤",
    description: "Poznaj prawa, jakie osoby mają wobec firmy.",
    learnContent: [
      {
        heading: "Prawo dostępu",
        text: "Osoby, których dane dotyczą, mogą w każdej chwili wnioskować o informacje na temat przetwarzania ich danych. Wniosek obsługuje inspektor ochrony danych, który udziela informacji w terminie 30 dni.",
      },
      {
        heading: "Prawo do sprostowania i usunięcia danych",
        text: "Sprostowanie — osoby, których dane dotyczą, mogą wnioskować o poprawienie nieprawidłowych danych. Usunięcie — mogą wnioskować o usunięcie, jeżeli dane nie są już potrzebne lub były przetwarzane niezgodnie z prawem.",
      },
      {
        heading: "Prawo do zablokowania danych",
        text: "Osoby, których dane dotyczą, mogą wnioskować o zablokowanie swoich danych — na przykład jeżeli kwestionują ich prawidłowość lub jeżeli przetwarzanie jest niezgodne z prawem (wywodzi się z ochrony dóbr osobistych, art. 32 DSG).",
      },
      {
        heading: "Wydanie danych (art. 28 DSG)",
        text: "Osoby, których dane dotyczą, mogą wnioskować o wydanie swoich danych w powszechnie używanym formacie elektronicznym — pod warunkiem że dane są przetwarzane automatycznie i cel na to pozwala.",
        infoBox: {
          variant: "merksatz",
          title: "Główne prawa wynikające ze szwajcarskiego DSG",
          text: "Prawo dostępu (art. 25), sprostowanie/usunięcie/zablokowanie (art. 32) i wydanie danych (art. 28). Szwajcarski DSG nie przewiduje wyraźnego prawa do sprzeciwu jak RODO UE.",
        },
      },
    ],
    quiz: [
      {
        question: "Jakie prawa przewiduje szwajcarski DSG dla osób, których dane dotyczą?",
        type: "single",
        options: ["Wyłącznie prawo dostępu", "Dostęp, sprostowanie/usunięcie/zablokowanie i wydanie danych", "Dostęp, sprostowanie, usunięcie, ograniczenie przetwarzania, sprzeciw i przenoszalność danych (jak RODO UE)"],
        correctIndexes: [1],
        explanation: "Szwajcarski DSG przyznaje prawo dostępu (art. 25), sprostowanie/usunięcie/zablokowanie (art. 32) i wydanie danych (art. 28). Szwajcarski DSG nie przewiduje wyraźnego prawa do sprzeciwu ani ograniczenia jak RODO UE.",
      },
      {
        question: "W jakim terminie należy udzielić dostępu?",
        type: "single",
        options: ["7 dni", "30 dni", "90 dni"],
        correctIndexes: [1],
        explanation: "Dostęp jest zazwyczaj udzielany w terminie 30 dni.",
      },
    ],
  },
  {
    id: 4,
    title: "Obowiązki firmy i pracowników",
    emoji: "📢",
    description: "Poznaj swoje obowiązki i procedurę zgłaszania naruszeń ochrony danych.",
    learnContent: [
      {
        heading: "Procesy zgodne z ochroną danych",
        text: "Firma musi wdrożyć procesy zapewniające przestrzeganie wszystkich zasad ochrony danych w codziennej działalności. MS Direct Group posiada certyfikat jakości «GoodPrivacy» od SQS, który potwierdza odpowiedni system zarządzania ochroną danych.",
        infoBox: {
          variant: "merksatz",
          title: "GoodPrivacy",
          text: "GoodPrivacy (SQS) certyfikuje, że MS Direct Group posiada zweryfikowany system zarządzania ochroną danych.",
        },
      },
      {
        heading: "Odpowiedzialności pracowników",
        text: "Każdy pracownik współodpowiada za ochronę danych, z którymi pracuje. Wszyscy uczestniczą w szkoleniach i przestrzegają wytycznych dotyczących ochrony danych.",
        infoBox: {
          variant: "merksatz",
          title: "Do zapamiętania",
          text: "Ochrona danych to praca zespołowa — nie jest wyłączną odpowiedzialnością działu IT.",
        },
      },
      {
        heading: "Obowiązki firmy",
        text: "Firma wdraża techniczne i organizacyjne środki bezpieczeństwa (TOŚ), prowadzi rejestr czynności przetwarzania i uwzględnia ochronę danych już na etapie tworzenia nowych procesów (ochrona danych w fazie projektowania).",
      },
      {
        heading: "Obowiązki zgłaszania w przypadku naruszenia",
        text: "Wewnętrznie — incydenty lub podejrzenia incydentów należy niezwłocznie zgłosić inspektorowi ochrony danych lub bezpośredniemu przełożonemu. Zewnętrznie — czy i kiedy dokonać zgłoszenia do organu nadzorczego (PFPDT) lub do osób, których dane dotyczą, ocenia i decyduje inspektor ochrony danych.",
        infoBox: {
          variant: "warnung",
          title: "Obowiązek zgłaszania",
          text: "Niezwłocznie zgłoś wewnętrznie każdy incydent lub podejrzenie incydentu związanego z ochroną danych. Inspektor ochrony danych oceni, czy zgłoszenie do PFPDT jest konieczne. Jeśli zgłoszenie jest wymagane, musi zostać dokonane jak najszybciej.",
        },
      },
    ],
    quiz: [
      {
        question: "Co należy zrobić po wykryciu naruszenia ochrony danych?",
        type: "single",
        options: ["Zaczekać, czy ktoś inny to zauważy", "Samodzielnie naprawić bez informowania kogokolwiek", "Niezwłocznie poinformować bezpośredniego przełożonego lub inspektora ochrony danych", "Wysłać e-mail do wszystkich pracowników"],
        correctIndexes: [2],
        explanation: "Natychmiastowe wewnętrzne zgłoszenie jest kluczowe. Szwajcarski DSG nie przewiduje sztywnego terminu 72 godzin — to zasada europejskiego RODO. Naruszenia niosące wysokie ryzyko muszą być zgłoszone do PFPDT jak najszybciej. Samodzielne naprawienie w milczeniu nie jest opcją.",
      },
      {
        question: "Co oznacza «ochrona danych w fazie projektowania»?",
        type: "single",
        options: ["Ochrona danych jest dodawana po fakcie w razie problemów", "Ochrona danych jest zintegrowana z systemami i procesami od samego początku", "Tylko dział IT odpowiada za ochronę danych"],
        correctIndexes: [1],
        explanation: "Ochrona danych w fazie projektowania oznacza, że stanowi integralną część każdego procesu i systemu od samego początku — tak samo jak bezpieczeństwo czy jakość.",
      },
      {
        question: "Czym jest rejestr czynności przetwarzania (art. 12 DSG)?",
        type: "single",
        options: ["Listą wszystkich pracowników mających dostęp do danych", "Dokumentacją wszystkich czynności przetwarzania danych w firmie", "Rejestrem wszystkich naruszeń z ostatnich 5 lat"],
        correctIndexes: [1],
        explanation: "Rejestr czynności przetwarzania (art. 12 DSG) systematycznie dokumentuje wszystkie czynności przetwarzania: jakie dane, w jakim celu, przez kogo, przez jaki czas. Jest kluczowym narzędziem zgodności.",
      },
    ],
  },
  {
    id: 5,
    title: "Bezpieczeństwo IT i ochrona danych",
    emoji: "🔒",
    description: "Rozpoznaj typowe zagrożenia IT i naucz się zapobiegać naruszeniom w codziennej pracy.",
    learnContent: [
      {
        heading: "Zasady bezpieczeństwa IT w miejscu pracy",
        text: "Obowiązują jasne zasady: używać bezpiecznych haseł, blokować komputer podczas nieobecności i nie instalować nieznanego oprogramowania.",
      },
      {
        heading: "Bezpieczne hasła i zarządzanie hasłami",
        text: "Używaj długich i złożonych haseł z dużymi literami, małymi literami, cyframi i znakami specjalnymi — unikalne hasło dla każdej usługi. Menedżer haseł ułatwia bezpieczne przechowywanie i zarządzanie.",
        infoBox: {
          variant: "merksatz",
          title: "Wskazówka",
          text: "Win + L (Windows) lub Ctrl + Cmd + Q (Mac) natychmiast blokuje ekran — nawet przy krótkim odejściu od komputera.",
        },
      },
      {
        heading: "Rozpoznawanie phishingu i inżynierii społecznej",
        text: "Wiadomości phishingowe podszywają się pod prawdziwych nadawców i żądają danych logowania lub kliknięcia w łącze. W razie wątpliwości usuń wiadomość zamiast ryzykować — nigdy nie klikaj w łącza ani załączniki i skontaktuj się z pomocą IT.",
        infoBox: {
          variant: "warnung",
          title: "Rzeczywistość",
          text: "Ponad 80 % wszystkich naruszeń ochrony danych jest spowodowanych błędami ludzkimi, a nie technicznymi atakami IT.",
        },
      },
      {
        heading: "Co robić ✅",
        text: "Blokować ekran przy opuszczaniu stanowiska pracy. Używać VPN podczas pracy zdalnej i w publicznych sieciach Wi-Fi. Silne hasła + uwierzytelnianie dwuskładnikowe (2FA). Niezwłocznie zgłaszać podejrzane wiadomości do pomocy IT.",
      },
      {
        heading: "Czego nie robić ❌",
        text: "Bez hasła na karteczce przyklejonej do monitora. Bez przesyłania danych klientów przez WhatsApp lub prywatny e-mail. Bez publicznego Wi-Fi bez VPN. Bez pozostawiania wrażliwych dokumentów bez nadzoru.",
        infoBox: {
          variant: "warnung",
          title: "Nigdy",
          text: "NIGDY nie zapisuj swoich haseł — ani na karteczkach, ani w niezabezpieczonych plikach. I: NIGDY nie pozostawiaj laptopa odblokowanego i bez nadzoru, nawet na «chwilę».",
        },
      },
    ],
    quiz: [
      {
        question: "Otrzymujesz e-mail z adresu 'hr@ms-direct.ch' z prośbą o potwierdzenie hasła. Co robisz?",
        type: "single",
        options: ["Klikam w łącze i wpisuję swoje hasło", "Ignoruję wiadomość i usuwam ją", "Niezwłocznie zgłaszam wiadomość do pomocy IT"],
        correctIndexes: [2],
        explanation: "To klasyczny phishing. Nigdy nie klikaj w łącza ani nie wpisuj haseł. Zawsze zgłaszaj — nawet jeśli wydaje się niegroźny. Usunięcie nie wystarczy.",
      },
      {
        question: "Które środki skutecznie chronią dane osobowe?",
        type: "multi",
        options: ["Hasło na karteczce przyklejonej do monitora", "Blokowanie ekranu przy opuszczaniu stanowiska", "Używanie VPN podczas pracy zdalnej", "Udostępnianie danych klientów przez WhatsApp", "Silne hasła + aktywowane 2FA"],
        correctIndexes: [1, 2, 4],
        explanation: "Blokowanie ekranu, VPN i 2FA to podstawowe środki bezpieczeństwa. Hasła na karteczkach i WhatsApp dla danych klientów to oczywiste naruszenia.",
      },
      {
        question: "Gdzie hasło NIE powinno być przechowywane?",
        type: "multi",
        options: ["W szyfrowanym menedżerze haseł", "Na karteczce przyklejonej do monitora", "W niezabezpieczonym pliku tekstowym na pulpicie", "W pamięci"],
        correctIndexes: [1, 2],
        explanation: "Hasła na karteczkach lub w niezabezpieczonych plikach stanowią poważne zagrożenie bezpieczeństwa. Bezpiecznymi opcjami są wyłącznie szyfrowane menedżery lub pamięć.",
      },
      {
        question: "Musisz na chwilę odejść od stanowiska pracy. Co robisz z laptopem?",
        type: "single",
        options: ["Zostawiam otwarty — odchodzę tylko na chwilę", "Zamykam tylko bieżący dokument", "Blokuję ekran (Win+L / Ctrl+Cmd+Q)"],
        correctIndexes: [2],
        explanation: "Nawet krótka nieobecność wystarczy do nieuprawnionego dostępu. Blokowanie jest proste (Win+L w systemie Windows, Ctrl+Cmd+Q na Macu) i absolutnie niezbędne.",
      },
    ],
  },
  {
    id: 6,
    title: "Wewnętrzne kontakty i kanały zgłaszania",
    emoji: "📞",
    description: "Wiedz, do kogo się zgłaszać z pytaniami i w przypadku incydentu.",
    learnContent: [
      {
        heading: "Do kogo się zgłosić?",
        text: "Inspektorem ochrony danych w MS Direct Group jest Myrio Kluser. Możesz skontaktować się z nim pod adresem myrio.kluser@qmart.ch. Jest Twoim kontaktem w sprawach dotyczących ochrony danych, żądań informacji od osób, których dane dotyczą, i incydentów związanych z ochroną danych.",
        infoBox: {
          variant: "merksatz",
          title: "W razie wątpliwości",
          text: "W razie wątpliwości nie decyduj samodzielnie — skontaktuj się z inspektorem ochrony danych.",
        },
      },
      {
        heading: "Jak zgłosić incydent?",
        text: "Incydenty związane z ochroną danych lub podejrzenia incydentów zgłaszaj niezwłocznie wewnętrznie inspektorowi lub bezpośredniemu przełożonemu. Im szybsze zgłoszenie, tym lepiej firma może zareagować. Inspektor ochrony danych ocenia, czy i kiedy konieczne jest zewnętrzne zgłoszenie do PFPDT.",
      },
    ],
    quiz: [
      {
        question: "Komu w pierwszej kolejności zgłaszasz incydent związany z ochroną danych?",
        type: "single",
        options: ["Bezpośrednio do PFPDT", "Wewnętrznemu inspektorowi ochrony danych lub bezpośredniemu przełożonemu", "E-mailem do wszystkich pracowników"],
        correctIndexes: [1],
        explanation: "Zawsze zgłaszaj najpierw wewnętrznie. Zewnętrzne zgłoszenie do PFPDT zapewnia inspektor ochrony danych.",
      },
      {
        question: "Kto jest inspektorem ochrony danych w MS Direct Group?",
        type: "single",
        options: ["Myrio Kluser", "Dział IT", "Zarząd"],
        correctIndexes: [0],
        explanation: "Myrio Kluser (myrio.kluser@qmart.ch) jest centralnym kontaktem w sprawach ochrony danych.",
      },
    ],
  },
  {
    id: 7,
    title: "Quiz końcowy",
    emoji: "🏆",
    description: "Pokaż, czego się nauczyłeś! 5 pytań ze wszystkich modułów — dasz radę!",
    learnContent: [],
    quiz: [
      {
        question: "Od kiedy obowiązuje znowelizowana federalna ustawa o ochronie danych (DSG)?",
        type: "single",
        options: ["25 maja 2018 r.", "1 stycznia 2022 r.", "1 września 2023 r."],
        correctIndexes: [2],
        explanation: "Znowelizowany DSG wszedł w życie 1 września 2023 r. — prawie 5 lat po europejskim RODO.",
      },
      {
        question: "Co NIE jest szczególnie wrażliwą daną osobową?",
        type: "single",
        options: ["Status HIV", "Dane odcisków palców", "Służbowy adres e-mail"],
        correctIndexes: [2],
        explanation: "Służbowe adresy e-mail to zwykłe dane osobowe. Status HIV (zdrowie) i dane odcisków palców (biometria) są szczególnie wrażliwe zgodnie z art. 5 DSG.",
      },
      {
        question: "Jakie zachowanie jest bezpieczne podczas pracy zdalnej?",
        type: "single",
        options: ["Przechowywać dane klientów na prywatnym dysku USB", "Aktywować VPN i blokować ekran przy opuszczaniu pokoju", "Zostawić służbowy laptop odblokowany podczas krótkiej nieobecności"],
        correctIndexes: [1],
        explanation: "VPN + zablokowany ekran to absolutna podstawa podczas pracy zdalnej. Prywatne dyski USB i odblokowane urządzenia to oczywiste naruszenia bezpieczeństwa.",
      },
      {
        question: "Czego wymaga szwajcarski DSG w zakresie zgłaszania naruszenia ochrony danych do PFPDT?",
        type: "single",
        options: ["Sztywnego terminu 72 godzin, jak w europejskim RODO", "Naruszeń ochrony danych nigdy nie trzeba zgłaszać zewnętrznie", "Zgłoszenia należy dokonać jak najszybciej, jeśli istnieje wysokie ryzyko"],
        correctIndexes: [2],
        explanation: "Szwajcarski DSG NIE przewiduje sztywnego terminu 72 godzin — to zasada europejskiego RODO. Naruszenia mogące powodować wysokie ryzyko dla osobowości lub praw podstawowych muszą być zgłaszane do PFPDT jak najszybciej.",
      },
      {
        question: "Co zrobić w przypadku podejrzenia phishingu?",
        type: "single",
        options: ["Po prostu usunąć wiadomość i zapomnieć o sprawie", "Kliknąć w łącze, żeby sprawdzić, czy to naprawdę phishing", "Zgłosić do pomocy IT i poczekać na instrukcje"],
        correctIndexes: [2],
        explanation: "Zawsze zgłaszaj phishing do pomocy IT — nawet jeśli wydaje się niegroźny. Usunięcie nie wystarczy. Nigdy nie klikaj w podejrzane łącza!",
      },
    ],
  },
];
