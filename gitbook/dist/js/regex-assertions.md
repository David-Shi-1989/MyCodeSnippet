# 正则表达式之断言Assertion

##  零宽正向先行断言

- 表达式：`x(?=y)`

- 含义：仅匹配被y跟随的x

- Demo：匹配后缀名为jpg的文件名

  ```javascript
  `demo1.mpg demo2.png demo3.txt demo4.jpg demo5.gif demo6.js demo7.jpg`.match(/\w+(?=\.jpg)/g)
  ```

  ![image-20210422095609216](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210422095609216.png)

## 零宽度负向先行断言

- 表达式：`x(?!y)`

- 含义：仅匹配不被y跟随的x
- Demo：匹配后缀名不为jpg的文件名

  ```javascript
  `demo1.mpg demo2.png demo3.txt demo4.jpg demo5.gif demo6.js demo7.jpg`.split(' ').filter(file => /\w+\.(?!jpg)/.test(file))
  ```

  ![image-20210422100133812](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210422100133812.png)

## 零宽度正向回顾断言

- 表达式：`(?<=y)x`

- 含义：x只有在y后面才匹配

- Demo：匹配苹果手机的型号

  ```javascript
  ['Apple 11', 'Mi 12', 'Huawei Nova', 'Apple 12 Pro', 'Vivo X11'].filter(item => /(?<=apple\s*)\w+/i.test(item))
  ```

  ![image-20210422100616556](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/image-20210422100616556.png)

##  零宽度负向回顾断言

- 表达式：`(?<!y)x`

- 含义：x只有不在y后面才匹配

- 说明：<font color=red>JavaScript中不支持！</font>

  