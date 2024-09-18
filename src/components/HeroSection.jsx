import React from 'react';
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { FiDownload } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <div id="start" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <span className="typing-animation">
          Developer Portfolio
        </span>
        <span className="bg-gradient-to-r from-red-500 to-red-900 text-transparent bg-clip-text">
          {" "}
          Aumkar Mali
        </span>
      </h1>
     
      <div className="flex justify-center my-10">
        <a
          href="https://github.com/AumkarMali?tab=repositories"
          className="bg-gradient-to-r from-blue-500 to-black-800 py-3 px-5 mx-3 rounded-md"
        >
          <span className="typing-animation">GitHub</span>
        </a>
        <a
          href="https://www.youtube.com/@Code-Genius"
          className="bg-gradient-to-r from-red-500 to-black-800 py-3 px-4 mx-3 rounded-md"
        >
          <span className="typing-animation">Youtube</span>
        </a>
        <a
          className="bg-gradient-to-r from-orange-500 to-black-800 py-3 px-4 mx-3 rounded-md flex items-center justify-center text-white"
          href="../assets/resume.pdf"
          download="Resume" 
        >
          <FiDownload className="mr-2" />
          <span className="typing-animation">Resume</span>
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
