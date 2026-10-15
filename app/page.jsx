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
    <main className="relative min-h-screen bg-[#0c0f14]">
      {/* ONE shared background for navbar + hero */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#080b10]/85 via-[#080b10]/65 to-[#080b10]/50" />

      {/* Navbar and hero share the same background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <WhyChooseUs />
        <PropertyChallenges />
        <TheNexus/>
        <Services/>
        <HowWeWork/>
        <ReportingTestimonials/>
        <CaseStudies/>
        <RevenueEstimator/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}