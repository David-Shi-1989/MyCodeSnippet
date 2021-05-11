# CSS flex

`flex`是`css3`中好用的弹性布局。

`flex`布局中，至少包含2级，即`Container`和`Item`。

## Container属性

### `flex-direction`

#### `row`

主轴为水平方向，起点在左端。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=flex-direction-row" style="width:100%;"  border="0" frameborder="0" height="90" ></iframe>

#### `row-reverse`

主轴为水平方向，起点在右端。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=flex-direction-row-reverse" style="width:100%;"  border="0" frameborder="0" height="90" ></iframe>

#### `column`

主轴为垂直方向，起点在上沿。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=flex-direction-column" style="width:100%;"  border="0" frameborder="0" height="400" ></iframe>

#### `column-reverse`

主轴为垂直方向，起点在下沿。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=flex-direction-column-reverse" style="width:100%;"  border="0" frameborder="0" height="400" ></iframe>

### `flex-wrap`

#### `nowrap`

不换行。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=flex-wrap-nowrap" style="width:100%;"  border="0" frameborder="0" height="90" ></iframe>

#### `wrap`

换行，在第一行的上方。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=flex-wrap-wrap" style="width:100%;"  border="0" frameborder="0" height="200" ></iframe>

#### `wrap-reverse`

换行，在第一行的下方。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=flex-wrap-wrap-reverse" style="width:100%;"  border="0" frameborder="0" height="200" ></iframe>

### `justify-content`

#### `flex-start`

左对齐。
<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=justify-content-flex-start" style="width:100%;"  border="0" frameborder="0" height="90" ></iframe>

#### `flex-end`

右对齐。
<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=justify-content-flex-end" style="width:100%;"  border="0" frameborder="0" height="90" ></iframe>

#### `center`

居中。
<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=justify-content-center" style="width:100%;"  border="0" frameborder="0" height="90" ></iframe>

#### `space-between`

两端对齐，项目之间的间隔都相等。。
<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=justify-content-space-between" style="width:100%;"  border="0" frameborder="0" height="90" ></iframe>

#### `space-around`

每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=justify-content-space-around" style="width:100%;"  border="0" frameborder="0" height="90" ></iframe>

### `align-items`

#### `flex-start`

交叉轴的起点对齐。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=align-items-flex-start" style="width:100%;"  border="0" frameborder="0" height="140" ></iframe>

#### `flex-end`

交叉轴的终点对齐。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=align-items-flex-end" style="width:100%;"  border="0" frameborder="0" height="140" ></iframe>

#### `center`

交叉轴的中点对齐。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=align-items-center" style="width:100%;"  border="0" frameborder="0" height="140" ></iframe>

#### `baseline`

项目的第一行文字的基线对齐。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=align-items-baseline" style="width:100%;"  border="0" frameborder="0" height="140" ></iframe>

#### `stretch`

如果项目为设置高度或者为auto，将占满整个容器的高度。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=align-items-stretch" style="width:100%;"  border="0" frameborder="0" height="140" ></iframe>

### `align-content`

#### `flex-start`

交叉轴的起点对齐。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=align-content-flex-start" style="width:100%;"  border="0" frameborder="0" height="320" ></iframe>

#### `flex-end`

交叉轴的终点对齐。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=align-content-flex-end" style="width:100%;"  border="0" frameborder="0" height="320" ></iframe>

#### `center`

交叉轴的中点对齐。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=align-content-center" style="width:100%;"  border="0" frameborder="0" height="320" ></iframe>

#### `stretch`

与交叉轴两端对齐，轴线之间的间隔平均分布。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=align-content-stretch" style="width:100%;"  border="0" frameborder="0" height="320" ></iframe>

#### `space-between`

每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=align-content-space-between" style="width:100%;"  border="0" frameborder="0" height="320" ></iframe>

#### `space-around`

轴线占满整个交叉轴。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=align-content-space-around" style="width:100%;"  border="0" frameborder="0" height="320" ></iframe>

## Item属性

### `order`

定义item的排列顺序。数值越小，排列越靠前，默认为0。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=order" style="width:100%;"  border="0" frameborder="0" height="90" ></iframe>

### `flex-grow`

定义item的放大比例，默认为0，即如果存在剩余空间，也不放大。不为0，表示根据order值平分剩余空间。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=flex-grow" style="width:100%;"  border="0" frameborder="0" height="90" ></iframe>

### `flex-shrink`

定义item的缩小比例，默认为1，即如果空间不足，该项目将缩小。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=flex-shrink" style="width:100%;"  border="0" frameborder="0" height="90" ></iframe>

### `align-self`

允许单个item有与其他项目不一样的对齐方式，可以覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/display-flex/flex.html?id=align-self" style="width:100%;"  border="0" frameborder="0" height="210" ></iframe>

