"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const challenges = [
  {
    title: "Low Occupancy in Slower Periods",
    description:
      "We assess pricing, visibility, and demand to identify opportunities to improve occupancy.",
  },
  {
    title: "Weak Visibility on OTAs",
    description:
      "We optimise listings, content, and promotions to help your property stand out in search results.",
  },
  {
    title: "Uncertain Pricing Decisions",
    description:
      "We develop rate and promotion strategies based on your market, competitors, and seasonal demand.",
  },
  {
    title: "Overdependence on Third-Party Bookings",
    description:
      "We strengthen your direct-booking journey and campaigns to help attract guests to your property.",
  },
  {
    title: "Inconsistent Social Media",
    description:
      "We plan relevant content around your property and destination to build a consistent online presence.",
  },
  {
    title: "Rising Advertising Costs",
    description:
      "We test and track campaigns to understand performance and make better use of your advertising budget.",
  },
  {
    title: "Enquiries That Don't Convert",
    description:
      "We improve landing pages, booking journeys, and follow-up processes to reduce friction.",
  },
];

const PropertyChallenges = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="property-challenges"
      className="bg-[#10131c] text-[#f1eee8]"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
        >
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#cbb071] sm:text-xs">
            Sound Familiar?
          </p>

          <h2 className="max-w-3xl text-3xl font-normal leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            Running a property is hard enough.{" "}
            <span className="font-serif italic text-[#cbb071]">
              Getting found shouldn't be.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#bcb9b3] sm:text-base sm:leading-8">
            Every property faces different challenges. Here are some common
            issues we help hospitality businesses address.
          </p>
        </motion.div>

        {/* Challenges grid */}
        <div className="mt-9 grid grid-cols-1 gap-x-7 sm:grid-cols-2 lg:mt-11 lg:grid-cols-3 lg:gap-x-9">
          {challenges.map((challenge, index) => (
            <motion.article
              key={challenge.title}
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 12 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.4,
                delay: shouldReduceMotion ? 0 : (index % 3) * 0.06,
              }}
              className="group flex h-full flex-col border-t border-white/10 py-5 sm:py-6"
            >
              <div className="mb-3 h-px w-8 bg-[#cbb071]/70 transition-all duration-300 group-hover:w-12" />

              <h3 className="text-base font-semibold leading-snug tracking-tight text-[#f1eee8] sm:text-[17px]">
                {challenge.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#bcb9b3] sm:text-[15px] sm:leading-7">
                {challenge.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyChallenges;