import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import logo from '../assets/skytech.jpeg';

const Navbar = () => {
  const [engServicesOpen, setEngServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);

  const engineeringServices = [
    { name: "Acoustic Engineering", href: "#acoustic" },
    { name: "MEP Engineering", href: "#mep" },
    { name: "Structural Engineering", href: "#structural" }
  ];

  const itServices = [
    { name: "Web & Mobile Development", href: "#web-dev" },
    { name: "Digital Marketing", href: "#marketing" },
    { name: "ERP Systems", href: "#erp" }
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Sky Tech Technology Logo"
              className="w-[180px] h-auto"
              style={{ minWidth: '120px' }} 
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {/* Engineering Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => {
                  setEngServicesOpen(!engServicesOpen);
                  setItServicesOpen(false);
                }}
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                Engineering Services
                <ChevronDownIcon className={`ml-1 h-5 w-5 transition-transform ${engServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {engServicesOpen && (
                <div className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {engineeringServices.map((service) => (
                      <a
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => {
                  setItServicesOpen(!itServicesOpen);
                  setEngServicesOpen(false);
                }}
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                IT Services
                <ChevronDownIcon className={`ml-1 h-5 w-5 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {itServicesOpen && (
                <div className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {itServices.map((service) => (
                      <a
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#about" className="text-gray-700 hover:text-blue-600">About Us</a>
            <a href="#clients" className="text-gray-700 hover:text-blue-600">Clients</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;