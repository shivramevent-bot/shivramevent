import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next writes AGENTS.md / CLAUDE.md into the project root on every dev run
  // unless this is off. This project keeps its own docs instead.
  agentRules: false,
};

export default nextConfig;
