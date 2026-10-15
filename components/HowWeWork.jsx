"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Audit",
    subtitle: "Understand the property's current performance.",
    description:
      "We review your online listings, pricing, website, guest reviews, competitors and digital presence to find gaps and opportunities.",
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
      "We help manage reviews, respond to feedback professionally and spot areas to improve.",
  },
  {
    number: "06",
    title: "Scale",
    subtitle: "Turn performance insights into growth.",
    description:
      "We track results, study booking trends and keep refining the strategy as new opportunities appear.",
  },
];

const HowWeWork = () => {
  return (
    <section
      id="how-we-work"
      className="bg-[#f3efe7] px-5 py-16 text-[#171923] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-10 sm:mb-12"
        >
          <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#89672e] sm:text-[10px]">
            How We Work
          </p>

          <h2 className="mt-3 text-[clamp(1.8rem,3.3vw,3rem)] leading-[1.2] tracking-[-0.045em]">
            A simple, step-by-step{" "}
            <span className="font-serif italic text-[#89672e]">
              growth process.
            </span>
          </h2>

          <p className="mt-3 max-w-[650px] text-xs leading-6 text-[#55534f] sm:text-sm sm:leading-7">
            We help hotels, resorts, villas, homestays and vacation rentals
            improve their online presence, attract more guests and grow revenue.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="border-t border-[#171923]/20">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
              }}
              className="grid grid-cols-[38px_minmax(0,1fr)] gap-3 border-b border-[#171923]/20 py-5 sm:grid-cols-[52px_minmax(0,1fr)] sm:gap-6 sm:py-6"
            >
              <span className="font-serif text-[23px] leading-none tracking-[-0.04em] text-[#89672e] sm:text-[26px]">
                {step.number}
              </span>

              <div>
                <h3 className="text-sm font-medium leading-5 sm:text-base">
                  {step.title}
                </h3>

                <p className="mt-0.5 text-[11px] font-medium leading-5 text-[#171923] sm:text-xs">
                  {step.subtitle}
                </p>

                <p className="mt-0.5 max-w-[1100px] text-[11px] leading-[1.8] text-[#55534f] sm:text-xs sm:leading-5">
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;