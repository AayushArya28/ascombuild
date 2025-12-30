import React from "react";
import { Link } from "react-router-dom";

const servicesList = [
  "Concrete repairs",
  "Corrosion Study & Cathodic Protection",
  "Underwater Repairs",
  "Retrofit Design",
  "Structural Strengthening",
  "Seismic Retrofit",
  "External Post Tensioning Systems",
  "Structural Steel Fabrication",
  "Bearing & Structural Joint Maintenance",
  "As-built Drawings by Scan",
  "Pre and Post repair NDT Tests",
  "Full Scale Load Testing",
  "Structural Health Monitoring",
  "Moisture Control & Waterproofing",
  "Masonry structure retrofit",
  "Building Façade and Envelope Restoration",
];

const Services = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-200">
            Comprehensive structural engineering solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              <div className="p-6 grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service}
                </h3>
                <p className="text-gray-500 dark:text-gray-300 mb-4">
                  Expert solutions for {service.toLowerCase()}.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-t border-gray-100 dark:border-gray-700">
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm flex items-center"
                >
                  Read more &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">Need a specialized service?</span>
            <span className="block text-blue-600 dark:text-blue-400">
              Contact our experts today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
