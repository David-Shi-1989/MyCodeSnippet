# html-webpack-plugin

该插件的基本作用就是生成html文件。原理很简单：

> 将 webpack中`entry`配置的相关入口chunk  和  `extract-text-webpack-plugin`抽取的css样式   插入到该插件提供的`template`或者`templateContent`配置项指定的内容基础上生成一个html文件，具体插入方式是将样式`link`插入到`head`元素中，`script`插入到`head`或者`body`中。

## 修改文件

修改`index.html`文件，去除掉对js和css文件的引用，让插件自动完成：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>1.3.5 使用Plugin - html-webpack-plugin</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

最重要的是修改`webpack.config.js`，引入`html-webpack-plugin`插件。

```javascript
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].[contenthash].css`
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}
```

不要在意插件的位置，因为插件执行的顺序并不取决于数组中的位置，而是取决于侦听的钩子。

## Webpack build

运行命令：

```bash
webpack --config webpack.config.js
```

运行成功后，会生成dist目录，该目录下生成新文件`bundle.js`和`main.9e4519333259a0e9bd53.css`和`index.html`，打开`index.html`后，效果和上一个例子一致，说明css样式生效。

与之前不同的是，此时会生成一个新的`index.html`文件。该文件是基于`template`指定的文件，将js和css文件以`script`和`link`引入生成的新文件，这就是`html-webpack-plugin`插件的作用！

## 参考文档

- [npm html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)
- [html-webpack-plugin详解](https://www.cnblogs.com/wonyun/p/6030090.html)



