const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DIST_DIR = path.join(__dirname)
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    open: true,
    hot: true
  },
  entry: path.join(__dirname, 'main.js'),
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader'],
          fallback: 'style-loader'
        })
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
      filename: `style.css`
    })
  ]
}