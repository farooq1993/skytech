import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sky Tech Technology</h3>
            <p className="text-gray-400">
              Innovative IT solutions for the modern business.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">IT Consulting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cybersecurity</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Managed IT</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              Deira - Dubai - UAE<br />
              <a href="mailto:info@skytech.com" className="hover:text-white">info@skytech.com</a><br />
              +971529158949
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sky Tech Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;