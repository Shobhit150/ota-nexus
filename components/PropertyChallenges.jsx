"use client";

import React from "react";
import { motion } from "framer-motion";

const challenges = [
  {
    title: "Low occupancy in slower periods",
    description:
      "We look at pricing, visibility and demand before suggesting a fix.",
  },
  {
    title: "Weak visibility on OTAs",
    description:
      "We improve listings, content, promotions and how you appear in search results.",
  },
  {
    title: "Pricing that feels like guesswork",
    description:
      "We build a rate and promotion strategy around your market and seasons.",
  },
  {
    title: "Too dependent on third-party bookings",
    description:
      "We support direct-booking journeys and campaigns that bring guests to you.",
  },
  {
    title: "Inconsistent social media",
    description:
      "We plan content around your property and the destination, then keep it going.",
  },
  {
    title: "Rising advertising costs",
    description:
      "We run tracked, tested campaigns so spend is tied to enquiries and bookings.",
  },
  {
    title: "Enquiries that don’t convert",
    description:
      "We tighten landing pages, booking journeys and follow-up.",
  },
];

const PropertyChallenges = () => {
  return (
    <section
      id="property-challenges"
      className="bg-[#10131c] text-[#f1eee8]"
    >
      <div className="mx-auto max-w-[1640px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-[#cbb071] sm:text-sm">
            Sound familiar?
          </p>

          <h2 className="max-w-[1450px] text-[clamp(2.3rem,4.1vw,4.25rem)] font-normal leading-[1.12] tracking-[-0.045em]">
            Running a property is hard enough.{" "}
            <span className="font-serif italic text-[#cbb071]">
              Getting found shouldn’t be.
            </span>
          </h2>

          <p className="mt-7 max-w-[800px] text-base leading-8 text-[#c8c5bf] sm:text-lg sm:leading-[1.8]">
            Not every property has every problem. These are the ones we hear
            most often, and what we do about them.
          </p>
        </motion.div>

        {/* Challenges grid */}
        <div className="mt-12 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-x-[60px]">
          {challenges.map((challenge, index) => (
            <motion.article
              key={challenge.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: (index % 3) * 0.08,
              }}
              className="border-t border-white/15 py-6 sm:py-7"
            >
              <h3 className="text-lg font-medium leading-snug tracking-tight text-[#f1eee8] sm:text-xl">
                {challenge.title}
              </h3>

              <p className="mt-1.5 text-[15px] leading-[1.8] text-[#bcb9b3] sm:text-base">
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
