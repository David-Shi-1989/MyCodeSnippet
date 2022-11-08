# Nginx

## 查找`nginx.conf`路径

```
nginx -t
```

![image-20210727111931942](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20210727111932.png)

## 本地域名代理

### 背景

- 本地项目`http://localhost:8082`。
- 希望通过域名`http://taobao.com`访问到本地项目。

### 步骤

1. 修改本地`host`文件

   文件位于`C:\Windows\System32\drivers\etc`，增加一行：

   ```
   127.0.0.1 taobao.com
   ```

2. 修改`nginx.conf`文件：

   ![image-20210713094325916](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20210713094326.png)

   重启`Nginx`服务：

   ```
   nginx -s reload
   ```

浏览器访问`http://taobao.com`成功打开本地项目！
