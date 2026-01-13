"use client";

import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdDocument } from "react-icons/io";

export default function CTA() {
    return (
        <section className="CTA bg-[#0c1b3c] w-full pt-20 pb-20">
            <div className="CTA-container rounded-4xl px-30 py-30 mx-auto max-w-[1150px] w-full flex items-center justify-between">
                <div className="text-content w-[50%]">
                    <h2 className="text-[42px] font-semibold">Let's Hire Me</h2>
                    <p className="text-white mb-4">I'm available for freelance work and open to new opportunities.</p>
                    <div className="button-section flex gap-4 w-full">
                        <button className="cursor-pointer flex gap-4 justify-center items-center text-[#f5f5f5] font-medium w-[200px] rounded-4xl bg-[#4F46E5] duration-300 hover:bg-[#6366F1] px-6 py-4"><BsFillTelephoneFill /> Contact Me</button>
                        <button className="cursor-pointer flex gap-4 justify-center items-center text-[#f5f5f5] font-medium w-[200px] rounded-4xl bg-[#4F46E5] duration-300 hover:bg-[#6366F1] px-6 py-4"><IoMdDocument /> Download CV</button>
                    </div>
                </div>
            </div>
        </section>
    )
}