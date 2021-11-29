# `vue-picture-cropper`插件的使用

## 背景

前端项目使用`vue3.0`，需要有图片裁切的功能，如下：

![vue-picture-cropper-demo](https://raw.githubusercontent.com/David-Shi-1989/img-bed/master/20211129145100.jpeg)

页面中的表单除了裁剪后的图片外，还包含其它字段，如`name`和`type`。接下来会介绍如何使用`vue-picture-cropper`+`Express`来处理混合表单数据，实现图片的裁切加保存。

## 使用的组件

- `vue-picture-cropper`

  基于 cropper.js ，支持 Vue 3.0 的图片裁切工具组件（目前仅支持 Vue 3.x ）。

- `multer`

   node.js 中间件，用于处理 `multipart/form-data` 类型的表单数据，它主要用于上传文件。它是写在 [busboy](https://github.com/mscdex/busboy) 之上非常高效。

## 使用

### 前端页面使用

不做多述，参考[《`vue-picture-cropper` github》](https://github.com/chengpeiquan/vue-picture-cropper)

在提交表单的时候，使用`Axiox`需要注意以下2点：

#### 表单数据

因为是混合表单速据，所以**不能**和简单的表单一样放在对象中。应统一放在`FormData`对象里：

```javascript
let formData = new FormData()
formData.append('title', this.form.title)
formData.append('type', this.form.type)
formData.append('imgFieldName', this.$refs.cropper.getFile())
```

#### post请求头设置

须设置请求头中的`Content-Type`:

```javascript
Axios.post('/api/form', formData, {headers: { "Content-Type": "multipart/form-data" }}).then(res => {
  resolve(res.data)
})
```

### Express处理表单请求

```javascript
const app = express()
const path = require('path')
const multer = require('multer')

const upload = multer({
  storage: multer.diskStorage({
    destination (req, file, cb) {
      cb(null, path.join(__dirname, '../../../static/demo'))
    },
    filename (req, file, cb) {
      const fileName = utils.formatDate(new Date(), 'yyyy-MM-dd_hh-mm-ss') + ' - ' + file.originalname
      cb(null, fileName)
    }
  })
})
app.post('/api/form', upload.single('imgFieldName'),async function (req, res) {
  let img = ''
  if (req && req.file) {
    const {filename} = req.file
  }
  // TODO hadle with filename
})
```

`multer`初始化`destination`是设置文件存储的路径,`filename`是设置文件名。

## 参考资料

1. [《`vue-picture-cropper` github》](https://github.com/chengpeiquan/vue-picture-cropper)
2. 《`multer` github》(https://github.com/expressjs/multer)