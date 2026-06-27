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
        heading: "Pertinence et importance de la protection des données",
        text: "La protection des données préserve les droits et libertés personnels des collaborateurs, clients et utilisateurs finaux. Tout traitement de données personnelles est concerné : collecter, conserver, utiliser, transmettre, archiver ou supprimer.",
        infoBox: {
          variant: "warnung",
          title: "Attention",
          text: "Même les violations involontaires peuvent entraîner des amendes allant jusqu'à CHF 250 000 — l'ignorance ne protège pas contre les sanctions.",
        },
      },
      {
        heading: "Notions fondamentales de la protection des données",
        text: "Les données personnelles sont des informations se rapportant à une personne physique identifiée ou identifiable — par exemple, le nom, l'adresse, la date de naissance, l'adresse e-mail ou l'adresse IP.",
        infoBox: {
          variant: "merksatz",
          title: "À retenir",
          text: "Même les adresses IP et les identifiants d'appareils sont des données personnelles car ils permettent une identification.",
        },
      },
      {
        heading: "Données personnelles particulièrement sensibles",
        text: "Sont particulièrement protégées les données relatives aux convictions religieuses, idéologiques, politiques ou syndicales ; à la santé, à la sphère intime et à l'appartenance ethnique ; aux poursuites pénales et administratives ainsi qu'aux mesures d'aide sociale. Les données biométriques en font également partie (art. 5 LPD).",
      },
      {
        heading: "Base légale",
        text: "En Suisse, la loi fédérale révisée sur la protection des données (LPD) est en vigueur depuis le 1er septembre 2023. Elle s'aligne sur le RGPD européen et renforce les droits des personnes concernées.",
        infoBox: {
          variant: "merksatz",
          title: "À retenir",
          text: "Trois principes sont essentiels : seulement les données nécessaires (proportionnalité), seulement pour le but déclaré (finalité) et les personnes concernées doivent être informées (transparence).",
        },
      },
    ],
    quiz: [
      {
        question: "Quelles sont les données personnelles particulièrement sensibles ?",
        type: "multi",
        options: ["Nom et adresse", "Date de naissance", "Informations sur la santé", "Empreinte digitale (données biométriques)", "Profession", "Appartenance religieuse"],
        correctIndexes: [2, 3, 5],
        explanation: "Les données de santé, biométriques et idéologiques sont particulièrement protégées (art. 5 LPD). Le nom, l'adresse, la date de naissance et la profession sont des données personnelles ordinaires.",
      },
      {
        question: "Que comprend le traitement des données selon la LPD ?",
        type: "multi",
        options: ["Collecte", "Transmission", "Archivage", "Conservation", "Suppression", "Utilisation"],
        correctIndexes: [0, 1, 2, 3, 4, 5],
        explanation: "Le traitement des données englobe tout traitement de données personnelles — de la collecte à la suppression définitive.",
      },
    ],
  },
  {
    id: 2,
    title: "Principes de la protection des données",
    emoji: "⚖️",
    description: "Comprenez les principes fondamentaux régissant le traitement des données personnelles.",
    learnContent: [
      {
        heading: "Finalité et minimisation des données",
        text: "Finalité — les données ne peuvent être collectées et traitées qu'à des fins déterminées, explicites et légitimes. Minimisation des données — seules les données véritablement nécessaires à la finalité spécifique peuvent être collectées.",
        infoBox: {
          variant: "merksatz",
          title: "À retenir",
          text: "Seulement les données nécessaires — et seulement pour la finalité pour laquelle elles ont été collectées.",
        },
      },
      {
        heading: "Transparence et droit d'accès",
        text: "Transparence — les personnes concernées doivent pouvoir savoir quelles données les concernant sont traitées et à quelles fins. Droit d'accès — elles ont le droit d'obtenir des informations sur les données enregistrées à leur sujet.",
      },
      {
        heading: "Exactitude et actualité",
        text: "Les données doivent être correctes et à jour. Les données inexactes ou obsolètes doivent être corrigées ou supprimées.",
      },
    ],
    quiz: [
      {
        question: "Les personnes concernées doivent-elles être informées des données traitées et des finalités ?",
        type: "single",
        options: ["Non", "Seulement si la personne le demande", "Oui"],
        correctIndexes: [2],
        explanation: "C'est ce qu'exige le principe de transparence — les personnes concernées doivent être informées sur demande.",
      },
      {
        question: "Que signifie le principe de minimisation des données ?",
        type: "single",
        options: ["Seules les données nécessaires à la finalité spécifique peuvent être collectées", "Les données sont protégées contre tout accès non autorisé", "Les données ne peuvent être traitées qu'à des fins déterminées et légitimes"],
        correctIndexes: [0],
        explanation: "La minimisation des données signifie : le moins de données possible. La troisième option décrit la finalité.",
      },
    ],
  },
  {
    id: 3,
    title: "Droits des personnes concernées",
    emoji: "👤",
    description: "Connaissez les droits dont disposent les personnes vis-à-vis de l'entreprise.",
    learnContent: [
      {
        heading: "Droit d'accès",
        text: "Les personnes concernées peuvent à tout moment demander des informations sur le traitement de leurs données. La demande est traitée par le délégué à la protection des données, qui fournit les informations dans un délai de 30 jours.",
      },
      {
        heading: "Droit de rectification et d'effacement",
        text: "Rectification — les personnes concernées peuvent demander la correction de données inexactes. Effacement — elles peuvent demander la suppression si les données ne sont plus nécessaires ou ont été traitées illicitement.",
      },
      {
        heading: "Droit à la limitation du traitement",
        text: "Les personnes concernées peuvent demander que leurs données ne soient traitées que de manière limitée — par exemple si elles contestent leur exactitude.",
      },
      {
        heading: "Droit d'opposition et portabilité des données",
        text: "Opposition — les personnes concernées peuvent s'opposer au traitement pour des raisons tenant à leur situation particulière. Portabilité — elles peuvent demander que leurs données soient transmises dans un format structuré, couramment utilisé et lisible par machine.",
        infoBox: {
          variant: "merksatz",
          title: "Les six droits",
          text: "Accès, rectification, effacement, limitation, opposition et portabilité des données.",
        },
      },
    ],
    quiz: [
      {
        question: "Quels droits ont les personnes concernées sur leurs données ?",
        type: "single",
        options: ["Uniquement le droit d'accès", "Accès, rectification, effacement, limitation, opposition et portabilité des données", "Aucun droit particulier"],
        correctIndexes: [1],
        explanation: "La LPD accorde aux personnes concernées l'ensemble des six droits mentionnés.",
      },
      {
        question: "Dans quel délai l'accès doit-il être accordé ?",
        type: "single",
        options: ["7 jours", "30 jours", "90 jours"],
        correctIndexes: [1],
        explanation: "L'accès est généralement accordé dans un délai de 30 jours.",
      },
    ],
  },
  {
    id: 4,
    title: "Obligations de l'entreprise et des collaborateurs",
    emoji: "📢",
    description: "Connaissez vos obligations et la procédure de signalement en cas de violation.",
    learnContent: [
      {
        heading: "Processus conformes à la protection des données",
        text: "L'entreprise doit mettre en place des processus garantissant tous les principes de protection des données dans les opérations quotidiennes. Le groupe MS Direct détient le label de qualité «GoodPrivacy» de la SQS, qui atteste d'un système de gestion de la protection des données adéquat.",
        infoBox: {
          variant: "merksatz",
          title: "GoodPrivacy",
          text: "GoodPrivacy (SQS) certifie que le groupe MS Direct dispose d'un système de gestion de la protection des données vérifié.",
        },
      },
      {
        heading: "Responsabilités des collaborateurs",
        text: "Chaque collaborateur est coresponsable de la protection des données avec lesquelles il travaille. Tous participent aux formations et respectent les directives de protection des données.",
        infoBox: {
          variant: "merksatz",
          title: "À retenir",
          text: "La protection des données est un travail d'équipe — ce n'est pas seulement la responsabilité du département informatique.",
        },
      },
      {
        heading: "Obligations de l'entreprise",
        text: "L'entreprise met en place des mesures techniques et organisationnelles (MTO), tient un registre des activités de traitement et intègre la protection des données dès le développement de nouveaux processus (protection des données dès la conception).",
      },
      {
        heading: "Obligations de notification en cas de violation",
        text: "En interne — les incidents ou suspicions d'incident doivent être signalés immédiatement au délégué à la protection des données ou au supérieur hiérarchique. En externe — c'est le délégué à la protection des données qui évalue et décide si et quand une notification au PFPDT ou aux personnes concernées est nécessaire.",
        infoBox: {
          variant: "warnung",
          title: "Obligation de notification",
          text: "Signalez immédiatement en interne tout incident de protection des données ou soupçon d'incident. Le délégué à la protection des données évalue si une notification au PFPDT est nécessaire. Si une notification est requise, elle doit être effectuée dès que possible.",
        },
      },
    ],
    quiz: [
      {
        question: "Que devez-vous faire si vous constatez une violation de données ?",
        type: "single",
        options: ["Attendre de voir si quelqu'un d'autre le remarque", "Corriger soi-même sans en informer personne", "Informer immédiatement le supérieur hiérarchique ou le délégué à la protection des données", "Envoyer un e-mail à tous les collaborateurs"],
        correctIndexes: [2],
        explanation: "Un signalement interne rapide est crucial. La LPD suisse ne prévoit aucun délai fixe de 72 heures — c'est une règle du RGPD européen. Les violations présentant un risque élevé doivent être notifiées au PFPDT dès que possible. Corriger soi-même et garder le silence n'est pas une option.",
      },
      {
        question: "Que signifie la «protection des données dès la conception» ?",
        type: "single",
        options: ["La protection des données est ajoutée après coup en cas de problèmes", "La protection des données est intégrée dès le départ dans les systèmes et processus", "Seul le département informatique est responsable de la protection des données"],
        correctIndexes: [1],
        explanation: "La protection des données dès la conception signifie qu'elle fait partie intégrante de chaque processus et système dès le départ — tout comme la sécurité ou la qualité.",
      },
      {
        question: "Qu'est-ce qu'un registre des activités de traitement (art. 12 LPD) ?",
        type: "single",
        options: ["Une liste de tous les collaborateurs ayant accès aux données", "Une documentation de toutes les activités de traitement des données de l'entreprise", "Un registre de toutes les violations des 5 dernières années"],
        correctIndexes: [1],
        explanation: "Le registre des activités de traitement (art. 12 LPD) documente systématiquement toutes les activités de traitement : quelles données, à quelle fin, par qui, pendant combien de temps. C'est un instrument central de conformité.",
      },
    ],
  },
  {
    id: 5,
    title: "Sécurité informatique et protection des données",
    emoji: "🔒",
    description: "Identifiez les risques informatiques typiques et apprenez à prévenir les violations au quotidien.",
    learnContent: [
      {
        heading: "Principes de sécurité informatique sur le lieu de travail",
        text: "Des règles claires s'appliquent : utiliser des mots de passe sécurisés, verrouiller l'ordinateur en cas d'absence et ne pas installer de logiciels inconnus.",
      },
      {
        heading: "Mots de passe sécurisés et gestion des mots de passe",
        text: "Utilisez des mots de passe longs et complexes avec des majuscules, des minuscules, des chiffres et des caractères spéciaux — un mot de passe unique pour chaque service. Un gestionnaire de mots de passe facilite le stockage et la gestion sécurisés.",
        infoBox: {
          variant: "merksatz",
          title: "Conseil",
          text: "Win + L (Windows) ou Ctrl + Cmd + Q (Mac) verrouille l'écran instantanément — même si vous vous absentez brièvement.",
        },
      },
      {
        heading: "Reconnaître le phishing et l'ingénierie sociale",
        text: "Les e-mails de phishing imitent de vrais expéditeurs et demandent des identifiants ou des clics sur des liens. En cas de doute, supprimez l'e-mail plutôt que de prendre un risque — ne cliquez jamais sur des liens ou des pièces jointes et contactez le support informatique.",
        infoBox: {
          variant: "warnung",
          title: "Réalité",
          text: "Plus de 80 % de toutes les violations de données sont causées par des erreurs humaines, et non par des attaques informatiques techniques.",
        },
      },
      {
        heading: "À faire ✅",
        text: "Verrouiller l'écran en quittant le poste de travail. Utiliser le VPN en télétravail et sur les Wi-Fi publics. Mots de passe forts + authentification à deux facteurs (2FA). Signaler immédiatement les e-mails suspects au support informatique.",
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
    ],
    quiz: [
      {
        question: "Vous recevez un e-mail de 'hr@ms-direct.ch' vous demandant de confirmer votre mot de passe. Que faites-vous ?",
        type: "single",
        options: ["Je clique sur le lien et saisis mon mot de passe", "J'ignore l'e-mail et le supprime", "Je signale immédiatement l'e-mail au support informatique"],
        correctIndexes: [2],
        explanation: "C'est du phishing classique. Ne cliquez jamais sur des liens et ne saisissez jamais de mots de passe. Signalez toujours — même si cela semble anodin. Supprimer ne suffit pas.",
      },
      {
        question: "Quelles mesures protègent efficacement les données personnelles ?",
        type: "multi",
        options: ["Mot de passe sur un post-it sur le moniteur", "Verrouiller l'écran en quittant le poste", "Utiliser le VPN en télétravail", "Partager des données clients via WhatsApp", "Mots de passe forts + 2FA activé"],
        correctIndexes: [1, 2, 4],
        explanation: "Le verrouillage de l'écran, le VPN et la 2FA sont des mesures de sécurité fondamentales. Les mots de passe sur des post-it et WhatsApp pour les données clients sont des violations manifestes.",
      },
      {
        question: "Où un mot de passe ne doit-il PAS être conservé ?",
        type: "multi",
        options: ["Dans un gestionnaire de mots de passe chiffré", "Sur un post-it sur le moniteur", "Dans un fichier texte non sécurisé sur le bureau", "Dans sa mémoire"],
        correctIndexes: [1, 2],
        explanation: "Les mots de passe sur des post-it ou dans des fichiers non sécurisés représentent un risque de sécurité majeur. Seuls les gestionnaires chiffrés ou la mémoire sont des options sûres.",
      },
      {
        question: "Vous devez vous absenter brièvement de votre bureau. Que faites-vous avec votre ordinateur portable ?",
        type: "single",
        options: ["Je le laisse ouvert — je ne suis absent que brièvement", "Je ferme uniquement le document en cours", "Je verrouille l'écran (Win+L / Ctrl+Cmd+Q)"],
        correctIndexes: [2],
        explanation: "Même une brève absence suffit pour un accès non autorisé. Le verrouillage est simple (Win+L sur Windows, Ctrl+Cmd+Q sur Mac) et absolument nécessaire.",
      },
    ],
  },
  {
    id: 6,
    title: "Interlocuteurs internes et filières de signalement",
    emoji: "📞",
    description: "Sachez à qui vous adresser pour vos questions et en cas d'incident.",
    learnContent: [
      {
        heading: "À qui m'adresser ?",
        text: "Le délégué à la protection des données du groupe MS Direct est Myrio Kluser. Vous pouvez le contacter à myrio.kluser@qmart.ch. Il est votre interlocuteur pour les questions et problèmes de protection des données, les demandes de renseignements des personnes concernées et les incidents liés à la protection des données.",
        infoBox: {
          variant: "merksatz",
          title: "En cas de doute",
          text: "En cas de doute, ne décidez pas seul — contactez le délégué à la protection des données.",
        },
      },
      {
        heading: "Comment signaler un incident ?",
        text: "Signalez immédiatement les incidents liés à la protection des données ou les suspicions d'incident en interne au délégué ou à votre supérieur hiérarchique. Plus le signalement est rapide, mieux l'entreprise peut réagir. Le délégué à la protection des données évalue si et quand une notification au PFPDT est nécessaire.",
      },
    ],
    quiz: [
      {
        question: "À qui signalez-vous en premier un incident lié à la protection des données ?",
        type: "single",
        options: ["Directement au PFPDT", "Au délégué interne à la protection des données ou au supérieur hiérarchique", "Par e-mail à tous les collaborateurs"],
        correctIndexes: [1],
        explanation: "Signalez toujours d'abord en interne. La notification externe au PFPDT est assurée par le délégué à la protection des données.",
      },
      {
        question: "Qui est le délégué à la protection des données du groupe MS Direct ?",
        type: "single",
        options: ["Myrio Kluser", "Le département informatique", "La direction"],
        correctIndexes: [0],
        explanation: "Myrio Kluser (myrio.kluser@qmart.ch) est l'interlocuteur central pour les questions de protection des données.",
      },
    ],
  },
  {
    id: 7,
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
        options: ["Stocker les données clients sur une clé USB privée", "Activer le VPN et verrouiller l'écran en quittant la pièce", "Laisser l'ordinateur portable d'entreprise déverrouillé lors d'une courte absence"],
        correctIndexes: [1],
        explanation: "VPN + écran verrouillé sont la base absolue en télétravail. Les clés USB privées et les appareils déverrouillés constituent des violations de sécurité manifestes.",
      },
      {
        question: "Qu'exige la LPD suisse pour la notification d'une violation de données au PFPDT ?",
        type: "single",
        options: ["Un délai fixe de 72 heures, comme dans le RGPD européen", "Les violations de données n'ont jamais besoin d'être signalées à l'extérieur", "La notification doit être effectuée dès que possible s'il existe un risque élevé"],
        correctIndexes: [2],
        explanation: "La LPD suisse ne prévoit AUCUN délai fixe de 72 heures — c'est une règle du RGPD européen. Les violations susceptibles de présenter un risque élevé pour la personnalité ou les droits fondamentaux doivent être notifiées au PFPDT dès que possible.",
      },
      {
        question: "Que devez-vous faire en cas de suspicion de phishing ?",
        type: "single",
        options: ["Simplement supprimer l'e-mail et l'oublier", "Cliquer sur le lien pour vérifier si c'est vraiment du phishing", "Signaler au support informatique et attendre les instructions"],
        correctIndexes: [2],
        explanation: "Signalez toujours le phishing au support informatique — même si cela semble anodin. Supprimer ne suffit pas. Ne cliquez jamais sur des liens suspects !",
      },
    ],
  },
];
