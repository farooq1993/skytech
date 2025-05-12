'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure axios is installed
import { useNavigate, Link } from 'react-router-dom';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '../assets/skytech.jpeg';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [itServices, setItServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchItServices = async () => {
      try {
        const response = await axios.get('https://skytechbackend.vercel.app/itservice/');
        setItServices(
          response.data.map(service => ({
            id: service.id,
            name: service.service_name,
            href: `#${service.service_name.toLowerCase().replace(/\s+/g, '-')}`,
          }))
        );
      } catch (error) {
        console.error('Failed to fetch IT services:', error);
      }
    };

    fetchItServices();
  }, []);

  const fetchSingleService = async (id) => {
    try {
      const res = await axios.get(`https://skytechbackend.vercel.app/getSingleRecord/${id}/`);
      // set the state here if you want to display it elsewhere
      setSelectedService(res.data);
    } catch (err) {
      console.error("Error fetching single service:", err);
    }
  };


  const engineeringServices = [
    { name: "Acoustic Engineering", href: "#acoustic" },
    { name: "MEP Engineering", href: "#mep" },
    { name: "Structural Engineering", href: "#structural" }
  ];


  return (
    <nav className="bg-blue-900 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-4 lg:px-6">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/">
            {/* <img src={logo} alt="Logo" className="h-20  object-contain" /> */}
            <img src="https://skytechme.com/wp-content/uploads/2024/10/cropped-Copy-of-Blue-Minimalist-Simple-Technology-Logo-.png" 
              alt="Skytech Logo"
              onClick={() => setMobileOpen(false)}
              className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
            </Link> 
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium uppercase tracking-wider text-sm">
          <Link to="/" className="text-white hover:text-blue-600 transition-colors duration-200">
              Home
            </Link>
            <Link to="About" className="text-white hover:text-blue-600 transition-colors duration-200">
              About Us
            </Link>
            {/* Engineering Services */}
            <div className="relative group">
              <button className="flex items-center text-white hover:text-blue-200 transition-colors">
                ENGINEERING SERVICES
                <ChevronDownIcon className="ml-1 h-5 w-5" />
              </button>
              <div className="absolute left-0 top-full bg-white shadow-lg mt-2 w-56 z-20 rounded-md ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                <div className="py-1">
                  {engineeringServices.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 uppercase"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>


            {/* IT Services */}
            <div className="relative group">
              <button className="flex items-center text-white transition-colors">
                IT Services
                <ChevronDownIcon className="ml-1 h-5 w-5" />
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 top-full bg-white shadow-lg mt-2 w-56 z-20 rounded-md ring-1 ring-black ring-opacity-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <div className="py-1">
                  {itServices.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => navigate(`/getSingleRecord/${service.id}`)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 uppercase"
                    >
                      {service.name}
                    </button>

                  ))}
                </div>
              </div>
            </div>
            <Link to="#" className="text-white hover:text-blue-600 transition-colors duration-200">
              Case Study
            </Link>
            {/* <Link to="Clients" className="text-white hover:text-blue-600 transition-colors duration-200">
              Clients
            </Link> */}
            <Link
              to="/ContactUs"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 uppercase"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-3 text-sm font-medium uppercase bg-blue-900 text-white">
          <div>
            <p className="text-gray-600">Engineering Services</p>
            {engineeringServices.map((item) => (
              <a key={item.href} href={item.href} className="block px-2 py-1 text-white hover:text-blue-300">
                {item.name}
              </a>
            ))}
          </div>
          <div>
            <p className="text-gray-600">IT Services</p>
            {itServices.map((service) => (
              <button
                key={service.id}
                onClick={() => {
                  setMobileOpen(false);
                  navigate(`/getSingleRecord/${service.id}`);
                }}
                className="block w-full text-left px-2 py-1 text-gray-700 hover:text-blue-600"
              >
                {service.name}
              </button>
            ))}

          </div>
          <Link to="About" 
          onClick={() => setMobileOpen(false)}
          className="block text-white hover:text-blue-300">
            About Us
            </Link>
          <Link to="Clients"
          onClick={() => setMobileOpen(false)}
           className="block text-white hover:text-blue-300">Clients</Link>
          <Link
              to="/ContactUs" 
              onClick={() => setMobileOpen(false)}
              className="block bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
