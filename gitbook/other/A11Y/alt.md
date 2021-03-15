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

### 