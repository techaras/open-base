import { SegmentedControl } from "@/components/SegmentedControl";

export function WorkersHero() {
  const options = [
    { id: "workers", label: "For workers", href: "/workers" },
    { id: "companies", label: "For companies", href: "/companies" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <SegmentedControl options={options} activeId="workers" />
        <h1 className="mx-auto max-w-4xl text-balance text-3xl max-md:font-semibold md:text-7xl xl:text-[5.25rem]">
          Earn $20/hour recording<br />everyday tasks on video
        </h1>
        <p className="mx-auto max-w-2xl text-balance text-lg">
          Use your device to record yourself doing household activities. Get paid weekly. No experience required.
        </p>
        <button className="bg-black text-white px-24 py-4 rounded-full text-lg">
          Apply Now
        </button>
      </div>
    </section>
  );
}