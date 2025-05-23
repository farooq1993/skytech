import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="bg-white py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-8 uppercase text-center">
          Contact Us
        </h2>

        <div className="columns-3 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="grid grid-cols-2 gap-4">
            {/* Row 1 */}
            <div className='col-span-1'>
              <label className="block text-sm font-medium text-gray-700">First Name *</label>
              <input type="text" className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>

            <div className='col-span-1'>
              <label className="block text-sm font-medium text-gray-700">Last Name *</label>
              <input type="text" className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>

            {/* Row 2 */}
            <div className='col-span-1'>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input type="email" className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>

            <div className='col-span-1'>
              <label className="block text-sm font-medium text-gray-700">Phone *</label>
              <input type="number" className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>

            {/* Row 3 */}
            <div className='col-span-1'>
              <label className="block text-sm font-medium text-gray-700">Company Name *</label>
              <input type="text" className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>

            <div className='col-span-1'>
              <label className="block text-sm font-medium text-gray-700">Title *</label>
              <input type="text" className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>

            {/* Row 4 - Message */}
            <div className='col-span-2'>
              <label className="block text-sm font-medium text-gray-700">Message *</label>
              <textarea rows="4" className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required></textarea>
            </div>

            {/* Row 5 - Consent Section */}
            <div className="col-span-2 space-y-4 text-sm text-gray-700">
              <p>
                Credera is committed to protecting and respecting your privacy. From time to time, we would like to contact you about our services, thought leadership, and events, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below:
              </p>

              <div className="flex items-start space-x-3">
                <input type="checkbox" id="consent" name="consent" className="mt-1" required />
                <label htmlFor="consent">
                  I agree to receive other communications from Credera.
                </label>
              </div>

              <p>
                You may unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.
              </p>
              <p>
                By clicking submit, you consent to allow Credera to store and process the personal information submitted above to provide you the content requested.
              </p>
            </div>

            {/* Submit button */}
            <div className='col-span-2'>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                Send Message
              </button>
            </div>
          </form>


          {/* Contact Details & Map */}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.5372680841224!2d55.32046907520489!3d25.271139977662315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434267d0f6a1%3A0x827e01c8201c66d!2sDeira%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1712731732970!5m2!1sen!2sin"
                width="100%"
                height="250"
                className="rounded-md shadow-md"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
