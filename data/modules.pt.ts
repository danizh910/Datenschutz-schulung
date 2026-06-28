import type { Module } from './module-types';

export const modules: Module[] = [
  {
    id: 1,
    title: "Introdução à proteção de dados",
    emoji: "🛡️",
    description: "Descubra os fundamentos da proteção de dados e o DSG suíço.",
    videoId: "bGHo6ahlXTI",
    learnContent: [
      {
        heading: "Relevância e importância da proteção de dados",
        text: "A proteção de dados preserva os direitos e liberdades pessoais de colaboradores, clientes e utilizadores finais. Qualquer operação de tratamento de dados pessoais está abrangida: recolher, conservar, utilizar, transmitir, arquivar ou eliminar.",
        infoBox: {
          variant: "warnung",
          title: "Atenção",
          text: "As infrações intencionais por pessoas singulares podem acarretar coimas de até CHF 250.000 (art. 60–63 LPD). O desconhecimento não protege de sanções.",
        },
      },
      {
        heading: "Conceitos básicos de proteção de dados",
        text: "Dados pessoais são informações relativas a uma pessoa singular identificada ou identificável — por exemplo, nome, morada, data de nascimento, endereço de e-mail ou endereço IP.",
        infoBox: {
          variant: "merksatz",
          title: "A reter",
          text: "Mesmo os endereços IP e os identificadores de dispositivos são dados pessoais, pois permitem a identificação.",
        },
      },
      {
        heading: "Dados pessoais especialmente sensíveis",
        text: "Gozam de proteção especial os dados relativos a convicções religiosas, ideológicas, políticas ou sindicais; à saúde, à esfera íntima e à pertença étnica; a processos penais e administrativos, e a medidas de assistência social. Os dados biométricos também fazem parte desta categoria (art. 5 DSG).",
      },
      {
        heading: "Base legal",
        text: "Na Suíça, a Lei federal de proteção de dados (DSG) revista está em vigor desde 1 de setembro de 2023. Alinha-se com o RGPD europeu e reforça os direitos dos titulares dos dados.",
        infoBox: {
          variant: "merksatz",
          title: "A reter",
          text: "Três princípios são essenciais: apenas os dados necessários (proporcionalidade), apenas para a finalidade declarada (finalidade) e os titulares devem ser informados (transparência).",
        },
      },
    ],
    quiz: [
      {
        question: "Quais são dados pessoais especialmente sensíveis?",
        type: "multi",
        options: ["Nome e morada", "Data de nascimento", "Informações sobre saúde", "Impressão digital (dados biométricos)", "Profissão", "Pertença religiosa"],
        correctIndexes: [2, 3, 5],
        explanation: "Os dados de saúde, biométricos e ideológicos gozam de proteção especial (art. 5 DSG). Nome, morada, data de nascimento e profissão são dados pessoais comuns.",
      },
      {
        question: "O que abrange o tratamento de dados segundo o DSG?",
        type: "multi",
        options: ["Recolha", "Transmissão", "Arquivo", "Conservação", "Eliminação", "Utilização"],
        correctIndexes: [0, 1, 2, 3, 4, 5],
        explanation: "O tratamento de dados abrange qualquer operação sobre dados pessoais — desde a recolha até à eliminação definitiva.",
      },
    ],
  },
  {
    id: 2,
    title: "Princípios da proteção de dados",
    emoji: "⚖️",
    description: "Compreenda os princípios fundamentais que regem o tratamento de dados pessoais.",
    learnContent: [
      {
        heading: "Finalidade e minimização de dados",
        text: "Finalidade — os dados só podem ser recolhidos e tratados para fins determinados, explícitos e legítimos. Minimização de dados — apenas os dados efetivamente necessários para a finalidade específica podem ser recolhidos.",
        infoBox: {
          variant: "merksatz",
          title: "A reter",
          text: "Apenas os dados necessários — e exclusivamente para a finalidade para a qual foram recolhidos.",
        },
      },
      {
        heading: "Transparência e direito de acesso",
        text: "Transparência — os titulares dos dados devem poder saber quais os seus dados que são tratados e para que fins. Direito de acesso — têm direito a obter informações sobre os dados registados a seu respeito.",
      },
      {
        heading: "Exatidão e atualidade",
        text: "Os dados devem ser corretos e atualizados. Os dados inexatos ou desatualizados devem ser corrigidos ou eliminados.",
      },
    ],
    quiz: [
      {
        question: "Os titulares dos dados devem ser informados sobre os dados tratados e as finalidades?",
        type: "single",
        options: ["Não", "Apenas se a pessoa o solicitar", "Sim"],
        correctIndexes: [2],
        explanation: "Assim o exige o princípio da transparência — os titulares devem ser informados quando o solicitarem.",
      },
      {
        question: "O que significa o princípio da minimização de dados?",
        type: "single",
        options: ["Só podem ser recolhidos os dados necessários para a finalidade específica", "Os dados estão protegidos contra acessos não autorizados", "Os dados só podem ser tratados para fins determinados e legítimos"],
        correctIndexes: [0],
        explanation: "Minimização de dados significa: o menor número de dados possível. A terceira opção descreve a finalidade.",
      },
    ],
  },
  {
    id: 3,
    title: "Direitos dos titulares dos dados",
    emoji: "👤",
    description: "Conheça os direitos de que as pessoas dispõem face à empresa.",
    learnContent: [
      {
        heading: "Direito de acesso",
        text: "Os titulares podem solicitar em qualquer momento informações sobre o tratamento dos seus dados. O pedido é tratado pelo responsável pela proteção de dados, que presta as informações no prazo de 30 dias.",
      },
      {
        heading: "Direito de retificação e apagamento",
        text: "Retificação — os titulares podem solicitar a correção de dados inexatos. Apagamento — podem solicitar a eliminação se os dados já não forem necessários ou tiverem sido tratados ilicitamente.",
      },
      {
        heading: "Direito ao bloqueio de dados",
        text: "Os titulares podem solicitar o bloqueio dos seus dados — por exemplo se contestarem a sua exatidão ou se o tratamento não for lícito (derivado da proteção da personalidade, art. 32 LPD).",
      },
      {
        heading: "Entrega de dados (art. 28 LPD)",
        text: "Os titulares podem solicitar a entrega dos seus dados num formato eletrónico habitual — desde que os dados sejam tratados automaticamente e o fim o permita.",
        infoBox: {
          variant: "merksatz",
          title: "Direitos essenciais segundo o DSG suíço",
          text: "Direito de acesso (art. 25), retificação/apagamento/bloqueio (art. 32) e entrega de dados (art. 28). O DSG suíço não prevê um direito de oposição explícito como o RGPD da UE.",
        },
      },
    ],
    quiz: [
      {
        question: "Que direitos prevê o DSG suíço para os titulares dos dados?",
        type: "single",
        options: ["Apenas o direito de acesso", "Acesso, retificação/apagamento/bloqueio e entrega de dados", "Acesso, retificação, apagamento, limitação, oposição e portabilidade dos dados (como o RGPD da UE)"],
        correctIndexes: [1],
        explanation: "O DSG suíço prevê o direito de acesso (art. 25), retificação/apagamento/bloqueio (art. 32) e entrega de dados (art. 28). O DSG suíço não prevê um direito de oposição ou limitação explícito como o RGPD da UE.",
      },
      {
        question: "Em que prazo deve ser concedido o acesso?",
        type: "single",
        options: ["7 dias", "30 dias", "90 dias"],
        correctIndexes: [1],
        explanation: "O acesso é geralmente concedido no prazo de 30 dias.",
      },
    ],
  },
  {
    id: 4,
    title: "Obrigações da empresa e dos colaboradores",
    emoji: "📢",
    description: "Conheça as suas obrigações e o procedimento de notificação em caso de violação.",
    learnContent: [
      {
        heading: "Processos conformes com a proteção de dados",
        text: "A empresa deve implementar processos que garantam todos os princípios de proteção de dados nas operações diárias. MS Direct Group detém o selo de qualidade «GoodPrivacy» da SQS, que certifica um sistema de gestão de proteção de dados adequado.",
        infoBox: {
          variant: "merksatz",
          title: "GoodPrivacy",
          text: "GoodPrivacy (SQS) certifica que MS Direct Group dispõe de um sistema de gestão de proteção de dados verificado.",
        },
      },
      {
        heading: "Responsabilidades dos colaboradores",
        text: "Cada colaborador é corresponsável pela proteção dos dados com que trabalha. Todos participam nas formações e respeitam as diretrizes de proteção de dados.",
        infoBox: {
          variant: "merksatz",
          title: "A reter",
          text: "A proteção de dados é um trabalho de equipa — não é responsabilidade exclusiva do departamento de TI.",
        },
      },
      {
        heading: "Obrigações da empresa",
        text: "A empresa implementa medidas técnicas e organizativas (MTO), mantém um registo das atividades de tratamento e integra a proteção de dados desde o início no desenvolvimento de novos processos (privacidade por conceção).",
      },
      {
        heading: "Obrigações de notificação em caso de violação",
        text: "Internamente — os incidentes ou suspeitas de incidente devem ser notificados de imediato ao responsável pela proteção de dados ou ao superior hierárquico. Externamente — se e quando notificar à autoridade de supervisão (PFPDT) ou aos titulares é avaliado e decidido pelo responsável pela proteção de dados.",
        infoBox: {
          variant: "warnung",
          title: "Obrigação de notificação",
          text: "Notifique de imediato internamente qualquer incidente ou suspeita de incidente relativo à proteção de dados. O responsável avalia se é necessária uma notificação ao PFPDT. Se a notificação for necessária, deve ser efetuada o mais rapidamente possível.",
        },
      },
    ],
    quiz: [
      {
        question: "O que deve fazer se detetar uma violação de dados?",
        type: "single",
        options: ["Aguardar para ver se alguém mais o deteta", "Corrigir sozinho sem informar ninguém", "Informar de imediato o superior hierárquico ou o responsável pela proteção de dados", "Enviar um e-mail a todos os colaboradores"],
        correctIndexes: [2],
        explanation: "A notificação interna imediata é crucial. O DSG suíço não estabelece um prazo fixo de 72 horas — essa é uma regra do RGPD europeu. As violações com alto risco devem ser notificadas ao PFPDT o mais rapidamente possível. Corrigir sozinho e guardar silêncio não é uma opção.",
      },
      {
        question: "O que significa «privacidade por conceção»?",
        type: "single",
        options: ["A proteção de dados é adicionada a posteriori em caso de problemas", "A proteção de dados é integrada desde o início nos sistemas e processos", "Apenas o departamento de TI é responsável pela proteção de dados"],
        correctIndexes: [1],
        explanation: "Privacidade por conceção significa que faz parte integrante de cada processo e sistema desde o início — tal como a segurança ou a qualidade.",
      },
      {
        question: "O que é um registo das atividades de tratamento (art. 12 DSG)?",
        type: "single",
        options: ["Uma lista de todos os colaboradores com acesso aos dados", "Uma documentação de todas as atividades de tratamento de dados da empresa", "Um registo de todas as violações dos últimos 5 anos"],
        correctIndexes: [1],
        explanation: "O registo das atividades de tratamento (art. 12 DSG) documenta sistematicamente todas as atividades de tratamento: que dados, para que finalidade, por quem, durante quanto tempo. É um instrumento central de conformidade.",
      },
    ],
  },
  {
    id: 5,
    title: "Segurança informática e proteção de dados",
    emoji: "🔒",
    description: "Identifique os riscos informáticos típicos e aprenda a prevenir violações no dia a dia.",
    learnContent: [
      {
        heading: "Princípios de segurança informática no posto de trabalho",
        text: "Aplicam-se regras claras: utilizar palavras-passe seguras, bloquear o computador em caso de ausência e não instalar software desconhecido.",
      },
      {
        heading: "Palavras-passe seguras e gestão de palavras-passe",
        text: "Utilize palavras-passe longas e complexas com letras maiúsculas, minúsculas, números e caracteres especiais — uma palavra-passe única para cada serviço. Um gestor de palavras-passe facilita o armazenamento e a gestão seguros.",
        infoBox: {
          variant: "merksatz",
          title: "Sugestão",
          text: "Win + L (Windows) ou Ctrl + Cmd + Q (Mac) bloqueia o ecrã instantaneamente — mesmo em caso de breve ausência.",
        },
      },
      {
        heading: "Reconhecer o phishing e a engenharia social",
        text: "Os e-mails de phishing imitam remetentes reais e solicitam credenciais ou cliques em ligações. Em caso de dúvida, elimine o e-mail em vez de arriscar — nunca clique em ligações ou anexos e contacte o suporte de TI.",
        infoBox: {
          variant: "warnung",
          title: "Realidade",
          text: "Mais de 80 % de todas as violações de dados são causadas por erros humanos, não por ataques informáticos técnicos.",
        },
      },
      {
        heading: "O que fazer ✅",
        text: "Bloquear o ecrã ao abandonar o posto de trabalho. Usar VPN em teletrabalho e em redes Wi-Fi públicas. Palavras-passe seguras + autenticação de dois fatores (2FA). Notificar imediatamente o suporte de TI sobre e-mails suspeitos.",
      },
      {
        heading: "O que não fazer ❌",
        text: "Não colocar palavras-passe num post-it no monitor. Não enviar dados de clientes por WhatsApp ou e-mail pessoal. Não usar Wi-Fi público sem VPN. Não deixar documentos sensíveis sem vigilância.",
        infoBox: {
          variant: "warnung",
          title: "Nunca",
          text: "NUNCA anote as suas palavras-passe — nem em post-its nem em ficheiros não protegidos. E: NUNCA deixe o seu portátil desbloqueado e sem vigilância, mesmo que seja «só um momento».",
        },
      },
    ],
    quiz: [
      {
        question: "Recebe um e-mail de 'hr@ms-direct.ch' a solicitar que confirme a sua palavra-passe. O que faz?",
        type: "single",
        options: ["Clico na ligação e introduzo a minha palavra-passe", "Ignoro o e-mail e elimino-o", "Notifico de imediato o e-mail ao suporte de TI"],
        correctIndexes: [2],
        explanation: "É phishing clássico. Nunca clique em ligações nem introduza palavras-passe. Notifique sempre — mesmo que pareça inofensivo. Eliminar não é suficiente.",
      },
      {
        question: "Que medidas protegem eficazmente os dados pessoais?",
        type: "multi",
        options: ["Palavra-passe num post-it no monitor", "Bloquear o ecrã ao abandonar o posto", "Usar VPN em teletrabalho", "Partilhar dados de clientes por WhatsApp", "Palavras-passe seguras + 2FA ativado"],
        correctIndexes: [1, 2, 4],
        explanation: "O bloqueio do ecrã, a VPN e o 2FA são medidas de segurança fundamentais. As palavras-passe em post-its e o WhatsApp para dados de clientes são infrações manifestas.",
      },
      {
        question: "Onde NÃO deve ser guardada uma palavra-passe?",
        type: "multi",
        options: ["Num gestor de palavras-passe cifrado", "Num post-it no monitor", "Num ficheiro de texto não protegido no ambiente de trabalho", "Na memória"],
        correctIndexes: [1, 2],
        explanation: "As palavras-passe em post-its ou ficheiros não protegidos representam um sério risco de segurança. Apenas os gestores cifrados ou a memória são opções seguras.",
      },
      {
        question: "Tem de se ausentar brevemente do seu posto de trabalho. O que faz com o seu portátil?",
        type: "single",
        options: ["Deixo-o aberto — ausento-me só um momento", "Fecho apenas o documento em curso", "Bloqueio o ecrã (Win+L / Ctrl+Cmd+Q)"],
        correctIndexes: [2],
        explanation: "Mesmo uma breve ausência é suficiente para um acesso não autorizado. O bloqueio é simples (Win+L no Windows, Ctrl+Cmd+Q no Mac) e absolutamente necessário.",
      },
    ],
  },
  {
    id: 6,
    title: "Interlocutores internos e canais de notificação",
    emoji: "📞",
    description: "Saiba a quem se dirigir para esclarecer dúvidas e em caso de incidente.",
    learnContent: [
      {
        heading: "A quem me dirijo?",
        text: "O responsável pela proteção de dados do MS Direct Group é Myrio Kluser. Pode contactá-lo em myrio.kluser@qmart.ch. É o seu interlocutor para questões e problemas de proteção de dados, pedidos de informação dos titulares e incidentes relacionados com a proteção de dados.",
        infoBox: {
          variant: "merksatz",
          title: "Em caso de dúvida",
          text: "Em caso de dúvida, não decida sozinho — contacte o responsável pela proteção de dados.",
        },
      },
      {
        heading: "Como notificar um incidente?",
        text: "Notifique de imediato os incidentes de proteção de dados ou suspeitas de incidente internamente ao responsável ou ao seu superior hierárquico. Quanto mais rápida for a notificação, melhor a empresa pode reagir. O responsável pela proteção de dados avalia se e quando é necessária uma notificação ao PFPDT.",
      },
    ],
    quiz: [
      {
        question: "A quem notifica primeiro um incidente de proteção de dados?",
        type: "single",
        options: ["Diretamente ao PFPDT", "Ao responsável interno pela proteção de dados ou ao superior hierárquico", "Por e-mail a todos os colaboradores"],
        correctIndexes: [1],
        explanation: "Notifique sempre primeiro internamente. A notificação externa ao PFPDT é assegurada pelo responsável pela proteção de dados.",
      },
      {
        question: "Quem é o responsável pela proteção de dados do MS Direct Group?",
        type: "single",
        options: ["Myrio Kluser", "O departamento de TI", "A direção"],
        correctIndexes: [0],
        explanation: "Myrio Kluser (myrio.kluser@qmart.ch) é o interlocutor central para as questões de proteção de dados.",
      },
    ],
  },
  {
    id: 7,
    title: "Questionário final",
    emoji: "🏆",
    description: "Demonstre o que aprendeu! 5 perguntas de todos os módulos — consegue!",
    learnContent: [],
    quiz: [
      {
        question: "Desde quando está em vigor a Lei federal de proteção de dados (DSG) revista?",
        type: "single",
        options: ["25 de maio de 2018", "1 de janeiro de 2022", "1 de setembro de 2023"],
        correctIndexes: [2],
        explanation: "O DSG revisto entrou em vigor a 1 de setembro de 2023 — quase 5 anos após o RGPD europeu.",
      },
      {
        question: "O que NÃO é um dado pessoal especialmente sensível?",
        type: "single",
        options: ["Estado VIH", "Dados de impressões digitais", "Endereço de e-mail profissional"],
        correctIndexes: [2],
        explanation: "Os endereços de e-mail profissionais são dados pessoais comuns. O estado VIH (saúde) e os dados de impressões digitais (biometria) são especialmente sensíveis ao abrigo do art. 5 DSG.",
      },
      {
        question: "Qual é o comportamento seguro no teletrabalho?",
        type: "single",
        options: ["Guardar os dados de clientes numa pen drive privada", "Ativar a VPN e bloquear o ecrã ao sair da divisão", "Deixar o portátil da empresa desbloqueado numa breve ausência"],
        correctIndexes: [1],
        explanation: "VPN + ecrã bloqueado são a base absoluta no teletrabalho. As pen drives privadas e os dispositivos desbloqueados são infrações de segurança manifestas.",
      },
      {
        question: "O que exige o DSG suíço para a notificação de uma violação de dados ao PFPDT?",
        type: "single",
        options: ["Um prazo fixo de 72 horas, como no RGPD europeu", "As violações de dados nunca precisam de ser notificadas externamente", "A notificação deve ser efetuada o mais rapidamente possível se existir um risco elevado"],
        correctIndexes: [2],
        explanation: "O DSG suíço NÃO estabelece um prazo fixo de 72 horas — essa é uma regra do RGPD europeu. As violações suscetíveis de apresentar um risco elevado para a personalidade ou os direitos fundamentais devem ser notificadas ao PFPDT o mais rapidamente possível.",
      },
      {
        question: "O que deve fazer perante uma suspeita de phishing?",
        type: "single",
        options: ["Simplesmente eliminar o e-mail e esquecer o assunto", "Clicar na ligação para verificar se é realmente phishing", "Notificar o suporte de TI e aguardar instruções"],
        correctIndexes: [2],
        explanation: "Notifique sempre o phishing ao suporte de TI — mesmo que pareça inofensivo. Eliminar não é suficiente. Nunca clique em ligações suspeitas!",
      },
    ],
  },
];
