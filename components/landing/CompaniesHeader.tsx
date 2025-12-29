"use client";

import { BaseHeader } from "@/components/BaseHeader";
import { ShineButton } from "@/components/ui/shine-button";
import { motion } from "motion/react";

export function CompaniesHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: 0 }}
    >
      <BaseHeader logoHref="/companies">
        <ShineButton>Request Data</ShineButton>
      </BaseHeader>
    </motion.div>
  );
}