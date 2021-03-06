const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  mode: 'development',
  devServer: {
    open: true
  },
  entry: path.resolve(__dirname, 'src/entry.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader'],
          fallback: 'style-loader'
        })
        // loader: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|acc)(\?.*)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   jquery: 'jquery'
    // })
  ]
}