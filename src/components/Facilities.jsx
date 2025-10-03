import React from "react";

export default function Facilities() {
  const items = [
    { icon: "📶", title: "Free WiFi", desc: "High-speed internet access" },
    { icon: "🧺", title: "Laundry", desc: "Weekly laundry service" },
    { icon: "🍛", title: "Homemade Food", desc: "Nutritious daily meals" },
    { icon: "🛏️", title: "Furnished Rooms", desc: "Comfortable beds & storage" },
    { icon: "🧹", title: "Housekeeping", desc: "Regular cleaning service" },
    { icon: "🔒", title: "Security", desc: "24/7 security & CCTV" },
  ];

  return (
    <section id="facilities" className="py-20 bg-gray-50" aria-labelledby="facilities-heading">
      <div className="max-w-7xl mx-auto px-6">   {/* <-- changed here */}
        <h2 id="facilities-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Facilities
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Enjoy a comfortable and secure stay with all essential amenities included.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {items.map((i) => (
            <div key={i.title} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-3 bg-indigo-50 w-16 h-16 flex items-center justify-center rounded-full">{i.icon}</div>
              <h3 className="font-semibold text-gray-900">{i.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
