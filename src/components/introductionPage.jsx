import { useState, useEffect, useRef } from 'react';

const IntroductionPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  const sectionRef = useRef(null);
  const paragraphRef = useRef(null);

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
      <div className="text-left px-5 sm:px-20 md:px-40">
        <h3 className="text-2xl sm:text-5xl lg:text-4xl mt-10 lg:mt-20 tracking-wide text-center">
          About Me
        </h3>

        <h3 className="lg:text-2xl mt-5 text-lg">
          Introduction
        </h3>

        <p
          className={`mt-4 text-lg text-white ${isParagraphVisible ? 'opacity-100' : 'opacity-0'}`}
          ref={paragraphRef}
        >
          Ever since I programmed and built my first blinker circuit with an Arduino and C++ code, I have been fascinated by the integration of software and hardware. This introduced me to mechatronics, where technology is used to develop efficient and practical machines. I am also interested in computer science as the computational logic and algorithms form the AI that makes robots smarter. My educational goal is to gain in-depth knowledge of engineering and computation by challenging myself at the University of Waterloo.
        </p>
        
        <h3 className="lg:text-2xl mt-5 text-lg">
          Interests
        </h3>

        {/* Hobbies List */}
        <ul className={`mt-6 list-disc pl-5 text-lg text-white ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <li>Piano, Cooking & Baking, Volleyball, Hiking, Chess, Board Games, Movies</li>
        </ul>

        <h3 id="sts" className="lg:text-2xl mt-10 text-lg">
          Technical Skills
        </h3>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { src: '/images/javascript-logo.png', alt: 'JavaScript', label: 'JavaScript' },
            { src: '/images/python-logo.png', alt: 'Python', label: 'Python' },
            { src: '/images/java-logo.png', alt: 'Java', label: 'Java' },
            { src: '/images/cpp-logo.webp', alt: 'C++', label: 'C++' },
            { src: '/images/React-logo.webp', alt: 'React', label: 'React' },
            { src: '/images/tailwind-logo.png', alt: 'Tailwind CSS', label: 'Tailwind CSS' },
            { src: '/images/flask-logo.png', alt: 'Flask', label: 'Flask' },
            { src: '/images/Linux-Logo.png', alt: 'Linux', label: 'Linux' },
            { src: '/images/raspberry-logo.png', alt: 'Raspberry Pi', label: 'Raspberry Pi' },
            { src: '/images/arduino-logo.png', alt: 'Arduino', label: 'Arduino' },
            { src: '/images/kivy-logo.png', alt: 'Kivy', label: 'Kivy' },
            { src: '/images/Matlab_Logo.png', alt: 'MATLAB', label: 'MATLAB' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center justify-center h-24 bg-gray-200 text-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
              <img src={item.src} alt={item.alt} className="h-12 w-auto" />
              <span className="text-xl mt-2">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
