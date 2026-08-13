import React from "react";
import heroImage from "../../assets/images/hero.jpeg";

const Hero = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <div className="relative bg-gray-900 h-screen sm:h-150 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Construction project"
          className={`w-full h-full object-cover opacity-60 transition-transform duration-[1400ms] ease-out ${
            isVisible ? "scale-100" : "scale-110"
          }`}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/75 via-gray-950/40 to-gray-900/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1
          className={`text-white mb-4 hero-reveal hero-delay-1 ${
            isVisible ? "is-visible" : ""
          }`}
        >
          ASCOM BUILDCON PVT. LTD.
        </h1>
        <p
          className={`mt-2 text-gray-300 text-sm uppercase tracking-wider hero-reveal hero-delay-2 ${
            isVisible ? "is-visible" : ""
          }`}
        >
          Running by Ex IIT Professors and Alumnus
        </p>
        <p
          className={`mt-4 text-gray-200 max-w-3xl mx-auto text-xl font-semibold hero-reveal hero-delay-3 ${
            isVisible ? "is-visible" : ""
          }`}
        >
          Strengthen Bridges, Preserve Structural Lifelines, Minimize Demolition
        </p>
        <p
          className={`mt-3 text-gray-300 max-w-3xl mx-auto hero-reveal hero-delay-4 ${
            isVisible ? "is-visible" : ""
          }`}
        >
          Specialized structural engineering and construction consultancy dedicated to the scientific rehabilitation, strengthening, and repair of civil infrastructure across India
        </p>
        <p
          className={`mt-2 text-gray-300 max-w-2xl mx-auto hero-reveal hero-delay-5 ${
            isVisible ? "is-visible" : ""
          }`}
        >
          Headquartered in Varanasi, Uttar Pradesh | Branch Office: Noida, NCR
        </p>
        <div
          className={`mt-8 flex justify-center space-x-4 hero-reveal hero-delay-6 ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <a
            href="/projects"
            className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-red-900/30"
          >
            Our Projects
          </a>
          <a
            href="/contact-us"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
