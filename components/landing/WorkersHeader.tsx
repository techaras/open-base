"use client";

import { BaseHeader } from "@/components/BaseHeader";
import { Button } from "@/components/ui/button";
import { ShineButton } from "@/components/ui/shine-button";

export function WorkersHeader() {
  return (
    <BaseHeader logoHref="/workers">
      <Button variant="ghost">Apply</Button>
      <ShineButton>Log In</ShineButton>
    </BaseHeader>
  );
}