import React from "react";

const Awards = () => {
  const achievements = [
    {
      title: "Quality Excellence",
      description: "Recognized for maintaining highest quality standards in structural rehabilitation projects across multiple states.",
      icon: "🏆"
    },
    {
      title: "Heritage Conservation",
      description: "Acknowledged for outstanding work in preserving and restoring heritage structures in Varanasi and surrounding regions.",
      icon: "🏛️"
    },
    {
      title: "Safety Standards",
      description: "Commended for maintaining exemplary safety records across all project sites.",
      icon: "🛡️"
    },
    {
      title: "Technical Innovation",
      description: "Recognized for implementing innovative repair techniques using advanced materials like CFRP and specialized grouting systems.",
      icon: "💡"
    },
    {
      title: "Client Satisfaction",
      description: "Multiple appreciation letters from government bodies and private clients for timely project completion.",
      icon: "⭐"
    },
    {
      title: "Infrastructure Development",
      description: "Contributed to critical infrastructure rehabilitation projects for PWD, Railways, and other government organizations.",
      icon: "🌉"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200 pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Awards & Recognition
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Celebrating ASCOM Buildcon's achievements and excellence in structural rehabilitation.
          </p>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Our Achievements
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            ASCOM Buildcon has earned recognition for its commitment to quality, safety, and innovation in the field of structural rehabilitation and repair.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Certifications & Affiliations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Registered Contractor
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Registered with various government bodies including PWD, UP Rajkiya Nirman Nigam, and other state departments for civil and structural works.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Quality Management
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Committed to quality management standards ensuring all projects meet stringent quality benchmarks and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="py-12 bg-blue-50 dark:bg-gray-800 rounded-lg">
          <svg
            className="mx-auto h-16 w-16 text-blue-500 dark:text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
            More Awards Coming Soon
          </h3>
          <p className="mt-2 max-w-lg mx-auto text-gray-600 dark:text-gray-400">
            We are updating our gallery with more certifications and accolades. Check back soon for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
