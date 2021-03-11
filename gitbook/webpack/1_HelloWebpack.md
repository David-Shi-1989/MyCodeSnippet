# Hello Webpack
## 文件列表：

总共4个文件：

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>1.3.3 使用Webpack</title>
</head>
<body>
  <div id="app"></div>
  <!--导入webpack输出的js文件-->
  <script src="./dist/bundle.js"></script>
</body>
</html>
```

`main.js`

```javascript
import {show} from './show.js'
show('Webpack')
```

`show.js`

```javascript
export function show (content) {
  document.getElementById('app').innerText = 'Hellow,' + content
}
module.exports = show
```

`webpack.config.js`

```javascript
const path = require('path')
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

## Webpack build

运行命令：

```bash
webpack --config webpack.config.js
```

运行成功后，会生成dist目录，该目录下生成新文件`bundle.js`，打开`index.html`后，效果如下：

![image-20210220143618453](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210220143618453.png)