import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

  return (
    <footer className="bg-[#2a2d34] text-white pt-16 pb-4 relative mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed text-justify">
              Renascence of structures is the basal of the founding the ASCOM. This company is a confluence of a IIT Kanpur alumnus of 1974 batch who is a legendary structural engineer with approx. 38 year of teaching experience to the best talent of country, with a young, dynamic and swingeing field Engineer carrying doctoral degree in retrofitting and strengthening of damaged structures.
            </p>
             <div className="flex space-x-4 mt-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-sm hover:bg-red-600 hover:border-red-600 transition-colors">
                 <span className="text-xs">F</span>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-sm hover:bg-red-600 hover:border-red-600 transition-colors">
                 <span className="text-xs">T</span>
              </a>
               <a href="#" className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-sm hover:bg-red-600 hover:border-red-600 transition-colors">
                 <span className="text-xs">I</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-red-500 transition-colors block border-b border-gray-700 pb-2 mb-2">Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-red-500 transition-colors block border-b border-gray-700 pb-2 mb-2">About ASCOM</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-red-500 transition-colors block border-b border-gray-700 pb-2 mb-2">What we do</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-red-500 transition-colors block border-b border-gray-700 pb-2 mb-2">Careers</Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-red-500 transition-colors block border-b border-gray-700 pb-2 mb-2">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-4">Contact us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                 <span className="mt-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></span>
                <span>202, Vrindavan Residency, Nuwan<br/>Varanasi, 221011</span>
              </li>
              <li className="flex items-start gap-3">
                 <span className="mt-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span>
                <span>+91 85738 37383 / 0542-2989427</span>
              </li>
              <li className="flex items-start gap-3">
                 <span className="mt-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span>
                <span>info@ascombuild.com /<br/>ascombuildcon@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#22252b] mt-12 py-6 border-t border-gray-700">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-500 text-sm text-center">
                 © ASCOM 2022. Developed by Daksh IT Solutions
            </p>
         </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
      >
         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
      </button>
    </footer>
  );
};

export default Footer;
