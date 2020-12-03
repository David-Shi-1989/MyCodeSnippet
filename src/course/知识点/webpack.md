## Webpack

### 1. 什么是WebPack

WebPack可以看作是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它浏览器不能直接运行的拓展语言（Scss、TypeScript等），并将其转换和打包为合适的格式供浏览器使用。

### 2. 为什么用WebPack

- 大多数团队在开发新项目时会采用紧跟时代的技术，这些技术几乎都会采用“模块化+新语言+新框架”，Webpack可以为这些新项目提供一站式的解决方案。
- Webpack有良好的生态链和维护团队，提供良好的开发体验并保证质量。
- Webpack被全世界大量的Web开发者使用和验证，能找到各个层面所需的教程和经验分享。

### 3. WebPack常用功能

- JavaScript的ES6标准各大浏览器支持不完整，需要转义
- 三大开发框架（React、Vue、Angular）语法糖需要转义
- CSS预处理（sass、less等）
- 图片压缩
- 代码压缩混淆
- 其他资源处理（字体等）

### 4. webpack与其他打包工具比较

#### 4.1 grunt、gulp比较

- 三者都是前端构建工具，grunt和gulp在早期比较流行，现在webpack相对来说比较主流，不过一些轻量化的任务还是会用gulp来处理，比如单独打包css文件。
- grunt和gulp是基于任务（Task）和流（Stream）的。类似jQuery，找到一个（或一类）文件，对其做一些列链式操作，更新流上的数据，整条链式操作构成了一个任务，多个任务就构成了整个web的构建流程。
- webpack是基于入口的。webpack会自动地递归解析入口所需加载的所有资源文件，然后用不同的Loader来处理不同文件，用Plugin来扩展丰富webpack的功能。
- 从构建思路来说，gulp和grunt需要开发者将整个前端构建过程拆分为多个Task，并合理控制所有Task的调用关系。WebPack需要开发者指定入口，并需要清楚对于不同的资源应该使用什么Loader做何种解析和加工。

#### 4.2 rollup、parcel比较

- WebPack适用于大型复杂的前端站点构建。
- rollup适用于基础库的打包，如vue、rect。
- parcel适用于简单的实验性项目，它可以满足低门槛的快速查看效果。

### 5. WebPack构建流程

WebPack的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：

1. 初始化参数

   从配置文件和Shell语句中读取合并参数，得出最终的参数。

2. 开始编译

   用上一部得到的参数，初始化Compiler对象，加载所有配置的插件，执行对象的run方法开始执行编译。

3. 确定入口

   根据配置中的entry找出所有的入口文件。

4. 编译模块

   从入口文件出发，调用所有配置的Loader对模块进行解析，再找出该模块依赖的模块，递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。

5. 完成模块编译

   在经过第4步使用Loader解析完所有模块后，得到了每个模块被解析后的最终内容以及它们之间的依赖关系。

6. 输出资源

   根据入口和模块之间的依赖关系，组装成一个个包含多个模块的Chunk，再把每个Chunk转换成一个单独的文件加入到输出列表。本步是可以修改输出内容的最后机会。

7. 输出完成

   在确定好输出内容后，根据配置确定输出的路径和文件名，再把文件内容写入到文件系统。
   
### 7. Loader vs Plugin

#### 7.1 不同的作用

- Loader直译为“加载器”。Webpack将一切文件视作为模块，但是webpack原生只支持解析js文件，如果想将其他文件也打包的话，就需要用到Loader。所以Loader的作用是让webpack具有加载和解析非JavaScript文件的能力。
- Plugin直译为“插件”。Plugin可以扩展webpack的功能，让Webpack具有更多的灵活性。在Webpack运行的生命周期中广播出许多事件，Plugin可以监听这些事件，在合适的时机通过Webpack提供的API改变输出结果。

#### 7.2 不同的用法

- Loader在module.rules中配置，也就是说它作为模块的解析规则而存在。类型为数组，每一项都是一个Object，里面描述了对于什么类型的文件（test），使用什么加载（loader）和使用什么参数（options）。
- Plugin在plugins中单独配置。类型为数组，每一项都是一个plugin的实例，参数都是通过构造函数传入。

### 8. 常见的Loader举例

- file-loader

  把文件输出到一个文件夹中，在代码中通过相对URL去引用输出文件。

- url-loader

  和file-loader类似，但是能在文件很小的情况下以base64的方式把文件内容注入到代码中去

- source-map-loader

  加载额外的Source Map文件，以方便断点调试

- image-loader

  加载并且压缩图片文件

- babel-loader

  把ES6转换成ES5

- css-loader

  加载CSS，支持模块化、压缩、文件导入等特性

- style-loader

  把CSS代码注入到JavaScript中，通过DOM操作去加载CSS

- eslint-loader

  通过ESLint检查JavaScript代码

### 9.Webpack的热更新如何实现

Webpack的热更新又称为热替换（Hot Module Replacement），缩写为HMR。这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块，从而实现实时更新。具体流程如下：

通过webpack-dev-server启动的Webpack会开启监听模式，当发生变化时重新执行构建，然后通知webpack-dev-server。webpack-dev-server会让Webpack在构建出的JavaScript代码里注入一段代理客户端的代码用于控制网页，网页和webpack-dev-server之间通过WebSocket协议通信，以方便webpack-dev-server主动向客户端发送命令。webpack-dev-server在收到来自Webpack的文件变化通知时，通过注入的客户端代码控制网页的刷新。

1. 在webpack的watch模式下，文件系统中某一个文件模块发生修改，webpack监听到文件变化，根据配置文件对模块重新编译打包，并将打包后的代码通过简单的JavaScript对象保存在内存中。
2. webpack-dev-server和webpack之间的接口交互，而在这一步，主要是dev-server的中间件webpack-dev-middleware和webpack之间的交互，webpack-dev-middleware调用webpack暴露的API对代码变化进行监控，并且告诉webpack，将代码打包到内存中。
3. webpack-dev-server对文件变化的一个监控

### 10.如何利用webpack来优化前端性能？

用webpack优化前端性能是指优化webpack的输出结果，让打包的最终结果在浏览器运行快速高效。

- 压缩代码。删除多余的代码、注释、简化代码的写法等。可以利用webpack的UglifyJsPlugin和ParallelUglifyPlugin来压缩js文件，利用cssnano（css-loader?minimize）来压缩css。

- 利用CDN加速。在构建过程中，将引用的静态资源路径修改为CDN上对应的路径。可以利用Webpack对于output参数和各loader的publicPath参数来修改资源路径。

- 删除死代码（Tree-Shaking）。将代码中永远不会走到的片段删除掉。可以通过在启动webpack时追加参数--optimize-minimize来实现。

### 11.如何提高webpack的构建速度？

- 多入口情况下，使用CommonsChunkPlugin来提取公共代码。
- 通过externals配置来提取常用库。
- 利用DllPlugin和DllReferencePlugin预编译资源模块，通过DllPlugin来对那些我们能引用但是绝对不会修改的npm包来进行预编译，再通过DllReferencePlugin将预编译的模块加载出来。
- 使用HappyPack来实现多线程加速编译。
- 使用webpack-uglify-parallel来提升uglifyPlugin的压缩速度。原理上webpack-uglify-parallel采用了多核并行来提升压缩速度。
- 使用Tree-Shaking和Scope Hoisting来剔除多余代码。

### 参考文档

1. [ 关于webpack的面试题](cnblogs.com/gaoht/p/11310365.html)