import React from "react";

const clientsData = {
  "Government & Public Sector": [
    "Public Works Department (PWD), Uttar Pradesh",
    "Uttar Pradesh Rajkiya Nirman Nigam (UPRNN)",
    "Uttar Pradesh Projects Corporation Ltd. (UPPCL)",
    "National Buildings Construction Corporation Limited (NBCC)",
    "Central Public Works Department (CPWD)",
    "Archaeological Survey of India (ASI)",
    "Indian Railways",
    "Varanasi Development Authority",
    "Varanasi Municipal Corporation",
    "State Bridge Corporation, UP",
    "UP State Road Transport Corporation",
    "Irrigation Department, UP",
  ],
  "Educational Institutions": [
    "Banaras Hindu University (BHU), Varanasi",
    "Indian Institute of Technology (BHU), Varanasi",
    "Mahatma Gandhi Kashi Vidyapith",
    "Central Hindu School, Varanasi",
    "Sunbeam Group of Educational Institutions",
    "Delhi Public School, Varanasi",
    "St. John's School, Varanasi",
    "Army Public School, Varanasi",
    "Kendriya Vidyalaya, Varanasi",
    "Government Inter Colleges, UP",
  ],
  "Hospitals & Healthcare": [
    "Sir Sunderlal Hospital, BHU",
    "Heritage Hospital, Varanasi",
    "Apex Hospital, Varanasi",
    "Marwari Hospital, Varanasi",
    "Shiv Prasad Gupta Hospital",
    "District Hospital, Varanasi",
    "ESI Hospital, Varanasi",
    "Private Nursing Homes & Clinics",
  ],
  "Religious & Heritage": [
    "Kashi Vishwanath Temple Trust",
    "Sankat Mochan Temple, Varanasi",
    "Durga Temple, Varanasi",
    "ISKCON Temple, Varanasi",
    "Various Ghats along the Ganges",
    "Heritage Buildings in Old Varanasi",
    "Ancient Temples Restoration Projects",
  ],
  "Industrial & Commercial": [
    "Diesel Locomotive Works (DLW), Varanasi",
    "Bharat Heavy Electricals Limited (BHEL)",
    "Container Corporation of India",
    "Hindustan Petroleum Corporation Ltd.",
    "Indian Oil Corporation",
    "State Bank of India",
    "Various Commercial Complexes",
    "Industrial Units in UPSIDC Areas",
  ],
  "Infrastructure": [
    "Road Overbridges (ROBs) in UP",
    "Flyover Projects",
    "Bridge Rehabilitation Projects",
    "Water Treatment Plants",
    "Sewage Treatment Plants",
    "Irrigation Canal Structures",
    "Dam Rehabilitation Projects",
  ],
  "Residential & Housing": [
    "Housing Societies in Varanasi",
    "Group Housing Projects",
    "Residential Complexes",
    "Individual Bungalows",
    "Apartment Buildings",
    "Township Projects",
  ],
};

const Clients = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200 pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Clients
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Trusted by leading organizations across industries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {Object.entries(clientsData).map(([category, clients], index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
                {category}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {clients.map((client, clientIndex) => (
                  <li
                    key={clientIndex}
                    className="text-gray-600 dark:text-gray-400 flex items-start"
                  >
                    <span className="text-red-500 dark:text-red-400 mr-2">
                      •
                    </span>
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
