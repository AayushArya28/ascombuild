import React from 'react';
import ServiceSidebar from './ServiceSidebar';
import { Link } from 'react-router-dom';

const ServicePageLayout = ({ title, bgImage, children }) => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 pt-20">
            {/* Hero Section */}
            <div className="relative bg-gray-900 py-16 flex items-center justify-center">
                {bgImage && (
                    <div className="absolute inset-0 overflow-hidden">
                        <img src={bgImage} alt={title} className="w-full h-full object-cover opacity-40" />
                    </div>
                )}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl mb-4 drop-shadow-md">{title}</h1>
                    <div className="text-gray-300 text-sm sm:text-base font-medium">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">{title}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar (Left) */}
                    <aside className="lg:order-first">
                        <ServiceSidebar />
                    </aside>

                    {/* Content (Right) */}
                    <main className="flex-1 min-w-0">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ServicePageLayout;
