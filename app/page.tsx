"use client";

import Hero from "@/layout/Hero";
import About from "@/layout/About";
import Services from "@/layout/Services";
import Portfolio from "@/layout/Portfolio";
import CTA from "@/layout/CTAHire";

export default function Home() {
  return (
    <section className="home-section min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <Hero />
      {/* End of Hero Section */}
      {/* Start of About Section */}
      <About />
      {/* End of About Section */}
      {/* Start of Services Section */}
      <Services />
      {/* End of Services Section */}
      {/* Start of Portfolio Section */}
      <Portfolio />
      {/* End of Portfolio Section */}
      {/* Start of CTA Section */}
      <CTA />
      {/* End of CTA Section */}
    </section>
  );
}
