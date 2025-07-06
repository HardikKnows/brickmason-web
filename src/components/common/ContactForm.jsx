import React, { useState, useRef } from "react";
import { Mail, Phone, User, CheckCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  // Refs for scroll-based animation
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: false, margin: "-100px" });
  const rightInView = useInView(rightRef, { once: false, margin: "-100px" });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    }).then((response) => {
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => navigate("/"), 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-white via-rose-50 to-purple-50 md:flex-row justify-center items-start px-4 sm:px-6 md:px-10 py-10 space-y-10 md:space-y-0 md:space-x-10">
      {/* Left side */}
      <motion.div
        ref={leftRef}
        initial={{ opacity: 0, x: -50 }}
        animate={leftInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-[45%] text-left"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#B22222] mb-4 leading-tight">
          Get in Touch With Our Technical Experts
        </h2>
        <p className="text-base sm:text-lg mb-4 text-gray-600">
          We take our commitments to our users seriously. Reach out to us for any complaints or queries, and we will be happy to assist you.
        </p>
        <div className="mt-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#B22222] mb-2">Contact Information</h3>
          <p className="text-base sm:text-lg mb-2 text-gray-700">Sultanpur, Uttar Pradesh, India</p>
          <p className="text-base sm:text-lg mb-2 text-gray-700">
            Email:{" "}
            <a href="mailto:brickmasonconstructions@gmail.com" className="text-[#B22222] break-all">
              brickmasonconstructions@gmail.com
            </a>
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            Phone:{" "}
            <a href="tel:+918874778585" className="text-[#B22222]">
              +91 88747 78585
            </a>
            ,{" "}
            <a href="tel:+918400400048" className="text-[#B22222]">
              +91 84004 00048
            </a>
          </p>
        </div>
      </motion.div>

      {/* Right side */}
      <motion.div
        ref={rightRef}
        initial={{ opacity: 0, y: 50 }}
        animate={rightInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full md:w-[55%]"
      >
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="backdrop-blur-md bg-white/80 border border-[#ddd] shadow-2xl rounded-2xl p-5 sm:p-6 md:p-10 w-full"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#8B0000] mb-6 tracking-wide">
                Contact BrickMason
              </h2>

              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/movdjrkv"
                method="POST"
                className="space-y-5"
              >
                {[
                  {
                    icon: <User className="text-[#B22222] mr-3" size={20} />,
                    placeholder: "Your Name",
                    name: "name",
                    type: "text",
                  },
                  {
                    icon: <Mail className="text-[#B22222] mr-3" size={20} />,
                    placeholder: "Your Email",
                    name: "email",
                    type: "email",
                  },
                  {
                    icon: <Phone className="text-[#B22222] mr-3" size={20} />,
                    placeholder: "Your Mobile Number",
                    name: "mobile",
                    type: "tel",
                  },
                ].map((field) => (
                  <div
                    key={field.name}
                    className="flex items-center border border-gray-300 rounded-xl px-4 py-3 bg-white shadow-sm"
                  >
                    {field.icon}
                    <input
                      type={field.type}
                      name={field.name}
                      required
                      placeholder={field.placeholder}
                      className="w-full text-sm sm:text-base outline-none bg-transparent text-gray-700 placeholder-gray-400"
                    />
                  </div>
                ))}

                {/* Message Field */}
                <div className="flex items-start border border-gray-300 rounded-xl px-4 py-3 bg-white shadow-sm">
                  <MessageSquare className="text-[#B22222] mt-1 mr-3" size={20} />
                  <textarea
                    name="message"
                    placeholder="Your Message (optional)"
                    rows="3"
                    className="w-full text-sm sm:text-base outline-none bg-transparent text-gray-700 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#B22222] hover:bg-[#8B0000] text-white font-semibold text-sm sm:text-base py-3 rounded-xl shadow-lg transition-all duration-300"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col items-center text-center bg-white/80 shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 max-w-md mx-auto"
            >
              <CheckCircle size={48} className="text-green-600 mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                Thank you!
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">Your message has been sent.</p>
              <p className="text-xs text-gray-500 mt-4">Redirecting to homepage...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ContactForm;
