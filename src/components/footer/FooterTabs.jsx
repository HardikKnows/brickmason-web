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
    <div className="sticky bottom-0  py-2 bg-[#9E9E9E] pb-3 lg:hidden">
      <ul class="list-none grid grid-cols-5 px-3">
        <li>
          <a href="#" class="flex flex-col text-[#212121] hover:text-[#FAFAFA]">
            <div>
              <FontAwesomeIcon icon={faHouse} className="pb-2 text-xl" />
            </div>
            <p className="font-sans text-xs/5 whitespace-nowrap tracking-tighter">
              Home
            </p>
          </a>
        </li>
        <li>
          <a href="#" class="flex flex-col text-[#212121] hover:text-[#FAFAFA]">
            <div>
              <FontAwesomeIcon
                icon={faBuildingShield}
                className="pb-2 text-xl"
              />
            </div>
            <p className="font-sans text-xs/5 whitespace-nowrap tracking-tighter">
              Our Projects
            </p>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex flex-col justify-center text-[#212121] hover:text-[#FAFAFA]"
          >
            <div className=" ">
              <FontAwesomeIcon
                icon={faHammer}
                className=" text-[#1d1a12] pb-2 text-xl"
              />
            </div>
            <div className=" flex justify-center">
              <div className="absolute -top-5 rounded-full shadow-md shadow- bg-[#9E9E9E] h-14 w-14 z-10">
                <FontAwesomeIcon
                  icon={faHammer}
                  className=" text-[#212121] text-3xl pt-3 hover:text-[#FAFAFA] "
                />
              </div>
            </div>
            <p className="justify-bottom font-sans align-bottom text-xs/5 whitespace-nowrap tracking-tighter">
              Let's Build
            </p>
          </a>
        </li>
        <li>
          <a href="#" class="flex flex-col text-[#212121] hover:text-[#FAFAFA]">
            <div>
              <FontAwesomeIcon icon={faIndianRupee} className="pb-2 text-xl" />
            </div>
            <p className="font-sans text-xs/5 whitespace-nowrap tracking-tighter">
              Cost Estimator
            </p>
          </a>
        </li>
        <li>
          <Menu as="a" className="inline-block text-[#212121]  hover:text-[#FAFAFA]">
            <div>
              <MenuButton className=" justify-center xl:text-lg ">
                <div>
                  <FontAwesomeIcon icon={faBars} className="text-xl pb-2" />
                </div>
                <p className="font-sans text-xs/5 whitespace-nowrap tracking-tighter">
                  More
                </p>
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute left-0 bottom-20 text-left max-h-screen mt-1 font-semibold  w-full origin-top-right bg-white  ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
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
                      Home
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
                      How it Works
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
                      Our Projects
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
                      Cost Estimator
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
        </li>
      </ul>
    </div>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default FooterTabs;
