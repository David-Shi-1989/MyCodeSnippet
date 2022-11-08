# Plugin

基于上个例子，我们把css样式从js代码中剥离出来。最终效果是，打包出来后为2个文件，js和css代码分开，通过`mini-css-extract-plugin`插件实现。

## 修改文件

修改`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./dist/main.141bbd3b8e8be1b45fb5.css"/>
  <title>1.3.5 使用Plugin</title>
</head>
<body>
  <div id="app"></div>
  <!--导入webpack输出的js文件-->
  <script src="./dist/bundle.js"></script>
</body>
</html>
```

新增第7行代码，至于main后面的hash如何确定？最后会介绍。

修改`webpack.config.js`

```javascript
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
    })
  ]
}
```

引入`mini-css-extract-plugin`插件，将css代码剥离出来。

别忘了安装依赖

```bash
npm install -D mini-css-extract-plugin
```

## Webpack build

运行命令：

```bash
webpack --config webpack.config.js
```

运行成功后，会生成dist目录，该目录下生成新文件`bundle.js`和`main.141bbd3b8e8be1b45fb5.css`，打开`index.html`后，效果和上一个例子一致，说明css样式生效。

## FAQ

### css文件名的问题

第一步中`index.html`中css文件名的问题，我们尝试以下2种修改：

1. 将css文件名设为定值

   `webpack.config.js`中`filename`直接改为`style.css`。

   > 打包后，发现css文件名生效，此时记得修改`index.html`中css文件名，此种方法也可生效，但不推荐。

2. 不修改文件名，修改css内容

   我们修改`style.css`中的内容，任意修改，增加，删除内容。
   
   > 重新打包后，发现文件名后缀hash变化了。

   因为我们定义的文件名是基于文件内容的，所以一旦css文件发生变化，文件名也会变化。所以本篇一开始定义的带hash的filename并不好。因为事先我们并不知道文件名中的hash，并且文件内容一旦发生变化文件名也会变化。
   
   ```javascript
filename: `[name].[contenthash].css`
   ```
   
   那我们把后缀hash去除，试试看。

   ```javascript
   filename: `[name].css`
   ```
   
   > 结果是打包生成了`main.css`。同时修改`index.html`的引用，可生效，但不推荐。


### 为什么要给文件名加上hash？

为了解决引用缓存的问题。所以上面的2种解决办法**不推荐**，会有缓存问题。

### 如何解决hash文件名引入的问题？

使用`html-webpack-plugin`插件，见下篇。

## 参考文档

- [npm extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin)
- [webpack的extract-text-webpack-plugin插件](https://blog.csdn.net/weixin_41134409/article/details/88416356)