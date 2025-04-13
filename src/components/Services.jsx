import { motion } from "framer-motion";

const Services = () => {
  const engineeringServices = [
    {
      title: "Acoustic Engineering",
      description: "Noise control solutions for buildings, auditoriums, and industrial spaces",
      details: "We provide comprehensive acoustic analysis, soundproofing solutions, and noise reduction strategies tailored to your specific needs.",
      icon: "🔇",
      image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800", // Replace with your actual image path
      category: "engineering"
    },
    {
      title: "MEP Engineering",
      description: "Comprehensive mechanical, electrical, and plumbing designs",
      details: "Our MEP solutions integrate sustainable technologies with efficient design to optimize building performance and reduce operational costs.",
      icon: "⚙️",
      image: "https://images.unsplash.com/photo-1581093057305-3fe6ab6c1c80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "engineering"
    },
    {
      title: "Structural Engineering",
      description: "Robust structural solutions for all construction needs",
      details: "From skyscrapers to residential buildings, our structural designs combine safety, innovation, and cost-effectiveness.",
      icon: "🏗️",
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "engineering"
    }
  ];

  const itServices = [
    {
      title: "Web & Mobile App Development",
      description: "Custom solutions for iOS, Android, and Web platforms",
      details: "We build responsive, scalable applications using modern frameworks like React, Flutter, and Node.js with a focus on user experience.",
      icon: "💻",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
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
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {engineeringServices.map((service, index) => (
            <motion.div key={`eng-${index}`} variants={item}>
              <EnhancedServiceCard service={service} />
            </motion.div>
          ))}
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
          className="grid md:grid-cols-3 gap-8"
        >
          {itServices.map((service, index) => (
            <motion.div key={`it-${index}`} variants={item}>
              <EnhancedServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Service Card with image and hover details
const EnhancedServiceCard = ({ service }) => (
  <motion.div 
    className={`relative overflow-hidden rounded-lg shadow-md h-96 ${
      service.category === 'engineering' ? 'border-orange-500' : 'border-blue-500'
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