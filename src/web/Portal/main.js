import $ from '../../../assets/vendor/jquery.min.js'

window.$ = $
window.jQuery = $
// style
require('../../../assets/vendor/font-awesome/css/font-awesome.css')
require('../../../assets/vendor/bootstrapv3.3.7/css/bootstrap.css')
require('./style.less')

// js
require('../../../assets/vendor/bootstrapv3.3.7/js/bootstrap.js')
import {Model, Storage, UI, Modal} from './script'
window.Model = Model
window.Storage = Storage
window.UI = UI
window.Modal = Modal

Number.prototype.random = function(max, min) {
  max = (!isNaN(max) ? parseInt(max) : 10)
  min = (!isNaN(min) ? parseInt(min) : 0)
  var dis = max - min
  return (Math.floor(Math.random() * (dis + 1)) + min)
}
String.prototype.randomStr = function (length, strArr) {
  var dict = strArr || 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYS0123456789'
  var len = length || 5
  var result = ''
  for (var i = 0; i < len; i++) {
    result += dict[(0).random(dict.length-1, 0)]
  }
  return result
}
String.prototype.replaceAll = function (replacedStr, targetStr) {
  var str = this.toString()
  while (str.indexOf(replacedStr) > -1) {
    str = str.replace(replacedStr, targetStr)
  }
  return str
}
window.deepCopy = function (val) {
  if (typeof (val) === 'object') {
    return JSON.parse(JSON.stringify(val))
  } else {
    return val
  }
}


$(function () {
  Storage.data = Storage.getData()
  UI.init()
})