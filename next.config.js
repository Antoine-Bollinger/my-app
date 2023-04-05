/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["default", "en", "fr", "pt"],
    defaultLocale: 'default',
    localeDetection: true
  },
  env: {
    email_api: "https://abollinger-mailer.vercel.app/api/mailer/email",
    email_to: "contact@antoinebollinger.fr",
    name_to: "Antoine Bollinger"
  }
}

module.exports = nextConfig
