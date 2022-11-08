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

## 产生随机数

```javascript
function getRandom (min = 0, max = 10) {
  var dis = max - min;
  return Math.floor(Math.random() * (dis + 1)) + min;
}
```

## 产生随机字符串

```
```



## format输出日期

```javascript
function formatDateTime (val, formatStr = 'yyyy/MM/dd hh:mm:ss') {
  let date = null
  if (typeof val === 'object' && val.getFullYear) {
    date = val
  } else if (typeof val === 'number') {
    date = new Date(val)
  }
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
```

