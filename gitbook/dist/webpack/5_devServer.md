#  devServer

devServer是Webpack的功能之一，可以实现：

- 发布文件
- 热更新

## 修改文件

修改`webpack.config.js`，增加一行`devServer`的配置：

```javascript
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'main.js'),
  devServer: {
    open: true
  },
  // ...
}
```

安装`webpack-dev-server`插件

```bash
npm install -g webpack-dev-server
```

## Webpack build

运行命令有变化：

```bash
webpack-dev-server --hot --devtool source-map
```

运行成功后，会自动打开页面，如下效果：

![image-20210220165434984](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210220165434984.png)

和之前有以下变化：

- 最直观的，页面会自动打开。

- 地址栏中不再是本地文件路径，而是`localhost:8080`。

- 修改`show.js`文件，先自动打包，然后页面会自动刷新生效。

  ![image-20210220165652426](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210220165652426.png)

## FAQ

### 修改`style.css`文件为什么页面不会自动刷新？

见Webpack官方文档中的解释[《MiniCssExtractPlugin》](https://webpack.js.org/plugins/mini-css-extract-plugin/)

![image-20210220171933832](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210220171933832.png)

所以，如果想让css修改实时刷新，修改`webpack.config.js`，重新打包后生效！

```javascript
const isDevMode = process.env.NODE_ENV !== 'production'
// ...
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      }
    ]
  },
  // ...
}
```

二者有什么不同呢？

- 开发环境使用`style-loader`，直接将css注入到`head`标签内，如下图：

  ![image-20210220172341494](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210220172341494.png)

- 生成环境使用`mini-css-extract-plugin`，将css代码剥离。

### 有没有其他办法解决？

除了上面官方的方法外，还有一种办法是改变`filename`。

修改`webpack.config.js`文件：

```javascript
const isDevMode = process.env.NODE_ENV !== 'production'
// ...
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ],
    plugins: [
      new MiniCssExtractPlugin({
        filename: isDevMode ? `[name].css` : `[name].[contenthash].css`
      }),
      // ...
    ]
  }
}
```

思路是，开发环境下固定住css文件的文件名。这样css文件修改后，能实现自动更新。而且不会有缓存问题，因为webpack-dev-server会自动在后追加时间戳的hash：

![image-20210220174858112](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210220174858112.png)

由此推断第一个问题的原因是css文件名hash变化，html中引用css的文件名没有及时更新。我们将filename改为cotenthash，修改css中的颜色，之后如下图：

![image-20210220180355960](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210220180355960.png)

我们发现：

- webpack确实侦听到变化，并且重新打包了。css文件名由`main.9e4519333259a0e9bd53.css`变为`main.c9189b62182a414e712f.css`。
- 页面DOM也发生变化了，首先css文件名后多了时间戳，说明更新了css文件。另外多了一个js文件`main.cc05876de95eea54c5bb.hot-update.js`的引用，这个文件的作用正是刷新页面。

但是为什么页面中样式没有更新？

- 我们看这个`main.cc05876de95eea54c5bb.hot-update.js`文件内容，并未包含最新的css文件名，所以页面无法更新css样式。而问题2的解决办法正是去除hash的影响。