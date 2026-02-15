import React from "react";

const clients = [
  { name: "Client 1", id: 1 },
  { name: "Client 2", id: 2 },
  { name: "Client 3", id: 3 },
  { name: "Client 4", id: 4 },
  { name: "Client 5", id: 5 },
  { name: "Client 6", id: 6 },
];

const ClientLogo = ({ name }) => (
  <div className="h-20 w-40 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-ascom-red dark:hover:border-red-500 transition-colors group">
    <span className="text-gray-400 dark:text-gray-500 font-bold text-lg group-hover:text-ascom-red dark:group-hover:text-red-500 transition-colors">{name}</span>
  </div>
);

const Clients = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Meet Our Clients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            >
              <ClientLogo name={client.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
