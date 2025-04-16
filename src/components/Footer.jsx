import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div>
            {/* <img src="/images/logo.png" alt="Sky Tech Technologies Logo" className="h-12 mb-4" /> */}
            <p className="text-gray-400 mb-2">Deira - Dubai - UAE</p>
            <p className="text-gray-400 mb-2">
              Mobile No: <br />
              +971529158949 / +971527579159
            </p>
            <p className="text-gray-400">
              Email: <a href="mailto:info@skytechme.com" className="hover:text-white">info@skytechme.com</a>
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaYoutube /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">IT Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">ERP System</a></li>
              <li><a href="#" className="hover:text-white">Mobile Application</a></li>
              <li><a href="#" className="hover:text-white">Web Development</a></li>
              <li><a href="#" className="hover:text-white">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Acoustics Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Acoustics</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">MEP Acoustics</a></li>
              <li><a href="#" className="hover:text-white">Environmental Noise Control</a></li>
              <li><a href="#" className="hover:text-white">Industrial Acoustics</a></li>
              <li><a href="#" className="hover:text-white">Architectural Acoustics</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Acoustic Services</a></li>
              <li><a href="#" className="hover:text-white">MEP Design</a></li>
              <li><a href="#" className="hover:text-white">Fuel Oil Systems</a></li>
              <li><a href="#" className="hover:text-white">Structural Design</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy & Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sky Tech Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
