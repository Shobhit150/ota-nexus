"use client";

import React from "react";
import Link from "next/link";

const exploreLinks = [
  { name: "Services", href: "#services" },
  { name: "Performance Marketing", href: "#performance-marketing" },
  { name: "How We Work", href: "#how-we-work" },
  { name: "Reporting", href: "#reporting" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "FAQs", href: "#faqs" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c0f14] text-[#d0ccc6]">
      <div className="mx-auto max-w-[1640px] px-6 pb-8 pt-10 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr] lg:gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-[17px] font-bold tracking-[0.23em] text-[#f3f0e9]"
            >
              OTA <span className="text-[#c8a968]">NEXUS</span>
            </Link>

            <p className="mt-4 max-w-[300px] text-[15px] leading-7 text-[#aaa8a3]">
              Your hospitality growth partner — from distribution to digital
              marketing.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-[#c8a968]">
              Explore
            </h2>

            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] transition-colors duration-200 hover:text-[#c8a968]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-[#c8a968]">
              Contact
            </h2>

            <div className="space-y-3 text-[15px]">
              <a
                href="https://wa.me/919560440478"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-[#c8a968]"
              >
                WhatsApp +91 95604 40478
              </a>

              <a
                href="mailto:otanexus0@gmail.com"
                className="block transition-colors hover:text-[#c8a968]"
              >
                otanexus0@gmail.com
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[#c8a968]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
                </svg>
                Follow us on Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/[0.06] pt-5">
          <p className="text-sm text-[#aaa8a3]">
            © {new Date().getFullYear()} OTA Nexus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}