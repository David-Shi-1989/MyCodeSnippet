(function () {
  window.header = {
    def: {
      id: 'header'
    },
    init: function () {
      this.initMenu()
      this.initEvent()
    },
    initMenu: function () {
      var data = {
        items: [
          {title: '主页', active: true},
          {title: '项目'},
          {title: '人员'}
        ]
      }
      var template = $('#header').prepend($('#tpl_header_menu').template(data))
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
      })
    },
    bindLocaleItemClick () {
      var me = this
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
  
})()