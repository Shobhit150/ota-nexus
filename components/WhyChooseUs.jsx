"use client";

import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    title: "Built Around Hospitality",
    description:
      "We understand room inventory, pricing, and guest reviews to deliver strategies tailored to your property.",
  },
  {
    title: "One Team, Every Channel",
    description:
      "We bring OTAs, pricing, advertising, and direct bookings together in one coordinated strategy.",
  },
  {
    title: "Clear, Actionable Reporting",
    description:
      "Understand what is working, where opportunities exist, and what to improve next.",
  },
  {
    title: "Focused on Real Results",
    description:
      "We set realistic goals, track performance, and make decisions based on meaningful data.",
  },
];

const platforms = [
  { name: "Expedia", style: "font-semibold tracking-tight" },
  { name: "Hotels.com", style: "font-medium tracking-tight" },
  { name: "Trip.com", style: "font-bold tracking-tight" },
  { name: "Tripadvisor", style: "font-bold tracking-tight" },
  { name: "trivago", style: "font-extrabold tracking-tight" },
  { name: "Vrbo", style: "font-bold italic tracking-tight" },
  { name: "Agoda", style: "font-bold tracking-tight" },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="overflow-hidden bg-[#0c0f14] text-[#f3f0e9]"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* Main statistic */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:gap-7 sm:pb-10"
        >
          <h2 className="font-serif text-6xl font-normal leading-none tracking-tight text-[#cbb071] sm:text-7xl lg:text-8xl">
            50+
          </h2>

          <div className="max-w-lg">
            <p className="text-lg font-medium leading-relaxed text-[#eeeae3] sm:text-xl">
              Hotels partnered with us for hospitality growth.
            </p>
            <p className="mt-1 text-sm leading-6 text-[#a7a39b]">
              Smarter distribution. Better performance. Sustainable growth.
            </p>
          </div>
        </motion.div>

        {/* Value propositions */}
        <div className="grid grid-cols-1 gap-7 py-9 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-9 lg:grid-cols-4 lg:gap-8 lg:py-11">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="border-l border-[#cbb071]/50 pl-4"
            >
              <h3 className="text-base font-semibold leading-snug tracking-tight text-[#cbb071] sm:text-[17px]">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#c6c3bd] sm:text-[15px] sm:leading-7">
                {value.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Booking platforms */}
        <div className="border-t border-white/10 pt-8 sm:pt-9">
          <p className="mb-6 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-[#a7a39b] sm:text-xs sm:tracking-[0.2em]">
            Booking and travel platforms we support
          </p>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0c0f14] to-transparent sm:w-12" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0c0f14] to-transparent sm:w-12" />

            <motion.div
              className="flex w-max gap-3 py-1 sm:gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...platforms, ...platforms].map((platform, index) => (
                <div
                  key={`${platform.name}-${index}`}
                  className="flex h-14 w-36 shrink-0 items-center justify-center rounded-xl bg-[#f3eee5] px-3 text-[#565656] sm:h-16 sm:w-44"
                >
                  <span
                    className={`whitespace-nowrap text-lg sm:text-xl ${platform.style}`}
                  >
                    {platform.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <p className="mt-4 text-center text-[11px] text-[#77756f]">
            All trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;