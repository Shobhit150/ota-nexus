
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import PropertyChallenges from "@/components/PropertyChallenges";
import TheNexus from "@/components/TheNexus";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import ReportingTestimonials from "@/components/ReportingTestimonials";
import CaseStudies from "@/components/CaseStudies";
import RevenueEstimator from "@/components/RevenueEstimator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0f14]">
      {/* Fixed navbar stays above the entire page */}
      <Navbar />

      {/* Hero background */}
      <div className="relative isolate bg-[#0c0f14]">
        {/* Background image */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.webp')" }}
        />

        {/* Dark overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080b10]/75 via-[#080b10]/45 to-[#080b10]/35"
        />

        {/* Bottom fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-72 bg-gradient-to-b from-transparent via-[#0c0f14]/70 to-[#0c0f14] sm:h-96"
        />

        <div className="relative z-10">
          <Hero />
        </div>
      </div>

      <WhyChooseUs />
      <PropertyChallenges />
      <TheNexus />
      <Services />
      <HowWeWork />
      <ReportingTestimonials />
      <CaseStudies />
      <RevenueEstimator />
      <Contact />
      <Footer />
    </main>
  );
}
