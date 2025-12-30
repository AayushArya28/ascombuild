import React from "react";

const Awards = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Awards & Recognition
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-200">
            Celebrating our achievements and excellence in structural
            engineering.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-gray-500 dark:text-gray-400">
        <div className="py-20 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <svg
            className="mx-auto h-24 w-24 text-gray-400 dark:text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
            Award Gallery Coming Soon
          </h3>
          <p className="mt-2 max-w-lg mx-auto">
            We are currently updating our awards gallery. Please check back
            later to see our certifications and accolades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
