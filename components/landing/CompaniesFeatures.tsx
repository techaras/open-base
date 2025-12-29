"use client";

import { motion } from "motion/react";

export function CompaniesFeatures() {
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
              <h3 className="text-white text-3xl sm:text-4xl md:text-[58px] font-bold leading-tight">
                First-person human videos<br /><span className="text-[#9d9d9d]">reviewed for quality across</span><br /><span className="text-[#9d9d9d]">diverse environments</span>
              </h3>
            </div>
          </div>
          {/* Right small bento */}
          <div className="sm:col-span-4 min-h-50 sm:min-h-96">
            <div className="relative overflow-hidden rounded-4xl h-full bg-black flex flex-col justify-between items-start p-8 sm:p-12">
              <h3 className="text-white text-2xl sm:text-3xl font-medium mb-6">
                Ready to start?
              </h3>
              <button className="px-15 py-2 rounded-full border border-[#9d9d9d] text-white text-base font-medium hover:bg-white hover:text-black transition-colors">
                Request Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}