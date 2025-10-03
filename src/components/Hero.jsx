import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 pt-28 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse md:flex-row items-center gap-14">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-snug">
            Comfortable & Affordable{" "}
            <span className="text-indigo-600">PG Accommodation</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            Stay near your college or office with all the essentials — 
            <span className="text-gray-800 font-medium"> WiFi, Laundry, Homemade Food,</span> 
            and reliable <span className="text-gray-800 font-medium">24/7 Security</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() =>
                document
                  .getElementById("enquiry-form")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition"
            >
              Enquiry Now
            </button>

            <a
              href="tel:+91-9693915693"
              className="px-7 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold shadow-sm hover:bg-gray-50 transition"
            >
              📞 Call / WhatsApp
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* <img
              src="WhatsApp Image 2025-10-03 at 23.33.32_42cd83b4.jpg"
              alt="PG Building and Rooms"
              className="w-full rounded-2xl shadow-xl object-cover"
            /> */}
            {/* Decorative Accent */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-indigo-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
