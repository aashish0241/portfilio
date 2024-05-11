import React from "react";
import photo from "../assets/aashishphoto.png";
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
    // You can modify this URL to point to your PDF file
    var pdfURL = aashishcv;

    // Try to open the PDF in a new tab/window
    var win = window.open(pdfURL, "_blank");
    if (!win || win.closed || typeof win.closed == "undefined") {
      // Popup blocked, open the PDF in the current tab/window
      window.location.href = pdfURL;
    }
  }
  return (
    <div className="lg:flex sm:grid  pt-7 bg-[#2c292e] sm:p-6 md:p-8 lg:p-10">
      {/* Content goes here */}
      <div className="sm:pl-6 sm:pr-5 sm:ml-3 lg:pr-10 sm:justify-center sm:items-center sm:pt-9 text-center">
        <h1 className="text-6xl  5xl text-white font-bold sm:p-2">
          Hi, I'm <span className="text-blue-500">Aashish Timsina</span>
        </h1>
        <p className="pt-3 text-lg sm:text-lg lg:text-xl font-bold text-white">
          Mern Stack Developer
        </p>
        <p className="pt-3 text-lg sm:text-lg lg:text-xl text-white sm:px-2 ">
          Hello! I'm Aashish Timsina, a dedicated and creative developer who
          thrives on transforming ideas into seamless digital experiences. With
          a strong foundation in frontend development and a constant hunger for
          learning, I am committed to pushing the boundaries of what's possible
          in the digital landscape.
        </p>
        <div className="mt-4 sm:mt-8">
          <Link to="/contact">
            <button className="bg-dark dark:bg-dark-2 m-3 border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base sm:text-lg lg:text-xl font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5">
              Hire Me
            </button>
          </Link>
          <button
            onClick={() => {
              openPDF();
            }}
            className="bg-dark ml-3 bg-blue-700 border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base sm:text-lg lg:text-xl font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
          >
            My Cv
          </button>
        </div>

        <div className="flex gap-2 ml-4 sm:mt-8 lg:mt-12 pb-8 sm:ml-10 text-4xl sm:text-5xl lg:text-6xl">
          <a href="https://www.facebook.com/profile.php?id=100053096056726">
            <FaFacebook className="bg-blue- text-white rounded-[50%]" />
          </a>
          <a href="https://www.instagram.com/timsinaaashish6/">
            <FaInstagramSquare className="bg-purple-6 text-white rounded-[30%]" />
          </a>
          <a href="https://github.com/aashish0241">
            <FaGithubSquare className="bg-gray- text-white rounded-[30%]" />
          </a>
          <a href="https://www.linkedin.com/in/aashish-timsina-663ab02a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin className="text-white rounded-[30%]" />
          </a>
          <a href="https://www.upwork.com/freelancers/~01d263ff08e4a7d498">
            <TbBrandUpwork className="bg-green- text-white rounded-[50%]" />
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="sm:mt-8 lg:mt-0">
        <img
          src={photo}
          alt="fgjvn"
          className="border rounded-[50%] border-blue-500"
        />
      </div>
    </div>
  );
};

export default Hero;
