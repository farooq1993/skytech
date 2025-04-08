const ITExpertise = () => {
    return (
      <section id="it-expertise" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center flex-row-reverse">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="IT Services" 
                className="rounded-lg shadow-xl" 
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Digital Transformation Solutions</h2>
              <p className="text-gray-600 mb-6">
                SkyTech's IT division specializes in helping UAE businesses leverage technology for growth and efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Web & Mobile Apps</h3>
                  <p className="text-sm text-gray-600">React, Flutter, Node.js</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Digital Marketing</h3>
                  <p className="text-sm text-gray-600">SEO, Social Media, PPC</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">ERP Systems</h3>
                  <p className="text-sm text-gray-600">Odoo, SAP, Custom</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Cloud Solutions</h3>
                  <p className="text-sm text-gray-600">AWS, Azure, GCP</p>
                </div>
              </div>
              <a 
                href="#contact" 
                className="bg-blue-800 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-900 transition inline-block"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };