import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  images: {
    domains: ["p56pngklqgj5.imagehost.cloud"],
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
//export default nextConfig;
