"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const propertyTypes = [
    "Hotels",
    "Resorts",
    "Villas",
    "Homestays",
    "B&Bs",
    "Airbnb & vacation rentals",
];

const Hero = () => {
    return (
        <section className="relative isolate flex min-h-[calc(100svh-84px)] items-center justify-center overflow-hidden">

            {/* Content */}
            <div className="mx-auto flex w-full max-w-[1400px] justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex w-full max-w-[820px] flex-col items-start text-left"
                >
                    {/* Eyebrow */}
                    <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-[#cbb071] sm:text-sm sm:tracking-[0.24em]">
                        OTA Nexus · Hospitality Growth Partner
                    </p>

                    {/* Heading */}
                    <h1 className="text-[clamp(2.65rem,5.4vw,5.8rem)] font-normal leading-[1.04] tracking-[-0.055em] text-[#f5f2eb]">
                        More visibility. More bookings.{" "}
                        <span className="font-serif italic text-[#cbb071]">
                            Better-performing properties.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-[790px] text-base leading-8 text-[#d0cec9] sm:text-lg sm:leading-10">
                        From OTA management and revenue optimisation to performance
                        marketing and direct bookings, we help hospitality businesses
                        grow with a strategy built around their property.
                    </p>

                    {/* CTA buttons */}
                    <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
                        <Link
                            href="#contact"
                            className="inline-flex min-h-[60px] items-center justify-center rounded-full bg-[#cbb071] px-8 text-center text-xs font-semibold uppercase tracking-[0.07em] text-[#101116] transition-all duration-300 hover:bg-[#dec58d] sm:px-9 sm:text-sm"
                        >
                            Let's Grow Your Property
                        </Link>

                        <Link
                            href="#services"
                            className="inline-flex min-h-[60px] items-center justify-center rounded-full border border-[#cbb071] px-8 text-center text-xs font-medium uppercase tracking-[0.07em] text-[#f5f2eb] transition-all duration-300 hover:bg-[#cbb071]/10 sm:px-9 sm:text-sm"
                        >
                            Explore Our Services
                        </Link>
                    </div>

                    {/* Supporting statement */}
                    <div className="mt-9 flex items-center justify-center gap-3 text-sm text-[#e4e0d8] sm:text-base">
                        <span className="h-px w-10 shrink-0 bg-[#cbb071]" />
                        <p>
                            Your hospitality growth partner — from distribution to digital
                            marketing.
                        </p>
                    </div>

                    {/* Property categories */}
                    <div className="mt-7 flex flex-wrap justify-center gap-2.5">
                        {propertyTypes.map((type, index) => (
                            <motion.span
                                key={type}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.08, duration: 0.35 }}
                                className="rounded-full border border-white/15 bg-black/20 px-4 py-2.5 text-xs text-[#d5d1ca] backdrop-blur-sm transition-colors hover:border-[#cbb071]/60 hover:text-[#cbb071] sm:text-sm"
                            >
                                {type}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;