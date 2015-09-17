var path = require('path');
var express = require('express');
var webpack = require('webpack');

var app = express();

var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'public');

app.use(express.static(static_path))
  .get('/', function(req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
  })
  .listen(process.env.PORT || 8080, function(error) {
    if (error) {
      console.log(error);
    }
    console.log('Listening at localhost:8080');
  });

if (isDevelopment) {
  var config = require('./webpack.config');
  var WebpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true
  })
  .listen(3001, 'localhost', function(error) {
    if (error) {
      console.log(error);
    }
    console.log('Listening at localhost:3001');
  });
}
