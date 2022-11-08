# Multiple Entry

Webpack支持多入口文件的打包。多入口意味着入口文件也是多个。

## 修改文件

准备以下5个文件

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

`show.js`

```javascript
export function show (content) {
  document.getElementById('app').innerText = 'Hellow,' + content
}
module.exports = show
```

`main.js`

```javascript
import {show} from './show.js'
show('index')
```

`login.js`

```javascript
import {show} from './show.js'
show('login')
```

`webpack.config.js`

```javascript
const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'main.js'),
    login: path.resolve(__dirname, 'login.js')
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
```

## Webpack build

运行命令：

```bash
webpack --config webpack.config.js
```

运行成功后，会生成dist目录，该目录下生成4个新文件：`index.html`、`login.html`、`index.js`、`login.js`。分别打开2个html文件，发现内容生效。

## 总结

总结以下几点

- title的设置

  `webpack.config.js`中设置title，在`index.html`中读取title。

  ```html
  <title><%= htmlWebpackPlugin.options.title %></title>
  ```

- chunks的作用

  - 把`webpack.config.js`中2的`chunks`的配置删除，打包后会发生什么？

    结果打包生成的`index.html`和`login.html`中均引用了`index.js`和`login.js`。

  - 修改`chunks`，如改为`['index2']`和`['login2']`为不存在的名称，会发生什么？

    结果打包生成的`index.html`和`login.html`中没有引用任何js文件。

  总结一下，chunks为entry里指定的2个名称，分别为`index`和`login`。所以只能指定这2个，如不设置会引入所有的chunks。打包时，控制台会显示chunks信息：

  ![image-20210222102737336](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210222102737336.png)

  除了entry里生成chunks，还有其他，推荐阅读[《Webpack 理解 Chunk》](https://juejin.cn/post/6844903889393680392)。
