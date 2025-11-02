import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Aarav Sharma",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Riya Mehta",
    role: "Head of Design",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Aditya Verma",
    role: "Project Manager",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Neha Kapoor",
    role: "Marketing Lead",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
];

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
          About <span className="text-[#ff6600]">BrickMason</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Building dreams into reality — one brick at a time.
        </p>
      </motion.div>

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-5 mb-12 leading-relaxed text-gray-700"
      >
        <p>
          <strong>BrickMason.in</strong> is a next-generation construction company redefining how
          homes are built in India. We make your construction journey seamless, transparent, and
          truly satisfying — from concept to completion.
        </p>
        <p>
          Our mission is simple: to bring <strong>trust, technology, and transparency</strong> into
          home construction while ensuring the highest quality and timely delivery. Whether you’re
          building your dream home or investing in real estate, we’re here to make it effortless.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-3 border-l-4 border-[#ff6600] pl-3">
            Our Mission
          </h2>
          <p>
            To empower homeowners with transparent, stress-free, and high-quality construction
            services powered by technology and managed by professionals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-3 border-l-4 border-[#ff6600] pl-3">
            Our Vision
          </h2>
          <p>
            To become India’s most trusted and tech-driven construction partner — creating lasting
            homes and long-term customer relationships.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-md mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Why Choose BrickMason?
        </h2>
        <ul className="grid md:grid-cols-2 gap-5 text-gray-700 leading-relaxed">
          <li>
            <span className="text-[#ff6600] font-bold">•</span> End-to-End Construction Services
          </li>
          <li>
            <span className="text-[#ff6600] font-bold">•</span> Transparent Pricing & Contracts
          </li>
          <li>
            <span className="text-[#ff6600] font-bold">•</span> Real-Time Project Tracking
          </li>
          <li>
            <span className="text-[#ff6600] font-bold">•</span> Quality-Assured Materials
          </li>
          <li>
            <span className="text-[#ff6600] font-bold">•</span> On-Time Delivery Guarantee
          </li>
          <li>
            <span className="text-[#ff6600] font-bold">•</span> Expert Engineers & Architects
          </li>
        </ul>
      </div>

      {/* Meet Our Team Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-[#ff6600] font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-3 gap-8 text-center mb-16"
      >
        <div>
          <h3 className="text-4xl font-bold text-[#ff6600]">250+</h3>
          <p className="text-gray-600 mt-2">Projects Delivered</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#ff6600]">100%</h3>
          <p className="text-gray-600 mt-2">Client Satisfaction</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#ff6600]">50+</h3>
          <p className="text-gray-600 mt-2">Expert Professionals</p>
        </div>
      </motion.div>

      {/* Closing Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Let’s Build Together</h2>
        <p className="text-gray-700 mb-8">
          Whether it’s your first home or your dream villa, BrickMason ensures a hassle-free,
          transparent, and high-quality construction journey every step of the way.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-[#ff6600] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#e55a00] transition-colors"
        >
          Get in Touch
        </motion.a>
      </div>
    </div>
  );
};

export default AboutUs;
