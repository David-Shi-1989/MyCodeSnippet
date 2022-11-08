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

- `aria-expanded`

