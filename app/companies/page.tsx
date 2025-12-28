import { CompaniesFeatures } from "@/components/landing/CompaniesFeatures";
import { CompaniesHeader } from "@/components/landing/CompaniesHeader";
import { CompaniesHero } from "@/components/landing/CompaniesHero";


export default function CompaniesPage() {
  return (
    <>
      <CompaniesHeader />
      <main>
        <CompaniesHero />
        <CompaniesFeatures />
      </main>
    </>
  );
}