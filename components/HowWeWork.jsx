
"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Audit",
    subtitle: "Understand the property's current performance.",
    description:
      "We review your online listings, pricing, website, guest reviews, competitors and digital presence to identify gaps and opportunities.",
  },
  {
    number: "02",
    title: "Position",
    subtitle: "Build a clear identity for your property.",
    description:
      "We identify what makes your property unique, define your target guests and shape a positioning that helps you stand out.",
  },
  {
    number: "03",
    title: "Distribute",
    subtitle: "Reach more potential guests online.",
    description:
      "We strengthen your presence across booking platforms such as Booking.com, Agoda, Expedia and MakeMyTrip.",
  },
  {
    number: "04",
    title: "Optimise",
    subtitle: "Turn more visitors into bookings.",
    description:
      "We improve pricing, listing quality, photography, descriptions, offers and the booking experience.",
  },
  {
    number: "05",
    title: "Reputation",
    subtitle: "Build trust before guests arrive.",
    description:
      "We help manage reviews, respond to feedback professionally and identify areas for improvement.",
  },
  {
    number: "06",
    title: "Scale",
    subtitle: "Turn performance insights into growth.",
    description:
      "We track results, study booking trends and refine the strategy as new opportunities emerge.",
  },
];

export default function HowWeWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="how-we-work"
      className="bg-[#f3efe7] px-4 py-14 text-[#171923] sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
          className="mb-8 max-w-3xl sm:mb-10"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#89672e]">
            How We Work
          </p>

          <h2 className="mt-3 text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            A simple, step-by-step{" "}
            <span className="font-serif italic text-[#89672e]">
              growth process.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#55534f] sm:text-base sm:leading-7">
            We help hotels, resorts, villas, homestays and vacation
            rentals improve their online presence, attract more guests
            and grow revenue.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="border-t border-[#171923]/15">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={
                reduceMotion ? false : { opacity: 0, y: 10 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                delay: reduceMotion ? 0 : index * 0.035,
              }}
              className="grid grid-cols-[34px_minmax(0,1fr)] gap-3 border-b border-[#171923]/15 py-5 sm:grid-cols-[44px_minmax(0,1fr)] sm:gap-5 sm:py-6 lg:grid-cols-[52px_minmax(0,1fr)] lg:gap-6"
            >
              <span className="pt-0.5 font-serif text-xl leading-none tracking-tight text-[#89672e] sm:text-2xl">
                {step.number}
              </span>

              <div className="min-w-0">
                <h3 className="text-base font-medium leading-snug sm:text-lg">
                  {step.title}
                </h3>

                <p className="mt-1 text-sm font-medium leading-5 text-[#292923]">
                  {step.subtitle}
                </p>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-[#55534f]">
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
