import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
