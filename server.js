const path = require('path')
const express = require('express')
const webpack = require('webpack')

const app = express()

const isDevelopment = (process.env.NODE_ENV !== 'production')
const static_path = path.join(__dirname, 'public')

const staticPort = process.env.PORT || 8080

app.use(express.static(static_path))
  .get('/', (req, res) => {
    res.sendFile('index.html', {
      root: static_path
    })
  })
  .listen(staticPort, (error) => {
    if (error) {
      console.log(error)
      return
    }
    console.log(`Listening at localhost:${staticPort}`)
  })

if (isDevelopment) {
  const config = require('./webpack.config')
  const WebpackDevServer = require('webpack-dev-server')
  const serverPort = 3001

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true
  })
  .listen(serverPort, 'localhost', (error) => {
    if (error) {
      console.log(error)
      return
    }
    console.log(`Listening at localhost:${serverPort}`)
  })
}
