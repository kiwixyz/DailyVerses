module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Daily Verses 🙌', // Navigation and Site Title
  titleAlt: 'verses.nz', // Title for JSONLD
  description: 'sharing your favorite bible verses',
  headline: 'thelight for guide', // Headline for schema.org JSONLD
  url: 'https://verses.nz', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/images/favicon.png', // Used for manifest favicon generation
  shortName: 'verses', // shortname for manifest. MUST be shorter than 12 characters
  author: 'MaxMa', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@versesnz', // Twitter Username
  facebook: 'versesnz', // Facebook Site Name
  googleAnalyticsID: 'UA-47519312-7',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
