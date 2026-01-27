"use client";

import FloatingShapes from "@/components/FloatingShapes";
import About from "@/layout/About";
import Services from "@/layout/Services";
import Portfolio from "@/layout/Portfolio";
import CTA from "@/layout/CTAHire";

import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <section className="home-section min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <div className="flex relative main-page w-full min-h-screen items-center justify-center font-sans">
        <FloatingShapes />
        <main className="flex max-w-[1150px] min-h-screen w-full items-center justify-between pt-10">
          <div className="text-section flex flex-col w-1/2 pr-10">
            <h1 className="text-[48px]/14 font-bold mb-6">
              Hi, I'm Awipratama <br /> an FrontEnd Web Developer
            </h1>
            <p className="pb-8 text-white">
              I'm a passionate Front-End Developer with a strong interest in
              creating interactive and user-friendly web experiences.
            </p>
            <button
              onClick={() => {
                const section = document.getElementById("about");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative cursor-pointer w-50 px-6 py-3 bg-[#4F46E5] text-white font-semibold rounded-lg overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2 transition-all duration-300 hover:bg-[#6366F1]"
            >
              <span className="relative z-10">Learn More <FaArrowRight className="inline ml-2" /></span>
              <div className="absolute inset-0 bg-lime-400 opacity-0 group-hover:opacity-30 group-hover:animate-ping rounded-lg"></div>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
          <div className="w-1/2">
            <img
              className="image-section rounded-full w-[80%] ml-auto"
              src="/Images/profile-3.png"
              alt=""
            />
          </div>
          {/* <div className="shape"></div> */}
        </main>
      </div>
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
