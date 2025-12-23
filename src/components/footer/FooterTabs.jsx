import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBuildingShield,
  faHouse,
  faHammer,
  faIndianRupee,
} from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";

function FooterTabs() {
  return (
    <div className="sticky bottom-0 z-50 bg-[#f5f5f5] border-t border-gray-300 py-2 lg:hidden">
      <ul className="grid grid-cols-5 text-center w-full">

        {/* Home */}
        <li className="w-full flex flex-col items-center justify-center">
          <Link
            to="/#top"
            className="flex flex-col items-center justify-center text-gray-700 hover:text-black transition duration-150"
          >
            <FontAwesomeIcon icon={faHouse} className="text-xl mb-1" />
            <span className="text-[11px] font-medium leading-none">Home</span>
          </Link>
        </li>

        {/* Projects */}
        <li className="w-full flex flex-col items-center justify-center">
          <Link
            to="/#our-projects"
            className="flex flex-col items-center justify-center text-gray-700 hover:text-black transition duration-150"
          >
            <FontAwesomeIcon icon={faBuildingShield} className="text-xl mb-1" />
            <span className="text-[11px] font-medium leading-none">Projects</span>
          </Link>
        </li>

        {/* Let's Build (FAB) */}
        <li className="w-full flex flex-col items-center justify-end relative">
          <Link
            to="/contact"
            className="absolute -top-10 bg-[#f5f5f5] rounded-full p-3 shadow-md z-10"
          >
            <FontAwesomeIcon
              icon={faHammer}
              className="text-2xl text-[#212121]"
            />
          </Link>
          <span className="text-[11px] font-medium leading-none pt-6">
            Let&apos;s Build
          </span>
        </li>

        {/* Estimator */}
        <li className="w-full flex flex-col items-center justify-center">
          <Link
            to="/cost-estimator"
            className="flex flex-col items-center justify-center text-gray-700 hover:text-black transition duration-150"
          >
            <FontAwesomeIcon icon={faIndianRupee} className="text-xl mb-1" />
            <span className="text-[11px] font-medium leading-none">
              Estimator
            </span>
          </Link>
        </li>

        {/* More Menu */}
        <li className="w-full flex flex-col items-center justify-center">
          <Menu as="div" className="relative">
            <MenuButton className="flex flex-col items-center justify-center text-gray-700 hover:text-black transition duration-150">
              <FontAwesomeIcon icon={faBars} className="text-xl mb-1" />
              <span className="text-[11px] font-medium leading-none">More</span>
            </MenuButton>

            <MenuItems
              className="fixed bottom-14 left-0 w-full px-6 pb-4 space-y-4 bg-white border-t border-gray-300 rounded-t-xl shadow-lg z-[999] text-[15px] tracking-wide"
            >
              {[
                { name: "Home", to: "/#top" },
                { name: "How it Works", to: "/#how-it-works" },
                { name: "Our Projects", to: "/#our-projects" },
                { name: "Cost Estimator", to: "/cost-estimator" },
                { name: "Material Estimator", to: "/cost-estimator" },
                { name: "Floor Plans", to: "/UnderCons" },
                { name: "FAQs", to: "/faqs" },
                { name: "About Us", to: "/about" },
                { name: "Contact Us", to: "/contact" },
                { name: "Reviews", to: "/#Reviews" },
                { name: "Our Team", to: "/team" },
              ].map((item) => (
                <MenuItem key={item.name}>
                  {() => (
                    <Link
                      to={item.to}
                      className="block text-gray-800 font-medium hover:text-[#D2042D] transition no-underline"
                    >
                      {item.name}
                    </Link>
                  )}
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </li>
      </ul>
    </div>
  );
}

export default FooterTabs;
