'use strict'

var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3001',
    './src/entry'
  ],

  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  plugins: [
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
