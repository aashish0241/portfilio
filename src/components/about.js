import React from "react";
import { useLocation } from "react-router-dom";
import Aashish from "../assets/aashish.jpg";
import "./about.css";

const About1 = () => {
  const url = useLocation();

  return (
    <section
      data-aos="fade-up"
      className="about-section bg-white shadow-xl rounded-3xl p-8 lg:p-16 mx-4 lg:mx-0 my-12 lg:my-20 transition-all duration-500 hover:shadow-2xl"
    >
      <h2 className="text-center text-4xl lg:text-5xl font-extrabold text-gray-900 mb-12">
        About <span className="text-yellow-600">Me</span>
      </h2>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-6/12 mb-8 lg:mb-0">
            <div className="flex flex-wrap">
              <div className="w-full px-3">
                <img
                  src={Aashish}
                  alt="Aashish"
                  className="rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-500"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
             Backend Developer
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My journey in the world of development began with a curiosity to
              understand how technology shapes our lives. Starting with basic
              coding exercises, I quickly found my passion in backend
              development – the art of crafting visually appealing and
              user-friendly interfaces that bridge the gap between users and
              technology.
            </p>
            {url.pathname !== "/about" && (
              <a
                href="/about"
                className="inline-block bg-yellow-500 text-white font-semibold rounded-full py-3 px-8 text-lg hover:bg-yellow-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
