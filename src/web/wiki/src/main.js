var main = {
  def: {
    id: 'main',
    headerHeight: 80
  },
  init: function () {
    this.initUI()
    this.initEvent()
    // this.renderMainContent()
  },
  initUI: function () {
    $('#app_right').height($('body').height() + 'px')
  },
  initEvent: function () {
    // this.listenScroll()
    var me = this
    $("#" + this.def.id).bind("main-change-content", function (evt, href) {
      me.renderMainContent(href)
    })
    $("#" + this.def.id).bind("main-change-breadcrumb", function (evt, title1, title2, title3) {
      var titleArr = [title1, title2, title3].filter(function (item) {
        return item != undefined && item != null
      }).map(function (item) { return {title: item} })
      me.setTitle(titleArr)
    })
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
  renderMainContent: function (href) {
    var me = this
    var path = "../page/" + (href || "index.md")
    $.ajax({
      url: path,
      type: "GET",
      success: function (data) {
        if (/\.md$/.test(path)) {
          me.setMainContent({md: data})
        } else if (/\.html$/.test(path)) {
          data = data.slice(data.indexOf('<body>') + '<body>'.length).trim()
          data = data.slice(0, data.indexOf('</body>')).trim()
          me.setMainContent({html: data})
        }
      },
      error: function () {
        me.setMainContent({html: '<span style="color:red;">404</span>'})
      }
    })
  },
  setMainContent: function (obj) {
    if (obj.md) {
      $("#main .m_content").mdjs(obj.md)
    } else if (obj.html) {
      $("#main .m_content").html(obj.html)
    }
  },
  setTitle: function (title) {
    // tpl_breadcrumb
    $('#main .m_title').html('').prepend($('#tpl_breadcrumb').template({items: title}))
  }
}
module.exports = main
