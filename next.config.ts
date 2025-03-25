import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // Your existing config options
  reactStrictMode: true,
  swcMinify: true,
  // Add more options as needed
};

export default withAnalyzer(nextConfig);
