import React, { useState } from 'react';
import myImage from '../images/logo.png';
import hamburger from '../images/hamburger.jpg';

function Menubar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 p-4 flex items-center justify-between z-50">
      <div className="flex items-center">
        <img src={myImage} alt="Logo" className="ml-24 w-40 h-20" />
      </div>
      <div className="hidden md:flex flex-grow justify-center">
        <ul className="flex space-x-6">
          <li><a href="#about" className="text-white font-bold hover:text-gray-400">About</a></li>
          <li><a href="#skills" className="text-white font-bold hover:text-gray-400">Skills</a></li>
          <li><a href="#experience" className="text-white font-bold hover:text-gray-400">Experience</a></li>
          <li><a href="#education" className="text-white font-bold hover:text-gray-400">Education</a></li>
          <li><a href="#projects" className="text-white font-bold hover:text-gray-400">Projects</a></li>
       </ul>
      </div>
      <button className="block md:hidden focus:outline-none" onClick={toggleMenu}>
        <img src={hamburger} alt="Hamburger Menu" className="w-6 h-6" />
      </button>
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-900 md:hidden">
          <li><a href="#about" className="block py-2 text-center text-white font-bold hover:text-gray-400">About</a></li>
          <li><a href="#skills" className="block py-2 text-center text-white font-bold hover:text-gray-400">Skills</a></li>
          <li><a href="#experience" className="block py-2 text-center text-white font-bold hover:text-gray-400">Experience</a></li>
          <li><a href="#education" className="block py-2 text-center text-white font-bold hover:text-gray-400">Education</a></li>
          <li><a href="#projects" className="block py-2 text-center text-white font-bold hover:text-gray-400">Projects</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Menubar;
