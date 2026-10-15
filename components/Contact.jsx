
"use client";

import { useState } from "react";

const services = [
  "OTA Management",
  "Revenue & Pricing",
  "Digital Marketing",
  "Social Media",
  "Website & Direct Bookings",
  "Branding",
  "Guest Reviews",
  "Sales & Partnerships",
  "Not sure yet",
];

const challenges = [
  "Low occupancy",
  "Weak OTA visibility",
  "Pricing and revenue",
  "Too dependent on OTAs",
  "More direct bookings",
  "Digital marketing",
  "Guest reviews",
  "Website conversions",
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
  "w-full rounded-xl border border-white/15 bg-[#11141c] px-3.5 py-3 text-sm text-[#f3f0e9] outline-none transition placeholder:text-white/35 focus:border-[#cbb071]";

const labelClass =
  "mb-1.5 block text-xs font-medium text-[#d5d1c8]";

const emailAddress = "otanexus0@gmail.com";

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
  const [showDetails, setShowDetails] = useState(false);

  const updateField = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const toggleService = (service) => {
    setSelectedServices((previous) =>
      previous.includes(service)
        ? previous.filter((item) => item !== service)
        : [...previous, service]
    );
  };

  const buildMessage = () =>
    [
      "Hello OTA Nexus, I'd like to discuss growing my property.",
      "",
      `Name: ${form.name}`,
      `Email / Phone: ${form.contact}`,
      `Property: ${form.property}`,
      `Property type: ${form.type}`,
      `City / Destination: ${form.city || "Not provided"}`,
      `Rooms / Units: ${form.rooms || "Not provided"}`,
      `Services: ${selectedServices.join(", ") || "Not specified"}`,
      `Main challenge: ${form.challenge || "Not specified"}`,
      `Additional details: ${form.message || "None"}`,
    ].join("\n");

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = buildMessage();
    const whatsappNumber = (
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
    ).replace(/\D/g, "");

    if (whatsappNumber) {
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    const subject = encodeURIComponent("Property Growth Consultation");
    const body = encodeURIComponent(message);

    window.location.href =
      `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Property Growth Consultation");
    const body = encodeURIComponent(buildMessage());

    window.location.href =
      `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="bg-[#10131b] px-4 py-14 text-[#f3f0e9] sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#cbb071] sm:text-xs">
            Contact OTA Nexus
          </p>

          <h2 className="text-3xl font-normal leading-tight tracking-tight sm:text-4xl lg:text-[46px]">
            Tell us about your property.{" "}
            <span className="font-serif italic text-[#cbb071]">
              Let&apos;s grow it.
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#aaaeb8] sm:text-base">
            A few details are enough to start a conversation about your
            property&apos;s growth.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_270px] lg:items-start">
          <div className="min-w-0 rounded-2xl border border-white/10 bg-[#191c25] p-4 sm:p-6 lg:p-7">
            <form onSubmit={handleSubmit}>
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-base font-medium sm:text-lg">
                  Start a conversation
                </h3>
                <span className="text-[11px] text-[#969aa5]">
                  * Required
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label>
                  <span className={labelClass}>Your name *</span>
                  <input
                    required
                    autoComplete="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className={inputClass}
                  />
                </label>

                <label>
                  <span className={labelClass}>Email or phone *</span>
                  <input
                    required
                    autoComplete="email"
                    type="text"
                    placeholder="How can we reach you?"
                    value={form.contact}
                    onChange={(e) => updateField("contact", e.target.value)}
                    className={inputClass}
                  />
                </label>

                <label>
                  <span className={labelClass}>Property name *</span>
                  <input
                    required
                    autoComplete="organization"
                    placeholder="Your hotel or property"
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
              </div>

              <button
                type="button"
                onClick={() => setShowDetails((previous) => !previous)}
                aria-expanded={showDetails}
                className="mt-5 flex w-full items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-left transition hover:border-[#cbb071]/50"
              >
                <span>
                  <span className="block text-sm font-medium">
                    Add more details
                  </span>
                  <span className="mt-0.5 block text-xs text-[#969aa5]">
                    Location, services and your goals (optional)
                  </span>
                </span>

                <span className="text-xl text-[#cbb071]" aria-hidden="true">
                  {showDetails ? "−" : "+"}
                </span>
              </button>

              {showDetails && (
                <div className="mt-5 space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label>
                      <span className={labelClass}>City / destination</span>
                      <input
                        placeholder="e.g. Jaipur"
                        value={form.city}
                        onChange={(e) => updateField("city", e.target.value)}
                        className={inputClass}
                      />
                    </label>

                    <label>
                      <span className={labelClass}>Rooms / units</span>
                      <input
                        type="number"
                        min="1"
                        placeholder="e.g. 24"
                        value={form.rooms}
                        onChange={(e) => updateField("rooms", e.target.value)}
                        className={inputClass}
                      />
                    </label>
                  </div>

                  <fieldset>
                    <legend className={`${labelClass} mb-2`}>
                      What do you need help with?
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
                            className={`rounded-full border px-3 py-2 text-xs transition ${
                              active
                                ? "border-[#cbb071] bg-[#cbb071]/10 text-[#e5cc91]"
                                : "border-white/15 text-[#c5c7ce] hover:border-[#cbb071]/60"
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <label className="block">
                    <span className={labelClass}>Biggest challenge</span>
                    <select
                      value={form.challenge}
                      onChange={(e) =>
                        updateField("challenge", e.target.value)
                      }
                      className={inputClass}
                    >
                      <option value="" className="bg-[#191c25]">
                        Choose a challenge (optional)
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

                  <label className="block">
                    <span className={labelClass}>Anything else?</span>
                    <textarea
                      rows={3}
                      placeholder="Share your goals or questions..."
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className={`${inputClass} resize-y`}
                    />
                  </label>
                </div>
              )}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-[#cbb071] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#10131b] transition hover:bg-[#dfc58c] sm:flex-none sm:px-7"
                >
                  Continue on WhatsApp
                  <span className="ml-2" aria-hidden="true">
                    ↗
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleEmail}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-xs font-medium uppercase tracking-wider transition hover:border-[#cbb071] hover:text-[#e5cc91]"
                >
                  Email instead
                </button>
              </div>

              <p className="mt-4 text-xs leading-5 text-[#858a96]">
                Your details are added to a message draft. Nothing is sent
                until you send it from WhatsApp or your email app.
              </p>
            </form>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-[#191c25] p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#cbb071]">
              Get in touch
            </p>

            <h3 className="mt-3 text-xl leading-snug">
              Let&apos;s find the right next step.
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#a9adb7]">
              Tell us where your property is today and where you want it to go.
            </p>

            <div className="my-5 h-px bg-white/10" />

            <p className="text-xs text-[#969aa5]">Email us directly</p>
            <a
              href={`mailto:${emailAddress}`}
              className="mt-1 inline-block break-all text-sm text-[#e1c786] hover:underline"
            >
              {emailAddress}
            </a>

            <div className="mt-5 rounded-xl border border-[#cbb071]/20 bg-[#cbb071]/5 p-4">
              <p className="text-sm font-medium text-[#e5cc91]">
                No long brief needed
              </p>
              <p className="mt-1 text-xs leading-5 text-[#a9adb7]">
                Start with the basics. You can share more when we connect.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
