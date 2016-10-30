var path = require('path');
var webpack = require('webpack');

var config = {
  context: path.join(__dirname, 'js'),
  entry: [
    './main.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
      loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015']
            }
          }
      ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
module.exports = config;
