# Git常见操作

## reset

### 场景

需要撤回最近的3次commit（已经push）

如下图，希望回滚3次commit：

- `reset test.#4`
- `reset test.#3`
- `reset test.#2`

回滚后，`version`的值变回`0.1.1`。

![image-20210623174756098](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20210623174756.png)

### 操作

1. `git reset --hard bc87d67180ee1d30755e45f5b1c3f4e0ca4012bf`

   其中commitId为`reset test.#2`的id。

2. `git reset --soft HEAD^`

   `HEAD`表示基于`commitId`为`bc87d67180ee1d30755e45f5b1c3f4e0ca4012bf`的上一个版本，如果上2个，可以改为`HEAD~2`。

   执行完后，发现`package.json`文件状态为`modified`，只需要revert后，`version`变回`0.1.1`。如果把`soft`改为`hard`，则无需revert操作。

![image-20210623175346118](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20210623175346.png)

## Squash

![image-20210624175100992](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20210624175101.png)