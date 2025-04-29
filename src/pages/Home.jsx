import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Clients from '../components/Clients';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import ContactUs from '../components/Contact';
import Stats from '../components/Stats';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <About />
      <Clients />
      <Testimonial />
      <CTA />
      <ContactUs />
    </>
  );
};

export default Home;
