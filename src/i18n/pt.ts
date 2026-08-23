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
  },
  work: {
    heading: 'Trabalhos',
    empty: 'As demos vão aparecer aqui conforme forem ficando prontas. Cada uma vem com um vídeo, o código no GitHub sob licença MIT, e algo que você realmente pode rodar.',
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
  project: {
    whatItIs: 'O que é',
    underTheHood: 'Por baixo do capô',
    tryIt: 'Acesse',
    source: 'Código-fonte',
    backToWork: 'Voltar para trabalhos',
  },
} as const;
