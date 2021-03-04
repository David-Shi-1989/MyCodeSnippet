const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  devServer: {
    open: true
  },
  entry: {
    index: path.resolve(__dirname, 'main.js'),
    login: path.resolve(__dirname, 'login.js')
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'chunk-vendor'
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          name: 'chunk-common'
        }
      }
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
      title: 'index',
      chunks: ['index', 'chunk-common', 'chunk-vendor']
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: path.resolve(__dirname, 'index.html'),
      title: 'login',
      chunks: ['login', 'chunk-common', 'chunk-vendor']
    }),
    new CleanWebpackPlugin()
  ]
}