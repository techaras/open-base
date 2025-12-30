import { FormTextarea } from "./FormTextarea";
import { HardwareCheckbox } from "./HardwareCheckbox";
import { RequestDataFormData } from "./types";

interface DataNeedsSectionProps {
  formData: RequestDataFormData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onHardwareChange: (hardware: string) => void;
}

export function DataNeedsSection({
  formData,
  onChange,
  onHardwareChange,
}: DataNeedsSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2" style={{ color: "#ffffff" }}>
          Data Needs
        </h2>
        <p className="text-base" style={{ color: "#b7b7b7" }}>
          Tell us about the data you&apos;re looking for.
        </p>
      </div>

      <FormTextarea
        id="dataType"
        name="dataType"
        label="What type of data do you need?"
        placeholder='E.g., "I want bimanual UMI data of human folding shirts"'
        value={formData.dataType}
        onChange={onChange}
        rows={3}
        required
      />

      <FormTextarea
        id="dataAmount"
        name="dataAmount"
        label="How much data do you need?"
        placeholder='E.g., "I want 10,000 successful demonstrations"'
        value={formData.dataAmount}
        onChange={onChange}
        rows={3}
        required
      />

      <FormTextarea
        id="timeline"
        name="timeline"
        label="When do you need the data by?"
        placeholder='E.g., "Within the next 3 weeks"'
        value={formData.timeline}
        onChange={onChange}
        rows={3}
        required
      />

      <HardwareCheckbox
        selectedHardware={formData.hardware}
        onChange={onHardwareChange}
      />

      <FormTextarea
        id="otherHardware"
        name="otherHardware"
        label="Other Hardware"
        placeholder="Describe any custom hardware requirements"
        value={formData.otherHardware}
        onChange={onChange}
        rows={3}
      />
    </div>
  );
}