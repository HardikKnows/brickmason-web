import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBuildingShield,
  faHouse,
  faHammer,
  faIndianRupee,
} from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function FooterTabs() {
  return (
    <div className="sticky bottom-0 z-50 bg-[#f5f5f5] border-t border-gray-300 py-2 lg:hidden">
      <ul className="grid grid-cols-5 gap-1 text-center">
        <li>
          <a href="#" className="no-underline flex flex-col items-center text-gray-700 hover:text-black transition duration-150">
            <FontAwesomeIcon icon={faHouse} className="text-lg mb-1" />
            <span className="text-xs font-medium">Home</span>
          </a>
        </li>
        <li>
          <a href="#our-projects" className="no-underline flex flex-col items-center text-gray-700 hover:text-black transition duration-150">
            <FontAwesomeIcon icon={faBuildingShield} className="text-lg mb-1" />
            <span className="text-xs font-medium">Projects</span>
          </a>
        </li>
        <li className="relative -mt-6">
          <a href="#" className="no-underline flex flex-col items-center text-gray-700">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#f5f5f5] rounded-full p-3 shadow-md">
              <FontAwesomeIcon icon={faHammer} className="text-2xl text-[#212121]" />
            </div>
            <span className="pt-10 text-xs font-medium">Let's Build</span>
          </a>
        </li>
        <li>
          <a href="#" className="no-underline flex flex-col items-center text-gray-700 hover:text-black transition duration-150">
            <FontAwesomeIcon icon={faIndianRupee} className="text-lg mb-1" />
            <span className="text-xs font-medium">Estimator</span>
          </a>
        </li>
        <li>
          <Menu as="div" className="relative">
            <MenuButton className="no-underline flex flex-col items-center text-gray-700 hover:text-black transition duration-150">
              <FontAwesomeIcon icon={faBars} className="text-lg mb-1" />
              <span className="text-xs font-medium">More</span>
            </MenuButton>

            <MenuItems
              className="fixed bottom-14 left-0 w-full p-2 bg-white border-t border-gray-300 rounded-t-xl shadow-lg z-[999] transform transition-all duration-200 ease-out
             data-[leave]:opacity-0 data-[leave]:translate-y-2 data-[leave]:scale-95
             data-[enter]:opacity-100 data-[enter]:translate-y-0 data-[enter]:scale-100"
            >
              {[
                { name: "Home", href: "#" },
                { name: "How it Works", href: "#how-it-works" },
                { name: "Our Projects", href: "#our-projects" },
                { name: "Cost Estimator", href: "#cost-estimator" },
                { name: "Material Estimator", href: "#material-estimator" },
                { name: "Floor Plans", href: "#floor-plans" },
                { name: "FAQs", href: "#faqs" },
                { name: "About Us", href: "#about-us" },
                { name: "Contact Us", href: "#contact-us" },
                { name: "Reviews", href: "#reviews" },
                { name: "Our Team", href: "#our-team" },
              ].map((item) => (
                <MenuItem key={item.name}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={`no-underline block px-4 py-2 text-sm rounded ${
                        active ? "bg-gray-100 text-black" : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </a>
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
