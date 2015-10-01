'use strict'

var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/entry'
  ],
  output: {
    path: path.join(__dirname, 'public', 'build'),
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
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
}
