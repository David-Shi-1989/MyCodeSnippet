var sideBar = {
  def: {
    id: 'side_bar',
    menus: []
  },
  init: function () {
    this.initMenu()
    this.initEvent()
  },
  initMenu: function (_headerKey) {
    var menus = require('../page/menu.json').menus
    this.def.menus = menus.filter(function (item, index) {
      if (_headerKey) {
        return item.key == _headerKey
      } else {
        return index === 0
      }
    })[0]
    function addIndex (arr, _preset) {
      var preset = _preset || ''
      for (var i = 0; i < arr.length; i++) {
        arr[i].index = (preset + (i + 1))
        if (arr[i].subs && arr[i].subs.length) {
          addIndex(arr[i].subs, arr[i].index + '.')
        }
      }
      return arr
    }
    addIndex(this.def.menus.subs)
    var template = $('#side_bar .s-catalog').html('').prepend($('#tpl_sidebar_menu').template(this.def.menus))
    this.bindMenuClick()
  },
  initEvent: function () {
    this.bindTrigger()
    this.bindMenuClick()
  },
  bindTrigger: function () {
    var me = this
    $("#"+this.def.id).bind("side-menu-reload", function (evt, headerKey) {
      me.initMenu(headerKey)
    })
  },
  bindMenuClick () {
    var me = this
    function clearMenuActiveStatus () {
      $('#'+me.def.id+' .s-c-link.active').removeClass('active')
    }
    function addMenuActiveStatus (menuId) {
      if (menuId && /^\d+(\.\d+)*$/.test(menuId.toString())) {
        if (/^\d+$/.test(menuId.toString())) {
          // 一级菜单
          $('#'+me.def.id+' .s-c-link1[data-id='+menuId+']').addClass('active')
        } else if (/^\d+\.\d+/.test(menuId.toString())) {
          // 二级菜单
          var id1 = menuId.toString().split('.')[0]
          $('#'+me.def.id+' .s-c-link1[data-id="'+id1+'"]').addClass('active')
          $('#'+me.def.id+' .s-c-link2[data-id="'+menuId+'"]').addClass('active')
        }
      }
    }
    function openMenu2List (id1) {
      var menu2Ul = $('#'+me.def.id+' .s-c-link1[data-id="'+id1+'"]').parent().siblings('.s-c-2')
      if (menu2Ul) {
        menu2Ul.height((menu2Ul.children('li').length * 2.8) + 'rem').parent().addClass('open')
      }
    }
    function closeMenu2List (id1) {
      var menu2Ul = $('#'+me.def.id+' .s-c-link1[data-id="'+id1+'"]').parent().siblings('.s-c-2')
      if (menu2Ul) {
        menu2Ul.height(0).parent().removeClass('open')
      }
    }
    $('.s-c-link1').on('click', function (evt) {
      var $el = $(evt.target).hasClass('s-c-link1') ? $(evt.target) : $(evt.target.parentElement)
      if ($el.hasClass('s-c-link1') && $el.parent().siblings('.s-c-2').length) {
        if ($el.parent().parent().hasClass('open')) {
          closeMenu2List($el.data('id'))
        } else {
          openMenu2List($el.data('id'))
        }
      } else {
        if (!$el.hasClass('active')) {
          clearMenuActiveStatus()
          addMenuActiveStatus($el.data('id'))
          if ($el.data('href')) {
            $("#main").trigger('main-change-content', $el.data('href'))
            var menuId = $el.data('id').toString().split('.').map(function (item) {
              return (parseInt(item) - 1)
            })
            var breadCrumb = []
            if (me.def.menus.title) {
              breadCrumb.push(me.def.menus.title)
            }
            if (me.def.menus.subs[menuId[0]].title) {
              breadCrumb.push(me.def.menus.subs[menuId[0]].title)
            }
            if (menuId[1] && me.def.menus.subs[menuId[0]].subs[menuId[1]].title) {
              breadCrumb.push(me.def.menus.subs[menuId[0]].subs[menuId[1]].title)
            }
            $("#main").trigger('main-change-breadcrumb', breadCrumb)
          }
          console.log('on menu ' + $el.data('id') + ' click')
        }
      }
    })
    $('.s-c-link2').on('click', function (evt) {
      var $el = $(evt.target).hasClass('s-c-link2') ? $(evt.target) : $(evt.target.parentElement)
      if (!$el.hasClass('active')) {
        clearMenuActiveStatus()
        addMenuActiveStatus($el.data('id'))
        var href = $el.data('href')
        console.log('on menu ' + $el.data('id') + '('+ href + ') click')
        var menuId = $el.data('id').toString().split('.').map(function (item) {
          return (parseInt(item) - 1)
        })
        var breadCrumb = []
        if (me.def.menus.title) {
          breadCrumb.push(me.def.menus.title)
        }
        if (me.def.menus.subs[menuId[0]].title) {
          breadCrumb.push(me.def.menus.subs[menuId[0]].title)
        }
        if (menuId[1] && me.def.menus.subs[menuId[0]].subs[menuId[1]].title) {
          breadCrumb.push(me.def.menus.subs[menuId[0]].subs[menuId[1]].title)
        }
        $("#main").trigger('main-change-content', href)
        $("#main").trigger('main-change-breadcrumb', breadCrumb)
      }
    })
  },
  onMenuItem1Click () {
  }
}
module.exports = sideBar
