import { SegmentedControl } from "@/components/SegmentedControl";

export function WorkersHero() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <SegmentedControl currentPage="workers" />
        <h1 className="text-6xl font-bold">
          Earn $20/hour recording everyday tasks on video
        </h1>
        <p className="text-xl text-gray-600">
          Use your device to record yourself doing household activities. Get paid weekly. No experience required.
        </p>
        <button className="bg-black text-white px-8 py-4 rounded-full text-lg">
          Apply Now
        </button>
      </div>
    </section>
  );
}