const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/skywatcher/' : '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/css/media-queries.scss";`,
      },
    },
  },
  pwa: {
    name: 'SkyWatcher',
    iconPaths: {
      faviconSVG: null,
      maskIcon: null,
      msTitleImage: null,
    },
    manifestOptions: {
      display: 'standalone',
      theme_color: '#ff8800',
      background_color: '#194966',
    },
  },
});
