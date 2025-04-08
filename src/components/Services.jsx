const Services = () => {
  const engineeringServices = [
    {
      title: "Acoustic Engineering",
      description: "Noise control solutions for buildings, auditoriums, and industrial spaces",
      icon: "🔇",
      category: "engineering"
    },
    {
      title: "MEP Engineering",
      description: "Comprehensive mechanical, electrical, and plumbing designs",
      icon: "⚙️",
      category: "engineering"
    },
    {
      title: "Structural Engineering",
      description: "Robust structural solutions for all construction needs",
      icon: "🏗️",
      category: "engineering"
    }
  ];

  const itServices = [
    {
      title: "Web & Mobile App Development",
      description: "Custom solutions for iOS, Android, and Web platforms",
      icon: "💻",
      category: "it"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven strategies for UAE market growth",
      icon: "📈",
      category: "it"
    },
    {
      title: "ERP Systems",
      description: "Integrated business management solutions",
      icon: "🤖",
      category: "it"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Engineering Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Engineering Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by Dubai's leading construction firms and property developers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {engineeringServices.map((service, index) => (
            <ServiceCard key={`eng-${index}`} service={service} />
          ))}
        </div>

        {/* IT Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our IT Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Digital transformation solutions for UAE businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {itServices.map((service, index) => (
            <ServiceCard key={`it-${index}`} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Reusable Service Card Component
const ServiceCard = ({ service }) => (
  <div className={`bg-gray-50 p-8 rounded-lg hover:shadow-xl transition duration-300 border-l-4 ${
    service.category === 'engineering' ? 'border-orange-500' : 'border-blue-500'
  }`}>
    <div className="text-4xl mb-6">{service.icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-blue-800">{service.title}</h3>
    <p className="text-gray-600">{service.description}</p>
  </div>
);

export default Services;  // This is the crucial line that was missing