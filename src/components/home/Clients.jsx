import React from "react";

// Using placeholders since I don't have actual client logos
const clients = [
  { name: "Client 1", logo: "https://via.placeholder.com/150x80?text=LOGO+1" },
  { name: "Client 2", logo: "https://via.placeholder.com/150x80?text=LOGO+2" },
  { name: "Client 3", logo: "https://via.placeholder.com/150x80?text=LOGO+3" },
  { name: "Client 4", logo: "https://via.placeholder.com/150x80?text=LOGO+4" },
  { name: "Client 5", logo: "https://via.placeholder.com/150x80?text=LOGO+5" },
  { name: "Client 6", logo: "https://via.placeholder.com/150x80?text=LOGO+6" },
];

const Clients = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Meet Our Clients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
