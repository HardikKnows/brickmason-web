import React from "react";
import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 pb-10">
      <div className="w-full max-w-screen-xl mx-auto pb-8">
        
        {/* Banner Section */}
        <div className="w-full overflow-hidden rounded-2xl shadow-xl">
          <img
            src={banner}
            alt="Promotional Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description Text */}
        <div className="mt-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-amber-900 tracking-wide mb-2 work">
           Premium Construction Services
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

export default Banner;
