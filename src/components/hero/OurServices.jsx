import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import Homeicon from "../../assets/OurServices/icons/house.png";
import EXT from "../../assets/OurServices/icons/extention.png";
import Reno from "../../assets/OurServices/icons/rennovation.png";
import Dev from "../../assets/OurServices/icons/devolpment.png";
import LandScape from "../../assets/OurServices/icons/landscape.png";
import Comm from "../../assets/OurServices/icons/commercial.png";

const services = [
  {
    title: 'Custom Home Builds',
    icon: Homeicon,
    phrases: ['Trusted', 'Tailored', 'Delivered'],
  },
  {
    title: 'Home Extensions',
    icon: EXT,
    phrases: ['Expand', 'Enhance', 'Elevate'],
  },
  {
    title: 'Renovation & Remodeling',
    icon: Reno,
    phrases: ['Restore', 'Reimagine', 'Reinvent'],
  },
  {
    title: 'Real Estate Development',
    icon: Dev,
    phrases: ['Invest', 'Innovate', 'Build Smart'],
  },
  {
    title: 'Landscaping & Exteriors',
    icon: LandScape,
    phrases: ['Beautify', 'Structure', 'Impress'],
  },
  {
    title: 'Commercial Projects',
    icon: Comm,
    phrases: ['Scalable', 'Efficient', 'Built Right'],
  },
];

const OurServices = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section
      id="our-services"
      className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 py-20 z-0"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* 🔧 Heading with icon */}
          <div className="flex flex-col items-center justify-center text-center mb-14">
            <div className="mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
              Explore our range of expert solutions — each crafted with care and commitment to quality.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl"
              >
                <img src={service.icon} alt="" className="w-14 h-14 mb-5" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-gray-700 tracking-wide">
                  {service.phrases.map((phrase, i) => (
                    <span key={i} className="flex items-center">
                      <span>{phrase}</span>
                      {i !== service.phrases.length - 1 && (
                        <span className="text-red-500 mx-2 text-base">➤</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-48 h-48 bg-purple-200 rounded-full opacity-30 animate-pulse top-0 left-0 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-pulse blur-2xl -z-10" />
      </div>
    </section>
  );
};

export default OurServices;
