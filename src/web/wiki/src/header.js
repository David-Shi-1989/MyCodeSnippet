var header = {
  def: {
    id: 'header'
  },
  init: function () {
    this.initMenu()
    this.initEvent()
  },
  initMenu: function () {
    var data = {}
    data.items = window.secweb.menus.map(function (item, index) {
      var obj = {title:item.title, key:item.key, active: index == 0}
      if (obj.active) {
        secweb.activeHeaderKey = obj.key
      }
      return obj
    })
    $('#header').prepend($('#tpl_header_menu').template(data))
  },
  initEvent: function () {
    this.bindMenuClick()
    this.bindLocaleItemClick()
  },
  bindMenuClick () {
    var me = this
    $('#'+this.def.id+' .h-menu > li').on('click', function (evt) {
      var $el = $(evt.target)
      $('#'+me.def.id+' .h-menu > li.active').removeClass('active')
      $el.addClass('active')
      var left = ($el.index() * 5 + ($el.index() * 1.4))
      $('#'+me.def.id+' .h-menu > li.active-bg').css('left', left+'rem')
      secweb.activeHeaderKey = $el.data('key')
      $("#side_bar").trigger('side-menu-reload', $el.data('key'))
      console.log('header menu switch to ' + $el.text())
    })
  },
  bindLocaleItemClick () {
    $('#'+this.def.id+' .dropdown ul.dropdown-menu > li').on('click', function (evt) {
      var $el = evt.target.tagName.toLowerCase() == 'li' ? $(evt.target) : $(evt.target.parentNode)
      if (!$el.hasClass('active')) {
        $el.addClass('active').siblings('.active').removeClass('active')
        $el.parent().siblings('button').children('.text').text($el.text())
        console.log('language switch to ' + $el.text())
      }
    })
  }
}
module.exports = header
