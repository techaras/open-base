"use client";

import { AnimatedBackground } from "@/components/ui/animated-background";
import Link from "next/link";

export function SegmentedControl({ currentPage }: { currentPage: "workers" | "companies" }) {
  return (
    <div className="rounded-[8px] bg-gray-100 p-[2px] dark:bg-zinc-800">
      <AnimatedBackground
        defaultValue={currentPage === "workers" ? "For workers" : "For companies"}
        className="rounded-lg bg-white dark:bg-zinc-700"
        transition={{
          ease: "easeInOut",
          duration: 0.2,
        }}
      >
        <Link href="/workers" prefetch={true}>
          <button
            data-id="For workers"
            type="button"
            aria-label="For workers"
            className="inline-flex w-32 items-center justify-center text-center text-zinc-800 transition-transform active:scale-[0.98] dark:text-zinc-50 py-2"
          >
            For workers
          </button>
        </Link>
        <Link href="/companies" prefetch={true}>
          <button
            data-id="For companies"
            type="button"
            aria-label="For companies"
            className="inline-flex w-32 items-center justify-center text-center text-zinc-800 transition-transform active:scale-[0.98] dark:text-zinc-50 py-2"
          >
            For companies
          </button>
        </Link>
      </AnimatedBackground>
    </div>
  );
}