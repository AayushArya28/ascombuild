import React, { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  // Bridge Projects
  { id: 1, title: "Samstipur ROB Strengthening", location: "Bihar", client: "NH-RCD Bihar", category: "Bridges", description: "Consultancy, audit/inspection and strengthening of 1 km long ROB" },
  { id: 2, title: "JP Setu Pile Cap Strengthening", location: "Patna, Bihar", client: "Navyuga Engineering LTD", category: "Bridges", description: "Consultancy, audit/inspection and strengthening of pile cap" },
  { id: 11, title: "Dhalipur Bridge Strengthening", location: "Uttarakhand", client: "PWD Uttarakhand", category: "Bridges", description: "Strengthening of bridge for Uttarakhand Vidyut Vitaran" },
  { id: 12, title: "Old Chopan Bridge Strengthening", location: "Sonbhadra, UP", client: "CECO India Pvt Ltd", category: "Bridges", description: "Strengthening of 1.08 km long bridge across Sone River in 90 days, Project cost: ₹4.72 CR" },
  { id: 13, title: "Supaul Bridge Strengthening", location: "Supaul, Bihar", client: "Bihar Rajya Pul Nirman Nigam", category: "Bridges", description: "Strengthening of damaged bridge over river" },
  { id: 14, title: "Samstipur Bridge Strengthening", location: "Samstipur, Bihar", client: "Bihar Rajya Pul Nirman Nigam", category: "Bridges", description: "Strengthening of damaged bridge over river" },
  { id: 17, title: "Shashtri Setu", location: "Mirzapur, UP", client: "UP State Bridge Corporation", category: "Bridges", description: "Audit, load testing and strengthening consultant across river Ganga" },
  { id: 33, title: "Kalikadham Bridge", location: "Varanasi, UP", client: "UP State Bridge Corporation", category: "Bridges", description: "Strengthening and rehabilitation of UPSBC bridge" },
  { id: 34, title: "ROB 16C Strengthening", location: "Varanasi, UP", client: "UP State Bridge Corporation", category: "Bridges", description: "Audit and design of strengthening plan" },
  { id: 37, title: "Chopan Sone River Bridge", location: "Chopan, Sonbhadra, UP", client: "CECO India Pvt Ltd", category: "Bridges", description: "Audit and strengthening of 1.2 km long bridge over river Sone" },
  { id: 40, title: "Shastri Bridge Ganga", location: "Mirzapur, UP", client: "UP State Bridge Corporation", category: "Bridges", description: "Condition assessment and strengthening report across river Ganga" },
  { id: 5, title: "13 Bridges Audit", location: "Ramnathpuram, Tamil Nadu", client: "NHAI", category: "Bridges", description: "Consultancy and audit of 13 bridges" },
  { id: 6, title: "Ratamau Bridge Audit", location: "Dehradun, Uttarakhand", client: "NHAI", category: "Bridges", description: "Consultancy and audit of bridge" },
  { id: 9, title: "Raebarelli ROB 150", location: "Raebarelli, UP", client: "NHAI", category: "Bridges", description: "Strengthening of ROB" },

  // Healthcare Facilities
  { id: 7, title: "KGMU OPD Strengthening", location: "Lucknow, UP", client: "UPPCL", category: "Healthcare", description: "Strengthening of OPD at King George Medical University" },
  { id: 16, title: "Sir Sunderlal Hospital BHU", location: "Varanasi, UP", client: "BHU under Kayakalp scheme", category: "Healthcare", description: "Strengthening and retrofitting of Emergency block, OPD ward (G+5), and patient ward" },
  { id: 26, title: "Emergency Block BHU", location: "Varanasi, UP", client: "BHU", category: "Healthcare", description: "Strengthening and rehabilitation of Emergency Block and OPD building (G+5)" },
  { id: 30, title: "KGMU Strengthening Scheme", location: "Lucknow, UP", client: "KGMU", category: "Healthcare", description: "Condition assessment and providing strengthening scheme with BoQ" },

  // Government Buildings & Infrastructure
  { id: 3, title: "Railways HQ Audit", location: "Ajmer, Rajasthan", client: "Indian Railways", category: "Government", description: "Consultancy and audit of Railways headquarters" },
  { id: 4, title: "12 Culverts Audit", location: "Ajmer-Ahmedabad Route", client: "Indian Railways", category: "Government", description: "Consultancy and audit of 12 culverts" },
  { id: 19, title: "RDSO Campus Audit", location: "Lucknow, UP", client: "RDSO", category: "Government", description: "Audit of Abhikalp bhawan, Manak Bhawan and other structures" },
  { id: 27, title: "Advocate General Building", location: "Prayagraj, UP", client: "High Court Prayagraj", category: "Government", description: "Condition assessment and strengthening scheme for fire-damaged building" },
  { id: 31, title: "MNNIT Faculty Resident", location: "Prayagraj, UP", client: "CPWD Prayagraj", category: "Government", description: "Audit and designing of strengthening scheme at Motilal Nehru NIT" },
  { id: 32, title: "Brocha Hostel BHU", location: "Varanasi, UP", client: "CPWD Varanasi", category: "Government", description: "Audit and design of strengthening plan" },

  // ROB (Road Over Bridge) Projects
  { id: 20, title: "Four ROBs Design Audit", location: "Chandauli, UP", client: "UP State Bridge Corporation", category: "ROB", description: "Audit and proof checking of design of ROBs 78C, 71C, 74C, 68C" },
  { id: 21, title: "ROB 9B Design Audit", location: "Jaunpur, UP", client: "UP State Bridge Corporation", category: "ROB", description: "Audit and proof checking of design" },
  { id: 22, title: "ROB 102B Load Testing", location: "Amethi-Kakawa, Sultanpur, UP", client: "UP State Bridge Corporation", category: "ROB", description: "Slab load testing on two-lane ROB on northern railway crossing" },
  { id: 23, title: "ROB 33B Load Testing", location: "Sultanpur, UP", client: "UP State Bridge Corporation", category: "ROB", description: "Slab load testing on two-lane ROB on northern railway crossing" },
  { id: 24, title: "ROB 4C Load Testing", location: "Lahartara-Phulwaria, Varanasi, UP", client: "UP State Bridge Corporation", category: "ROB", description: "Slab load testing on two-lane ROB on northern railway crossing" },
  { id: 25, title: "ROB 5C Load Testing", location: "Lahartara-Manduadih, Varanasi, UP", client: "UP State Bridge Corporation", category: "ROB", description: "Slab load testing on two-lane ROB on northern railway crossing" },

  // Fire Damaged Structures
  { id: 28, title: "Nafees Building Kanpur", location: "Kanpur, UP", client: "Nafees Tower Association", category: "Fire Damage", description: "Condition assessment and strengthening work of fire-damaged building and market" },
  { id: 29, title: "Super Hamraj Building", location: "Kanpur, UP", client: "Super Hamraj Association", category: "Fire Damage", description: "Condition assessment and strengthening work of fire-damaged building and market" },
  { id: 39, title: "Annapurna Grandeur", location: "Sigra, Varanasi, UP", client: "Annapurna Grandeur Society", category: "Fire Damage", description: "Inspection and audit report of fire-damaged residential flats" },

  // Water Structures
  { id: 8, title: "4 Overhead Tanks", location: "Eastern UP", client: "L&T", category: "Water Structures", description: "Strengthening of 4 overhead water tanks" },
  { id: 42, title: "Settling Tanks Design", location: "Varanasi zone", client: "JBPL Jalandhar, Punjab", category: "Water Structures", description: "Structural design of various settling tanks" },
  { id: 43, title: "Overhead Water Tanks", location: "Bhadohi, UP", client: "Jal Shakti Mission", category: "Water Structures", description: "Structural design of various overhead water tanks" },

  // Major Infrastructure
  { id: 10, title: "Chilla Mayur Vihar Corridor", location: "Delhi NCR", client: "UPSBC", category: "Infrastructure", description: "Proof consultancy of 6km long elevated corridor, Project cost: ₹600 CR" },
  { id: 38, title: "Bundelkhand Expressway Package 5", location: "Etawah, UP", client: "CECO India Pvt Ltd", category: "Infrastructure", description: "Audit and strengthening of expressway package" },
  { id: 41, title: "CETP Augmentation Project", location: "New Delhi", client: "NEERCARE Pvt. Ltd.", category: "Infrastructure", description: "Checking the structure of CETP augmentation project" },

  // Tourist & Heritage
  { id: 18, title: "Kurseong Tourist Lodge", location: "Kurseong, West Bengal", client: "West Bengal Tourism Dept", category: "Heritage", description: "Strengthening of Roudra Chhaya Lodge" },
  { id: 35, title: "Kurseong Lodge Inspection", location: "Kurseong, West Bengal", client: "West Bengal Tourism Dept", category: "Heritage", description: "Inspection and strengthening of tourist lodge" },

  // Residential Complexes
  { id: 36, title: "Indian Oil Nagar Audit", location: "Noida Sector 55, UP", client: "Wisdom Tech Seal Pvt Ltd", category: "Residential", description: "Inspection and audit of Site-I and Site-II (8 blocks, 7 floors)" },

  // Load Testing Projects
  { id: 15, title: "Old Chopan Bridge Load Testing", location: "Varanasi-Shaktinagar, UP", client: "State Highway", category: "Load Testing", description: "Load testing of bridge across Sone River on SH-05A" }
];

const categories = [
  { name: "All Projects", value: "all", count: projects.length },
  { name: "Bridges", value: "Bridges", count: projects.filter(p => p.category === "Bridges").length },
  { name: "Healthcare", value: "Healthcare", count: projects.filter(p => p.category === "Healthcare").length },
  { name: "Government Buildings", value: "Government", count: projects.filter(p => p.category === "Government").length },
  { name: "ROB Projects", value: "ROB", count: projects.filter(p => p.category === "ROB").length },
  { name: "Fire Damaged", value: "Fire Damage", count: projects.filter(p => p.category === "Fire Damage").length },
  { name: "Water Structures", value: "Water Structures", count: projects.filter(p => p.category === "Water Structures").length },
  { name: "Infrastructure", value: "Infrastructure", count: projects.filter(p => p.category === "Infrastructure").length },
  { name: "Heritage & Tourism", value: "Heritage", count: projects.filter(p => p.category === "Heritage").length }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200 pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Projects
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            75+ major projects across 12 states in India
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="mb-12 bg-linear-to-r from-red-50 to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Proven Track Record of Excellence
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            ASCOM Buildcon has successfully completed numerous projects across various sectors throughout India. Our expertise spans from heritage conservation to modern infrastructure rehabilitation, with a strong focus on bridges, healthcare facilities, and government buildings.
          </p>
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">75+</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Major Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">12+</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">States Covered</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">85%</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Client Retention</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">100%</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">On-Time Delivery</p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === category.value
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-red-600 bg-red-50 dark:bg-red-900/30 dark:text-red-400 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {project.description}
                </p>

                <div className="space-y-1 text-sm">
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Location:</span> {project.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Client:</span> {project.client}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 px-6 py-3 border-t border-gray-100 dark:border-gray-700">
                <Link
                  to="/contact-us"
                  className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-medium text-sm flex items-center group"
                >
                  Similar Project? Contact Us
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-linear-to-r from-red-600 to-red-700 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Have a Similar Project?</h2>
          <p className="text-xl mb-6 text-red-50">
            Let our IIT experts assess your structural challenges and provide innovative solutions.
          </p>
          <Link
            to="/contact-us"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
