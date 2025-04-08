import React from 'react';

const Clients = () => {
  const clientLogos = ["Company A", "Company B", "Company C", "Company D"];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted By Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've helped businesses across various sectors achieve their technology goals
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clientLogos.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="text-xl font-semibold text-gray-700">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;