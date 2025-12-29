"use client";

import { motion } from "motion/react";

export function WorkersFeatures() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: 0.5 }}
      className="pt-8 pb-28"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          {/* Left large bento */}
          <div className="sm:col-span-8 min-h-50 sm:min-h-96">
            <div className="relative overflow-hidden rounded-4xl h-full bg-black flex flex-col justify-center items-center p-8 sm:p-12">
              <h3 className="text-white text-3xl sm:text-4xl md:text-7xl font-bold leading-tight">
                Work from anywhere,<br /><span className="text-[#9d9d9d]">anytime and get paid</span><br /><span className="text-[#9d9d9d]">weekly via Paypal</span>
              </h3>
            </div>
          </div>

          {/* Right small bento */}
          <div className="sm:col-span-4 min-h-50 sm:min-h-96">
            <div className="relative overflow-hidden rounded-4xl h-full bg-linear-to-b from-[#FF8342] to-[#FE5911] flex flex-col justify-between items-start p-8 sm:p-12">
              <h3 className="text-white text-2xl sm:text-3xl font-medium mb-6">
                Ready to start?
              </h3>
              <button className="px-15 py-2 rounded-full border border-white text-white text-base font-medium hover:bg-white hover:text-black transition-colors">
                Apply today
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}