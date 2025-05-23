import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../index.css'; // Ensure you can modify this file if needed

const Clients = () => {
  const clientLogos = [
    { name: "ABU", image: "/images/clients/abu.jpg" },
    { name: "Dubai Airports", image: "/images/clients/dubai_airports.jpg" },
    { name: "Future Gulf", image: "/images/clients/future_gulf.jpg" },
    { name: "SEAC", image: "/images/clients/seac.png" },
    { name: "INNOFIT VISION", image: "/images/clients/innofit_vision.png" },
    { name: "METAL", image: "/images/clients/metal.png" },
    { name: "BILT", image: "/images/clients/bilt.jpg" },
    { name: "CRCC", image: "/images/clients/crcc.jpg" },
    { name: "MASS TECH", image: "/images/clients/mass_tech.png" },
    { name: "CARE 4", image: "/images/clients/care4.png" },
    { name: "BURUJ AL YARMUKH", image: "/images/clients/bayi.jpg" },
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted By Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've helped businesses across various sectors achieve their technology goals
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop={clientLogos.length > 4}
        >
          {clientLogos.map((client, index) => (
            <SwiperSlide key={index}>
              <figure className="flex justify-center items-center h-24">
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-full object-contain mix-blend-multiply transition duration-300 hover:scale-105"
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
