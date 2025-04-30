import React, { useState } from "react";
import { Mail, Phone, User, CheckCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
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
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-start p-6 md:p-10">
      {/* Left side: Contact Info */}
      <div className="w-full md:w-[45%] p-5 mb-10 md:mb-0 text-left">
        <h2 className="text-3xl font-bold text-[#B22222] mb-4 leading-tight">
          Get in Touch With Our Technical Experts
        </h2>
        <p className="text-lg mb-4 text-gray-600">
          We take our commitments to our users seriously. Reach out to us for any complaints or queries, and we will be happy to assist you.
        </p>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-[#B22222] mb-2">Contact Information</h3>
          <p className="text-lg mb-2 text-gray-700">Sultanpur, Uttar Pradesh, India</p>
          <p className="text-lg mb-2 text-gray-700">
            Email:{" "}
            <a
              href="mailto:brickmasonconstructions@gmail.com"
              className="text-[#B22222]"
            >
              brickmasonconstructions@gmail.com
            </a>
          </p>
          <p className="text-lg text-gray-700">
            Phone:{" "}
            <a href="tel:+918874778585" className="text-[#B22222]">
              +918874778585
            </a>{" "}
            ,{" "}
            <a href="tel:+918400400048" className="text-[#B22222]">
              +918400400048
            </a>
          </p>
        </div>
      </div>

      {/* Right side: Contact Form */}
      <div className="w-full md:w-[55%]">
        <AnimatePresence>
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="backdrop-blur-md bg-white/80 border border-[#ddd] shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 max-w-full md:max-w-xl w-full"
            >
              <h2 className="text-3xl font-bold text-center text-[#8B0000] mb-6 tracking-wide">
                Contact BrickMason
              </h2>
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/movdjrkv"
                method="POST"
                className="space-y-6"
              >
                <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 bg-white shadow-sm">
                  <User className="text-[#B22222] mr-3" size={20} />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                  />
                </div>
                <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 bg-white shadow-sm">
                  <Mail className="text-[#B22222] mr-3" size={20} />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                  />
                </div>
                <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 bg-white shadow-sm">
                  <Phone className="text-[#B22222] mr-3" size={20} />
                  <input
                    type="tel"
                    name="mobile"
                    required
                    placeholder="Your Mobile Number"
                    className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                  />
                </div>
                <div className="flex items-start border border-gray-300 rounded-xl px-4 py-3 bg-white shadow-sm">
                  <MessageSquare className="text-[#B22222] mt-1 mr-3" size={20} />
                  <textarea
                    name="message"
                    placeholder="Your Message (optional)"
                    rows="3"
                    className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#B22222] hover:bg-[#8B0000] text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center text-center bg-white/80 shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 max-w-md"
            >
              <CheckCircle size={48} className="text-green-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Thank you!
              </h2>
              <p className="text-gray-600">Your message has been sent.</p>
              <p className="text-sm text-gray-500 mt-4">
                Redirecting to homepage...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactForm;
