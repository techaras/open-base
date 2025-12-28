
import { WorkersFeatures } from "@/components/landing/WorkersFeatures";
import { WorkersHeader } from "@/components/landing/WorkersHeader";
import { WorkersHero } from "@/components/landing/WorkersHero";

export default function WorkersPage() {
  return (
    <>
      <WorkersHeader />
      <main>
        <WorkersHero />
        <WorkersFeatures />
      </main>
    </>
  );
}