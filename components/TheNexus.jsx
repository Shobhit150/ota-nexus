"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const nodes = [
  {
    id: "ota",
    label: "OTA MANAGEMENT",
    x: 50,
    y: 7,
    description:
      "Listings, inventory, pricing and promotions handled as one daily discipline.",
  },
  {
    id: "analytics",
    label: "ANALYTICS",
    x: 30,
    y: 17,
    description:
      "Clear performance insights that help identify opportunities and improve decisions.",
  },
  {
    id: "revenue",
    label: "REVENUE",
    x: 70,
    y: 17,
    description:
      "Smarter pricing and revenue strategies built around demand, seasons and competitors.",
  },
  {
    id: "distribution",
    label: "DISTRIBUTION",
    x: 18,
    y: 37,
    description:
      "Connected booking channels and accurate inventory across online travel agencies.",
  },
  {
    id: "content",
    label: "CONTENT",
    x: 82,
    y: 37,
    description:
      "Compelling property descriptions and visuals that help turn browsing into bookings.",
  },
  {
    id: "seo",
    label: "SEO",
    x: 18,
    y: 62,
    description:
      "Improve your property's visibility in organic search and reach more potential guests.",
  },
  {
    id: "reviews",
    label: "REVIEWS",
    x: 82,
    y: 62,
    description:
      "Monitor guest feedback, strengthen your reputation and improve guest confidence.",
  },
  {
    id: "social",
    label: "SOCIAL MEDIA",
    x: 30,
    y: 83,
    description:
      "Consistent social content that showcases your property and destination.",
  },
  {
    id: "marketing",
    label: "DIGITAL MARKETING",
    x: 70,
    y: 83,
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

const TheNexus = () => {
  const [activeNode, setActiveNode] = useState("ota");

  const activeService = nodes.find((node) => node.id === activeNode);

  return (
    <section
      id="the-nexus"
      className="overflow-hidden bg-[#0b0e14] px-5 py-20 text-[#f2efe9] sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#cbb071] sm:text-xs">
            The Nexus
          </p>

          <h2 className="mt-5 text-[clamp(2.2rem,4.5vw,3.5rem)] leading-tight tracking-[-0.045em]">
            Everything is{" "}
            <span className="font-serif italic text-[#cbb071]">
              connected.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-sm leading-7 text-[#d0ccc6] sm:text-lg sm:leading-8">
            Property → OTAs → Guests → Revenue → Reputation → Growth. Tap a
            node to see how it links to your property.
          </p>
        </motion.div>

        {/* Interactive network */}
        <div className="mx-auto mt-12 w-full max-w-[700px] sm:mt-16">
          <div className="relative mx-auto aspect-[1/1] w-full max-w-[620px]">
            {/* Connection lines */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full overflow-visible"
              aria-hidden="true"
            >
              {nodes.map((node) => (
                <motion.line
                  key={node.id}
                  x1="50"
                  y1="50"
                  x2={node.x}
                  y2={node.y}
                  stroke={
                    activeNode === node.id
                      ? "#cbb071"
                      : "rgba(203,176,113,0.25)"
                  }
                  strokeWidth={activeNode === node.id ? 0.65 : 0.3}
                  initial={false}
                  animate={{
                    opacity: activeNode === node.id ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.25 }}
                />
              ))}
              <circle
                cx="50"
                cy="50"
                r="12.3"
                fill="rgba(203,176,113,0.035)"
                stroke="#cbb071"
                strokeWidth="0.22"
              />
            </svg>

            {/* Center node */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-[24.6%] w-[24.6%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#cbb071] bg-[radial-gradient(circle,rgba(203,176,113,0.10),rgba(11,14,20,0.96))] shadow-[0_0_55px_rgba(203,176,113,0.08)]">
              <span className="text-center text-[8px] font-medium uppercase tracking-[0.12em] text-[#cbb071] sm:text-[10px]">
                Your Property
              </span>
            </div>

            {/* Clickable nodes */}
            {nodes.map((node) => {
              const isActive = activeNode === node.id;

              return (
                <motion.button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveNode(node.id)}
                  aria-pressed={isActive}
                  aria-label={`View ${node.label} details`}
                  animate={{
                    borderColor: isActive
                      ? "#cbb071"
                      : "rgba(255,255,255,0.15)",
                    backgroundColor: isActive
                      ? "rgba(203,176,113,0.10)"
                      : "rgba(11,14,20,0.95)",
                  }}
                  whileHover={{
                    borderColor: "#cbb071",
                    scale: 1.04,
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-2.5 py-2 text-[7px] font-medium tracking-[0.035em] text-[#f2efe9] sm:px-3 sm:py-2.5 sm:text-[9px] sm:tracking-[0.06em]"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                  }}
                >
                  {node.label}
                </motion.button>
              );
            })}
          </div>

          {/* Selected service description */}
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            aria-live="polite"
            className="mx-auto mt-5 min-h-[68px] max-w-[700px] px-3 text-center"
          >
            <p className="font-serif text-lg leading-7 text-[#e9e3d8] sm:text-xl">
              {activeService.description}
            </p>
          </motion.div>
        </div>

        {/* Digital manager CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mt-16 max-w-[900px] rounded-[24px] border border-[#8c7445]/70 bg-[radial-gradient(ellipse_at_top,rgba(203,176,113,0.10),transparent_65%)] px-5 py-10 text-center sm:mt-20 sm:px-10 sm:py-12 lg:px-14"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.23em] text-[#cbb071] sm:text-xs">
            Dedicated Digital Manager
          </p>

          <h3 className="mx-auto mt-5 max-w-[740px] text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.16] tracking-[-0.04em]">
            Don’t just hire an agency. Hire your property’s{" "}
            <span className="font-serif italic text-[#cbb071]">
              digital manager.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-[590px] text-sm leading-7 text-[#d0ccc6] sm:text-base sm:leading-7">
            One personal account manager who oversees your revenue,
            distribution, OTAs, reviews and content, so everything stays
            connected and you stay focused on your guests.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#cbb071] px-7 text-xs font-semibold uppercase tracking-[0.06em] text-[#101116] transition-colors hover:bg-[#dfc58c] sm:text-sm"
            >
              Hire My Digital Manager
            </Link>

            <Link
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#cbb071] px-7 text-xs font-medium uppercase tracking-[0.06em] text-[#f2efe9] transition-colors hover:bg-[#cbb071]/10 sm:text-sm"
            >
              Book a Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TheNexus;
