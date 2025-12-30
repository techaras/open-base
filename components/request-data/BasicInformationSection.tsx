import { FormInput } from "./FormInput";
import { RequestDataFormData } from "./types";

interface BasicInformationSectionProps {
  formData: RequestDataFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function BasicInformationSection({
  formData,
  onChange,
}: BasicInformationSectionProps) {
  return (
    <div className="space-y-6">
      <FormInput
        id="fullName"
        name="fullName"
        label="Your full name"
        placeholder="Jon Doe"
        value={formData.fullName}
        onChange={onChange}
        required
      />
      <FormInput
        id="email"
        name="email"
        label="Email"
        type="email"
        placeholder="name@email.com"
        value={formData.email}
        onChange={onChange}
        required
      />
      <FormInput
        id="company"
        name="company"
        label="Company"
        placeholder="Acme Inc."
        value={formData.company}
        onChange={onChange}
        required
      />
    </div>
  );
}