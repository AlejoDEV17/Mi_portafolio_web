const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: isGithubPages ? "/Mi_portafolio_web" : "",
  assetPrefix: isGithubPages ? "/Mi_portafolio_web/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/Mi_portafolio_web" : ""
  },
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
