import React, { useState } from "react";
import axios from 'axios';


export default function EnquiryForm({ ownerEmail = "" }) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    requirement: "Single",
    address: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  function update(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {

      await axios.post("http://localhost:5000/api/v1/uploadquery", form)
      console.log(form);

      // Form reset
      setForm({
        fullName: "",
        phone: "",
        email: "",
        requirement: "Single",
        address: "",
        message: "",
      });

      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }


  return (
    <section
      id="enquiry-form"
      className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50 scroll-mt-16"
      aria-labelledby="enquiry-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="enquiry-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
          >
            Enquiry / Booking
          </h2>
          <p className="text-gray-600">
            Fill out the form and we’ll get back to you within 24 hours.
          </p>
        </div>

        {/* Layout: Form + Info */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-2xl p-8 sm:p-10 space-y-6 border border-blue-100"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="fullName"
                value={form.fullName}
                onChange={update}
                required
                className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 text-sm"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={update}
                required
                pattern="[0-9+ ]{8,15}"
                className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 text-sm"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email (optional)
              </label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={update}
                className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 text-sm"
                placeholder="your@email.com"
              />
            </div>

            {/* Requirement */}
            <div>
              <label
                htmlFor="requirement"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Requirement
              </label>
              <select
                id="requirement"
                name="requirement"
                value={form.requirement}
                onChange={update}
                className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 text-sm"
              >
                <option>Single</option>
                <option>Double</option>
                <option>Triple</option>
              </select>
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address
              </label>
              <input
                id="address"
                name="address"
                value={form.address}
                onChange={update}
                className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 text-sm"
                placeholder="Where are you staying now?"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message / Notes
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={update}
                className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 text-sm"
                placeholder="Any special request..."
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition disabled:opacity-50"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Submit Enquiry"}
              </button>

              <button
                type="button"
                className="flex-1 px-6 py-3 bg-white border border-blue-300 text-blue-700 font-medium rounded-lg shadow-md hover:bg-blue-50 transition"
                onClick={() => {
                  const raw = localStorage.getItem("pg_leads_v2") || "[]";
                  const leads = JSON.parse(raw);
                  if (leads.length === 0) return alert("No leads stored yet.");
                  const keys = Object.keys(leads[0]);
                  const csv = [
                    keys.join(","),
                    ...leads.map((l) =>
                      keys.map((k) => '"' + (l[k] || "") + '"').join(",")
                    ),
                  ].join("\n");
                  const blob = new Blob([csv], { type: "text/csv" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = "pg_leads.csv";
                  a.click();
                  URL.revokeObjectURL(url);
                }}
              >
                Download Leads
              </button>
            </div>

            {/* Status Messages */}
            {status === "done" && (
              <div className="mt-6 p-3 bg-blue-50 border border-blue-200 text-blue-700 rounded-md text-sm">
                ✅ Thank you — we received your enquiry.
              </div>
            )}
            {status === "error" && (
              <div className="mt-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
                ❌ Something went wrong. Please try again later.
              </div>
            )}
          </form>

          {/* Info Column */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <h3 className="text-xl font-semibold text-gray-900">Need Quick Help?</h3>
            <p className="text-gray-600">
              You can also reach us directly via phone or WhatsApp for faster response.
            </p>
            <a
              href="tel:+91 9693915693"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-medium"
            >
              📞 +91 9693915693
            </a>
            <img
              src="WhatsApp Image 2025-10-03 at 23.33.32_42cd83b4.jpg"
              alt="PG Building"
              className="rounded-xl shadow-md w-full max-w-2xl mx-auto lg:mx-0 border border-blue-100"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
