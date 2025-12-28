import { SegmentedControl } from "@/components/SegmentedControl";

export function CompaniesHero() {
  const options = [
    { id: "workers", label: "For workers", href: "/workers" },
    { id: "companies", label: "For companies", href: "/companies" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <SegmentedControl options={options} activeId="companies" />
        <h1 className="text-6xl font-bold">
          Get real-world robotics training data at 30-50% lower cost
        </h1>
        <p className="text-xl text-gray-600">
          Access a global network of video data collectors. Scale from 100 to 10,000+ hours without hiring internally.
        </p>
        <button className="bg-black text-white px-8 py-4 rounded-full text-lg">
          Request Data
        </button>
      </div>
    </section>
  );
}