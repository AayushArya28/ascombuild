import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-8 text-left transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              {/* Placeholder for Logo */}
              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                SAMRACHANA
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Your trusted partner in structural engineering and construction
              solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons placeholders */}
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <span className="sr-only">Facebook</span>F
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
              >
                <span className="sr-only">Instagram</span>I
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 dark:hover:text-red-400"
              >
                <span className="sr-only">YouTube</span>Y
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">
                  +91 123 456 7890
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">
                  info@samrachana.com
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">
                  123 Construction Ave, City, State, Country
                </span>
              </li>
            </ul>
          </div>
          {/* Newsletter or extra column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
              Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-base text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} SAMRACHANA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
