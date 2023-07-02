const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/web' }, // Set the homepage to the main page of the web section
      '/aiml': { page: '/aiml' }, // Add a route for the main page of the aiml section
      // Handle the __nextDefaultLocale query parameter
      '/': { page: '/web', query: { __nextDefaultLocale: 'en' } },
      '/aiml': { page: '/aiml', query: { __nextDefaultLocale: 'en' } },
      ...defaultPathMap,
    };
  },
});
