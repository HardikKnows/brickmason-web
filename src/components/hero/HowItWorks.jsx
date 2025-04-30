'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import HIW1 from "../../assets/howItWorks/how-it-works-1.jpg";
import HIW2 from "../../assets/howItWorks/how-it-works-2.jpg";
import HIW3 from "../../assets/howItWorks/how-it-works-3.png";
import HIW4 from "../../assets/howItWorks/how-it-works-4.jpg";
import HIW5 from "../../assets/howItWorks/how-it-works-5.png";
import HIW6 from "../../assets/howItWorks/how-it-works-6.jpg";

const steps = [
  { title: 'Raise a Request', description: 'Raise a service request or call us. Our expert will reach out to you.', img: HIW1 },
  { title: 'Meet Our Experts', description: 'Experts gather your requirements and explain the process.', img: HIW2 },
  { title: 'Book with Us', description: 'Confirm by paying 5% of the estimated project cost.', img: HIW3 },
  { title: 'Receive Designs', description: 'Get detailed drawings like floor plans, 3D elevations, and more.', img: HIW4 },
  { title: 'Track & Transact', description: 'Track progress and payments via Power play app securely.', img: HIW5 },
  { title: 'Settle In', description: 'Move into your beautifully constructed home!', img: HIW6 },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section id='how-it-works' className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 py-20 min-h-screen">
      {/* Section Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">How It Works</h2>
        <p className="text-gray-500 uppercase tracking-wider">Plan - Build - Track - Settle In</p>
      </div>

      <div ref={ref} className="relative container mx-auto flex flex-col gap-24 px-4 z-10">
        {/* SVG Path for the S-shaped arrow */}
        <svg className="absolute hidden md:block w-full h-full top-0 left-0 pointer-events-none">
          <path
            id="s-curve"
            d="M50% 100 
             C50% 20, 50% 20, 50% 40
             C50% 60, 50% 60, 50% 80
             C50% 100, 50% 100, 50% 120
             C50% 140, 50% 140, 50% 160
             C50% 180, 50% 180, 50% 200
             C50% 220, 50% 220, 50% 240
             C50% 260, 50% 260, 50% 280
             C50% 300, 50% 300, 50% 320
             C50% 340, 50% 340, 50% 360
             C50% 380, 50% 380, 50% 400
             C50% 420, 50% 420, 50% 440
             C50% 460, 50% 460, 50% 480
             C50% 500, 50% 500, 50% 0"
            fill="none"
            stroke="url(#arrow-gradient)"
            strokeWidth="4"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            style={{
              strokeDashoffset: `calc(1000 - (1000 * ${scrollYProgress}))`
            }}
          />
          <defs>
            <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#8B5CF6" />
            </marker>
          </defs>
        </svg>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Card Content */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 w-full md:w-1/2 flex flex-col gap-4 relative border-2 border-indigo-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Step indicator with arrow connector */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <motion.div
                  className="bg-purple-100 text-purple-700 font-bold px-4 py-1 rounded-full text-sm shadow-md z-10"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  Step {index + 1}
                </motion.div>
                {/* Small arrow pointing to the card */}
                {index !== 0 && (
                  <div className="w-0 h-6 border-l-2 border-dashed border-purple-300"></div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-indigo-700 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>

              {/* Arrow connector at bottom */}
              {index !== steps.length - 1 && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <div className="w-0 h-6 border-l-2 border-dashed border-purple-300"></div>
                  <div className="w-4 h-4 border-r-2 border-b-2 border-purple-500 transform rotate-45 -translate-y-2"></div>
                </div>
              )}
            </motion.div>

            {/* Card Image with border */}
            <motion.div
              className="w-full md:w-1/2 h-72 overflow-hidden rounded-2xl shadow-lg border-4 border-white"
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={step.img}
                alt={step.title}
                className="object-contain w-full h-full p-4 bg-white"
              />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Floating Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-40 h-40 bg-purple-200 rounded-full opacity-30"
          animate={{ y: [0, 50, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-60 h-60 bg-blue-200 rounded-full opacity-20"
          animate={{ y: [0, -50, 0], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}