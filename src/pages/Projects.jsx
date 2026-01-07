import React from "react";

const projectCategories = [
  {
    title: "Bridges & Flyovers",
    description: "Rehabilitation and strengthening of bridges, flyovers, and elevated road structures"
  },
  {
    title: "Heritage Buildings",
    description: "Restoration and preservation of historical and heritage structures"
  },
  {
    title: "Industrial Structures",
    description: "Repair and strengthening of industrial buildings, factories, and warehouses"
  },
  {
    title: "Dams & Irrigation",
    description: "Structural rehabilitation of dams, canals, and irrigation infrastructure"
  },
  {
    title: "Fire Damaged Structures",
    description: "Assessment and repair of buildings affected by fire damage"
  },
  {
    title: "Hospitals & Healthcare",
    description: "Seismic retrofitting and structural upgrades for healthcare facilities"
  },
  {
    title: "Educational Institutions",
    description: "Structural strengthening of schools, colleges, and university buildings"
  },
  {
    title: "Residential Buildings",
    description: "Repair and retrofitting of multi-story residential complexes and housing"
  },
  {
    title: "Commercial Buildings",
    description: "Structural rehabilitation of office buildings and commercial complexes"
  },
  {
    title: "Government Buildings",
    description: "Strengthening and repair of government and public sector structures"
  },
  {
    title: "Temples & Religious Structures",
    description: "Preservation and restoration of temples and religious monuments"
  },
  {
    title: "Water Tanks & Reservoirs",
    description: "Repair and waterproofing of overhead and underground water tanks"
  },
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
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ASCOM Buildcon has successfully completed numerous projects across various sectors throughout India. Our expertise spans from heritage conservation to modern infrastructure rehabilitation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projectCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 p-6 cursor-pointer border border-gray-100 dark:border-gray-700"
            >
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
