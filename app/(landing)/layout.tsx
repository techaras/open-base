"use client";

import { usePathname } from "next/navigation";
import { LandingHeroBackground } from "@/components/landing/LandingHeroBackground";
import { WorkersHeader } from "@/components/landing/WorkersHeader";
import { CompaniesHeader } from "@/components/landing/CompaniesHeader";
import { WorkersFeatures } from "@/components/landing/WorkersFeatures";
import { CompaniesFeatures } from "@/components/landing/CompaniesFeatures";
import { SegmentedControl } from "@/components/SegmentedControl";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isWorkers = pathname === "/workers";
  const variant = isWorkers ? "workers" : "companies";
  const activeId = isWorkers ? "workers" : "companies";

  const options = [
    { id: "workers", label: "For workers", href: "/workers" },
    { id: "companies", label: "For companies", href: "/companies" },
  ];

  return (
    <>
      <LandingHeroBackground variant={variant}>
        {isWorkers ? <WorkersHeader /> : <CompaniesHeader />}
        <section className="py-24">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
            <SegmentedControl options={options} activeId={activeId} />
            {children}
          </div>
        </section>
      </LandingHeroBackground>
      <main>
        {isWorkers ? <WorkersFeatures /> : <CompaniesFeatures />}
      </main>
    </>
  );
}