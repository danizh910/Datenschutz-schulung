import type { Module } from './module-types';

export const modules: Module[] = [
  {
    id: 1,
    title: "Introduzione alla protezione dei dati",
    emoji: "🛡️",
    description: "Scopra i fondamenti della protezione dei dati e la LPD svizzera.",
    videoId: "bGHo6ahlXTI",
    learnContent: [
      {
        heading: "Rilevanza e importanza della protezione dei dati",
        text: "La protezione dei dati tutela i diritti e le libertà personali di collaboratori, clienti e utenti finali. È interessata ogni operazione di trattamento di dati personali: raccolta, conservazione, utilizzo, trasmissione, archiviazione o cancellazione.",
        infoBox: {
          variant: "warnung",
          title: "Attenzione",
          text: "Anche le violazioni non intenzionali possono comportare sanzioni fino a CHF 250.000 — l'ignoranza non protegge dalle conseguenze.",
        },
      },
      {
        heading: "Nozioni fondamentali della protezione dei dati",
        text: "I dati personali sono informazioni relative a una persona fisica identificata o identificabile — ad esempio nome, indirizzo, data di nascita, indirizzo e-mail o indirizzo IP.",
        infoBox: {
          variant: "merksatz",
          title: "Da ricordare",
          text: "Anche gli indirizzi IP e gli identificatori di dispositivi sono dati personali perché consentono l'identificazione.",
        },
      },
      {
        heading: "Dati personali degni di particolare protezione",
        text: "Godono di protezione speciale i dati concernenti le convinzioni religiose, ideologiche, politiche o sindacali; la salute, la sfera intima e l'appartenenza etnica; le procedure penali e amministrative nonché le misure di assistenza sociale. Vi rientrano anche i dati biometrici (art. 5 LPD).",
      },
      {
        heading: "Base legale",
        text: "In Svizzera, la Legge federale sulla protezione dei dati (LPD) riveduta è in vigore dal 1° settembre 2023. Si allinea al GDPR europeo e rafforza i diritti degli interessati.",
        infoBox: {
          variant: "merksatz",
          title: "Da ricordare",
          text: "Tre principi sono fondamentali: solo i dati necessari (proporzionalità), solo per la finalità dichiarata (finalità) e gli interessati devono essere informati (trasparenza).",
        },
      },
    ],
    quiz: [
      {
        question: "Quali sono i dati personali degni di particolare protezione?",
        type: "multi",
        options: ["Nome e indirizzo", "Data di nascita", "Informazioni sulla salute", "Impronta digitale (dati biometrici)", "Professione", "Appartenenza religiosa"],
        correctIndexes: [2, 3, 5],
        explanation: "I dati sanitari, biometrici e ideologici godono di protezione speciale (art. 5 LPD). Nome, indirizzo, data di nascita e professione sono dati personali ordinari.",
      },
      {
        question: "Cosa comprende il trattamento dei dati secondo la LPD?",
        type: "multi",
        options: ["Raccolta", "Trasmissione", "Archiviazione", "Conservazione", "Cancellazione", "Utilizzo"],
        correctIndexes: [0, 1, 2, 3, 4, 5],
        explanation: "Il trattamento dei dati comprende qualsiasi operazione su dati personali — dalla raccolta fino alla cancellazione definitiva.",
      },
    ],
  },
  {
    id: 2,
    title: "Principi della protezione dei dati",
    emoji: "⚖️",
    description: "Comprenda i principi fondamentali che regolano il trattamento dei dati personali.",
    learnContent: [
      {
        heading: "Finalità e minimizzazione dei dati",
        text: "Finalità — i dati possono essere raccolti e trattati solo per scopi determinati, espliciti e legittimi. Minimizzazione dei dati — possono essere raccolti esclusivamente i dati effettivamente necessari per la specifica finalità.",
        infoBox: {
          variant: "merksatz",
          title: "Da ricordare",
          text: "Solo i dati necessari — e solo per la finalità per cui sono stati raccolti.",
        },
      },
      {
        heading: "Trasparenza e diritto di accesso",
        text: "Trasparenza — gli interessati devono poter sapere quali dati che li riguardano sono trattati e per quali finalità. Diritto di accesso — hanno il diritto di ottenere informazioni sui dati registrati su di loro.",
      },
      {
        heading: "Esattezza e aggiornamento",
        text: "I dati devono essere corretti e aggiornati. I dati inesatti o obsoleti devono essere corretti o cancellati.",
      },
    ],
    quiz: [
      {
        question: "Gli interessati devono essere informati dei dati trattati e delle finalità?",
        type: "single",
        options: ["No", "Solo se la persona lo richiede", "Sì"],
        correctIndexes: [2],
        explanation: "Lo esige il principio di trasparenza — gli interessati devono essere informati su richiesta.",
      },
      {
        question: "Cosa significa il principio di minimizzazione dei dati?",
        type: "single",
        options: ["Possono essere raccolti solo i dati necessari per la specifica finalità", "I dati sono protetti da accessi non autorizzati", "I dati possono essere trattati solo per scopi determinati e legittimi"],
        correctIndexes: [0],
        explanation: "Minimizzazione dei dati significa: il minor numero possibile di dati. La terza opzione descrive la finalità.",
      },
    ],
  },
  {
    id: 3,
    title: "Diritti degli interessati",
    emoji: "👤",
    description: "Conosca i diritti che le persone vantano nei confronti dell'azienda.",
    learnContent: [
      {
        heading: "Diritto di accesso",
        text: "Gli interessati possono richiedere in qualsiasi momento informazioni sul trattamento dei loro dati. La richiesta è gestita dal responsabile della protezione dei dati, che fornisce le informazioni entro 30 giorni.",
      },
      {
        heading: "Diritto di rettifica e cancellazione",
        text: "Rettifica — gli interessati possono richiedere la correzione di dati inesatti. Cancellazione — possono richiedere la cancellazione se i dati non sono più necessari o sono stati trattati illecitamente.",
      },
      {
        heading: "Diritto di limitazione del trattamento",
        text: "Gli interessati possono richiedere che i loro dati siano trattati solo in modo limitato — ad esempio se ne contestano l'esattezza.",
      },
      {
        heading: "Diritto di opposizione e portabilità dei dati",
        text: "Opposizione — gli interessati possono opporsi al trattamento per ragioni attinenti alla loro situazione particolare. Portabilità — possono richiedere che i loro dati siano trasmessi in un formato strutturato, di uso comune e leggibile da dispositivo automatico.",
        infoBox: {
          variant: "merksatz",
          title: "I sei diritti",
          text: "Accesso, rettifica, cancellazione, limitazione, opposizione e portabilità dei dati.",
        },
      },
    ],
    quiz: [
      {
        question: "Quali diritti hanno gli interessati sui propri dati?",
        type: "single",
        options: ["Solo il diritto di accesso", "Accesso, rettifica, cancellazione, limitazione, opposizione e portabilità dei dati", "Nessun diritto particolare"],
        correctIndexes: [1],
        explanation: "La LPD riconosce agli interessati tutti e sei i diritti menzionati.",
      },
      {
        question: "Entro quale termine deve essere concesso l'accesso?",
        type: "single",
        options: ["7 giorni", "30 giorni", "90 giorni"],
        correctIndexes: [1],
        explanation: "L'accesso viene generalmente concesso entro 30 giorni.",
      },
    ],
  },
  {
    id: 4,
    title: "Obblighi dell'azienda e dei collaboratori",
    emoji: "📢",
    description: "Conosca i Suoi obblighi e la procedura di segnalazione in caso di violazione.",
    learnContent: [
      {
        heading: "Processi conformi alla protezione dei dati",
        text: "L'azienda deve implementare processi che garantiscano tutti i principi di protezione dei dati nelle operazioni quotidiane. MS Direct Group è titolare del marchio di qualità «GoodPrivacy» di SQS, che attesta un adeguato sistema di gestione della protezione dei dati.",
        infoBox: {
          variant: "merksatz",
          title: "GoodPrivacy",
          text: "GoodPrivacy (SQS) certifica che MS Direct Group dispone di un sistema di gestione della protezione dei dati verificato.",
        },
      },
      {
        heading: "Responsabilità dei collaboratori",
        text: "Ogni collaboratore è corresponsabile della protezione dei dati con cui lavora. Tutti partecipano alle formazioni e rispettano le direttive sulla protezione dei dati.",
        infoBox: {
          variant: "merksatz",
          title: "Da ricordare",
          text: "La protezione dei dati è un lavoro di squadra — non è responsabilità esclusiva del reparto IT.",
        },
      },
      {
        heading: "Obblighi dell'azienda",
        text: "L'azienda implementa misure tecniche e organizzative (MTO), tiene un registro delle attività di trattamento e integra la protezione dei dati già nello sviluppo di nuovi processi (protezione dei dati fin dalla progettazione).",
      },
      {
        heading: "Obblighi di notifica in caso di violazione",
        text: "Internamente — gli incidenti o i sospetti di incidente devono essere segnalati immediatamente al responsabile della protezione dei dati o al superiore gerarchico. Esternamente — se e quando notificare all'autorità di vigilanza (IFPDT) o agli interessati lo decide il responsabile della protezione dei dati.",
        infoBox: {
          variant: "warnung",
          title: "Obbligo di notifica",
          text: "Segnali immediatamente all'interno qualsiasi incidente o sospetto relativo alla protezione dei dati. Il responsabile valuta se è necessaria una notifica all'IFPDT. Se la notifica è necessaria, deve avvenire il prima possibile.",
        },
      },
    ],
    quiz: [
      {
        question: "Cosa deve fare se riscontra una violazione dei dati?",
        type: "single",
        options: ["Attendere per vedere se qualcun altro se ne accorge", "Correggere da soli senza informare nessuno", "Informare immediatamente il superiore gerarchico o il responsabile della protezione dei dati", "Inviare un'e-mail a tutti i collaboratori"],
        correctIndexes: [2],
        explanation: "La segnalazione interna tempestiva è fondamentale. La LPD svizzera non prevede un termine fisso di 72 ore — questa è una regola del GDPR europeo. Le violazioni con rischio elevato devono essere notificate all'IFPDT il prima possibile. Correggere da soli tacendo non è un'opzione.",
      },
      {
        question: "Cosa significa «protezione dei dati fin dalla progettazione»?",
        type: "single",
        options: ["La protezione dei dati viene aggiunta a posteriori in caso di problemi", "La protezione dei dati è integrata sin dall'inizio nei sistemi e nei processi", "Solo il reparto IT è responsabile della protezione dei dati"],
        correctIndexes: [1],
        explanation: "Protezione dei dati fin dalla progettazione significa che essa fa parte integrante di ogni processo e sistema sin dall'inizio — come la sicurezza o la qualità.",
      },
      {
        question: "Cos'è un registro delle attività di trattamento (art. 12 LPD)?",
        type: "single",
        options: ["Un elenco di tutti i collaboratori con accesso ai dati", "Una documentazione di tutte le attività di trattamento dei dati dell'azienda", "Un registro di tutte le violazioni degli ultimi 5 anni"],
        correctIndexes: [1],
        explanation: "Il registro delle attività di trattamento (art. 12 LPD) documenta sistematicamente tutte le attività di trattamento: quali dati, per quale finalità, da chi, per quanto tempo. È uno strumento centrale di conformità.",
      },
    ],
  },
  {
    id: 5,
    title: "Sicurezza informatica e protezione dei dati",
    emoji: "🔒",
    description: "Identifichi i rischi informatici tipici e impari a prevenire le violazioni nella quotidianità.",
    learnContent: [
      {
        heading: "Principi di sicurezza informatica sul posto di lavoro",
        text: "Si applicano regole chiare: utilizzare password sicure, bloccare il computer in caso di assenza e non installare software sconosciuto.",
      },
      {
        heading: "Password sicure e gestione delle password",
        text: "Utilizzi password lunghe e complesse con lettere maiuscole, minuscole, numeri e caratteri speciali — una password univoca per ogni servizio. Un gestore di password facilita la memorizzazione e la gestione sicure.",
        infoBox: {
          variant: "merksatz",
          title: "Suggerimento",
          text: "Win + L (Windows) o Ctrl + Cmd + Q (Mac) blocca lo schermo all'istante — anche in caso di breve assenza.",
        },
      },
      {
        heading: "Riconoscere il phishing e il social engineering",
        text: "Le e-mail di phishing imitano mittenti reali e richiedono credenziali o clic su link. In caso di dubbio, elimini l'e-mail invece di rischiare — non clicchi mai su link o allegati e contatti il supporto IT.",
        infoBox: {
          variant: "warnung",
          title: "Realtà",
          text: "Oltre l'80 % di tutte le violazioni dei dati è causato da errori umani, non da attacchi informatici tecnici.",
        },
      },
      {
        heading: "Cosa fare ✅",
        text: "Bloccare lo schermo quando si lascia la postazione di lavoro. Usare la VPN in smart working e sulle reti Wi-Fi pubbliche. Password sicure + autenticazione a due fattori (2FA). Segnalare immediatamente al supporto IT le e-mail sospette.",
      },
      {
        heading: "Cosa non fare ❌",
        text: "Non scrivere la password su un post-it attaccato al monitor. Non inviare dati di clienti tramite WhatsApp o e-mail personale. Non usare reti Wi-Fi pubbliche senza VPN. Non lasciare documenti sensibili incustoditi.",
        infoBox: {
          variant: "warnung",
          title: "Mai",
          text: "Non scriva MAI le Sue password — né su post-it né in file non protetti. E: non lasci MAI il Suo laptop sbloccato e incustodito, nemmeno «solo per un momento».",
        },
      },
    ],
    quiz: [
      {
        question: "Riceve un'e-mail da 'hr@ms-direct.ch' che Le chiede di confermare la password. Cosa fa?",
        type: "single",
        options: ["Clicco sul link e inserisco la mia password", "Ignoro l'e-mail e la elimino", "Segnalo immediatamente l'e-mail al supporto IT"],
        correctIndexes: [2],
        explanation: "È phishing classico. Non clicchi mai su link né inserisca password. Segnali sempre — anche se sembra innocuo. Eliminare non è sufficiente.",
      },
      {
        question: "Quali misure proteggono efficacemente i dati personali?",
        type: "multi",
        options: ["Password su un post-it attaccato al monitor", "Bloccare lo schermo quando si lascia la postazione", "Usare la VPN in smart working", "Condividere dati di clienti tramite WhatsApp", "Password sicure + 2FA attivato"],
        correctIndexes: [1, 2, 4],
        explanation: "Il blocco dello schermo, la VPN e il 2FA sono misure di sicurezza fondamentali. Le password sui post-it e WhatsApp per i dati dei clienti sono violazioni manifeste.",
      },
      {
        question: "Dove NON deve essere conservata una password?",
        type: "multi",
        options: ["In un gestore di password cifrato", "Su un post-it attaccato al monitor", "In un file di testo non protetto sul desktop", "Nella propria memoria"],
        correctIndexes: [1, 2],
        explanation: "Le password su post-it o in file non protetti rappresentano un grave rischio per la sicurezza. Solo i gestori cifrati o la memoria sono opzioni sicure.",
      },
      {
        question: "Deve assentarsi brevemente dalla postazione di lavoro. Cosa fa con il Suo laptop?",
        type: "single",
        options: ["Lo lascio aperto — mi assento solo un momento", "Chiudo solo il documento corrente", "Blocco lo schermo (Win+L / Ctrl+Cmd+Q)"],
        correctIndexes: [2],
        explanation: "Anche una breve assenza è sufficiente per un accesso non autorizzato. Il blocco è semplice (Win+L su Windows, Ctrl+Cmd+Q su Mac) ed assolutamente necessario.",
      },
    ],
  },
  {
    id: 6,
    title: "Interlocutori interni e canali di segnalazione",
    emoji: "📞",
    description: "Sappia a chi rivolgersi per domande e in caso di incidente.",
    learnContent: [
      {
        heading: "A chi mi rivolgo?",
        text: "Il responsabile della protezione dei dati di MS Direct Group è Myrio Kluser. Può contattarlo all'indirizzo myrio.kluser@qmart.ch. È il Suo interlocutore per domande e problemi relativi alla protezione dei dati, richieste di informazioni da parte degli interessati e incidenti legati alla protezione dei dati.",
        infoBox: {
          variant: "merksatz",
          title: "In caso di dubbio",
          text: "In caso di dubbio, non decida da sola/solo — contatti il responsabile della protezione dei dati.",
        },
      },
      {
        heading: "Come segnalare un incidente?",
        text: "Segnali immediatamente all'interno gli incidenti relativi alla protezione dei dati o i sospetti di incidente al responsabile o al Suo superiore gerarchico. Prima avviene la segnalazione, meglio l'azienda può reagire. Il responsabile della protezione dei dati valuta se e quando è necessaria una notifica all'IFPDT.",
      },
    ],
    quiz: [
      {
        question: "A chi segnala per primo un incidente relativo alla protezione dei dati?",
        type: "single",
        options: ["Direttamente all'IFPDT", "Al responsabile interno della protezione dei dati o al superiore gerarchico", "Per e-mail a tutti i collaboratori"],
        correctIndexes: [1],
        explanation: "Segnali sempre prima all'interno. La notifica esterna all'IFPDT è curata dal responsabile della protezione dei dati.",
      },
      {
        question: "Chi è il responsabile della protezione dei dati di MS Direct Group?",
        type: "single",
        options: ["Myrio Kluser", "Il reparto IT", "La direzione"],
        correctIndexes: [0],
        explanation: "Myrio Kluser (myrio.kluser@qmart.ch) è l'interlocutore centrale per le questioni relative alla protezione dei dati.",
      },
    ],
  },
  {
    id: 7,
    title: "Quiz finale",
    emoji: "🏆",
    description: "Dimostri ciò che ha imparato! 5 domande da tutti i moduli — ce la fa!",
    learnContent: [],
    quiz: [
      {
        question: "Da quando è in vigore la Legge federale sulla protezione dei dati (LPD) riveduta?",
        type: "single",
        options: ["25 maggio 2018", "1° gennaio 2022", "1° settembre 2023"],
        correctIndexes: [2],
        explanation: "La LPD riveduta è entrata in vigore il 1° settembre 2023 — quasi 5 anni dopo il GDPR europeo.",
      },
      {
        question: "Cosa NON è un dato personale degno di particolare protezione?",
        type: "single",
        options: ["Stato HIV", "Dati delle impronte digitali", "Indirizzo e-mail aziendale"],
        correctIndexes: [2],
        explanation: "Gli indirizzi e-mail aziendali sono dati personali ordinari. Lo stato HIV (salute) e i dati delle impronte digitali (biometria) sono degni di particolare protezione ai sensi dell'art. 5 LPD.",
      },
      {
        question: "Qual è il comportamento sicuro nel lavoro da remoto?",
        type: "single",
        options: ["Salvare i dati dei clienti su una chiavetta USB privata", "Attivare la VPN e bloccare lo schermo quando si lascia la stanza", "Lasciare il laptop aziendale sbloccato in caso di breve assenza"],
        correctIndexes: [1],
        explanation: "VPN + schermo bloccato sono la base assoluta nel lavoro da remoto. Le chiavette USB private e i dispositivi sbloccati sono violazioni della sicurezza manifeste.",
      },
      {
        question: "Cosa prevede la LPD svizzera per la notifica di una violazione dei dati all'IFPDT?",
        type: "single",
        options: ["Un termine fisso di 72 ore, come nel GDPR europeo", "Le violazioni dei dati non devono mai essere segnalate esternamente", "La notifica deve avvenire il prima possibile se esiste un rischio elevato"],
        correctIndexes: [2],
        explanation: "La LPD svizzera NON prevede un termine fisso di 72 ore — questa è una regola del GDPR europeo. Le violazioni che probabilmente comportano un rischio elevato per la personalità o i diritti fondamentali devono essere notificate all'IFPDT il prima possibile.",
      },
      {
        question: "Cosa deve fare in caso di sospetto phishing?",
        type: "single",
        options: ["Semplicemente eliminare l'e-mail e dimenticarsene", "Cliccare sul link per verificare se si tratta davvero di phishing", "Segnalare al supporto IT e attendere le istruzioni"],
        correctIndexes: [2],
        explanation: "Segnali sempre il phishing al supporto IT — anche se sembra innocuo. Eliminare non è sufficiente. Non clicchi mai su link sospetti!",
      },
    ],
  },
];
