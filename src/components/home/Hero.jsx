import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-screen sm:h-[600px] flex items-center justify-center">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" // Construction/Bridge image
          alt="Bridge Construction"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
          Building The Nation's Infrastructure
        </h1>
        <p className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto">
          Delivering excellence in structural engineering and construction
          projects across the country.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#"
            className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition-colors"
          >
            Our Projects
          </a>
          <a
            href="#"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
