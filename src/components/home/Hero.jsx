import React from "react";
import heroImage from "../../assets/images/hero.jpeg";

const Hero = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <div className="relative bg-gray-900 min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20">
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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-16 sm:pt-20 lg:pt-24">
        <div className="max-w-3xl text-left">
          <h1
            className={`text-white mb-3 sm:mb-4 text-3xl sm:text-5xl lg:text-7xl leading-tight tracking-tight hero-reveal hero-delay-1 ${
              isVisible ? "is-visible" : ""
            }`}
          >
            ASCOM BUILDCON PVT. LTD.
          </h1>
          <p
            className={`mt-2 text-gray-300 text-[10px] sm:text-sm uppercase tracking-wider hero-reveal hero-delay-2 ${
              isVisible ? "is-visible" : ""
            }`}
          >
            Founded by Ex-IIT Faculty and Alumni
          </p>
          <p
            className={`mt-4 text-gray-200 text-base sm:text-xl lg:text-2xl font-semibold hero-reveal hero-delay-3 ${
              isVisible ? "is-visible" : ""
            }`}
          >
            Strengthening Bridges, Preserving Lifelines
          </p>
          <p
            className={`mt-3 text-gray-300 text-sm sm:text-base max-w-2xl hero-reveal hero-delay-4 ${
              isVisible ? "is-visible" : ""
            }`}
          >
            Specialized structural engineering and repair solutions for critical infrastructure across India.
          </p>
          <p
            className={`mt-2 text-gray-300 text-xs sm:text-sm hero-reveal hero-delay-5 ${
              isVisible ? "is-visible" : ""
            }`}
          >
            Varanasi | Noida
          </p>
          <div
            className={`mt-6 sm:mt-8 flex flex-col sm:flex-row justify-start items-start gap-3 sm:gap-4 hero-reveal hero-delay-6 ${
              isVisible ? "is-visible" : ""
            }`}
          >
            <a
              href="/projects"
              className="bg-red-600 text-white px-6 sm:px-8 py-3 rounded-md text-base sm:text-lg font-medium hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-red-900/30 w-full sm:w-auto"
            >
              Our Projects
            </a>
            <a
              href="/contact-us"
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-md text-base sm:text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
