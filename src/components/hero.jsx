import React from "react";
import photo from "../assets/aashishcollege.jpg";
import {
  FaFacebook,
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { TbBrandUpwork } from "react-icons/tb";
import aashishcv from "../assets/aashishcv.pdf";
import { Link } from "react-router-dom";

const Hero = () => {
  function openPDF() {
    var pdfURL = aashishcv;
    var win = window.open(pdfURL, "_blank");
    if (!win || win.closed || typeof win.closed == "undefined") {
      window.location.href = pdfURL;
    }
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 mx-auto md:flex-row sm:px-6 p-8 bg-white md:py-20 py-10 overflow-hidden hero-container">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-left">
          <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-black sm:text-5xl sm:leading-none md:text-6xl animate-fadeIn">
            Hi, I'm <span className="text-blue-500">Aashish Timsina</span>
          </h1>
          <p className="mt-3 text-base text-black font-bold sm:text-lg md:mt-5 md:text-xl transition-all duration-300 hover:text-gray-700 animate-fadeIn">
            Mern Stack Developer
          </p>
          <p className="mt-3 text-base text-gray-700 sm:text-lg md:mt-5 md:text-xl transition-all duration-300 hover:font-bold animate-fadeIn">
            Hello! I'm Aashish Timsina, a dedicated and creative developer who
            thrives on transforming ideas into seamless digital experiences.
            With a strong foundation in frontend development and a constant
            hunger for learning, I am committed to pushing the boundaries of
            what's possible in the digital landscape.
          </p>
          <div className="mt-5 sm:flex md:mt-8 animate-bounce">
            <div className="rounded-md shadow">
              <Link
                to="/contact"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
              >
                Hire Me
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <button
                onClick={openPDF}
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-blue-500 rounded-md hover:bg-blue-50 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
              >
                My CV
              </button>
            </div>
          </div>
          <div className="flex gap-4 mt-4 sm:mt-12 lg:mt-12 pb-8 justify-center lg:justify-start text-3xl sm:text-5xl lg:text-6xl animate-pulse">
            <a
              href="https://www.facebook.com/profile.php?id=100053096056726"
              className="transition-transform transform hover:scale-110"
            >
              <FaFacebook className="text-blue-500 rounded-full hover:text-blue-600" />
            </a>
            <a
              href="https://www.instagram.com/timsinaaashish6/"
              className="transition-transform transform hover:scale-110"
            >
              <FaInstagramSquare className="text-pink-500 rounded-md hover:text-purple-600" />
            </a>
            <a
              href="https://github.com/aashish0241"
              className="transition-transform transform hover:scale-110"
            >
              <FaGithubSquare className="text-black rounded-md hover:text-gray-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/aashish-timsina-663ab02a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="transition-transform transform hover:scale-110"
            >
              <FaLinkedin className="text-blue-500 rounded-md hover:text-blue-700" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01d263ff08e4a7d498"
              className="transition-transform transform hover:scale-110"
            >
              <TbBrandUpwork className="text-green-500 rounded-full hover:text-green-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded md:p-8 hero-image-container">
          <div
            data-aos="flip-left"
            className="w-full flex justify-center items-center rounded-lg bg-transparent text-black"
          >
            <img
              src={photo}
              alt="Aashish Timsina"
              className="w-full h-auto max-w-xs md:max-w-sm rounded-lg shadow-2xl shadow-red-400 transition-transform transform hover:scale-105 hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
