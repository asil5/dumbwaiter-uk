import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BUILD: new Date().toISOString().slice(0, 16).replace("T", " "),
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
