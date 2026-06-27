import type { Module } from './module-types';

export const modules: Module[] = [
  {
    id: 1,
    title: "Introducción a la protección de datos",
    emoji: "🛡️",
    description: "Descubra los fundamentos de la protección de datos y el DSG suizo.",
    videoId: "bGHo6ahlXTI",
    learnContent: [
      {
        heading: "Relevancia e importancia de la protección de datos",
        text: "La protección de datos preserva los derechos y libertades personales de empleados, clientes y usuarios finales. Todo tratamiento de datos personales está afectado: recopilar, conservar, utilizar, transmitir, archivar o suprimir.",
        infoBox: {
          variant: "warnung",
          title: "Atención",
          text: "Incluso las infracciones involuntarias pueden acarrear multas de hasta CHF 250.000 — el desconocimiento no exime de sanciones.",
        },
      },
      {
        heading: "Conceptos básicos de la protección de datos",
        text: "Los datos personales son informaciones relativas a una persona física identificada o identificable — por ejemplo, el nombre, la dirección, la fecha de nacimiento, la dirección de correo electrónico o la dirección IP.",
        infoBox: {
          variant: "merksatz",
          title: "A tener en cuenta",
          text: "Incluso las direcciones IP y los identificadores de dispositivos son datos personales, ya que permiten la identificación.",
        },
      },
      {
        heading: "Datos personales especialmente sensibles",
        text: "Gozan de especial protección los datos relativos a creencias religiosas, ideológicas, políticas o sindicales; a la salud, a la esfera íntima y al origen étnico; a las diligencias penales y administrativas, y a las medidas de asistencia social. Los datos biométricos también forman parte de esta categoría (art. 5 DSG).",
      },
      {
        heading: "Base legal",
        text: "En Suiza, la Ley federal de protección de datos (DSG) revisada está en vigor desde el 1 de septiembre de 2023. Se alinea con el RGPD europeo y refuerza los derechos de los afectados.",
        infoBox: {
          variant: "merksatz",
          title: "A tener en cuenta",
          text: "Tres principios son esenciales: solo los datos necesarios (proporcionalidad), solo para la finalidad declarada (finalidad) y los afectados deben ser informados (transparencia).",
        },
      },
    ],
    quiz: [
      {
        question: "¿Cuáles son datos personales especialmente sensibles?",
        type: "multi",
        options: ["Nombre y dirección", "Fecha de nacimiento", "Información sobre la salud", "Huella dactilar (datos biométricos)", "Profesión", "Pertenencia religiosa"],
        correctIndexes: [2, 3, 5],
        explanation: "Los datos de salud, biométricos e ideológicos están especialmente protegidos (art. 5 DSG). El nombre, la dirección, la fecha de nacimiento y la profesión son datos personales ordinarios.",
      },
      {
        question: "¿Qué incluye el tratamiento de datos según el DSG?",
        type: "multi",
        options: ["Recopilación", "Transmisión", "Archivado", "Conservación", "Supresión", "Utilización"],
        correctIndexes: [0, 1, 2, 3, 4, 5],
        explanation: "El tratamiento de datos abarca todo procesamiento de datos personales — desde la recopilación hasta la supresión definitiva.",
      },
    ],
  },
  {
    id: 2,
    title: "Principios de la protección de datos",
    emoji: "⚖️",
    description: "Comprenda los principios fundamentales del tratamiento de datos personales.",
    learnContent: [
      {
        heading: "Finalidad y minimización de datos",
        text: "Finalidad — los datos solo pueden recopilarse y tratarse con fines determinados, explícitos y legítimos. Minimización de datos — únicamente se pueden recopilar los datos verdaderamente necesarios para la finalidad concreta.",
        infoBox: {
          variant: "merksatz",
          title: "A tener en cuenta",
          text: "Solo los datos necesarios — y únicamente para la finalidad para la que fueron recogidos.",
        },
      },
      {
        heading: "Transparencia y derecho de acceso",
        text: "Transparencia — las personas afectadas deben poder saber qué datos suyos son tratados y con qué fines. Derecho de acceso — tienen derecho a obtener información sobre los datos registrados sobre ellas.",
      },
      {
        heading: "Exactitud y actualidad",
        text: "Los datos deben ser correctos y estar actualizados. Los datos inexactos u obsoletos deben corregirse o suprimirse.",
      },
    ],
    quiz: [
      {
        question: "¿Deben informarse a las personas afectadas sobre los datos tratados y las finalidades?",
        type: "single",
        options: ["No", "Solo si la persona lo solicita", "Sí"],
        correctIndexes: [2],
        explanation: "Así lo exige el principio de transparencia — las personas afectadas deben ser informadas cuando lo soliciten.",
      },
      {
        question: "¿Qué significa el principio de minimización de datos?",
        type: "single",
        options: ["Solo se pueden recopilar los datos necesarios para la finalidad concreta", "Los datos están protegidos frente a accesos no autorizados", "Los datos solo pueden tratarse con fines determinados y legítimos"],
        correctIndexes: [0],
        explanation: "La minimización de datos significa: los menos datos posibles. La tercera opción describe la finalidad.",
      },
    ],
  },
  {
    id: 3,
    title: "Derechos de los afectados",
    emoji: "👤",
    description: "Conozca los derechos que tienen las personas frente a la empresa.",
    learnContent: [
      {
        heading: "Derecho de acceso",
        text: "Las personas afectadas pueden solicitar en cualquier momento información sobre el tratamiento de sus datos. La solicitud es gestionada por el delegado de protección de datos, quien facilita la información en un plazo de 30 días.",
      },
      {
        heading: "Derecho de rectificación y supresión",
        text: "Rectificación — las personas afectadas pueden solicitar la corrección de datos inexactos. Supresión — pueden solicitar la eliminación si los datos ya no son necesarios o han sido tratados ilícitamente.",
      },
      {
        heading: "Derecho a la limitación del tratamiento",
        text: "Las personas afectadas pueden solicitar que sus datos solo se traten de forma limitada — por ejemplo, si cuestionan su exactitud.",
      },
      {
        heading: "Derecho de oposición y portabilidad de datos",
        text: "Oposición — las personas afectadas pueden oponerse al tratamiento por razones relacionadas con su situación particular. Portabilidad — pueden solicitar que sus datos se transmitan en un formato estructurado, de uso común y legible por máquina.",
        infoBox: {
          variant: "merksatz",
          title: "Los seis derechos",
          text: "Acceso, rectificación, supresión, limitación, oposición y portabilidad de datos.",
        },
      },
    ],
    quiz: [
      {
        question: "¿Qué derechos tienen las personas afectadas sobre sus datos?",
        type: "single",
        options: ["Únicamente el derecho de acceso", "Acceso, rectificación, supresión, limitación, oposición y portabilidad de datos", "Ningún derecho especial"],
        correctIndexes: [1],
        explanation: "El DSG otorga a los afectados la totalidad de los seis derechos mencionados.",
      },
      {
        question: "¿En qué plazo debe concederse el acceso?",
        type: "single",
        options: ["7 días", "30 días", "90 días"],
        correctIndexes: [1],
        explanation: "El acceso se concede generalmente en un plazo de 30 días.",
      },
    ],
  },
  {
    id: 4,
    title: "Obligaciones de la empresa y los empleados",
    emoji: "📢",
    description: "Conozca sus obligaciones y el procedimiento de notificación en caso de infracción.",
    learnContent: [
      {
        heading: "Procesos conformes con la protección de datos",
        text: "La empresa debe implementar procesos que garanticen todos los principios de protección de datos en las operaciones diarias. MS Direct Group cuenta con el sello de calidad «GoodPrivacy» de SQS, que acredita un sistema de gestión de protección de datos adecuado.",
        infoBox: {
          variant: "merksatz",
          title: "GoodPrivacy",
          text: "GoodPrivacy (SQS) certifica que MS Direct Group dispone de un sistema de gestión de protección de datos auditado.",
        },
      },
      {
        heading: "Responsabilidades de los empleados",
        text: "Cada empleado es corresponsable de la protección de los datos con los que trabaja. Todos participan en las formaciones y respetan las directrices de protección de datos.",
        infoBox: {
          variant: "merksatz",
          title: "A tener en cuenta",
          text: "La protección de datos es un trabajo en equipo — no es responsabilidad exclusiva del departamento de TI.",
        },
      },
      {
        heading: "Obligaciones de la empresa",
        text: "La empresa implementa medidas técnicas y organizativas (MTO), lleva un registro de actividades de tratamiento e integra la protección de datos desde el desarrollo de nuevos procesos (privacidad desde el diseño).",
      },
      {
        heading: "Obligaciones de notificación en caso de infracción",
        text: "Internamente — los incidentes o sospechas de incidente deben notificarse de inmediato al delegado de protección de datos o al superior jerárquico. Externamente — si y cuándo se notifica a la autoridad supervisora (PFPDT) o a los afectados lo decide el delegado de protección de datos.",
        infoBox: {
          variant: "warnung",
          title: "Obligación de notificación",
          text: "Notifique de inmediato internamente cualquier incidente o sospecha de incidente relativo a la protección de datos. El delegado evalúa si es necesaria una notificación al PFPDT. Si la notificación es necesaria, debe realizarse lo antes posible.",
        },
      },
    ],
    quiz: [
      {
        question: "¿Qué debe hacer si detecta una infracción de datos?",
        type: "single",
        options: ["Esperar a ver si alguien más lo detecta", "Corregirlo uno mismo sin informar a nadie", "Informar de inmediato al superior jerárquico o al delegado de protección de datos", "Enviar un correo electrónico a todos los empleados"],
        correctIndexes: [2],
        explanation: "La notificación interna inmediata es crucial. El DSG suizo no establece un plazo fijo de 72 horas — esa es una regla del RGPD europeo. Las infracciones con alto riesgo deben notificarse al PFPDT lo antes posible. Corregirlo uno mismo y guardar silencio no es una opción.",
      },
      {
        question: "¿Qué significa la «privacidad desde el diseño»?",
        type: "single",
        options: ["La protección de datos se añade a posteriori en caso de problemas", "La protección de datos se integra desde el principio en los sistemas y procesos", "Solo el departamento de TI es responsable de la protección de datos"],
        correctIndexes: [1],
        explanation: "La privacidad desde el diseño significa que forma parte integral de cada proceso y sistema desde el principio — igual que la seguridad o la calidad.",
      },
      {
        question: "¿Qué es un registro de actividades de tratamiento (art. 12 DSG)?",
        type: "single",
        options: ["Una lista de todos los empleados con acceso a los datos", "Una documentación de todas las actividades de tratamiento de datos de la empresa", "Un registro de todas las infracciones de los últimos 5 años"],
        correctIndexes: [1],
        explanation: "El registro de actividades de tratamiento (art. 12 DSG) documenta sistemáticamente todas las actividades de tratamiento: qué datos, con qué finalidad, por quién, durante cuánto tiempo. Es un instrumento central de conformidad.",
      },
    ],
  },
  {
    id: 5,
    title: "Seguridad informática y protección de datos",
    emoji: "🔒",
    description: "Identifique los riesgos informáticos típicos y aprenda a prevenir infracciones en el día a día.",
    learnContent: [
      {
        heading: "Principios de seguridad informática en el puesto de trabajo",
        text: "Se aplican normas claras: utilizar contraseñas seguras, bloquear el ordenador en caso de ausencia y no instalar software desconocido.",
      },
      {
        heading: "Contraseñas seguras y gestión de contraseñas",
        text: "Utilice contraseñas largas y complejas con mayúsculas, minúsculas, números y caracteres especiales — una contraseña única para cada servicio. Un gestor de contraseñas facilita el almacenamiento y la gestión seguros.",
        infoBox: {
          variant: "merksatz",
          title: "Consejo",
          text: "Win + L (Windows) o Ctrl + Cmd + Q (Mac) bloquea la pantalla al instante — incluso si se ausenta brevemente.",
        },
      },
      {
        heading: "Reconocer el phishing y la ingeniería social",
        text: "Los correos electrónicos de phishing imitan a remitentes reales y solicitan credenciales o clics en enlaces. En caso de duda, elimine el correo en lugar de arriesgarse — nunca haga clic en enlaces o archivos adjuntos y contacte con el soporte de TI.",
        infoBox: {
          variant: "warnung",
          title: "Realidad",
          text: "Más del 80 % de todas las infracciones de datos son causadas por errores humanos, no por ataques informáticos técnicos.",
        },
      },
      {
        heading: "Qué hacer ✅",
        text: "Bloquear la pantalla al abandonar el puesto de trabajo. Usar VPN en teletrabajo y en redes Wi-Fi públicas. Contraseñas seguras + autenticación de dos factores (2FA). Notificar inmediatamente al soporte de TI los correos electrónicos sospechosos.",
      },
      {
        heading: "Qué no hacer ❌",
        text: "No poner contraseñas en un post-it en el monitor. No enviar datos de clientes por WhatsApp o correo electrónico personal. No usar Wi-Fi público sin VPN. No dejar documentos sensibles desatendidos.",
        infoBox: {
          variant: "warnung",
          title: "Nunca",
          text: "NUNCA anote sus contraseñas — ni en post-its ni en archivos no protegidos. Y: NUNCA deje su portátil desbloqueado y desatendido, aunque sea «solo un momento».",
        },
      },
    ],
    quiz: [
      {
        question: "Recibe un correo de 'hr@ms-direct.ch' solicitándole que confirme su contraseña. ¿Qué hace?",
        type: "single",
        options: ["Hago clic en el enlace e introduzco mi contraseña", "Ignoro el correo y lo elimino", "Notifico de inmediato el correo al soporte de TI"],
        correctIndexes: [2],
        explanation: "Es phishing clásico. Nunca haga clic en enlaces ni introduzca contraseñas. Notifique siempre — aunque parezca inofensivo. Eliminar no es suficiente.",
      },
      {
        question: "¿Qué medidas protegen eficazmente los datos personales?",
        type: "multi",
        options: ["Contraseña en un post-it en el monitor", "Bloquear la pantalla al abandonar el puesto", "Usar VPN en teletrabajo", "Compartir datos de clientes por WhatsApp", "Contraseñas seguras + 2FA activado"],
        correctIndexes: [1, 2, 4],
        explanation: "El bloqueo de pantalla, la VPN y el 2FA son medidas de seguridad fundamentales. Las contraseñas en post-its y WhatsApp para datos de clientes son infracciones manifiestas.",
      },
      {
        question: "¿Dónde NO debe guardarse una contraseña?",
        type: "multi",
        options: ["En un gestor de contraseñas cifrado", "En un post-it en el monitor", "En un archivo de texto no protegido en el escritorio", "En la memoria"],
        correctIndexes: [1, 2],
        explanation: "Las contraseñas en post-its o archivos no protegidos representan un riesgo de seguridad importante. Solo los gestores cifrados o la memoria son opciones seguras.",
      },
      {
        question: "Debe ausentarse brevemente de su puesto de trabajo. ¿Qué hace con su portátil?",
        type: "single",
        options: ["Lo dejo abierto — solo me ausento un momento", "Cierro únicamente el documento en curso", "Bloqueo la pantalla (Win+L / Ctrl+Cmd+Q)"],
        correctIndexes: [2],
        explanation: "Incluso una breve ausencia es suficiente para un acceso no autorizado. El bloqueo es sencillo (Win+L en Windows, Ctrl+Cmd+Q en Mac) y absolutamente necesario.",
      },
    ],
  },
  {
    id: 6,
    title: "Interlocutores internos y canales de notificación",
    emoji: "📞",
    description: "Sepa a quién dirigirse para sus preguntas y en caso de incidente.",
    learnContent: [
      {
        heading: "¿A quién debo dirigirme?",
        text: "El delegado de protección de datos de MS Direct Group es Myrio Kluser. Puede contactarle en myrio.kluser@qmart.ch. Es su interlocutor para preguntas y problemas de protección de datos, solicitudes de información de los afectados e incidentes relacionados con la protección de datos.",
        infoBox: {
          variant: "merksatz",
          title: "En caso de duda",
          text: "En caso de duda, no decida solo — contacte con el delegado de protección de datos.",
        },
      },
      {
        heading: "¿Cómo notificar un incidente?",
        text: "Notifique de inmediato los incidentes de protección de datos o las sospechas de incidente internamente al delegado o a su superior jerárquico. Cuanto más rápida sea la notificación, mejor podrá reaccionar la empresa. El delegado de protección de datos evalúa si y cuándo es necesaria una notificación al PFPDT.",
      },
    ],
    quiz: [
      {
        question: "¿A quién notifica primero un incidente de protección de datos?",
        type: "single",
        options: ["Directamente al PFPDT", "Al delegado interno de protección de datos o al superior jerárquico", "Por correo electrónico a todos los empleados"],
        correctIndexes: [1],
        explanation: "Notifique siempre primero internamente. La notificación externa al PFPDT es gestionada por el delegado de protección de datos.",
      },
      {
        question: "¿Quién es el delegado de protección de datos de MS Direct Group?",
        type: "single",
        options: ["Myrio Kluser", "El departamento de TI", "La dirección"],
        correctIndexes: [0],
        explanation: "Myrio Kluser (myrio.kluser@qmart.ch) es el interlocutor central para las cuestiones de protección de datos.",
      },
    ],
  },
  {
    id: 7,
    title: "Cuestionario final",
    emoji: "🏆",
    description: "¡Demuestre lo que ha aprendido! 5 preguntas de todos los módulos — ¡puede hacerlo!",
    learnContent: [],
    quiz: [
      {
        question: "¿Desde cuándo está en vigor la Ley federal de protección de datos (DSG) revisada?",
        type: "single",
        options: ["25 de mayo de 2018", "1 de enero de 2022", "1 de septiembre de 2023"],
        correctIndexes: [2],
        explanation: "El DSG revisado entró en vigor el 1 de septiembre de 2023 — casi 5 años después del RGPD europeo.",
      },
      {
        question: "¿Qué NO es un dato personal especialmente sensible?",
        type: "single",
        options: ["Estado VIH", "Datos de huellas dactilares", "Dirección de correo electrónico profesional"],
        correctIndexes: [2],
        explanation: "Las direcciones de correo electrónico profesionales son datos personales ordinarios. El estado VIH (salud) y los datos de huellas dactilares (biometría) son especialmente sensibles según el art. 5 DSG.",
      },
      {
        question: "¿Cuál es el comportamiento seguro en teletrabajo?",
        type: "single",
        options: ["Guardar los datos de clientes en una memoria USB privada", "Activar la VPN y bloquear la pantalla al salir de la habitación", "Dejar el portátil de empresa desbloqueado en una breve ausencia"],
        correctIndexes: [1],
        explanation: "VPN + pantalla bloqueada son la base absoluta en teletrabajo. Las memorias USB privadas y los dispositivos desbloqueados son infracciones de seguridad manifiestas.",
      },
      {
        question: "¿Qué exige el DSG suizo para notificar una infracción de datos al PFPDT?",
        type: "single",
        options: ["Un plazo fijo de 72 horas, como en el RGPD europeo", "Las infracciones de datos nunca necesitan notificarse externamente", "La notificación debe realizarse lo antes posible si existe un alto riesgo"],
        correctIndexes: [2],
        explanation: "El DSG suizo NO establece un plazo fijo de 72 horas — esa es una regla del RGPD europeo. Las infracciones que probablemente conlleven un alto riesgo para la personalidad o los derechos fundamentales deben notificarse al PFPDT lo antes posible.",
      },
      {
        question: "¿Qué debe hacer ante una sospecha de phishing?",
        type: "single",
        options: ["Simplemente eliminar el correo electrónico y olvidarlo", "Hacer clic en el enlace para verificar si es realmente phishing", "Notificar al soporte de TI y esperar instrucciones"],
        correctIndexes: [2],
        explanation: "Notifique siempre el phishing al soporte de TI — aunque parezca inofensivo. Eliminar no es suficiente. ¡Nunca haga clic en enlaces sospechosos!",
      },
    ],
  },
];
