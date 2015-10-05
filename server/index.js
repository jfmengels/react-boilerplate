import path from 'path'
import express from 'express'
import webpack from 'webpack'

import renderer from './renderer'

const app = express()

const isDevelopment = process.env.NODE_ENV !== 'production'
const static_path = path.join(__dirname, '..', 'public')

app.use(express.static(static_path))

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: static_path
  })
})

if (isDevelopment) {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')

  const webpackConfig = require('./webpack.config')
  const webpackCompiler = webpack(webpackConfig)

  app.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }))

  app.use(webpackHotMiddleware(webpackCompiler))
}

app.use(renderer())

export default app
