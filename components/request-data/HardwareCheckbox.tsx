import { HARDWARE_OPTIONS } from "./types";

interface HardwareCheckboxProps {
  selectedHardware: string[];
  onChange: (hardware: string) => void;
}

export function HardwareCheckbox({
  selectedHardware,
  onChange,
}: HardwareCheckboxProps) {
  return (
    <div>
      <label className="block text-base mb-3" style={{ color: "#f2f2f2" }}>
        What hardware is required to collect the data?
      </label>
      <div className="flex flex-wrap gap-3">
        {HARDWARE_OPTIONS.map((option) => {
          const isChecked = selectedHardware.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                isChecked
                  ? "bg-[#6e71ff]/20 border-[#6e71ff] border text-white"
                  : "bg-transparent text-white border border-[#4a4a4a] hover:border-[#6e71ff]"
              }`}
            >
              <span className="text-base">{option}</span>
              {isChecked && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}