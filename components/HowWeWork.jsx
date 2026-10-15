"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "Review listings, pricing, reviews, competitors and digital presence to identify opportunities.",
  },
  {
    number: "02",
    title: "Position",
    description:
      "Define your property's unique strengths, target guests and market positioning.",
  },
  {
    number: "03",
    title: "Distribute",
    description:
      "Strengthen visibility across Booking.com, Agoda, Expedia and MakeMyTrip.",
  },
  {
    number: "04",
    title: "Optimise",
    description:
      "Improve pricing, listing quality, photography, offers and the booking experience.",
  },
  {
    number: "05",
    title: "Reputation",
    description:
      "Manage guest feedback, strengthen reviews and build trust with future guests.",
  },
  {
    number: "06",
    title: "Scale",
    description:
      "Track performance, understand booking trends and refine your growth strategy.",
  },
];

export default function HowWeWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="how-we-work"
      className="bg-[#f3efe7] px-4 py-10 text-[#171923] sm:px-6 sm:py-12 lg:px-8 lg:py-14"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.35 }}
          className="mb-6 flex flex-col gap-3 sm:mb-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#89672e]">
              How We Work
            </p>

            <h2 className="mt-2 text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              A clear path to{" "}
              <span className="font-serif italic text-[#89672e]">
                growth.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#55534f]">
            Six focused steps to improve your online presence,
            attract more guests and grow revenue.
          </p>
        </motion.div>

        {/* Compact process grid */}
        <div className="grid grid-cols-1 border-l border-t border-[#171923]/15 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                delay: reduceMotion ? 0 : (index % 3) * 0.04,
              }}
              className="group min-w-0 border-b border-r border-[#171923]/15 p-4 transition-colors duration-200 hover:bg-[#eae3d6] sm:p-5 lg:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-serif text-2xl leading-none text-[#89672e]">
                  {step.number}
                </span>

                <span className="h-px w-8 bg-[#89672e]/40 transition-all duration-300 group-hover:w-12 group-hover:bg-[#89672e]" />
              </div>

              <h3 className="mt-4 text-lg font-medium tracking-tight sm:text-xl">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#55534f]">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}