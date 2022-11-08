# Split Chunks

基于上个例子，我们做一些修改。`main.js`和`login.js`同时引用一些公共代码，看看打包结果。

## 修改文件

首先安装一个第三方依赖`jscookie`：

```bash
npm i -d jscookie
```

修改`main.js`

```javascript
import {show} from './show.js'
const jsCookie = require('jscookie')
show('index')
jsCookie.set({name: 'name', value: 'index'})
```

修改`login.js`

```javascript
import {show} from './show.js'
const jsCookie = require('jscookie')
show('login')
jsCookie.set({name: 'name', value: 'login'})
```

完成后，打包发现：

![image-20210222154612357](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210222154612357.png)

公共代码`show.js`和`jscookie`同时在`index.js`和`login.js`里，换句话说存在冗余代码！

如何解决这个问题？

[**`optimization.splitChunks`**](https://webpack.docschina.org/configuration/optimization/#optimizationsplitchunks)可以解决这个问题。

## 提取公共代码

修改`webpack.config.js`

```javascript
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
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: path.resolve(__dirname, 'index.html'),
      title: 'login',
      chunks: ['login']
    }),
    new CleanWebpackPlugin()
  ]
}
```

关键代码在13-31行`optimization`属性，用于代码优化。其中`splitChunks`用于代码分块配置，具体可以参考：[《Webpack官网文档》](https://webpack.docschina.org/configuration/optimization/#optimizationsplitchunks)以及[《split-chunks-plugin》](https://webpack.docschina.org/plugins/split-chunks-plugin/)。

打包后，我们发现`dist`目录多出了`chunk-vendor.js`和`chunk-common.js`。公共代码成功提取！

- `jscooke`的代码在`chunk-vendor.js`中，是因为匹配中了`cacheGroups.vendors.test`规则。
- `show.js`的代码匹配中了`cacheGroups.default.minChunks`规则。`minChunks`为2表示，只要同一代码被引用超过2次，则提取出来放在`chunk-common`中。我们可以试验一下，将其改为3，重新打包发现没有`chunk-common.js`文件，`show.js`代码分别在`index.js`和`login.js`中。
- `minSize`是指公共代码的大小，为0表示任何功能代码都需要拆分。如果指定为1024（单位是bytes），即1kb，如果公共代码的文件大小小于1kb，那么也不会被抽取。我们可以将其改为2048试试。

## 发现问题

虽然公共代码提取成功了，但是打开`index.html`和`login.html`文件，我们发现页面并没有显示文字，而是空白！说明存在问题！

分析一下：

- 代码拆分已经完成。
- 打开`login.html`发现引入了`login.js`，但是没有引入`chunk-common.js`和`chunk-vendor.js`。所以导致没有执行到`show.js`中的代码。

## 解决

问题原因是在`HtmlWebpackPlugin`中`chunks`的配置！

由于之前的demo没有做代码拆分，所以一个entry就是一个chunk，没有问题。现在代码拆分为多个chunk了，所以在`HtmlWebpackPlugin.chunks`的配置也要指定公共代码chunk。

修改代码如下：

```javascript
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
```

在生成`index.html`和`login.html`时，指定chunks，打包后页面可正常显示！另外注意：

- 注意缓存，清空缓存后刷新。
- 由于使用了cookie，所以如果要检查cookie是否生成，需要通过http发布页面，推荐`http-server`。

到此，我们完成了公共代码的提取！

## 参考资料

- [《Webpack Optimize》](https://webpack.docschina.org/configuration/optimization/)
- [《split-chunks-plugin》](https://webpack.docschina.org/plugins/split-chunks-plugin/)