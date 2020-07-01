/**
 * Entry Script
 */
process.env.webpackDesktopAssets = JSON.stringify(require('./dist/desktop/manifest.json'));
process.env.webpackDesktopChunkAssets = JSON.stringify(require('./dist/desktop/chunk-manifest.json'));
// In production, serve the webpacked server file.
require('./dist/server.bundle.js');
