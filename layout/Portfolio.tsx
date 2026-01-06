"use client";

import { useEffect } from "react";
import { Carousel } from "flowbite";

export default function Portfolio() {
  useEffect(() => {
    const carouselEl = document.getElementById("animation-carousel");

    if (!carouselEl) return;

    // Opsi carousel
    const options = {
      defaultPosition: 0,
      interval: 3000, // autoplay
    };

    // Inisialisasi sesuai API Flowbite yang benar
    // const carousel = new Carousel(carouselEl, options);

    // carousel.cycle(); // Mulai autoplay
  }, []);
  return (
    <section className="portfolio bg-[#0c1b3c] w-full py-20">
      <div className="portfolio-container mx-auto max-w-[1150px] w-full">
        <h2 className="text-3xl text-center font-bold mb-6">My Portfolio</h2>
        <div
          id="animation-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-base md:h-96">
            {/* Item 1 */}
            <div className="hidden duration-200 ease-linear" data-carousel-item>
              <img
                src="/Images/ezzy.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="Ezzy Project"
              />
            </div>
            {/* Item 2 */}
            <div className="hidden duration-200 ease-linear" data-carousel-item>
              <img
                src="/Images/ezzy.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="Ezzy Project"
              />
            </div>
            {/* Item 3 */}
            <div
              className="hidden duration-200 ease-linear"
              data-carousel-item="active"
            >
              <img
                src="/Images/ezzy.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="Ezzy Project"
              />
            </div>
            {/* Item 4 */}
            <div className="hidden duration-200 ease-linear" data-carousel-item>
              <img
                src="/Images/ezzy.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="Ezzy Project"
              />
            </div>
            {/* Item 5 */}
            <div className="hidden duration-200 ease-linear" data-carousel-item>
              <img
                src="/Images/ezzy.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="Ezzy Project"
              />
            </div>
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white rtl:rotate-180"
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
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white rtl:rotate-180"
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
