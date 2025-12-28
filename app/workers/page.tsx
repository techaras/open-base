import { WorkersFeatures } from "@/components/landing/WorkersFeatures";
import { WorkersHeader } from "@/components/landing/WorkersHeader";
import { WorkersHero } from "@/components/landing/WorkersHero";
import { LandingHeroBackground } from "@/components/landing/LandingHeroBackground";

export default function WorkersPage() {
  return (
    <>
      <LandingHeroBackground variant="workers">
        <WorkersHeader />
        <WorkersHero />
      </LandingHeroBackground>
      <main>
        <WorkersFeatures />
      </main>
    </>
  );
}