# Css Loader

基于上个例子，我们加一点css样式。

## 修改文件

增加`style.css`

```css
#app {
  font-size: 25px;
  font-weight: bolder;
  color: blue;
}
```

修改`main.js`

```javascript
require('./style.css')
import {show} from './show.js'
show('Webpack')
```

增加第1行，引入css文件。注意这里是通过js代码引入的，而不是html文件中通过link引入。

修改`webpack.config.js`

```javascript
const path = require('path')
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
```

其中9-16行，为新加配置。主要作用是为css文件指定了Loader，因为webpack只能解析js文件，所以我们要使用`style-loader`和`css-loader`对css文件解析。同时别忘了安装这2个插件，安装命令：

```
npm init
npm install -D style-loader css-loader
```

## Webpack build

运行命令：

```bash
webpack --config webpack.config.js
```

运行成功后，会生成dist目录，该目录下生成新文件`bundle.js`，打开`index.html`后，效果如下：

![image-20210220143503910](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210220143503910.png)

打开`bundle.js`文件，我们可以发现，css代码是在js文件中，并没有生成新的css文件。

![image-20210220143201709](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210220143201709.png)