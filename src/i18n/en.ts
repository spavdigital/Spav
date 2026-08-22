export const en = {
  lang: 'en' as const,
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
  },
  work: {
    heading: 'Work',
    empty: 'Demos are landing here as they are built. Each one ships with a video, the source on GitHub under MIT, and something you can actually run.',
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
