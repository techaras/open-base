"use client";

import { useState, FormEvent } from "react";
import { BasicInformationSection } from "./request-data/BasicInformationSection";
import { DataNeedsSection } from "./request-data/DataNeedsSection";
import { RequestDataFormData } from "./request-data/types";

export function RequestDataForm() {
  const [formData, setFormData] = useState<RequestDataFormData>({
    fullName: "",
    email: "",
    company: "",
    dataType: "",
    dataAmount: "",
    timeline: "",
    hardware: [],
    otherHardware: "",
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

  const handleHardwareChange = (hardware: string) => {
    setFormData((prev) => ({
      ...prev,
      hardware: prev.hardware.includes(hardware)
        ? prev.hardware.filter((h) => h !== hardware)
        : [...prev.hardware, hardware],
    }));
  };

  return (
    <div
      className="w-full max-w-2xl rounded-4xl p-8 md:p-12"
      style={{ backgroundColor: "#111111" }}
    >
      <h1
        className="text-2xl md:text-3xl font-bold mb-2"
        style={{ color: "#ffffff" }}
      >
        Need more data to train your robots?
      </h1>
      <p className="text-base mb-8" style={{ color: "#b7b7b7" }}>
        Please tell us about the data you are looking for, in as much detail as
        possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <BasicInformationSection formData={formData} onChange={handleChange} />
        
        <DataNeedsSection
          formData={formData}
          onChange={handleChange}
          onHardwareChange={handleHardwareChange}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 rounded-full text-white text-lg font-medium transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(to right, #6e71ff, #574dff)",
          }}
        >
          Apply Now
        </button>
      </form>
    </div>
  );
}