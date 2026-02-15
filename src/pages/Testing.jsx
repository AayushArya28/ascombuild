import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const testingServices = [
    {
        title: "Rebound hammer test",
        description: "Method is based on the principle that the rebound of an elastic mass depends on the hardness of the concrete surface against which the mass strikes. In other words, the amount of rebound... reading form the hammer will depend on the hardness of the concrete surface... which will then co-relate to the compressive strength of the concrete.",
        placeholder: "Rebound Hammer Image"
    },
    {
        title: "Ultrasonic pulse velocity (UPV) test",
        description: "Is an in-situ, non-destructive test to check the quality of concrete. In this test, the strength and quality of concrete is assessed by measuring the velocity of an ultrasonic pulse passing through a concrete structure. higher UPV indicates better quality (density, uniformity, homogeneity etc).",
        placeholder: "UPV Test Image"
    },
    {
        title: "Half-cell potential",
        description: "Is the potential developed at the interface of a metal and an electrolyte. In Reinforced concrete structure this potential is used to indicate corrosion activity of the rebar. The potential difference between the reinforcing steel and a reference electrode is measured. The more negative the potential reading, the higher probability of corrosion activity.",
        placeholder: "Half-cell Potential Image"
    },
    {
        title: "Carbonation of concrete",
        description: "Is a process by which Carbon Dioxide from the air penetrates into the concrete and reacts with Calcium Hydroxide to form Calcium Carbonates. Carbonation itself does not directly damage concrete but it reduces alkalinity of concrete. High alkalinity is needed to protect steel from corrosion.",
        placeholder: "Carbonation Test Image"
    },
    {
        title: "Rebar mapping services",
        description: "Can determine rebar distribution, spacing and location (first and second layers), concrete cover thickness, overall concrete slab thickness, and detect any other features as void and etc in slab, post tension cables, metallic pipes etc.",
        placeholder: "Rebar Mapping Image"
    },
    {
        title: "Core tests",
        description: "Involve taking a cylindrical sample from the structure using a diamond core cutting bit and performing the core compressive loading machine. Core tests are conducted in conformance with the guidelines laid out in IS 516.",
        placeholder: "Core Test Image"
    },
    {
        title: "Pull out test",
        description: "Measures the force required to pull out a previously cast-in steel insert with an enlarged end clamped to the concrete. In this method, a metal rod/disk is pulled out and the force required is related to the compressive strength of concrete. This method is used to determine... bond strength of a coating or overlay material to the substrate or the tensile strength of a material... by measuring the adhesive force.",
        placeholder: "Pull-out Test Image"
    },
    {
        title: "Load test",
        description: "On structural members of RC structure is a prime importance. The structure is loaded... behavior of structural member (deflections, cracks etc) is studied. It is a physical load test. Linear potentiameters are placed below the slab and beams and reading for deflection are recorded as per the gradual increase in the loading.",
        placeholder: "Load Test Image"
    },
    {
        title: "Cut and Pull Out (CAPO)",
        description: "Is a reliable test method to determine in-situ compressive strength of concrete. The groove is recessed through the center hole... a diamond bit with a similar shape as a dental drill. Larger at the tip than at the base. The CAPO test results are found to be within 8% of the results obtained from conventional methods. The pull-force determines the compressive strength of in-situ concrete accurately.",
        placeholder: "CAPO Test Image"
    }

]

const Testing = () => {
    return (
        <ServicePageLayout title="Testing">
            <div className="space-y-8 text-gray-700 dark:text-gray-300">
                <div className="w-full bg-red-50 dark:bg-gray-800 p-4 border-l-4 border-red-600 mb-8 rounded-r-lg">
                    <h3 className="font-bold text-lg text-red-900 dark:text-red-300">Wireless Monitoring Systems for Structural Health Monitoring</h3>
                    <p className="text-sm mt-1">Spotlight Wireless Sensor...</p>
                </div>

                <section>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2">Testing Services</h2>
                    <div className="space-y-12">
                        {testingServices.map((service, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-full md:w-48 shrink-0">
                                    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-32 w-full flex items-center justify-center text-xs text-center p-2 text-gray-500">
                                        {service.placeholder}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </ServicePageLayout>
    );
};

export default Testing;
