interface FormTextareaProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  required?: boolean;
}

export function FormTextarea({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  required = false,
}: FormTextareaProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-base mb-2"
        style={{ color: "#f2f2f2" }}
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="w-full px-4 py-3 rounded-lg text-white text-base outline-none focus:ring-2 focus:ring-[#6e71ff] resize-none"
        style={{
          backgroundColor: "#363636",
        }}
      />
      <style jsx>{`
        textarea::placeholder {
          color: #b7b7b7;
        }
      `}</style>
    </div>
  );
}