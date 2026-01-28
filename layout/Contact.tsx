"use client";

import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact bg-[#0c1b3c] w-full pt-20 pb-20">
      <div className="contact-container mx-auto max-w-[1150px] w-full flex items-center justify-between hover:shadow-[#4f47e6] hover:shadow-xl duration-500 rounded-2xl">
        <div className="contact-img relative content-end px-10">
          <div className="blur-content rounded-2xl overflow-hidden backdrop-blur-xl -mb-8 flex w-full justify-center py-6 gap-8">
            <div className="item-1">
              <p className="text-[34px] font-semibold text-center">10+</p>
              <p className="text-[18px]">Projects Completed</p>
            </div>
            <div className="item-2">
              <p className="text-[34px] font-semibold text-center">3+</p>
              <p className="text-[18px]">Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="contact-info text-white w-1/2 px-16 bg-[#1a2340] flex flex-col justify-center items-start">
          <h2 className="text-[36px] font-semibold mb-6">Let's Get in Touch</h2>
          <form action="" className="w-full flex flex-col gap-6">
            <div className="name-email flex gap-4 w-full">
              <input
                className="w-full text-white border-0 border-b bg-transparent px-0 py-2"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="w-full text-white border-0 border-b bg-transparent px-0 py-2"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <input className="w-full text-white border-0 border-b bg-transparent px-0 py-2" type="text" placeholder="Your Project" />
            <textarea
              className="w-full text-white border-0 border-b bg-transparent px-0 py-2"
              placeholder="Your Message"
              rows={3}
            ></textarea>
            <button
              type="submit"
              className="relative cursor-pointer w-50 px-6 py-3 bg-[#4F46E5] text-white font-semibold rounded-lg overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2 transition-all duration-300 hover:bg-[#6366F1]"
            >
              <span className="relative z-10">
                Send Message <FaPaperPlane className="inline ml-2" />
              </span>
              <div className="absolute inset-0 bg-lime-400 opacity-0 group-hover:opacity-30 group-hover:animate-ping rounded-lg"></div>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
