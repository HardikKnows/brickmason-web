import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const HeaderWindow = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown menu

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); // Close the dropdown if the click is outside
      }
    };

    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="hidden md:block bg-white py-4 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="block">
            <img src={logo} alt="Brick Mason Logo" className="h-12" />
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-[15px] tracking-wide">
          <Link
            to="#our-projects"
            className="text-gray-800 font-medium hover:text-[#D2042D] hover:no-underline transition"
          >
            Our Projects
          </Link>
          <Link
            to="#cost-estimator"
            className="text-gray-800 font-medium hover:text-[#D2042D] hover:no-underline transition"
          >
            Cost Estimator
          </Link>
          <Link
            to="#how-it-works"
            className="text-gray-800 font-medium hover:text-[#D2042D] hover:no-underline transition"
          >
            How it Works
          </Link>
          <Link
            to="#our-services"
            className="text-gray-800 font-medium hover:text-[#D2042D] hover:no-underline transition"
          >
            Our Services
          </Link>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-800 font-medium hover:text-[#D2042D] hover:no-underline focus:outline-none transition"
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
                      className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#D2042D] hover:no-underline transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-[#D2042D] text-white px-6 py-2 rounded-full font-medium hover:bg-[#B4032E] transition no-underline hover:no-underline border-2 border-transparent hover:border-[#D2042D] hover:ring-2 hover:ring-[#D2042D] focus:outline-none"
          >
            Let's Build
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderWindow;
