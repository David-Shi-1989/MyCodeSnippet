# `debounce` vs `throttle`

## 区别

|          | `debounce`                                                   | `throttle`                                                   |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 定义     | 防抖                                                         | 节流/限频                                                    |
| 含义     | 一个连续操作中的处理，只触发一次，从而实现防抖动。           | 一个连续操作中的处理，按照阀值时间间隔进行触发，从而实现节流。 |
| 使用场景 | 第一次触发后，进行倒计wait毫秒，如果倒计时过程中有其他触发，则重置倒计时；否则执行。用它来丢弃一些重复的密集操作，直到流量减慢。 | 第一次触发后先执行fn（lodash可以通过`{leading: false}`来取消），然后wait ms后再次执行，在单位wait毫秒内的所有重复触发都被抛弃。即如果有连续不断的触发，每wait ms执行fn一次，用在每隔一定间隔执行回调的场景。 |

## Demo

网上介绍这2个概念的文章数不胜数，在此也不做多详述。我们来看实例，来加深理解。

### `debounce`

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/debounce-throttle/debounce.html" border=0 frameborder=0 style="width:100%;height: 800px;"></iframe>

#### 功能

此demo模拟输入框搜索功能，右侧表格显示搜索的结果。

#### 操作1

1. 上面输入框不带debounce功能，我们快速输入"arg"。

   下面黑色日志框记录了每次输入完后，调用接口的情况。即调用了3次查询接口。

2. 下面输入框带debounce功能，我们同样快速输入"arg"。

   黑色日志框只打出了1条log，即调用了1次查询接口。

#### 总结1

- 代码中`debounce`的延迟时间设置为400，即400ms，0.4s。
- 我们的思想是待用户输入完后，或者是输入完一段后，我们才开始查询，而不是每输入完一个字符就开始查询。
- 这0.4s就是我们等待的时间，即当用户输入完后0.4内没有输入了，我们就认为用户结束输入，查询开始；反之，则在下个输入完后继续等0.4s（0.4s也是经验值，可以修改为你认为合适的阈值）。

#### 操作2

1. 滚动条滚动，发现header会固定在顶部（虽然有些延迟）。

#### 总结2

- 吸顶功能，也是用`debounce`实现的。
- `window.scroll`事件，会在短时间内出发多次。如果需要修改layout布局的话，就会非常影响性能和体验。使用防抖后，能够大大节省开销。
- `onscroll`才是防抖动的经典场景，在短时间内出发多次。

### `throttle`

<iframe src="https://david-shi-1989.github.io/MyCodeSnippet/src/component/debounce-throttle/throttle.html" border=0 frameborder=0 style="width:100%;height: 400px;"></iframe>

#### 功能

模拟了按钮点击事件。

#### 操作

1. 连续点击左侧按钮（Submit Form）3次。

   底部打出3条记录。

2. 连续点击中间按钮（Submit Form With throttle）3次（等待大约5s）。

   底部会打出2条记录。第一条马上出现，第二条过了4s后出现。
   
3. 连续点击右侧按钮（Submit Form With debounce）3次

   底部打出1条记录，且是在停止点击后约4s。

#### 结论

1. 左侧按钮没有做节流，点击1次打出1条记录。这个不用解释。

2. 中间按钮为什么出现这种现象，第一条和第二条间隔4s（代码中阈值设置为400）？

   - 回看顶部关于`throttle`节流使用场景的介绍。流程是：

     (1) 首先执行fn。

     (2) 然后等待4s。

     (3) 如果等待期间仍有触发，则在等待结束后再执行1次fn。

   流程图如下：

   ​	![throttle-lct](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/throttle-lct.png)

   - 假如我们一直连续不断的快速点击中间节流按钮，`throttle`的效果就是：第一次立马执行，后面平均每4s执行1次。

3. 右侧防抖按钮，只在停止后才触发。其流程：

   - 第一次点击时，进行4s等待。
   - 第二次点击时，重置前面的等待，重新开始第二次4s等待。
   - 第三次点击，同样重新开始第三次4s等待。
   - 4s后，执行fn。

   请看其流程图：

   ![debounce-lct](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/debounce-lct.png)

## Code

通过2个实例，我们对`debounce`和`throttle`有了更深的认识。再来看看其代码，在上面的例子中我们用的是`lodash`中的方法，那么我们就分析一下它们的实现。

