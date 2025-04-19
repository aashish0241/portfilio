import { motion } from "framer-motion";
import TechBackground from "./TechBackground";
import {
  FaDesktop,
  FaMobileAlt,
  FaCode,
  FaServer,
  FaDatabase,
  FaPlug,
} from "react-icons/fa";

// Service card data
const services = [
  {
    icon: <FaDesktop className="h-10 w-10" />,
    title: "Web App Development",
    description:
      "Creating fully customized web applications from scratch to meet your unique requirements.",
    color: "primary",
  },
  {
    icon: <FaMobileAlt className="h-10 w-10" />,
    title: "Real-Time Communication System",
    description:
      "Developing real-time communication systems for instant messaging, video, and audio sharing, enhancing user interactions.",
    color: "pink",
  },
  {
    icon: <FaCode className="h-10 w-10" />,
    title: "Front-End Development",
    description:
      "Building user-friendly interfaces and experiences using modern front-end technologies.",
    color: "primary",
  },
  {
    icon: <FaServer className="h-10 w-10" />,
    title: "Back-End Development",
    description:
      "Developing robust server-side solutions to handle data storage, authentication, and more.",
    color: "pink",
  },
  {
    icon: <FaDatabase className="h-10 w-10" />,
    title: "Database Design",
    description:
      "Designing and optimizing databases to ensure efficient data storage and retrieval.",
    color: "primary",
  },
  {
    icon: <FaPlug className="h-10 w-10" />,
    title: "API Development",
    description:
      "Creating APIs for seamless communication between front-end and back-end systems.",
    color: "pink",
  },
];

// Individual service card component
const ServiceCard = ({ service, index }) => {
  const isPrimary = service.color === "primary";

  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className={`glass-card h-full rounded-2xl p-6 border border-${
          isPrimary ? "primary" : "pink"
        }-500/10 relative overflow-hidden`}
        whileHover={{
          y: -10,
          boxShadow: `0 0 20px rgba(${
            isPrimary ? "0, 255, 195" : "255, 0, 122"
          }, 0.2)`,
          borderColor: `rgba(${
            isPrimary ? "0, 255, 195" : "255, 0, 122"
          }, 0.3)`,
        }}
      >
        {/* Background gradient */}
        <div
          className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-10 bg-${
            isPrimary ? "primary" : "pink"
          }-500 blur-2xl`}
        ></div>

        {/* Service icon with animated container */}
        <motion.div
          className={`relative w-20 h-20 rounded-2xl mb-6 flex items-center justify-center bg-dark-800 ${
            isPrimary ? "text-primary-400" : "text-pink-500"
          } border border-${isPrimary ? "primary" : "pink"}-500/20`}
          whileHover={{
            rotate: 5,
            scale: 1.05,
          }}
        >
          {service.icon}
          {/* Corner accent */}
          <div
            className={`absolute -top-1 -right-1 w-3 h-3 ${
              isPrimary ? "bg-primary-500" : "bg-pink-500"
            } rounded-full animate-pulse`}
          ></div>
        </motion.div>

        {/* Service title */}
        <h3 className="text-xl font-bold mb-3 text-light-100">
          {service.title}
        </h3>

        {/* Service description */}
        <p className="text-gray-400 text-sm mb-4">{service.description}</p>

        {/* Learn more indicator */}
        <div
          className={`flex items-center text-sm ${
            isPrimary ? "text-primary-400" : "text-pink-500"
          } mt-auto`}
        >
          <span className="mr-2">Learn more</span>
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
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Services section component
const Services = () => {
  return (
    <section className="py-20 bg-dark-900 text-light-100 relative overflow-hidden">
      {/* Background elements */}
      <TechBackground />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full filter blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary-400 mb-2 block">
            What I Offer
          </span>
          <h2 className="text-4xl font-bold gradient-text mb-4">My Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expertise that powers your digital success with innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 border border-primary-500/10">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-400 mb-6">
              Whether you need a complete web application, API development, or
              database optimization, I'm ready to help bring your project to
              life with cutting-edge technologies.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-500 text-dark-900 font-medium hover:bg-primary-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating tech elements */}
      <motion.div
        className="absolute right-10 top-1/3 text-pink-500/10 font-code text-6xl opacity-30 hidden lg:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 0.3,
          y: [20, 0, 20],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        &lt;/&gt;
      </motion.div>

      <motion.div
        className="absolute left-10 bottom-1/4 text-primary-500/10 font-code text-6xl opacity-30 hidden lg:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 0.3,
          y: [-20, 0, -20],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {}
      </motion.div>
    </section>
  );
};

export default Services;
