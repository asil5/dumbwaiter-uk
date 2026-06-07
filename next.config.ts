import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BUILD: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "local",
  },
  async redirects() {
    return [
      {
        source: "/commercial-dumbwaiter-lifts",
        destination: "/commercial-dumbwaiter",
        permanent: true,
      },
      {
        source: "/commercial-dumbwaiter-lifts/",
        destination: "/commercial-dumbwaiter",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
