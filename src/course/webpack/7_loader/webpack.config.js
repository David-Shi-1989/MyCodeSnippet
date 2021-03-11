const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

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
        test: /\.(css|less)$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader' ],
      },
      {
        test: /\.ls$/i,
        use: 'ls-loader'
      }
    ]
  },
  resolveLoader: {
    modules: ['./node_modules', './']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevMode ? `[name].css` : `[name].[contenthash].css`
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}