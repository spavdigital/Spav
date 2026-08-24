export const pt = {
  lang: 'pt' as const,
  a11y: {
    skipToContent: 'Pular para o conteúdo',
  },
  nav: {
    home: 'Início',
    work: 'Trabalhos',
    services: 'Serviços',
    about: 'Sobre',
  },
  home: {
    eyebrow: 'Disponível para contratação',
    h1: 'Sistemas de jogo autoritativos no servidor, sob medida.',
    sub: 'Eu escrevo os sistemas que rodam no seu servidor — empregos, economias, comportamento de NPCs, persistência de dados, validação anti-exploit — para FiveM, Roblox e Minecraft.',
    ctaPrimary: 'Falar no Discord',
    ctaSecondary: 'Ver os trabalhos',
    availability: {
      cards: ['Tempo integral', 'Meio período', 'Por projeto', 'Correções rápidas'],
      note: 'Nenhum trabalho é pequeno demais, nenhum contrato é longo demais. Me diga o formato que funciona para o seu time.',
    },
    selectedWork: {
      heading: 'Trabalhos em destaque',
      cta: 'Ver todos os trabalhos',
    },
  },
  services: {
    enginesHeading: 'Engines',
    engines: [
      { name: 'FiveM', detail: 'Lua, ESX e QBCore, NUI, oxmysql' },
      { name: 'Roblox', detail: 'Luau, Rojo, DataStore, design autoritativo no servidor' },
      { name: 'Minecraft', detail: 'Java, Spigot / Paper' },
    ],
    also: "Também trabalho com: Garry's Mod (GLua), Unity (C#)",
    processHeading: 'Como eu trabalho',
    steps: [
      { title: 'Escopo', body: 'Você descreve o sistema. Eu faço as perguntas que trazem à tona os casos extremos antes que virem bugs.' },
      { title: 'Orçamento', body: 'Preço fechado por tarefa, ou por hora para trabalho contínuo. Orçamento em até 24 horas.' },
      { title: 'Etapas', body: 'Pagamento em etapas, cada uma ligada a algo que você pode testar. Nunca o valor total adiantado.' },
      { title: 'Entrega', body: 'Código-fonte, instruções de instalação e um repositório que é seu. Sem ofuscação, sem phone-home.' },
    ],
    whatYouGet: {
      heading: 'O que você recebe',
      intro: 'Toda entrega inclui:',
      items: [
        'Código-fonte, legível, com comentários onde o raciocínio não é óbvio',
        'Um repositório que é seu',
        'Instruções de instalação escritas para alguém que não sou eu',
        'Configuração separada da lógica, para você ajustar valores sem editar código',
        'Uma nota sobre o que o sistema deliberadamente não faz',
      ],
    },
    faq: {
      heading: 'Perguntas antes de contratar',
      items: [
        {
          q: 'Eu sou dono do código?',
          a: 'Sim. Você recebe o código-fonte, o repositório e o direito de modificá-lo. Sem ofuscação, sem escrow, sem servidor de licença, nada de phone-home.',
        },
        {
          q: 'Como você faz o orçamento?',
          a: 'Me diga o que o sistema precisa fazer. Eu faço as perguntas que trazem à tona os casos extremos, depois cobro um preço fechado pela tarefa ou uma taxa por hora para trabalho contínuo — em até 24 horas.',
        },
        {
          q: 'Como funciona o pagamento?',
          a: 'Em etapas. Cada marco está ligado a algo que você pode rodar e testar antes de pagar por ele. Eu não peço o valor total adiantado, e não espero que você confie em mim antes de eu ter mostrado algo.',
        },
        {
          q: 'O que acontece se algo quebrar depois da entrega?',
          a: 'Bugs no que eu entreguei são corrigidos sem custo. Novas funcionalidades são trabalho novo, orçadas separadamente. Eu vou te dizer honestamente qual é qual.',
        },
        {
          q: 'Com quais frameworks você trabalha?',
          a: 'FiveM: ESX e QBCore, e standalone. Roblox: projetos Rojo e Studio puro. Minecraft: Spigot e Paper. Se o seu servidor roda algo customizado, me manda a estrutura e eu te digo antes de orçar se é um bom encaixe.',
        },
        {
          q: 'Você consegue entrar em uma base de código já existente?',
          a: 'Sim. Ler o código de outra pessoa e seguir as convenções dele faz parte do trabalho, não é um obstáculo.',
        },
        {
          q: 'Quanto tempo leva?',
          a: 'Depende do escopo, e quem responde isso sem fazer perguntas está chutando. Um utilitário pequeno geralmente leva dias; um sistema completo com UI e banco de dados geralmente leva semanas.',
        },
      ],
    },
  },
  work: {
    heading: 'Trabalhos',
    empty: 'Sistemas com vídeo onde já existe, o código no GitHub sob licença MIT, e algo que você realmente pode rodar.',
  },
  notFound: {
    title: 'Página não encontrada',
    text: 'Essa página não existe. O trabalho está aqui.',
    cta: 'Ver os trabalhos',
  },
  about: {
    heading: 'Sobre',
    paragraphs: [
      'Eu construo sistemas de jogo em tempo integral. Antes disso, eu escrevia à noite enquanto trabalhava em outra área — agora é o trabalho inteiro.',
      'Me importo com as partes que o jogador nunca vê: validação que resiste quando alguém tenta quebrar, dados que sobrevivem a um restart do servidor, e código que o próximo desenvolvedor consegue ler.',
      'Baseado no Brasil, UTC-3. Disponível para tempo integral, meio período, por projeto, ou para uma correção pontual.',
    ],
  },
  contact: {
    heading: 'Contato',
    discordLabel: 'Discord',
    discord: '@pedrogabriels',
    copiedLabel: 'Copiado',
    emailLabel: 'E-mail',
    email: 'spavdigital@gmail.com',
    whatsappLabel: 'WhatsApp',
    whatsapp: '+55 19 98942-8861',
    timezoneLabel: 'Fuso horário',
    timezone: 'UTC-3, horário flexível',
  },
  footer: {
    lastUpdated: 'Última atualização',
  },
  project: {
    whatItIs: 'O que é',
    underTheHood: 'Por baixo do capô',
    tryIt: 'Acesse',
    source: 'Código-fonte',
    backToWork: 'Voltar para trabalhos',
  },
} as const;
