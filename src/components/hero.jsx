import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import TechBackground from "./TechBackground";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { TbBrandUpwork } from "react-icons/tb";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const roles = useMemo(
    () => [
      "Backend Developer",
      "Node.js Expert",
      "API Architect",
      "Full Stack Developer",
    ],
    []
  );
  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    if (isTyping) {
      if (charIndex < currentRole.length) {
        const timeout = setTimeout(() => {
          setTypedText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 200);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 5000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setTypedText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
      }
    }
  }, [charIndex, isTyping, currentRoleIndex, roles]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const openCV = () => {
    window.open("/src/assets/aashishcv.pdf", "_blank");
  };

  return (
    <section className="min-h-screen py-20 bg-dark-900 text-light-100 relative overflow-hidden flex items-center">
      {/* Background elements */}
      <TechBackground />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full filter blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content - Left side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-sm uppercase tracking-widest text-primary-400 mb-4 flex items-center">
              <span className="inline-block w-10 h-[1px] bg-primary-400 mr-3"></span>
              Welcome to my portfolio
            </h4>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Aashish Timsina</span>
            </h1>

            <div className="text-xl md:text-2xl font-medium mb-6 h-8 flex items-center">
              <span className="text-light-100">{typedText}</span>
              <span
                className={`ml-1 inline-block w-2 h-6 bg-primary-400 ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            </div>

            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              I'm a backend developer specializing in building scalable, secure,
              and efficient server-side systems. With expertise in MongoDB,
              Express.js, Node.js, MySQL, and other cutting-edge technologies, I
              create solutions that power seamless digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <motion.button
                onClick={() => (window.location.href = "/contact")}
                className="px-6 py-3 bg-primary-500 text-dark-900 rounded-lg font-medium flex items-center transition-all hover:bg-primary-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
                <FaArrowRight className="ml-2" />
              </motion.button>

              <motion.button
                onClick={openCV}
                className="px-6 py-3 bg-dark-800 text-primary-400 rounded-lg font-medium border border-primary-500/40 flex items-center transition-all hover:bg-dark-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
                <FaDownload className="ml-2" />
              </motion.button>
            </div>

            {/* Social icons */}
            <div className="flex gap-5 mt-8">
              <motion.a
                href="https://www.facebook.com/profile.php?id=100053096056726"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-800 border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <FaFacebook />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/timsinaaashish6/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-800 border border-pink-500/20 flex items-center justify-center text-gray-400 hover:text-pink-500 hover:border-pink-500/50 transition-all"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                href="https://github.com/aashish0241"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-800 border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-light-100 hover:border-light-100/50 transition-all"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/aashish-timsina-663ab02a8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-800 border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:border-[#0077b5]/50 transition-all"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="https://www.upwork.com/freelancers/~01d263ff08e4a7d498"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-800 border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-[#6fda44] hover:border-[#6fda44]/50 transition-all"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <TbBrandUpwork />
              </motion.a>
            </div>
          </motion.div>

          {/* Image - Right side */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Profile Image with glow effects */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-primary-500/30 animate-pulse-border">
                <img
                  src="/src/assets/aashishcollege.jpg"
                  alt="Aashish Timsina"
                  className="w-full max-w-lg object-cover rounded-xl z-10"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-dark-900/80 via-transparent to-transparent mix-blend-overlay"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-pink-500/50 rounded-tr-xl"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-primary-500/50 rounded-bl-xl"></div>

              {/* Glow effects */}
              <div className="absolute -inset-4 bg-primary-500/5 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-pink-500/5 rounded-full filter blur-xl"></div>

              {/* Floating tech badges */}
              <motion.div
                className="absolute -left-10 top-1/4 glass-card px-4 py-2 rounded-lg text-primary-400 border border-primary-500/20 text-sm font-code z-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                &lt;Node.js/&gt;
              </motion.div>

              <motion.div
                className="absolute -right-5 bottom-1/4 glass-card px-4 py-2 rounded-lg text-pink-400 border border-pink-500/20 text-sm font-code z-20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                &lt;MongoDB/&gt;
              </motion.div>

              <motion.div
                className="absolute top-0 right-1/3 glass-card px-4 py-2 rounded-lg text-primary-400 border border-primary-500/20 text-sm font-code z-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                &lt;Express.js/&gt;
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: [0.3, 1, 0.3],
            y: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <span className="text-xs uppercase tracking-widest mb-2">
            Scroll Down
          </span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
