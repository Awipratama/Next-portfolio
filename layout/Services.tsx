import { FaComputer, FaScrewdriverWrench } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";

import FloatingShapes3 from "@/components/FloatingShapes3";

export default function Services() {
  return (
    <section className="services-section bg-[#0c1b3c] flex justify-center w-full pt-10">
      <FloatingShapes3 />
      <div className="service-container flex flex-col max-w-[1150px]">
        <h2 className="text-md font-bold text-center uppercase mt-16">
          Services
        </h2>
        <h5 className="text-[48px] text-center mb-12 font-semibold">
          Expertise Service! Let's Check It Out
        </h5>
        <div className="services-grid grid grid-cols-3 gap-6">
          <div className="service-card bg-[#1a2340] p-6 rounded-2xl flex flex-col items-start hover:scale-105 transition-all duration-400 cursor-default text-center hover:shadow-[#4f47e6] hover:shadow-lg">
            <FaComputer className="text-4xl mb-4 text-white w-full" />
            <h3 className="text-lg font-semibold mb-2 w-full">
              Web Development
            </h3>
            <p className="text-gray-300">
              Building responsive and dynamic websites using modern
              technologies.
            </p>
          </div>
          <div className="service-card bg-[#1a2340] p-6 rounded-2xl flex flex-col items-start hover:scale-105 transition-all duration-400 cursor-default text-center hover:shadow-[#4f47e6] hover:shadow-lg">
            <MdDesignServices className="text-4xl mb-4 text-white w-full" />
            <h3 className="text-lg font-semibold mb-2 w-full">UI/UX Design</h3>
            <p className="text-gray-300">
              Designing user-friendly interfaces with a focus on user
              experience.
            </p>
          </div>
          <div className="service-card bg-[#1a2340] p-6 rounded-2xl flex flex-col items-start hover:scale-105 transition-all duration-400 cursor-default text-center hover:shadow-[#4f47e6] hover:shadow-lg">
            <FaScrewdriverWrench className="text-4xl mb-4 text-white w-full" />
            <h3 className="text-lg font-semibold mb-2 w-full">IT Support</h3>
            <p className="text-gray-300">
              Providing expert advice on web development and design best
              practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
