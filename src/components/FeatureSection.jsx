import React, { useState, useEffect, useRef } from 'react';

const FeatureSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  const sectionRef = useRef(null);
  const paragraphRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsParagraphVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    return () => {
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current);
      }
    };
  }, []);

  return (
    <div id="feature-section" className="relative mt-35 border-b border-neutral-800 min-h-[400px]" ref={sectionRef}>
      <div className="text-left px-40">
        <h3 className="text-2xl sm:text-5xl lg:text-4xl mt-10 lg:mt-20 tracking-wide text-center bg-gradient-to-r from-orange-500 to-black-300 text-transparent bg-clip-text">
          About Me
        </h3>

        <h3 className="lg:text-2xl mt-5 text-lg bg-gradient-to-r from-red-500 to-black-900 text-transparent bg-clip-text">
          Introduction
        </h3>

        <p
          className={`mt-4 text-lg text-white transition-opacity transition-transform duration-1000 ${isParagraphVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          ref={paragraphRef}
        >
          Ever since I programmed and built my first blinker circuit with an Arduino and C++ code, I have been fascinated by the integration of software and hardware. This introduced me to mechatronics, where technology is used to develop efficient and practical machines. I am also interested in computer science as the computational logic and algorithms form the AI that makes robots smarter. My educational goal is to gain in-depth knowledge of engineering and computation by challenging myself at the University of Waterloo.
        </p>
        
        <h3 className="lg:text-2xl mt-5 text-lg bg-gradient-to-r from-red-500 to-black-900 text-transparent bg-clip-text">
          Interests
        </h3>

        {/* Hobbies List */}
        <ul className={`mt-6 list-disc pl-5 text-lg text-white transition-opacity transition-transform duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={listRef}>
          <li>Piano, Cooking & Baking, Volleyball, Hiking, Chess, Board Games, Movies</li>
        </ul>

        <h3 id="sts" className="lg:text-2xl mt-10 text-lg bg-gradient-to-r from-red-500 to-black-900 text-transparent bg-clip-text">
          Technical Skills
        </h3>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* First row of language boxes with logos */}
          <div className="flex items-center justify-center h-24 bg-gray-200 text-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <img src="/images/javascript-logo.png" alt="JavaScript" className="h-12 w-auto" />
            <span className="text-xl ml-2">JavaScript</span>
          </div>
          <div className="flex items-center justify-center h-24 bg-gray-200 text-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <img src="/images/python-logo.png" alt="Python" className="h-12 w-auto" />
            <span className="text-xl ml-2">Python</span>
          </div>
          <div className="flex items-center justify-center h-24 bg-gray-200 text-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <img src="/images/java-logo.png" alt="Java" className="h-12 w-auto" />
            <span className="text-xl ml-2">Java</span>
          </div>
          <div className="flex items-center justify-center h-24 bg-gray-200 text-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <img src="/images/cpp-logo.webp" alt="C++" className="h-12 w-auto" />
            <span className="text-xl ml-2">C++</span>
          </div>
          
          {/* Second row of language boxes with logos */}
          <div className="flex items-center justify-center h-24 bg-gray-200 text-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <img src="/images/React-logo.webp" alt="React" className="h-12 w-auto" />
            <span className="text-xl ml-2">React</span>
          </div>
          <div className="flex items-center justify-center h-24 bg-gray-200 text-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <img src="/images/tailwind-logo.png" alt="Tailwind CSS" className="h-12 w-auto" />
            <span className="text-xl ml-2">Tailwind CSS</span>
          </div>
          <div className="flex items-center justify-center h-24 bg-gray-200 text-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <img src="/images/flask-logo.png" alt="Flask" className="h-12 w-auto" />
            <span className="text-xl ml-2">Flask</span>
          </div>
          <div className="flex items-center justify-center h-24 bg-gray-200 text-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <img src="/images/Linux-Logo.png" alt="Linux" className="h-12 w-auto" />
            <span className="text-xl ml-2">Linux</span>
          </div>

          {/* Third row of language boxes with logos */}
          <div className="flex items-center justify-center h-24 bg-gray-200 text-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <img src="/images/raspberry-logo.png" alt="TypeScript" className="h-12 w-auto" />
            <span className="text-xl ml-2">Raspberry Pi</span>
          </div>
          <div className="flex items-center justify-center h-24 bg-gray-200 text-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <img src="/images/arduino-logo.png" alt="Ruby" className="h-12 w-auto" />
            <span className="text-xl ml-2">Arduino</span>
          </div>
          <div className="flex items-center justify-center h-24 bg-gray-200 text-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <img src="/images/kivy-logo.png" alt="Go" className="h-12 w-auto" />
            <span className="text-xl ml-2">Kivy</span>
          </div>
          <div className="flex items-center justify-center h-24 bg-gray-200 text-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <img src="/images/Matlab_Logo.png" alt="Swift" className="h-12 w-auto" />
            <span className="text-xl ml-2">MATLAB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
