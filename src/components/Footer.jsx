import React from 'react';
import logo from '../assets/logo-220x44.jpg'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4 w-full bottom-0 font-roboto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        
        {/* Brand */}
        <img src={logo} alt="" />

        <div>
          Copyright © 2024
        </div>

        {/* Social Media Icons */}
        <div className="space-x-3 flex">
          <a href="#" className="hover:text-white">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.595 0 0 .593 0 1.324v21.351C0 23.408.595 24 1.324 24h11.483v-9.294H9.713v-3.622h3.094V8.411c0-3.066 1.874-4.736 4.61-4.736 1.311 0 2.438.097 2.765.141v3.206l-1.899.001c-1.49 0-1.779.71-1.779 1.748v2.291h3.558l-.463 3.622h-3.096V24h6.073c.729 0 1.324-.592 1.324-1.325V1.324C24 .593 23.408 0 22.675 0z" />
            </svg>
          </a>
          <a href="#" className="hover:text-white">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.95 3.66 9.06 8.44 9.88v-6.99h-2.54v-2.87h2.54v-2.19c0-2.49 1.48-3.88 3.74-3.88 1.09 0 2.22.19 2.22.19v2.43h-1.25c-1.23 0-1.62.77-1.62 1.56v1.9h2.76l-.44 2.87h-2.32v6.99c4.78-.82 8.44-4.93 8.44-9.88 0-5.5-4.46-9.96-9.96-9.96z" />
            </svg>
          </a>
          <a href="#" className="hover:text-white">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 4.328 9.655 9.601 9.944v-7.037h-2.887v-2.907h2.887v-2.213c0-2.86 1.747-4.423 4.297-4.423 1.221 0 2.27.091 2.575.132v2.98l-1.766.001c-1.381 0-1.649.657-1.649 1.619v2.126h3.302l-.531 2.907h-2.771v7.038c5.273-.289 9.601-4.642 9.601-9.944 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
