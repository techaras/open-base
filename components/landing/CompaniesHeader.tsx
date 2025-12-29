"use client";

import { BaseHeader } from "@/components/BaseHeader";
import { ShineButton } from "@/components/ui/shine-button";

export function CompaniesHeader() {
  return (
    <BaseHeader logoHref="/companies">
      <ShineButton>Request Data</ShineButton>
    </BaseHeader>
  );
}