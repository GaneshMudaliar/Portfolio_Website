import React, { useState } from 'react';
import {FaTimes ,  FaBars} from "react-icons/fa";

const Navbar = () => {

  const [navMenu , setnavMenu] = useState(false);


  
  return (
    <nav className='flex justify-between text-white px-8 py-8 w-full fixed top-0 overflow-hidden h-auto z-10 bg-nav'>
      <div className='text-xl font-bold'>
      GM
      </div>
      <div className='hidden lg:block'>
      <ul className='flex w-full items-center lg:flex-row lg:space-x-6'>
        <li className='text-md transition-all duration-300 p-1 md:p-0'>
        <a href="/#about">About</a>
        </li>

        <li className='text-md transition-all duration-300 p-1 md:p-0'>
        <a href="/#projects">Projects</a>
        </li>
        <li className='text-md transition-all duration-300 p-1 md:p-0'>
        <a href="/#contact">Contact</a>
        </li>

      </ul>
      </div>

      <button className='fixed outline-none top-9 right-6 lg:hidden' onClick={() => setnavMenu(!navMenu) }>
      {navMenu ?  <FaTimes /> : <FaBars /> }
     
      </button>

      {navMenu && 
      <ul className='flex flex-col py-8  space-y-2 w-full items-center justify-center '>
        <li className='text-md transition-all duration-300' 
        onClick={() => setnavMenu(!navMenu) }>
        <a href="/#about">About</a>
        </li>
        <li className='text-md transition-all duration-300' 
        onClick={() => setnavMenu(!navMenu) }>
        <a href="/#projects">Projects</a>
        </li>
        <li className='text-md transition-all duration-300'
        onClick={() => setnavMenu(!navMenu) }><a href="/#contact">Contact</a>
        </li>

      </ul>}
    </nav>
  )

}

export default Navbar;