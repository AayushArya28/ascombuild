import React from "react";

const services = [
  {
    title: "Concrete Repairs",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Structural Health Monitoring via Sensors",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Underwater Services",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Retrofit Design",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Structural Strengthening",
    image:
      "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Seismic Retrofit",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "External Post Tensioning Systems",
    image:
      "https://images.unsplash.com/photo-1585728362615-56fa2d287ce9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Structural Steel Fabrication",
    image:
      "https://images.unsplash.com/photo-1615598585994-6e6bed1e204c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
          <a
            href="#"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors"
          >
            Read All
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
