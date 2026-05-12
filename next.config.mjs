/** @type {import('next').NextConfig} */
const repoName = "Samarth2026Profile";

const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : "",
  images: {
    unoptimized: true
  }
};

export default nextConfig;