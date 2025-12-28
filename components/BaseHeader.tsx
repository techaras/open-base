"use client";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface BaseHeaderProps {
  logoHref: string;
  children: React.ReactNode;
}

export function BaseHeader({ logoHref, children }: BaseHeaderProps) {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-transparent border-b", {
        "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50":
          scrolled,
      })}
    >
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4">
        <Link href={logoHref} className="text-2xl font-bold">
          OpenBase
        </Link>
        <div className="flex gap-4">
          {children}
        </div>
      </nav>
    </header>
  );
}