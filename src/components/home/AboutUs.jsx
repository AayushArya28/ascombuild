import React from "react";

const AboutUs = () => {
  return (
    <section className="py-8 md:py-12 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <h2 className="font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
            About Us
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-red-600"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            ASCOM BUILDCON Pvt Ltd is a specialized structural engineering and construction consultancy firm headquartered in Varanasi, Uttar Pradesh. Founded by Dr. (Prof) Veerendra Kumar, Ex Head and Professor of IIT (BHU) Varanasi, we are dedicated to the scientific rehabilitation, strengthening, and repair of civil infrastructure across India.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-5">
            With a foundation built on academic excellence from IIT (BHU) and practical field expertise, ASCOM delivers innovative, cost-effective solutions that extend the operational lifespan of critical structures while ensuring public safety and preserving architectural heritage. Our core philosophy: <strong>Renascence of Structures Through Scientific Innovation</strong>.
          </p>
          <ul className="space-y-2.5 mb-6">
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
              Audit & Inspection by IIT Experts
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
              Structural Health Monitoring (AI-based)
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
              Load Testing & NDT Services
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
              Retrofitting & Strengthening
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
              Design of Bridges & Buildings
            </li>
          </ul>
          <a
            href="/about-us"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
