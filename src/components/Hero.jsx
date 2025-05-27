import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Hero() {
  const config = {
    subtitle: 'Front-End Developer',
    social: {
      github: 'https://github.com/GaneshMudaliar',
    },
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-white to-blue-50 pt-28 md:pt-36 text-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Hi, I'm <span className="text-blue-600">Ganesh Mudaliar</span>
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-gray-700">{config.subtitle}</p>

        {/* CTA and Social */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Contact Me
          </a>

          <a
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={36} />
          </a>
        </div>
      </div>
    </section>
  );
}
