interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export function FormInput({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}: FormInputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-base mb-2"
        style={{ color: "#f2f2f2" }}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-lg text-white text-base outline-none focus:ring-2 focus:ring-[#6e71ff]"
        style={{
          backgroundColor: "#363636",
        }}
      />
      <style jsx>{`
        input::placeholder {
          color: #b7b7b7;
        }
      `}</style>
    </div>
  );
}