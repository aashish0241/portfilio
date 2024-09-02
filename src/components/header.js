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
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  {/* You can replace this with an actual logo image if available */}
                  <span className="text-white text-xl font-bold">AASHISH</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.route}
                      className={classNames(
                        location.pathname === item.route
                          ? "bg-blue-900 text-white"
                          : "text-white hover:bg-blue-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                      )}
                      aria-current={location.pathname === item.route ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
                  aria-label="Toggle navigation menu"
                >
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.route}
                  className={classNames(
                    location.pathname === item.route
                      ? "bg-blue-900 text-white"
                      : "text-gray-300 hover:bg-blue-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  )}
                  onClick={() => close()}
                  aria-current={location.pathname === item.route ? "page" : undefined}
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
