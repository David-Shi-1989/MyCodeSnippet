# Loader

假如我们想用`less`或者`sass`等css预处理工具时，就需要配置loader，来解析`*.less`或`*.scss`文件。因为webpack只能识别`js`文件，其它格式的文件，需要调用其他“翻译员”进行处理。

## 文件代码

本篇以`less`为例，首先需要安装依赖：

```
npm install less less-loader@5.0.0
```

`less-loader`指定版本，因为其他版本可能有bug，打包过程报错。

5个文件：

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>less-loader</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

`style.less`

```less
#app {
  font-size: 25px;
  font-weight: bolder;
  color: orange;
}
```

`show.js`

```javascript
function show (content) {
  document.getElementById('app').innerText = 'Hello, my friend, ' + content
}
module.exports = show
```

`main.js`

```javascript
require('./style.less')
const show = require('./show')
show('Webpack-dev-server')
```

`webpack.config.js`

```javascript
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
      }
    ]
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
```

## 打包

这里我们用`webpack-dev-server`启动：

```bash
webpack-dev-server --watch --hot --devtool source-map
```

成功效果：

![image-20210311174319085](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210311174319085.png)

## 分析

这里配置`less-loader`的代码主要是：

```javascript
module: {
  rules: [
    {
      test: /\.(css|less)$/i,
      use: [ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader' ],
    }
  ]
},
plugins: [
  new MiniCssExtractPlugin({
    filename: isDevMode ? `[name].css` : `[name].[contenthash].css`
  })
]     
```

其中：

- `test`配置的是匹配规则，匹配`*.css`和`*.less`文件。
- use里指明了3种loader，处理过程是（注意是从右往左的顺序）：
  - 先将`LESS`源码提交给`less-loader`处理，将`LESS`转换为`CSS`。
  - 再交给`css-loader`处理，主要做：找出css代码中依赖的资源、压缩代码等。
  - 最后再交给`MiniCssExtractPlugin`插件中的Loader处理，这里主要是将css代码分离出单独文件。配合`plugins`中的`MiniCssExtractPlugin`。`rules`和`plugins`中两处配置缺一不可。

由上面的例子可以看出，一个Loader的职责是单一的，只需要完成一种转换。如果一个源文件需要经历多步转换才能正常使用，就通过多个Loader去转换。所以，在开发一个Loader时，请保持其功能的单一性，我们只需关心输入和输出。

## 手写一个Loader

### Loader实例

一个最简单的Loader的源码如下：

```javascript
module.exports = function (source) {
  // source即文件内容,可自行处理
  return source
}
```

### 自定义Loader场景

接下来我们假设一个场景：

- 引入新的`*.ls`格式文件。

- `ls`文件内语法我们可以自行定义：

  - 支持3种功能：控制台打印、alert以及页面显示文本。对应的命令分别为：`c`、`a`、`s`。

  - 语法格式为：

    ```
    c:Hello a:World s:New_Loader
    ```

    多个命令空格隔开，单个命令单元首位是命令缩写字母，冒号隔开，冒号后是内容。

我们已经创造了这种独一无二的`ls`语法，如何让我们的页面用到它呢？

首先我们新建一个文件`loader-parse.ls`

```
c:Hello a:World s:New_Loader
```

然后新建我们的loader文件`ls-loader.js`，内容先空着。

然后在`webpack.config.js`配置中，增加对`ls`的解析：

```javascript
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
```

分析：

- `rules`中的规则简单，不用多说。
- `resolveLoader`是告诉webpack，loader先去`node_modules`中搜索，没有的话再去当前文件夹内搜索。`user`中的值要和我们的loader文件名相同，否则搜索不到。

最后我们来完成loader的处理逻辑，其实也简单。因为参数`source`就是我们ls文件内容，只需要针对我们的语法进行处理即可，代码参考如下：

```javascript
module.exports = function (source) {
  let arr = source.split(/\s+/)
  let result = []
  arr.forEach(item => {
    console.log(item)
    const command = item.split(':')[0]
    const content = item.split(':')[1]
    const map = {
      c: function (content) {
        return `console.log('${content}')`
      },
      a: function (content) {
        return `alert('${content}')`
      },
      s: function (content) {
        return `document.getElementsByTagName('body')[0].appendChild(document.createTextNode('${content}'))`
      }
    }
    if (map[command]) {
      result.push(map[command](content))
    }
  })
  return result.join(';\n')
}
```

### 检验自定义Loader

运行：

```bash
webpack-dev-server --watch --hot --devtool source-map
```

`ls`代码被执行，并且翻译成功！

![image-20210311190746097](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210311190746097.png)

