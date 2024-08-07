

import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 flex flex-col items-center">
      <div className="text-center mb-4">
        <p className="text-xl font-bold mb-2">Supriya Samant</p>
        <div className="flex space-x-6 mb-4">
          <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-purple-500 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-purple-500 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-purple-500 transition-colors">Projects</a>
          <a href="#education" className="hover:text-purple-500 transition-colors">Education</a>
        </div>
      </div>
      <div className="flex space-x-6 mb-4">
        <a href="https://www.instagram.com/sketchyylife_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-2xl hover:text-purple-500 transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/samantsupriya335" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://github.com/supriya335" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-2xl hover:text-gray-400 transition-colors" />
        </a>
      </div>
      <p className="text-sm text-gray-400">© 2024 Supriya Samant. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

