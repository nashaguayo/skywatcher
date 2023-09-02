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
    themeColor: '#194966',
    iconPaths: {
      faviconSVG: null,
      maskIcon: null,
      msTitleImage: null,
    },
    manifestOptions: {
      display: 'standalone',
      background_color: '#ff8800',
      capture_links: 'existing-client-navigate',
      launch_handler: {
        route_to: 'existing-client-navigate',
      },
      prefer_related_applications: true,
      related_applications: [
        {
          platform: 'webapp',
          url: 'https://nashaguayo.github.io/skywatcher/manifest.json',
        },
      ],
    },
  },
});
