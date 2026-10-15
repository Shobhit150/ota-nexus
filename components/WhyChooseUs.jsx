"use client";

import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    title: "Built around hospitality",
    description:
      "We understand how properties earn, from rooms and rates to guest reviews, so advice fits how you actually run your business.",
  },
  {
    title: "One team, every channel",
    description:
      "OTAs, pricing, advertising, content and your website work best together, so we keep them connected.",
  },
  {
    title: "Plain-English reporting",
    description:
      "Clear updates on what is working, what isn’t and what we suggest next.",
  },
  {
    title: "Honest about results",
    description:
      "We don’t promise guaranteed outcomes. We set sensible goals and measure against them.",
  },
];

const platforms = [
  { name: "Expedia", style: "font-semibold tracking-tight" },
  { name: "Hotels.com", style: "font-medium tracking-tight" },
  { name: "Trip.com", style: "font-extrabold tracking-tight" },
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
      <div className="mx-auto max-w-[1640px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* Main statistic */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10 lg:gap-14"
        >
          <h2 className="font-serif text-[100px] font-normal leading-none tracking-[-0.06em] text-[#cbb071] sm:text-[120px] lg:text-[150px]">
            50+
          </h2>

          <p className="max-w-[560px] text-xl leading-relaxed tracking-tight text-[#eeeae3] sm:text-2xl lg:text-[30px] lg:leading-[1.65]">
            Partnering with 50+ hotels to support hospitality growth.
          </p>
        </motion.div>

        {/* Four value propositions */}
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-x-9">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="mb-2 text-lg font-medium tracking-tight text-[#cbb071] sm:text-xl">
                {value.title}
              </h3>

              <p className="max-w-[360px] text-base leading-7 text-[#c6c3bd] sm:text-[17px] sm:leading-8">
                {value.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10 lg:mt-20" />

        {/* Booking platforms */}
        <div className="pt-10 text-center">
          <p className="mb-7 text-[11px] font-medium uppercase tracking-[0.18em] text-[#a7a39b] sm:text-sm sm:tracking-[0.2em]">
            Booking and travel platforms we help properties grow on
          </p>

          {/* Scrolling logo track */}
          <div className="relative overflow-hidden">
            {/* Side fade effects */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0c0f14] to-transparent sm:w-14" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0c0f14] to-transparent sm:w-14" />

            <motion.div
              className="flex w-max gap-4 py-1 sm:gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 28,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...platforms, ...platforms].map((platform, index) => (
                <div
                  key={`${platform.name}-${index}`}
                  className="flex h-[66px] w-[180px] shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#f3eee5] px-5 text-[#565656] sm:h-[74px] sm:w-[215px]"
                >
                  {platform.name === "Expedia" && (
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#dedbd4] text-lg font-bold">
                      ↗
                    </span>
                  )}

                  {platform.name === "Hotels.com" && (
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#d9d6cf] text-sm">
                      ▣
                    </span>
                  )}

                  {platform.name === "Tripadvisor" && (
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d9d6cf] text-sm">
                      ◎
                    </span>
                  )}

                  <span
                    className={`whitespace-nowrap text-[21px] sm:text-[25px] ${platform.style}`}
                  >
                    {platform.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <p className="mt-5 text-xs text-[#99958e] sm:text-sm">
            Logos are trademarks of their respective owners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;