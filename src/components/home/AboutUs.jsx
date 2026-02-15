import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
              About Us
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-600"></span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              ASCOM BUILDCON Pvt Ltd is a specialized structural engineering and construction consultancy firm headquartered in Varanasi, Uttar Pradesh. We are dedicated to the scientific rehabilitation, strengthening, and repair of civil infrastructure across India.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With a foundation built on academic excellence and practical field expertise, ASCOM delivers innovative, cost-effective solutions that extend the operational lifespan of critical structures while ensuring public safety and preserving architectural heritage.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <svg
                  className="h-5 w-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Structural Repairs & Retrofitting
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <svg
                  className="h-5 w-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Structural Health Monitoring
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <svg
                  className="h-5 w-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Seismic & Fire Retrofit
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <svg
                  className="h-5 w-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Heritage Structure Preservation
              </li>
            </ul>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Read More
            </a>
          </div>

          {/* Image/Video Placeholder */}
          <div className="relative rounded-lg overflow-hidden shadow-xl aspect-video">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              alt="Construction Site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Play Button Overlay mockup */}
              <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all">
                <svg
                  className="w-8 h-8 text-red-600 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
