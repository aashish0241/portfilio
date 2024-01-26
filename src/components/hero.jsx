import React from 'react';
import photo from "../assets/aashishphoto.png";
import { FaFacebook, FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TbBrandUpwork } from "react-icons/tb";

const Hero = () => {
  return (
    <div className='lg:flex sm:grid sm:p-5 pt-7 bg-[#2c292e]'>
      {/* Content goes here */}
      <div className='sm:p-5 lg:p-10 justify-center items-center sm:pt-9'>
        <h1 className='text-4xl sm:text-5xl sm:p-2 sm:justify-center sm:items-center lg:text-6xl text-white font-bold'>
          Hi, I'm <span className='text-blue-500'>Aashish Timsina</span>
        </h1>
        <p className='pt-3 text-lg sm:text-xl lg:text-2xl font-bold text-white'>Mern Stack Developer</p>
        <p className='pt-3 text-lg sm:text-lg lg:text-xl text-white sm:px-2 '>
          Hello! I'm Aashish Timsina, a dedicated and creative developer who thrives on transforming ideas into seamless digital experiences. With a strong foundation in frontend development and a constant hunger for learning, I am committed to pushing the boundaries of what's possible in the digital landscape.
        </p>
        <div className='mt-4 sm:mt-8'>
          <button className='bg-dark dark:bg-dark-2 m-3 border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base sm:text-lg lg:text-xl font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
            Hire Me
          </button>
          <button className='bg-dark ml-3 bg-blue-700 border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base sm:text-lg lg:text-xl font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
            My Cv
          </button>
        </div>

        <div className='flex gap-2 mt-4 sm:mt-8 lg:mt-12 text-4xl sm:text-5xl lg:text-6xl sm:pl-0'>
          <a href="https://www.facebook.com/profile.php?id=100053096056726">
          <FaFacebook className='bg-blue- text-white  rounded-[50%]' />
          </a>
          <a href="https://www.instagram.com/timsinaaashish6/">
          <FaInstagramSquare className='bg-purple-6 text-white rounded-[30%]' />
          </a>
          <a href="https://github.com/aashish0241">
          <FaGithubSquare className='bg-gray- text-white rounded-[30%]' />
          </a>
          <a href="https://www.linkedin.com/in/aashish-timsina-663ab02a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FaLinkedin className=' text-white rounded-[30%]' />
          </a>
          <a href="https://www.upwork.com/freelancers/~01d263ff08e4a7d498">
          <TbBrandUpwork className='bg-green- text-white rounded-[50%]' />
          </a>
        </div>
      </div>

      {/* Image */}
      <div className='sm:mt-8 lg:mt-0'>
        <img src={photo} alt="fgjvn" className="border rounded-[50%] border-blue-500" />
      </div>
    </div>
  );
};

export default Hero;
