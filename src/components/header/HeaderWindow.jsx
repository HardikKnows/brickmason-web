import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { PhoneIcon } from "@heroicons/react/24/solid"; // Ensure Heroicons is installed

const HeaderWindow = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="hidden md:block bg-white py-4 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo and Tagline */}
        <div className="flex items-center space-x-4">
          <a href="/" className="block">
            <img src={logo} alt="Brick Mason Logo" className="h-12" />
          </a>
          <div className="text-gray-800 leading-tight text-[16px] font-semibold">
            <p>Brickmason</p>
            <p>Home & Commercial</p>
            <p>Construction</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-[15px] tracking-wide">
          <Link to="#our-projects" className="text-gray-800 font-medium hover:text-[#D2042D] transition">
            Our Projects
          </Link>
          <Link to="#cost-estimator" className="text-gray-800 font-medium hover:text-[#D2042D] transition">
            Cost Estimator
          </Link>
          <Link to="#how-it-works" className="text-gray-800 font-medium hover:text-[#D2042D] transition">
            How it Works
          </Link>
          <Link to="#our-services" className="text-gray-800 font-medium hover:text-[#D2042D] transition">
            Our Services
          </Link>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-800 font-medium hover:text-[#D2042D] focus:outline-none transition"
            >
              More ▾
            </button>
            {dropdownOpen && (
              <ul className="absolute z-50 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                {[
                  { label: "Material Estimator", to: "#material-estimator" },
                  { label: "Floor Plans", to: "#floor-plans" },
                  { label: "FAQs", to: "#faqs" },
                  { label: "About Us", to: "#about-us" },
                  { label: "Contact Us", to: "/contact" },
                  { label: "Reviews", to: "#reviews" },
                  { label: "Our Team", to: "#our-team" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#D2042D] transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        {/* CTA and Contact */}
        <div className="flex items-center space-x-6">
          {/* CTA Button */}
          <Link
            to="/contact"
            className="bg-[#D2042D] text-white px-6 py-2 rounded-full font-medium hover:bg-[#B4032E] transition no-underline border-2 border-transparent hover:border-[#D2042D] hover:ring-2 hover:ring-[#D2042D] focus:outline-none"
          >
            Let's Build
          </Link>

          {/* Contact Numbers */}
          <div className="flex flex-col space-y-1 text-sm">
            <a href="tel:+918874778585" className="flex items-center text-gray-800 hover:text-[#D2042D] transition">
              <PhoneIcon className="h-4 w-4 mr-1 text-[#D2042D]" />
              +91 88747 78585
            </a>
            <a href="tel:+918400400048" className="flex items-center text-gray-800 hover:text-[#D2042D] transition">
              <PhoneIcon className="h-4 w-4 mr-1 text-[#D2042D]" />
              +91 84004 00048
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderWindow;
