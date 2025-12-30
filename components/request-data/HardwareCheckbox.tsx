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
      <div className="space-y-2">
        {HARDWARE_OPTIONS.map((option) => {
          const isChecked = selectedHardware.includes(option);
          return (
            <label
              key={option}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => onChange(option)}
            >
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                  isChecked
                    ? "bg-[#6e71ff] border-[#6e71ff]"
                    : "bg-transparent border-[#f2f2f2]"
                }`}
              >
                {isChecked && (
                  <svg
                    className="w-3 h-3 text-white"
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
              </div>
              <span
                className="text-base group-hover:text-white transition-colors"
                style={{ color: "#f2f2f2" }}
              >
                {option}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}