import type { Module } from './module-types';

export const modules: Module[] = [
  {
    id: 1,
    title: "Introduction à la protection des données",
    emoji: "🛡️",
    description: "Découvrez les bases de la protection des données et la LPD suisse.",
    videoId: "bGHo6ahlXTI",
    learnContent: [
      {
        heading: "Qu'est-ce que la protection des données ?",
        text: "La protection des données désigne la protection des données personnelles contre tout traitement non autorisé. Les données personnelles englobent toutes les informations se rapportant à une personne déterminée ou déterminable — par exemple, le nom, l'adresse, l'e-mail ou les antécédents médicaux.",
      },
      {
        heading: "Pourquoi la protection des données est-elle importante ?",
        text: "Les collaborateurs du groupe MS Direct traitent quotidiennement des données clients, des informations internes et des systèmes numériques. Les erreurs se produisent souvent involontairement — mais peuvent avoir de graves conséquences juridiques et réputationnelles.",
        infoBox: {
          variant: "warnung",
          title: "Attention",
          text: "Même les violations involontaires peuvent entraîner des amendes allant jusqu'à CHF 250 000 — l'ignorance ne protège pas contre les sanctions.",
        },
      },
      {
        heading: "Base légale",
        text: "En Suisse, la loi fédérale révisée sur la protection des données (LPD) est en vigueur depuis le 1er septembre 2023. Elle s'aligne sur le RGPD européen et renforce les droits des personnes concernées.",
      },
      {
        heading: "Principes fondamentaux",
        text: "Trois principes sont essentiels : la proportionnalité (seulement les données nécessaires), la limitation des finalités (utiliser les données uniquement pour l'objectif déclaré) et la transparence (les personnes concernées doivent savoir ce qu'il advient de leurs données).",
        infoBox: {
          variant: "merksatz",
          title: "À retenir",
          text: "Seulement les données nécessaires — seulement pour la finalité déclarée — et les personnes concernées doivent être informées.",
        },
      },
    ],
    quiz: [
      {
        question: "Quelles sont les données personnelles particulièrement sensibles ?",
        type: "multi",
        options: ["Nom et adresse", "Informations sur la santé", "Date de naissance", "Empreinte digitale (données biométriques)", "Appartenance religieuse"],
        correctIndexes: [1, 3, 4],
        explanation: "Les données biométriques, relatives à la santé et aux convictions sont particulièrement protégées selon l'art. 5 LPD. Le nom, l'adresse et la date de naissance sont des données personnelles ordinaires.",
      },
      {
        question: "Que comprend le traitement des données selon la LPD ?",
        type: "multi",
        options: ["La collecte", "La transmission", "L'archivage", "La conservation", "La suppression"],
        correctIndexes: [0, 1, 2, 3, 4],
        explanation: "Le traitement des données englobe toute manipulation de données personnelles — de la collecte à la suppression définitive. Tout est inclus.",
      },
      {
        question: "Que signifie le principe de proportionnalité ?",
        type: "single",
        options: ["Collecter toutes les données disponibles sur une personne", "Traiter uniquement les données nécessaires à l'objectif", "Conserver les données indéfiniment"],
        correctIndexes: [1],
        explanation: "La proportionnalité signifie la minimisation des données : seules les données effectivement nécessaires à l'objectif concret peuvent être collectées et traitées.",
      },
    ],
  },
  {
    id: 2,
    title: "Données personnelles et catégories",
    emoji: "📋",
    description: "Comprenez la différence entre les données ordinaires et les données particulièrement sensibles.",
    learnContent: [
      {
        heading: "Que sont les données personnelles ?",
        text: "Les données personnelles désignent toutes les informations permettant d'identifier directement ou indirectement une personne. Cela comprend le nom, l'e-mail, le téléphone, l'adresse IP, ainsi que des combinaisons telles que date de naissance + lieu de résidence.",
        infoBox: {
          variant: "merksatz",
          title: "À retenir",
          text: "Même les données techniques telles que les adresses IP ou les identifiants d'appareils sont des données personnelles — elles permettent une identification.",
        },
      },
      {
        heading: "Données ordinaires vs. données particulièrement sensibles",
        text: "Données personnelles ordinaires : nom, adresse, titre professionnel, e-mail professionnel. Particulièrement sensibles (art. 5 LPD) : santé, génétique, biométrie, religion, opinions politiques, poursuites pénales.",
        infoBox: {
          variant: "warnung",
          title: "Important",
          text: "Même des combinaisons de données apparemment anodines (p. ex. date de naissance + lieu de résidence + profession) peuvent devenir particulièrement sensibles une fois regroupées !",
        },
      },
      {
        heading: "Exemple pratique MS Direct",
        text: "Une liste de clients contenant le nom, le comportement d'achat et l'historique de paiement constitue un ensemble de données personnelles. Ces données doivent être stockées chiffrées, transmises de manière sécurisée et supprimées à l'expiration du délai de conservation.",
      },
      {
        heading: "Quand y a-t-il une violation ?",
        text: "Une violation de données se produit lorsque des données personnelles sont accidentellement perdues, détruites, modifiées ou divulguées sans autorisation — par exemple via un e-mail non chiffré contenant des données clients.",
      },
    ],
    quiz: [
      {
        question: "Lesquelles des données suivantes sont particulièrement sensibles ?",
        type: "multi",
        options: ["Adresse e-mail professionnelle", "Statut VIH d'un collaborateur", "Titre professionnel", "Données d'empreintes digitales pour le contrôle d'accès", "Adhésion à un parti politique"],
        correctIndexes: [1, 3, 4],
        explanation: "Les données de santé (statut VIH), les données biométriques (empreinte digitale) et les convictions politiques (adhésion à un parti) sont particulièrement sensibles. L'e-mail professionnel et le titre professionnel sont des données ordinaires.",
      },
      {
        question: "Quand y a-t-il une violation de données ?",
        type: "single",
        options: ["Quand un collaborateur emporte son ordinateur portable au domicile", "Quand des données clients sont envoyées par e-mail sans chiffrement", "Quand des données sont stockées sur un serveur d'entreprise"],
        correctIndexes: [1],
        explanation: "La transmission non chiffrée de données clients sensibles est une violation de données classique. Emporter un ordinateur chez soi ou stocker des données sur des serveurs d'entreprise ne pose pas de problème si cela est fait correctement.",
      },
      {
        question: "Une adresse IP est...",
        type: "single",
        options: ["...pas une donnée personnelle car elle est technique", "...une donnée personnelle car elle peut identifier une personne", "...une donnée personnelle uniquement si elle est associée à un nom"],
        correctIndexes: [1],
        explanation: "Les adresses IP sont généralement considérées comme des données personnelles car, combinées à d'autres informations (p. ex. chez le fournisseur d'accès), elles permettent d'identifier une personne.",
      },
    ],
  },
  {
    id: 3,
    title: "Risques et gestion sécurisée",
    emoji: "⚠️",
    description: "Identifiez les risques typiques et apprenez à éviter les violations de données.",
    learnContent: [
      {
        heading: "Risques courants au quotidien",
        text: "Les violations de données les plus fréquentes ne proviennent pas de hackers, mais d'erreurs humaines : e-mails de phishing, Wi-Fi non sécurisé, appareils perdus, mots de passe faibles ou documents imprimés laissés sans surveillance.",
        infoBox: {
          variant: "warnung",
          title: "Réalité quotidienne",
          text: "Plus de 80 % de toutes les violations de données sont dues à des erreurs humaines — pas à des attaques informatiques techniques.",
        },
      },
      {
        heading: "Reconnaître le phishing",
        text: "Les e-mails de phishing imitent de vrais expéditeurs (p. ex. le support informatique, les RH) et incitent à saisir des mots de passe ou à cliquer sur des liens. Signes : création d'urgence, adresse d'expéditeur inhabituelle, liens suspects. Consultez toujours d'abord le support informatique !",
      },
      {
        heading: "À faire ✅",
        text: "Verrouiller l'écran en quittant le poste de travail. Utiliser le VPN en télétravail et sur les Wi-Fi publics. Mots de passe forts + authentification à deux facteurs (2FA). Signaler immédiatement les e-mails suspects au support informatique.",
        infoBox: {
          variant: "merksatz",
          title: "Conseil",
          text: "Win + L (Windows) ou Ctrl + Cmd + Q (Mac) verrouille l'écran instantanément — même si vous vous absentez brièvement.",
        },
      },
      {
        heading: "À ne pas faire ❌",
        text: "Pas de mot de passe sur un post-it sur le moniteur. Pas de données clients via WhatsApp ou e-mail personnel. Pas de Wi-Fi public sans VPN. Pas de documents sensibles laissés sans surveillance.",
        infoBox: {
          variant: "warnung",
          title: "Jamais",
          text: "N'écrivez JAMAIS vos mots de passe — ni sur des post-it, ni dans des fichiers non sécurisés. Et : ne laissez JAMAIS votre ordinateur portable déverrouillé et sans surveillance, même «juste un instant».",
        },
      },
      {
        heading: "Mots de passe et sécurité des appareils",
        text: "Utilisez un mot de passe unique et fort pour chaque service. Un gestionnaire de mots de passe vous y aidera. Les ordinateurs portables et les appareils mobiles doivent toujours être verrouillés lorsque vous quittez votre poste — un ordinateur déverrouillé est une fuite de données ouverte qui peut être exploitée en quelques secondes.",
        infoBox: {
          variant: "warnung",
          title: "Critique",
          text: "Un seul ordinateur portable déverrouillé et sans surveillance peut compromettre des centaines de jeux de données. Le verrouillage de l'écran est obligatoire — sans exception.",
        },
      },
    ],
    quiz: [
      {
        question: "Vous recevez un e-mail de 'hr@ms-direct.ch' vous demandant de confirmer votre mot de passe. Que faites-vous ?",
        type: "single",
        options: ["Je clique sur le lien et saisis mon mot de passe", "J'ignore l'e-mail et le supprime", "Je signale immédiatement l'e-mail au support informatique"],
        correctIndexes: [2],
        explanation: "C'est du phishing classique. Ne cliquez jamais sur des liens et ne saisissez jamais de mots de passe. Signalez toujours — même si cela semble anodin. Supprimer ne suffit pas, le support informatique doit pouvoir réagir.",
      },
      {
        question: "Quelles mesures protègent efficacement les données personnelles ?",
        type: "multi",
        options: ["Mot de passe sur un post-it sur le moniteur", "Verrouiller l'écran en quittant le poste", "Utiliser le VPN en télétravail", "Partager des données clients via WhatsApp", "Mots de passe forts + 2FA activé"],
        correctIndexes: [1, 2, 4],
        explanation: "Le verrouillage de l'écran, le VPN et la 2FA sont des mesures de sécurité fondamentales. Les mots de passe sur des post-it et WhatsApp pour les données clients constituent des violations de sécurité manifestes.",
      },
      {
        question: "Où un mot de passe ne doit-il PAS être conservé ?",
        type: "multi",
        options: ["Dans un gestionnaire de mots de passe chiffré", "Sur un post-it sur le moniteur", "Dans un fichier texte non sécurisé sur le bureau", "Dans sa mémoire"],
        correctIndexes: [1, 2],
        explanation: "Les mots de passe sur des post-it ou dans des fichiers non sécurisés représentent un risque de sécurité majeur. Seuls les gestionnaires de mots de passe chiffrés ou la mémoire sont des options sûres.",
      },
      {
        question: "Vous devez vous lever et quitter brièvement votre bureau. Que faites-vous avec votre ordinateur portable ?",
        type: "single",
        options: ["Je le laisse ouvert — je ne suis absent que brièvement", "Je ferme uniquement le document sur lequel je travaille", "Je verrouille l'écran (Win+L / Ctrl+Cmd+Q)"],
        correctIndexes: [2],
        explanation: "Même une brève absence suffit pour un accès non autorisé. Le verrouillage de l'écran est simple (Win+L sur Windows, Ctrl+Cmd+Q sur Mac) et absolument nécessaire.",
      },
    ],
  },
  {
    id: 4,
    title: "Obligations et voies de signalement",
    emoji: "📢",
    description: "Connaissez vos obligations et la procédure de signalement en cas de violation.",
    learnContent: [
      {
        heading: "Responsabilité des collaborateurs",
        text: "Chaque collaborateur du groupe MS Direct est coresponsable de la protection des données avec lesquelles il travaille. Cela signifie : respecter les directives de protection des données, participer aux formations et signaler immédiatement les incidents.",
        infoBox: {
          variant: "merksatz",
          title: "À retenir",
          text: "La protection des données est une responsabilité partagée — pas seulement celle du département informatique. Toute personne travaillant avec des données en est responsable.",
        },
      },
      {
        heading: "Obligations de l'entreprise",
        text: "L'entreprise doit mettre en place des mesures techniques et organisationnelles (MTO), tenir un registre des activités de traitement et intégrer la protection des données dès le développement de nouveaux processus (protection des données dès la conception).",
      },
      {
        heading: "Qu'est-ce qu'une violation de données ?",
        text: "Une violation de données se produit lorsque des données personnelles sont accidentellement perdues, détruites, modifiées ou divulguées sans autorisation. Exemples : ordinateur portable avec données clients volé, e-mail envoyé au mauvais destinataire, base de données piratée.",
      },
      {
        heading: "Voie de signalement en cas de violation",
        text: "En interne : informer immédiatement le supérieur hiérarchique ou le délégué à la protection des données. En externe (si risque pour les personnes concernées) : l'entreprise doit notifier le PFPDT (Préposé fédéral à la protection des données et à la transparence) dans les 72 heures.",
        infoBox: {
          variant: "warnung",
          title: "Règle des 72 heures",
          text: "L'entreprise ne dispose que de 72 heures après la découverte d'une violation pour notifier le PFPDT. C'est pourquoi vous devez signaler immédiatement en interne !",
        },
      },
    ],
    quiz: [
      {
        question: "Que devez-vous faire si vous constatez une violation de données ?",
        type: "single",
        options: ["Attendre et voir si quelqu'un d'autre le remarque", "Corriger soi-même la violation sans en informer personne", "Informer immédiatement le supérieur hiérarchique ou le délégué à la protection des données", "Envoyer un e-mail à tous les collaborateurs"],
        correctIndexes: [2],
        explanation: "Un signalement interne rapide est crucial. L'entreprise n'a que 72 heures pour la notification au PFPDT. Corriger soi-même et garder le silence n'est pas une option — cela aggrave les choses.",
      },
      {
        question: "Que signifie la «protection des données dès la conception» ?",
        type: "single",
        options: ["La protection des données est ajoutée après coup lorsque des problèmes surviennent", "La protection des données est intégrée dès le départ dans les systèmes et processus", "Seul le département informatique est responsable de la protection des données"],
        correctIndexes: [1],
        explanation: "La protection des données dès la conception signifie : la protection des données n'est pas un ajout a posteriori, mais fait partie intégrante de chaque processus et système dès le départ — tout comme la sécurité ou la qualité.",
      },
      {
        question: "Qu'est-ce qu'un registre des activités de traitement (art. 12 LPD) ?",
        type: "single",
        options: ["Une liste de tous les collaborateurs ayant accès aux données", "Une documentation de toutes les activités de traitement des données de l'entreprise", "Un registre de toutes les violations de données des 5 dernières années"],
        correctIndexes: [1],
        explanation: "Le registre des activités de traitement (art. 12 LPD) documente systématiquement toutes les activités de traitement des données : quelles données, à quelle fin, par qui, pour combien de temps. C'est un instrument central de la conformité.",
      },
    ],
  },
  {
    id: 5,
    title: "Quiz final",
    emoji: "🏆",
    description: "Montrez ce que vous avez appris ! 5 questions de tous les modules — vous pouvez le faire.",
    learnContent: [],
    quiz: [
      {
        question: "Depuis quand la loi fédérale révisée sur la protection des données (LPD) est-elle en vigueur ?",
        type: "single",
        options: ["25 mai 2018", "1er janvier 2022", "1er septembre 2023"],
        correctIndexes: [2],
        explanation: "La LPD révisée est entrée en vigueur le 1er septembre 2023 — près de 5 ans après le RGPD européen.",
      },
      {
        question: "Qu'est-ce qui n'est PAS une donnée personnelle particulièrement sensible ?",
        type: "single",
        options: ["Statut VIH", "Données d'empreintes digitales", "Adresse e-mail professionnelle"],
        correctIndexes: [2],
        explanation: "Les adresses e-mail professionnelles sont des données personnelles ordinaires. Le statut VIH (santé) et les données d'empreintes digitales (biométrie) sont particulièrement sensibles selon l'art. 5 LPD.",
      },
      {
        question: "Quel est le comportement sécurisé en télétravail ?",
        type: "single",
        options: ["Stocker les données clients sur une clé USB privée", "Activer le VPN et verrouiller l'écran en quittant la pièce", "Laisser l'ordinateur portable d'entreprise déverrouillé quand on s'absente brièvement"],
        correctIndexes: [1],
        explanation: "VPN + écran verrouillé sont la base absolue en télétravail. Les clés USB privées et les appareils déverrouillés constituent des violations de sécurité manifestes.",
      },
      {
        question: "Dans quel délai l'entreprise doit-elle signaler une violation de données au PFPDT ?",
        type: "single",
        options: ["7 jours", "72 heures", "30 jours"],
        correctIndexes: [1],
        explanation: "Le délai de 72 heures s'applique par analogie avec le RGPD européen. C'est pourquoi un signalement interne doit être effectué immédiatement pour que l'entreprise puisse réagir.",
      },
      {
        question: "Que devez-vous faire en cas de suspicion de phishing ?",
        type: "single",
        options: ["Simplement supprimer l'e-mail et l'oublier", "Cliquer sur le lien pour vérifier si c'est vraiment du phishing", "Signaler au support informatique et attendre les instructions"],
        correctIndexes: [2],
        explanation: "Signalez toujours le phishing au support informatique — même si cela semble anodin. Supprimer ne suffit pas, car le support informatique doit évaluer la menace et avertir les autres. Ne cliquez jamais sur des liens suspects !",
      },
    ],
  },
];
