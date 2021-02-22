const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  devServer: {
    open: true
  },
  entry: {
    index: path.resolve(__dirname, 'main.js'),
    login: path.resolve(__dirname, 'login.js')
    // index: ['webpack-dev-server/client?', 'webpack/hot/only-dev-server', path.resolve(__dirname, 'main.js')],
    // login: ['webpack-dev-server/client?', 'webpack/hot/only-dev-server', path.resolve(__dirname, 'login.js')]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
      title: 'index',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: path.resolve(__dirname, 'index.html'),
      title: 'login',
      chunks: ['login']
    })
  ]
}