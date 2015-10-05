import path from 'path'
import webpack from 'webpack'

const rootPath = path.resolve(__dirname, '..')
const srcPath = path.resolve(rootPath, 'public', 'client')
const buildPath = path.join(rootPath, 'public', 'build')
const babelExclude = path.resolve(rootPath, 'node_modules')

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client',
    srcPath
  ],

  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
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
