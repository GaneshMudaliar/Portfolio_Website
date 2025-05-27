import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-nav text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Portfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-md font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setNavMenu(!navMenu)}
          aria-label="Toggle Menu"
        >
          {navMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {navMenu && (
        <ul className="lg:hidden flex flex-col items-center gap-6 py-8 bg-nav text-lg font-medium border-t border-white/20">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setNavMenu(false)}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
