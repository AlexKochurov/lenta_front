'use strict';

var webpack = require('webpack');

module.exports = {
  entry: [
    "webpack-hot-middleware/client?reload=true",
    "./src/index.js",
  ],

  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    publicPath: "/"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    preLoaders: [
      {
        test:    /\.jsx?$/,
        loader:  'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader", "react-hot"]
      }
    ],

    eslint: {
      failOnWarning: true,
      failOnError: true
    }
  }
};
