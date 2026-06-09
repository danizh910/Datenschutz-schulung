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
        heading: 'What is data protection?',
        text: 'Data protection means safeguarding personal data from unauthorised processing. Personal data includes all information relating to a specific or identifiable person — for example, name, address, email address, or medical history.',
      },
      {
        heading: 'Why is data protection important?',
        text: 'Employees of the MS Direct Group work daily with customer data, internal information, and digital systems. Mistakes often happen unintentionally — but can have significant legal and reputational consequences.',
        infoBox: {
          variant: 'warnung',
          title: 'Warning',
          text: 'Even unintentional violations can result in fines of up to CHF 250,000 — ignorance is no excuse.',
        },
      },
      {
        heading: 'Legal basis',
        text: 'In Switzerland, the revised Federal Act on Data Protection (FADP) applies, which came into force on 1 September 2023. It aligns with the European GDPR and strengthens the rights of data subjects.',
      },
      {
        heading: 'Core principles',
        text: 'Three principles are central: proportionality (only as much data as necessary), purpose limitation (use data only for the stated purpose), and transparency (those affected must know what happens to their data).',
        infoBox: {
          variant: 'merksatz',
          title: 'Key rule',
          text: 'Only as much data as necessary — only for the stated purpose — and those affected must be informed.',
        },
      },
    ],
    quiz: [
      {
        question: 'What is particularly sensitive personal data?',
        type: 'multi',
        options: ['Name and address', 'Health information', 'Date of birth', 'Fingerprint (biometric data)', 'Religious affiliation'],
        correctIndexes: [1, 3, 4],
        explanation: 'Particularly sensitive are biometric, health-related, and ideological data according to Art. 5 FADP. Name, address, and date of birth are ordinary personal data.',
      },
      {
        question: 'What does data processing include according to the FADP?',
        type: 'multi',
        options: ['Collection', 'Transmission', 'Archiving', 'Storage', 'Deletion'],
        correctIndexes: [0, 1, 2, 3, 4],
        explanation: 'Data processing covers every interaction with personal data — from collection to final deletion. Everything is included.',
      },
      {
        question: 'What does the principle of proportionality mean?',
        type: 'single',
        options: ['Collect all available data about a person', 'Process only as much data as necessary for the purpose', 'Store data indefinitely'],
        correctIndexes: [1],
        explanation: 'Proportionality means data minimisation: only as much data as is actually required for the specific purpose may be collected and processed.',
      },
    ],
  },
  {
    id: 2,
    title: 'Personal Data and Categories',
    emoji: '📋',
    description: 'Understand the difference between ordinary and particularly sensitive data.',
    learnContent: [
      {
        heading: 'What is personal data?',
        text: 'Personal data is any information that makes a person directly or indirectly identifiable. This includes name, email, phone, IP address, as well as combinations such as date of birth + place of residence.',
        infoBox: {
          variant: 'merksatz',
          title: 'Key rule',
          text: 'Even technical data such as IP addresses or device identifiers are personal data — they allow identification.',
        },
      },
      {
        heading: 'Ordinary vs. particularly sensitive data',
        text: 'Ordinary personal data: name, address, job title, company email. Particularly sensitive (Art. 5 FADP): health, genetics, biometrics, religion, political opinions, criminal proceedings.',
        infoBox: {
          variant: 'warnung',
          title: 'Important',
          text: 'Even seemingly harmless combinations of data (e.g. date of birth + place of residence + occupation) can become particularly sensitive when combined!',
        },
      },
      {
        heading: 'Practical example MS Direct',
        text: 'A customer list containing name, purchasing behaviour, and payment history is a collection of personal data. This data must be stored encrypted, transmitted securely, and deleted after the retention period expires.',
      },
      {
        heading: 'When does a violation occur?',
        text: 'A data breach occurs when personal data is accidentally lost, destroyed, altered, or unauthorisedly disclosed — e.g. through an unencrypted email containing customer data.',
      },
    ],
    quiz: [
      {
        question: 'Which of the following data is particularly sensitive?',
        type: 'multi',
        options: ['Company email address', "An employee's HIV status", 'Job title', 'Fingerprint data for access control', 'Membership in a political party'],
        correctIndexes: [1, 3, 4],
        explanation: 'Health data (HIV status), biometric data (fingerprint), and political beliefs (party membership) are particularly sensitive. Company email and job title are ordinary personal data.',
      },
      {
        question: 'When does a data breach occur?',
        type: 'single',
        options: ['When an employee takes their company laptop home', 'When customer data is sent unencrypted by email', 'When data is stored on a company server'],
        correctIndexes: [1],
        explanation: 'Unencrypted transmission of sensitive customer data is a classic data breach. Taking a laptop home or storing data on company servers is not a problem if handled correctly.',
      },
      {
        question: 'An IP address is...',
        type: 'single',
        options: ['...not personal data, as it is technical', '...personal data, because it can make a person identifiable', '...only personal data when linked to a name'],
        correctIndexes: [1],
        explanation: 'IP addresses are generally considered personal data because, in combination with other information (e.g. from the service provider), they can make a person identifiable.',
      },
    ],
  },
  {
    id: 3,
    title: 'Risks and Safe Handling',
    emoji: '⚠️',
    description: 'Recognise typical risks and learn how to prevent data breaches.',
    learnContent: [
      {
        heading: 'Common everyday risks',
        text: 'The most common data breaches are not caused by hackers, but by human error: phishing emails, unsecured WiFi, lost devices, weak passwords, or leaving printed documents unattended.',
        infoBox: {
          variant: 'warnung',
          title: 'Everyday reality',
          text: 'Over 80% of all data breaches are caused by human error — not technical hacker attacks.',
        },
      },
      {
        heading: 'Recognising phishing',
        text: 'Phishing emails imitate real senders (e.g. IT support, HR) and prompt you to enter passwords or click links. Signs: creating urgency, unusual sender address, suspicious links. Always check with IT support first!',
      },
      {
        heading: 'Dos ✅',
        text: 'Lock your screen when leaving your workstation. Use VPN in the home office and on public WiFi. Strong passwords + two-factor authentication (2FA). Report suspicious emails immediately to IT support.',
        infoBox: {
          variant: 'merksatz',
          title: 'Tip',
          text: 'Win + L (Windows) or Ctrl + Cmd + Q (Mac) locks the screen instantly — even when stepping away briefly.',
        },
      },
      {
        heading: "Don'ts ❌",
        text: 'No password on a sticky note on the monitor. No customer data via WhatsApp or personal email. No public WiFi without VPN. No sensitive documents left unattended.',
        infoBox: {
          variant: 'warnung',
          title: 'Never',
          text: "NEVER write down passwords — not on sticky notes and not in unsecured files. And: NEVER leave your laptop unlocked and unattended, even 'just for a moment'.",
        },
      },
      {
        heading: 'Passwords and device security',
        text: 'Use a unique, strong password for every service. A password manager helps. Laptops and mobile devices must always be locked when leaving your workstation — an unlocked laptop is an open data leak that can be exploited in seconds.',
        infoBox: {
          variant: 'warnung',
          title: 'Critical',
          text: 'A single unlocked, unattended laptop can compromise hundreds of data records. Locking the screen is mandatory — no exceptions.',
        },
      },
    ],
    quiz: [
      {
        question: "You receive an email from 'hr@ms-direct.ch' asking you to confirm your password. What do you do?",
        type: 'single',
        options: ['I click the link and enter my password', 'I ignore the email and just delete it', 'I immediately report the email to IT support'],
        correctIndexes: [2],
        explanation: 'This is classic phishing. Never click on links or enter passwords. Always report it — even if it seems harmless. Just deleting it is not enough, IT support needs to be able to respond.',
      },
      {
        question: 'Which measures effectively protect personal data?',
        type: 'multi',
        options: ['Password on a sticky note on the monitor', 'Lock screen when leaving the workstation', 'Use VPN for remote work', 'Share customer data via WhatsApp', 'Strong passwords + 2FA activated'],
        correctIndexes: [1, 2, 4],
        explanation: 'Locking the screen, VPN, and 2FA are fundamental security measures. Passwords on sticky notes and WhatsApp for customer data are clear security violations.',
      },
      {
        question: 'Where should a password NOT be stored?',
        type: 'multi',
        options: ['In an encrypted password manager', 'On a sticky note on the monitor', 'In an unsecured text file on the desktop', 'In your memory'],
        correctIndexes: [1, 2],
        explanation: 'Passwords on sticky notes or in unsecured files are a massive security risk. Only encrypted password managers or your own memory are safe options.',
      },
      {
        question: 'You need to stand up and leave your office briefly. What do you do with your laptop?',
        type: 'single',
        options: ["I leave it open — I'm only gone briefly", 'I just close the document I am working on', 'I lock the screen (Win+L / Ctrl+Cmd+Q)'],
        correctIndexes: [2],
        explanation: 'Even a brief absence is enough for unauthorised access. Locking the screen is easy (Win+L on Windows, Ctrl+Cmd+Q on Mac) and absolutely necessary.',
      },
    ],
  },
  {
    id: 4,
    title: 'Obligations and Reporting',
    emoji: '📢',
    description: 'Know your obligations and the correct reporting procedure for a data breach.',
    learnContent: [
      {
        heading: 'Responsibility of employees',
        text: 'Every employee of the MS Direct Group is co-responsible for protecting the data they work with. This means: complying with data protection policies, attending training, and reporting incidents immediately.',
        infoBox: {
          variant: 'merksatz',
          title: 'Key rule',
          text: 'Data protection is a team effort — not just the IT department. Everyone who works with data bears responsibility.',
        },
      },
      {
        heading: 'Company obligations',
        text: 'The company must implement technical and organisational measures (TOMs), maintain a record of processing activities, and incorporate data protection into the development of new processes from the outset (Privacy by Design).',
      },
      {
        heading: 'What is a data breach?',
        text: 'A data breach occurs when personal data is accidentally lost, destroyed, altered, or unauthorisedly disclosed. Examples: laptop with customer data stolen, email sent to the wrong recipient, database hacked.',
      },
      {
        heading: 'Reporting procedure for a data breach',
        text: 'Internally: immediately notify your supervisor or the data protection officer. Externally (if there is a risk to those affected): the company must notify the FDPIC (Federal Data Protection and Information Commissioner) within 72 hours.',
        infoBox: {
          variant: 'warnung',
          title: '72-hour rule',
          text: 'The company has only 72 hours after discovering a data breach to file an external report with the FDPIC. That is why you must report internally immediately!',
        },
      },
    ],
    quiz: [
      {
        question: 'What must you do if you notice a data breach?',
        type: 'single',
        options: ['Wait and see if someone else notices it', 'Fix the breach yourself and tell no one', 'Immediately notify your supervisor or the data protection officer', 'Send an email to all employees'],
        correctIndexes: [2],
        explanation: 'Reporting quickly internally is crucial. The company only has 72 hours for the FDPIC report. Fixing it yourself and staying silent is not an option — it makes things worse.',
      },
      {
        question: "What does 'Privacy by Design' mean?",
        type: 'single',
        options: ['Data protection is added retroactively when problems arise', 'Data protection is built into systems and processes from the very beginning', 'Only the IT department is responsible for data protection'],
        correctIndexes: [1],
        explanation: 'Privacy by Design means: data protection is not an afterthought, but is part of every process and system from the very beginning — just like security or quality.',
      },
      {
        question: 'What is a record of processing activities (Art. 12 FADP)?',
        type: 'single',
        options: ['A list of all employees who have access to data', 'A documentation of all data processing activities in the company', 'A register of all data breaches over the past 5 years'],
        correctIndexes: [1],
        explanation: 'The record of processing activities (Art. 12 FADP) systematically documents all data processing activities: which data, for what purpose, by whom, for how long. It is a central instrument of data protection compliance.',
      },
    ],
  },
  {
    id: 5,
    title: 'Final Quiz',
    emoji: '🏆',
    description: 'Show what you have learnt! 5 questions from all modules — you can do it.',
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
        options: ['HIV status', 'Fingerprint data', 'Company email address'],
        correctIndexes: [2],
        explanation: 'Company email addresses are ordinary personal data. HIV status (health) and fingerprint data (biometrics) are particularly sensitive according to Art. 5 FADP.',
      },
      {
        question: 'What is safe behaviour when working from home?',
        type: 'single',
        options: ['Store customer data on a private USB stick', 'Activate VPN and lock the screen when leaving the room', 'Leave the company laptop unlocked when stepping away briefly'],
        correctIndexes: [1],
        explanation: 'VPN + locked screen are the absolute basics when working from home. Private USB sticks and unlocked devices are clear security violations.',
      },
      {
        question: 'Within what time frame must the company report a data breach to the FDPIC?',
        type: 'single',
        options: ['7 days', '72 hours', '30 days'],
        correctIndexes: [1],
        explanation: 'The 72-hour deadline applies analogously to the EU GDPR. That is why internal reporting must happen immediately so the company can respond.',
      },
      {
        question: 'What should you do if you suspect phishing?',
        type: 'single',
        options: ['Simply delete the email and forget about it', 'Click the link to verify if it really is phishing', 'Report it to IT support and wait for instructions'],
        correctIndexes: [2],
        explanation: 'Always report phishing to IT support — even if it seems harmless. Simply deleting it is not enough, as IT support needs to assess the threat and warn others. Never click on suspicious links!',
      },
    ],
  },
];
