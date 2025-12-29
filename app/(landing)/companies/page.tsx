"use client";

import { motion } from "motion/react";
import { GlowEffect } from "@/components/ui/glow-effect";

export default function CompaniesPage() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.2 }}
        className="mx-auto max-w-4xl text-balance text-3xl max-md:font-semibold md:text-7xl xl:text-[5.25rem]"
      >
        Get robotics training data<br />at 30-50% lower cost
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.3 }}
        className="mx-auto max-w-2xl text-balance text-lg"
      >
        Access a global network of video data collectors. Scale from 100 to 10,000+ hours without hiring internally.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.4 }}
        className="relative"
      >
        <GlowEffect
          colors={['#553AFE', '#4021E1']}
          mode="breathe"
          blur="soft"
        />
        <button className="relative bg-black text-white px-24 py-4 rounded-full text-lg">
          Request Data
        </button>
      </motion.div>
    </>
  );
}