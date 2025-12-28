"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useId } from "react";

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
  const uniqueId = useId();
  
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
              className="relative inline-flex w-32 items-center justify-center text-center"
            >
              <button
                type="button"
                aria-label={option.label}
                className="relative inline-flex w-full items-center justify-center text-zinc-800 transition-transform active:scale-[0.98] dark:text-zinc-50 py-2"
              >
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      layoutId={`segmented-control-${uniqueId}`}
                      className="absolute inset-0 rounded-lg bg-white dark:bg-zinc-700"
                      transition={{
                        ease: "easeInOut",
                        duration: 0.2,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">{option.label}</span>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}