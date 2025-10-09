import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ use static HTML export mode
  images: {
    domains: ["images.unsplash.com"], // ✅ allow external image domains
  },
};

export default nextConfig;
