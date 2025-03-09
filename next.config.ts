import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    appDir: true, // Ensure this is enabled
  },
};

export default nextConfig;
