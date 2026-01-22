"use client";

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

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
      <div className="portfolio-container rounded-2xl mx-auto max-w-[1150px] w-full">
        <h2 className="text-[42px] text-center font-semibold mb-6">My Portfolio</h2>
        <div
          id="animation-carousel"
          className="relative w-full rounded-2xl"
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            dynamicHeight
          >
            {images.map((image) => (
              <div key={image.id}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  layout="responsive"
                  className="w-full h-auto"
                />
                <p className="legend">{image.alt}</p>
              </div>
            ))}
          </Carousel>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-3 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-transparent">
              <svg
                className="w-7 h-7 text-black rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 19-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-3 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-transparent">
              <svg
                className="w-7 h-7 text-black rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
