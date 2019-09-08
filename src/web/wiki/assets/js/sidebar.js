(function () {
  window.sideBar = {
    def: {
      id: 'side_bar'
    },
    init: function () {
      this.initEvent()
    },
    initEvent: function () {
      this.bindMenuClick()
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
        var menu2Ul = $('#'+me.def.id+' .s-c-link1[data-id="'+id1+'"]').siblings('.s-c-2')
        if (menu2Ul) {
          menu2Ul.height((menu2Ul.children('li').length * 1.4) + 'rem').parent().addClass('open')
        }
      }
      function closeMenu2List (id1) {
        var menu2Ul = $('#'+me.def.id+' .s-c-link1[data-id="'+id1+'"]').siblings('.s-c-2')
        if (menu2Ul) {
          menu2Ul.height(0).parent().removeClass('open')
        }
      }
      $('.s-c-link1').on('click', function (evt) {
        var $el = $(evt.target).hasClass('s-c-link1') ? $(evt.target) : $(evt.target.parentElement)
        if ($el.hasClass('s-c-link1') && $el.siblings('.s-c-2').length) {
          if ($el.parent().hasClass('open')) {
            closeMenu2List($el.data('id'))
          } else {
            openMenu2List($el.data('id'))
          }
        } else {
          if (!$el.hasClass('active')) {
            clearMenuActiveStatus()
            addMenuActiveStatus($el.data('id'))
            console.log('on menu ' + $el.data('id') + ' click')
          }
        }
      })
      $('.s-c-link2').on('click', function (evt) {
        var $el = $(evt.target).hasClass('s-c-link2') ? $(evt.target) : $(evt.target.parentElement)
        if (!$el.hasClass('active')) {
          clearMenuActiveStatus()
          addMenuActiveStatus($el.data('id'))
          console.log('on menu ' + $el.data('id') + ' click')
        }
      })
    },
    onMenuItem1Click () {
    }
  }
  sideBar.init()
})()