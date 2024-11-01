import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photobank.maximum.expert",
      },
    ],
  },
};

export default nextConfig;
