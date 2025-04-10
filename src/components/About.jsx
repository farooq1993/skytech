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
              Welcome to SkyTech LLC, your reliable partner for engineering and IT services in Dubai, UAE. Driven by innovation and a commitment to excellence, we offer exceptional solutions across various fields, including Acoustic Engineering, MEP Design, Fuel Oil Systems, Structural Design, and IT Services.

              Our team is made up of highly skilled professionals who are dedicated to creating tailored solutions that address the specific needs of each project. Whether it’s residential towers or industrial complexes, we provide comprehensive support, ensuring that every stage of design and execution is carried out with careful attention to detail and industry-leading expertise.



              Situated in the dynamic city of Dubai, we take pride in our significant role in shaping the future of urban infrastructure throughout the region. By merging technical expertise with a thorough understanding of the local environment, SkyTech LLC guarantees that every project is completed on schedule, within budget, and meets the highest standards of quality and efficiency.
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