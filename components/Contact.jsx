"use client";

const emailAddress = "otanexus0@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#10131b] px-4 py-14 text-[#f3f0e9] sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
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
            Have a question or looking to grow your property? Connect with our
            team directly and let&apos;s discuss how we can help.
          </p>
        </div>

        {/* Contact content */}
        <div className="grid gap-5 lg:grid-cols-[1fr_270px] lg:items-start">
          {/* Main contact card */}
          <div className="min-w-0 rounded-2xl border border-white/10 bg-[#191c25] p-5 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#cbb071]">
              Start a conversation
            </p>

            <h3 className="mt-3 text-2xl font-normal sm:text-3xl">
              Let&apos;s talk about your property.
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-6 text-[#a9adb7] sm:text-base">
              Whether you need better OTA visibility, more bookings, improved
              revenue, or a stronger digital presence, we&apos;re here to help.
              Reach out directly to get started.
            </p>

            {/* Direct WhatsApp link */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/919560440478"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Continue to WhatsApp chat"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#cbb071] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#10131b] transition hover:bg-[#dfc58c] sm:px-7"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .15 5.34.15 11.92c0 2.1.55 4.15 1.6 5.96L.05 24l6.27-1.64a11.9 11.9 0 0 0 5.75 1.47h.01c6.58 0 11.92-5.35 11.92-11.93 0-3.18-1.24-6.17-3.48-8.42ZM12.08 21.8a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.72.97.99-3.63-.23-.37a9.83 9.83 0 0 1-1.51-5.25c0-5.46 4.44-9.9 9.9-9.9a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.9 7c-.01 5.45-4.45 9.88-9.92 9.88Zm5.43-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.5 1.69.64.71.22 1.36.19 1.87.11.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                </svg>

                Continue on WhatsApp
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 py-3 text-xs font-medium uppercase tracking-wider transition hover:border-[#cbb071] hover:text-[#e5cc91]"
              >
                Email instead
              </a>
            </div>
          </div>

          {/* Contact details sidebar */}
          <aside className="rounded-2xl border border-white/10 bg-[#191c25] p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#cbb071]">
              Get in touch
            </p>

            <h3 className="mt-3 text-xl leading-snug">
              Let&apos;s find the right next step.
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#a9adb7]">
              Tell us what you want to achieve. We&apos;ll discuss the right
              approach for your property.
            </p>

            <div className="my-5 h-px bg-white/10" />

            <p className="text-xs text-[#969aa5]">WhatsApp</p>

            <a
              href="https://wa.me/919560440478"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm text-[#e1c786] transition hover:underline"
            >
              +91 95604 40478
            </a>

            <div className="my-5 h-px bg-white/10" />

            <p className="text-xs text-[#969aa5]">Email us directly</p>

            <a
              href={`mailto:${emailAddress}`}
              className="mt-1 inline-block break-all text-sm text-[#e1c786] transition hover:underline"
            >
              {emailAddress}
            </a>

          </aside>
        </div>
      </div>
    </section>
  );
}