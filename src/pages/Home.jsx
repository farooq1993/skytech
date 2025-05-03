import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Clients from '../components/Clients';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import Stats from '../components/Stats';
import WhatsAppButton from '../components/WhatsAppButton';

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
      <WhatsAppButton />
    </>
  );
};

export default Home;
