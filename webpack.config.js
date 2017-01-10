'use strict';

var webpack = require('webpack');

module.exports = {
  entry: [
    "webpack-hot-middleware/client?reload=true",
    "./src/index.jsx",
  ],

  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    publicPath: "/"
  },

  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: __dirname + "/src",
        loaders: ["eslint", "react-hot"]
      },
      {
        test: /\.jsx?$/,
        include: __dirname + "/src",
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],

    eslint: {
      failOnWarning: false,
      failOnError: true
    }
  }
};
