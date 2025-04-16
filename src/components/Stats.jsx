import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Cool Number', value: 100 },
  { label: 'Projects Completed', value: 400 },
  { label: 'Valuable Clients', value: 1000 },
  { label: 'Our Team', value: 54 },
];

const Stats = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Creating greater value at every level to construct a better world for all.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-4xl font-extrabold text-indigo-600 mb-2">
                {stat.value.toLocaleString()}<span className="text-indigo-400">+</span>
              </h3>
              <p className="text-lg font-medium text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
