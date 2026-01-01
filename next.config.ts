import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
