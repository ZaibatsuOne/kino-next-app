/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.mds.yandex.net",
      },
    ],
  },
};

module.exports = nextConfig;
