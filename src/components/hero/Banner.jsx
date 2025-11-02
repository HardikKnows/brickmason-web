import React from "react";
import { motion } from "framer-motion";
import banner from "../../assets/Banner72.png";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-white pb-10">
      <div className="w-full max-w-screen-xl mx-auto  pb-8 relative">

        {/* Animated Banner Image */}
        <motion.div
          className="w-full overflow-hidden shadow-md relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={banner}
            alt="Promotional Banner"
            className="w-full h-full object-cover"
          />

          {/* Soft white gradient fade at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
        </motion.div>

        {/* Animated Text Section */}
        <motion.div
          className="mt-6 text-center relative z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 tracking-wide mb-2 work font-dmserif">
            Premium Construction Services
          </h1>

          <div className="w-32 sm:w-48 md:w-72 h-1 bg-amber-700 mx-auto rounded-full mb-4"></div>

          <p className="text-amber-800 font-medium text-sm sm:text-base max-w-2xl mx-auto">
            We have provided complete remodeling and construction solutions for residential and commercial properties all across Uttar Pradesh.
          </p>
        </motion.div>

        {/* Optional Scroll Cue */}
        {/*
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
          ↓
        </div>
        */}
      </div>
    </section>
  );
};

export default Banner;
