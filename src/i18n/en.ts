export const en = {
  lang: 'en' as const,
  a11y: {
    skipToContent: 'Skip to content',
  },
  nav: {
    home: 'Home',
    work: 'Work',
    services: 'Services',
    rates: 'Rates',
    about: 'About',
    // Gallery is built and routed, but stays out of the header until at
    // least one case has screenshots[] filled in. See Header.astro.
    gallery: 'Gallery',
  },
  home: {
    eyebrow: 'Available for hire',
    h1: 'Server-authoritative game systems, built to spec.',
    sub: "I write the systems your server runs on — jobs, economies, NPC behaviour, data persistence, anti-exploit validation — for FiveM, Roblox and Minecraft.",
    proof: 'Lead developer on an unreleased roguelite for a studio (under NDA) · 8 systems on this site, all open source under MIT · 3 of them playable on Roblox',
    ctaPrimary: 'Talk on Discord',
    ctaSecondary: 'See the work',
    availability: {
      cards: ['Full-time', 'Part-time', 'Per-project', 'Quick fixes'],
      note: 'No job too small, no contract too long. Tell me the format that works for your team.',
      hours: 'Mon–Sat, 09:00–19:00 UTC-3 (Brazil) · flexible around your timezone',
    },
    selectedWork: {
      heading: 'Selected work',
      cta: 'See all work',
    },
  },
  services: {
    enginesHeading: 'Engines',
    engines: [
      { name: 'FiveM', detail: 'Lua, ESX and QBCore, NUI, oxmysql' },
      { name: 'Roblox', detail: 'Luau, Rojo, DataStore, server-authoritative design' },
      { name: 'Minecraft', detail: 'Java, Spigot / Paper' },
    ],
    also: "Also comfortable in: Garry's Mod (GLua), Unity (C#)",
    ratesLink: 'Currency, payment structure and what to send in a first message: rates & terms',
    processHeading: 'How I work',
    steps: [
      { title: 'Scope', body: 'You describe the system. I ask the questions that surface the edge cases before they become bugs.' },
      { title: 'Quote', body: 'Fixed price per task, or hourly for ongoing work. Quoted within 24 hours.' },
      { title: 'Milestones', body: 'Payment in stages, each tied to something you can test. Never full payment upfront.' },
      { title: 'Handover', body: 'Source code, install instructions, and a repository you own. No obfuscation, no phone-home.' },
    ],
    whatYouGet: {
      heading: 'What you get',
      intro: 'Every delivery includes:',
      items: [
        "Source code, readable, with comments where the reasoning isn't obvious",
        'A repository you own',
        "Install instructions written for someone who isn't me",
        'Configuration separated from logic, so you can tune values without editing code',
        'A note on what the system deliberately does not do',
      ],
    },
    faq: {
      heading: 'Questions people ask before hiring',
      items: [
        {
          q: 'Do I own the code?',
          a: 'Yes. You get the source, the repository, and the right to modify it. No obfuscation, no escrow, no license server, nothing phoning home.',
        },
        {
          q: 'How do you quote?',
          a: 'Tell me what the system needs to do. I ask the questions that surface edge cases, then quote a fixed price for the task or an hourly rate for ongoing work — within 24 hours.',
        },
        {
          q: 'How does payment work?',
          a: "In stages. Each milestone is tied to something you can run and test before you pay for it. I don't ask for the full amount upfront, and I don't expect you to trust me before I've shown anything. Invoicing is in USD or BRL — Robux is not accepted, including through DevEx. The rates page has the full terms.",
        },
        {
          q: 'What happens if something breaks after delivery?',
          a: "Bugs in what I delivered get fixed at no charge. New features are new work, quoted separately. I'll tell you which is which honestly.",
        },
        {
          q: 'Which frameworks do you work with?',
          a: "FiveM: ESX and QBCore, and standalone. Roblox: Rojo projects and plain Studio. Minecraft: Spigot and Paper. If your server runs something custom, send me the structure and I'll tell you before quoting whether it's a good fit.",
        },
        {
          q: 'Can you join an existing codebase?',
          a: "Yes. Reading someone else's code and matching its conventions is part of the job, not an obstacle to it.",
        },
        {
          q: 'How long does it take?',
          a: 'It depends on scope, and anyone who answers this without asking questions is guessing. A small utility is usually days; a full system with a UI and a database is usually weeks.',
        },
      ],
    },
  },
  work: {
    heading: 'Work',
    empty: 'Every entry names the system, states my role, and shows the piece of code that carried the hardest decision. All eight link to their MIT source; three are also playable on Roblox. Studio trial tasks are described with client names and assets removed.',
  },
  card: {
    watch: 'Watch',
    play: 'Play',
    source: 'Source',
    readCase: 'Read the case',
    codeExcerpt: 'Source excerpt',
    tabAbout: 'What it is',
    tabCode: 'Code',
    tabGroup: 'Show description or source excerpt',
  },
  gallery: {
    heading: 'Gallery',
    intro: 'Screenshots from the systems on this site. Click any image to open it full size.',
    empty: 'No screenshots published yet.',
    close: 'Close image',
    prev: 'Previous image',
    next: 'Next image',
  },
  rates: {
    heading: 'Rates & terms',
    intro: 'All of this is true before we talk, so neither of us spends a week finding out it is not a fit.',
    currency: {
      heading: 'Currency and payment methods',
      body: 'I invoice in USD or BRL. Bank transfer, Wise or PayPal; Pix for clients in Brazil.',
    },
    robux: {
      heading: 'Robux is not accepted',
      body: 'Not at any exchange rate, not through DevEx, not as part payment, not as a bonus on top of cash. If Robux is the only budget available, we are not a fit — and I would rather you know that now than after a week of scoping.',
    },
    structure: {
      heading: 'How payment is structured',
      items: [
        'Payment in milestones, each one tied to something you can run and test before you release it.',
        'Never the full amount upfront. A small task can be a single milestone paid on delivery.',
        'Price is quoted per task when the scope is fixed, or hourly for ongoing work.',
      ],
    },
    engagements: {
      heading: 'Ways to work together',
      body: 'One-off tasks, ongoing maintenance, part-time and full-time. There is no minimum project size — a two-hour fix is welcome work, and quoting it honestly costs me nothing.',
    },
    tests: {
      heading: 'Unpaid technical tests, on one condition',
      body: "I'll build for free if the code gets to become public portfolio afterward — that's how the eight open-source projects under MIT on this page came to exist. If the scope requires staying locked behind an NDA with no way out, it's paid work.",
    },
    quotes: {
      heading: 'Quotes',
      body: 'Within 24 hours of having enough detail to be accurate. If a scope is too vague to quote, I say so and ask the specific questions that would fix it.',
    },
    firstMessage: {
      heading: 'What to send in the first message',
      intro: 'The four things that let me answer usefully instead of asking four rounds of questions:',
      items: [
        'What the system has to do, in your own words.',
        'Your budget and the currency it is in.',
        'The deadline, if there is one.',
        'The engine and framework — Roblox / FiveM (ESX, QBCore, standalone) / Minecraft (Spigot, Paper), or something custom.',
      ],
    },
    hours: {
      heading: 'Working hours',
      body: 'Monday to Saturday, roughly 09:00–19:00 UTC-3 (Brazil). Flexible around your team\u2019s timezone for calls and releases.',
    },
    cta: 'Talk on Discord',
  },
  notFound: {
    title: 'Page not found',
    text: "That page doesn't exist. The work is over here.",
    cta: 'See the work',
  },
  about: {
    heading: 'About',
    paragraphs: [
      'I build game systems full-time. Before that I wrote them at night while working in another field — now it is the whole job.',
      'My one paid production credit so far is as lead developer on an unreleased roguelite for a studio under NDA — core gameplay framework, run and progression loop, and the data layer. Name, code and assets are under NDA; I am happy to walk through the architecture in general terms on a call.',
      'I care about the parts players never see: validation that holds when someone tries to break it, data that survives a server restart, and code the next developer can read.',
      'Based in Brazil, UTC-3. Available full-time, part-time, per project, or for a single fix.',
    ],
  },
  contact: {
    heading: 'Contact',
    discordLabel: 'Discord',
    discord: '@pedrogabriels',
    copiedLabel: 'Copied',
    emailLabel: 'Email',
    email: 'spavdigital@gmail.com',
    timezoneLabel: 'Timezone',
    timezone: 'UTC-3, flexible hours',
  },
  footer: {
    lastUpdated: 'Last updated',
  },
  project: {
    whatItIs: 'What it is',
    underTheHood: 'Under the hood',
    tryIt: 'Try it',
    source: 'Source',
    backToWork: 'Back to work',
  },
} as const;
