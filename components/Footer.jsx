
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const exploreLinks = [
  { name: "Services", href: "#services" },
  { name: "Performance Marketing", href: "#performance-marketing" },
  { name: "How We Work", href: "#how-we-work" },
  { name: "Reporting", href: "#reporting" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "FAQs", href: "#faqs" },
];

const ArrowUpRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0c0f14] text-[#d0ccc6]">
      <div className="mx-auto max-w-6xl px-5 pb-5 pt-10 sm:px-8 sm:pt-12">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="OTA Nexus home"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-[#f3f0e9] transition hover:opacity-80"
            >
              OTA <span className="text-[#c8a968]">NEXUS</span>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-[#92949c]">
              Your hospitality growth partner — from distribution and revenue
              strategy to digital marketing.
            </p>

            <a
              href="https://wa.me/919560440478?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20services%20for%20my%20property.%20Could%20you%20please%20share%20more%20details%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-[#c8a968] transition hover:text-[#e3ca91]"
            >
              Discuss your property
              <ArrowUpRight />
            </a>
          </div>

          {/* Explore */}
          <nav aria-label="Footer navigation">
            <h2 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8a968]">
              Explore
            </h2>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a9a8a5] transition-colors hover:text-[#e3ca91]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8a968]">
              Get in touch
            </h2>

            <div className="space-y-3">
              <a
                href="https://wa.me/919560440478?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20services%20for%20my%20property.%20Could%20you%20please%20share%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="group flex items-start gap-3 text-sm text-[#a9a8a5] transition hover:text-[#e3ca91]"
            >
                <FaWhatsapp
                size={18}
                className="mt-0.5 shrink-0 text-[#e3ca91] transition-transform group-hover:scale-110"
                />

                <span>
                <span className="block text-[#e0ddd6]">WhatsApp</span>
                <span className="mt-0.5 block text-xs text-[#858892]">
                    +91 95604 40478
                </span>
                </span>
            </a>

              <a
                href="mailto:otanexus0@gmail.com"
                className="flex items-center gap-3 break-all text-sm text-[#a9a8a5] transition hover:text-[#e3ca91]"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0 text-[#c8a968]"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                otanexus0@gmail.com
              </a>

              <a
                href="https://www.instagram.com/ota_nexus?mdxt=MnVucGUwMHcweTdq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-[#a9a8a5] transition hover:text-[#e3ca91]"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0 text-[#c8a968]"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" />
                </svg>
                Instagram
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-9 flex flex-col gap-3 border-t border-white/[0.08] pt-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#858892]">
            © {new Date().getFullYear()} OTA Nexus. All rights reserved.
          </p>

          <a
            href="#top"
            className="inline-flex w-fit items-center gap-2 text-xs text-[#a9a8a5] transition hover:text-[#c8a968]"
          >
            Back to top
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
