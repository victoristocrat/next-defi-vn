const path = require("path");

module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['vi', 'en'],
      localeDetection: true,
      reloadOnPrerender: true,
      localePath: path.resolve('./public/locales')
    }
  };
