"use client";

import { motion } from "motion/react";
import { GlowEffect } from "@/components/ui/glow-effect";

export default function WorkersPage() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.2 }}
        className="mx-auto max-w-4xl text-balance text-3xl max-md:font-semibold md:text-7xl xl:text-[5.25rem]"
      >
        Earn $20/hour recording<br />everyday tasks on video
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.3 }}
        className="mx-auto max-w-2xl text-balance text-lg"
      >
        Use your device to record yourself doing household activities. Get paid weekly. No experience required.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.4 }}
        className="relative"
      >
        <GlowEffect
          colors={['#FF8342', '#FE5911']}
          mode="breathe"
          blur="soft"
        />
        <button className="relative bg-black text-white px-24 py-4 rounded-full text-lg">
          Apply Now
        </button>
      </motion.div>
    </>
  );
}