import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-200 font-sans pt-20">
      {/* Page Title / Hero */}
      <div className="relative bg-gray-900 h-64 flex flex-col justify-center items-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="z-10 relative">
          <h1 className="mb-4 text-white">About Us</h1>
          <div className="flex space-x-2 text-sm md:text-base justify-center">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <span>-</span>
            <span className="text-red-500">About Us</span>
          </div>
        </div>
      </div>

      {/* About ASCOM Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-4">
          <h2 className="text-3xl font-light text-gray-800 dark:text-white uppercase tracking-wide">
            ABOUT <span className="font-bold">ASCOM</span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2">
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 text-justify text-sm leading-relaxed">
              <p className="mb-4">
                Renascence of structures is the basal of the founding the ASCOM. This company is a confluence of a IIT Kanpur alumnus of 1974 batch who is a legendary structural engineer with approx. 38 year of teaching experience to the best talent of country, with a young, dynamic and swingeing field Engineer carrying doctoral degree in retrofitting and strengthening of damaged structures.
              </p>
              <p className="mb-4">
                Veerendra Kumar, a veteran ex-professor of IIT Varanasi and an illustrious structural engineer founded an organisation collaborating with a very fresh talent and splendid structural scholar Dr. Anjani Kumar Shukla who completed his Ph.D. in Rehabilitation of damage structure from IIT Varanasi and worked in Multinational Companies (MNCs) on several important projects.
              </p>
              <p className="mb-4">
                ASCOM continuously focusing on "Building the trust" by providing consultancy for repairs, rehabilitation and retrofitting of damage structures. Seeing the current growth and revamping of the entire Indian infrastructure market, which includes Railways, Airports, Roads, Bridges, Hydro Power Plants, Residential and Commercial high-rise towers, the company has started its consultancy office from very ancient city VARANASI, Uttar Pradesh, which is full of antique structures in and around city and have a business relationship with various national and international organizations. In response to the innovative and high quality solutions, ASCOM, has been called upon to solve some of the most challenging structural problems of the old and damage structures of Varanasi and surrounding cities. Company is actively involved in structural Audit and health monitoring of bridges and buildings along with providing the solution for repair and strengthening of important damaged structures. ASCOM aims to innovate with new testing methods and make existing instrumentation more friendly and accurate by doing in-situ and laboratory Research work.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            {/* Placeholder for the construction illustration */}
            <img
              src="https://placehold.co/600x400?text=Construction+Workers+Illustration"
              alt="Construction Workers Illustration"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </div>

      {/* Director's Message Section */}
      <div className="bg-white dark:bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/4 flex flex-col items-center">
            <div className="bg-white p-2 shadow-lg rotate-2 transform hover:rotate-0 transition-transform duration-300 mb-4 border border-gray-200">
              <img
                src="https://placehold.co/300x350?text=Dr.+Veerendra+Kumar"
                alt="Dr. Veerendra Kumar"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-light text-gray-800 dark:text-white mb-6 uppercase tracking-wide">
              Director's <span className="font-bold">Message</span>
            </h2>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 text-justify text-sm leading-relaxed">
              <p className="mb-4">
                I am delighted to put-forth few words about the objective of the ASCOM BUILDCON PRIVATE LIMITED.
              </p>
              <p className="mb-4">
                During the last 40 years of my association with academics and providing consultancy services to large nos. of Government sponsored projects regarding their structural viability. I have noticed that there are a very few organizations which are keen to take up renovation of old and heritage buildings. The approach of these organizations are either cosmetic in nature or of dismantling the structures completely and rebuilt it.
              </p>
              <p className="mb-4">
                I have tried to adopt an innovative and cost efficient approach in ASCOM BUILDCON PRIVATE LIMITED at the time of providing solution of damaged buildings and bridges due to faulty workmanship or substandard materials etc. The S.S. Hospital, B.H.U. structure are as an example of retrofitting work carried out based on the report prepared in my supervision including hundred other like structures.
              </p>
              <p className="mb-4">
                I am sure the technical capability and managerial approach of this organization will go a long way in carrying out retrofitting works in future.
              </p>
              <p className="mb-6">
                I wish a bright future for the company and the old structures which needs retrofitting under the management of this company.
              </p>

              <div className="text-gray-800 dark:text-gray-200">
                <p className="font-bold">Dr Veerendra Kumar</p>
                <p className="text-sm">(FIE, MICI, MISTE, FIGS, MIBC)</p>
                <p className="text-sm">Ex-Professor, Civil Engineering.</p>
                <p className="text-sm">IIT (BHU) Varanasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
