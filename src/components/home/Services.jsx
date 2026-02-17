import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Concrete Repairs",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Structural Health Monitoring via Sensors",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Underwater Services",
    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Retrofit Design",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Structural Strengthening",
    image:
      "https://images.unsplash.com/photo-1590059598288-0382379f8c65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Seismic Retrofit",
    image:
      "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "External Post Tensioning Systems",
    image:
      "https://images.unsplash.com/photo-1585728362615-56fa2d287ce9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Structural Steel Fabrication",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold text-gray-900 dark:text-white mb-12">
          Services Offered
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              <div className="h-48 rounded-lg overflow-hidden mb-4 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-red-900 dark:text-red-300">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors"
          >
            Read All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
