import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          Brand
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className={`md:flex items-center space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="text-white hover:text-gray-300 block md:inline">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300 block md:inline">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-300 block md:inline">
            Services
          </a>
          <a href="#" className="text-white hover:text-gray-300 block md:inline">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
