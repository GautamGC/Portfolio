import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent backdrop-filter backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="left-0">
            <a href="/" className="flex items-center space-x-2">
              <img className="h-8" src="logo.png" alt="Logo" />
            </a>
            <div className="left-0"></div>
          </div>
          <div className="flex-grow text-center text-base">
            <ul className="flex justify-center space-x-6">
              <li>
                <a href="/" className="text-white hover:text-gray-200 transition duration-300">Home</a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-gray-200 transition duration-300">About</a>
              </li>
              <li>
                <a href="/projects" className="text-white hover:text-gray-200 transition duration-300">Projects</a>
              </li>
              <li>
                <a href="/languages" className="text-white hover:text-gray-200 transition duration-300">Languages</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
