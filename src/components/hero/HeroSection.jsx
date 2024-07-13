import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const HeroSection = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 5000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlideInterval, autoSlide]);

  return (
    <div className="overflow-hidden relative  max-h-60 md:max-h-72 lg:max-h-80">
      <div class="absolute top-500 top-1/2 px-4 py-2 opacity-100 ">
        <h2 class="text-xl text-white font-bold text-center ">Text 1 here</h2>
        <h2 class="text-xl text-white font-bold text-center ">Text 2 here</h2>
      </div>
      <div
        className="flex transition-all ease-out delay-300 duration-1000 "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between ">
        <button
          onClick={prev}
          className="p-1 py-3 rounded shadow bg-[#817f7fb1] text-gray-800 "
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="p-1 py-3 rounded shadow bg-[#817f7fb1] text-gray-800 "
        >
          <ChevronRight />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center ">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`transition-all w-5 h-1.5 bg-[#fff] ${
                curr === i ? "" : "bg-[#fff] bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
