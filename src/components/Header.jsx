import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Skills", route: "/skills" },
  { name: "Services", route: "/service" },
  { name: "Portfolio", route: "/portfolio" },
  { name: "Contact", route: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const location = useLocation(); // Corrected here
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-dark-900/90 backdrop-blur-md border-b border-primary-500/10 text-light-100 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              {" "}
              {/* Corrected href to to */}
              <motion.div
                className="flex items-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl font-bold font-code tracking-tighter">
                  <span className="text-primary-400">&lt;</span>
                  <span className="gradient-text">AASHISH</span>
                  <span className="text-primary-400">/&gt;</span>
                </span>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link key={item.name} to={item.route}>
                {" "}
                {/* Corrected href to to */}
                <motion.div
                  className={classNames(
                    "py-2 px-3 cursor-pointer rounded-lg relative",
                    location.pathname === item.route // Corrected check here
                      ? "text-primary-400 font-medium"
                      : "text-gray-400 hover:text-light-100 transition-colors"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {location.pathname === item.route && ( // Corrected check here
                    <motion.span
                      className="absolute inset-0 bg-primary-500/10 rounded-lg -z-10"
                      layoutId="navbar-indicator"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden flex items-center p-2 rounded-md text-light-100 hover:text-primary-400 focus:outline-none"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-dark-800 border-t border-primary-500/10 overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4 space-y-2">
          {navigation.map((item) => (
            <Link key={item.name} to={item.route}>
              {" "}
              {/* Corrected href to to */}
              <motion.div
                className={classNames(
                  "block px-4 py-3 rounded-lg cursor-pointer",
                  location.pathname === item.route // Corrected check here
                    ? "bg-primary-500/10 text-primary-400"
                    : "text-gray-400 hover:bg-dark-700 hover:text-light-100"
                )}
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
