import React from "react";
import {
  FaDesktop,
  FaMobileAlt,
  FaCode,
  FaServer,
  FaDatabase,
  FaPlug,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaDesktop className="text-5xl text-blue-500" />,
    title: "Web App Development",
    description:
      "Creating fully customized web applications from scratch to meet your unique requirements.",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-green-500" />,
    title: "Responsive Design",
    description:
      "Designing websites and web applications that adapt to various devices and screen sizes.",
  },
  {
    icon: <FaCode className="text-5xl text-yellow-500" />,
    title: "Front-End Development",
    description:
      "Building user-friendly interfaces and experiences using modern front-end technologies.",
  },
  {
    icon: <FaServer className="text-5xl text-red-500" />,
    title: "Back-End Development",
    description:
      "Developing robust server-side solutions to handle data storage, authentication, and more.",
  },
  {
    icon: <FaDatabase className="text-5xl text-purple-500" />,
    title: "Database Design",
    description:
      "Designing and optimizing databases to ensure efficient data storage and retrieval.",
  },
  {
    icon: <FaPlug className="text-5xl text-indigo-500" />,
    title: "API Development",
    description:
      "Creating APIs for seamless communication between front-end and back-end systems.",
  },
];

const Service = () => {
  return (
    <section className="overflow-hidden pt-8 pb-16 bg-gradient-to-r from-teal-400 to-blue-600 dark:bg-dark">
     
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-4">My Services</h1>
        <p className="text-lg font-semibold text-white">
          Expertise That Powers Your Web Success
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
            data-aos="fade-up"
            aria-labelledby={`service-title-${index}`}
            aria-describedby={`service-desc-${index}`}
          >
            <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <div className="flex justify-center p-6 bg-white">
                {card.icon}
              </div>
              <div className="flex flex-col justify-between px-6 py-4">
                <h2
                  id={`service-title-${index}`}
                  className="text-xl font-semibold mb-2 text-center text-gray-800"
                >
                  {card.title}
                </h2>
                <p
                  id={`service-desc-${index}`}
                  className="text-gray-600 text-center"
                >
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
