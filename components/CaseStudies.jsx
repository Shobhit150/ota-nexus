
"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const caseStudies = [
  {
    category: "BOUTIQUE HOTEL",
    title: "Improving OTA Performance",
    service: "OTA Management",
    image:
      "/otaperformance.webp",
    challenge:
      "Listings were inconsistent across booking platforms, and the property wasn't presented as clearly as it could be online.",
    strategy:
      "Review and improve OTA listings, room descriptions, photography and promotions so information is consistent on every channel.",
    outcome:
      "A clearer, more consistent online presence that helps potential guests understand and choose the property.",
    icon: "↗",
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
    icon: "↗",
  },
  {
    category: "BUSINESS HOTEL",
    title: "Digital Distribution for a Business Hotel",
    service: "Online Distribution",
    image:
      "/onlinedistribution.webp",
    challenge:
      "Managing several booking platforms made listings, availability and promotions hard to keep organised.",
    strategy:
      "A structured approach to listings, inventory, availability, promotions and distribution across the right channels.",
    outcome:
      "More organised digital operations that are easier to manage day to day, with fewer booking conflicts.",
    icon: "◎",
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
    icon: "↗",
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
    icon: "☆",
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
    icon: "◇",
  },
];

export default function CaseStudies() {
  const [expanded, setExpanded] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="case-studies"
      className="overflow-hidden bg-[#10131c] px-4 py-14 text-[#f3f0e9] sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="max-w-2xl"
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#cbb071] sm:text-xs">
            Case Studies
          </p>

          <h2 className="text-3xl font-normal leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[2.8rem]">
            Hospitality growth{" "}
            <span className="font-serif italic text-[#cbb071]">
              case studies.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-[#c7c3bd] sm:text-base sm:leading-7">
            Explore how we approach common challenges across different types
            of hospitality properties. Expand a case study to learn more.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {caseStudies.map((study, index) => {
            const isExpanded = expanded === index;

            return (
              <motion.article
                key={study.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: reduceMotion ? 0 : (index % 3) * 0.06,
                }}
                className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#191c25] transition-colors duration-300 hover:border-[#cbb071]/40"
              >
                <div
                  role="img"
                  aria-label={study.service}
                  className="group relative h-48 shrink-0 overflow-hidden bg-[#242833] sm:h-40 lg:h-44"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url("${study.image}")` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/30 text-lg text-[#cbb071] backdrop-blur-sm">
                      {study.icon}
                    </span>
                    <p className="text-sm font-medium leading-snug text-white">
                      {study.service}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#cbb071] sm:text-[10px]">
                    {study.category}
                  </p>

                  <h3 className="text-lg leading-snug text-[#f3f0e9] sm:text-xl">
                    {study.title}
                  </h3>

                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#cbb071] sm:text-[10px]">
                        Challenge
                      </p>
                      <p className="text-xs leading-[1.75] text-[#d0ccc6] sm:text-[13px]">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#cbb071] sm:text-[10px]">
                        Strategy
                      </p>
                      <p className="text-xs leading-[1.75] text-[#d0ccc6] sm:text-[13px]">
                        {study.strategy}
                      </p>
                    </div>

                    <div>
                      <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#cbb071] sm:text-[10px]">
                        Intended Outcome
                      </p>
                      <p className="text-xs leading-[1.75] text-[#d0ccc6] sm:text-[13px]">
                        {study.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-5">
                    <div className="border-t border-white/10 pt-4">
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded(isExpanded ? null : index)
                        }
                        aria-expanded={isExpanded}
                        aria-controls={`case-study-details-${index}`}
                        className="flex min-h-10 w-full items-center justify-between gap-3 rounded-sm text-left text-xs font-semibold text-[#cbb071] transition-colors hover:text-[#ead39e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cbb071] focus-visible:ring-offset-4 focus-visible:ring-offset-[#191c25]"
                      >
                        <span>
                          {isExpanded ? "Hide Case Study" : "View Case Study"}
                        </span>

                        <motion.span
                          aria-hidden="true"
                          animate={{ rotate: isExpanded ? 45 : 0 }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.2,
                          }}
                          className="text-xl leading-none"
                        >
                          +
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            id={`case-study-details-${index}`}
                            initial={
                              reduceMotion
                                ? false
                                : { height: 0, opacity: 0 }
                            }
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: reduceMotion ? 0 : 0.25,
                            }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-3 pt-4 text-xs leading-6 text-[#d0ccc6] sm:text-[13px]">
                              <p>
                                <span className="font-semibold text-[#cbb071]">
                                  Our approach:{" "}
                                </span>
                                We begin by reviewing the property&apos;s
                                current position, identifying practical
                                opportunities, and agreeing on priorities with
                                the owner.
                              </p>

                              <p>
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
}
