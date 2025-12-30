"use client";

import { BaseHeader } from "@/components/BaseHeader";
import { ShineButton } from "@/components/ui/shine-button";
import Link from "next/link";

export function CompaniesHeader() {
  return (
    <BaseHeader logoHref="/companies">
      <Link href="/request-data">
        <ShineButton>Request Data</ShineButton>
      </Link>
    </BaseHeader>
  );
}