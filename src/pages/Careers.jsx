import React from "react";

const Careers = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Careers at ASCOM Buildcon
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-200">
            Build your future with us.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold leading-6 text-gray-900 dark:text-white">
              Overview
            </h2>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-6 text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              At ASCOM Buildcon, we believe in nurturing talent and providing the best possible career opportunities. We offer a unique mix of challenging projects, professional growth, and a supportive work culture.
            </p>
            <p>
              Our team works on cutting-edge structural rehabilitation projects across India, from heritage conservation to modern infrastructure repair. The entrepreneurial setting at ASCOM allows you to take on higher responsibilities and grow faster than your peers elsewhere.
            </p>
            <p>
              We invest in the professional development of every employee, providing opportunities to work closely with senior management and industry experts. Join us to be part of innovative projects that make a real difference.
            </p>
            <ul className="list-disc pl-5 space-y-1 font-medium text-gray-900 dark:text-white">
              <li>Exposure to diverse structural rehabilitation projects</li>
              <li>Pan-India opportunities with headquarters in Varanasi</li>
              <li>Work on heritage conservation and modern infrastructure</li>
              <li>Emphasis on work-life balance</li>
              <li>Continuous learning and skill development</li>
            </ul>
            <div className="mt-6 bg-blue-50 dark:bg-gray-800 p-6 rounded-md">
              <h3 className="text-lg font-medium text-blue-900 dark:text-blue-300">
                Join Our Team
              </h3>
              <p className="mt-2 text-blue-700 dark:text-blue-200">
                We are always looking for fresh talent to join our growing team
                at ASCOM Buildcon.
              </p>
              <p className="mt-4 font-bold text-blue-800 dark:text-blue-300">
                You can drop your resume at{" "}
                <a
                  href="mailto:careers@ascombuildcon.com"
                  className="underline hover:text-blue-600 dark:hover:text-blue-400"
                >
                  careers@ascombuildcon.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
