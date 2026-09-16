export const siteConfig = {
  brand: {
    name: 'OTA-NEXUS',
  },

  nav: [
    { href: '#model', label: 'How it works' },
    { href: '#services', label: 'What we run' },
    { href: '#properties', label: 'Property types' },
    { href: '#metrics', label: 'Results' },
    { href: '#contact', label: 'Talk to us' },
  ],

  header: {
    cta: 'Book a revenue audit',
  },

  hero: {
    kicker: 'For independent hotels & boutique groups',
    title: 'Your rooms sell themselves',
    accent: 'when someone is actually watching the till.',
    body:
      "Most independent hotels lose 15–20 cents of every booking dollar to rate leaks, channel commissions, and OTA parity you didn't agree to. We run revenue, distribution, and guest ops as if it were our own property — so you stop finding out about problems a month late.",
    primaryCta: 'Book a revenue audit',
    secondaryCta: 'See what we run',
    stats: [
      { value: '46', label: 'properties under management' },
      { value: '18%', label: 'average RevPAR lift, yr 1' },
      { value: '11 days', label: 'to full onboarding' },
    ],
    panel: {
      eyebrow: 'What a property looks like on our desk',
      title: 'One team, watching every channel, every night.',
      items: [
        {
          title: 'Rate & inventory',
          text: 'Daily repricing across OTAs, GDS, and your own site — no more stale rate sheets from three managers ago.',
        },
        {
          title: 'Direct bookings',
          text: 'We rebuild the booking engine and shift demand off commissioned channels, property by property.',
        },
        {
          title: 'Guest operations',
          text: 'Front-desk workflows, review response, and pre-arrival messaging run on one calendar, not five inboxes.',
        },
      ],
    },
  },

  model: {
    eyebrow: 'The arrangement',
    title: 'We work like your revenue team, not your software vendor',
    intro:
      "No dashboard to log into and interpret yourself. We hold the pen on pricing and distribution decisions, and you see the reasoning before it goes live.",
    items: [
      {
        number: 'Structure',
        title: 'Embedded, not bolted on',
        text: 'A named revenue manager and ops lead work your property specifically, alongside your GM — not a shared inbox.',
      },
      {
        number: 'Pricing',
        title: 'You approve the guardrails',
        text: 'We set floors and ceilings with you once, then move within them daily without waiting on sign-off.',
      },
      {
        number: 'Accountability',
        title: 'Paid on the lift, not the login',
        text: 'A base retainer plus a share of the RevPAR gain we produce, reviewed every quarter against a public baseline.',
      },
    ],
  },

  services: {
    eyebrow: 'Scope',
    title: 'What we actually run',
    intro:
      'Pick one workstream or hand us the property. Most partners start with distribution and expand once the numbers show.',
    items: [
      {
        index: 'Revenue',
        title: 'Pricing & forecasting',
        text: 'Daily rate decisions across all channels, demand forecasting by segment, and a weekly call walking through why.',
        tag: 'Core',
      },
      {
        index: 'Distribution',
        title: 'Channel & OTA management',
        text: 'Contract renegotiation, parity enforcement, and channel mix rebalancing toward the ones that actually pay.',
        tag: 'Core',
      },
      {
        index: 'Direct',
        title: 'Booking engine & site',
        text: 'A faster, mobile-first booking flow and the offers that make booking direct the obviously better option.',
        tag: 'Growth',
      },
      {
        index: 'Guest ops',
        title: 'Front desk & guest messaging',
        text: 'Pre-arrival, in-stay, and post-stay messaging plus review response, on a schedule your staff can actually keep.',
        tag: 'Operations',
      },
    ],
  },

  system: {
    eyebrow: 'Onboarding',
    title: 'From first call to live pricing in under two weeks',
    intro:
      "We deliberately don't spend three months on discovery. Most of what we need is in your PMS and channel manager already.",
    steps: [
      {
        no: '01',
        title: 'Audit',
        text: 'We pull 12 months of booking data and flag the leaks — usually parity violations, stale minimum-stay rules, and channels priced below cost.',
      },
      {
        no: '02',
        title: 'Guardrails',
        text: 'You set the floors, ceilings, and blackout rules you\u2019re not willing to move on. Everything else is ours to run.',
      },
      {
        no: '03',
        title: 'Go live',
        text: 'Pricing, channel mix, and booking-engine changes ship within the guardrails. You get a weekly readout, not a login.',
      },
      {
        no: '04',
        title: 'Review',
        text: 'Every quarter we sit down against the baseline we set at audit and adjust the guardrails for the season ahead.',
      },
    ],
  },

  properties: {
    eyebrow: 'Fit',
    title: 'Built for the properties OTAs ignore',
    intro:
      'Independent and small-group hospitality, where one bad month on Booking.com shows up directly in payroll.',
    items: [
      {
        title: 'Boutique hotels',
        text: '15–90 keys, one or two properties, no in-house revenue manager on staff.',
      },
      {
        title: 'Independent resorts',
        text: 'Seasonal demand swings that need daily attention, not a quarterly rate review.',
      },
      {
        title: 'Serviced apartments',
        text: 'Longer stays, multiple channels, and a booking engine that was never built for it.',
      },
      {
        title: 'Small hotel groups',
        text: '3–12 properties where every GM prices differently and nobody sees the whole portfolio.',
      },
    ],
  },

  proof: {
    eyebrow: 'Track record',
    title: 'What changes in the first two quarters',
    intro:
      'Figures below are the median across properties we\u2019ve managed for at least four full quarters.',
    metrics: [
      { label: '18%', note: 'RevPAR increase, first 12 months' },
      { label: '9 pts', note: 'Shift from OTA to direct bookings' },
      { label: '$41k', note: 'Median annual commission saved per 50 keys' },
      { label: '4.6→4.8', note: 'Average review score after guest-ops handoff' },
    ],
  },

  cta: {
    eyebrow: 'Next step',
    title: 'Send us last month\u2019s channel report',
    text:
      "We'll tell you, free, where the leaks are before you sign anything. Most audits take us under a week and land in your inbox as three pages you can act on immediately.",
    button: 'Book a revenue audit',
  },

  contact: {
    email: 'partners@ota-nexus.com',
    whatsapp: 'https://wa.me/910000000000',
    phone: 'tel:+910000000000',
  },

  footer: {
    name: 'OTA-NEXUS',
    line: 'Hospitality revenue & operations partner',
    legal: '\u00a9 2026 OTA-NEXUS',
  },
};