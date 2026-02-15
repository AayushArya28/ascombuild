import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200 pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            We are here to help you with your structural rehabilitation needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-red-600 dark:text-red-400">
                    Address
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    ASCOM BUILDCON Pvt. Ltd. <br />
                    Varanasi, Uttar Pradesh <br />
                    India - 221001
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-red-600 dark:text-red-400">
                    Phone
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Mobile: +91-9XX XXX XXXX <br />
                    Phone: +91-542-XXX XXXX
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-red-600 dark:text-red-400">
                    Email
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    <a
                      href="mailto:info@ascombuildcon.com"
                      className="hover:text-red-500 dark:hover:text-red-300"
                    >
                      info@ascombuildcon.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Map Placeholder or Embed */}
            {/* Google Map Embed */}
            <div className="h-96 w-full rounded-lg shadow-lg overflow-hidden">
              <iframe
                title="Google Map Location"
                className="w-full h-full border-0"
                src="https://maps.google.com/maps?q=Vrindavan+Residency+Apartments&ll=25.2448052,82.9777575&z=16&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Project Enquiry"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Describe your structural issues..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
