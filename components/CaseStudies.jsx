"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const caseStudies = [
  {
    category: "BOUTIQUE HOTEL",
    title: "Improving OTA Performance",
    service: "OTA Management",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=85",
    challenge:
      "Listings were inconsistent across booking platforms, and the property wasn't presented as clearly as it could be online.",
    strategy:
      "Review and improve OTA listings, room descriptions, photography and promotions so information is consistent on every channel.",
    outcome:
      "A clearer, more consistent online presence that helps potential guests understand and choose the property.",
  },
  {
    category: "LUXURY RESORT",
    title: "Revenue Strategy for a Luxury Resort",
    service: "Revenue Management",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=85",
    challenge:
      "Pricing didn't clearly reflect demand patterns or the way the resort's experience should be positioned.",
    strategy:
      "Competitor and market analysis, a review of demand and seasonality, and a structured rate-plan and promotion approach.",
    outcome:
      "A pricing and positioning approach that is easier to manage and better matched to demand.",
  },
  {
    category: "BUSINESS HOTEL",
    title: "Digital Distribution for a Business Hotel",
    service: "Online Distribution",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
    challenge:
      "Managing several booking platforms made listings, availability and promotions hard to keep organised.",
    strategy:
      "A structured approach to listings, inventory, availability, promotions and distribution across the right channels.",
    outcome:
      "More organised digital operations that are easier to manage day to day, with fewer booking conflicts.",
  },
  {
    category: "INDEPENDENT HOTEL",
    title: "Digital Marketing for an Independent Hotel",
    service: "Hotel Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    challenge:
      "The property needed more visibility with online travellers, and its booking journey had room to improve.",
    strategy:
      "Stronger content and digital presentation, tested Google and Meta campaigns where suitable, and a review of the guest booking journey.",
    outcome:
      "Better visibility with relevant travellers and clear opportunities to improve how guests book.",
  },
  {
    category: "BOUTIQUE RESORT",
    title: "Online Reputation for a Boutique Resort",
    service: "Online Reputation",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=85",
    challenge:
      "Guest feedback needed closer attention, with recurring themes unnoticed and responses that lacked consistency.",
    strategy:
      "Monitor reviews on Google and booking platforms, respond professionally, analyse recurring feedback and recommend improvements.",
    outcome:
      "Stronger guest trust and a clearer picture of what guests value and where the property can improve.",
  },
  {
    category: "RESORT",
    title: "Brand Positioning and Direct Bookings for a Resort",
    service: "Brand & Positioning",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85",
    challenge:
      "Brand presentation, online distribution and marketing weren't working under one plan, and the resort relied heavily on third-party platforms.",
    strategy:
      "Define clearer positioning, align the website, content, OTA presence and campaigns, and support the direct-booking journey.",
    outcome:
      "A joined-up growth plan and stronger opportunities for direct bookings.",
  },
];

const CaseStudies = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="case-studies"
      className="bg-[#10131c] px-5 py-16 text-[#f3f0e9] sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.23em] text-[#cbb071]">
            Case Studies
          </p>

          <h2 className="text-3xl font-normal tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            Hospitality growth{" "}
            <span className="font-serif italic text-[#cbb071]">
              case studies.
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#c7c3bd] sm:text-base">
            How we approach common challenges for different types of property.
            Tap "View Case Study" to read the full approach.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => {
            const isExpanded = expanded === index;

            return (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 3) * 0.07,
                }}
                className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#191c25] transition-colors duration-300 hover:border-[#cbb071]/50"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden sm:h-36 lg:h-40">
                  <Image
                    src={study.image}
                    alt={study.service}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-end gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/30 text-lg text-[#cbb071] backdrop-blur-sm">
                      {["↗", "↗", "◎", "↗", "☆", "◇"][index]}
                    </span>
                    <p className="max-w-[210px] text-sm font-medium leading-tight text-white">
                      {study.service}
                    </p>
                  </div>
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-4 sm:p-4">
                  <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.15em] text-[#cbb071]">
                    {study.category}
                  </p>

                  <h3 className="font-serif text-lg leading-snug text-[#f3f0e9]">
                    {study.title}
                  </h3>

                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="mb-1 text-[9px] font-medium uppercase tracking-[0.15em] text-[#cbb071]">
                        Challenge
                      </p>
                      <p className="text-xs leading-[1.65] text-[#d0ccc6]">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="mb-1 text-[9px] font-medium uppercase tracking-[0.15em] text-[#cbb071]">
                        Strategy
                      </p>
                      <p className="text-xs leading-[1.65] text-[#d0ccc6]">
                        {study.strategy}
                      </p>
                    </div>

                    <div>
                      <p className="mb-1 text-[9px] font-medium uppercase tracking-[0.15em] text-[#cbb071]">
                        Intended outcome
                      </p>
                      <p className="text-xs leading-[1.65] text-[#d0ccc6]">
                        {study.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Expandable details */}
                  <div className="mt-auto pt-4">
                    <div className="border-t border-white/10 pt-3">
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded(isExpanded ? null : index)
                        }
                        aria-expanded={isExpanded}
                        className="flex w-full items-center justify-between gap-3 text-left text-xs font-medium text-[#cbb071] transition-colors hover:text-[#ead39e]"
                      >
                        <span>
                          {isExpanded ? "Hide Case Study" : "View Case Study"}
                        </span>
                        <motion.span
                          animate={{ rotate: isExpanded ? 45 : 0 }}
                          className="text-lg leading-none"
                        >
                          +
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 text-xs leading-6 text-[#d0ccc6]">
                              <p>
                                <span className="font-semibold text-[#cbb071]">
                                  Our approach:{" "}
                                </span>
                                We begin by reviewing the property's current
                                position, identifying practical opportunities,
                                and agreeing on priorities with the owner.
                              </p>
                              <p className="mt-3">
                                <span className="font-semibold text-[#cbb071]">
                                  Next steps:{" "}
                                </span>
                                Establish a baseline, implement the agreed
                                improvements, and review available performance
                                data to guide the next phase.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;