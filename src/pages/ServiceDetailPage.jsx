import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(`https://skytechbackend.vercel.app/getSingleRecord/${id}/`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setService(data.data);
      } catch (error) {
        console.error('Error fetching service details:', error);
      }
    };

    fetchServiceDetails();
  }, [id]);

  if (!service) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!service.service_name || !service.about_service) {
    return <div className="text-center text-red-500 py-10">Service details not found or incomplete.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">{service.service_name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About Service */}
        <div>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: service.about_service }}
          />
        </div>

        {/* Service Image */}
        <div>
          {service.service_img ? (
            <img
              src={service.service_img}
              alt={service.service_name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          ) : (
            <div className="text-gray-500 italic">No image available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
