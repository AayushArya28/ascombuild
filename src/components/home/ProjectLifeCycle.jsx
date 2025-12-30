import React from "react";

const steps = [
  {
    title: "Site Inspection",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Testing & Analysis",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    title: "Maintenance",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Rehabilitation",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Project Delivery",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const ProjectLifeCycle = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Graphic Side */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            {/* Assuming a replacement graphic logic here, simplified as a circular flow or list */}
            <div className="relative">
              <div className="flex flex-col space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                  >
                    <div className="shrink-0 p-3 bg-blue-100 rounded-full mr-4">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={step.icon}
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Project Life Cycle
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm mr-3">
                  1
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Detailed Site Inspection & Assessment
                </span>
              </li>
              <li className="flex items-start">
                <span className="shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm mr-3">
                  2
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Non-Destructive Testing & Analysis
                </span>
              </li>
              <li className="flex items-start">
                <span className="shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm mr-3">
                  3
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Structural Maintenance & Monitoring
                </span>
              </li>
              <li className="flex items-start">
                <span className="shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm mr-3">
                  4
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Corrective Measures & Rehabilitation
                </span>
              </li>
              <li className="flex items-start">
                <span className="shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm mr-3">
                  5
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Final Delivery & Handover
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="#"
                className="text-red-600 font-semibold hover:text-red-700 flex items-center"
              >
                Click to know more{" "}
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectLifeCycle;
