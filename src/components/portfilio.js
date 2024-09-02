import React from "react";
import Laptop from "../assets/laptop.jpg";
import School from "../assets/school.png";
import Findjob from "../assets/jobfinderimage.png";

const cards = [
  {
    image: Laptop,
    title: "School Student Note Website",
    description:
      "Creating fully customized web applications from scratch to meet your unique requirements.",
    link: "https://aashish4756.blogspot.com",
  },
  {
    image: Findjob,
    title: "Find Job for Worker",
    description:
      "Helping workers find suitable job opportunities through a streamlined platform.",
    link: "https://jobfindernepal.netlify.app/find-jobs",
  },
  {
    image: School,
    title: "School Event and Library with Admin Panel",
    description:
      "A comprehensive system for managing school events and library resources with an admin panel.",
    link: "http://bindhyeshwori.netlify.app/",
  },
];

const Portfilio = () => {
  return (
    <section className="pt-10 pb-16 bg-[#f0f4f8] bg-gradient-to-r from-teal-300 to-blue-600">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Portfolio
          </h1>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
            Check Out My Work in Various Categories
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer"
              className="relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 transition-transform transform hover:scale-105"
            >
              <div className="relative rounded-lg overflow-hidden bg-white shadow-lg dark:bg-gray-800 dark:shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <img
                  src={card.image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform transform hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center"
                >
                  <h2 className="text-xl font-semibold text-white mb-2">
                    {card.title}
                  </h2>
                  <p className="text-white">{card.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Not Hosted Projects Are Available on GitHub
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Check out my GitHub profile for more projects and code samples.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfilio;
