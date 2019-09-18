(function () {
  window.main = {
    def: {
      id: 'main',
      headerHeight: 80
    },
    init: function () {
      this.initUI()
      this.initEvent()
      this.renderMainContent()
    },
    initUI: function () {
      $('#app_right').height($('body').height() + 'px')
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
    },
    renderMainContent: function () {
      var data = '## Index1 ##' + '\n' +
        '- li1' + '\n' +
        '- li2' +  '\n' +
        '`code`' +  '\n' +
        '```' +  '\n' +
        'var her = \'123\'' +  '\n' +
        '```'
      this.setMainContent(data)
      // $.get("./page/index.md", function (data, status) {
      //   this.setMainContent(data)
      // })
    },
    setMainContent: function (mdContent) {
      $("#main .m_content").mdjs(mdContent)
    }
  }
  
})()