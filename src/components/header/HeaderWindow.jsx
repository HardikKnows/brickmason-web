import logo from "../../assets/logo.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

function HeaderWindow() {
  return (
    <div className="hidden shadow-md sticky top-0 flex-row py-1  z-50 lg:flex  bg-[#1B5A67] h-24">
      <div className="px-8 xl:px-40">
        <img className="max-h-16 bg-[#fff]" src={logo} alt="Brand Logo" />
      </div>
      <div className="ps-238 pt-5 text-[#ffffff]">
        <a
          className="quicksand  px-1 mx-3 b-1   xl:text-lg hover:text-[#fc7404]"
          href="#"
        >
          OUR PROJECTS
        </a>
        <a
          className="px-1 me-3 b-1 quicksand font-light xl:text-lg hover:text-[#fc7404]"
          href="#"
        >
          COST ESTIMATOR
        </a>
        <a
          className=" px-1 me-3 b-1 quicksand font-light xl:text-lg hover:text-[#fc7404]"
          href="#"
        >
          HOW IT WORKS
        </a>
        <a
          className="px-1 me-3 b-1 quicksand font-light xl:text-lg hover:text-[#fc7404]"
          href="#"
        >
          OUR SERVICES
        </a>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center px-3 py-2 xl:text-lg quicksand hover:text-[#fc7404]">
              MORE
              <svg
                class="-mr-1 h-7 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-1 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                {({ focus }) => (
                  <a
                    href="#"
                    className={classNames(
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Material Estimator
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <a
                    href="#"
                    className={classNames(
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Floor Plans
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <a
                    href="#"
                    className={classNames(
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    FAQs
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <a
                    href="#"
                    className={classNames(
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    About Us
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <a
                    href="#"
                    className={classNames(
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Contact Us
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <a
                    href="#"
                    className={classNames(
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Reviews
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <a
                    href="#"
                    className={classNames(
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Our Team
                  </a>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
      <div className="ps-10 pt-4">
        <div className="relative delay-700 bg-[#BF360C] text-white px-4 py-1 shadow-lg  hover:before:translate-y-1 hover:shadow-none before:content-[''] hover:before:hidden before:absolute before:-bottom-1 before:-right-1 before:w-full before:h-full  before:bg-gray-400 before:z-[-1]">
          <a className=" font-sans font-light text-lg   ">
            Let's Build
          </a>
        </div>
      </div>
    </div>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default HeaderWindow;
