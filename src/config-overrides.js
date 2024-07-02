const { override, addWebpackPlugin } = require('customize-cra');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = override(
  addWebpackPlugin(
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            },
          },
        },
        {
          urlPattern: /\.(?:js|css)$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-resources',
          },
        },
        {
          urlPattern: new RegExp('^https://your-api-endpoint'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ],
    })
  )
);
