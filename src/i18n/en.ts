export const en = {
  lang: 'en' as const,
  a11y: {
    skipToContent: 'Skip to content',
  },
  nav: {
    home: 'Home',
    work: 'Work',
    services: 'Services',
    about: 'About',
  },
  home: {
    eyebrow: 'Available for hire',
    h1: 'Server-authoritative game systems, built to spec.',
    sub: "I write the systems your server runs on — jobs, economies, NPC behaviour, data persistence, anti-exploit validation — for FiveM, Roblox and Minecraft.",
    ctaPrimary: 'Talk on Discord',
    ctaSecondary: 'See the work',
    availability: {
      cards: ['Full-time', 'Part-time', 'Per-project', 'Quick fixes'],
      note: 'No job too small, no contract too long. Tell me the format that works for your team.',
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
          a: "In stages. Each milestone is tied to something you can run and test before you pay for it. I don't ask for the full amount upfront, and I don't expect you to trust me before I've shown anything.",
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
    empty: 'Demos are landing here as they are built. Each one ships with a video, the source on GitHub under MIT, and something you can actually run.',
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
  project: {
    whatItIs: 'What it is',
    underTheHood: 'Under the hood',
    tryIt: 'Try it',
    source: 'Source',
    backToWork: 'Back to work',
  },
} as const;
