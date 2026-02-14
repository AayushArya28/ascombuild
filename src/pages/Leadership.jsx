import React from 'react';
import { Link } from 'react-router-dom';

const Leadership = () => {
  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-200 pt-20">
      <div className="relative bg-gray-900 h-64 flex flex-col justify-center items-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Leadership</h1>
          <div className="flex space-x-2 text-sm md:text-base">
             <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
             <span>-</span>
             <span className="text-red-500">Leadership</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
            <h2 className="text-xl md:text-2xl text-gray-500 font-medium mb-2">Our Team</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Best & quality team members</h3>
        </div>

        <div className="grid gap-10 md:gap-12">
            {/* Member 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start bg-white dark:bg-gray-700 shadow-lg p-6 rounded-lg transition-all hover:-translate-y-1">
                <div className="w-full md:w-1/3 lg:w-1/4">
                     <img src="https://placehold.co/300x350" alt="Dr. Veerendra Kumar" className="w-full h-auto object-cover rounded-md shadow-sm border border-gray-200" />
                </div>
                <div className="w-full md:w-2/3 lg:w-3/4">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Dr. Veerendra Kumar</h4>
                    <p className="text-gray-500 dark:text-gray-300 font-medium mb-4">Director</p>
                    <div className="text-gray-600 dark:text-gray-300 space-y-2 text-sm md:text-base">
                        <p>Ex. Prof. Civil Engg. IIT BHU, Varanasi</p>
                        <p>FIE, MICI, MISTE, FIGS, MIBC</p>
                        <p>Email: vkumar@ascombuild.com</p>
                        <button className="text-red-600 hover:text-red-700 font-semibold mt-2">Read more...</button>
                    </div>
                </div>
            </div>

            {/* Member 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start bg-white dark:bg-gray-700 shadow-lg p-6 rounded-lg transition-all hover:-translate-y-1">
                 <div className="w-full md:w-1/3 lg:w-1/4">
                     <img src="https://placehold.co/300x350" alt="Dr. Anjani Kumar Shukla" className="w-full h-auto object-cover rounded-md shadow-sm border border-gray-200" />
                </div>
                <div className="w-full md:w-2/3 lg:w-3/4">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Dr. Anjani Kumar Shukla</h4>
                    <p className="text-gray-500 dark:text-gray-300 font-medium mb-4">Managing Director</p>
                     <div className="text-gray-600 dark:text-gray-300 space-y-2 text-sm md:text-base">
                        <p>Ph.D. IIT (BHU), Varanasi, Structural Engg</p>
                        <p>MASCE, MICI, MIEI</p>
                        <p>Email: anjani@ascombuild.com</p>
                        <button className="text-red-600 hover:text-red-700 font-semibold mt-2">Read more...</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
