import React from "react";

const projectCategories = [
  "Banks/Data Center",
  "Hospital",
  "Bridges & Metrolines",
  "Dams & Aqueducts",
  "Fire Damaged Structures",
  "Heritage",
  "Industrial Structures",
  "Marine Structure",
  "Factories",
  "Residential & Highrise",
  "Schools",
  "Silos and Cooling Towers",
  "Tall Chimneys",
  "OHTs & Industrial tanks",
  "Hotels & Clubs",
  "Underwater Structure",
];

const Projects = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Projects
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-200">
            A diverse portfolio of challenging and successful projects.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projectCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 aspect-video flex items-center justify-center cursor-pointer"
            >
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="text-center p-4 z-10">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {category}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
