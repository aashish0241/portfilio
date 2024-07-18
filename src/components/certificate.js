import React from "react";
import Laptop from "../assets/udemycertificate.jpg";
import School from "../assets/school.png";
import NodeJS from "../assets/nodejscertificate.png";

const cards = [
  {
    image: Laptop,
    title: "Udemy Certificate of Mern Stack.",
    description:
      "Creating fully customized web applications from scratch to meet your unique requirements.",
    link: "https://aashish4756.blogspot.com",
  },
  {
    image: School,
    title: "School Event and Libary  with admin Panel",
    description:
      "Designing websites and web applications that adapt to various devices and screen sizes.",
    link: "http://bindhyeshwori.netlify.app/",
  },
  {
    image: NodeJS,
    title: "Certificate of Nodejs From Hacker Rank",
    description:
      "It covers topics like Package and Modules Management, Callbacks, Event Loop, Event Emitter, Buffers, Streams and File Systems.",
    link: "https://www.hackerrank.com/certificates/081d9eea2337",
  },
];

const Certificate = () => {
  return (
    <section className="overflow-hidden pt-1 pb-14 lg:pt-[10px] bg-gray-200  lg:pb-[90px] dark:bg-dark">
      <div
        data-aos="fade-down"
        className="container mx-auto p-8 bg-gray-200 overflow-hidden pt-1 pb-12 lg:pt-[10px]   lg:pb-[90px] dark:bg-dark"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mt-7 text-black">My Certificate</h1>
          <p className="text-lg font-bold text-[#4b7dd8]">
            Check Out My Work Progress in different sector
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer"
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 transition-transform transform hover:scale-105"
            >
              <div
                className="relative h-70 rounded-lg overflow-hidden shadow-2xl p-2"
                data-aos="fade-down"
              >
                <div>
                  <img
                    src={card.image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <h2 className="text-2xl h-auto text-black font-bold mb-2">
                    {card.title}
                  </h2>
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-70 transition-opacity 
              duration-300 flex flex-col justify-center items-center text-white"
                  >
                    <p className="text-gray-300 m-1 h-auto text-center">
                      {card.description}
                    </p>
                  </div>
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
