import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-screen sm:h-150 flex items-center justify-center">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          alt="Construction project"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-white mb-4">
          ASCOM BUILDCON PVT. LTD.
        </h1>
        <p className="mt-2 text-gray-300 text-sm uppercase tracking-wider">
          Running by Ex IIT Professors and Alumnus
        </p>
        <p className="mt-4 text-gray-200 max-w-3xl mx-auto text-xl font-semibold">
          Strengthen Bridges, Preserve Structural Lifelines, Minimize Demolition
        </p>
        <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
          Specialized structural engineering and construction consultancy dedicated to the scientific rehabilitation, strengthening, and repair of civil infrastructure across India
        </p>
        <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
          Headquartered in Varanasi, Uttar Pradesh | Branch Office: Noida, NCR
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/projects"
            className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition-colors"
          >
            Our Projects
          </a>
          <a
            href="/contact-us"
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
