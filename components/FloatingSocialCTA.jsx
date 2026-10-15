"use client";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function FloatingSocialCTA() {
  return (
    <div className="fixed bottom-6 right-5 z-[100] flex flex-col gap-3 sm:bottom-8 sm:right-8">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919560440478?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20services%20for%20my%20property.%20Could%20you%20please%20share%20more%20details%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#cbb071]/70 bg-[#0b0e14] text-[#cbb071] transition-all duration-300 hover:rotate-[-8deg] hover:bg-[#cbb071] hover:text-[#0b0e14] hover:shadow-[0_0_16px_rgba(203,176,113,0.18)] active:scale-95 sm:h-13 sm:w-13"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/ota_nexus?mdxt=MnVucGUwMHcweTdq"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#cbb071]/70 bg-[#0b0e14] text-[#cbb071] transition-all duration-300 hover:rotate-[8deg] hover:bg-[#cbb071] hover:text-[#0b0e14] hover:shadow-[0_0_16px_rgba(203,176,113,0.18)] active:scale-95 sm:h-13 sm:w-13"
      >
        <FaInstagram size={21} />
      </a>
    </div>
  );
}