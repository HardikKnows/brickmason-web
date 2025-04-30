import React, { useState, useEffect } from "react";
import pic from "../../assets/images/prop.jpg";

const Carousel = ({ images, locations, captions, autoSlide = true, slideInterval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Effect handles auto-sliding
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, slideInterval);
      return () => clearInterval(interval);
    }
  }, [autoSlide, slideInterval, images.length]);

  const moveSlide = (direction) => {
    setCurrentSlide((prev) => {
      let newSlide = prev + direction;
      if (newSlide >= images.length) newSlide = 0;
      else if (newSlide < 0) newSlide = images.length - 1;
      return newSlide;
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 pb-10">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {/* Carousel Section */}
          <div className="relative col-span-2 md:col-span-1 lg:col-span-2 overflow-hidden rounded-2xl shadow-xl h-[350px] md:h-[450px]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-2xl" />

                <div className="absolute top-4 left-4 bg-white/80 text-gray-800 px-3 py-1 rounded font-semibold shadow">
                  {locations[index]}
                </div>

                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-6 rounded-b-2xl">
                  <h3 className="text-xl font-semibold mb-1">{captions[index].title}</h3>
                  <p className="text-sm">{captions[index].description}</p>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full z-20"
              onClick={() => moveSlide(-1)}
              aria-label="Previous Slide"
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full z-20"
              onClick={() => moveSlide(1)}
              aria-label="Next Slide"
            >
              &#10095;
            </button>
          </div>

          {/* Static Image Section */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[350px] md:h-[450px]">
            <img src={pic} alt="Property" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Description Text */}
        <div className="mt-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-amber-900 tracking-wide mb-2">
            Building your city, one at a time
          </h1>
          {/* Decorative separator line */}
          <div className="w-48 md:w-72 h-1 bg-amber-700 mx-auto rounded-full mb-4"></div>

          <h2 className="text-amber-800 font-medium text-sm md:text-base">
            We have provided complete remodeling and construction solutions for residential and commercial properties all across Uttar Pradesh.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
