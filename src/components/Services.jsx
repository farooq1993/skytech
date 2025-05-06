import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Services = () => {
  const engineeringServices = [
    {
      title: "Architectural Acoustics",
      description: "Creative solutions for sound quality and tranquil environments.",
      details: "Providing creative architectural acoustics solutions for enhanced sound quality and tranquil environments.",
      icon: "🎼",
      image: "https://www.luxxbox.com/wp-content/uploads/2022/01/MOW0037-1024x683.jpg",
      category: "engineering"
    },
    {
      title: "Commercial Acoustics",
      description: "Refining every note and word with precision.",
      details: "Refining every note and word with accuracy: Your reliable partner for commercial acoustics solutions.",
      icon: "🎤",
      image: "https://skytechme.com/wp-content/uploads/2025/02/cs.jpg",
      category: "engineering"
    },
    {
      title: "BIM Modeling",
      description: "Specialized MEP BIM for efficient, sustainable designs.",
      details: "Specialized MEP BIM Modeling Solutions: Improving sustainability for Peak Performance and Regulatory compliance.",
      icon: "📐",
      image: "https://skytechme.com/wp-content/uploads/2025/02/bd.jpg",
      category: "engineering"
    },
    {
      title: "MEP Design",
      description: "Effective and sustainable MEP design for modern infrastructure.",
      details: "Providing creative and effective MEP design solutions for sustainable and future-proof infrastructure.",
      icon: "⚙️",
      image: "https://emiworld.org/sites/default/files/styles/wlarge/public/images/mep.jpg?itok=lpqlQYaX",
      category: "engineering"
    },
    {
      title: "Fuel Oil Systems",
      description: "Complete fuel system design for smooth energy management.",
      details: "Your reliable partner for complete Fuel Oil Systems solutions, guaranteeing smooth energy management and efficiency.",
      icon: "⛽",
      image: "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "engineering"
    },
    {
      title: "Structural Design",
      description: "Dependable structural design that transforms vision into reality.",
      details: "Transforming your vision into reality, enabling your projects with creative and dependable structural design solutions.",
      icon: "🏗️",
      image: "https://kimkesti.com/wp-content/uploads/2022/03/what-do-structural-engineers-do-kimkesti.jpg",
      category: "engineering"
    }
  ];


  const itServices = [
    {
      title: "Web Development",
      description: "Custom solutions for iOS, Android, and Web platforms",
      details: "We build responsive, scalable applications using modern frameworks like React, Flutter, and Node.js with a focus on user experience.",
      icon: "💻",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "it"
    },
    {
      title: "Mobile App Development",
      description: "What is Mobile Application Development",
      details: "Mobile application development services encompass the creation, design, and maintenance of mobile apps.",
      icon: "💻",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZ14J4oos9cbV07hdq2HaRQm-wEQsvsGxsQ&s",
      category: "it"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven strategies for UAE market growth",
      details: "Our digital marketing team specializes in SEO, PPC, social media, and content marketing tailored to the UAE market.",
      icon: "📈",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "it"
    },
    {
      title: "ERP Systems",
      description: "Integrated business management solutions",
      details: "We implement and customize ERP systems to streamline your business processes, improve efficiency, and provide real-time analytics.",
      icon: "🤖",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "it"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const sectionTitle = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Engineering Services */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionTitle}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Engineering Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by Dubai's leading construction firms and property developers
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={engineeringServices.length > 3 ? { delay: 3000, disableOnInteraction: false } : false}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {engineeringServices.map((service, index) => (
              <SwiperSlide key={`eng-${index}`}>
                <motion.div variants={item}>
                  <EnhancedServiceCard service={service} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>


        {/* IT Services */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionTitle}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our IT Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Digital transformation solutions for UAE businesses
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={itServices.length > 3 ? { delay: 3000, disableOnInteraction: false } : false}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {itServices.map((service, index) => (
              <SwiperSlide key={`it-${index}`}>
                <motion.div variants={item}>
                  <EnhancedServiceCard service={service} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

        </motion.div>

      </div>
    </section>
  );
};

// Enhanced Service Card with image and hover details
const EnhancedServiceCard = ({ service }) => (
  <motion.div
    className={`relative overflow-hidden rounded-lg shadow-md h-96 ${service.category === 'engineering' ? 'border-orange-500' : 'border-blue-500'
      }`}
    whileHover="hover"
    initial="rest"
  >
    {/* Service Image */}
    <motion.div
      className="absolute inset-0 bg-gray-800"
      variants={{
        rest: { opacity: 1 },
        hover: { opacity: 0.3 }
      }}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* Basic Info (always visible) */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white"
      variants={{
        rest: { y: 0 },
        hover: { y: 100 }
      }}
    >
      <div className="text-4xl mb-2">{service.icon}</div>
      <h3 className="text-xl font-bold mb-1">{service.title}</h3>
      <p className="text-sm">{service.description}</p>
    </motion.div>

    {/* Detailed Info (appears on hover) */}
    <motion.div
      className="absolute inset-0 p-6 flex flex-col justify-center bg-black/80 text-white"
      variants={{
        rest: { opacity: 0, y: 50 },
        hover: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="mb-4">{service.details}</p>
      <button className="mt-auto self-start px-4 py-2 bg-white text-gray-800 rounded-md font-medium hover:bg-gray-200 transition">
        Learn More
      </button>
    </motion.div>
  </motion.div>
);

export default Services;