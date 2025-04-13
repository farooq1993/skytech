import React from 'react';

const Testimonial = () => {
  return (
    <div className="bg-blue-900 text-white p-10 rounded-xl">
      <div className="max-w-3xl mx-auto text-center">
        <svg className="w-12 h-12 mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
        </svg>
        <p className="text-xl mb-6">
          "Sky Tech Technology transformed our IT infrastructure with their cloud solutions, 
          resulting in 40% cost savings and improved operational efficiency. Their team is 
          professional, knowledgeable, and truly cares about our success."
        </p>
        <p className="font-semibold">- Sarah Johnson, CTO at TechForward</p>
      </div>
    </div>
  );
};

export default Testimonial;