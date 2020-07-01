/**
 * Entry Script
 */

if (process.env.NODE_ENV === 'production') {
  process.env.webpackDesktopAssets = JSON.stringify(require('./dist/desktop/manifest.json'));
  process.env.webpackDesktopChunkAssets = JSON.stringify(require('./dist/desktop/chunk-manifest.json'));
  // In production, serve the webpacked server file.
  require('./dist/server.bundle.js');
} else {
  // Babel polyfill to convert ES6 code in runtime
  require('babel-register')({
    "plugins": [
      [
        "babel-plugin-webpack-loaders",
        {
          "config": "./webpack.config.babel.js",
          "verbose": false
        }
      ]
    ]
  });
  require('babel-polyfill');

  require('./server/server');
}
