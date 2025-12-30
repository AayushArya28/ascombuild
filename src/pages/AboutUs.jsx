import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Page Title / Hero */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-200">
            Sanrachana Structural Strengthening Pvt. Ltd.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
              Who We Are
            </h2>
            <div className="prose prose-lg text-gray-500 dark:text-gray-300">
              <p className="mb-4">
                Sanrachana is a leading turnkey service provider in structural
                strengthening, repairs and retrofitting of all types of civil
                engineering structures.
              </p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                Our Key Services
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Structural repair & strengthening</li>
                <li>Corrosion study & Cathodic protection</li>
                <li>Historic, Fire & Seismic retrofit</li>
                <li>Underwater inspection & repair</li>
              </ul>
            </div>
          </div>

          {/* Profile Section */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Dr. Mangesh V Joshi
            </h2>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
              M.E. (Structures), Ph.D. IIT Bombay
            </p>
            <div className="prose text-gray-500 dark:text-gray-300 text-sm">
              <p className="mb-4">
                Principal civil structural engineer and pioneer of
                groundbreaking, “first-of-its-kind” technology initiatives that
                established companies for long-term sustainability and continued
                financial success.
              </p>
              <p className="mb-4">
                A strategic thinker who can ascertain the business challenge and
                deliver an innovative, technology-driven solution.
              </p>
              <p className="mb-4">
                Heads Sanrachana Structural strengthening Pvt. Ltd. - Leaders in
                Structural Repairs and Retrofitting. Involved in more than 2500
                repair and retrofit projects.
              </p>
              <h4 className="font-bold text-gray-900 dark:text-white mt-4 mb-2">
                Member & Advisor
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>MEMBER BOARD OF GOVERNERS NITTR, BHOPAL</li>
                <li>MEMBER BOARD OF GOVERNERS, IIT PATNA</li>
                <li>
                  ADVISOR, RCG SCHOOL OF INFRASTRUCTURE DESIGN AND MANAGEMENT,
                  IIT Kharagpur
                </li>
                <li>FORMER-MEMBER BOARD OF GOVERNERS VJTI, MUMBAI</li>
              </ul>
              <p className="mt-4 italic">
                Author of over 15 National and International Papers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Structural Issues?</span>
            <span className="block text-blue-200">Email us today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="mailto:contact@sanrachana.in"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-900 dark:text-blue-400 dark:hover:bg-gray-800"
              >
                Mail Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
