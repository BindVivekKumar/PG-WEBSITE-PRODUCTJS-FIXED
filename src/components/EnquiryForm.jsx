import React, { useState } from "react";
import axios from "axios";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    requirement: "Single",
    address: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const API_URL = import.meta.env.VITE_API_URL; // Backend URL from Vercel env variable

  // Update form state
  function update(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // Handle form submit
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await axios.post(API_URL, form, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.success) {
        setStatus("done");
        // Reset form
        setForm({
          fullName: "",
          phone: "",
          email: "",
          requirement: "Single",
          address: "",
          message: "",
        });
      } else {
        setStatus("error");
        console.error("Backend Error:", response.data.message);
      }
    } catch (err) {
      console.error("Request failed:", err);
      setStatus("error");
    }
  }

  return (
    <section
      id="enquiry-form"
      className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Enquiry / Booking
          </h2>
          <p className="text-gray-600">
            Fill out the form and we’ll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-2xl p-8 sm:p-10 space-y-6 border border-blue-100"
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email (optional)
              </label>
              <input
                name="email"
                value={form.email}
                onChange={update}
                className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 text-sm"
                placeholder="your@email.com"
              />
            </div>

            {/* Requirement */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Requirement
              </label>
              <select
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                name="address"
                value={form.address}
                onChange={update}
                className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 text-sm"
                placeholder="Where are you staying now?"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message / Notes
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                rows={4}
                className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 text-sm"
                placeholder="Any special request..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition disabled:opacity-50"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Submit Enquiry"}
            </button>

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
        </div>
      </div>
    </section>
  );
}
