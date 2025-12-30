"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ApplicationForm } from "@/components/ApplicationForm";

export default function ApplyPage() {
  return (
    <main className="min-h-screen w-full bg-white relative">
      {/* White Sphere Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "white",
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255,131,66,0.25) 0%, rgba(254,89,17,0.1) 40%, transparent 80%)
          `,
        }}
      />

      <Link href="/workers" className="hidden lg:block fixed top-4 left-4 text-2xl font-bold z-50">
        OpenBase
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.2 }}
        className="flex items-center justify-center px-4 py-12 relative z-10"
      >
        <ApplicationForm />
      </motion.div>
    </main>
  );
}