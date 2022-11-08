# 调试Webpack打包

本篇介绍基于`Visual Studio Code`，如何对`Webpack`打包过程进行调试。

## `Webpack`环境



## `Vue-Cli3`环境

使用`Vue-Cli3`搭建Vue项目，方便快捷。但是如果需要对`Webpack`做一些定制需求的话，如加plugin或者loader等，往往有调试需要。下面介绍如何调试，也不复杂，只需要在`VS Code`的调试配置文件`launch.json`增加一条即可：

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "npm-serve",
      "program": "${workspaceFolder}/node_modules/@vue/cli-service/bin/vue-cli-service.js",
      "args": [
        "serve"
      ]
    }
  ]
}
```

