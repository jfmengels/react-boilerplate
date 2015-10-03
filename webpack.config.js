'use strict'

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const srcPath = path.resolve(__dirname, 'public', 'client')
const buildPath = path.join(__dirname, 'public', 'build')
const babelExclude = path.resolve(__dirname, 'node_modules')

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3001',
    srcPath
  ],

  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'react-hot!babel',
        include: srcPath,
        exclude: babelExclude
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: srcPath,
        exclude: babelExclude
      },
      {
        test: /\.css$/,
        loader:
        'style!css?modules'
      }
    ]
  }
}
