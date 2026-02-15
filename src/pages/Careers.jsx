import React from "react";

const Careers = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200 font-sans pt-20">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-16">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl tracking-wide uppercase">
            Careers
          </h1>
          <p className="mt-2 text-gray-300 text-sm tracking-widest uppercase">
            Home / Careers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Intro Text */}
        <div className="mb-12">
          <h2 className="font-bold text-gray-900 dark:text-white mb-6">Careers</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            ASCOM enamours the kind of personality who plan big, bloom in collaboration and have the strong resolution to realize their ideas.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            If you think you are one of them we are looking for you. Please send us your curriculum -Vitae at <a href="mailto:career@ascombuild.com" className="text-red-600 hover:text-red-700 font-medium">career@ascombuild.com</a>
          </p>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white" />
              </div>

              {/* Mobile No */}
              <div>
                <label htmlFor="mobile" className="block font-medium text-gray-700 dark:text-gray-300 mb-1">Mobile No. *</label>
                <input type="tel" id="mobile" name="mobile" required pattern="[0-9]{10}" title="Please enter a valid 10-digit mobile number" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white" />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white" />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block font-medium text-gray-700 dark:text-gray-300 mb-1">Address</label>
                <input type="text" id="address" name="address" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white" />
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block font-medium text-gray-700 dark:text-gray-300 mb-1">City</label>
                <input type="text" id="city" name="city" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white" />
              </div>

              {/* State */}
              <div>
                <label htmlFor="state" className="block font-medium text-gray-700 dark:text-gray-300 mb-1">State</label>
                <input type="text" id="state" name="state" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white" />
              </div>

              {/* Postal / Zip Code */}
              <div>
                <label htmlFor="zip" className="block font-medium text-gray-700 dark:text-gray-300 mb-1">Postal / Zip Code</label>
                <input type="text" id="zip" name="zip" pattern="[0-9]{6}" title="Please enter a valid 6-digit PIN code" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white" />
              </div>

              {/* Applying for Position Name */}
              <div>
                <label htmlFor="position" className="block font-medium text-gray-700 dark:text-gray-300 mb-1">Applying for Position Name *</label>
                <input type="text" id="position" name="position" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white" />
              </div>

              {/* Upload Resume */}
              <div>
                <label htmlFor="resume" className="block font-medium text-gray-700 dark:text-gray-300 mb-1">Upload Resume</label>
                <div className="flex">
                  <label className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 border border-r-0 border-gray-300 dark:border-gray-500 rounded-l-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                    Choose file
                    <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required className="hidden" />
                  </label>
                  <div className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-400 italic">
                    No file chosen
                  </div>
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">Gender</label>
                <div className="flex items-center space-x-6 mt-2">
                  <label className="flex items-center">
                    <input type="radio" name="gender" value="male" required className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300" />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="gender" value="female" className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300" />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Female</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Your Message */}
            <div>
              <label htmlFor="message" className="block font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
              <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white"></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button type="submit" className="px-8 py-2 border border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-md transition-colors font-medium">
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Careers;
