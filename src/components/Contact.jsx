import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          id="contact-heading"
          className="text-3xl font-bold text-center text-blue-900 mb-10"
        >
          Contact Us
        </h2>

        <div className="bg-white shadow-lg rounded-2xl p-10 max-w-3xl mx-auto">
          <div className="space-y-6 text-gray-700">
            <p className="flex items-center justify-center gap-3 text-lg">
              <span className="text-2xl text-blue-600">📍</span>
              Paramount, Crossing Republic, Ghaziabad
            </p>
            <p className="flex items-center justify-center gap-3 text-lg">
              <span className="text-2xl text-blue-600">📞</span>
              +91 9693915693
            </p>
            <p className="flex items-center justify-center gap-3 text-lg">
              <span className="text-2xl text-blue-600">✉️</span>
             anshuraj6357@gmail.com
            </p>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/maps/dir//Cosmos+Golden+Heights,+Crossings+Republik,+Ghaziabad,+Uttar+Pradesh/@28.6249785,77.3939088,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x390cee3766ed01ad:0x5b0866ff4ed9e8fa!2m2!1d77.4351105!2d28.6250035!3e0?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
