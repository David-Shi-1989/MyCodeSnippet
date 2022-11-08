# 变量转义

在`LESS`和`SASS`中有时需要对变量进行转义。

## SASS

比如，在`SASS`中如用到`calc`计算属性时：

```scss
$container-width: 200px;
width: calc(100% - $container-width);
```

上述代码运行结果不正确，发现`container-width`并没有转为200px，而是直接显示了。

这时就需要转义，正确代码如下：

```
$container-width: 200px;
width: calc(100% - #{$container-width});
```

在变量外包上`#{}`，即可实现变量转义。

## LESS

```less
@count-per-row: 5;
ul {
  & > li {
      &:not(:nth-child(@{count-per-row}n)) {
          margin-right: 10px;
      }
  }
}
```

