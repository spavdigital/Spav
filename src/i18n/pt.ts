export const pt = {
  lang: 'pt' as const,
  a11y: {
    skipToContent: 'Pular para o conteúdo',
  },
  nav: {
    home: 'Início',
    work: 'Trabalhos',
    services: 'Serviços',
    rates: 'Valores',
    about: 'Sobre',
    // A galeria já existe e tem rota, mas fica fora do cabeçalho enquanto
    // nenhum case tiver screenshots[] preenchido. Ver Header.astro.
    gallery: 'Galeria',
  },
  home: {
    eyebrow: 'Disponível para contratação',
    h1: 'Sistemas de jogo autoritativos no servidor, sob medida.',
    sub: 'Eu escrevo os sistemas que rodam no seu servidor — empregos, economias, comportamento de NPCs, persistência de dados, validação anti-exploit — para FiveM, Roblox e Minecraft.',
    proof: 'Desenvolvedor líder de um roguelite não lançado para um estúdio (sob NDA) · 8 sistemas neste site, todos open-source sob MIT · 3 deles jogáveis no Roblox',
    ctaPrimary: 'Falar no Discord',
    ctaSecondary: 'Ver os trabalhos',
    availability: {
      cards: ['Tempo integral', 'Meio período', 'Por projeto', 'Correções rápidas'],
      note: 'Nenhum trabalho é pequeno demais, nenhum contrato é longo demais. Me diga o formato que funciona para o seu time.',
      hours: 'Seg–Sáb, 09:00–19:00 UTC-3 (Brasil) · flexível em relação ao seu fuso',
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
    ratesLink: 'Moeda, estrutura de pagamento e o que mandar na primeira mensagem: valores e condições',
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
          a: 'Em etapas. Cada marco está ligado a algo que você pode rodar e testar antes de pagar por ele. Eu não peço o valor total adiantado, e não espero que você confie em mim antes de eu ter mostrado algo. A cobrança é em USD ou BRL — Robux não é aceito, nem via DevEx. A página de valores traz as condições completas.',
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
    empty: 'Cada entrada nomeia o sistema, diz qual foi o meu papel e mostra o trecho de código que carregou a decisão mais difícil. Todos os oito linkam o código sob MIT; três também são jogáveis no Roblox. Os testes técnicos para estúdios são descritos sem nomes de cliente nem assets deles.',
  },
  card: {
    watch: 'Ver o vídeo',
    play: 'Jogar',
    source: 'Código-fonte',
    readCase: 'Ler o case',
    codeExcerpt: 'Trecho do código',
    tabAbout: 'O que é',
    tabCode: 'Código',
    tabGroup: 'Mostrar descrição ou trecho do código',
  },
  gallery: {
    heading: 'Galeria',
    intro: 'Capturas dos sistemas que estão neste site. Clique em qualquer imagem para abrir em tamanho real.',
    empty: 'Nenhuma captura publicada ainda.',
    close: 'Fechar imagem',
    prev: 'Imagem anterior',
    next: 'Próxima imagem',
  },
  rates: {
    heading: 'Valores e condições',
    intro: 'Tudo aqui vale antes da conversa começar, para que nenhum dos dois gaste uma semana descobrindo que não era um encaixe.',
    currency: {
      heading: 'Moeda e formas de pagamento',
      body: 'Eu cobro em USD ou BRL. Transferência bancária, Wise ou PayPal; Pix para clientes no Brasil.',
    },
    robux: {
      heading: 'Robux não é aceito',
      body: 'Em nenhuma cotação, não via DevEx, não como parte do pagamento, não como bônus em cima do dinheiro. Se Robux é o único orçamento disponível, não somos um encaixe — e é melhor você saber disso agora do que depois de uma semana de escopo.',
    },
    structure: {
      heading: 'Como o pagamento é estruturado',
      items: [
        'Pagamento por etapas, cada uma ligada a algo que você pode rodar e testar antes de liberar.',
        'Nunca o valor total adiantado. Uma tarefa pequena pode ser uma única etapa paga na entrega.',
        'Preço fechado por tarefa quando o escopo é definido, ou por hora para trabalho contínuo.',
      ],
    },
    engagements: {
      heading: 'Formatos de trabalho',
      body: 'Tarefa avulsa, manutenção contínua, meio período e tempo integral. Não existe projeto pequeno demais — uma correção de duas horas é trabalho bem-vindo, e orçar isso com honestidade não me custa nada.',
    },
    tests: {
      heading: 'Teste técnico não remunerado, com uma condição',
      body: 'Eu topo construir sem remuneração se o código puder virar portfólio público depois — é assim que nasceram os oito projetos open-source sob MIT que você e seu time podem ler agora. Se o escopo exige ficar preso a um NDA sem essa saída, é trabalho pago.',
    },
    quotes: {
      heading: 'Orçamento',
      body: 'Em até 24 horas a partir do momento em que eu tiver detalhe suficiente para ser preciso. Se o escopo estiver vago demais para orçar, eu digo isso e faço as perguntas específicas que resolvem.',
    },
    firstMessage: {
      heading: 'O que mandar na primeira mensagem',
      intro: 'As quatro coisas que me deixam responder de forma útil em vez de fazer quatro rodadas de perguntas:',
      items: [
        'O que o sistema precisa fazer, nas suas palavras.',
        'Seu orçamento e em qual moeda ele está.',
        'O prazo, se houver.',
        'A engine e o framework — Roblox / FiveM (ESX, QBCore, standalone) / Minecraft (Spigot, Paper), ou algo customizado.',
      ],
    },
    hours: {
      heading: 'Horário de trabalho',
      body: 'Segunda a sábado, aproximadamente 09:00–19:00 UTC-3 (Brasil). Flexível em relação ao fuso do seu time para calls e releases.',
    },
    cta: 'Falar no Discord',
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
      'Meu único crédito pago em produção até agora é como desenvolvedor líder de um roguelite não lançado para um estúdio sob NDA — framework central de gameplay, loop de run e progressão, e a camada de dados. Nome, código e assets estão sob NDA; posso explicar a arquitetura em termos gerais numa conversa.',
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
