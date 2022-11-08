# CSS grid

`grid`布局是`css3`中好用的网格布局。

`grid`布局中，至少包含2级，即`Container`和`Item`。

## Demo

### 设置一个3x2的布局

html:

```html
<div id="container">
    <div id="item1" style="background-color: red;">item1</div>
    <div id="item2" style="background-color: blueviolet;">item2</div>
    <div id="item3" style="background-color: yellowgreen;">item3</div>
    <div id="item4" style="background-color: aliceblue;">item4</div>
    <div id="item5" style="background-color: thistle;">item5</div>
    <div id="item6" style="background-color: pink;">item6</div>
</div>
```

css:

```css
#container {
    display: grid;
    grid-template-columns: 100px 200px 300px;
    grid-template-rows: 80px 200px;
}
```

![grid-common](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20221108112931.png)

### 使用Repeat定义

如需重复定义多行/列，可以用`repeat`方法：

```css
#container {
    display: grid;
    grid-template-columns: repeat(3, 100px) 200px;
	grid-template-rows: repeat(2, 200px);
}
```

![repeat](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20221108132101.png)

### 使用`fr`等分

如需等分，可以用`fr`，即fraction.

```css
#container {
    display: grid;
    grid-template-columns: repeat(3, 1fr) 2fr 80px;
    grid-template-rows: repeat(2, 1fr);
}
```

![fr](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20221108134108.png)

### 定义间距

```css
#container_common_gap {
    display: grid;
    grid-template-columns: 100px 200px 300px;
    grid-template-rows: 80px 200px;
    row-gap: 10px;
    column-gap: 20px;
}
```

![gap](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20221108134503.png)

### `auto-fill`自动填充

配合`repeat`，当item数量不确定，但是尺寸确定的话，可以使用`auto-fill`。

```css
#container_autofill {
    display: grid;
    width: 320px;
    height: 320px;
    grid-template-columns: repeat(auto-fill, 100px);
    grid-template-rows: repeat(auto-fill, 50px);
    border: 1px solid #ccc;
}
```

![auto_fill](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20221108135650.png)

### 定义区域

Container父容器使用`grid-template-areas`来定义区域，子容器使用`grid-area`来定义自己的area name。

DOM

```html
<div id="container_area">
    <div style="grid-area: header;background-color: blueviolet;">Header</div>
    <div style="grid-area: side;background-color: aliceblue;">Side</div>
    <div style="grid-area: main;background-color: cadetblue;">Main</div>
    <div style="grid-area: footer;background-color: gold;">Footer</div>
</div>
```

CSS

```css
#container_area {
    display: grid;
    grid-template-columns: 100px 500px;
    grid-template-rows: 80px 400px 50px;
    grid-template-areas: 'header header header' 'side main main' 'side main main' 'footer footer footer';
    gap: 1rem;
}
#container_area > div {
	padding: 20px;
}
```

![image-20221108140829837](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20221108140829.png)