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
    title: "Find job for worker",
    description:
      "Creating fully customized web applications from scratch to meet your unique requirements.",
    link: "https://jobfindernepal.netlify.app/find-jobs",
  },

  {
    image: School,
    title: "School Event and Libary  with admin Panel",
    description:
      "Designing websites and web applications that adapt to various devices and screen sizes.",
    link: "http://bindhyeshwori.netlify.app/",
  },
];

const Portfilio = () => {
  return (
    <section className='className="overflow-hidden pt-1 pb-12 lg:pt-[10px] bg-[#c9cbda]   lg:pb-[90px] dark:bg-dark'>
      <div
        data-aos="fade-down"
        className="container mx-auto p-8 bg-[#c9cbda] overflow-hidden pt-1 pb-12 lg:pt-[10px]   lg:pb-[90px] dark:bg-dark"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mt-7 text-black">My Portfolio</h1>
          <p className="text-lg font-bold text-[#484acc]">
            Check Out My Work In Various Categories
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
                className="relative h-64 rounded-lg overflow-hidden"
                data-aos="fade-down"
              >
                <div>
                  <img
                    src={card.image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-[80%] object-cover"
                  />
                  <h2 className="text-2xl text-black font-bold mb-2">
                    {card.title}
                  </h2>
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-70 transition-opacity 
              duration-300 flex flex-col justify-center items-center text-black"
                  >
                    <p className="text-black text-center">{card.description}</p>
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

export default Portfilio;
