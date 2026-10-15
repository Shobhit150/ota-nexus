"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    letter: "A",
    title: "OTA Management & Distribution",
    description:
      "Your listings are hard to find, inconsistent across platforms, or hard to keep up to date.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",
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
      "Prices feel like guesswork, and you’re unsure whether you’re leaving money on the table.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
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
      "Ad spend keeps rising, but it’s hard to see which campaigns bring real enquiries or bookings.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
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
      "Posting is inconsistent, and your content doesn’t show what makes the property special.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85",
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
      "Guests visit your website but don’t enquire or book, so OTAs keep the commission.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
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
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
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
      "Reviews go unanswered, or the same complaints keep coming back.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
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
      "Business leans on walk-ins and OTAs, with little corporate or travel-trade demand.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=85",
    benefits: [
      "Corporate account development",
      "Travel agent and tour operator outreach",
      "Partnership opportunities",
      "Sales collateral and lead follow-up",
    ],
    horizontal: true,
  },
];

function ServiceCard({ service, index, expanded, onToggle }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
      className={`group overflow-hidden rounded-xl border ${
        service.featured
          ? "border-[#8e7545]/70"
          : "border-white/10"
      } bg-[#191c25] transition-colors duration-300 hover:border-[#cbb071]/60 ${
        service.horizontal
          ? "lg:col-span-2 lg:flex"
          : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          service.horizontal
            ? "aspect-[16/9] lg:aspect-auto lg:min-h-[220px] lg:w-[42%] lg:shrink-0"
            : "aspect-[2/1]"
        }`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes={
            service.horizontal
              ? "(min-width: 1024px) 42vw, 100vw"
              : "(min-width: 1024px) 50vw, 100vw"
          }
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#cbb071]">
          Service {service.letter}
        </p>

        <h3 className="mt-2 font-serif text-lg leading-snug text-[#f3efe8] sm:text-xl">
          {service.title}
        </h3>

        <p className="mt-2 text-xs leading-[1.8] text-[#c8c4bd] sm:text-sm">
          {service.description}
        </p>

        {/* Expandable benefits */}
        <div className="mt-3 border-t border-white/15 pt-3">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={expanded}
            className="flex w-full items-center justify-between gap-3 py-1 text-left text-xs font-medium text-[#f1eee8] transition-colors hover:text-[#cbb071]"
          >
            <span>What you get</span>
            <motion.span
              animate={{ rotate: expanded ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-base font-light text-[#cbb071]"
              aria-hidden="true"
            >
              +
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 pb-2 pt-3">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-xs leading-5 text-[#c8c4bd] sm:text-sm"
                    >
                      <span className="mt-1 text-[#cbb071]">—</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className="mt-2 inline-flex items-center gap-2 pb-2 text-xs font-medium text-[#cbb071] transition-colors hover:text-[#e0c58a]"
                >
                  Discuss this service <span aria-hidden="true">→</span>
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

  return (
    <section
      id="services"
      className="bg-[#10131c] px-5 py-16 text-[#f2efe9] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1640px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-[1000px] sm:mb-10"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#cbb071]">
            Services
          </p>

          <h2 className="mt-3 text-[clamp(1.9rem,3.3vw,3rem)] leading-[1.2] tracking-[-0.045em]">
            Practical help across the{" "}
            <span className="font-serif italic text-[#cbb071]">
              whole guest journey.
            </span>
          </h2>

          <p className="mt-3 max-w-[680px] text-sm leading-6 text-[#cbc7c0] sm:leading-7">
            Use only what your property needs. After understanding your goals,
            we recommend the relevant services instead of pushing a package.
          </p>
        </motion.div>

        {/* Responsive service grid */}
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.letter}
              service={service}
              index={index}
              expanded={expandedService === service.letter}
              onToggle={() =>
                setExpandedService((current) =>
                  current === service.letter ? null : service.letter
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
