import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Clients = () => {
  const clientLogos = [
    { name: "ABU", image: "/images/clients/abu.jpg" },
    { name: "Dubai Airports", image: "/images/clients/dubai_airports.jpg" },
    { name: "Future Gulf", image: "/images/clients/future_gulf.jpg" },
    { name: "SEAC", image: "/images/clients/seac.png" },
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
          loop
        >
          {clientLogos.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24">
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
