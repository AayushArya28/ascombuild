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
      "https://images.unsplash.com/photo-1587351021759-3e566b9af923?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Bridges & Flyovers",
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Dams & Irrigation",
    image:
      "https://images.unsplash.com/photo-1580974511812-4b71978d5017?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Fire Damaged Structures",
    image:
      "https://images.unsplash.com/photo-1563813840208-1425178659d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Heritage",
    image:
      "https://images.unsplash.com/photo-1590059598288-0382379f8c65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Industrial Structures",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Marine Structures",
    image:
      "https://images.unsplash.com/photo-1545620932-d812db3522f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const MarketServed = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 relative inline-block">
          Market Served
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-600"></span>
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

export default MarketServed;
