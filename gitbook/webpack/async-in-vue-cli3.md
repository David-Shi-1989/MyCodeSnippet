# `vue.config.js`中`chainWebpack`支持异步数据

## 前言

### 项目背景

- 项目使用`vue-cli4`搭建的，如需修改`Webpack`的配置，需要修改`vue.config.js`。

- 项目中，在`chainWebpack`中调用了`html-webpack-plugin`生成`dev.html`文件。

- `html-webpack-plugin`的配置`templateParameters`支持模板参数注入，支持对象和方法。本文就是基于这个配置做文章。如何配置可参考：[templateParameters demo](https://github.com/jantimon/html-webpack-plugin/blob/main/examples/template-parameters/webpack.config.js)

  在html页面接收foo参数，即可获得`bar`值：

  ```html
  <script>
  <%= foo %>
  </script>
  ```

  

### 需求

- 需要在`dev.html`注入一些数据，而这些数据是**异步获取**的（调用接口或者其他方式）。我这里是需要通过Node.js的`child_process`执行git命令，获取分支信息。

### 尝试

- `templateParameters`支持`function`。可以尝试传入`async`方法，通过`await`获取到数据后，再返回。

### 遇到问题

- `chainWebpack`和`templateParameters`均不支持异步。

  - `chainWebpack`改为异步后，打包报错。
  - `templateParameters`改为异步后，虽不影响打包，但是变量不生效。

  ![tt1_spec](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/tt1_spec.png)

苦于`vue-cli-service`和`html-webpack-plugin`均不支持异步，只能另想办法。

## 解决

### 查阅资料

先通过百度，国内貌似没有类似的记录文章。然后Google，果然找到了类似需求：

[Vue config async support](https://github.com/vuejs/vue-cli/issues/3328)

有人提出了类似的issue，虽然作者没有直接解决，但是也给出了一个work around：

![image-20210317173603006](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210317173603006.png)

### 改代码

这个方法的思路，实际上将`npm run serve`包了一层wrap，在外层拿到数据后，再通过代码调用`npm run serve`开始打包。接下来我们来完成这个wrap。

1. 首先新建一个文件`serve.prehandle.js`，用于wrap。先获取异步数据，待拿到之后再开始打包：

   ```javascript
   const getGitDevInfo = require('./src/pages/demo/webpack-plugin/git-info')
   const isDevEnv = process.env.NODE_ENV !== 'production'
   module.exports = (api, options) => {
     api.registerCommand('serve:prehandle', async (args) => {
       if (isDevEnv) {
         const def = await getGitDevInfo()
         process.asyncParamter = def
       }
       await api.service.run('serve', args)
     })
   }
   
   module.exports.defaultModes = {
     'serve:prehandle': 'development'
   }
   ```

2. 然后修改`package.json`

   修改`serve`命令

   ```json
   {
     "scripts": {
       "serve": "vue-cli-service serve:prehandle"
     }
   }
   ```

   增加`vuePlugins`，对应上面的`serve.prehandle`命令，为这条命令指定处理文件

   ```json
   {
      "vuePlugins": {
         "service": ["serve.prehandle.js"]
       } 
   }
   ```

3. 修改`vue.config.js`去接收数据。这里我存在`process`全局变量中：

   ```javascript
   config.plugin('html').use(HtmlWebpackPlugin, [{
     filename: 'dev.html',
     template: 'src/pages/demo/index.html',
     templateParameters: {
       config: `window.devGitInfo=${JSON.stringify(process.asyncParamter || {})}`
     },
     chunks: ['chunk-vendors', 'chunk-common', 'dev'],
   }])
   ```

接下来，执行后可生效！

```bash
npm run serve
```

## 相关知识点

### `vue-cli Service Plugin`

`vue-cli`支持导入自定义的`Service Plugin`，具体参考下面文档：

[Project local plugin](https://cli.vuejs.org/guide/plugins-and-presets.html#project-local-plugin)

[ Add a new cli-service command](https://cli.vuejs.org/dev-guide/plugin-dev.html#add-a-new-cli-service-command)