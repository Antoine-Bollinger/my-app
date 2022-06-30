/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["default", "en", "fr", "pt"],
    defaultLocale: 'default',
    localeDetection: true
  },
}

module.exports = nextConfig
