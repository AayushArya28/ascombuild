import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [whatWeDoDropdown, setWhatWeDoDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Mobile menu states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false);
  const [mobileSegmentOpen, setMobileSegmentOpen] = useState(false);
  const [mobileSpecialisationOpen, setMobileSpecialisationOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleDropdownEnter = (setter) => {
    setter(true);
  }

  const handleDropdownLeave = (setter) => {
    setter(false);
  }

  const toggleMobileSubmenu = (setter) => {
    setter(prev => !prev);
  }

  const navClass = scrolled
    ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2"
    : "bg-white dark:bg-gray-900 shadow-sm py-4";

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 font-sans ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="shrink-0 flex items-center">
            {/* Logo */}
            <Link to="/" aria-label="Home" className="inline-flex items-center transition-transform hover:scale-105 duration-200">
              <img src={logo} alt="ASCOM logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center h-full">
            <Link
              to="/"
              className="text-gray-800 dark:text-gray-100 hover:text-ascom-red dark:hover:text-red-500 px-4 py-2 font-medium transition-colors"
            >
              Home
            </Link>

            {/* About ASCOM Dropdown */}
            <div
              className="relative h-full flex items-center group"
              onMouseEnter={() => handleDropdownEnter(setAboutDropdown)}
              onMouseLeave={() => handleDropdownLeave(setAboutDropdown)}
            >
              <button
                onClick={() => navigate('/about-us')}
                className="text-gray-800 dark:text-gray-100 group-hover:text-ascom-red dark:group-hover:text-red-500 px-4 py-2 font-medium transition-colors inline-flex items-center"
              >
                About ASCOM
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 w-48 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 origin-top-left ${aboutDropdown ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}
              >
                <div className="py-2">
                  <Link to="/about-us" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-ascom-red transition-colors">
                    About Us
                  </Link>
                  <Link to="/leadership" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-ascom-red transition-colors">
                    Leadership
                  </Link>
                </div>
              </div>
            </div>

            {/* What we do Dropdown */}
            <div
              className="relative h-full flex items-center group"
              onMouseEnter={() => handleDropdownEnter(setWhatWeDoDropdown)}
              onMouseLeave={() => handleDropdownLeave(setWhatWeDoDropdown)}
            >
              <a
                href="#"
                className="text-gray-800 dark:text-gray-100 group-hover:text-ascom-red dark:group-hover:text-red-500 px-4 py-2 font-medium transition-colors inline-flex items-center"
              >
                What we do
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </a>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 w-56 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 origin-top-left ${whatWeDoDropdown ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}
              >
                <div className="py-2 relative">
                  {/* Segment Submenu Trigger */}
                  <div className="group/segment relative">
                    <button className="w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-ascom-red transition-colors flex justify-between items-center">
                      Segment
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                    {/* Segment Nested Menu */}
                    <div className="absolute left-full top-0 w-48 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-100 dark:border-gray-700 hidden group-hover/segment:block ml-2">
                      <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-ascom-red transition-colors first:rounded-t-lg">Audit</Link>
                      <Link to="/testing" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-ascom-red transition-colors">Testing</Link>
                      <Link to="/consultancy" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-ascom-red transition-colors">Consultancy</Link>
                      <Link to="/structural-design" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-ascom-red transition-colors last:rounded-b-lg">Structural Design</Link>
                    </div>
                  </div>

                  {/* Specialisation Submenu Trigger */}
                  <div className="group/specialisation relative">
                    <button className="w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-ascom-red transition-colors flex justify-between items-center">
                      Specialisation
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                    {/* Specialisation Nested Menu */}
                    <div className="absolute left-full top-0 w-48 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-100 dark:border-gray-700 hidden group-hover/specialisation:block ml-2">
                      <Link to="/bridges" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-ascom-red transition-colors first:rounded-t-lg">Bridges</Link>
                      <Link to="/skyscrapers" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-ascom-red transition-colors last:rounded-b-lg">Skyscrapers</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/careers"
              className="text-gray-800 dark:text-gray-100 hover:text-ascom-red dark:hover:text-red-500 px-4 py-2 font-medium transition-colors"
            >
              Careers
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-800 dark:text-gray-100 hover:text-ascom-red dark:hover:text-red-500 px-4 py-2 font-medium transition-colors"
            >
              Contact Us
            </Link>

            <div className="ml-4 flex items-center space-x-4">
              <ThemeToggle />
              <a
                href="#"
                className="bg-ascom-red text-white px-5 py-2.5 rounded-md hover:bg-red-700 transition-all shadow-md hover:shadow-lg font-medium uppercase text-sm tracking-wide transform hover:-translate-y-0.5"
              >
                Download Brochure
              </a>
            </div>

          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />

            {!isOpen && (
              <button
                onClick={() => setIsOpen(true)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ascom-red"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>

        {/* Drawer */}
        <div
          className={`relative w-full max-w-sm bg-white dark:bg-gray-900 h-full shadow-2xl flex flex-col transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img src={logo} alt="ASCOM logo" className="h-10 w-auto" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-4 px-6 space-y-4">
            <Link
              to="/"
              className="block text-base font-medium text-gray-800 dark:text-gray-200 hover:text-ascom-red dark:hover:text-red-500 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* About ASCOM Mobile */}
            <div>
              <div
                className="flex justify-between items-center py-2 cursor-pointer group transition-colors duration-200"
                onClick={() => toggleMobileSubmenu(setMobileAboutOpen)}
              >
                <span className="text-base font-medium text-gray-800 dark:text-gray-200 group-hover:text-ascom-red dark:group-hover:text-red-500">About ASCOM</span>
                <span className={`text-gray-500 group-hover:text-ascom-red transform transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180' : ''}`}>{mobileAboutOpen ? '−' : '+'}</span>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileAboutOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-2 mt-2 border-l-2 border-red-100 dark:border-gray-700 ml-1">
                  <Link
                    to="/about-us"
                    className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-ascom-red transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/leadership"
                    className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-ascom-red transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Leadership
                  </Link>
                </div>
              </div>
            </div>

            {/* What we do Mobile */}
            <div>
              <div
                className="flex justify-between items-center py-2 cursor-pointer group transition-colors duration-200"
                onClick={() => toggleMobileSubmenu(setMobileWhatWeDoOpen)}
              >
                <span className="text-base font-medium text-gray-800 dark:text-gray-200 group-hover:text-ascom-red dark:group-hover:text-red-500">What we do</span>
                <span className={`text-gray-500 group-hover:text-ascom-red transform transition-transform duration-300 ${mobileWhatWeDoOpen ? 'rotate-180' : ''}`}>{mobileWhatWeDoOpen ? '−' : '+'}</span>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileWhatWeDoOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-2 mt-2 border-l-2 border-red-100 dark:border-gray-700 ml-1">
                  {/* Segment Submenu */}
                  <div>
                    <div
                      className="flex justify-between items-center py-2 cursor-pointer group"
                      onClick={() => toggleMobileSubmenu(setMobileSegmentOpen)}
                    >
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-ascom-red">Segment</span>
                      <span className={`text-gray-400 group-hover:text-ascom-red text-xs transform transition-transform duration-300 ${mobileSegmentOpen ? 'rotate-180' : ''}`}>{mobileSegmentOpen ? '−' : '+'}</span>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileSegmentOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-4 border-l border-gray-200 dark:border-gray-700 ml-1 space-y-2 mt-1">
                        <Link to="/services" className="block py-1 text-sm text-gray-500 hover:text-ascom-red transition-colors" onClick={() => setIsOpen(false)}>Audit</Link>
                        <Link to="/testing" className="block py-1 text-sm text-gray-500 hover:text-ascom-red transition-colors" onClick={() => setIsOpen(false)}>Testing</Link>
                        <Link to="/consultancy" className="block py-1 text-sm text-gray-500 hover:text-ascom-red transition-colors" onClick={() => setIsOpen(false)}>Consultancy</Link>
                        <Link to="/structural-design" className="block py-1 text-sm text-gray-500 hover:text-ascom-red transition-colors" onClick={() => setIsOpen(false)}>Structural Design</Link>
                      </div>
                    </div>
                  </div>

                  {/* Specialisation Submenu */}
                  <div>
                    <div
                      className="flex justify-between items-center py-2 cursor-pointer group"
                      onClick={() => toggleMobileSubmenu(setMobileSpecialisationOpen)}
                    >
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-ascom-red">Specialisation</span>
                      <span className={`text-gray-400 group-hover:text-ascom-red text-xs transform transition-transform duration-300 ${mobileSpecialisationOpen ? 'rotate-180' : ''}`}>{mobileSpecialisationOpen ? '−' : '+'}</span>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileSpecialisationOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-4 border-l border-gray-200 dark:border-gray-700 ml-1 space-y-2 mt-1">
                        <Link to="/bridges" className="block py-1 text-sm text-gray-500 hover:text-ascom-red transition-colors" onClick={() => setIsOpen(false)}>Bridges</Link>
                        <Link to="/skyscrapers" className="block py-1 text-sm text-gray-500 hover:text-ascom-red transition-colors" onClick={() => setIsOpen(false)}>Skyscrapers</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/careers"
              className="block text-base font-medium text-gray-800 dark:text-gray-200 hover:text-ascom-red dark:hover:text-red-500 py-2"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/contact-us"
              className="block text-base font-medium text-gray-800 dark:text-gray-200 hover:text-ascom-red dark:hover:text-red-500 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <a
              href="#"
              className="block text-base font-medium text-gray-800 dark:text-gray-200 hover:text-ascom-red dark:hover:text-red-500 py-2"
            >
              Download Brochure
            </a>
          </div>

          {/* Footer Contact Info */}
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                0542-2989427 / 9415 872 871
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                9.00 am - 6.00 pm
              </div>
              <div className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                <svg className="w-4 h-4 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <div>
                  info@ascombuild.com / <br /> ascombuildcon@gmail.com
                </div>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-800 dark:text-white hover:text-ascom-red text-xl transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-800 dark:text-white hover:text-ascom-red text-xl transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-800 dark:text-white hover:text-ascom-red text-xl transition-colors"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
