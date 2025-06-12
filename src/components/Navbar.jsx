"use client";

import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure axios is installed
import { useNavigate, Link } from "react-router-dom";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import logo from "../assets/skytech.jpeg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [itServices, setItServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [showEngineering, setShowEngineering] = useState(false);
  const [showItServices, setShowItServices] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchItServices = async () => {
      try {
        const response = await axios.get(
          "https://skytechbackend.vercel.app/itservice/"
        );
        setItServices(
          response.data.map((service) => ({
            id: service.id,
            name: service.service_name,
            href: `#${service.service_name.toLowerCase().replace(/\s+/g, "-")}`,
          }))
        );
      } catch (error) {
        console.error("Failed to fetch IT services:", error);
      }
    };

    fetchItServices();
  }, []);

  const fetchSingleService = async (id) => {
    try {
      const res = await axios.get(
        `https://skytechbackend.vercel.app/getSingleRecord/${id}/`
      );
      // set the state here if you want to display it elsewhere
      setSelectedService(res.data);
    } catch (err) {
      console.error("Error fetching single service:", err);
    }
  };

  const engineeringServices = [
    {
      name: "Acoustic Services / Calculations",
      subItems: [
        {
          name: "Architectural Acoustics Service",
          href: "#architectural-service",
          children: [
            { name: "Commercial Acoustic Services", href: "#" },
            { name: "Shopping Mall Acoustic Services", href: "#" },
            { name: "Hospital Acoustic Services", href: "#" },
          ],
        },
        {
          name: "MEP Acoustics",
          href: "#mep-design",
          children: [
            { name: "HVAC Acoustics", href: "#hvac-design" },
            { name: "FAHU/AHU Acoustics", href: "#electrical-design" },
            { name: "Generator Room Acoustics", href: "#electrical-design" },
          ],
        },
        {
          name: "Environmental Noise Control Services",
          href: "#",
          children: [],
        },
        {
          name: "Industrial Acoustics",
          href: "#",
          children: [
            { name: "Plant Room Acoustics", href: "#steel-structure" },
          ],
        },
      ],
    },
    {
      name: "MEP DESIGN",
      subItems: [
        {
          name: "HVAC Calculations",
          href: "#",
        },
        {
          name: "Electrical Designs",
          href: "#",
        },
        {
          name: "Plumbing Designs",
          href: "#",
        },
      ],
    },
    {
      name: "Structural Design",
      subItems: [],
    },
    {
      name: "Fuel Oil System",
      subItems: [],
    },
    {
      name: "MEP BIM Modeling Services",
      href: "#mep-acoustics",
      subItems: [],
    },
  ];

  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-4 lg:px-6">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="https://skytechme.com/wp-content/uploads/2024/10/cropped-Copy-of-Blue-Minimalist-Simple-Technology-Logo-.png"
                alt="Skytech Logo"
                className="h-12 md:h-16 w-auto object-contain cursor-pointer"
                onClick={() => setMobileOpen(false)}
              />
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium uppercase tracking-wider text-sm">
            <Link
              to="/"
              className="text-blue-800 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="About"
              className="text-blue-800 hover:text-blue-600 transition-colors duration-200"
            >
              About Us
            </Link>
            <div className="relative group">
              <button className="flex items-center text-blue-800 hover:text-blue-600 transition-colors">
                ENGINEERING SERVICES
                <ChevronDownIcon className="ml-1 h-5 w-5 text-blue-800" />
              </button>

              {/* Level 1 - Main dropdown */}
              <div className="absolute left-0 top-full bg-white shadow-lg mt-2 w-64 z-20 rounded-md ring-1 ring-black ring-opacity-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <ul className="w-64 divide-y divide-gray-200">
                  {engineeringServices.map((category, idx) => (
                    <li key={idx} className="relative group/item">
                      <button className="flex justify-between items-center w-full px-4 py-3 text-left text-blue-900 hover:bg-blue-100">
                        {category.name}
                        {category.subItems && category.subItems.length > 0 && (
                          <ChevronDownIcon className="h-4 w-4 text-blue-800 transform group-hover/item:-rotate-90 transition-transform" />
                        )}
                      </button>

                      {/* Level 2 - First submenu */}
                      <ul className="divide-y divide-gray-200 w-64 absolute top-0 left-full bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 opacity-0 group-hover/item:opacity-100 pointer-events-none group-hover/item:pointer-events-auto transition duration-300">
                        {category.subItems.map((subItem, subIdx) => (
                          <li key={subIdx} className="relative group/subitem">
                            <a
                              href={subItem.href}
                              className="flex justify-between items-center w-full px-4 py-3 text-left text-blue-900 hover:bg-blue-100 capitalize w-full"
                            >
                              {subItem.name}
                              {subItem.children &&
                                subItem.children.length > 0 && (
                                  <ChevronDownIcon className="h-4 w-4 ml-2 transform group-hover/subitem:-rotate-90 transition-transform" />
                                )}
                            </a>

                            {/* Level 3 - Second submenu */}
                            {subItem.children && (
                              <ul className="divide-y divide-gray-200 w-48 absolute top-0 left-full bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 opacity-0 group-hover/subitem:opacity-100 pointer-events-none group-hover/subitem:pointer-events-auto transition duration-300">
                                {subItem.children.map((child, childIdx) => (
                                  <li key={childIdx}>
                                    <a
                                      href={child.href}
                                      className="flex justify-between items-center w-full px-4 py-3 text-left text-blue-900 hover:bg-blue-100 capitalize w-full"
                                    >
                                      {child.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* IT Services */}
            <div className="relative group">
              <button className="flex items-center text-blue-800 hover:text-blue-600 transition-colors">
                IT Services
                <ChevronDownIcon className="ml-1 h-5 w-5 text-blue-800" />
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 top-full bg-white shadow-lg mt-2 w-56 z-20 rounded-md ring-1 ring-black ring-opacity-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <div className="py-1">
                  {itServices.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => navigate(`/getSingleRecord/${service.id}`)}
                      className="block w-full text-left px-4 py-2 text-sm text-blue-800 hover:bg-blue-100 uppercase"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to="#"
              className="text-blue-800 hover:text-blue-600 transition-colors duration-200"
            >
              Case Study
            </Link>
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
                <XMarkIcon className="h-6 w-6 text-blue-800" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-blue-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-3 text-sm font-medium uppercase bg-white text-blue-800 border-t border-gray-200">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block px-2 py-1 text-blue-800 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="About"
            onClick={() => setMobileOpen(false)}
            className="block px-2 py-1 text-blue-800 hover:text-blue-600"
          >
            About Us
          </Link>

          {/* Collapsible Engineering Services */}
          <div>
            <button
              onClick={() => setShowEngineering(!showEngineering)}
              className="flex items-center justify-between w-full px-2 py-1 text-blue-800 hover:text-blue-600"
            >
              <span>Engineering Services</span>
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  showEngineering ? "transform rotate-180" : ""
                }`}
              />
            </button>
            {showEngineering && (
              <div className="pl-4">
                {engineeringServices.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-2 py-1 text-blue-800 hover:text-blue-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Collapsible IT Services */}
          <div>
            <button
              onClick={() => setShowItServices(!showItServices)}
              className="flex items-center justify-between w-full px-2 py-1 text-blue-800 hover:text-blue-600"
            >
              <span>IT Services</span>
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  showItServices ? "transform rotate-180" : ""
                }`}
              />
            </button>
            {showItServices && (
              <div className="pl-4">
                {itServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setMobileOpen(false);
                      navigate(`/getSingleRecord/${service.id}`);
                    }}
                    className="block w-full text-left px-2 py-1 text-blue-800 hover:text-blue-600"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="Clients"
            onClick={() => setMobileOpen(false)}
            className="block px-2 py-1 text-blue-800 hover:text-blue-600"
          >
            Clients
          </Link>
          <Link
            to="/ContactUs"
            onClick={() => setMobileOpen(false)}
            className="block bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
