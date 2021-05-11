# CSS实现居中

如何使用`css`实现水平竖直居住，共三种方法：

## flex

设置父容器`display`为`flex`，然后`align-items`和`justify-content`为`center`来实现。

## grid

设置父容器`display`为`grid`，然后`align-items`和`justify-items`为`center`来实现。

## transform

设置父容器`position: relative`，自身`position:absolute`，然后`top`和`left`各自为`50%`相对值。最后通过`transform`偏移自身的`50%`进行校准。

<iframe border="0" frameborder="0" src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-middle/index.html" height="660"></iframe>

