import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos'
      }
    ]
  }
};

export default withPlaiceholder(nextConfig);
