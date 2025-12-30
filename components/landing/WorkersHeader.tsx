"use client";

import { BaseHeader } from "@/components/BaseHeader";
import { Button } from "@/components/ui/button";
import { ShineButton } from "@/components/ui/shine-button";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export function WorkersHeader() {
  return (
    <BaseHeader logoHref="/workers">
      <Link href="/apply">
        <Button variant="ghost">Apply</Button>
      </Link>
      <SignedOut>
        <SignInButton mode="modal">
          <ShineButton>Log In</ShineButton>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Link href="/dashboard">
          <ShineButton>Dashboard</ShineButton>
        </Link>
      </SignedIn>
    </BaseHeader>
  );
}