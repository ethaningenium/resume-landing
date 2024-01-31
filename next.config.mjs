/** @type {import('next').NextConfig} */
//assets-global.website-files.com
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "help.simpleviewinc.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets-global.website-files.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
