"use client";

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import { FaWordpress, FaReact, FaLaravel } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  { id: 1, src: "/Images/ezzy.png", alt: "Ezzy Project" },
  { id: 2, src: "/Images/ezzy.png", alt: "Ezzy Project" },
  { id: 3, src: "/Images/ezzy.png", alt: "Ezzy Project" },
  { id: 4, src: "/Images/ezzy.png", alt: "Ezzy Project" },
  { id: 5, src: "/Images/ezzy.png", alt: "Ezzy Project" },
];

export default function Portfolio() {
  return (
    <section className="portfolio bg-[#0c1b3c] w-full pt-20">
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
          <h3 className="sticky top-[120px] text-[42px] capitalize text-start">
            The projects I create usually use
          </h3>
        </div>
        <div className="logo-skill grid grid-cols-3 grid-rows-4 gap-2 w-full">
          <div className="skill-item bg-transparent border border-gray-500 hover:bg-gray-500 duration-300 rounded-2xl flex justify-center items-center p-4 col-span-2 row-span-2 flex-col">
            <FaWordpress className="text-[64px] text-white" />
            <p className="text-white">Wordpress</p>
          </div>
          <div className="skill-item bg-transparent border border-gray-500 hover:bg-gray-500 duration-300 rounded-2xl flex justify-center items-center p-4 row-span-2 flex-col">
            <RiNextjsFill className="text-[64px] text-black" />
            <p>Next.JS</p>
          </div>
          <div className="skill-item bg-transparent border border-gray-500    hover:bg-gray-500 duration-300 rounded-2xl flex justify-center items-center p-4 flex-col">
            <FaReact className="text-[64px] text-[#61DAFB]" />
            <p className="text-[#61DAFB]">React.JS</p>
          </div>
          <div className="skill-item bg-transparent border border-gray-500 hover:bg-gray-500 duration-300 rounded-2xl flex justify-center items-center p-4 flex-col">
            <img
              src="/Logos/Figma Logo Full Color.png"
              alt=""
              className="w-16"
            />
            <p className="text-white">Figma</p>
          </div>
          <div className="skill-item bg-transparent border border-gray-500 hover:bg-gray-500 duration-300 rounded-2xl flex justify-center items-center p-4 flex-col">
            <RiTailwindCssFill className="text-[64px] text-[#38BDF8]" />
            <p className="text-[#38BDF8]">Tailwind CSS</p>
          </div>
          <div className="skill-item bg-transparent border border-gray-500 hover:bg-gray-500 duration-300 rounded-2xl flex justify-center items-center p-4 flex-col">
            <img src="/Logos/vue-logo.png" alt="" />
            <p className="text-white">Vue.JS</p>
          </div>
          <div className="skill-item bg-transparent border border-gray-500 hover:bg-gray-500 duration-300 rounded-2xl flex justify-center items-center p-4 col-span-2 gap-2">
            <FaLaravel className="text-[64px] text-[#FF2D20]" />
            <p className="text-[24px] text-[#FF2D20]">Laravel</p>
          </div>
        </div>
      </div>
    </section>
  );
}
