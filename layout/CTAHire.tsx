"use client";

import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp, FaRegHandshake } from "react-icons/fa";

export default function CTA() {
    return (
        <section className="CTA bg-[#0c1b3c] w-full pt-20 pb-20">
            <div className="CTA-container rounded-4xl px-30 py-30 mx-auto max-w-[1150px] w-full flex items-center justify-between">
                <div className="text-content w-full flex flex-col items-center gap-6">
                    <FaRegHandshake className="text-white text-[100px] rounded-full bg-[#65a4c5] p-4" />
                    <h2 className="text-[42px] font-semibold">Tell Me About Your Projects</h2>
                    <div className="button-section flex gap-4 w-full items-center justify-center">
                        <button className="cursor-pointer flex gap-2 justify-center items-center text-[#f5f5f5] font-medium w-[200px] rounded-4xl bg-[#4F46E5] duration-300 hover:bg-[#6366F1] px-6 py-4"><BsFillTelephoneFill /> Contact Me</button>
                        <button className="cursor-pointer flex gap-2 justify-center items-center text-[#f5f5f5] font-medium w-[200px] rounded-4xl bg-[#4F46E5] duration-300 hover:bg-[#6366F1] px-6 py-4"><FaWhatsapp className="text-[24px]" /> Whatsapp</button>
                    </div>
                </div>
            </div>
        </section>
    )
}