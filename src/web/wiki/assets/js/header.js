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
    }
  }
  header.init()
})()