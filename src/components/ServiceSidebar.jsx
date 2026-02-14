import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ServiceSidebar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const linkClass = (path) =>
        `block px-4 py-2 text-sm transition-colors duration-200 flex items-center ${isActive(path)
            ? 'text-red-600 font-medium bg-red-50 dark:bg-gray-800'
            : 'text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 hover:bg-gray-50 dark:hover:bg-gray-800'
        }`;

    return (
        <div className="w-full lg:w-64 shrink-0 space-y-8">
            {/* Specialisation */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                    Specialisation
                </h3>
                <nav className="space-y-1">
                    <Link to="/bridges" className={linkClass('/bridges')}>
                        <span className="w-6"><i className="fas fa-archway"></i></span> {/* Placeholder icon */}
                        Bridges
                    </Link>
                    <Link to="/skyscrapers" className={linkClass('/skyscrapers')}>
                        <span className="w-6"><i className="fas fa-building"></i></span> {/* Placeholder icon */}
                        Skyscrapers
                    </Link>
                </nav>
            </div>

            {/* Segment */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                    Segment
                </h3>
                <nav className="space-y-1">
                    {/* Note: Audit isn't a top-level page in the request but was in the screenshot. Mapping it to services or a specific page if requested later. For now pointing to services or a placeholder. */}
                    <Link to="/services" className={linkClass('/services')}>
                        <span className="w-6"><i className="fas fa-chart-line"></i></span>
                        Audit
                    </Link>
                    <Link to="/testing" className={linkClass('/testing')}>
                        <span className="w-6"><i className="fas fa-vial"></i></span>
                        Testing
                    </Link>
                    <Link to="/consultancy" className={linkClass('/consultancy')}>
                        <span className="w-6"><i className="fas fa-handshake"></i></span>
                        Consultancy
                    </Link>
                    <Link to="/structural-design" className={linkClass('/structural-design')}>
                        <span className="w-6"><i className="fas fa-pencil-ruler"></i></span>
                        Structural Design
                    </Link>
                </nav>
            </div>

            {/* Download Brochure */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                    Download brochure
                </h3>
                <a href="#" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    ASCOM Brochure
                </a>
            </div>
        </div>
    );
};

export default ServiceSidebar;
