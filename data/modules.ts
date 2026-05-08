export type QuizQuestion = {
  question: string;
  type: 'single' | 'multi';
  options: string[];
  correctIndexes: number[];
  explanation: string;
};

export type Module = {
  id: number;
  title: string;
  emoji: string;
  description: string;
  learnContent: {
    heading: string;
    text: string;
  }[];
  quiz: QuizQuestion[];
};

export const modules: Module[] = [
  {
    id: 1,
    title: 'Einführung in den Datenschutz',
    emoji: '🛡️',
    description: 'Lerne die Grundlagen des Datenschutzes und das Schweizer DSG kennen.',
    learnContent: [
      {
        heading: 'Was ist Datenschutz?',
        text: 'Datenschutz bedeutet den Schutz von Personendaten vor unbefugter Bearbeitung. Personendaten sind alle Angaben, die sich auf eine bestimmte oder bestimmbare Person beziehen — zum Beispiel Name, Adresse, E-Mail oder Krankengeschichte.',
      },
      {
        heading: 'Warum ist Datenschutz wichtig?',
        text: 'Mitarbeitende der MS Direct Group arbeiten täglich mit Kundendaten, internen Informationen und digitalen Systemen. Fehler passieren oft unabsichtlich — können aber grosse rechtliche und reputationsbezogene Folgen haben.',
      },
      {
        heading: 'Rechtliche Grundlage',
        text: 'In der Schweiz gilt das revidierte Datenschutzgesetz (DSG), das am 1. September 2023 in Kraft getreten ist. Es orientiert sich an der europäischen DSGVO und stärkt die Rechte der betroffenen Personen.',
      },
      {
        heading: 'Grundprinzipien',
        text: 'Drei Prinzipien sind zentral: Verhältnismässigkeit (nur so viele Daten wie nötig), Zweckbindung (Daten nur für den angegebenen Zweck nutzen) und Transparenz (Betroffene müssen wissen, was mit ihren Daten passiert).',
      },
    ],
    quiz: [
      {
        question: 'Was sind besonders schützenswerte Personendaten?',
        type: 'multi',
        options: [
          'Name und Adresse',
          'Gesundheitsinformationen',
          'Geburtsdatum',
          'Fingerabdruck (biometrische Daten)',
          'Religionszugehörigkeit',
        ],
        correctIndexes: [1, 3, 4],
        explanation:
          'Besonders schützenswert sind biometrische, gesundheitliche und weltanschauliche Daten gemäss Art. 5 DSG. Name, Adresse und Geburtsdatum sind normale Personendaten.',
      },
      {
        question: 'Was beinhaltet die Datenbearbeitung laut DSG?',
        type: 'multi',
        options: [
          'Beschaffung',
          'Übermittlung',
          'Archivierung',
          'Aufbewahrung',
          'Löschung',
        ],
        correctIndexes: [0, 1, 2, 3, 4],
        explanation:
          'Datenbearbeitung umfasst jeden Umgang mit Personendaten — von der Beschaffung bis zur endgültigen Löschung. Alles ist gemeint.',
      },
    ],
  },
  {
    id: 2,
    title: 'Personendaten und Kategorien',
    emoji: '📋',
    description: 'Verstehe den Unterschied zwischen normalen und besonders schützenswerten Daten.',
    learnContent: [
      {
        heading: 'Was sind Personendaten?',
        text: 'Personendaten sind alle Angaben, die eine Person direkt oder indirekt identifizierbar machen. Dazu gehören Name, E-Mail, Telefon, IP-Adresse, aber auch Kombinationen wie Geburtsdatum + Wohnort.',
      },
      {
        heading: 'Normale vs. besonders schützenswerte Daten',
        text: 'Normale Personendaten: Name, Adresse, Berufsbezeichnung, Firmen-E-Mail. Besonders schützenswert (Art. 5 DSG): Gesundheit, Genetik, Biometrie, Religion, politische Ansichten, Strafverfolgung.',
      },
      {
        heading: 'Praxisbeispiel MS Direct',
        text: 'Eine Kundenliste mit Name, Kaufverhalten und Zahlungshistorie ist eine Sammlung von Personendaten. Diese Daten müssen verschlüsselt gespeichert, sicher übertragen und nach Ablauf der Aufbewahrungsfrist gelöscht werden.',
      },
      {
        heading: 'Wann liegt eine Verletzung vor?',
        text: 'Eine Datenschutzverletzung (Datenpanne) liegt vor, wenn Personendaten unbeabsichtigt verloren gehen, zerstört, verändert oder unbefugt offenbart werden — z.B. durch eine unverschlüsselte E-Mail mit Kundendaten.',
      },
    ],
    quiz: [
      {
        question: 'Welche der folgenden Daten sind besonders schützenswert?',
        type: 'multi',
        options: [
          'Firmen-E-Mail-Adresse',
          'HIV-Status eines Mitarbeiters',
          'Berufsbezeichnung',
          'Fingerabdruckdaten für Zutrittskontrolle',
          'Mitgliedschaft in einer Partei',
        ],
        correctIndexes: [1, 3, 4],
        explanation:
          'Gesundheitliche Daten (HIV-Status), biometrische Daten (Fingerabdruck) und politische Überzeugungen (Parteimitgliedschaft) sind besonders schützenswert. Firmen-E-Mail und Berufsbezeichnung sind normale Personendaten.',
      },
      {
        question: 'Wann liegt eine Datenschutzverletzung vor?',
        type: 'single',
        options: [
          'Wenn ein Mitarbeiter seinen Firmenlaptop mit nach Hause nimmt',
          'Wenn Kundendaten unverschlüsselt per E-Mail versendet werden',
          'Wenn Daten auf einem Unternehmensserver gespeichert werden',
        ],
        correctIndexes: [1],
        explanation:
          'Unverschlüsselte Übermittlung sensibler Kundendaten ist eine klassische Datenpanne. Laptop mit nach Hause nehmen oder Daten auf Unternehmensservern sind bei korrekter Handhabung kein Problem.',
      },
    ],
  },
  {
    id: 3,
    title: 'Risiken und sicherer Umgang',
    emoji: '⚠️',
    description: 'Erkenne typische Risiken und lerne, wie du Datenpannen vermeidest.',
    learnContent: [
      {
        heading: 'Typische Risiken im Alltag',
        text: 'Die häufigsten Datenpannen entstehen nicht durch Hacker, sondern durch menschliche Fehler: Phishing-Mails, ungesichertes WLAN, verlorene Geräte, schwache Passwörter oder das Liegenlassen von ausgedruckten Dokumenten.',
      },
      {
        heading: 'Phishing erkennen',
        text: 'Phishing-Mails imitieren echte Absender (z.B. IT-Support, HR) und fordern dazu auf, Passwörter einzugeben oder Links zu klicken. Merkmale: Druck erzeugen, ungewöhnliche Absenderadresse, verdächtige Links. Immer erst beim IT-Support nachfragen!',
      },
      {
        heading: 'Dos ✅',
        text: 'Bildschirm sperren beim Verlassen des Arbeitsplatzes. VPN nutzen im Homeoffice und bei öffentlichem WLAN. Starke Passwörter + Zwei-Faktor-Authentifizierung (2FA). Verdächtige Mails sofort dem IT-Support melden.',
      },
      {
        heading: "Don'ts ❌",
        text: 'Kein Passwort auf Notizzettel am Monitor. Keine Kundendaten per WhatsApp oder privater E-Mail. Kein öffentliches WLAN ohne VPN. Keine sensiblen Dokumente unbeaufsichtigt liegen lassen.',
      },
    ],
    quiz: [
      {
        question:
          "Du erhältst eine E-Mail von 'hr@ms-direct.ch' mit der Bitte, dein Passwort zu bestätigen. Was tust du?",
        type: 'single',
        options: [
          'Ich klicke auf den Link und gebe mein Passwort ein',
          'Ich ignoriere die Mail und lösche sie einfach',
          'Ich melde die Mail sofort dem IT-Support',
        ],
        correctIndexes: [2],
        explanation:
          'Das ist klassisches Phishing. Niemals auf Links klicken oder Passwörter eingeben. Immer melden — auch wenn es vielleicht harmlos wirkt. Einfach löschen reicht nicht, der IT-Support muss reagieren können.',
      },
      {
        question: 'Welche Massnahmen schützen Personendaten effektiv?',
        type: 'multi',
        options: [
          'Passwort auf Notizzettel am Monitor',
          'Bildschirm sperren beim Verlassen',
          'VPN bei Heimarbeit nutzen',
          'Kundendaten per WhatsApp teilen',
          'Starke Passwörter + 2FA aktivieren',
        ],
        correctIndexes: [1, 2, 4],
        explanation:
          'Bildschirm sperren, VPN und 2FA sind grundlegende Schutzmassnahmen. Passwörter auf Notizzetteln und WhatsApp für Kundendaten sind klare Sicherheitsverstösse.',
      },
    ],
  },
  {
    id: 4,
    title: 'Pflichten und Meldewege',
    emoji: '📢',
    description: 'Kenne deine Pflichten und den richtigen Meldeweg bei einer Datenpanne.',
    learnContent: [
      {
        heading: 'Verantwortung der Mitarbeitenden',
        text: 'Jede Mitarbeiterin und jeder Mitarbeiter der MS Direct Group ist mitverantwortlich für den Schutz der Daten, mit denen sie arbeiten. Das bedeutet: Datenschutzrichtlinien einhalten, an Schulungen teilnehmen und Pannen sofort melden.',
      },
      {
        heading: 'Pflichten des Unternehmens',
        text: 'Das Unternehmen muss technische und organisatorische Massnahmen (TOM) ergreifen, ein Bearbeitungsverzeichnis führen und Datenschutz bereits bei der Entwicklung neuer Prozesse berücksichtigen (Privacy by Design).',
      },
      {
        heading: 'Was ist eine Datenpanne?',
        text: 'Eine Datenpanne liegt vor, wenn Personendaten unbeabsichtigt verloren gehen, zerstört, verändert oder unbefugt offenbart werden. Beispiele: Laptop mit Kundendaten gestohlen, E-Mail an falschen Empfänger, Datenbank gehackt.',
      },
      {
        heading: 'Meldeweg bei einer Datenpanne',
        text: 'Intern: Sofort die vorgesetzte Person oder den Datenschutzbeauftragten informieren. Extern (wenn Risiko für Betroffene): Das Unternehmen muss die Meldung an den EDÖB (Eidgenössischer Datenschutzbeauftragter) innerhalb von 72 Stunden erstatten.',
      },
    ],
    quiz: [
      {
        question: 'Was musst du tun, wenn du eine Datenpanne bemerkst?',
        type: 'single',
        options: [
          'Abwarten und schauen ob jemand anderes es bemerkt',
          'Die Panne selbst beheben und niemandem sagen',
          'Sofort die vorgesetzte Person oder den Datenschutzbeauftragten informieren',
          'Eine E-Mail an alle Mitarbeitenden schicken',
        ],
        correctIndexes: [2],
        explanation:
          'Schnelles internes Melden ist entscheidend. Das Unternehmen hat nur 72 Stunden für die EDÖB-Meldung. Selbst "reparieren" und schweigen ist keine Option — das macht es schlimmer.',
      },
      {
        question: "Was bedeutet 'Privacy by Design'?",
        type: 'single',
        options: [
          'Datenschutz wird nachträglich ergänzt wenn Probleme auftauchen',
          'Datenschutz wird von Anfang an in Systeme und Prozesse eingebaut',
          'Nur die IT-Abteilung ist für Datenschutz zuständig',
        ],
        correctIndexes: [1],
        explanation:
          'Privacy by Design heisst: Datenschutz ist kein nachträgliches Add-on, sondern von Beginn an Teil jedes Prozesses und Systems — genau wie Sicherheit oder Qualität.',
      },
    ],
  },
  {
    id: 5,
    title: 'Abschlussquiz',
    emoji: '🏆',
    description: 'Zeig was du gelernt hast! 4 Fragen aus allen Modulen — du schaffst das.',
    learnContent: [],
    quiz: [
      {
        question: 'Seit wann gilt das revidierte Schweizer Datenschutzgesetz (DSG)?',
        type: 'single',
        options: ['25. Mai 2018', '1. Januar 2022', '1. September 2023'],
        correctIndexes: [2],
        explanation:
          'Das revidierte DSG trat am 1. September 2023 in Kraft — fast 5 Jahre nach der EU-DSGVO.',
      },
      {
        question: 'Was ist KEIN besonders schützenswertes Personendatum?',
        type: 'single',
        options: ['HIV-Status', 'Fingerabdruckdaten', 'Firmen-E-Mail-Adresse'],
        correctIndexes: [2],
        explanation:
          'Firmen-E-Mail-Adressen sind normale Personendaten. HIV-Status (Gesundheit) und Fingerabdruckdaten (Biometrie) sind besonders schützenswert gemäss Art. 5 DSG.',
      },
      {
        question: 'Was ist sicheres Verhalten im Homeoffice?',
        type: 'single',
        options: [
          'Kundendaten auf privatem USB-Stick speichern',
          'VPN aktivieren und Bildschirm sperren wenn man den Raum verlässt',
          'Firmenlaptop ungesperrt lassen wenn man kurz weg ist',
        ],
        correctIndexes: [1],
        explanation:
          'VPN + gesperrter Bildschirm sind absolute Basis im Homeoffice. Private USB-Sticks und ungesperrte Geräte sind klare Sicherheitsverstösse.',
      },
      {
        question: 'Innerhalb welcher Frist muss das Unternehmen eine Datenpanne dem EDÖB melden?',
        type: 'single',
        options: ['7 Tage', '72 Stunden', '30 Tage'],
        correctIndexes: [1],
        explanation:
          'Die 72-Stunden-Frist gilt analog zur EU-DSGVO. Deshalb muss intern sofort gemeldet werden, damit das Unternehmen reagieren kann.',
      },
    ],
  },
];
