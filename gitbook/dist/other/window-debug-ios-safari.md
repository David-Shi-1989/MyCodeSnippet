# Windows调试IOS Safari

## 安装必要软件

需要的软件：

- `iTunes`
- `scoop`
- `ios-webkit-debug-proxy`
- `remotedebug-ios-webkit-adapter`

### 安装`iTunes`

[iTunes64v12.12.2.2.exe下载链接](https://down10.zol.com.cn/sjtongbu/iTunes64v12.12.2.2.exe)

### 安装`scoop`

1. 打开`PowerShell`，注意不是`Command Prompt`。

   ![image-20211207155839507](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20211207155839.png)

2. 确保`PowerShell`版本大于等于5

   ```bash
   $psversiontable.psversion.major
   ```

   ![image-20211207160015191](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20211207160015.png)

3. 允许`Powershell`执行本地脚本

   ```bash
   set-executionpolicy remotesigned -scope currentuser
   ```

4. 安装`scoop`

   ```bash
   iwr -useb get.scoop.sh | iex
   ```

   ![image-20211207160259841](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20211207160259.png)

5. 检查是否安装成功

   ```bash
   scoop --help
   ```

### 安装`ios-webkit-debug-proxy`

```bash
scoop bucket add extras
scoop install ios-webkit-debug-proxy
npm install -g vs-libimobile
```

### 安装`remotedebug-ios-webkit-adapter`

```bash
npm install remotedebug-ios-webkit-adapter -g
```

## 连接调试

1. iPad中配置

   开启：设置 > Safari浏览器 > 高级 > 网页检查器

2. 使用原装数据线连接你的PC（Win10），iPad会弹出是否信任，一定要选信任。

3. 打开iTunes，连接成功如下图所示：

   ![image-20211209153442979](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20211209153443.png)

4. 打开`PowerShell`，输入命令：

   ```
   remotedebug_ios_webkit_adapter --port=9000
   ```

   ![image-20211209154621343](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20211209154621.png)

5. iPad里打开`Safari`，并打开需要调试的页面。

6. 回到PC，打开`Chrome`浏览器，地址栏输入：`chrome://inspect/#devices`

7. 点击Discover netword targets右侧`Configure`按钮，新增`9000`端口

   ![image-20211209154823304](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20211209154823.png)

8. 新建完成后，刷新页面，会在**Remote Targe**下面看到我们iPad打开的页面。点击`inspect`！

   ![image-20211209155001567](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20211209155001.png)

9. 此时弹出新的tab页面，记下来可以开启debug模式

   ![image-20211209155126478](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20211209155126.png)

## 参考文档

- [《在 Windows 上真机调试 iPhone(iOS) Safari Web 页面》](https://www.hozen.site/archives/30/)
- [《window下调试ios Safari》](https://www.jianshu.com/p/2a244b1f4fe3?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation)
- [《windows安装scoop》](https://blog.csdn.net/qq_33317586/article/details/108687339)