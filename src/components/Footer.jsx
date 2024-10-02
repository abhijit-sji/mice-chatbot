import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4 w-full bottom-0 font-roboto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">

        <div>
          Copyright © 2024
        </div>

        {/* Social Media Icons */}
        <div className="space-x-3 flex text-lg">
          <button><FaFacebookSquare  /></button>
          <button><FaLinkedin /></button>
          <button><FaInstagramSquare /></button>
          <button><FaXTwitter /></button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
