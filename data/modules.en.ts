import type { Module } from './module-types';

export const modules: Module[] = [
  {
    id: 1,
    title: 'Introduction to Data Protection',
    emoji: '🛡️',
    description: 'Learn the basics of data protection and the Swiss FADP.',
    videoId: 'bGHo6ahlXTI',
    learnContent: [
      {
        heading: 'Relevance and importance of data protection',
        text: 'Data protection safeguards the personal rights and freedoms of employees, customers, and end clients. Any handling of personal data is covered — collecting, storing, using, transferring, archiving, or deleting.',
        infoBox: {
          variant: 'warnung',
          title: 'Warning',
          text: 'Intentional violations by natural persons can result in fines of up to CHF 250,000 (Art. 60–63 FADP). Ignorance is no excuse.',
        },
      },
      {
        heading: 'Key concepts of data protection',
        text: 'Personal data is any information relating to an identified or identifiable natural person — for example, name, address, date of birth, email address, or IP address.',
        infoBox: {
          variant: 'merksatz',
          title: 'Key rule',
          text: 'Even IP addresses and device identifiers are personal data, as they allow identification.',
        },
      },
      {
        heading: 'Particularly sensitive personal data',
        text: 'Particularly protected are data on religious, ideological, political, or trade union views; health, private life and ethnic origin; criminal and administrative proceedings; and social welfare measures. Biometric data is also included (Art. 5 FADP).',
      },
      {
        heading: 'Legal basis',
        text: 'In Switzerland, the revised Federal Act on Data Protection (FADP) applies, which came into force on 1 September 2023. It aligns with the EU GDPR and strengthens the rights of data subjects.',
        infoBox: {
          variant: 'merksatz',
          title: 'Key rule',
          text: 'Three principles are central — only as much data as necessary (proportionality), only for the stated purpose (purpose limitation), and those affected must be informed (transparency).',
        },
      },
    ],
    quiz: [
      {
        question: 'What is particularly sensitive personal data?',
        type: 'multi',
        options: ['Name and address', 'Date of birth', 'Health information', 'Fingerprint (biometric data)', 'Occupation', 'Religious affiliation'],
        correctIndexes: [2, 3, 5],
        explanation: 'Health, biometric, and ideological data are particularly sensitive under Art. 5 FADP. Name, address, date of birth, and occupation are ordinary personal data.',
      },
      {
        question: 'What counts as data processing under the FADP?',
        type: 'multi',
        options: ['Collection', 'Transfer', 'Archiving', 'Storage', 'Deletion', 'Use'],
        correctIndexes: [0, 1, 2, 3, 4, 5],
        explanation: 'Data processing covers any handling of personal data — from collection through use and transfer to archiving and deletion.',
      },
    ],
  },
  {
    id: 2,
    title: 'Principles of Data Protection',
    emoji: '⚖️',
    description: 'Understand the core principles governing how personal data may be processed.',
    learnContent: [
      {
        heading: 'Purpose limitation and data minimisation',
        text: 'Purpose limitation — data may only be collected and processed for specified, explicit, and legitimate purposes. Data minimisation — only the data genuinely needed for the specific purpose may be collected.',
        infoBox: {
          variant: 'merksatz',
          title: 'Key rule',
          text: 'Only as much data as necessary — and only for the purpose for which it was collected.',
        },
      },
      {
        heading: 'Transparency and right of access',
        text: 'Transparency — data subjects must be able to find out which of their data is being processed and for what purposes. Right of access — they have the right to obtain information about the data stored about them.',
      },
      {
        heading: 'Accuracy and currency',
        text: 'Data must be correct and up to date. Inaccurate or outdated data must be corrected or deleted.',
      },
    ],
    quiz: [
      {
        question: 'Must data subjects be informed about which data is processed and for what purposes?',
        type: 'single',
        options: ['No', 'Only if the person requests it', 'Yes'],
        correctIndexes: [2],
        explanation: 'This is required by the transparency principle — data subjects must be informed upon request.',
      },
      {
        question: 'What does the principle of data minimisation mean?',
        type: 'single',
        options: ['Only the data needed for the specific purpose may be collected', 'Data is protected from unauthorised access', 'Data may only be processed for specified, legitimate purposes'],
        correctIndexes: [0],
        explanation: 'Data minimisation means: as little data as possible. The third option describes purpose limitation.',
      },
    ],
  },
  {
    id: 3,
    title: 'Rights of Data Subjects',
    emoji: '👤',
    description: 'Know the rights that individuals have against the company.',
    learnContent: [
      {
        heading: 'Right of access',
        text: 'Data subjects may request information about the processing of their data at any time. The request is handled by the Data Protection Officer, who provides the information within 30 days.',
      },
      {
        heading: 'Right to rectification and erasure',
        text: 'Rectification — data subjects may request the correction of inaccurate data. Erasure — they may request deletion if the data is no longer necessary or was processed unlawfully.',
      },
      {
        heading: 'Right to blocking of data',
        text: 'Data subjects may request that their data be blocked — for example if they contest its accuracy or if processing is not lawful (derived from personality rights, Art. 32 FADP).',
      },
      {
        heading: 'Data disclosure (Art. 28 FADP)',
        text: 'Data subjects may request that their data be handed over in a common electronic format — provided the data is processed automatically and the purpose allows it.',
        infoBox: {
          variant: 'merksatz',
          title: 'Core rights under Swiss FADP',
          text: 'Right of access (Art. 25), rectification/erasure/blocking (Art. 32), and data disclosure (Art. 28). The Swiss FADP does not have an explicit right to object as under the EU GDPR.',
        },
      },
    ],
    quiz: [
      {
        question: 'What rights does the Swiss FADP provide for data subjects?',
        type: 'single',
        options: ['Only the right of access', 'Access, rectification/erasure/blocking, and data disclosure', 'Access, rectification, erasure, restriction, objection and data portability (as in the EU GDPR)'],
        correctIndexes: [1],
        explanation: 'The Swiss FADP provides the right of access (Art. 25), rectification/erasure/blocking (Art. 32), and data disclosure (Art. 28). The Swiss FADP does not have an explicit right to object or restriction as in the EU GDPR.',
      },
      {
        question: 'Within what timeframe must access be provided?',
        type: 'single',
        options: ['7 days', '30 days', '90 days'],
        correctIndexes: [1],
        explanation: 'Access is generally provided within 30 days.',
      },
    ],
  },
  {
    id: 4,
    title: 'Obligations of the Company and Employees',
    emoji: '📢',
    description: 'Know your obligations and the correct reporting procedure in the event of a data breach.',
    learnContent: [
      {
        heading: 'Data protection-compliant processes',
        text: 'The company must implement processes that ensure all data protection principles in daily operations. MS Direct Group holds the "GoodPrivacy" data protection quality seal from SQS, which certifies an adequate data protection management system.',
        infoBox: {
          variant: 'merksatz',
          title: 'GoodPrivacy',
          text: 'GoodPrivacy (SQS) certifies that MS Direct Group has a verified data protection management system.',
        },
      },
      {
        heading: 'Employee responsibilities',
        text: 'Each employee is jointly responsible for protecting the data they work with. All participate in training and comply with data protection policies.',
        infoBox: {
          variant: 'merksatz',
          title: 'Key rule',
          text: 'Data protection is a team effort — not just the IT department is responsible.',
        },
      },
      {
        heading: 'Company obligations',
        text: 'The company implements technical and organisational measures (TOMs), maintains a record of processing activities, and incorporates data protection into new processes from the outset (Privacy by Design).',
      },
      {
        heading: 'Reporting obligations for data breaches',
        text: 'Internally — incidents or suspected incidents must be reported immediately to the Data Protection Officer or line manager. Externally — whether and when a notification to the supervisory authority (FDPIC) or to data subjects is required is assessed and decided by the Data Protection Officer.',
        infoBox: {
          variant: 'warnung',
          title: 'Reporting obligation',
          text: 'Report any data protection incident or suspected incident internally right away. Whether a report to the FDPIC is required will be assessed by the Data Protection Officer. If a report is necessary, it must be made as soon as possible.',
        },
      },
    ],
    quiz: [
      {
        question: 'What must you do if you notice a data breach?',
        type: 'single',
        options: ['Wait and see if someone else notices', 'Fix it yourself without telling anyone', 'Immediately inform your line manager or the Data Protection Officer', 'Send an email to all employees'],
        correctIndexes: [2],
        explanation: 'Prompt internal reporting is crucial. The Swiss FADP sets no fixed 72-hour deadline — unlike the EU GDPR. Breaches likely to pose a high risk must be reported to the FDPIC as soon as possible. Fixing it yourself and staying silent is not an option.',
      },
      {
        question: "What does 'Privacy by Design' mean?",
        type: 'single',
        options: ['Data protection is added after the fact when problems arise', 'Data protection is built into systems and processes from the start', 'Only the IT department is responsible for data protection'],
        correctIndexes: [1],
        explanation: 'Privacy by Design means data protection is not an afterthought — it is part of every process and system from the outset, just like security or quality.',
      },
      {
        question: 'What is a record of processing activities (Art. 12 FADP)?',
        type: 'single',
        options: ['A list of all employees with access to data', 'A documentation of all data processing activities in the company', 'A register of all data breaches in the last 5 years'],
        correctIndexes: [1],
        explanation: 'The record of processing activities (Art. 12 FADP) systematically documents all data processing activities: which data, for what purpose, by whom, for how long. It is a central tool for compliant operations.',
      },
    ],
  },
  {
    id: 5,
    title: 'IT Security and Data Protection',
    emoji: '🔒',
    description: 'Recognise typical IT risks and learn how to prevent data breaches in daily work.',
    learnContent: [
      {
        heading: 'IT security principles at the workplace',
        text: 'Clear rules apply — use secure passwords, lock your computer when leaving, and do not install unknown software.',
      },
      {
        heading: 'Secure passwords and password management',
        text: 'Use long, complex passwords with upper and lowercase letters, numbers, and special characters — a unique one for each service. A password manager helps with secure storage and management.',
        infoBox: {
          variant: 'merksatz',
          title: 'Tip',
          text: 'Win + L (Windows) or Ctrl + Cmd + Q (Mac) locks the screen instantly — even if you only step away briefly.',
        },
      },
      {
        heading: 'Recognising phishing and social engineering',
        text: 'Phishing emails imitate genuine senders and ask for login credentials or link clicks. If in doubt, delete the email rather than risk it — never click links or attachments and ask IT support.',
        infoBox: {
          variant: 'warnung',
          title: 'Reality',
          text: 'Over 80% of all data breaches are caused by human error, not technical hacker attacks.',
        },
      },
      {
        heading: 'Dos ✅',
        text: 'Lock your screen when leaving your workstation. Use VPN when working from home or on public Wi-Fi. Strong passwords + two-factor authentication (2FA). Report suspicious emails to IT support immediately.',
      },
      {
        heading: "Don'ts ❌",
        text: 'No password on a sticky note at your monitor. No customer data via WhatsApp or personal email. No public Wi-Fi without VPN. No sensitive documents left unattended.',
        infoBox: {
          variant: 'warnung',
          title: 'Never',
          text: 'NEVER write down your passwords — not on sticky notes, not in unsecured files. And: NEVER leave your laptop unlocked and unattended, even for "just a moment".',
        },
      },
    ],
    quiz: [
      {
        question: "You receive an email from 'hr@ms-direct.ch' asking you to confirm your password. What do you do?",
        type: 'single',
        options: ['I click the link and enter my password', 'I ignore the email and simply delete it', 'I report the email to IT support immediately'],
        correctIndexes: [2],
        explanation: 'This is classic phishing. Never click links or enter passwords. Always report — even if it seems harmless. Simply deleting is not enough; IT support must be able to respond.',
      },
      {
        question: 'Which measures effectively protect personal data?',
        type: 'multi',
        options: ['Password on a sticky note at the monitor', 'Lock screen when leaving', 'Use VPN when working from home', 'Share customer data via WhatsApp', 'Strong passwords + 2FA enabled'],
        correctIndexes: [1, 2, 4],
        explanation: 'Locking the screen, VPN, and 2FA are fundamental security measures. Passwords on sticky notes and WhatsApp for customer data are clear security violations.',
      },
      {
        question: 'Where must a password NOT be stored?',
        type: 'multi',
        options: ['In an encrypted password manager', 'On a sticky note at the monitor', 'In an unsecured text file on the desktop', 'In memory'],
        correctIndexes: [1, 2],
        explanation: 'Passwords on sticky notes or in unsecured files are a massive security risk. Only encrypted password managers or memory are safe options.',
      },
      {
        question: 'You need to step away briefly from your desk. What do you do with your laptop?',
        type: 'single',
        options: ['I leave it open — I am only away briefly', 'I close only the document I was working on', 'I lock the screen (Win+L / Ctrl+Cmd+Q)'],
        correctIndexes: [2],
        explanation: 'Even a brief absence is enough for unauthorised access. Locking the screen is simple (Win+L on Windows, Ctrl+Cmd+Q on Mac) and absolutely necessary.',
      },
    ],
  },
  {
    id: 6,
    title: 'Internal Contacts and Reporting Channels',
    emoji: '📞',
    description: 'Know who to contact with questions and incidents.',
    learnContent: [
      {
        heading: 'Who do I contact?',
        text: 'The Data Protection Officer of MS Direct Group is Myrio Kluser. You can reach him at myrio.kluser@qmart.ch. He is your point of contact for data protection questions and issues, requests for access from data subjects, and data protection incidents.',
        infoBox: {
          variant: 'merksatz',
          title: 'When in doubt',
          text: 'When in doubt, do not decide on your own — contact the Data Protection Officer.',
        },
      },
      {
        heading: 'How do I report an incident?',
        text: 'Report data protection incidents or suspected incidents immediately, internally, to the Data Protection Officer or your line manager. The faster the report, the better the response. The Data Protection Officer will assess whether and when a notification to the FDPIC is required.',
      },
    ],
    quiz: [
      {
        question: 'Who do you report a data protection incident to first?',
        type: 'single',
        options: ['Directly to the FDPIC', 'To the internal Data Protection Officer or line manager', 'By email to all employees'],
        correctIndexes: [1],
        explanation: 'Always report internally first. The external notification to the FDPIC is handled by the Data Protection Officer.',
      },
      {
        question: 'Who is the Data Protection Officer of MS Direct Group?',
        type: 'single',
        options: ['Myrio Kluser', 'The IT department', 'Management'],
        correctIndexes: [0],
        explanation: 'Myrio Kluser (myrio.kluser@qmart.ch) is the central contact for data protection questions.',
      },
    ],
  },
  {
    id: 7,
    title: 'Final Quiz',
    emoji: '🏆',
    description: 'Show what you have learned! 5 questions from all modules — you can do it.',
    learnContent: [],
    quiz: [
      {
        question: 'When did the revised Swiss Federal Act on Data Protection (FADP) come into force?',
        type: 'single',
        options: ['25 May 2018', '1 January 2022', '1 September 2023'],
        correctIndexes: [2],
        explanation: 'The revised FADP came into force on 1 September 2023 — almost 5 years after the EU GDPR.',
      },
      {
        question: 'What is NOT particularly sensitive personal data?',
        type: 'single',
        options: ['HIV status', 'Fingerprint data', 'Work email address'],
        correctIndexes: [2],
        explanation: 'Work email addresses are ordinary personal data. HIV status (health) and fingerprint data (biometrics) are particularly sensitive under Art. 5 FADP.',
      },
      {
        question: 'What is safe behaviour when working from home?',
        type: 'single',
        options: ['Store customer data on a private USB stick', 'Activate VPN and lock the screen when leaving the room', 'Leave the company laptop unlocked when stepping away briefly'],
        correctIndexes: [1],
        explanation: 'VPN + locked screen are the absolute basics when working from home. Private USB sticks and unlocked devices are clear security violations.',
      },
      {
        question: 'What does the Swiss FADP require when reporting a data breach to the FDPIC?',
        type: 'single',
        options: ['A fixed 72-hour deadline, as in the EU GDPR', 'Data breaches never need to be reported externally', 'The report must be made as soon as possible if there is a high risk'],
        correctIndexes: [2],
        explanation: 'The Swiss FADP sets NO fixed 72-hour deadline — that is an EU GDPR rule. Breaches likely to pose a high risk to the personality or fundamental rights of data subjects must be reported to the FDPIC as soon as possible.',
      },
      {
        question: 'What should you do if you suspect phishing?',
        type: 'single',
        options: ['Simply delete the email and forget about it', 'Click the link to check whether it really is phishing', 'Report to IT support and wait for instructions'],
        correctIndexes: [2],
        explanation: 'Always report phishing to IT support — even if it seems harmless. Simply deleting is not enough, as IT support needs to assess the threat and warn others. Never click suspicious links!',
      },
    ],
  },
];
