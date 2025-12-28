"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface SegmentedControlOption {
  id: string;
  label: string;
  href: string;
}

interface SegmentedControlProps {
  options: SegmentedControlOption[];
  activeId: string;
}

export function SegmentedControl({ options, activeId }: SegmentedControlProps) {
  return (
    <div className="rounded-xl bg-gray-100 p-0.5 dark:bg-zinc-800">
      <div className="relative flex">
        {options.map((option) => {
          const isActive = option.id === activeId;
          
          return (
            <Link
              key={option.id}
              href={option.href}
              prefetch={true}
              className="relative z-10"
            >
              <button
                type="button"
                aria-label={option.label}
                className="relative inline-flex w-32 items-center justify-center text-center text-zinc-800 transition-transform active:scale-[0.98] dark:text-zinc-50 py-2"
              >
                {isActive && (
                  <motion.div
                    layoutId="segmented-control-background"
                    className="absolute inset-0 rounded-lg bg-white dark:bg-zinc-700"
                    transition={{
                      ease: "easeInOut",
                      duration: 0.2,
                    }}
                  />
                )}
                <span className="relative z-10">{option.label}</span>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}