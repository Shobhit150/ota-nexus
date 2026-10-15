
"use client";

import { motion, useReducedMotion } from "framer-motion";

const testimonials = [
  {
    category: "OTA MANAGEMENT",
    quote:
      "Our online presence needed a complete improvement. The team helped us strengthen our OTA listings, improve our property presentation, and create a more consistent digital presence. We now have a clearer strategy for reaching potential guests.",
    name: "Aradhana Lana",
    company: "On the House · Boutique Hotel",
  },
  {
    category: "REVENUE STRATEGY",
    quote:
      "What impressed us was their understanding of hospitality. From our pricing strategy to how we present our rooms and experiences online, every detail received attention. Their approach helped us understand how to position our resort more effectively.",
    name: "Anya Jain",
    company: "KahayaHomes · Vacation Rental Management",
  },
  {
    category: "DISTRIBUTION",
    quote:
      "Managing multiple booking platforms can be challenging. Having a structured approach to listings, availability, promotions, and online distribution has made our digital operations more organised and easier to manage.",
    name: "Vikram Sikri, Operations Manager",
    company: "Om Stay · Business Hotel",
  },
  {
    category: "DIGITAL MARKETING",
    quote:
      "We wanted to improve our visibility and make our property more attractive to online travellers. The team helped us improve our content, strengthen our digital presentation, and identify opportunities to improve the guest booking journey.",
    name: "John Smith",
    company: "Safari Stays · Independent Hotel",
  },
  {
    category: "ONLINE REPUTATION",
    quote:
      "Guest feedback is an important part of our business. Their focus on online reputation helped us look more closely at guest reviews, understand recurring feedback, and communicate more professionally with our audience.",
    name: "Aarushi Aggarwal",
    company: "Kukus Nest · Airbnb",
  },
  {
    category: "BRAND CONSISTENCY",
    quote:
      "We needed a more consistent strategy across our digital channels. The team helped us bring our brand presentation, online distribution, and marketing activities together under a clearer growth plan.",
    name: "Saurabh Chauhan, Director",
    company: "White Tiger Resort · Resort",
  },
];

const reportingItems = [
  "Enquiries and bookings by source",
  "OTA and channel performance",
  "Occupancy, ADR and RevPAR trends",
  "Ad spend, cost per lead, cost per booking and return on ad spend",
  "Review and guest-feedback themes",
];

const requirements = [
  "Access to your OTA extranets, ad accounts and analytics where relevant",
  "Booking and occupancy data you're comfortable sharing",
  "A website or booking engine that supports conversion tracking",
];

export default function ReportingTestimonials() {
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 14 } };

  return (
    <section
      id="reporting"
      className="bg-[#0b0e14] px-4 py-14 text-[#f3f0e9] sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Reporting */}
        <motion.div
          {...reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#cbb071]">
            Reporting & Measurement
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-normal leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            You should always know{" "}
            <span className="font-serif italic text-[#cbb071]">
              what's happening.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#c7c3bd] sm:text-base sm:leading-7">
            We report in plain language, with recommended next steps.
            The exact format and frequency are agreed with you.
          </p>

          <div className="mt-7 grid gap-7 md:grid-cols-2 md:gap-10 lg:gap-14">
            <div className="min-w-0">
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#cbb071]">
                What we can report on
              </h3>

              <ul className="space-y-2">
                {reportingItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-[#d0ccc6]"
                  >
                    <span
                      className="mt-0.5 text-[#cbb071]"
                      aria-hidden="true"
                    >
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#cbb071]">
                What we need from you
              </h3>

              <ul className="space-y-2">
                {requirements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-[#d0ccc6]"
                  >
                    <span
                      className="mt-0.5 text-[#cbb071]"
                      aria-hidden="true"
                    >
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 max-w-3xl border-l border-[#cbb071] pl-4 text-xs leading-6 text-[#c7c3bd] sm:text-sm">
            Some figures can only be reported when the underlying
            tracking and data exist. If something can't be measured
            reliably, we'll tell you rather than guess. Ask us during
            your consultation about relevant examples for your type
            of property.
          </div>
        </motion.div>

        {/* Testimonials */}
        <div
          id="testimonials"
          className="mt-20 scroll-mt-24 sm:mt-24 lg:mt-28"
        >
          <motion.div
            {...reveal}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduceMotion ? 0 : 0.4 }}
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#cbb071]">
              What Our Clients Say
            </p>

            <h2 className="mt-3 max-w-4xl text-3xl font-normal leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Trusted by properties.{" "}
              <span className="font-serif italic text-[#cbb071]">
                Focused on growth.
              </span>
            </h2>
          </motion.div>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.category}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 14 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  delay: reduceMotion ? 0 : (index % 3) * 0.05,
                }}
                className={`flex min-w-0 flex-col rounded-xl border bg-[#15171e] p-4 transition-colors duration-300 hover:border-[#cbb071]/60 sm:p-5 ${
                  index === 1
                    ? "border-[#8c7547]/70"
                    : "border-white/10"
                }`}
              >
                <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.16em] text-[#cbb071]">
                  {testimonial.category}
                </p>

                <blockquote className="flex-1 font-serif text-sm leading-6 text-[#e8e3da]">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-5 border-t border-white/10 pt-3">
                  <p className="text-sm font-semibold text-[#f3f0e9]">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#a9a49c]">
                    {testimonial.company}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
