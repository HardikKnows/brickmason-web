import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Shobhit Shrivastva",
    role: "Founder & CEO",
    img: "/car-images/shobhit.jpeg",
    position: "top",
  },
  {
    name: "Pranjal Shukla",
    role: "Co-Founder & Director",
    img: "/car-images/Pranjal.jpeg",
    position: "top",
  },
  {
    name: "Salman Rizvi",
    role: "Co-Founder",
    img: "/car-images/salman.jpeg",
  },
  {
    name: "Yusuf Jamal",
    role: "Project Head",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Pratul Srivastava",
    role: "Engineer",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Syed Husain Rizvi",
    role: "Civil Engineer",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Mridul Srivastava",
    role: "Marketing Head",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Hariom Srivastava",
    role: "Interior Head",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Yashdeep Singh",
    role: "Interior Head",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
];

const MeetOurTeam = () => {
  const leaders = teamMembers.slice(0, 3);
  const others = teamMembers.slice(3);

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Meet Our <span className="text-[#ff6600]">Team</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A group of passionate engineers, designers, and builders dedicated to
            creating exceptional homes with quality and trust.
          </p>
        </motion.div>

        {/* 🔥 Leadership Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
          {leaders.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden
                         hover:shadow-2xl transition-transform duration-300
                         hover:-translate-y-2"
              style={{ minHeight: "420px" }}
            >
              <img
                src={member.img}
                alt={member.name}
                className={`w-full h-72 object-cover ${
                  member.position === "top"
                    ? "object-top"
                    : "object-center"
                }`}
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-[#ff6600] font-semibold">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 👥 Other Team Members */}
        <div className="flex flex-wrap justify-center gap-8">
          {others.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden
                         hover:shadow-xl transition-transform duration-300
                         hover:-translate-y-1 w-[260px]"
              style={{ minHeight: "380px" }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-[#ff6600] font-medium">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
