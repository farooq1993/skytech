import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="Our Team" 
              className="rounded-lg shadow-xl" 
            />
          </div>
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Sky Tech Technology</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2015, Sky Tech Technology has been at the forefront of delivering innovative IT solutions to businesses of all sizes. 
              Our team of certified professionals brings together decades of experience across various industries.
            </p>
            <p className="text-gray-600 mb-8">
              We believe in building long-term relationships with our clients by understanding their unique challenges 
              and providing customized solutions that drive real business value.
            </p>
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;