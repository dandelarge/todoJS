const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './react/src/index.js',
  output: {
    filename: 'react-bundle.js',
    path: path.resolve(__dirname, 'react/dist')
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: path.resolve(__dirname, 'react/src'),
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './react/src/index.html'})
  ]
};