import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            alt="Our Team"
            className="w-full h-full object-cover"
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="text-white max-w-2xl p-8 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Sky Tech Technology</h2>
              <p className="mb-6 text-sm md:text-base leading-relaxed">
                Welcome to SkyTech LLC, your reliable partner for engineering and IT services in Dubai, UAE.
                Driven by innovation and a commitment to excellence, we offer exceptional solutions across
                various fields, including Acoustic Engineering, MEP Design, Fuel Oil Systems, Structural Design,
                and IT Services.
              </p>
              <p className="mb-6 text-sm md:text-base leading-relaxed">
                Our team of highly skilled professionals delivers tailored solutions across residential, commercial,
                and industrial projects. We ensure every stage of design and execution meets the highest standards.
              </p>
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
