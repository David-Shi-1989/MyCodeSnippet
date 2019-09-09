(function () {
  window.main = {
    def: {
      id: 'main',
      headerHeight: 80
    },
    init: function () {
      this.initUI()
      this.initEvent()
    },
    initUI: function () {
      document.getElementById('app_right').style.height = document.getElementsByTagName('body')[0].clientHeight + 'px'
    },
    initEvent: function () {
      // this.listenScroll()
    },
    listenScroll: function () {
      var wrapEl = document.getElementById('app_right')
      var me = this
      wrapEl.onscroll = function () {
        keepHeaderPositionFixed()
        calScrollProgress()
      }
      function keepHeaderPositionFixed () {
        var topScroll = wrapEl.scrollTop
        var fixedClass = 'header-fixed'
        if (topScroll > me.def.headerHeight) {
          $('#header').addClass(fixedClass)
          $('#app_right').css('paddingTop', '144px')
        } else {
          $('#header').removeClass(fixedClass)
          $('#app_right').css('paddingTop', '0')
        }
      }
      function calScrollProgress () {}
    }
  }
  main.init()
})()