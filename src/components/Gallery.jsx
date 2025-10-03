import React from "react";

export default function Gallery() {
  const images = [
    "WhatsApp Image 2025-10-03 at 23.32.13_60d10f22.jpg",
    "WhatsApp Image 2025-10-04 at 00.00.28_80bb9d5e.jpg",
    "WhatsApp Image 2025-10-04 at 00.00.26_4db690b4.jpg",
    "WhatsApp Image 2025-10-03 at 23.53.58_b54ae5e2.jpg",
    "WhatsApp Image 2025-10-03 at 23.43.56_71c4c923.jpg",
    "WhatsApp Image 2025-10-03 at 23.37.04_e33f0bdf.jpg",
    "WhatsApp Image 2025-10-04 at 00.01.07_b30342b5.jpg",
    "WhatsApp Image 2025-10-03 at 23.32.12_0d605000.jpg"


  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2
          id="gallery-heading"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Gallery
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A glimpse of our PG — clean rooms, cozy interiors, and welcoming spaces.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {images.map((i) => (
            <figure
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
            >
              <div className="overflow-hidden">
                <img
                  src={`${i}`}
                  alt={`PG photo ${i}`}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              {/* <figcaption className="text-sm text-gray-700 text-center py-3">
                Room View {i}
              </figcaption> */}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
