import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const StructuralDesign = () => {
    return (
        <ServicePageLayout title="Structural Design">
            <div className="space-y-8 text-gray-700 dark:text-gray-300">

                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    {/* Placeholder for Stress Analysis Image */}
                    <div className="h-64 sm:h-96 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400">
                        ANSYS Stress Analysis Image
                    </div>
                </div>

                <section>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Structural Design</h2>
                    <p className="text-lg leading-relaxed">
                        <strong className="font-bold text-gray-900 dark:text-white">Structure Design:</strong> ASCOM provide the structural design of all type of buildings, water tank and river crossing foundation for transmission line towers, STP etc. We have highly qualified and competent team of structure designers and consultant from several IITS and NITS.
                    </p>
                </section>

            </div>
        </ServicePageLayout>
    );
};

export default StructuralDesign;
