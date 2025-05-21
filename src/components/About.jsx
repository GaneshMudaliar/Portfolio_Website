import React from 'react';
import AboutImg from '../assets/about.png';

const About = () => {
  const content = {
    title: 'About Me',
    line1: 'Hi, my name is Ganesh Mudaliar from Ahmedabad, and I’m a Full Stack Web Developer.',
    line2: 'I’m passionate about coding, problem-solving, learning new technologies, and exploring the latest in web development.',
    line3: 'I have a strong foundation in front-end and back-end technologies such as HTML, CSS, JavaScript, React, Express, MongoDB, and Node.js.',
    line4: 'Other skills: Redux, REST APIs, MVC, MySQL, Responsive Design.'
  };

  return (
    <section id="about" className="text-blue py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={AboutImg}
            alt="Ganesh Mudaliar"
            className="w-64 sm:w-80 md:w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{content.title}</h2>
          <p className="mb-4 text-base sm:text-lg leading-relaxed">{content.line1}</p>
          <p className="mb-4 text-base sm:text-lg leading-relaxed">{content.line2}</p>
          <p className="mb-4 text-base sm:text-lg leading-relaxed">{content.line3}</p>
          <p className="mb-4 text-base sm:text-lg leading-relaxed">{content.line4}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
