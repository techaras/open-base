"use client";

import { BaseHeader } from "@/components/BaseHeader";
import { Button } from "@/components/ui/button";
import { ShineButton } from "@/components/ui/shine-button";
import { motion } from "motion/react";

export function WorkersHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: 0 }}
    >
      <BaseHeader logoHref="/workers">
        <Button variant="ghost">Apply</Button>
        <ShineButton>Log In</ShineButton>
      </BaseHeader>
    </motion.div>
  );
}