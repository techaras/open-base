import { useState, FormEvent } from "react";
import { RequestDataFormData } from "@/components/request-data/types";

export function useRequestDataForm() {
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

  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setResult("");

    const formDataToSend = new FormData(e.currentTarget);
    formDataToSend.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!);
    
    // Add hardware array as a comma-separated string
    formDataToSend.append("hardware", formData.hardware.join(", "));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! We'll be in touch soon.");
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          company: "",
          dataType: "",
          dataAmount: "",
          timeline: "",
          hardware: [],
          otherHardware: "",
        });
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch {
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
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

  return {
    formData,
    result,
    isLoading,
    handleSubmit,
    handleChange,
    handleHardwareChange,
  };
}