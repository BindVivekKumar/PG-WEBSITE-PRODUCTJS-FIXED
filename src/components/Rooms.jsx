import React from "react";

export default function Rooms() {
  const list = [
    { type: "Single", price: "₹14000", desc: "Private room with attached washroom. (Food Included)" },
    { type: "Double", price: "₹9000", desc: "Shared room with two beds. (Food Included)" },
    { type: "Triple", price: "₹8000", desc: "Shared room with three beds. (Food Included)" },
  ];

  return (
    <section id="rooms" className="py-20 bg-white" aria-labelledby="rooms-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2
          id="rooms-heading"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Rooms & Pricing
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose the room type that best suits your comfort and budget.
        </p>

        {/* Room Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {list.map((r) => (
            <article
              key={r.type}
              className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{r.type}</h3>
              <p className="text-2xl font-bold text-indigo-600 mb-2">
                {r.price}
                <span className="text-gray-500 text-sm font-normal"> / month</span>
              </p>
              <p className="text-gray-600 mb-6">{r.desc}</p>
              <button
                className="w-full px-4 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition"
                onClick={() =>
                  document
                    .getElementById("enquiry-form")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Enquiry Now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
