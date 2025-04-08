import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Let's discuss how we can help you achieve your technology goals and drive business growth.
        </p>
        <a 
          href="#contact" 
          className="bg-white text-blue-600 px-8 py-4 rounded-md font-medium text-lg hover:bg-gray-100 transition inline-block"
        >
          Get a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default CTA;