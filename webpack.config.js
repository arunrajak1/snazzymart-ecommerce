const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  // other webpack config settings
  plugins: [
    // other plugins
    new GenerateSW({
      // Configure Workbox here
      clientsClaim: true,
      skipWaiting: true,
      // Include any other Workbox options you need
    }),
  ],
};
