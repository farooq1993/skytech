import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Clients from '../components/Clients';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ContactUs from '../components/Contact';
import Stats from '../components/Stats';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Clients />
      <Testimonial />
      <CTA />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;