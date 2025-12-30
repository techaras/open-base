export interface RequestDataFormData {
  fullName: string;
  email: string;
  company: string;
  dataType: string;
  dataAmount: string;
  timeline: string;
  hardware: string[];
  otherHardware: string;
}

export const HARDWARE_OPTIONS = [
  "UMI",
  "ALOHA",
  "Webcam",
  "Smartphone",
  "Computer (Keyboard and Mouse)",
  "Space Mouse",
  "VR",
] as const;