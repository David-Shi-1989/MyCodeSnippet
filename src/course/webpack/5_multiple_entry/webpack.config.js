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
  },
  // devtool: 'source-map',
  
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0, //提取出的chunk的最小大小
      cacheGroups: {
        default: {
          name: 'chunk-common',
          minChunks: 2, //模块被引用2次以上的才抽离
          priority: -20
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'chunk-vendor',
          priority: -10
        }
      }
    }
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