import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: { styledComponents: true },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Accept-CH",
            value:
              "Viewport-Width, Width, Sec-CH-UA, Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA-Model",
          },
          { key: "Critical-CH", value: "Viewport-Width, Sec-CH-UA-Mobile" },
          {
            key: "Vary",
            value:
              "Viewport-Width, Width, Sec-CH-UA-Mobile, Sec-CH-UA, Sec-CH-UA-Platform",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
