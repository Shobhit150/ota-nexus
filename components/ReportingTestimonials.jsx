"use client";

import React from "react";
import { motion } from "framer-motion";

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

const ReportingTestimonials = () => {
  return (
    <section
      id="reporting"
      className="bg-[#0b0e14] px-5 py-20 text-[#f3f0e9] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Reporting */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.23em] text-[#cbb071] sm:text-xs">
            Reporting & Measurement
          </p>

          <h2 className="max-w-4xl text-3xl font-normal leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            You should always know{" "}
            <span className="font-serif italic text-[#cbb071]">
              what's happening.
            </span>
          </h2>

          <p className="mt-4 max-w-[540px] text-sm leading-7 text-[#c7c3bd] sm:text-base">
            We report in plain language, with recommended next steps. The
            exact format and frequency are agreed with you.
          </p>

          <div className="mt-8 grid gap-9 md:grid-cols-2 md:gap-14">
            <div>
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#cbb071]">
                What we can report on
              </h3>

              <ul className="space-y-2">
                {reportingItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-[#d0ccc6]"
                  >
                    <span className="text-[#cbb071]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#cbb071]">
                What we need from you
              </h3>

              <ul className="space-y-2">
                {requirements.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-[#d0ccc6]"
                  >
                    <span className="text-[#cbb071]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-7 max-w-[650px] border-l border-[#cbb071] pl-4 text-xs leading-6 text-[#c7c3bd] sm:text-sm">
            Some figures can only be reported when the underlying tracking
            and data exist. If something can't be measured reliably, we'll
            tell you rather than guess. Ask us during your consultation
            about relevant examples for your type of property.
          </div>
        </motion.div>

        {/* Testimonials */}
        <div
          id="testimonials"
          className="mt-24 scroll-mt-28 sm:mt-32 lg:mt-40"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.23em] text-[#cbb071] sm:text-xs">
              What Our Clients Say
            </p>

            <h2 className="text-3xl font-normal leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              Trusted by properties.{" "}
              <span className="font-serif italic text-[#cbb071]">
                Focused on growth.
              </span>
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.category}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.08,
                }}
                className={`flex h-full flex-col rounded-xl border bg-[#15171e] p-5 transition-colors duration-300 hover:border-[#cbb071]/60 sm:p-6 ${
                  index === 1
                    ? "border-[#8c7547]"
                    : "border-white/10"
                }`}
              >
                <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.18em] text-[#cbb071]">
                  {testimonial.category}
                </p>

                <blockquote className="flex-1 font-serif text-sm leading-7 text-[#e8e3da]">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-xs font-semibold text-[#f3f0e9]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-[11px] leading-5 text-[#a9a49c]">
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
};

export default ReportingTestimonials;