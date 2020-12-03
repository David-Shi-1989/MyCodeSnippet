## Vue

### 1. 生命周期

1. beforeCreate -- 创建之前

   主要用来初始化事件和实例，希望在每个组件上增加一些特定的属性，可以采用这个钩子。但是不会挂载data、计算属性等。

2. created -- 创建完成

   该阶段实现了【数据劫持】，把methods和computed都挂载到了实例撒谎那个。（不能获取到真实的DOM元素），可以在此阶段完成ajax，不能操作DOM。

   如果没有指定节点el，或者没有通过`vm.$mounted()`挂载，内部将默认渲染到一个内存中的节点。

   然后判断是否有template模板选项，如果有将template编译到render函数中。否则，将el外部的HTML作为template模板进行编译。

3. beforeMount -- 挂载之前

   在挂载之前会调用render函数方法，调用render但是一般不会增加业务逻辑。如果在这个阶段创建了`vm.el`，则将其替换原来的`el`。

4. mounted -- 挂载后

   将挂载到真实的DOM上，这个阶段可以操作DOM。

5. beforeUpdate -- 更新之前

   当data被修改时，就会先调用beforeUpdate。然后重新渲染虚拟DOM并把应用更新。

6. updated -- 更新之后

   更新完成后，调用updated函数。

7. beforeDestory -- 销毁之前

   当调用`vm.$destory`函数时，先调用`beforeDestory`函数，这个阶段会销毁子组件以及事件监听器。

8. destoryed -- 销毁之后

   全部销毁完毕。

<img src="./img/vue-life-circle.png" style="border:1px solid #eee;margin-left:0">

