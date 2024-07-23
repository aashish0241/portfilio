import React from "react";
import { useLocation } from "react-router-dom";
import "./about.css";
import Aashish from "../assets/aashish.jpg";
import AashishJersery from "../assets/aashishjersey.jpg";
import Back from "../assets/back.jpg";

const About1 = () => {
  const url = useLocation();

  return (
    <section
      data-aos="ease-out-back"
      className="about-section w-full overflow-hidden transition-all duration-3000 shadow-2xl shadow-red-300 pt-20 pb-12 pl-3 lg:pt-[120px] bg-[#ffff] lg:pb-[90px]"
    >
      <h2 className="flex justify-center items-center m-1 text-6xl font-bold text-black">
        About <span className="text-yellow-800 p-2">Me</span>
      </h2>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4" data-aos="fade-down">
                  <img
                    src={AashishJersery}
                    alt=""
                    className={`w-full rounded-2xl fade `}
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <img
                    data-aos="flip-right"
                    src={Back}
                    alt=""
                    className={`w-full rounded-2xl fade 
                   `}
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4" data-aos="flip-down">
                  <img
                    src={Aashish}
                    alt=""
                    className={`w-full rounded-2xl fade `}
                  />
                  <span className="absolute -right-7 -bottom-7 z-[-1]">
                    <svg
                      width={134}
                      height={106}
                      viewBox="0 0 134 106"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG content */}
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0" data-aos="fade-down">
              <h2 className="mb-5 text-4xl font-bold text-dark sm:text-[40px]/[48px] text-black">
                Mern Stack Developer
              </h2>
              <p className="mb-5 text-black text-xl text-body-color dark:text-dark-6">
                My journey in the world of development began with a curiosity to
                understand how technology shapes our lives.
              </p>
              <p className="mb-8 text-black text-xl text-body-color dark:text-dark-6">
                Starting with basic coding exercises, I quickly found my passion
                in frontend development – the art of crafting visually appealing
                and user-friendly interfaces that bridge the gap between users
                and technology.
              </p>
              <a href="/about">
                {url.pathname !== "/about" && (
                  <button className="about-button bg-blue-300 hover:bg-blue-500 m-3 border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base sm:text-lg lg:text-xl font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5">
                    Learn More
                  </button>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
