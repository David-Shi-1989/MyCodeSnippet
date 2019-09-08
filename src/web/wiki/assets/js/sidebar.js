(function () {
  window.sideBar = {
    def: {
      id: 'side_bar'
    },
    init: function () {
      this.initEvent()
    },
    initEvent: function () {
      var me = this
      $('.s-c-link1').on('click', function (evt) {
        var $el = $(evt.target).hasClass('s-c-link1') ? $(evt.target) : $(evt.target.parentElement)
        if ($el.hasClass('s-c-link1') && $el.siblings('.s-c-2')) {
          var length = $el.parent().hasClass('open') ? 0 : $($el.siblings('.s-c-2')).children('li').length
          $el.siblings('.s-c-2').height((length * 1.4) + 'rem')
          $el.parent().toggleClass('open')
        }
      })
      $('.s-c-link2').on('click', function (evt) {
        var $el = $(evt.target).hasClass('s-c-link2') ? $(evt.target) : $(evt.target.parentElement)
        if (!$el.hasClass('active')) {
          $('#'+me.def.id+' .s-c-link.active').removeClass('active')
          $el.addClass('active')
          $('#'+me.def.id+' .s-c-link1[data-id='+$el.data('id').toString().split('.')[0]+']').addClass('active')
          console.log('on menu ' + $el.data('id') + ' click')
        }
      })
    },
    onMenuItem1Click () {
    }
  }
  sideBar.init()
})()