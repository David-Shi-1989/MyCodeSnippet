# Webpack教程

教程环境：

<div style="display:flex;color:#fff;font-size:14px;--radiusVal:5px;--padding:0 6px;">
    <div style="display:flex;margin-right:20px;"><p style="padding:var(--padding);background:#555;border-top-left-radius:var(--radiusVal);border-bottom-left-radius:var(--radiusVal);">node</p><p style="padding:var(--padding);background:#4c1;border-top-right-radius:var(--radiusVal);border-bottom-right-radius:var(--radiusVal);">12.20.2</p></div><div style="display:flex;margin-right:20px;"><p style="padding:var(--padding);background:#555;border-top-left-radius:var(--radiusVal);border-bottom-left-radius:var(--radiusVal);">webpack</p><p style="padding:var(--padding);background:#4c1;border-top-right-radius:var(--radiusVal);border-bottom-right-radius:var(--radiusVal);">5.23.0</p></div><div style="display:flex;"><p style="padding:var(--padding);background:#555;border-top-left-radius:var(--radiusVal);border-bottom-left-radius:var(--radiusVal);">webpack-cli</p><p style="padding:var(--padding);background:#4c1;border-top-right-radius:var(--radiusVal);border-bottom-right-radius:var(--radiusVal);">4.5.0</p></div>
</div>

## 1. Hello Webpack

4个基础文件：

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
const show = require('./show.js')
show('Webpack')
```

`show.js`

```javascript
function show (content) {
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

