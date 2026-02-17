import React from "react";

const markets = [
  {
    title: "Energy/Data Center",
    image:
      "https://images.unsplash.com/photo-1558494949-ef526bca4899?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hospital",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Bridges & Flyovers",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Dams & Irrigation",
    image:
      "https://images.unsplash.com/photo-1574921676638-3444005aa31b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Fire Damaged Structures",
    image:
      "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Heritage",
    image:
      "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Industrial Structures",
    image:
      "https://images.unsplash.com/photo-1563956461-12711685955b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Marine Structures",
    image:
      "https://images.unsplash.com/photo-1573062638848-735f49896792?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const MarketServed = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 relative inline-block">
          Market Served
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-red-600"></span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {markets.map((market, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={market.image}
                alt={market.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black to-transparent p-4">
                <h3 className="text-white font-semibold text-sm md:text-base">
                  {market.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors"
          >
            Read All
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketServed;
