"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

const services = [
  {
    letter: "A",
    title: "OTA Management & Distribution",
    description:
      "Your listings are hard to find, inconsistent across platforms, or difficult to keep updated.",
    image: "/otamanagement.webp",
    benefits: [
      "OTA listing creation and optimisation",
      "Booking.com, Expedia and Agoda management",
      "Inventory and availability coordination",
      "Promotions and distribution strategy",
    ],
  },
  {
    letter: "B",
    title: "Revenue Management & Pricing Strategy",
    description:
      "Prices feel like guesswork, and you are unsure whether you are leaving money on the table.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    benefits: [
      "Seasonal pricing and rate optimisation",
      "Competitor and market analysis",
      "Demand forecasting",
      "Occupancy and revenue performance reviews",
    ],
  },
  {
    letter: "C",
    title: "Performance Marketing & Paid Advertising",
    description:
      "Ad spend keeps rising, but it is hard to see which campaigns generate real enquiries or bookings.",
    image: "/performancemarketing.webp",
    benefits: [
      "Google and Meta advertising campaigns",
      "Audience targeting and retargeting",
      "Campaign tracking and conversion measurement",
      "Performance reporting and optimisation",
    ],
    featured: true,
    horizontal: true,
  },
  {
    letter: "D",
    title: "Social Media & Content Marketing",
    description:
      "Inconsistent posting makes it harder to communicate what makes your property special.",
    image: "/social.webp",
    benefits: [
      "Social media planning and calendars",
      "Property-focused content creation",
      "Reels, posts and destination storytelling",
      "Consistent brand communication",
    ],
  },
  {
    letter: "E",
    title: "Website Development & Direct Bookings",
    description:
      "Guests visit your website but do not enquire or book, leaving you reliant on OTA commissions.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    benefits: [
      "Modern, mobile-friendly property websites",
      "Direct booking journey optimisation",
      "Enquiry forms and booking integrations",
      "SEO fundamentals and analytics setup",
    ],
  },
  {
    letter: "F",
    title: "Branding & Creative",
    description:
      "Your property looks and sounds like every other listing.",
    image: "/branding.webp",
    benefits: [
      "Brand identity and positioning",
      "Visual direction and creative assets",
      "Property messaging and storytelling",
      "Marketing collateral and design",
    ],
    featured: true,
  },
  {
    letter: "G",
    title: "Reputation & Guest Experience",
    description:
      "Reviews go unanswered, or the same guest complaints keep returning.",
    image: "/reputation.webp",
    benefits: [
      "Review monitoring and response support",
      "Guest feedback analysis",
      "Reputation improvement strategy",
      "Guest experience recommendations",
    ],
  },
  {
    letter: "H",
    title: "Sales & Partnerships",
    description:
      "Your business relies on walk-ins and OTAs, with limited corporate or travel-trade demand.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=85",
    benefits: [
      "Corporate account development",
      "Travel agent and tour operator outreach",
      "Partnership opportunities",
      "Sales collateral and lead follow-up",
    ],
    horizontal: true,
  },
];

function ServiceCard({
  service,
  index,
  expanded,
  onToggle,
  reduceMotion,
}) {
  const panelId = `service-benefits-${service.letter}`;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: reduceMotion ? 0 : 0.4,
        delay: reduceMotion ? 0 : (index % 2) * 0.05,
      }}
      className={`group min-w-0 overflow-hidden rounded-xl border bg-[#191c25] transition-colors duration-300 hover:border-[#cbb071]/60 ${
        service.featured
          ? "border-[#8e7545]/60"
          : "border-white/10"
      } ${service.horizontal ? "lg:col-span-2 lg:flex" : ""}`}
    >
      {/* Local WebP image */}
      <div
        className={`relative shrink-0 overflow-hidden ${
          service.horizontal
            ? "aspect-[16/9] lg:aspect-auto lg:min-h-[200px] lg:w-[38%]"
            : "aspect-[2.2/1]"
        }`}
      >
        <Image
          src={service.image}
          alt={`${service.title} service`}
          fill
          sizes={
            service.horizontal
              ? "(min-width: 1024px) 38vw, 100vw"
              : "(min-width: 768px) 50vw, 100vw"
          }
          className={`object-cover ${
            reduceMotion
              ? ""
              : "transition-transform duration-700 group-hover:scale-105"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Service content */}
      <div className="flex min-w-0 flex-1 flex-col p-4 lg:p-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#cbb071]">
          Service {service.letter}
        </p>

        <h3 className="mt-2 font-serif text-lg leading-snug text-[#f3efe8] sm:text-xl">
          {service.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#c8c4bd]">
          {service.description}
        </p>

        {/* Expandable benefits */}
        <div className="mt-4 border-t border-white/10 pt-3">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={expanded}
            aria-controls={panelId}
            className="flex min-h-10 w-full items-center justify-between gap-3 rounded-sm text-left text-sm font-medium text-[#f1eee8] transition-colors hover:text-[#cbb071] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cbb071] focus-visible:ring-offset-2 focus-visible:ring-offset-[#191c25]"
          >
            <span>What you get</span>

            <motion.span
              animate={{ rotate: expanded ? 45 : 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.2,
              }}
              className="text-lg font-light text-[#cbb071]"
              aria-hidden="true"
            >
              +
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id={panelId}
                initial={
                  reduceMotion
                    ? false
                    : { height: 0, opacity: 0 }
                }
                animate={{ height: "auto", opacity: 1 }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { height: 0, opacity: 0 }
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.22,
                }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 pb-2 pt-3">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm leading-5 text-[#c8c4bd]"
                    >
                      <span
                        className="mt-0.5 text-[#cbb071]"
                        aria-hidden="true"
                      >
                        —
                      </span>

                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className="mt-2 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-[#cbb071] transition-colors hover:text-[#e0c58a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cbb071]"
                >
                  Discuss this service
                  <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="bg-[#10131c] px-4 py-14 text-[#f2efe9] sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
          className="mb-8 max-w-3xl sm:mb-10"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#cbb071]">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Practical help across the{" "}
            <span className="font-serif italic text-[#cbb071]">
              whole guest journey.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#cbc7c0] sm:text-base sm:leading-7">
            Use only what your property needs. We understand your
            goals and recommend relevant services instead of
            pushing a one-size-fits-all package.
          </p>
        </motion.div>

        {/* Responsive service grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.letter}
              service={service}
              index={index}
              expanded={expandedService === service.letter}
              reduceMotion={reduceMotion}
              onToggle={() =>
                setExpandedService((current) =>
                  current === service.letter
                    ? null
                    : service.letter
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}