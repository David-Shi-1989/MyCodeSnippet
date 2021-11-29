# Vue3初体验

当前版本`3.2.21`，整理遇到的问题。

## 安装

通过`vue-cli3`安装

```
vue create vue-project
```

配置选择手动后，vue版本选择`3.x`

## 配置文件

整个项目中一下几个文件有变化

### `main.js`

先看`Vue2`的入口文件：

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

再看`Vue 3`的入口文件

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
```

`Vue 3`使用`createApp`来新建Vue对象。

### `Vuex`

`store/index.js`

```javascript
import { createStore } from 'vuex'
export default new createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {}
})
```

### `Vue-Router`

`router/index.js`

```javascript
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [] // define routes
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
export default router
```

## 遇到的报错

### [Vue warn]: Non-function value encountered for default slot. Prefer function slots for better performance.

![image-20211112143114156](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20211112143114.png)

问题代码

```javascript
render: ({record}) => {
    const editBtn = createVNode(Button, {
        size: 'mini',
        onClick: () => {
            this.onEditItem(record.id)
        }
    }, {
        default: () => '编辑'
    })
    const deleteBtn = createVNode(Button, {
        size: 'mini',
        status: 'danger'
    }, {
        default: () => '删除'
    })
    return createVNode(Space, {}, [editBtn, deleteBtn])
}
```

修改后的代码

```javascript
render: ({record}) => {
    const editBtn = createVNode(Button, {
        size: 'mini',
        onClick: () => {
            this.onEditItem(record.id)
        }
    }, {
        default: () => '编辑'
    })
    const deleteBtn = createVNode(Button, {
        size: 'mini',
        status: 'danger'
    }, {
        default: () => '删除'
    })
    return createVNode(Space, {}, {
        default: () => [editBtn, deleteBtn]
    })
}
```

使用`createVNode`创建`VNode`时，最后的参数需要返回`slot`为`default`的对象。

## 与`2.0`的差异

### template slot

####  `2.0`

```html
<div slot="content">
  content of slot
</div>
```

#### `3.0`

