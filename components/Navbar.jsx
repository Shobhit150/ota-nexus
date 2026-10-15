
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "How We Work", href: "/#how-we-work" },
  { name: "Reporting", href: "/#reporting" },
  { name: "Case Studies", href: "/#case-studies" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header className="sticky top-0 z-50 w-full border-b border-transparent">
      <nav className="mx-auto flex h-[84px] max-w-[1640px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-[20px] font-bold tracking-[0.23em] text-[#f3f0e9] sm:text-[22px]"
          aria-label="OTA Nexus Home"
          onClick={() => setMenuOpen(false)}
        >
          OTA <span className="text-[#c8a968]">NEXUS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-[15px] font-normal text-[#d0ccc6] transition-colors duration-200 hover:text-[#c8a968] 2xl:text-[17px]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/#contact"
          className="hidden shrink-0 items-center justify-center rounded-full bg-[#cbb071] px-4 py-2 text-center text-[12px] font-medium tracking-[0.07em] !text-black transition-colors duration-300 hover:bg-[#dfc58c] md:flex 2xl:px-10 2xl:text-[17px]"
        >
          LET&apos;S GROW YOUR PROPERTY
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-lg border border-white/10 xl:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block h-[2px] w-6 bg-[#cbb071]"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="block h-[2px] w-6 bg-[#cbb071]"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block h-[2px] w-6 bg-[#cbb071]"
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 xl:hidden"
          >
            <div className="mx-auto flex max-w-[1640px] flex-col px-5 py-4 sm:px-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-white/[0.06] py-3.5 text-[15px] text-[#d0ccc6] transition-colors hover:text-[#cbb071]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex min-h-14 items-center justify-center rounded-full bg-[#cbb071] px-5 text-center text-sm font-medium tracking-wider !text-black transition-colors hover:bg-[#dfc58c]"
              >
                LET&apos;S GROW YOUR PROPERTY
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
