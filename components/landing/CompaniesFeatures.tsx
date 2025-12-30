"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function CompaniesFeatures() {
  return (
    <>
      <style>
        {`
          .companies-features-text {
            font-size: clamp(1.65rem, 4.42vw, 3.625rem);
          }
          @media (max-width: 1023px) {
            .companies-features-text {
              font-size: clamp(1.45rem, 5vw, 3.625rem);
            }
          }
        `}
      </style>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.5 }}
        className="pt-8 pb-28"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left large bento */}
            <div className="lg:col-span-8 min-h-50 lg:min-h-96">
              <div className="relative overflow-hidden rounded-4xl h-full bg-black flex flex-col justify-center items-center p-8 lg:p-12">
                <h3 className="text-white font-bold leading-tight companies-features-text">
                First-person human videos<br /><span className="text-[#9d9d9d]">reviewed for quality across</span><br /><span className="text-[#9d9d9d]">diverse environments</span>
              </h3>
            </div>
          </div>
          {/* Right small bento */}
          <div className="lg:col-span-4 min-h-50 lg:min-h-96">
            <div className="relative overflow-hidden rounded-4xl h-full bg-linear-to-b from-[#553AFE] to-[#4021E1] flex flex-col justify-between items-start p-8 lg:p-12">
              <h3 className="text-white text-2xl sm:text-3xl font-medium mb-6">
                Ready to start?
              </h3>
              <Link href="/request-data">
                <button className="px-15 py-2 rounded-full border border-white text-white text-base font-medium hover:bg-white hover:text-black transition-colors self-end lg:self-start">
                  Request Data
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </motion.section>
    </>
  );
}