'use strict'

var path = require('path')
var webpack = require('webpack')

const srcPath = path.resolve(__dirname, 'public', 'client')
const buildPath = path.join(__dirname, 'public', 'build')
const babelExclude = path.resolve(__dirname, 'node_modules')

module.exports = {
  devtool: 'source-map',
  entry: [
    './public/client/index'
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
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
        loader: 'style!css'
      }
    ]
  }
}
