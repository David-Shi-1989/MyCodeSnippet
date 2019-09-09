(function () {
  window.header = {
    def: {
      id: 'header'
    },
    init: function () {
      this.initEvent()
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
          console.log('language switch to ' + $el.text())
        }
      })
    }
  }
  header.init()
})()