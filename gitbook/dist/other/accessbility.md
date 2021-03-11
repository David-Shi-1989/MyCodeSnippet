# Accessbility

## 概念

>Accessibility，通常缩写为 **A11Y** ，这缩写取的是首字母 + 中间字母长度 + 结尾字母，译为 **“可访问性”**。这是一种让尽可能多的人访问我们所开发的网站的技术概念，通过这个概念，让互联网访问公平变得可能。

![ally](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/ally.png)

## CheckList

### 为任何非文本内容提供文本替代项

- img标签添加alt属性

  ```html
  <img src="/160204193356-01-cat-500.jpg" alt="一只目光汹汹凝视远方的猫”>
  ```

  alt有时需要设置为空，避免重复。如下，假如img的alt仍设置为搜索，那么与后面的文字冲突。正确做法置空会跳过，屏幕阅读器将拾取span标签内有效的“搜索”一词并朗读。

  ```html
<button role="button">
  <img src="search.png" alt="">
  <span>搜索</span>
</button>
  ```

### 表单

- 使用 `label` 的`for`属性绑定控件元素的`id`

  ```html
  <input id="promo" type="checkbox"></input>
  <label for="promo">This is a checkbox</label>
  ```
  
- `aria-required`和`aria-invalid`

  ```html
  <form>
    <div>
      <label for="name">* Name:</label>
      <input type="text" value="name" id="name" aria-required="true"/>
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input type="text" value="phone" id="phone" aria-required="false"/>
    </div>
    <div>
      <label for="email">* E-mail:</label>
      <input type="text" value="email" id="email" aria-required="true"/>
    </div>
  </form>
  ```

  ```javascript
  var validate = function () {
    var emailElement = document.getElementById(emailFieldId);
    var valid = emailValid(formData.email); // returns true if valid, false otherwise
  
    emailElement.setAttribute("aria-invalid", !valid);
    setElementBorderColour(emailElement, valid); // sets the border to red if second arg is false
  };
  ```

### TabIndex

正确的 Tab 键顺序，也就是设计出来的 Tab 键的顺序需要遵循正常的视觉顺序，从上至下，从左至右，比如这张图。

![2190281-0424de68e2a1df6c](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/2190281-0424de68e2a1df6c.webp)

### Use WAI-ARIA

[ARIA](https://www.w3.org/TR/html-aria/#sec-strong-native-semantics) 全称 Accessible Rich Internet Applications，可以修改现有元素的语义，也 可以向不存在原生语义的元素添加语义，在复杂的 UI 控件会涉及到非语义的 HTML，这时候通过增加浏览器和辅助技术可以识别和使用的进一步语义来让用户知道正在发生的事情。

- `role`

  如果使用的是原生支持的语义化标签，那本身就是有默认的 role的，比如 button 的 role 就是 button。如果我们使用 Div + style 来实现一个button，那就需要考虑加 role 了。

- `aria-label`

  如果我们有一个按钮，其上的 text 是个 x，代表关闭的意思，如果只是使用普通的标签，这时候，辅助设备是无法识别这个 x 的含义表达给用户的，这时候就需要添加 aria-label = 'close'，这时候屏幕阅读器就会将这个 close 阅读给用户，但不会在视觉上有任何的影响。

- `aria-labelledby`

  和`<label>`中的`for`类似，只不过`aria-labelledby`用于放在控件中，如下：

  ```html
  <h3 id="rg1_label">Lunch Options</h3>
  <ul class="radiogroup" id="rg1"  role="radiogroup" aria-labelledby="rg1_label">
    <li id="r1"  tabindex="-1" role="radio" aria-checked="false">
      <img role="presentation" src="radio-unchecked.gif" /> Thai
    </li>
    <li id="r2"  tabindex="-1" role="radio"  aria-checked="false">
      <img role="presentation" src="radio-unchecked.gif" /> Subway
    </li>
    <li id="r3"   tabindex="0" role="radio" aria-checked="true">
      <img role="presentation" src="radio-checked.gif" /> Radio Maria
    </li>
  </ul>
  ```

- `aria-hidden`

  当网站弹出一个模态框的时候，我们几乎是看不清除模态框以外的元素的，也是不能和其交互的。但对于使用屏幕阅读器的用户怎么办呢？因为如果你不加任何 ARIA 标签，他们默认还是会听到每个元素的解读，这时候你就需要使用 aria-hidden 来屏蔽掉除模态框以外的 DOM。

- 

## 参考资料

1. [不能永远忽略的 Accessibility (上)](https://www.jianshu.com/p/6d01f1611372)
2. [不能永远忽略的 Accessibility (下)](https://www.jianshu.com/p/07a6a2c6cd6f)
3. [Web开发中最该知道却从不重视的 —— Accessibility](https://www.imooc.com/article/297401)
4. [Arial - Forms - Basic form hints](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms/Basic_form_hints)
5. [Arial - Forms - Alerts The problem](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms/alerts)

