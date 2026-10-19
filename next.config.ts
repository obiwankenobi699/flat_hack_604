import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  devIndicators: false,
  poweredByHeader: false,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  // Type checking remains a required standalone script. This avoids a Next CLI
  // --showConfig parsing issue under the mise-managed Node runtime.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
