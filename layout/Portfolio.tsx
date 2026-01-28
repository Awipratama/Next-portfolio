"use client";

import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import Image from "next/image";

import { FaWordpress, FaReact, FaLaravel } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJquery } from "react-icons/si";

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

const skills = [
  {
    name: "WordPress",
    icon: <FaWordpress className="text-[64px] text-blue-400" />,
    span: "col-span-2 row-span-2",
  },
  {
    name: "Next.JS",
    icon: <RiNextjsFill className="text-[64px] text-white" />,
    span: "row-span-2",
  },
  {
    name: "React.JS",
    icon: <FaReact className="text-[64px] text-[#61DAFB]" />,
    span: "",
  },
  {
    name: "Figma",
    icon: <img src="/Logos/Figma Logo Full Color.png" className="w-16" />,
    span: "",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-[64px] text-[#38BDF8]" />,
    span: "",
  },
  {
    name: "jQuery",
    icon: <SiJquery className="text-[64px] text-[#0769AD]" />,
    span: "",
  },
  {
    name: "Laravel",
    icon: <FaLaravel className="text-[64px] text-[#FF2D20]" />,
    span: "col-span-2",
  },
];

const images: CarouselImage[] = [
  { id: 1, src: "/Images/ezzy.png", alt: "Ezzy Project" },
  { id: 2, src: "/Images/ezzy.png", alt: "Ezzy Project" },
  { id: 3, src: "/Images/ezzy.png", alt: "Ezzy Project" },
  { id: 4, src: "/Images/ezzy.png", alt: "Ezzy Project" },
  { id: 5, src: "/Images/ezzy.png", alt: "Ezzy Project" },
];

export default function Portfolio() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % skills.length);
    }, 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="portfolio" className="portfolio bg-[#0c1b3c] w-full pt-20">
      <h2 className="text-[48px] text-center font-semibold mb-6">
        My Portfolio
      </h2>
      <div className="portfolio-container rounded-2xl mx-auto max-w-[1150px] w-full mt-10">
        <div
          id="animation-carousel"
          className="carousel-peek-wrapper relative w-full rounded-2xl"
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            dynamicHeight={false}
            showStatus={false}
            centerMode
            centerSlidePercentage={90}
          >
            {images.map((image) => (
              <div key={image.id}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  layout="responsive"
                  className="w-full h-auto object-cover rounded-2xl px-6"
                />
                {/* <p className="absolute legend carousel-text text-start bottom-2 left-6 right-6 w-full z-10 p-4">{image.alt}</p> */}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="skill-container mt-10 flex max-w-[1150px] mx-auto gap-4 justify-between">
        <div className="heading-skill relative w-full">
          <h3 className="sticky top-[120px] text-[42px] capitalize text-start font-semibold">
            The projects I create usually use
          </h3>
        </div>
        <div className="logo-skill grid grid-cols-3 grid-rows-4 gap-2 w-full">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`
            skill-item rounded-2xl flex justify-center items-center p-4 flex-col gap-2 border duration-500
            ${skill.span}
            ${active === i ? "bg-gray-500 border-gray-500" : "bg-transparent border-gray-500"}
          `}
            >
              {skill.icon}
              <p className="text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
