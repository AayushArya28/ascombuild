import React from "react";

const clientsData = {
  Corporate: [
    "Amazon",
    "BP-Ergo Limited",
    "Comfort Projects Pvt. Ltd.",
    "Edelweiss",
    "Godrej",
    "Hindustan Unilever Limited",
    "HSBC",
    "Ikea",
    "National Aviation Company of India Ltd. (Air India)",
    "Raymond Ltd",
    "RBS – Royal Bank of Scotland",
    "Spensors Retail Ltd.",
    "Nirlon Ltd",
    "Tata Consultancy services",
    "The Bombay Dyeing & Manufacturing Co. Ltd.",
    "UTI Technology Pvt ltd",
    "V-Trans India Ltd",
  ],
  "Industrial/Chemical/Pharma": [
    "Ahmed & Company (Cold Storage & Exports ) Pvt. Ltd.",
    "Ajanta Pharma Limited",
    "Alcon Cement Company Pvt.Ltd.",
    "Anchor Cork Pvt. Ltd.",
    "Asahi India Glass Limited",
    "Bafana Motors (Mumbai) Pvt. Ltd.",
    "BASF India Limited",
    "Bharat Oman Refineries Limited",
    "Bisleri",
    "Cadbury India Ltd",
    "Century Rayon Ltd",
    "Chambal Fertilizer",
    "Cipla Ltd",
    "Crompton Greaves",
    "Fair Export India Pvt Ltd",
    "FDC Pharma",
    "Fine Organic Industries",
    "Galaxy Surfactants Pvt Ltd",
    "Gharda Chemicals",
    "Glenmark Generics Limited",
    "Goa Minerals Pvt ltd",
    "Gujrat Themis Biosyn Limited",
    "Hemmo Pharmaceuticals Pvt. Ltd.",
    "Herdillia Chemicals",
    "Hindalco Industries Limited",
    "Hindustan Zinc Ltd",
    "IVP Limited",
    "JBF Industries Limited",
    "Kamala Mills",
    "Loreal Lupin Limited",
    "Rallis Ltd",
    "RPG Life Science Limited",
    "Savala Foods & Cold Storage Pvt. Ltd.",
    "Suam Overseas Pvt. Ltd.",
    "Themis Medicare Limited",
    "Toyo Engineering",
    "United Phospurus Limited",
    "V. M. Salgaocar & Bro. Pvt. Ltd.",
    "Bayer",
    "Cadila Limited",
  ],
  "Hotels & Hospitals": [
    "Apollo Hospital",
    "Balprada Hotels & Hospitality Pvt. Ltd., New Delhi",
    "Bedekar Hospital, Thane",
    "Breach Candy Hospital Trust",
    "Chalet Hotel Ltd.",
    "ESI Hospitals-Kolkata,Chennai, Coimbatore,Bhubaneshwar, Kanpur",
    "GCC Hotel and Club,Miraroad",
    "Hotel Leela Palace,Bengaluru",
    "Hotel Twins, Thane",
    "Jaslok Hospital",
    "Jupiter Hospitals, Pune",
    "Meditrina Dining Pvt. Ltd.",
    "NRB Group Hotels, Goa",
    "Oberoi",
    "Hotel Vishvabharati,Mulund",
    "Otters Club, Bandra",
    "Pednest Hospital,Dombivili",
    "Quality Inn Parle International",
    "Renaissance, Powai",
    "Ruby Hall Clinic",
    "Silchar Medical Hospital",
  ],
  "Government & Semi Govt": [
    "Central Public Works Department (CPWD)",
    "Delhi Metro Rail Corporation",
    "Engineering Projects(India)Ltd (EPIL)",
    "Hidustan PetroleumCorporation Limited. (HPCL)",
    "Indian Rubber ManufacturesResearch Association",
    "Indonesian Embassy",
    "IRCON International Ltd",
    "Maharashtra Agro-Industrial Development Corporation Limited",
    "Mahavitran Ltd",
    "Meghalay House, New Delhi",
    "MMTC Ltd",
    "MP WRD",
    "National Buildings Construction Corporation Limited (NBCC)",
    "NTPC Limited",
    "RCF Ltd",
    "Society for Petroleum Laboratory",
    "Steel Authority of India Ltd",
    "Uttar Pradesh Projects Corporation Ltd. (UPPCL)",
    "Uttar Pradesh Rajkiya Nirman Nigam (UPRNN)",
  ],
  "Real Estate & Developers": [
    "Ashar Builders and Developers.",
    "B G Shirke",
    "BKC Properties Pvt. Ltd.",
    "Chirag Construction RMC",
    "Embassy Group",
    "Fem Constructions",
    "Happy Homes",
    "Haware Engineers & Builders Pvt. Ltd.",
    "JMD, Gurgaon",
    "K. Raheja Corporate Services Pvt. Ltd.",
    "Kalpataru",
    "Lodha Developers",
    "Mayfair Housing Pvt. Ltd.",
    "Nirmal Lifestyles Limited",
    "Nitco Limited",
    "Prestige Group",
    "Puranik Builders",
    "Rajesh Lifespaces",
    "Sheth Builders Pvt. Ltd.",
    "Shree Balaji Developers",
    "Sobha Developers Limited",
    "Vijay Grihanirman (Pvt. Ltd.)",
  ],
  Infrastructural: [
    "ACC Limited",
    "B. E. Bllimoria & Co. Limited",
    "Costal Projects Limited",
    "Hindustan Construction Co. Limited",
    "Jaypee Group",
    "L&T ECC Limited",
    "Mc Nally Bharat Engineering Co Ltd",
    "Megha Engineering & Infrastructures Limited",
    "MEP Infrastructure Developers ltd",
    "NKG Infra Limited",
    "Progressive Civil Construction Co Pvt. Ltd.",
    "Reliance Infrastructure Limited",
    "Shapoorji Pallonji & Co. Limited",
    "Soma Isolux",
    "Unity Infraprojects Limited",
  ],
  "Schools / Colleges": [
    "Abhivav Vidyalay, Dombivili",
    "A.K. Joshi School, Thane",
    "Bedekar School, Thane",
    "Canossa Convent Primary School, Andheri",
    "Chetana Institute of Management & Research",
    "Edubridge International School",
    "IIT Delhi",
    "Miranda House, Delhi",
    "NES, Mulund",
    "Raheja College (Sadhana Education Society)",
    "RCF School",
    "Shakuntala School, Marine Lines",
    "Sophia College",
    "Smt. Sulochanadevi Singhania School, Thane",
    "Udyanchal high school, Vikhroli",
    "Vidya Prasarak Mandal, Thane",
    "Vivek Education Society, Goregaon",
  ],
  "Public Trust": [
    "Alimaan Charitable Trust",
    "Ayyappa Seva Sangham,Goregaon,",
    "Bombay Gymkhana",
    "Khar Gymkhana",
    "Manav Seva Sangh",
    "Marathi Granth Sangralay,Thane",
    "Matunga Gujarai Club",
    "Paramshanti Dham",
    "SPARC SNS",
    "Tata Education and Development Trust",
    "Yashwantrao Chavan Prathistan, Mumbai",
  ],
  Residential: [
    "Anjali CHS, Colaba, Mumbai",
    "Bakhtawar, Nariman Point, Mumbai",
    "Brighton CHS, Nepeansea Road, Mumbai",
    "Cliff CHS Ltd., Malabar Hill, Mumbai",
    "Clifton, Juhu",
    "Dipti Shakti Mukti CHS, Versova, Mumbai",
    "Lands End CHS Ltd.",
    "Madhuban Apartment, Andheri-(w)",
    "Milton, Juhu",
    "Minerva Mansion, Churni Road, Mumbai",
    "New Jyoti CHS, Sector 17, Dwarika, New Delhi",
    "Ocean Crest CHS, Warden road, Mumbai",
    "Panchavati CHS, Vasant vihar, Thane",
    "Prime rose, Juhu",
    "Sagar Sangeet & Conversion Scheme CHS Ltd., Colaba, Mumbai",
    "Shobhana Apartments, Khar (w), Mumbai",
    "Urmi Aangan, Pedder Road.",
  ],
};

const Clients = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Clients
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-200">
            Trusted by leading organizations across industries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {Object.entries(clientsData).map(([category, clients], index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">
                {category}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {clients.map((client, clientIndex) => (
                  <li
                    key={clientIndex}
                    className="text-gray-600 flex items-start"
                  >
                    <span className="text-blue-500 mr-2">•</span>
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
