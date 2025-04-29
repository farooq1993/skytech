import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/getSingleRecord/${id}/`);
        setService(res.data);
      } catch (err) {
        console.error("Failed to fetch service:", err);
      }
    };
    fetchService();
  }, [id]);

  if (!service) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{service.service_name}</h1>
      <div dangerouslySetInnerHTML={{ __html: service.about_service }} />
    </div>
  );
};

export default ServiceDetailPage;
