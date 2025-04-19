import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social links
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/aashish0241",
      hoverColor: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/aashish-timsina-663ab02a8",
      hoverColor: "hover:text-[#0077b5]",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/profile.php?id=100053096056726",
      hoverColor: "hover:text-[#1877f2]",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:timsinaaashish6@gmail.com",
      hoverColor: "hover:text-primary-400",
    },
    {
      name: "Phone",
      icon: <FaPhone />,
      url: "tel:+9779861524169",
      hoverColor: "hover:text-green-400",
    },
  ];

  return (
    <footer className="bg-dark-900 border-t border-primary-500/10 relative overflow-hidden">
      {/* Glowing orbs */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full filter blur-[80px]"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full filter blur-[80px]"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and tagline */}
          <div className="flex flex-col">
            <div className="text-2xl font-bold font-code tracking-tighter mb-4">
              <span className="text-primary-400">&lt;</span>
              <span className="gradient-text">AASHISH</span>
              <span className="text-primary-400">/&gt;</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building robust backend solutions and full-stack applications with
              a focus on clean code, performance, and scalability.
            </p>

            {/* Social icons */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 flex items-center justify-center rounded-full bg-dark-800 text-gray-400 border border-dark-700 ${link.hoverColor} transition-colors`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-light-100 font-medium text-lg mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/service" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.path}
                  className="block text-gray-400 hover:text-primary-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-light-100 font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mr-3 text-primary-400 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <span>Tallakot, Pokhara-kaski, Nepal 33700</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary-400 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </span>
                <span>timsinaaashish6@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary-400 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </span>
                <span>(+977) 9861524169</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Aashish Timsina. All rights reserved.
          </p>

          <div className="text-xs text-gray-500">
            <span className="font-code">
              /* Designed and built with passion */
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
