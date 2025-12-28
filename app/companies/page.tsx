import { CompaniesFeatures } from "@/components/landing/CompaniesFeatures";
import { CompaniesHeader } from "@/components/landing/CompaniesHeader";
import { CompaniesHero } from "@/components/landing/CompaniesHero";
import { LandingHeroBackground } from "@/components/landing/LandingHeroBackground";

export default function CompaniesPage() {
  return (
    <>
      <LandingHeroBackground variant="companies">
        <CompaniesHeader />
        <CompaniesHero />
      </LandingHeroBackground>
      <main>
        <CompaniesFeatures />
      </main>
    </>
  );
}