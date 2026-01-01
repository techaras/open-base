"use client";

import { BasicInformationSection } from "./request-data/BasicInformationSection";
import { DataNeedsSection } from "./request-data/DataNeedsSection";
import { useRequestDataForm } from "@/hooks/use-request-data-form";

export function RequestDataForm() {
  const {
    formData,
    result,
    isLoading,
    handleSubmit,
    handleChange,
    handleHardwareChange,
  } = useRequestDataForm();

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
          disabled={isLoading}
          className="w-full py-4 rounded-full text-white text-lg font-medium transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: "linear-gradient(to right, #6e71ff, #574dff)",
          }}
        >
          {isLoading ? "Submitting..." : "Submit Request"}
        </button>

        {/* Result Message */}
        {result && (
          <p
            className="text-center text-base"
            style={{
              color: result.includes("Success") ? "#4ade80" : "#f87171",
            }}
          >
            {result}
          </p>
        )}
      </form>
    </div>
  );
}