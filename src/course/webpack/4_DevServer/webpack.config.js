const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDevMode = process.env.NODE_ENV !== 'production'
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'main.js'),
  devServer: {
    open: true
  },
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevMode ? `[name].css` : `[name].[contenthash].css`
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}