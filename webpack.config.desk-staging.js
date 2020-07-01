var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var cssnext = require('postcss-cssnext');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');
var cssnano = require('cssnano');

module.exports = {
  devtool: 'hidden-source-map',

  entry: {
    app: [
      './client/desktop/index.js',
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
    path: __dirname + '/dist/desktop/',
    filename: '[name].[chunkhash].desk-staging.js',
    publicPath: 'https://d139ozgfcek7oi.cloudfront.net/js/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'client',
      'node_modules',
    ],
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[hash:base64]',
                modules: true,
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  postcssFocus(),
                  cssnext({
                    browsers: ['last 2 versions', 'IE > 10'],
                  }),
                  cssnano({
                    autoprefixer: false,
                  }),
                  postcssReporter({
                    clearMessages: true,
                  }),
                ],
              },
            },
          ],
        }),
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx*$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.[hash].desk-staging.js',
    }),
    new ExtractTextPlugin({
      filename: 'app.[contenthash].desk-staging.css',
      allChunks: true,
    }),
    new ManifestPlugin({
      seed: {
        'name': 'My Progressive Web App',
        'short_name': 'MyPWA',
        'orientation': 'portrait',
        'display': 'standalone',
        'start_url': '.',
        'inject': true,
        'fingerprints': true,
        'ios': false,
        'publicPath': null,
        'includeDirectory': true,
        'description': 'My awesome Progressive Web App!',
        'background_color': '#ffffff',
        'crossorigin': 'use-credentials',
        'icons': [
          {
            'src': 'https://files.slack.com/files-pri/T076ZPQBW-FGZ4P4SRK/vm-logo-pwa.png',
            'type': 'image/png',
            'sizes': '192x192',
          },
          {
            'src': 'https://files.slack.com/files-pri/T076ZPQBW-FGZ4P4SRK/vm-logo-pwa.png',
            'type': 'image/png',
            'sizes': '512x512',
          },
        ],
      },
      publicPath: 'https://d139ozgfcek7oi.cloudfront.net/js/',
    }),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      minRatio: 0.8,
      threshold: 5000,
      deleteOriginalAssets: true
    }),
  ]
};

// dev
// module.exports = {
//   devtool: 'hidden-source-map',
//
//   entry: {
//     app: [
//       './client/desktop/index.js',
//     ],
//     vendor: [
//       'react',
//       'react-dom',
//     ],
//   },
//
//   output: {
//     path: __dirname + '/dist/desktop/',
//     filename: '[name].[chunkhash].desk.js',
//     publicPath: '/',
//   },
//
//   resolve: {
//     extensions: ['.js', '.jsx'],
//     modules: [
//       'client',
//       'node_modules',
//     ],
//   },
//
//   module: {
//     rules: [
//       {
//         test: /\.s?css$/,
//         exclude: /node_modules/,
//         use: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: [
//             {
//               loader: 'css-loader',
//               options: {
//                 localIdentName: '[hash:base64]',
//                 modules: true,
//                 importLoaders: 1,
//               },
//             },
//             {
//               loader: 'postcss-loader',
//               options: {
//                 plugins: () => [
//                   postcssFocus(),
//                   cssnext({
//                     browsers: ['last 2 versions', 'IE > 10'],
//                   }),
//                   cssnano({
//                     autoprefixer: false,
//                   }),
//                   postcssReporter({
//                     clearMessages: true,
//                   }),
//                 ],
//               },
//             },
//           ],
//         }),
//       },
//       {
//         test: /\.css$/,
//         include: /node_modules/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.jsx*$/,
//         exclude: /node_modules/,
//         use: 'babel-loader',
//       },
//       {
//         test: /\.(jpe?g|gif|png|svg)$/i,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 10000,
//             },
//           },
//         ],
//       },
//     ],
//   },
//
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         'NODE_ENV': JSON.stringify('production'),
//       },
//     }),
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'vendor',
//       minChunks: Infinity,
//       filename: 'vendor.[hash].desk.js',
//     }),
//     new ExtractTextPlugin({
//       filename: 'app.[contenthash].desk.css',
//       allChunks: true,
//     }),
//     new ManifestPlugin({
//       seed: {
//         'name': 'My Progressive Web App',
//         'short_name': 'MyPWA',
//         'orientation': 'portrait',
//         'display': 'standalone',
//         'start_url': '.',
//         'inject': true,
//         'fingerprints': true,
//         'ios': false,
//         'publicPath': null,
//         'includeDirectory': true,
//         'description': 'My awesome Progressive Web App!',
//         'background_color': '#ffffff',
//         'crossorigin': 'use-credentials',
//         'icons': [
//           {
//             'src': 'https://files.slack.com/files-pri/T076ZPQBW-FGZ4P4SRK/vm-logo-pwa.png',
//             'type': 'image/png',
//             'sizes': '192x192',
//           },
//           {
//             'src': 'https://files.slack.com/files-pri/T076ZPQBW-FGZ4P4SRK/vm-logo-pwa.png',
//             'type': 'image/png',
//             'sizes': '512x512',
//           },
//         ],
//       },
//       basePath: '/',
//     }),
//     new ChunkManifestPlugin({
//       filename: 'chunk-manifest.json',
//       manifestVariable: 'webpackManifest',
//     }),
//     new webpack.optimize.UglifyJsPlugin(),
//     // new CompressionPlugin({
//     //   filename: '[path].gz[query]',
//     //   algorithm: 'gzip',
//     //   test: /\.js$|\.css$|\.html$/,
//     //   minRatio: 0.8,
//     //   threshold: 5000,
//     //   deleteOriginalAssets: true
//     // }),
//   ],
//   // postcss: () => [
//   //   postcssFocus(),
//   //   cssnext({
//   //     browsers: ['last 2 versions', 'IE > 10'],
//   //   }),
//   //   cssnano({
//   //     autoprefixer: false
//   //   }),
//   //   postcssReporter({
//   //     clearMessages: true,
//   //   }),
//   // ],
// };
