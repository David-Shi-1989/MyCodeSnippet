# 代码片段

## 统计字符串中某段字符出现的次数

常规方法通过for循环计数，返回结果，这里不再赘述。下面介绍2种方法：

- 调用`String`的`match`方法。如：

  ```javascript
  var str = 'This is my code snippets. He is not my friend. She is a good girl.' // 统计is出现的次数
  function occurCount (baseStr, targetStr) {
    let reg = new RegExp(targetStr, 'g')
    return (baseStr.match(reg) || []).length
  }
  ```

- 借用`split`方法拆分

  ```javascript
  function occurCount (baseStr, targetStr) {
    return baseStr.split(targetStr).filter(i => i.trim().length > 0).length
  }
  ```