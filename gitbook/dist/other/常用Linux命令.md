# 常用Linux命令

## 软链接

### 删除

```bash
rm -rf /usr/bin/node
```

### 创建

```bash
ln -s /usr/local/bin/node /usr/bin/node
```

## 升级NodeJS

1. 安装n

   ```bash
   npm install -g n
   ```

2. 升级

   ```bash
   n stable
   ```

3. 修改Node Path

   ```bash
   rm -rf /usr/bin/node
   ln -s /usr/local/bin/node /usr/bin/node
   ```

## forever

### 安装

```bash
npm install forever -g
```

### 启动

```bash
forever start ./index.js
```

### 查看

```bash
forever list
```

## 查看端口占用

```bash
netstat -tunlp | grep 8083
```



