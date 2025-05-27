import React from 'react';
import AboutImg from '../assets/about.png';

const About = () => {
  const content = {
    title: 'About Me',
    line1: 'Hi, my name is Ganesh Mudaliar from Ahmedabad, and I’m a Full Stack Web Developer.',
    line2: 'I’m passionate about coding, problem-solving, learning new technologies, and exploring the latest in web development.',
    line3: 'I have a strong foundation in front-end and back-end technologies such as HTML, CSS, JavaScript, React, Express, MongoDB, and Node.js.',
    line4: 'Other skills: Redux, REST APIs, MVC, MySQL, Responsive Design.',
  };

  return (
    <section id="about" className="bg-white text-gray-800 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src={AboutImg}
            alt="Ganesh Mudaliar"
            className="w-72 sm:w-96 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-blue-600">{content.title}</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>{content.line1}</p>
            <p>{content.line2}</p>
            <p>{content.line3}</p>
            <p>{content.line4}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
