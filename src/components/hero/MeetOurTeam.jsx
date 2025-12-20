import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Pranjal Shukla",
    role: "Founder and CEO",
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Shobhit Shrivastva",
    role: "Founder and CEO",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "lorem ipsum",
    role: "Project Manager",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "lorem ipsum",
    role: "Marketing Lead",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
];

const MeetOurTeam = () => {
  return (
    <section className="py-20  bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-100" id="team">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Meet Our <span className="text-[#ff6600]">Team</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A group of passionate engineers, designers, and builders dedicated to
            creating exceptional homes with quality and trust.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-60 object-cover"
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
    </section>
  );
};

export default MeetOurTeam;
