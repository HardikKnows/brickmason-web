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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { label: "Our Projects", href: "#our-projects" },
    { label: "Cost Estimator", to: "/UnderCons" }, // routed
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
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <a href="/" className="block">
            <img src={logo} alt="Brick Mason Logo" className="h-12" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-[15px] tracking-wide">
          {navLinks.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="text-gray-800 font-medium hover:text-[#D2042D] transition no-underline hover:no-underline"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-800 font-medium hover:text-[#D2042D] transition no-underline hover:no-underline"
              >
                {item.label}
              </a>
            )
          )}

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-800 font-medium hover:text-[#D2042D] focus:outline-none transition no-underline hover:no-underline"
            >
              More ▾
            </button>
            {dropdownOpen && (
              <ul className="absolute z-50 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                {dropdownItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#D2042D] transition no-underline hover:no-underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        {/* Desktop CTA & Contact */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/contact"
            className="bg-[#D2042D] text-white px-6 py-2 rounded-full font-medium hover:bg-[#B4032E] transition no-underline hover:no-underline border-2 border-transparent hover:border-[#D2042D] hover:ring-2 hover:ring-[#D2042D] focus:outline-none"
          >
            Let's Build
          </Link>
          <div className="h-10 w-px bg-gray-300"></div>
          <div className="flex flex-col space-y-1 text-sm text-gray-800">
            <a
              href="tel:+918874778585"
              className="flex items-center hover:text-[#D2042D] transition no-underline hover:no-underline"
            >
              <PhoneIcon className="h-4 w-4 mr-1 text-[#D2042D]" />
              +91 88747 78585
            </a>
            <a
              href="tel:+918400400048"
              className="flex items-center hover:text-[#D2042D] transition no-underline hover:no-underline"
            >
              <PhoneIcon className="h-4 w-4 mr-1 text-[#D2042D]" />
              +91 84004 00048
            </a>
          </div>
        </div>

        {/* 📱 Mobile View Contacts */}
        <div className="flex flex-col space-y-1 text-[10px] text-gray-800 md:hidden items-end leading-tight">
          <a
            href="tel:+918874778585"
            className="flex items-center hover:text-[#D2042D] transition no-underline hover:no-underline"
          >
            <PhoneIcon className="h-4 w-4 mr-1 text-[#D2042D]" />
            +91 88747 78585
          </a>
          <a
            href="tel:+918400400048"
            className="flex items-center hover:text-[#D2042D] transition no-underline hover:no-underline"
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
