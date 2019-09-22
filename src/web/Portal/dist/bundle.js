/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./style.less */ \"./style.less\")\r\n__webpack_require__(/*! ./script */ \"./script.js\")\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Model = {\r\n  Category: function (categoryName) {\r\n    var id = (''.randomStr(16))\r\n    return {\r\n      id,\r\n      title: categoryName,\r\n      children: [],\r\n      createTime: Date.now(),\r\n      modifyTime: Date.now(),\r\n      isOpen: true\r\n    }\r\n  },\r\n  Item: function (itemName, itemUrl, itemDescription, itemCount) {\r\n    var id = (''.randomStr(18))\r\n    return {\r\n      id,\r\n      title: itemName,\r\n      url: itemUrl,\r\n      description: itemDescription ? itemDescription : '',\r\n      visitCount: itemCount ? itemCount : 0,\r\n      createTime: Date.now(),\r\n      modifyTime: Date.now()\r\n    }\r\n  }\r\n}\r\nvar UI = {\r\n  tpl: {\r\n    category: \r\n    `<div class=\"category-item\" data-id=\"_CATEGORY_ID_\">\r\n      <p class=\"category-title\"><i class=\"fa fa-angle-right\"></i>_CATEGORY_TITLE_<span class=\"category-size\">_CATEGORY_ITEM_SIZE_</span></p>\r\n      <ul class=\"card-container\">\r\n        _ITEM_HTML_\r\n        <li class=\"add\" onclick=\"Modal.onAddItemClick('_CATEGORY_ID_')\" ondragover=\"UI.onCardDragover(event)\" ondrop=\"UI.onCardDrop(event)\"><i class=\"fa fa-plus\"></i></li>\r\n      </ul>\r\n    </div>`,\r\n    item: \r\n    `<li data-id=\"_ITEM_ID_\" draggable=\"true\" ondragstart=\"UI.onCardDragStart(event)\" ondragover=\"UI.onCardDragover(event)\" ondrop=\"UI.onCardDrop(event)\">\r\n      <a class=\"title\" data-href=\"_ITEM_URL_\" onclick=\"UI.onLinkClick('_CATEGORY_ID_','_ITEM_ID_')\">_ITEM_TITLE_</a>\r\n      <p class=\"des\">_ITEM_DESCRIPTION_</p>\r\n      <div class=\"static\">\r\n        <span>访问次数</span>\r\n        <span class=\"visitCount\">_ITEM_VISIT_COUNT_</span>\r\n      </div>\r\n      <div class=\"tool dropdown\">\r\n        <i class=\"fa fa-ellipsis-h\" id=\"item__ITEM_ID__tool_btn\" data-toggle=\"dropdown\"></i>\r\n        <ul class=\"dropdown-menu list\" aria-labelledby=\"item__ITEM_ID__tool_btn\">\r\n          <li onclick=\"UI.onItemEditClick('_CATEGORY_ID_','_ITEM_ID_')\">编辑</li>\r\n          <li onclick=\"UI.onItemDeleteClick('_CATEGORY_ID_','_ITEM_ID_')\">删除</li>\r\n        </ul>\r\n      </div>\r\n    </li>`\r\n  },\r\n  renderURLCard: function () {\r\n    // clear UI\r\n    $(\".category-wrap\").html('')\r\n    // append html\r\n    var sumHtml = ''\r\n    var data = Storage.data\r\n    for (var i = 0; i < data.length; i++) {\r\n      var curCategoryHtml = this.tpl.category\r\n      var id1 = data[i].id\r\n      var title1 = data[i].title\r\n      var count = data[i].children ? data[i].children.length : 0\r\n      var sumItemHtml = ''\r\n      for (var j = 0; j < count; j++) {\r\n        var curItemHtml = this.tpl.item\r\n        var id2 = data[i].children[j].id\r\n        var title2 = data[i].children[j].title\r\n        var url2 = data[i].children[j].url\r\n        var desc2 = data[i].children[j].description\r\n        var count2 = data[i].children[j].visitCount\r\n        curItemHtml = curItemHtml.replaceAll('_ITEM_ID_',id2).replaceAll('_ITEM_TITLE_',title2).replaceAll('_ITEM_URL_',url2).replaceAll('_ITEM_DESCRIPTION_',desc2).replaceAll('_ITEM_VISIT_COUNT_',count2)\r\n        sumItemHtml += curItemHtml\r\n      }\r\n      curCategoryHtml = curCategoryHtml.replaceAll('_ITEM_HTML_', sumItemHtml).replaceAll('_CATEGORY_ID_',id1)\r\n        .replaceAll('_CATEGORY_TITLE_',title1).replaceAll('_CATEGORY_ITEM_SIZE_', count)\r\n      sumHtml += curCategoryHtml\r\n    }\r\n    $(\".category-wrap\").html(sumHtml)\r\n  },\r\n  onLinkClick: function (categoryId, itemId) {\r\n    var targetLi = $('div.category-item[data-id='+categoryId+'] ul.card-container > li[data-id='+itemId+']')\r\n    if (targetLi) {\r\n      var s = targetLi.find('span.visitCount')\r\n      if (s) {\r\n        var curCount = parseInt($(s).text())\r\n        var newCount = curCount + 1\r\n        $(s).text(newCount)\r\n        Storage.updateItemVisitCount(categoryId, itemId, newCount)\r\n      }\r\n      var url = targetLi.find('a').data('href')\r\n      window.open(url)\r\n    }\r\n  },\r\n  // drag\r\n  dragDropObj: {\r\n    drag: {},\r\n    drop: {}\r\n  },\r\n  getLiIdInfo: function (_el) {\r\n    var el = this.getLiEle(_el)\r\n    if (el.is('li')) {\r\n      return {\r\n        categoryId: el.parent().parent().data('id'),\r\n        itemId: el.data('id')\r\n      }\r\n    } else {\r\n      return null\r\n    }\r\n  },\r\n  getLiEle: function (_el) {\r\n    var el = $(_el)\r\n    var max_try_count = 5\r\n    while(!el.is('li') && max_try_count > 0) {\r\n      el = el.parent()\r\n      max_try_count--\r\n    }\r\n    if (el.is('li')) {\r\n      return el\r\n    } else {\r\n      return null\r\n    }\r\n  },\r\n  getDataItemById: function (categoryId, itemId) {\r\n    var idArr = this.getDataItemIndexById(categoryId, itemId)\r\n    if (idArr && idArr.length === 2) {\r\n      return Storage.data[idArr[0]].children[idArr[1]]\r\n    } else {\r\n      return null\r\n    }\r\n  },\r\n  getDataItemIndexById: function (categoryId, itemId) {\r\n    var index1, index2\r\n    if (categoryId) {\r\n      if (Storage.data.some(function (item, idx1) {\r\n        if (item.id == categoryId) {\r\n          index1 = idx1\r\n          return true\r\n        }\r\n        return false\r\n      })) {\r\n        if (Storage.data[index1].children.some(function (item, idx2) {\r\n          if (item.id == itemId) {\r\n            index2 = idx2\r\n            return true\r\n          }\r\n          return false\r\n        })) {\r\n          return [index1, index2]\r\n        } else {\r\n          return [index1]\r\n        }\r\n      }\r\n    }\r\n    return null\r\n  },\r\n  // clear all drag and drop class\r\n  clearAllDragDropClass: function () {\r\n    $(\".card-container > li\").removeClass(\"drag-before\").removeClass(\"drag-after\")\r\n  },\r\n  handleDrop: function () {\r\n    if (this.dragDropObj.drag && this.dragDropObj.drag.categoryId && this.dragDropObj.drag.itemId && this.dragDropObj.drop && this.dragDropObj.drop.categoryId) {\r\n      var dragItemIndex = this.getDataItemIndexById(this.dragDropObj.drag.categoryId, this.dragDropObj.drag.itemId)\r\n      var dropItemIndex = this.getDataItemIndexById(this.dragDropObj.drop.categoryId, this.dragDropObj.drop.itemId)\r\n      if (dragItemIndex && dropItemIndex) {\r\n        var tmp = deepCopy(this.getDataItemById(this.dragDropObj.drag.categoryId, this.dragDropObj.drag.itemId))\r\n        Storage.data[dragItemIndex[0]].children.splice(dragItemIndex[1],1)\r\n        var dropTargetIndex = this.dragDropObj.drop.direction == \"before\" ? dropItemIndex[1] : dropItemIndex[1] + 1\r\n        if (!isNaN(dropItemIndex[1])) {\r\n          Storage.data[dropItemIndex[0]].children = Storage.data[dropItemIndex[0]].children.slice(0, dropTargetIndex).concat(tmp, Storage.data[dropItemIndex[0]].children.slice(dropTargetIndex))\r\n        } else {\r\n          Storage.data[dropItemIndex[0]].children = Storage.data[dropItemIndex[0]].children.concat(tmp)\r\n        }\r\n        Storage.saveData()\r\n        UI.renderURLCard()\r\n      }\r\n    } else {\r\n      console.error('invalid dragDropObj', this.dragDropObj)\r\n    }\r\n  },\r\n  onCardDragStart: function (ev) {\r\n    // ev.preventDefault()\r\n    UI.dragDropObj.drag = this.getLiIdInfo(ev.target)\r\n    var liEl = this.getLiEle(ev.target)\r\n    liEl.addClass('drag-ing')\r\n  },\r\n  onCardDragover: function (ev) {\r\n    ev.preventDefault()\r\n    this.clearAllDragDropClass()\r\n    var liEl = this.getLiEle(ev.target)\r\n    var className = 'drag-before'\r\n    if (!liEl.hasClass('add')) {\r\n      className = ev.offsetX > 100 ? 'drag-after':'drag-before'\r\n    }\r\n    liEl.addClass(className)\r\n  },\r\n  onCardDrop: function (ev) {\r\n    UI.dragDropObj.drop = this.getLiIdInfo(ev.target)\r\n    UI.dragDropObj.drop.direction = (ev.offsetX > 100 ? 'after':'before')\r\n    this.clearAllDragDropClass()\r\n    this.handleDrop()\r\n  },\r\n  // item卡片右上角三个点按钮\r\n  onItemEditClick: function (categoryId, itemId) {\r\n    Modal.showModal('item', 'edit', categoryId, itemId)\r\n  },\r\n  onItemDeleteClick: function (categoryId, itemId) {\r\n    Storage.deleteItem(categoryId, itemId)\r\n  }\r\n}\r\n// localStorage\r\nvar Storage = {\r\n  KEY_NAME: 'local_storage_hao123_data',\r\n  data: null,\r\n  getData: function () {\r\n    // title, url, description, visitCount, createTime, modifyTime, children, isOpen\r\n    var result = []\r\n    if (window.localStorage[this.KEY_NAME]) {\r\n      result = JSON.parse(window.localStorage[this.KEY_NAME])\r\n    }\r\n    return result\r\n  },\r\n  saveData: function (isRerenderUI) {\r\n    if (this.data) {\r\n      try {\r\n        var str = JSON.stringify(this.data)\r\n        if (str) {\r\n          window.localStorage[this.KEY_NAME] = str\r\n        }\r\n        if (isRerenderUI) {\r\n          UI.renderURLCard()\r\n        }\r\n      } catch (e) {\r\n  \r\n      }\r\n    }\r\n  },\r\n  addCategory: function (categoryName) {\r\n    if (categoryName) {\r\n      if (this.isCategoryNameConflict(categoryName) < 0) {\r\n        this.data.push(Model.Category(categoryName))\r\n        this.saveData(true)\r\n        return true\r\n      } else {\r\n        alert('categoryName existed')\r\n      }\r\n    }\r\n    return false\r\n  },\r\n  editCategory: function (categoryId, formObj) {\r\n  },\r\n  isCategoryNameConflict: function (categoryName) {\r\n    var result = -1\r\n    if (categoryName) {\r\n      var filterArr = this.data.some(function (item, idx) {\r\n        if (item.title == categoryName) {\r\n          result = idx\r\n          return true\r\n        }\r\n      })\r\n    }\r\n    return result\r\n  },\r\n  addItem: function (categoryId, itemName, itemUrl, itemDescription) {\r\n    if (categoryId && itemName) {\r\n      // check itemName is conflict\r\n      if (!this.isItemNameConflict(categoryId, itemName)) {\r\n        var cData = this.getCategoryDataById(categoryId)\r\n        cData.children.push(Model.Item(itemName, itemUrl, itemDescription, 0))\r\n        this.saveData(true)\r\n        return true\r\n      } else {\r\n        alert('itemName conflict')\r\n      }\r\n      return false\r\n    }\r\n  },\r\n  editItem: function (categoryId, itemId, formObj) {\r\n    var iData = this.getItemById(categoryId, itemId)\r\n    if (iData) {\r\n      // check item title is conflict\r\n      var isConflict = this.getCategoryDataById(categoryId).children.filter(function (item) {\r\n        return (item.id != itemId)\r\n      }).some(function (item) {\r\n        return (item.title == formObj.title)\r\n      })\r\n      if (isConflict) {\r\n        alert('Item name conflict')\r\n      } else {\r\n        var iData = this.getItemById(categoryId, itemId)\r\n        formObj.modifyTime = Date.now()\r\n        for (var key in formObj) {\r\n          iData[key] = formObj[key]\r\n        }\r\n        this.saveData(true)\r\n        return true\r\n      }\r\n    }\r\n    return false\r\n  },\r\n  deleteItem: function (categoryId, itemId) {\r\n    if (confirm('确认删除吗？')) {\r\n      var cData = this.getCategoryDataById(categoryId)\r\n      for (var i = 0;i < cData.children.length; i++) {\r\n        if (cData.children[i].id == itemId) {\r\n          cData.children.splice(i, 1)\r\n          break\r\n        }\r\n      }\r\n      this.saveData(true)\r\n    }\r\n  },\r\n  getCategoryDataByName (categoryName) {\r\n    var result = null\r\n    var filterArr = this.data.filter(function (item) {\r\n      return (item.title == categoryName)\r\n    })\r\n    if (filterArr.length > 0) {\r\n      result = filterArr[0]\r\n    }\r\n    return result\r\n  },\r\n  getCategoryDataById (cId) {\r\n    var result = null\r\n    var filterArr = this.data.filter(function (item) {\r\n      return (item.id == cId)\r\n    })\r\n    if (filterArr.length > 0) {\r\n      result = filterArr[0]\r\n    }\r\n    return result\r\n  },\r\n  getItemById (cId, iId) {\r\n    var result = null\r\n    var cData = this.getCategoryDataById(cId)\r\n    if (cData) {\r\n      var iFilterArr = cData.children.filter(function (item) {\r\n        return (item.id == iId)\r\n      })\r\n      if (iFilterArr.length > 0) {\r\n        result = iFilterArr[0]\r\n      }\r\n    }\r\n    return result\r\n  },\r\n  isItemNameConflict: function (categoryId, itemName) {\r\n    var result = false\r\n    var cData = this.getCategoryDataById(categoryId)\r\n      for (var i = 0; cData.children && i < cData.children.length; i++) {\r\n        if (cData.children[i].title == itemName) {\r\n          result = true\r\n          break\r\n        }\r\n      }\r\n    return result\r\n  },\r\n  updateItemVisitCount: function (categoryId, itemId, count) {\r\n    var iData = this.getItemById(categoryId, itemId)\r\n    iData.visitCount = Number(count)\r\n    this.saveData(false)\r\n  }\r\n}\r\n// 弹窗\r\nvar Modal = {\r\n  id: {\r\n    modal: 'modal',\r\n    title: 'modal_title',\r\n    url: 'modal_url',\r\n    description: 'modal_description',\r\n    hidden_type: 'modal_hidden_type',\r\n    hidden_mode: 'modal_hidden_mode',\r\n    hidden_category_name: 'modal_hidden_category_name',\r\n    hidden_category_id: 'modal_hidden_category_id',\r\n    hidden_item_id: 'modal_hidden_item_id'\r\n  },\r\n  setTitle: function (modalTitle) {\r\n    if (modalTitle) {\r\n      $(\"#modal_title\").text(modalTitle)\r\n    }\r\n  },\r\n  onAddItemClick: function (categoryId) {\r\n    this.showModal('item')\r\n    var c = Storage.getCategoryDataById(categoryId)\r\n    this.setHiddenVal(this.id.hidden_category_id, categoryId)\r\n    this.setHiddenVal(this.id.hidden_category_name, c.title)\r\n  },\r\n  onAddCategoryClick: function () {\r\n    this.showModal('category')\r\n  },\r\n  showModal: function (type, mode, categoryId, itemId) {\r\n    var inputUrl = $('#' + this.id.url)\r\n    var inputDes = $('#' + this.id.description)\r\n    var titleText = ''\r\n    if (mode == 'edit') {\r\n      titleText = '编辑'\r\n      this.setHiddenVal(this.id.hidden_mode, 'edit')\r\n      if (categoryId && itemId) {\r\n        this.setHiddenVal(this.id.hidden_category_id, categoryId)\r\n        this.setHiddenVal(this.id.hidden_item_id, itemId)\r\n        this.fetchForm(categoryId, itemId)\r\n      } else {\r\n        console.error('Missing Parameters.')\r\n      }\r\n    } else {\r\n      titleText = '新建'\r\n      this.setHiddenVal(this.id.hidden_mode, 'create')\r\n    }\r\n    if (type == 'item') {\r\n      titleText += '链接'\r\n      inputUrl.show()\r\n      inputDes.show()\r\n    } else {\r\n      titleText += '类别'\r\n      inputUrl.hide()\r\n      inputDes.hide()\r\n    }\r\n    this.setTitle(titleText)\r\n    this.setHiddenVal(this.id.hidden_type, type)\r\n    $(\"#\" + this.id.modal).show()\r\n  },\r\n  closeModal: function () {\r\n    $(\"#\" + this.id.modal).hide()\r\n  },\r\n  setHiddenVal (id, val) {\r\n    $(\"#\" + id).val(val)\r\n  },\r\n  getHiddenVal (id) {\r\n    return $(\"#\" + id).val()\r\n  },\r\n  getFormData () {\r\n    var result = {}\r\n    var title = $('#' + this.id.title + ' input').val()\r\n    if (title) result.title = title.trim()\r\n    var url = $('#' + this.id.url + ' input').val()\r\n    if (url) result.url = url.trim()\r\n    var description = $('#' + this.id.description + ' textarea').val()\r\n    if (description) result.description = description\r\n    return result\r\n  },\r\n  setFormData (obj) {\r\n    if (obj) {\r\n      if (obj.title) {\r\n        $('#' + this.id.title + ' input').val(obj.title)\r\n      }\r\n      if (obj.url) {\r\n        $('#' + this.id.url + ' input').val(obj.url)\r\n      }\r\n      if (obj.description) {\r\n        $('#' + this.id.description + ' textarea').val(obj.description)\r\n      }\r\n    }\r\n  },\r\n  fetchForm (categoryId, itemId) {\r\n    var iData = Storage.getItemById(categoryId, itemId)\r\n    if (iData) {\r\n      this.setFormData(iData)\r\n    }\r\n  },\r\n  getCurMode () {\r\n    if (this.getHiddenVal(this.id.hidden_mode) == 'edit') {\r\n      return 'edit'\r\n    } else {\r\n      return 'create'\r\n    }\r\n  },\r\n  onModalOKClick: function () {\r\n    var formData = this.getFormData()\r\n    var isSuccess = false\r\n    var isCreate = (this.getCurMode() == 'create')\r\n    if (this.getHiddenVal(this.id.hidden_type) == 'category') {\r\n      isSuccess = isCreate ? Storage.addCategory(formData.title) : Storage.editCategory()\r\n    } else if (this.getHiddenVal(this.id.hidden_type) == 'item') {\r\n      var categoryId = this.getHiddenVal(this.id.hidden_category_id)\r\n      isSuccess = isCreate ? Storage.addItem(categoryId, formData.title, formData.url, formData.description)\r\n        : Storage.editItem(categoryId, this.getHiddenVal(this.id.hidden_item_id), formData)\r\n    }\r\n    if (isSuccess) {\r\n      this.closeModal()\r\n      UI.renderURLCard()\r\n      this.clearModal()\r\n    }\r\n  },\r\n  clearModal: function () {\r\n    var inputArr = [this.id.title, this.id.url, this.id.description]\r\n    inputArr.forEach(function (item) {\r\n      $('#' + item + ' input').val('')\r\n      $('#' + item + ' textarea').val('')\r\n    })\r\n  }\r\n}\r\n\r\nNumber.prototype.random = function(max, min) {\r\n  max = (!isNaN(max) ? parseInt(max) : 10)\r\n  min = (!isNaN(min) ? parseInt(min) : 0)\r\n  var dis = max - min\r\n  return (Math.floor(Math.random() * (dis + 1)) + min)\r\n}\r\nString.prototype.randomStr = function (length, strArr) {\r\n  var dict = strArr || 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYS0123456789'\r\n  var len = length || 5\r\n  var result = ''\r\n  for (var i = 0; i < len; i++) {\r\n    result += dict[(0).random(dict.length-1, 0)]\r\n  }\r\n  return result\r\n}\r\nString.prototype.replaceAll = function (replacedStr, targetStr) {\r\n  var str = this.toString()\r\n  while (str.indexOf(replacedStr) > -1) {\r\n    str = str.replace(replacedStr, targetStr)\r\n  }\r\n  return str\r\n}\r\nfunction deepCopy (val) {\r\n  if (typeof (val) === 'object') {\r\n    return JSON.parse(JSON.stringify(val))\r\n  } else {\r\n    return val\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./script.js?");

/***/ }),

/***/ "./style.less":
/*!********************!*\
  !*** ./style.less ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./style.less?");

/***/ })

/******/ });