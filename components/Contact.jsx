
"use client";

import React, { useState } from "react";
import Link from "next/link";

const services = [
  "OTA Management & Distribution",
  "Revenue Management & Pricing Strategy",
  "Performance Marketing & Paid Advertising",
  "Social Media & Content Marketing",
  "Website Development & Direct Bookings",
  "Branding & Creative",
  "Reputation & Guest Experience",
  "Sales & Partnerships",
  "Not sure yet",
];

const challenges = [
  "Low occupancy",
  "Weak OTA visibility",
  "Pricing and revenue",
  "Too dependent on OTAs",
  "Direct bookings",
  "Digital marketing",
  "Guest reviews",
  "Website and conversions",
  "Other",
];

const propertyTypes = [
  "Hotel",
  "Resort",
  "Villa",
  "Homestay",
  "B&B",
  "Airbnb / Vacation Rental",
  "Other",
];

const inputClass =
  "h-[48px] w-full rounded-xl border border-white/25 bg-transparent px-4 text-sm text-[#f3f0e9] outline-none transition placeholder:text-white/35 focus:border-[#cbb071] sm:h-[54px]";

const labelClass =
  "mb-2 block text-[10px] font-medium uppercase tracking-[0.12em] text-[#a5a29d] sm:text-[11px]";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    property: "",
    type: "Hotel",
    city: "",
    rooms: "",
    challenge: "",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState([]);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const buildMessage = () => {
    return [
      "Hello OTA Nexus, I'd like to discuss growing my property.",
      "",
      `Name: ${form.name}`,
      `Business email / phone: ${form.contact}`,
      `Property name: ${form.property}`,
      `Property type: ${form.type}`,
      `City / destination: ${form.city || "Not provided"}`,
      `Rooms / units: ${form.rooms || "Not provided"}`,
      `Services interested in: ${
        selectedServices.join(", ") || "Not specified"
      }`,
      `Biggest challenge: ${form.challenge || "Not specified"}`,
      `Additional details: ${form.message || "None"}`,
    ].join("\n");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.contact.trim() ||
      !form.property.trim()
    ) {
      return;
    }

    const whatsappNumber = (
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
    ).replace(/\D/g, "");

    if (!whatsappNumber) {
      window.alert(
        "WhatsApp is not configured yet. Please email otanexus0@gmail.com."
      );
      return;
    }

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      buildMessage()
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleEmail = () => {
    window.location.href =
      "mailto:otanexus0@gmail.com?subject=" +
      encodeURIComponent("Property growth consultation");
  };

  return (
    <section
      id="contact"
      className="bg-[#10131b] px-5 py-16 text-[#f3f0e9] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="mb-10 sm:mb-12">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[#cbb071] sm:text-xs">
            Contact
          </p>

          <h2 className="max-w-[1050px] text-3xl font-normal leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            Tell us about your property.{" "}
            <span className="font-serif italic text-[#cbb071]">
              Let&apos;s explore what&apos;s possible.
            </span>
          </h2>

          <p className="mt-5 max-w-[620px] text-sm leading-7 text-[#d0cec9] sm:text-base sm:leading-8">
            Share a few details and we&apos;ll come back with relevant ideas
            for your property, not an irrelevant package.
          </p>
        </div>

        {/* Contact form */}
        <div className="rounded-[22px] border border-white/15 bg-[#191c25] p-5 sm:p-8 lg:p-10">
          <form onSubmit={handleSubmit}>
            {/* Basic details */}
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5">
              <label>
                <span className={labelClass}>Name *</span>
                <input
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className={inputClass}
                />
              </label>

              <label>
                <span className={labelClass}>
                  Business email or phone *
                </span>
                <input
                  required
                  autoComplete="email"
                  value={form.contact}
                  onChange={(e) => updateField("contact", e.target.value)}
                  className={inputClass}
                />
              </label>

              <label>
                <span className={labelClass}>Property name *</span>
                <input
                  required
                  value={form.property}
                  onChange={(e) => updateField("property", e.target.value)}
                  className={inputClass}
                />
              </label>

              <label>
                <span className={labelClass}>Property type</span>
                <select
                  value={form.type}
                  onChange={(e) => updateField("type", e.target.value)}
                  className={inputClass}
                >
                  {propertyTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-[#191c25]"
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span className={labelClass}>City or destination</span>
                <input
                  value={form.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  className={inputClass}
                />
              </label>

              <label>
                <span className={labelClass}>
                  Approx. rooms / units (if relevant)
                </span>
                <input
                  type="number"
                  min="1"
                  value={form.rooms}
                  onChange={(e) => updateField("rooms", e.target.value)}
                  className={inputClass}
                />
              </label>
            </div>

            {/* Services */}
            <fieldset className="mt-7">
              <legend className={labelClass}>
                Services you&apos;re interested in
              </legend>

              <div className="flex flex-wrap gap-2">
                {services.map((service) => {
                  const active = selectedServices.includes(service);

                  return (
                    <button
                      key={service}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleService(service)}
                      className={`rounded-full border px-4 py-3 text-left text-xs transition-colors sm:text-sm ${
                        active
                          ? "border-[#cbb071] bg-[#cbb071]/15 text-[#e3c783]"
                          : "border-white/30 text-[#f0ede7] hover:border-[#cbb071] hover:text-[#cbb071]"
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Challenge */}
            <label className="mt-7 block">
              <span className={labelClass}>
                Biggest challenge right now
              </span>
              <select
                value={form.challenge}
                onChange={(e) => updateField("challenge", e.target.value)}
                className={inputClass}
              >
                <option value="" className="bg-[#191c25]">
                  Select one (optional)
                </option>
                {challenges.map((challenge) => (
                  <option
                    key={challenge}
                    value={challenge}
                    className="bg-[#191c25]"
                  >
                    {challenge}
                  </option>
                ))}
              </select>
            </label>

            {/* Additional details */}
            <label className="mt-6 block">
              <span className={labelClass}>
                Anything else? (optional)
              </span>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                className={`${inputClass} h-auto min-h-[95px] resize-y py-3`}
              />
            </label>

            {/* Actions */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#cbb071] px-7 text-xs font-semibold uppercase tracking-[0.07em] text-[#101116] transition-colors hover:bg-[#dfc58c] sm:text-sm"
              >
                Send via WhatsApp
              </button>

              <button
                type="button"
                onClick={handleEmail}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#cbb071] px-7 text-xs font-medium uppercase tracking-[0.07em] text-[#f3f0e9] transition-colors hover:bg-[#cbb071]/10 sm:text-sm"
              >
                Chat with our team
              </button>
            </div>

            <p className="mt-5 text-xs leading-5 text-[#aaa7a1] sm:text-sm">
              Prefer email? Write to{" "}
              <a
                href="mailto:otanexus0@gmail.com"
                className="text-[#cbb071] hover:underline"
              >
                otanexus0@gmail.com
              </a>
              .
            </p>

            <p className="mt-4 max-w-[700px] text-xs leading-5 text-[#aaa7a1]">
              This website opens WhatsApp with your details pre-filled.
              Nothing is sent until you press Send in WhatsApp.
            </p>
          </form>
        </div>

        {/* Instagram banner */}
        <div className="mt-8 flex flex-col justify-between gap-5 rounded-[20px] border border-white/15 px-5 py-6 sm:flex-row sm:items-center sm:px-7 sm:py-7">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl">
              Follow our work on Instagram
            </h3>
            <p className="mt-2 text-sm text-[#d0cec9] sm:text-base">
              Hospitality marketing ideas and updates from OTA Nexus.
            </p>
          </div>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full border border-[#cbb071] px-6 text-xs font-medium uppercase tracking-[0.07em] transition-colors hover:bg-[#cbb071]/10 sm:text-sm"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="0.8" fill="currentColor" />
            </svg>
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
