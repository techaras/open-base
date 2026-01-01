import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Compiler (stable in Next.js 16)
  // Automatically optimizes component rendering and reduces unnecessary re-renders
  reactCompiler: true,
  
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/my-tasks',
        permanent: false,
      },
      {
        source: '/admin',
        destination: '/admin/profiles',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
