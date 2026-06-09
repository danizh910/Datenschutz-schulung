import type { Module } from './module-types';

export const modules: Module[] = [
  {
    id: 1,
    title: 'Einführung in den Datenschutz',
    emoji: '🛡️',
    description: 'Lerne die Grundlagen des Datenschutzes und das Schweizer DSG kennen.',
    videoId: 'bGHo6ahlXTI',
    learnContent: [
      {
        heading: 'Relevanz und Bedeutung des Datenschutzes',
        text: 'Datenschutz wahrt die persönlichen Rechte und Freiheiten von Mitarbeitenden, Kunden und Endkunden. Jeder Umgang mit Personendaten zählt dazu – das Beschaffen, Aufbewahren, Nutzen, Übermitteln, Archivieren oder Löschen.',
        infoBox: {
          variant: 'warnung',
          title: 'Achtung',
          text: 'Auch unabsichtliche Verstösse können zu Bussen von bis zu CHF 250\'000 führen – Unwissenheit schützt nicht vor Strafe.',
        },
      },
      {
        heading: 'Grundbegriffe des Datenschutzes',
        text: 'Personendaten sind Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen – z.B. Name, Adresse, Geburtsdatum, E-Mail- und IP-Adresse.',
        infoBox: {
          variant: 'merksatz',
          title: 'Merksatz',
          text: 'Auch IP-Adressen und Gerätekennungen sind Personendaten, weil sie eine Identifikation erlauben.',
        },
      },
      {
        heading: 'Besonders schützenswerte Personendaten',
        text: 'Besonders geschützt sind Daten über religiöse, weltanschauliche, politische oder gewerkschaftliche Ansichten; Gesundheit, Intimsphäre und Zugehörigkeit zu einer Ethnie; verwaltungs- und strafrechtliche Verfolgungen sowie Massnahmen der sozialen Hilfe. Neu zählen auch biometrische Daten dazu (Art. 5 DSG).',
      },
      {
        heading: 'Rechtliche Grundlage',
        text: 'In der Schweiz gilt das revidierte Datenschutzgesetz (DSG), in Kraft seit dem 1. September 2023. Es orientiert sich an der EU-DSGVO und stärkt die Rechte der betroffenen Personen.',
        infoBox: {
          variant: 'merksatz',
          title: 'Merksatz',
          text: 'Drei Prinzipien sind zentral – nur so viele Daten wie nötig (Verhältnismässigkeit), nur für den angegebenen Zweck (Zweckbindung) und die Betroffenen müssen informiert sein (Transparenz).',
        },
      },
    ],
    quiz: [
      {
        question: 'Was sind besonders schützenswerte Personendaten?',
        type: 'multi',
        options: ['Name und Adresse', 'Geburtsdatum', 'Gesundheitsinformationen', 'Fingerabdruck (biometrische Daten)', 'Beruf', 'Religionszugehörigkeit'],
        correctIndexes: [2, 3, 5],
        explanation: 'Gesundheits-, biometrische und weltanschauliche Daten sind besonders schützenswert (Art. 5 DSG). Name, Adresse, Geburtsdatum und Beruf sind normale Personendaten.',
      },
      {
        question: 'Was zählt laut DSG alles zur Datenbearbeitung?',
        type: 'multi',
        options: ['Beschaffung', 'Übermittlung', 'Archivierung', 'Aufbewahrung', 'Löschung', 'Nutzung'],
        correctIndexes: [0, 1, 2, 3, 4, 5],
        explanation: 'Datenbearbeitung umfasst jeden Umgang mit Personendaten – vom Beschaffen über Nutzen und Übermitteln bis zum Archivieren und Löschen.',
      },
    ],
  },
  {
    id: 2,
    title: 'Grundsätze des Datenschutzes',
    emoji: '⚖️',
    description: 'Verstehe die Kernprinzipien, nach denen Personendaten bearbeitet werden dürfen.',
    learnContent: [
      {
        heading: 'Zweckbindung und Datenminimierung',
        text: 'Zweckbindung – Daten dürfen nur für festgelegte, eindeutige und legitime Zwecke erhoben und verarbeitet werden. Datenminimierung – es dürfen nur die Daten erhoben werden, die für den jeweiligen Zweck wirklich nötig sind.',
        infoBox: {
          variant: 'merksatz',
          title: 'Merksatz',
          text: 'Nur so viele Daten wie nötig – und nur für den Zweck, für den sie erhoben wurden.',
        },
      },
      {
        heading: 'Transparenz und Auskunftsrecht',
        text: 'Transparenz – Betroffene müssen auf Anfrage erfahren, welche ihrer Daten zu welchen Zwecken verarbeitet werden. Auskunftsrecht – sie haben das Recht, Auskunft über die zu ihrer Person gespeicherten Daten zu erhalten.',
      },
      {
        heading: 'Richtigkeit und Aktualität',
        text: 'Daten müssen korrekt und auf dem neuesten Stand sein. Unrichtige oder veraltete Daten sind zu berichtigen oder zu löschen.',
      },
    ],
    quiz: [
      {
        question: 'Müssen betroffene Personen erfahren, welche Daten zu welchen Zwecken verarbeitet werden?',
        type: 'single',
        options: ['Nein', 'Nur, wenn die Person dies verlangt', 'Ja'],
        correctIndexes: [2],
        explanation: 'Das verlangt der Transparenzgrundsatz – Betroffene müssen auf Anfrage informiert werden.',
      },
      {
        question: 'Was besagt der Grundsatz der Datenminimierung?',
        type: 'single',
        options: ['Es dürfen nur die Daten erhoben werden, die für den jeweiligen Zweck nötig sind', 'Daten werden vor unbefugtem Zugriff geschützt', 'Daten dürfen nur für festgelegte, legitime Zwecke verarbeitet werden'],
        correctIndexes: [0],
        explanation: 'Datenminimierung heisst: so wenig Daten wie möglich. Die dritte Option beschreibt die Zweckbindung.',
      },
    ],
  },
  {
    id: 3,
    title: 'Rechte der betroffenen Personen',
    emoji: '👤',
    description: 'Kenne die Rechte, die Betroffene gegenüber dem Unternehmen haben.',
    learnContent: [
      {
        heading: 'Auskunftsrecht',
        text: 'Betroffene können jederzeit Auskunft über die Verarbeitung ihrer Daten verlangen. Der Antrag läuft über den Datenschutzbeauftragten, der die Auskunft innerhalb von 30 Tagen bereitstellt.',
      },
      {
        heading: 'Recht auf Berichtigung und Löschung',
        text: 'Berichtigung – Betroffene können die Korrektur unrichtiger Daten verlangen. Löschung – sie können die Löschung verlangen, wenn die Daten nicht mehr nötig sind oder unrechtmässig verarbeitet wurden.',
      },
      {
        heading: 'Recht auf Einschränkung der Verarbeitung',
        text: 'Betroffene können verlangen, dass ihre Daten nur noch eingeschränkt verarbeitet werden – etwa wenn sie die Richtigkeit bestreiten.',
      },
      {
        heading: 'Widerspruchsrecht und Datenübertragbarkeit',
        text: 'Widerspruch – Betroffene können der Verarbeitung aus Gründen ihrer besonderen Situation widersprechen. Datenübertragbarkeit – sie können verlangen, dass ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format übermittelt werden.',
        infoBox: {
          variant: 'merksatz',
          title: 'Die sechs Rechte',
          text: 'Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit.',
        },
      },
    ],
    quiz: [
      {
        question: 'Welche Rechte haben betroffene Personen in Bezug auf ihre Daten?',
        type: 'single',
        options: ['Nur das Recht auf Auskunft', 'Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit', 'Keine besonderen Rechte'],
        correctIndexes: [1],
        explanation: 'Das DSG gibt Betroffenen alle sechs genannten Rechte.',
      },
      {
        question: 'Innerhalb welcher Frist muss eine Auskunft bereitgestellt werden?',
        type: 'single',
        options: ['7 Tage', '30 Tage', '90 Tage'],
        correctIndexes: [1],
        explanation: 'Die Auskunft erfolgt grundsätzlich innerhalb von 30 Tagen.',
      },
    ],
  },
  {
    id: 4,
    title: 'Pflichten des Unternehmens und der Mitarbeitenden',
    emoji: '📢',
    description: 'Kenne deine Pflichten und den richtigen Meldeweg bei einer Datenpanne.',
    learnContent: [
      {
        heading: 'Datenschutzkonforme Prozesse',
        text: 'Das Unternehmen muss Prozesse implementieren, die alle Datenschutzgrundsätze im täglichen Betrieb sicherstellen. Die MS Direct Group verfügt über das Datenschutzgütesiegel «GoodPrivacy» der SQS, das ihr ein adäquates Datenschutz-Managementsystem attestiert.',
        infoBox: {
          variant: 'merksatz',
          title: 'GoodPrivacy',
          text: 'GoodPrivacy (SQS) bescheinigt der MS Direct Group ein geprüftes Datenschutz-Managementsystem.',
        },
      },
      {
        heading: 'Verantwortlichkeiten der Mitarbeitenden',
        text: 'Jede Mitarbeiterin und jeder Mitarbeiter ist für den Schutz der Daten mitverantwortlich, mit denen sie arbeiten. Alle nehmen an Schulungen teil und halten die Datenschutzrichtlinien ein.',
        infoBox: {
          variant: 'merksatz',
          title: 'Merksatz',
          text: 'Datenschutz ist Teamarbeit – nicht nur die IT-Abteilung ist verantwortlich.',
        },
      },
      {
        heading: 'Pflichten des Unternehmens',
        text: 'Das Unternehmen ergreift technische und organisatorische Massnahmen (TOM), führt ein Bearbeitungsverzeichnis und berücksichtigt Datenschutz bereits bei der Entwicklung neuer Prozesse (Privacy by Design).',
      },
      {
        heading: 'Meldepflichten bei Datenschutzverletzungen',
        text: 'Intern – Vorfälle oder deren Verdacht sofort an den Datenschutzbeauftragten oder die vorgesetzte Person melden. Extern – die Meldung an die Aufsichtsbehörde (EDÖB) und an Betroffene erfolgt durch den Datenschutzbeauftragten, sofern nötig, und immer zeitnah.',
        infoBox: {
          variant: 'warnung',
          title: '72-Stunden-Regel',
          text: 'Das Unternehmen hat nach Entdeckung einer Datenpanne nur 72 Stunden für die Meldung an den EDÖB – deshalb sofort intern melden!',
        },
      },
    ],
    quiz: [
      {
        question: 'Was musst du tun, wenn du eine Datenpanne bemerkst?',
        type: 'single',
        options: ['Abwarten und schauen ob jemand anderes es bemerkt', 'Die Panne selbst beheben und niemandem sagen', 'Sofort die vorgesetzte Person oder den Datenschutzbeauftragten informieren', 'Eine E-Mail an alle Mitarbeitenden schicken'],
        correctIndexes: [2],
        explanation: 'Schnelles internes Melden ist entscheidend. Das Unternehmen hat nur 72 Stunden für die EDÖB-Meldung. Selbst "reparieren" und schweigen ist keine Option – das macht es schlimmer.',
      },
      {
        question: "Was bedeutet 'Privacy by Design'?",
        type: 'single',
        options: ['Datenschutz wird nachträglich ergänzt wenn Probleme auftauchen', 'Datenschutz wird von Anfang an in Systeme und Prozesse eingebaut', 'Nur die IT-Abteilung ist für Datenschutz zuständig'],
        correctIndexes: [1],
        explanation: 'Privacy by Design heisst: Datenschutz ist kein nachträgliches Add-on, sondern von Beginn an Teil jedes Prozesses und Systems – genau wie Sicherheit oder Qualität.',
      },
      {
        question: 'Was ist ein Bearbeitungsverzeichnis (Art. 12 DSG)?',
        type: 'single',
        options: ['Eine Liste aller Mitarbeitenden, die Zugang zu Daten haben', 'Eine Dokumentation aller Datenbearbeitungstätigkeiten im Unternehmen', 'Ein Register aller Datenpannen der letzten 5 Jahre'],
        correctIndexes: [1],
        explanation: 'Das Bearbeitungsverzeichnis (Art. 12 DSG) dokumentiert systematisch alle Datenbearbeitungstätigkeiten: Welche Daten, für welchen Zweck, von wem, wie lange. Es ist ein zentrales Instrument des datenschutzkonformen Betriebs.',
      },
    ],
  },
  {
    id: 5,
    title: 'IT-Sicherheit und Datenschutz',
    emoji: '🔒',
    description: 'Erkenne typische IT-Risiken und lerne, wie du Datenpannen im Alltag vermeidest.',
    learnContent: [
      {
        heading: 'Grundsätze der IT-Sicherheit am Arbeitsplatz',
        text: 'Es gelten klare Richtlinien – sichere Passwörter verwenden, den Computer bei Abwesenheit sperren und keine unbekannte Software installieren.',
      },
      {
        heading: 'Sichere Passwörter und deren Verwaltung',
        text: 'Verwende lange, komplexe Passwörter mit Gross- und Kleinbuchstaben, Zahlen und Sonderzeichen – für jeden Dienst ein eigenes. Ein Passwortmanager hilft beim sicheren Speichern und Verwalten.',
        infoBox: {
          variant: 'merksatz',
          title: 'Tipp',
          text: 'Win + L (Windows) oder Ctrl + Cmd + Q (Mac) sperrt den Bildschirm sofort – auch wenn du nur kurz aufstehst.',
        },
      },
      {
        heading: 'Phishing und Social Engineering erkennen',
        text: 'Phishing-Mails imitieren echte Absender und fordern Login-Daten oder Klicks auf Links. Im Zweifel die Mail lieber einmal zu viel löschen, nie auf Links oder Anhänge klicken und beim IT-Support nachfragen.',
        infoBox: {
          variant: 'warnung',
          title: 'Alltag',
          text: 'Über 80% aller Datenpannen entstehen durch menschliche Fehler, nicht durch technische Hackerangriffe.',
        },
      },
      {
        heading: "Dos ✅",
        text: 'Bildschirm sperren beim Verlassen des Arbeitsplatzes. VPN nutzen im Homeoffice und bei öffentlichem WLAN. Starke Passwörter + Zwei-Faktor-Authentifizierung (2FA). Verdächtige Mails sofort dem IT-Support melden.',
      },
      {
        heading: "Don'ts ❌",
        text: 'Kein Passwort auf Notizzettel am Monitor. Keine Kundendaten per WhatsApp oder privater E-Mail. Kein öffentliches WLAN ohne VPN. Keine sensiblen Dokumente unbeaufsichtigt liegen lassen.',
        infoBox: {
          variant: 'warnung',
          title: 'Niemals',
          text: "Schreibe Passwörter NIEMALS auf – weder auf Notizzetteln noch in ungesicherten Dateien. Und: Lass deinen Laptop NIE ungesperrt und unbeaufsichtigt, auch nicht «nur kurz».",
        },
      },
    ],
    quiz: [
      {
        question: "Du erhältst eine E-Mail von 'hr@ms-direct.ch' mit der Bitte, dein Passwort zu bestätigen. Was tust du?",
        type: 'single',
        options: ['Ich klicke auf den Link und gebe mein Passwort ein', 'Ich ignoriere die Mail und lösche sie einfach', 'Ich melde die Mail sofort dem IT-Support'],
        correctIndexes: [2],
        explanation: 'Das ist klassisches Phishing. Niemals auf Links klicken oder Passwörter eingeben. Immer melden – auch wenn es vielleicht harmlos wirkt. Einfach löschen reicht nicht, der IT-Support muss reagieren können.',
      },
      {
        question: 'Welche Massnahmen schützen Personendaten effektiv?',
        type: 'multi',
        options: ['Passwort auf Notizzettel am Monitor', 'Bildschirm sperren beim Verlassen', 'VPN bei Heimarbeit nutzen', 'Kundendaten per WhatsApp teilen', 'Starke Passwörter + 2FA aktivieren'],
        correctIndexes: [1, 2, 4],
        explanation: 'Bildschirm sperren, VPN und 2FA sind grundlegende Schutzmassnahmen. Passwörter auf Notizzetteln und WhatsApp für Kundendaten sind klare Sicherheitsverstösse.',
      },
      {
        question: 'Wo darf ein Passwort NICHT aufbewahrt werden?',
        type: 'multi',
        options: ['In einem verschlüsselten Passwort-Manager', 'Auf einem Notizzettel am Monitor', 'In einer ungesicherten Textdatei auf dem Desktop', 'Im Gedächtnis'],
        correctIndexes: [1, 2],
        explanation: 'Passwörter auf Notizzetteln oder in ungesicherten Dateien sind ein massives Sicherheitsrisiko. Nur verschlüsselte Passwort-Manager oder das eigene Gedächtnis sind sichere Optionen.',
      },
      {
        question: 'Du musst kurz aufstehen und dein Büro verlassen. Was tust du mit deinem Laptop?',
        type: 'single',
        options: ['Ich lasse ihn offen – ich bin ja nur kurz weg', 'Ich schliesse nur das Dokument, das ich bearbeite', 'Ich sperre den Bildschirm (Win+L / Ctrl+Cmd+Q)'],
        correctIndexes: [2],
        explanation: 'Auch eine kurze Abwesenheit reicht für unbefugten Zugriff. Bildschirm sperren ist einfach (Win+L auf Windows, Ctrl+Cmd+Q auf Mac) und absolut notwendig.',
      },
    ],
  },
  {
    id: 6,
    title: 'Interne Ansprechpartner und Meldestellen',
    emoji: '📞',
    description: 'Weiss, an wen du dich bei Fragen und Vorfällen wenden kannst.',
    learnContent: [
      {
        heading: 'An wen wende ich mich?',
        text: 'Der Datenschutzbeauftragte der MS Direct Group ist Myrio Kluser. Du erreichst ihn unter myrio.kluser@qmart.ch. Er ist dein Ansprechpartner bei Datenschutzfragen und -problemen, bei Anfragen zur Beauskunftung von Betroffenen und bei Datenschutzvorfällen.',
        infoBox: {
          variant: 'merksatz',
          title: 'Bei Unsicherheit',
          text: 'Bei Unsicherheit nicht selbst entscheiden – den Datenschutzbeauftragten kontaktieren.',
        },
      },
      {
        heading: 'Wie melde ich einen Vorfall?',
        text: 'Datenschutzvorfälle oder deren Verdacht meldest du sofort intern an den Datenschutzbeauftragten oder deine vorgesetzte Person. Je schneller die Meldung, desto besser kann reagiert werden – das Unternehmen hat nur 72 Stunden für die externe Meldung an den EDÖB.',
      },
    ],
    quiz: [
      {
        question: 'An wen meldest du einen Datenschutzvorfall zuerst?',
        type: 'single',
        options: ['Direkt an den EDÖB', 'An den internen Datenschutzbeauftragten oder die vorgesetzte Person', 'Per E-Mail an alle Mitarbeitenden'],
        correctIndexes: [1],
        explanation: 'Zuerst immer intern melden. Die externe Meldung an den EDÖB übernimmt der Datenschutzbeauftragte.',
      },
      {
        question: 'Wer ist der Datenschutzbeauftragte der MS Direct Group?',
        type: 'single',
        options: ['Myrio Kluser', 'Die IT-Abteilung', 'Die Geschäftsleitung'],
        correctIndexes: [0],
        explanation: 'Myrio Kluser (myrio.kluser@qmart.ch) ist die zentrale Anlaufstelle für Datenschutzfragen.',
      },
    ],
  },
  {
    id: 7,
    title: 'Abschlussquiz',
    emoji: '🏆',
    description: 'Zeig was du gelernt hast! 5 Fragen aus allen Modulen – du schaffst das.',
    learnContent: [],
    quiz: [
      {
        question: 'Seit wann gilt das revidierte Schweizer Datenschutzgesetz (DSG)?',
        type: 'single',
        options: ['25. Mai 2018', '1. Januar 2022', '1. September 2023'],
        correctIndexes: [2],
        explanation: 'Das revidierte DSG trat am 1. September 2023 in Kraft – fast 5 Jahre nach der EU-DSGVO.',
      },
      {
        question: 'Was ist KEIN besonders schützenswertes Personendatum?',
        type: 'single',
        options: ['HIV-Status', 'Fingerabdruckdaten', 'Firmen-E-Mail-Adresse'],
        correctIndexes: [2],
        explanation: 'Firmen-E-Mail-Adressen sind normale Personendaten. HIV-Status (Gesundheit) und Fingerabdruckdaten (Biometrie) sind besonders schützenswert gemäss Art. 5 DSG.',
      },
      {
        question: 'Was ist sicheres Verhalten im Homeoffice?',
        type: 'single',
        options: ['Kundendaten auf privatem USB-Stick speichern', 'VPN aktivieren und Bildschirm sperren wenn man den Raum verlässt', 'Firmenlaptop ungesperrt lassen wenn man kurz weg ist'],
        correctIndexes: [1],
        explanation: 'VPN + gesperrter Bildschirm sind absolute Basis im Homeoffice. Private USB-Sticks und ungesperrte Geräte sind klare Sicherheitsverstösse.',
      },
      {
        question: 'Innerhalb welcher Frist muss das Unternehmen eine Datenpanne dem EDÖB melden?',
        type: 'single',
        options: ['7 Tage', '72 Stunden', '30 Tage'],
        correctIndexes: [1],
        explanation: 'Die 72-Stunden-Frist gilt analog zur EU-DSGVO. Deshalb muss intern sofort gemeldet werden, damit das Unternehmen reagieren kann.',
      },
      {
        question: 'Was solltest du bei einem Phishing-Verdacht tun?',
        type: 'single',
        options: ['Die E-Mail einfach löschen und vergessen', 'Auf den Link klicken um zu prüfen, ob es wirklich Phishing ist', 'Dem IT-Support melden und auf Anweisung warten'],
        correctIndexes: [2],
        explanation: 'Phishing immer dem IT-Support melden – auch wenn es harmlos wirkt. Einfach löschen reicht nicht, da der IT-Support die Bedrohung bewerten und andere warnen muss. Niemals auf verdächtige Links klicken!',
      },
    ],
  },
];
