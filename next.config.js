/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Produce a static export (out/) so the app can be hosted on a static site host like ShipStack.
  output: "export",
  // Static export has no image optimization server; use unoptimized images.
  images: { unoptimized: true },
  // NOTE: redirects() does not run on a static host (ShipStack serves files only). Next will warn
  // and skip it during `next build`; the old /invoice-generator path will 404 on a static deploy.
  async redirects() {
    return [
      {
        source: "/invoice-generator",
        destination: "/invoice",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
