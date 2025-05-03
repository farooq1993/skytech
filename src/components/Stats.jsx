import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { label: 'Cool Number', value: 100 },
  { label: 'Projects Completed', value: 400 },
  { label: 'Valuable Clients', value: 1000 },
  { label: 'Our Team', value: 54 },
];

const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const stepTime = 16;
      const totalSteps = Math.ceil(duration / stepTime);
      const increment = target / totalSteps;

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(counter);
          setCount(target);
        } else {
          setCount(Math.ceil(start));
        }
      }, stepTime);
    }
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}<span className="text-indigo-400">+</span>
    </span>
  );
};

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
                <AnimatedCounter target={stat.value} />
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
