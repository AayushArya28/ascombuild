import React from "react";

const Stats = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Samrachana at a Glance
          </h2>
          <p className="text-gray-500 mt-2">
            Delivering quality infrastructure since our inception.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-red-500 mb-2 flex justify-center">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-red-600">21+</h3>
            <p className="text-sm text-gray-600 mt-1">Years of Experience</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-red-500 mb-2 flex justify-center">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 21h18M5 21v-8a2 2 0 012-2h14a2 2 0 012 2v8m-2 0h.01M7 21h.01M5 11V9a2 2 0 012-2h14a2 2 0 012 2v2M5 7V5a2 2 0 012-2h14a2 2 0 012 2v2m-2 2h2m-2-4h2"
                ></path>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-red-600">2,500+</h3>
            <p className="text-sm text-gray-600 mt-1">Projects Completed</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-red-500 mb-2 flex justify-center">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                ></path>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-red-600">25+</h3>
            <p className="text-sm text-gray-600 mt-1">Awards</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-red-500 mb-2 flex justify-center">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-red-600">100+</h3>
            <p className="text-sm text-gray-600 mt-1">Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
