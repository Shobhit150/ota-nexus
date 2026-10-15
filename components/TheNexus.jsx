"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  {
    id: "ota",
    label: "OTA MANAGEMENT",
    x: 50,
    y: 7,
    description:
      "Listings, inventory, pricing and promotions managed as one daily discipline.",
  },
  {
    id: "analytics",
    label: "ANALYTICS",
    x: 30,
    y: 19,
    description:
      "Clear performance insights that help identify opportunities and improve decisions.",
  },
  {
    id: "revenue",
    label: "REVENUE",
    x: 70,
    y: 19,
    description:
      "Pricing strategies built around demand, seasons and competitors.",
  },
  {
    id: "distribution",
    label: "DISTRIBUTION",
    x: 17,
    y: 37,
    description:
      "Connected booking channels and accurate inventory across travel platforms.",
  },
  {
    id: "content",
    label: "CONTENT",
    x: 83,
    y: 37,
    description:
      "Compelling property descriptions and visuals that help turn browsing into bookings.",
  },
  {
    id: "seo",
    label: "SEO",
    x: 17,
    y: 63,
    description:
      "Improve organic search visibility and reach more potential guests.",
  },
  {
    id: "reviews",
    label: "REVIEWS",
    x: 83,
    y: 63,
    description:
      "Monitor guest feedback and strengthen your property's online reputation.",
  },
  {
    id: "social",
    label: "SOCIAL MEDIA",
    x: 30,
    y: 81,
    description:
      "Consistent social content that showcases your property and destination.",
  },
  {
    id: "marketing",
    label: "DIGITAL MARKETING",
    x: 70,
    y: 81,
    description:
      "Targeted campaigns designed to generate relevant enquiries and bookings.",
  },
  {
    id: "direct",
    label: "DIRECT BOOKINGS",
    x: 50,
    y: 93,
    description:
      "A stronger direct-booking journey that encourages guests to book with you.",
  },
];

export default function TheNexus() {
  const [activeNode, setActiveNode] = useState(null);
  const reduceMotion = useReducedMotion();

  const activeService =
    nodes.find((node) => node.id === activeNode) ?? null;

  return (
    <section
      id="the-nexus"
      className="overflow-hidden bg-[#0b0e14] px-4 py-9 text-[#f2efe9] sm:px-8 sm:py-11 lg:py-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
          className="text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#cbb071] sm:text-xs">
            The Nexus
          </p>

          <h2 className="mt-2 text-3xl font-normal tracking-[-0.035em] sm:text-4xl">
            Everything is{" "}
            <span className="font-serif italic text-[#cbb071]">
              connected.
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-xs leading-5 text-[#bcb9b3] sm:text-sm sm:leading-6">
            Distribution, revenue, marketing and reputation work together.
            Select a node to explore each service.
          </p>
        </motion.div>

        {/* Circular network */}
        <div className="mx-auto mt-5 w-full max-w-[470px] sm:mt-6 sm:max-w-[510px]">
          <div className="relative mx-auto aspect-square w-full">
            {/* Connecting lines */}
            <svg
              viewBox="0 0 100 100"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {nodes.map((node) => {
                const isActive = activeNode === node.id;

                return (
                  <motion.line
                    key={node.id}
                    x1="50"
                    y1="50"
                    x2={node.x}
                    y2={node.y}
                    stroke={
                      isActive
                        ? "#cbb071"
                        : "rgba(203,176,113,0.25)"
                    }
                    strokeWidth={isActive ? 0.65 : 0.3}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0.7,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.2,
                    }}
                  />
                );
              })}

              {/* Center ring */}
              <circle
                cx="50"
                cy="50"
                r="11.5"
                fill="rgba(203,176,113,0.04)"
                stroke="#cbb071"
                strokeWidth="0.25"
              />

              {/* Circular orbit */}
              <circle
                cx="50"
                cy="50"
                r="25"
                fill="none"
                stroke="rgba(203,176,113,0.13)"
                strokeWidth="0.2"
                strokeDasharray="1 1.8"
              />
            </svg>

            {/* Central property node */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-[23%] w-[23%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#cbb071]/80 bg-[#0b0e14] shadow-[0_0_28px_rgba(203,176,113,0.08)]">
              <span className="px-1 text-center text-[8px] font-semibold uppercase leading-relaxed tracking-[0.07em] text-[#cbb071] sm:text-[9px]">
                Your Property
              </span>
            </div>

            {/* Interactive service nodes */}
            {nodes.map((node) => {
              const isActive = activeNode === node.id;

              return (
                <motion.button
                  key={node.id}
                  type="button"
                  onClick={() =>
                    setActiveNode((current) =>
                      current === node.id ? null : node.id
                    )
                  }
                  aria-pressed={isActive}
                  aria-label={`View ${node.label} details`}
                  initial={false}
                  whileHover={
                    reduceMotion ? undefined : { scale: 1.04 }
                  }
                  whileTap={
                    reduceMotion ? undefined : { scale: 0.97 }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.2,
                  }}
                  className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-2 py-[7px] text-[6.5px] font-medium leading-none tracking-[0.015em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cbb071] sm:px-3 sm:py-2 sm:text-[8px] sm:tracking-[0.04em] ${
                    isActive
                      ? "border-[#cbb071] bg-[#242117] text-[#cbb071] shadow-[0_0_12px_rgba(203,176,113,0.2)]"
                      : "border-white/20 bg-[#0b0e14] text-[#f2efe9] hover:border-[#cbb071]/60"
                  }`}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    maxWidth: "45%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {node.label}
                </motion.button>
              );
            })}
          </div>

          {/* Selected service description */}
          {activeService && (
            <motion.div
              key={activeService.id}
              initial={reduceMotion ? false : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.2,
              }}
              aria-live="polite"
              className="mx-auto mt-1 min-h-[54px] max-w-md border-t border-white/[0.08] px-3 pt-3 text-center"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#cbb071]">
                {activeService.label}
              </p>

              <p className="mx-auto mt-1 max-w-sm text-xs leading-5 text-[#bcb9b3] sm:text-sm">
                {activeService.description}
              </p>
            </motion.div>
          )}
        </div>

        {/* Compact CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.35 }}
          className="mx-auto mt-5 max-w-3xl rounded-xl border border-[#8c7445]/45 bg-[radial-gradient(ellipse_at_top,rgba(203,176,113,0.07),transparent_75%)] px-4 py-5 text-center sm:mt-6 sm:flex sm:items-center sm:justify-between sm:gap-5 sm:px-6 sm:py-5 sm:text-left"
        >
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#cbb071] sm:text-[10px]">
              Dedicated Digital Manager
            </p>

            <h3 className="mt-1 text-lg font-normal leading-snug sm:text-xl">
              Your digital growth partner.
            </h3>

            <p className="mt-1 text-xs leading-5 text-[#bcb9b3]">
              One dedicated manager. Every channel working together.
            </p>
          </div>

          <Link
            href="https://wa.me/919560440478?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20services%20for%20my%20property.%20Could%20you%20please%20share%20more%20details%3F"
            className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#cbb071] px-5 text-[10px] font-semibold uppercase tracking-wide text-[#101116] transition-colors hover:bg-[#dfc58c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cbb071] sm:mt-0 sm:shrink-0"
          >
            Discuss your property
            <span aria-hidden="true">↗</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}