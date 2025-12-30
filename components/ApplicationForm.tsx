"use client";

import { useState, FormEvent } from "react";

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    equipment: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Add form submission logic
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="w-full max-w-2xl rounded-4xl p-8 md:p-12"
      style={{ backgroundColor: "#111111" }}
    >
      <h1
        className="text-2xl md:text-5xl font-bold mb-8"
        style={{ color: "#ffffff" }}
      >
        Teach robots to be human
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-base mb-2"
            style={{ color: "#f2f2f2" }}
          >
            Your full name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Jon Doe"
            required
            className="w-full px-4 py-3 rounded-lg text-white text-base outline-none focus:ring-2 focus:ring-[#FF8342]"
            style={{
              backgroundColor: "#363636",
            }}
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-base mb-2"
            style={{ color: "#f2f2f2" }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@email.com"
            required
            className="w-full px-4 py-3 rounded-lg text-white text-base outline-none focus:ring-2 focus:ring-[#FF8342]"
            style={{
              backgroundColor: "#363636",
            }}
          />
        </div>

        {/* Country */}
        <div>
          <label
            htmlFor="country"
            className="block text-base mb-2"
            style={{ color: "#f2f2f2" }}
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="USA"
            required
            className="w-full px-4 py-3 rounded-lg text-white text-base outline-none focus:ring-2 focus:ring-[#FF8342]"
            style={{
              backgroundColor: "#363636",
            }}
          />
        </div>

        {/* Equipment */}
        <div>
          <label
            htmlFor="equipment"
            className="block text-base mb-2"
            style={{ color: "#f2f2f2" }}
          >
            What equipment do you have access to? (Optional)
          </label>
          <textarea
            id="equipment"
            name="equipment"
            value={formData.equipment}
            onChange={handleChange}
            placeholder="Smartphone / GoPro / VR headset / Other"
            rows={4}
            className="w-full px-4 py-3 rounded-lg text-white text-base outline-none focus:ring-2 focus:ring-[#FF8342] resize-none"
            style={{
              backgroundColor: "#363636",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 rounded-full text-white text-lg font-medium transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(to right, #FF8342, #FE5911)",
          }}
        >
          Apply Now
        </button>
      </form>

      <style jsx>{`
        input::placeholder,
        textarea::placeholder {
          color: #b7b7b7;
        }
      `}</style>
    </div>
  );
}