import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", route: "/" },
  { name: "About Me", route: "/about" },
  { name: "My Skills", route: "/skills" },
  { name: "My Service", route: "/service" },
  { name: "My Portfolio", route: "/portfolio" },
  { name: "Contact Us", route: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-blue-800 shadow-md">
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-200">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block text-white font-bold h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block text-white font-bold h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <span className="text-white text-xl font-bold">AASHISH</span>
                </Link>
              </div>
              {/* Desktop navigation */}
              <div className="hidden sm:flex sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.route}
                      className={classNames(
                        location.pathname === item.route
                          ? "bg-gray-900 text-white"
                          : "text-white hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 text-sm font-medium rounded-md transition duration-200"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Notification button */}
            </div>
          </div>
          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.route}
                  className={classNames(
                    location.pathname === item.route
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium transition duration-200"
                  )}
                  onClick={() => close()}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
