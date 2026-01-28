"use client";

import { useEffect, useState } from "react";

export default function MainNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const menu = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "portfolio", label: "My Portfolio" },
    { id: "contact", label: "Contact Me" },
  ];

  return (
    <div
      className={`main-navbar fixed flex justify-center w-full z-99 transition-all duration-300
    ${isScrolled ? "nav-scrolled" : ""}`}
    >
      <nav className="w-full max-w-[1150px] flex justify-between">
        <div className="logo py-2">
          <img
            className="w-[100px]"
            src="/Logos/logo-white-remove-bg.png"
            alt=""
          />
        </div>
        <div className="navigation flex gap-4 items-center py-7">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`nav-fonts ${active === item.id ? "text-white font-bold" : "text-white"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="cv-btn flex py-7">
          <button className="cursor-pointer text-[#f5f5f5] font-medium w-[140px] rounded-2xl bg-[#4F46E5] duration-300 hover:bg-[#6366F1] px-4">
            Download CV
          </button>
        </div>
      </nav>
    </div>
  );
}
