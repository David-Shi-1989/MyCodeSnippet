import $ from 'jquery'
var header = require('./header')
var sidebar = require('./sidebar')
var main = require('./main')
window.$ = $
window.jQuery = $
// css
require('../assets/css/style.less')
require('../../../../assets/vendor/bootstrapv3.3.7/css/bootstrap.min.css')
require('font-awesome/css/font-awesome.min.css')
// js
require('../../../../assets/vendor/handlebars/handlebars-jquery')
require('../../../../assets/vendor/bootstrapv3.3.7/js/bootstrap')
require('../../../../assets/vendor/md-js/mdjs')
require('../../../../assets/vendor/md-js/mdjs-jquery')

window.secweb = {
  menus: require('../page/menu.json').menus
}
$(document).ready(function () {
  header.init()
  sidebar.init()
  main.init()
})