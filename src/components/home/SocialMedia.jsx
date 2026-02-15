import React from "react";

const videos = [
  {
    title: "Project Update 1",
    thumbnail:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Safety Training",
    thumbnail:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Site Inspection",
    thumbnail:
      "https://images.unsplash.com/photo-1590059598288-0382379f8c65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Client Testimonial",
    thumbnail:
      "https://images.unsplash.com/photo-1545620932-d812db3522f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Annual Meet",
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef526bca4899?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "New Machinery",
    thumbnail:
      "https://images.unsplash.com/photo-1615598585994-6e6bed1e204c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];

const SocialMedia = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Our Social Media
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-red-600 mb-4">Youtube</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden shadow-lg aspect-video cursor-pointer"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all">
                  <svg
                    className="w-16 h-16 text-red-600 opacity-90 group-hover:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-medium"
          >
            View more on our channel &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
