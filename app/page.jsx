'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { siteConfig } from './config';

const ease = [0.22, 1, 0.36, 1];
const container = 'mx-auto w-[92%] max-w-[1180px]';

const heroReveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.6, ease, delay },
  };
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 font-display text-[17px] italic">
      <span className="h-[7px] w-[7px] rounded-full bg-[#b8874a]" aria-hidden="true" />
      {siteConfig.brand.name}
    </a>
  );
}

function SectionIntro({ title, text, dark }) {
  return (
    <div className="grid gap-6 md:grid-cols-[1fr_0.6fr] md:items-end md:gap-16">
      <h2
        className={`font-display max-w-[600px] text-[clamp(2.1rem,4.2vw,3.4rem)] font-medium leading-[1.06] tracking-[-0.01em] ${
          dark ? 'text-[#12181b]' : 'text-[#f6f1e7]'
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`max-w-[440px] text-[15px] leading-7 ${
            dark ? 'text-[#12181b]/60' : 'text-[#f6f1e7]/55'
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function ChannelMixBar() {
  const rows = [
    {
      label: 'Before',
      segments: [
        { name: 'Direct', pct: 22, color: '#b8874a' },
        { name: 'Booking.com', pct: 38, color: '#3c4a3f' },
        { name: 'Expedia', pct: 24, color: '#5c6d60' },
        { name: 'Other OTAs', pct: 16, color: '#8c8577' },
      ],
    },
    {
      label: 'After 2 quarters',
      segments: [
        { name: 'Direct', pct: 41, color: '#b8874a' },
        { name: 'Booking.com', pct: 28, color: '#3c4a3f' },
        { name: 'Expedia', pct: 18, color: '#5c6d60' },
        { name: 'Other OTAs', pct: 13, color: '#8c8577' },
      ],
    },
  ];

  return (
    <div className="border-t border-[#f6f1e7]/12 pt-8">
      <p className="text-[12px] text-[#f6f1e7]/45">
        Illustrative channel mix, median property
      </p>

      <div className="mt-6 space-y-5">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="mb-2 text-[12.5px] text-[#f6f1e7]/65">{row.label}</div>
            <div className="flex h-3 w-full overflow-hidden rounded-[2px]">
              {row.segments.map((seg) => (
                <div
                  key={seg.name}
                  style={{ width: `${seg.pct}%`, background: seg.color }}
                  title={`${seg.name} ${seg.pct}%`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
        {rows[0].segments.map((seg) => (
          <div key={seg.name} className="flex items-center gap-1.5 text-[11.5px] text-[#f6f1e7]/55">
            <span
              className="h-[7px] w-[7px] rounded-full"
              style={{ background: seg.color }}
              aria-hidden="true"
            />
            {seg.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#12181b] text-[#f6f1e7]">
      <motion.div
        className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-[#b8874a]"
        style={{ scaleX: progress }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#f6f1e7]/10 bg-[#12181b]/92 backdrop-blur-xl">
        <div className={`${container} flex h-[74px] items-center justify-between`}>
          <Logo />

          <nav className="hidden items-center gap-9 text-[13px] text-[#f6f1e7]/55 md:flex">
            {siteConfig.nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#f6f1e7]">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden bg-[#b8874a] px-5 py-2.5 text-[12.5px] font-medium text-[#12181b] transition hover:bg-[#f6f1e7] sm:inline-flex"
          >
            {siteConfig.header.cta}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className={`${container} py-24 md:py-32`}>
        <div className="grid gap-16 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
          <div>
            <motion.p
              initial="hidden"
              animate="show"
              variants={heroReveal}
              className="text-[13.5px] text-[#b8874a]"
            >
              {siteConfig.hero.kicker}
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={heroReveal}
              transition={{ delay: 0.06 }}
              className="font-display mt-5 max-w-[720px] text-[clamp(2.6rem,6vw,4.6rem)] font-medium leading-[1.04] tracking-[-0.015em]"
            >
              {siteConfig.hero.title}
              <br />
              <span className="italic text-[#f6f1e7]/70">{siteConfig.hero.accent}</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={heroReveal}
              transition={{ delay: 0.12 }}
              className="mt-7 max-w-[540px] text-[15.5px] leading-7 text-[#f6f1e7]/62"
            >
              {siteConfig.hero.body}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={heroReveal}
              transition={{ delay: 0.18 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex bg-[#b8874a] px-6 py-3.5 text-[13px] font-medium text-[#12181b] transition hover:bg-[#f6f1e7]"
              >
                {siteConfig.hero.primaryCta}
              </a>
              <a
                href="#model"
                className="inline-flex border border-[#f6f1e7]/20 px-6 py-3.5 text-[13px] font-medium transition hover:border-[#f6f1e7]/50"
              >
                {siteConfig.hero.secondaryCta}
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={heroStagger}
              className="mt-16 flex flex-wrap items-end gap-x-12 gap-y-8"
            >
              <motion.div variants={heroReveal}>
                <div className="font-display text-[3.4rem] leading-none text-[#b8874a]">
                  {siteConfig.hero.stats[1].value}
                </div>
                <div className="mt-2 max-w-[160px] text-[12.5px] leading-5 text-[#f6f1e7]/50">
                  {siteConfig.hero.stats[1].label}
                </div>
              </motion.div>

              {[siteConfig.hero.stats[0], siteConfig.hero.stats[2]].map((stat) => (
                <motion.div key={stat.label} variants={heroReveal}>
                  <div className="text-[22px] font-medium">{stat.value}</div>
                  <div className="mt-1 max-w-[140px] text-[12px] leading-5 text-[#f6f1e7]/45">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="self-start md:mt-2"
          >
            <p className="text-[13px] text-[#f6f1e7]/45">{siteConfig.hero.panel.eyebrow}</p>
            <h2 className="font-display mt-3 max-w-[420px] text-[1.7rem] font-medium leading-[1.15]">
              {siteConfig.hero.panel.title}
            </h2>

            <div className="mt-9 space-y-6">
              {siteConfig.hero.panel.items.map((item) => (
                <div key={item.title} className="border-l-2 border-[#b8874a]/40 pl-4">
                  <h3 className="text-[14.5px] font-medium">{item.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-[#f6f1e7]/50">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <ChannelMixBar />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Model */}
      <section id="model" className="border-y border-[#f6f1e7]/10 bg-[#f6f1e7]">
        <div className={`${container} py-24 md:py-32`}>
          <motion.div {...fadeUp()}>
            <SectionIntro title={siteConfig.model.title} text={siteConfig.model.intro} dark />
          </motion.div>

          <div className="mt-16 grid gap-10 border-t border-[#12181b]/10 pt-12 md:grid-cols-3 md:gap-14">
            {siteConfig.model.items.map((item) => (
              <article key={item.title}>
                <p className="text-[12.5px] font-medium text-[#b8874a]">{item.number}</p>
                <h3 className="font-display mt-4 text-[21px] font-medium text-[#12181b]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-6 text-[#12181b]/58">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={`${container} py-24 md:py-32`}>
        <motion.div {...fadeUp()}>
          <SectionIntro title={siteConfig.services.title} text={siteConfig.services.intro} />
        </motion.div>

        <div className="mt-16 border-t border-[#f6f1e7]/12">
          {siteConfig.services.items.map((item) => (
            <div
              key={item.index}
              className="grid gap-3 border-b border-[#f6f1e7]/12 py-7 md:grid-cols-[140px_1fr_1.3fr_auto] md:items-center md:gap-8"
            >
              <span className="text-[12.5px] text-[#b8874a]">{item.index}</span>
              <h3 className="font-display text-[19px] font-medium">{item.title}</h3>
              <p className="max-w-[520px] text-[13.5px] leading-6 text-[#f6f1e7]/55">
                {item.text}
              </p>
              <span className="text-[11.5px] text-[#f6f1e7]/40">{item.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Onboarding — a genuine sequence, so numbered steps are earned here */}
      <section id="system" className="border-y border-[#f6f1e7]/10 bg-[#f6f1e7]">
        <div className={`${container} py-24 md:py-32`}>
          <motion.div {...fadeUp()}>
            <SectionIntro title={siteConfig.system.title} text={siteConfig.system.intro} dark />
          </motion.div>

          <div className="mt-16 grid gap-x-10 gap-y-12 border-t border-[#12181b]/10 pt-12 sm:grid-cols-2">
            {siteConfig.system.steps.map((step) => (
              <div key={step.no} className="flex gap-5">
                <span className="font-display shrink-0 text-[15px] italic text-[#b8874a]">
                  {step.no}
                </span>
                <div>
                  <h3 className="text-[16px] font-medium text-[#12181b]">{step.title}</h3>
                  <p className="mt-2 max-w-[380px] text-[13.5px] leading-6 text-[#12181b]/55">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property types */}
      <section id="properties" className={`${container} py-24 md:py-32`}>
        <motion.div {...fadeUp()}>
          <SectionIntro title={siteConfig.properties.title} text={siteConfig.properties.intro} />
        </motion.div>

        <div className="mt-16 grid gap-x-10 gap-y-12 border-t border-[#f6f1e7]/12 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.properties.items.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-[19px] font-medium">{item.title}</h3>
              <p className="mt-3 text-[13px] leading-6 text-[#f6f1e7]/50">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section id="metrics" className="border-y border-[#f6f1e7]/10 bg-[#f6f1e7]">
        <div className={`${container} py-24 md:py-32`}>
          <motion.div {...fadeUp()}>
            <SectionIntro title={siteConfig.proof.title} text={siteConfig.proof.intro} dark />
          </motion.div>

          <div className="mt-16 grid gap-x-10 gap-y-10 border-t border-[#12181b]/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.proof.metrics.map((metric) => (
              <div key={metric.note}>
                <div className="font-display text-[2.1rem] font-medium text-[#12181b]">
                  {metric.label}
                </div>
                <p className="mt-2 max-w-[190px] text-[12.5px] leading-5 text-[#12181b]/55">
                  {metric.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className={`${container} py-24 md:py-32`}>
        <div className="grid gap-12 md:grid-cols-[1fr_0.6fr] md:items-end">
          <div>
            <p className="text-[13px] text-[#b8874a]">{siteConfig.cta.eyebrow}</p>
            <h2 className="font-display mt-4 max-w-[620px] text-[clamp(2.2rem,4.6vw,3.6rem)] font-medium leading-[1.06]">
              {siteConfig.cta.title}
            </h2>
            <p className="mt-6 max-w-[480px] text-[14.5px] leading-7 text-[#f6f1e7]/58">
              {siteConfig.cta.text}
            </p>
          </div>

          <div className="flex md:justify-end">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex bg-[#b8874a] px-7 py-4 text-[13px] font-medium text-[#12181b] transition hover:bg-[#f6f1e7]"
            >
              {siteConfig.cta.button}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#f6f1e7]/10">
        <div className={`${container} flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between`}>
          <div>
            <div className="text-[13px] font-medium">{siteConfig.footer.name}</div>
            <div className="mt-1 text-[11.5px] text-[#f6f1e7]/40">{siteConfig.footer.line}</div>
          </div>
          <div className="text-[11.5px] text-[#f6f1e7]/40">{siteConfig.footer.legal}</div>
        </div>
      </footer>
    </main>
  );
}