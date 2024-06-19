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
    <section className="overflow-hidden pt-1 pb-12 lg:pt-[10px]  bg-[#a392b4] lg:pb-[90px] dark:bg-dark">
      <div
        data-aos="zoom-in-up"
        className="overflow-hidden pt-2 pb-12 lg:pt-[12px]  bg-[#a392b4] lg:pb-[90px] dark:bg-dark"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mt-7 text-white">My Services</h1>
          <p className=" lg:text-5xl sm:text-3xl font-bold text-[#0cf5b3]">
            Expertise That Powers Your Web Success
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
              data-aos="flip-right"
            >
              <div className="flex flex-col h-full bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <div className="flex justify-center p-4">{card.icon}</div>
                <div className="flex flex-col justify-between px-6 py-4 h-full">
                  <h2 className="text-2xl font-bold mb-2 text-center text-white">
                    {card.title}
                  </h2>
                  <p className="text-gray-300 text-center">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
