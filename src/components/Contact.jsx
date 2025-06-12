import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company_name: '',
    title: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg(null);

    try {
      const res = await fetch('http://127.0.0.1:8000/enquireis/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMsg('Message sent successfully!');
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          company_name: '',
          title: '',
          message: '',
        });
      } else {
        setResponseMsg('Error: ' + JSON.stringify(data));
      }
    } catch (error) {
      setResponseMsg('Something went wrong: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-8 uppercase text-center">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <input name="first_name" value={formData.first_name} onChange={handleChange} required className="col-span-1 border rounded px-4 py-2" placeholder="First Name *" />
            <input name="last_name" value={formData.last_name} onChange={handleChange} required className="col-span-1 border rounded px-4 py-2" placeholder="Last Name *" />
            <input name="email" type="email" value={formData.email} onChange={handleChange} required className="col-span-1 border rounded px-4 py-2" placeholder="Email *" />
            <input name="phone" value={formData.phone} onChange={handleChange} required className="col-span-1 border rounded px-4 py-2" placeholder="Phone *" />
            <input name="company_name" value={formData.company_name} onChange={handleChange} required className="col-span-1 border rounded px-4 py-2" placeholder="Company Name *" />
            <input name="title" value={formData.title} onChange={handleChange} required className="col-span-1 border rounded px-4 py-2" placeholder="Title *" />
            <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="col-span-2 border rounded px-4 py-2" placeholder="Message *"></textarea>

            <div className="col-span-2">
              <button type="submit" disabled={loading} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {responseMsg && (
              <div className="col-span-2 text-sm mt-2 text-center text-red-600">{responseMsg}</div>
            )}
          </form>

          {/* Contact Info and Map (unchanged) */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
              <p className="mt-2 text-gray-600">UAE Office<br />Deira – Dubai – UAE</p>
              <p className="mt-2 text-gray-600">Mobile No: <a href="tel:+971529158949" className="text-blue-600">+971529158949</a></p>
              <p className="mt-2 text-gray-600">Email ID: <a href="mailto:info@skytechme.com" className="text-blue-600">info@skytechme.com</a></p>
            </div>
            <div>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.5372680841224!2d55.32046907520489!3d25.271139977662315"
                width="100%" height="250" className="rounded-md shadow-md" loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
