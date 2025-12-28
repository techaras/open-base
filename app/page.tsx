"use client";

import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="p-8 flex flex-col gap-8">
      <SignInButton mode="modal">
        <button className="bg-foreground text-background px-4 py-2 rounded-md">
          Sign in
        </button>
      </SignInButton>
    </main>
  );
}
