export var Model = {
  Category: function (categoryName) {
    var id = (''.randomStr(16))
    return {
      id,
      title: categoryName,
      children: [],
      createTime: Date.now(),
      modifyTime: Date.now(),
      isOpen: true
    }
  },
  Item: function (itemName, itemUrl, itemDescription, itemCount) {
    var id = (''.randomStr(18))
    return {
      id,
      title: itemName,
      url: itemUrl,
      description: itemDescription ? itemDescription : '',
      visitCount: itemCount ? itemCount : 0,
      createTime: Date.now(),
      modifyTime: Date.now()
    }
  }
}
export var UI = {
  tpl: {
    category: 
    `<div class="category-item _OPEN_CLASS_" data-id="_CATEGORY_ID_">
      <div class="category-title">
        <span><i class="fa fa-angle-down"></i>_CATEGORY_TITLE_<span class="category-size">_CATEGORY_ITEM_SIZE_</span></span>
      </div>
      <ul class="card-container">
        _ITEM_HTML_
        <li class="add" onclick="Modal.onAddItemClick('_CATEGORY_ID_')" ondragover="UI.onCardDragover(event)" ondrop="UI.onCardDrop(event)"><i class="fa fa-plus"></i></li>
      </ul>
    </div>`,
    item: 
    `<li data-id="_ITEM_ID_" draggable="true" ondragstart="UI.onCardDragStart(event)" ondragover="UI.onCardDragover(event)" ondrop="UI.onCardDrop(event)">
      <a class="title" data-href="_ITEM_URL_" onclick="UI.onLinkClick('_CATEGORY_ID_','_ITEM_ID_')" title="_ITEM_TITLE_">_ITEM_TITLE_</a>
      <p class="des">_ITEM_DESCRIPTION_</p>
      <div class="static">
        <span>访问次数</span>
        <span class="visitCount">_ITEM_VISIT_COUNT_</span>
      </div>
      <div class="tool dropdown">
        <i class="fa fa-ellipsis-h" id="item__ITEM_ID__tool_btn" data-toggle="dropdown"></i>
        <ul class="dropdown-menu list" aria-labelledby="item__ITEM_ID__tool_btn">
          <li onclick="UI.onItemEditClick('_CATEGORY_ID_','_ITEM_ID_')">编辑</li>
          <li onclick="UI.onItemDeleteClick('_CATEGORY_ID_','_ITEM_ID_')">删除</li>
        </ul>
      </div>
    </li>`
  },
  init: function () {
    this.renderURLCard()
    this.bindEvent()
  },
  bindEvent: function () {
    this.bindAngleClickToCollapse()
  },
  bindAngleClickToCollapse: function () {
    $('.category-title > span').on('click', function () {
      var isOpen = $(this).parent().parent().hasClass('is-close')
      $(this).parent().parent().removeClass(isOpen ? 'is-close' : 'is-open').addClass(isOpen ? 'is-open' : 'is-close')
      // TODO: 修改localStorage里的值isOpen
      var categoryId = $(this).parent().parent().data('id')
      var tmp = Storage.getCategoryDataById(categoryId)
      tmp.isOpen = isOpen
      Storage.editCategory(categoryId, tmp)
    })
  },
  renderURLCard: function () {
    // clear UI
    $(".category-wrap").html('')
    // append html
    var sumHtml = ''
    var data = Storage.data
    for (var i = 0; i < data.length; i++) {
      var curCategoryHtml = this.tpl.category
      var id1 = data[i].id
      var title1 = data[i].title
      var count = data[i].children ? data[i].children.length : 0
      var hiddenClass = data[i].isOpen ? 'is-open' : 'is-close'
      curCategoryHtml = curCategoryHtml.replaceAll('_OPEN_CLASS_', hiddenClass)
      var sumItemHtml = ''
      for (var j = 0; j < count; j++) {
        var curItemHtml = this.tpl.item
        var id2 = data[i].children[j].id
        var title2 = data[i].children[j].title
        var url2 = data[i].children[j].url
        var desc2 = data[i].children[j].description
        var count2 = data[i].children[j].visitCount
        curItemHtml = curItemHtml.replaceAll('_ITEM_ID_',id2).replaceAll('_ITEM_TITLE_',title2).replaceAll('_ITEM_URL_',url2).replaceAll('_ITEM_DESCRIPTION_',desc2).replaceAll('_ITEM_VISIT_COUNT_',count2)
        sumItemHtml += curItemHtml
      }
      curCategoryHtml = curCategoryHtml.replaceAll('_ITEM_HTML_', sumItemHtml).replaceAll('_CATEGORY_ID_',id1)
        .replaceAll('_CATEGORY_TITLE_',title1).replaceAll('_CATEGORY_ITEM_SIZE_', count)
      sumHtml += curCategoryHtml
    }
    $(".category-wrap").html(sumHtml)
  },
  onLinkClick: function (categoryId, itemId) {
    var targetLi = $('div.category-item[data-id='+categoryId+'] ul.card-container > li[data-id='+itemId+']')
    if (targetLi) {
      var s = targetLi.find('span.visitCount')
      if (s) {
        var curCount = parseInt($(s).text())
        var newCount = curCount + 1
        $(s).text(newCount)
        Storage.updateItemVisitCount(categoryId, itemId, newCount)
      }
      var url = targetLi.find('a').data('href')
      window.open(url)
    }
  },
  // drag
  dragDropObj: {
    drag: {},
    drop: {}
  },
  getLiIdInfo: function (_el) {
    var el = this.getLiEle(_el)
    if (el.is('li')) {
      return {
        categoryId: el.parent().parent().data('id'),
        itemId: el.data('id')
      }
    } else {
      return null
    }
  },
  getLiEle: function (_el) {
    var el = $(_el)
    var max_try_count = 5
    while(!el.is('li') && max_try_count > 0) {
      el = el.parent()
      max_try_count--
    }
    if (el.is('li')) {
      return el
    } else {
      return null
    }
  },
  getDataItemById: function (categoryId, itemId) {
    var idArr = this.getDataItemIndexById(categoryId, itemId)
    if (idArr && idArr.length === 2) {
      return Storage.data[idArr[0]].children[idArr[1]]
    } else {
      return null
    }
  },
  getDataItemIndexById: function (categoryId, itemId) {
    var index1, index2
    if (categoryId) {
      if (Storage.data.some(function (item, idx1) {
        if (item.id == categoryId) {
          index1 = idx1
          return true
        }
        return false
      })) {
        if (Storage.data[index1].children.some(function (item, idx2) {
          if (item.id == itemId) {
            index2 = idx2
            return true
          }
          return false
        })) {
          return [index1, index2]
        } else {
          return [index1]
        }
      }
    }
    return null
  },
  // clear all drag and drop class
  clearAllDragDropClass: function () {
    $(".card-container > li").removeClass("drag-before").removeClass("drag-after")
  },
  handleDrop: function () {
    if (this.dragDropObj.drag && this.dragDropObj.drag.categoryId && this.dragDropObj.drag.itemId && this.dragDropObj.drop && this.dragDropObj.drop.categoryId) {
      var dragItemIndex = this.getDataItemIndexById(this.dragDropObj.drag.categoryId, this.dragDropObj.drag.itemId)
      var dropItemIndex = this.getDataItemIndexById(this.dragDropObj.drop.categoryId, this.dragDropObj.drop.itemId)
      if (dragItemIndex && dropItemIndex) {
        var tmp = deepCopy(this.getDataItemById(this.dragDropObj.drag.categoryId, this.dragDropObj.drag.itemId))
        Storage.data[dragItemIndex[0]].children.splice(dragItemIndex[1],1)
        var dropTargetIndex = this.dragDropObj.drop.direction == "before" ? dropItemIndex[1] : dropItemIndex[1] + 1
        if (!isNaN(dropItemIndex[1])) {
          Storage.data[dropItemIndex[0]].children = Storage.data[dropItemIndex[0]].children.slice(0, dropTargetIndex).concat(tmp, Storage.data[dropItemIndex[0]].children.slice(dropTargetIndex))
        } else {
          Storage.data[dropItemIndex[0]].children = Storage.data[dropItemIndex[0]].children.concat(tmp)
        }
        Storage.saveData()
        UI.init()
      }
    } else {
      console.error('invalid dragDropObj', this.dragDropObj)
    }
  },
  onCardDragStart: function (ev) {
    // ev.preventDefault()
    UI.dragDropObj.drag = this.getLiIdInfo(ev.target)
    var liEl = this.getLiEle(ev.target)
    liEl.addClass('drag-ing')
  },
  onCardDragover: function (ev) {
    ev.preventDefault()
    this.clearAllDragDropClass()
    var liEl = this.getLiEle(ev.target)
    var className = 'drag-before'
    if (!liEl.hasClass('add')) {
      className = ev.offsetX > 100 ? 'drag-after':'drag-before'
    }
    liEl.addClass(className)
  },
  onCardDrop: function (ev) {
    UI.dragDropObj.drop = this.getLiIdInfo(ev.target)
    UI.dragDropObj.drop.direction = (ev.offsetX > 100 ? 'after':'before')
    this.clearAllDragDropClass()
    this.handleDrop()
  },
  // item卡片右上角三个点按钮
  onItemEditClick: function (categoryId, itemId) {
    Modal.showModal('item', 'edit', categoryId, itemId)
  },
  onItemDeleteClick: function (categoryId, itemId) {
    Storage.deleteItem(categoryId, itemId)
  },
  // config
  onDisplayModeChange: function (event) {
    var DEMO_CLASS = "mode-demo"
    var EDIT_CLASS = "mode-edit"
    var isDemo = $("#main").hasClass(EDIT_CLASS)
    $("#btn_editDemoSwitch").text(isDemo ? '编辑' : '展示')
    $("#main").removeClass(isDemo ? EDIT_CLASS : DEMO_CLASS).addClass(isDemo ? DEMO_CLASS : EDIT_CLASS)
  },
  // header
  onHeaderSearchInputKeyup: function () {
    var currentText = $("#input_header_search").val()
    setTimeout(function () {
      var nextText = $("#input_header_search").val()
      if (currentText == nextText) {
        UI.headerSearch(currentText)
      }
    }, 800)
  },
  headerSearch: function (keyword) {
    if (keyword) {
      this.showHeaderSearchResult(keyword, Storage.searchByKeyword(keyword))
    } else {
      $('header .search-result-wrap ul').empty()
      $('header .search-wrap .total span').text(0)
    }
  },
  showHeaderSearchResult: function (keyword, resultArr) {
    function hightlight (fullstr, _hlStr) {
      var hlStr = _hlStr || keyword
      return fullstr.replace(new RegExp('('+hlStr+')', 'ig'), '<span class="hightlight">$1</span>')
    }
    var html = ''
    resultArr.forEach(function (item, index) {
      html += '<li><a href="_URL_0" target="_blank"><span class="title">_TITLE_</span><span class="url">_URL_</span><span class="des">_DESCRIPTION_</span></a></li>'
      .replaceAll('_URL_0', item.url).replaceAll('_URL_', hightlight(item.url)).replaceAll('_TITLE_', hightlight(item.title)).replaceAll('_DESCRIPTION_', hightlight(item.description))
    })
    $('header .search-result-wrap ul').empty().html(html)
    $('header .search-wrap .total span').text(resultArr.length)
    $('header .search-result-wrap').show()
  },
  hideHeaderSearch: function () {
    $("#input_header_search").val('')
    $('header .search-result-wrap').hide()
  }
}
// localStorage
export var Storage = {
  KEY_NAME: 'local_storage_hao123_data',
  data: null,
  getData: function () {
    // title, url, description, visitCount, createTime, modifyTime, children, isOpen
    var result = []
    if (window.localStorage[this.KEY_NAME]) {
      result = JSON.parse(window.localStorage[this.KEY_NAME])
    }
    return result
  },
  saveData: function (isRerenderUI) {
    if (this.data) {
      try {
        var str = JSON.stringify(this.data)
        if (str) {
          window.localStorage[this.KEY_NAME] = str
        }
        if (isRerenderUI) {
          UI.init()
        }
      } catch (e) {
  
      }
    }
  },
  addCategory: function (categoryName) {
    if (categoryName) {
      if (this.isCategoryNameConflict(categoryName) < 0) {
        this.data.push(Model.Category(categoryName))
        this.saveData(true)
        return true
      } else {
        alert('categoryName existed')
      }
    }
    return false
  },
  editCategory: function (categoryId, formObj) {
    var cData = this.getCategoryDataById(categoryId)
    if (cData) {
      // check category name is conflict
      if (this.isCategoryNameConflict(formObj.title, formObj.id) < 0) {
        this.data.some((function (item, index) {
          if (item.id == formObj.id) {
            item = formObj
            return true
          } else {
            return false
          }
        }))
        this.saveData(true)
      } else {
        console.error('categoryName ' + formObj.title + ' is conflict')
      }
    } else {
      console.error('CategoryId ' + categoryId + ' in not existed')
    }
  },
  isCategoryNameConflict: function (categoryName, categoryId) {
    var result = -1
    if (categoryName) {
      this.data.some(function (item, idx) {
        if (item.title == categoryName && item.id != categoryId) {
          result = idx
          return true
        } else {
          return false
        }
      })
    }
    return result
  },
  addItem: function (categoryId, itemName, itemUrl, itemDescription) {
    if (categoryId && itemName) {
      // check itemName is conflict
      if (!this.isItemNameConflict(categoryId, itemName)) {
        var cData = this.getCategoryDataById(categoryId)
        cData.children.push(Model.Item(itemName, itemUrl, itemDescription, 0))
        this.saveData(true)
        return true
      } else {
        alert('itemName conflict')
      }
      return false
    }
  },
  editItem: function (categoryId, itemId, formObj) {
    var iData = this.getItemById(categoryId, itemId)
    if (iData) {
      // check item title is conflict
      var isConflict = this.getCategoryDataById(categoryId).children.filter(function (item) {
        return (item.id != itemId)
      }).some(function (item) {
        return (item.title == formObj.title)
      })
      if (isConflict) {
        alert('Item name conflict')
      } else {
        var iData = this.getItemById(categoryId, itemId)
        formObj.modifyTime = Date.now()
        for (var key in formObj) {
          iData[key] = formObj[key]
        }
        this.saveData(true)
        return true
      }
    }
    return false
  },
  deleteItem: function (categoryId, itemId) {
    if (confirm('确认删除吗？')) {
      var cData = this.getCategoryDataById(categoryId)
      for (var i = 0;i < cData.children.length; i++) {
        if (cData.children[i].id == itemId) {
          cData.children.splice(i, 1)
          break
        }
      }
      this.saveData(true)
    }
  },
  getCategoryDataByName (categoryName) {
    var result = null
    var filterArr = this.data.filter(function (item) {
      return (item.title == categoryName)
    })
    if (filterArr.length > 0) {
      result = filterArr[0]
    }
    return result
  },
  getCategoryDataById (cId) {
    var result = null
    var filterArr = this.data.filter(function (item) {
      return (item.id == cId)
    })
    if (filterArr.length > 0) {
      result = filterArr[0]
    }
    return result
  },
  getItemById (cId, iId) {
    var result = null
    var cData = this.getCategoryDataById(cId)
    if (cData) {
      var iFilterArr = cData.children.filter(function (item) {
        return (item.id == iId)
      })
      if (iFilterArr.length > 0) {
        result = iFilterArr[0]
      }
    }
    return result
  },
  isItemNameConflict: function (categoryId, itemName) {
    var result = false
    var cData = this.getCategoryDataById(categoryId)
      for (var i = 0; cData.children && i < cData.children.length; i++) {
        if (cData.children[i].title == itemName) {
          result = true
          break
        }
      }
    return result
  },
  updateItemVisitCount: function (categoryId, itemId, count) {
    var iData = this.getItemById(categoryId, itemId)
    iData.visitCount = Number(count)
    this.saveData(false)
  },
  // search
  searchByKeyword: function (keyword) {
    var arr = []
    for (var i = 0; i < this.data.length; i++) {
      var categoryItem = this.data[i]
      if (categoryItem && categoryItem.children) {
        for (var j = 0; j < categoryItem.children.length; j++) {
          var urlItem = categoryItem.children[j]
          if (urlItem && ((urlItem.title&&urlItem.title.toLowerCase().indexOf(keyword) > -1) || (urlItem.url&&urlItem.url.toLowerCase().indexOf(keyword) > -1) || (urlItem.description&&urlItem.description.toLowerCase().indexOf(keyword) > -1))) {
            arr.push(urlItem)
          }
        }
      }
    }
    return arr
  }
}
// 弹窗
export var Modal = {
  id: {
    modal: 'modal',
    title: 'modal_title',
    url: 'modal_url',
    description: 'modal_description',
    hidden_type: 'modal_hidden_type',
    hidden_mode: 'modal_hidden_mode',
    hidden_category_name: 'modal_hidden_category_name',
    hidden_category_id: 'modal_hidden_category_id',
    hidden_item_id: 'modal_hidden_item_id'
  },
  setTitle: function (modalTitle) {
    if (modalTitle) {
      $("#modal_title").text(modalTitle)
    }
  },
  onAddItemClick: function (categoryId) {
    this.showModal('item')
    var c = Storage.getCategoryDataById(categoryId)
    this.setHiddenVal(this.id.hidden_category_id, categoryId)
    this.setHiddenVal(this.id.hidden_category_name, c.title)
  },
  onAddCategoryClick: function () {
    this.showModal('category')
  },
  showModal: function (type, mode, categoryId, itemId) {
    var inputUrl = $('#' + this.id.url)
    var inputDes = $('#' + this.id.description)
    var titleText = ''
    if (mode == 'edit') {
      titleText = '编辑'
      this.setHiddenVal(this.id.hidden_mode, 'edit')
      if (categoryId && itemId) {
        this.setHiddenVal(this.id.hidden_category_id, categoryId)
        this.setHiddenVal(this.id.hidden_item_id, itemId)
        this.fetchForm(categoryId, itemId)
      } else {
        console.error('Missing Parameters.')
      }
    } else {
      titleText = '新建'
      this.setHiddenVal(this.id.hidden_mode, 'create')
    }
    if (type == 'item') {
      titleText += '链接'
      inputUrl.show()
      inputDes.show()
    } else {
      titleText += '类别'
      inputUrl.hide()
      inputDes.hide()
    }
    this.setTitle(titleText)
    this.setHiddenVal(this.id.hidden_type, type)
    $("#" + this.id.modal).show()
  },
  closeModal: function () {
    $("#" + this.id.modal).hide()
  },
  setHiddenVal (id, val) {
    $("#" + id).val(val)
  },
  getHiddenVal (id) {
    return $("#" + id).val()
  },
  getFormData () {
    var result = {}
    var title = $('#' + this.id.title + ' input').val()
    if (title) result.title = title.trim()
    var url = $('#' + this.id.url + ' input').val()
    if (url) result.url = url.trim()
    var description = $('#' + this.id.description + ' textarea').val()
    if (description) result.description = description
    return result
  },
  setFormData (obj) {
    if (obj) {
      if (obj.title) {
        $('#' + this.id.title + ' input').val(obj.title)
      }
      if (obj.url) {
        $('#' + this.id.url + ' input').val(obj.url)
      }
      if (obj.description) {
        $('#' + this.id.description + ' textarea').val(obj.description)
      }
    }
  },
  fetchForm (categoryId, itemId) {
    var iData = Storage.getItemById(categoryId, itemId)
    if (iData) {
      this.setFormData(iData)
    }
  },
  getCurMode () {
    if (this.getHiddenVal(this.id.hidden_mode) == 'edit') {
      return 'edit'
    } else {
      return 'create'
    }
  },
  onModalOKClick: function () {
    var formData = this.getFormData()
    var isSuccess = false
    var isCreate = (this.getCurMode() == 'create')
    if (this.getHiddenVal(this.id.hidden_type) == 'category') {
      isSuccess = isCreate ? Storage.addCategory(formData.title) : Storage.editCategory()
    } else if (this.getHiddenVal(this.id.hidden_type) == 'item') {
      var categoryId = this.getHiddenVal(this.id.hidden_category_id)
      isSuccess = isCreate ? Storage.addItem(categoryId, formData.title, formData.url, formData.description)
        : Storage.editItem(categoryId, this.getHiddenVal(this.id.hidden_item_id), formData)
    }
    if (isSuccess) {
      this.closeModal()
      UI.init()
      this.clearModal()
    }
  },
  clearModal: function () {
    var inputArr = [this.id.title, this.id.url, this.id.description]
    inputArr.forEach(function (item) {
      $('#' + item + ' input').val('')
      $('#' + item + ' textarea').val('')
    })
  }
}
