module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'thelight', // Navigation and Site Title
  titleAlt: 'thelight.nz', // Title for JSONLD
  description: 'thelight.',
  headline: 'thelight for guide', // Headline for schema.org JSONLD
  url: 'https://thelisht.nz', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'thelight', // shortname for manifest. MUST be shorter than 12 characters
  author: 'MaxMa', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@thelightnz', // Twitter Username
  facebook: 'thelightnz', // Facebook Site Name
  googleAnalyticsID: 'UA-47519312-7',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
