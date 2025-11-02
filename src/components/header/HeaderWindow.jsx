import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { PhoneIcon } from "@heroicons/react/24/solid";

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Our Projects", href: "#our-projects" },
    { label: "Cost Estimator", to: "/cost-estimator" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Our Services", href: "#our-services" },
  ];

  const dropdownItems = [
    { label: "Material Estimator", to: "/UnderCons" },
    { label: "Floor Plans", to: "/UnderCons" },
    { label: "FAQs", to: "/UnderCons" },
    { label: "About Us", to: "/UnderCons" },
    { label: "Contact Us", to: "/contact" },
    { label: "Reviews", to: "/UnderCons" },
    { label: "Our Team", to: "/UnderCons" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div
        className="
          w-full
          md:px-2 
          lg:px-6 
          py-4 
          flex items-center justify-between 
          md:space-x-3 lg:space-x-6 
          md:max-w-none lg:max-w-7xl 
          md:mx-0 lg:mx-auto
        "
      >
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img src={logo} alt="Brick Mason Logo" className="h-12" />
          </a>
        </div>

        {/* Center: Nav */}
        <nav
          className="
            hidden md:flex flex-grow items-center 
            space-x-4 lg:space-x-8 
            text-[15px] tracking-wide font-medium
            overflow-x-auto overflow-y-hidden 
            whitespace-nowrap 
            scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
            no-scrollbar
          "
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "thin",
          }}
        >
          {navLinks.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="text-gray-800 hover:text-[#D2042D] transition no-underline flex-shrink-0"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-800 hover:text-[#D2042D] transition no-underline flex-shrink-0"
              >
                {item.label}
              </a>
            )
          )}

          {/* Dropdown */}
          <div className="relative flex-shrink-0" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-800 font-medium hover:text-[#D2042D] focus:outline-none transition"
            >
              More ▾
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-200 z-[9999] animate-fadeIn">
                <ul className="py-2">
                  {dropdownItems.map((item, index) => (
                    <li key={`${item.to}-${index}`}>
                      <Link
                        to={item.to}
                        className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#D2042D] transition no-underline rounded-lg"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Right: CTA & Phone */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-6 flex-shrink-0 whitespace-nowrap">
          <Link
            to="/contact"
            className="bg-[#D2042D] text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-[#B4032E] transition border-2 border-transparent hover:border-[#D2042D] hover:ring-2 hover:ring-[#D2042D] focus:outline-none whitespace-nowrap"
          >
            Let's Build
          </Link>
          <div className="h-10 w-px bg-gray-300"></div>
          <a
            href="tel:+918400400048"
            className="flex items-center text-sm text-gray-800 hover:text-[#D2042D] transition"
          >
            <PhoneIcon className="h-4 w-4 mr-1 text-[#D2042D]" />
            +91 8400400048
          </a>
        </div>

        {/* Mobile */}
        <div className="flex flex-col space-y-1 text-[10px] text-gray-800 md:hidden items-end leading-tight">
          <a
            href="tel:+918400400048"
            className="flex items-center hover:text-[#D2042D] transition"
          >
            <PhoneIcon className="h-4 w-4 mr-1 text-[#D2042D]" />
            +91 84004 00048
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderWindow;
