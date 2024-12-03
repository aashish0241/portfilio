import React from "react";
import Laptop from "../assets/udemycertificate.jpg";
import School from "../assets/school.png";
import NodeJS from "../assets/nodejscertificate.png";
import MYSQL from "../assets/sqlcertificate.png";

// Certificate data
const cards = [
  {
    image: Laptop,
    title: "Udemy Certificate of MERN Stack",
    description:
      "Creating fully customized web applications from scratch to meet your unique requirements.",
    link: "https://www.udemy.com/certificate/UC-b3bbdde9-5545-411f-b9ae-a4f3ef360761/",
  },
  {
    image: School,
    title: "School Event and Library with Admin Panel",
    description:
      "Designing websites and web applications that adapt to various devices and screen sizes.",
    link: "http://bindhyeshwori.netlify.app/",
  },
  {
    image: NodeJS,
    title: "Certificate of NodeJS from HackerRank",
    description:
      "Covers topics like Package Management, Event Loop, Buffers, Streams, and File Systems.",
    link: "https://www.hackerrank.com/certificates/081d9eea2337",
  },
  {
    image: MYSQL,
    title: "Certificate of SQL from HackerRank",
    description:
      "Covers topics like queries, relationships, and aggregators.",
    link: "https://www.hackerrank.com/certificates/081d9eea2337",
  },
];

// Certificate component
const Certificate = () => {
  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 bg-gradient-to-r from-teal-200 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">My Certificates</h1>
          <p className="text-lg text-white mt-2">
            Explore my achievements and projects
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative rounded-lg overflow-hidden bg-white border-2 dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {card.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {card.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center text-center p-4">
                  <p className="text-white text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
