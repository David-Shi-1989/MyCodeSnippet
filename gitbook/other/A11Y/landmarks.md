# LandMarks

前端开发人员写`html`时，很容易滥用`<div>`标签，然而除了`<div>`还有很多其它好用的标签。

下图是一个非常常见的页面结构：

![classic-page-structure](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/classic-page-structure.png)

以Header为例，我们写`html`时通常会怎么写？相信大部分人都会习惯性地这么编码：

```html
<div id="header">
  <!-- header html -->
</div>
```

假如我们使用了更合适的标签`<header>`的话，代码变得更语义化，生动了。

```html
<header>
  <!-- header html -->
</header>
```

## 什么是LandMark

`Landmark`英文翻译是路标、地标。在`html`中，我们可以理解为语义化的标签，即见名知意的标签。


## 为什么推荐用`<header>`

无论使用`<div>`和`<header>`，都可以实现我们的页面效果。但是这里讨论的是`Accessbility`，即让有某些障碍的用户能够更加方便地访问我们的页面。接下来，告诉你为什么要用`<header>`。

使用第三方工具`NVDA`（有视觉障碍的用户，会使用类似工具软件，通过读屏的方式来浏览我们的页面，即screen reader users）。通过`inseet`+`F7`可以调出下面对话框。在Landmarks中，可见当前页面的结构：

![image-20210315161553740](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210315161553740.png)

如果只使用`<div>`标签的话，这里完全看不出页面的结构，视障用户也很难定位到`header`或者`footer`元素。所以改掉原来的坏习惯，推荐用如下标签：`<header>`,`<nav>`,`<aside>`,`<footer>`等。

假如因为某些原因不能使用这些标签的话，你可以增加`WAI-ARIA`的`role`属性来实现同样的目的。

| Bad                     | Good                | Awesome  |
| ----------------------- | ------------------- | -------- |
| `<div id="main"></div>` | `<div role="main">` | `<main>` |
| `<div id="navigation">` |`<div role="navigation">`|`<nav>`|
| `<div id="sideinfo">` |`<div role="contentinfo">`|`<aside>`|
| `<div id="header">` |`<div role="banner">`|`<header>`|
| `<div id="footer">` |`<div role="footer">`|`<footer>`|

## 常见的`role`

- `banner`

  通常指页面的头部，即`<header>`。

- `complementary`

  译为“补充的”，即页面的补充信息。如下图，页面的相关参考文档用了`<aside>`标签，这样landmarks工具就能抓取到该区域。同时增加了`aria-labelledby`指定了标签的id，从而进一步抓取到Related Documents文本。这样，极大地方便了视障用户获取该区域的信息。

  ![image-20210315164827090](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210315164827090.png)

  `<aside>`标签默认的`role`为`complementary`。假如其他标签需要实现该`role`的话，可以：

  ```html
  <div role="complementary" aria-labelledby="title2">
    <h2 id="title2">Title for complementary area</h2>
    <!-- complementary content area -->
  </div>
  ```

- `contentinfo`

  一般为底部的用于展示页面基本信息的元素，通常称为`<footer>`。

- `form`

  顾名思义，即页面中的表单。如果用的是`<form>`标签，那么不需要指定`role`；否则，则需要增加：

  ```html
  <div role="form" aria-labelledby="regTitle">
    <fieldset>
      <legend id="regTitle">Register Form</legend>
        <!-- form controls -->
    </fieldset>
  </div>
  ```

  除此之外，还有几点需要注意：

  - 如果页面包含多个`form`，那么如何区分？

    建议为每个`form`设置不同的`aria-labelledby`，这样读屏软件可以区分不同的`form`。

  - 假如表单是完成搜索功能，那么建议`role="search"`。

  - 表单中的输入控件，最好也设置单独的`role`

    如：`button`，`input`，`select`，`textarea`等。

- `main`

  每个页面至少有一个`main`。作用是展示页面的主要内容。

  - `main`应当在最外层。
  - 假如有多个`main`，可以用`aria-labelledby`区分。

- `navigation`

  用于页面导航。

- `region`

  便于用户灵活定义功能区域，默认标签为`<section>`。

  ```html
  <div role="main">
    <h1>title for main content area<h1>
    <div role="region" aria-labelledby="region1">
      <h2 id="region1">title for region area 1</h2>
      <!-- content for region area 1 ... -->
    </div>
    <div role="region" aria-labelledby="region2">
      <h2 id="region2">title for region area 2</h2>
      <!-- ... content for region area 2 ... -->
    </div>
  </div>
  ```

  上面的例子，通过landmarks抓取到的结构：

  ![image-20210315172752051](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210315172752051.png)

  还有另外3种写法，均可实现相同的效果，供参考：

  1. 使用`<section>`标签

     ```html
     <section aria-labelledby="region1">
       <h2 id="region1">title for region area 1</h2>
       <!-- ... content for region area 1 ... -->
     </section>
     ```

  2. 使用`aria-label`

     ```html
     <section aria-label="title for region area 1">
       <h2 id="region1">title for region area 1</h2>
       <!-- ... content for region area 1 ... -->
     </section>
     ```

  3. 使用`title`
     ```html
     <section title="title for region area 1">
       <h2 id="region1">title for region area 1</h2>
       <!-- ... content for region area 1 ... -->
     </section>
     ```
  
- `search`

  搜索功能的区域，使用`role="search"`。

## 总结

- 区分`role`和`tag`的关系：

| Landmarks Role | HTML Tag    |
| -------------- | ----------- |
| banner         | `<header>`  |
| complementary  | `<aside>`   |
| form           | `<form>`    |
| main           | `<main>`    |
| navigation     | `<nav>`     |
| region         | `<section>` |
| search         | none        |


  - 如果使用了右侧的默认标签，则不需要额外写`role`。否则，需要手动加上`role`。

- `banner`，`main`，`complementary`和`contentinfo`这4个landmarks必须在最外层。

- 假如页面包含多个`role`，需要用`label`或者`aria-labelledby`或者`title`加以区分。

## 参考资料

1. [ARIA Landmarks](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html)
2. [A11Y-101 - Landmarks](https://a11y-101.com/development/landmarks)