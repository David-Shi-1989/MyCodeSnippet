class userTag extends HTMLElement {
  constructor () {
    super()
    this.render()
  }
  static get observedAttributes () {
    return ['id', 'show-photo', 'name', 'show-id']
  }
  get userList () {
    if (!this._userList) {
      this._userList = require('../data/developer.json').users
    }
    return this._userList
  }
  render () {
    var shadowRoot = this.shadowRoot || this.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = ''

    var def = {
      floatLayerBgColor: '#444'
    }

    var id = this.id
    var isShowPhoto = this.showPhoto
    var name = this.name
    var userList = this.userList
    var lineHeight = 15

    var wrap = document.createElement('div')
    wrap.className = 'wrap'
    wrap.style.cursor = 'pointer'
    wrap.style.display = 'inline-block'
    wrap.style.position = 'relative'
    if (isShowPhoto) {
      wrap.style.display = 'grid'
      wrap.style.gridTemplateColumns = (lineHeight * 2) + 'px 80px'
      wrap.style.gridTemplateRows = (lineHeight+5) + 'px' + ' ' + (lineHeight-5) + 'px'
      wrap.style.gridTemplateAreas = '"img name" "img id"'
    } else {
    }
    var isShowPhoto = this.showPhoto
    var userItem = getUserItem()

    // photo
    if (isShowPhoto) {
      wrap.appendChild(getPhotoTag())
      wrap.appendChild(getNameTag())
      wrap.appendChild(getIdTag())
    } else {
      var p = document.createElement('p')
      p.style.margin = 0
      p.style.backgroundColor = 'var(--color-bg)'
      p.style.border = '1px solid var(--color-border)'
      p.style.borderRadius = '3px'
      p.style.padding = '0 7px'
      if (!isShowPhoto) {
        p.style.height = '25px'
        p.style.lineHeight = p.style.height
      }
      p.appendChild(getNameTag())
      // id
      var isShowID = (isShowPhoto&&(this.showID!='false'&&this.showID!=false)) || (!isShowPhoto&&(this.showID==true||this.showID=='true'))
      if (isShowID) {
        var idTag = getIdTag()
        idTag.style.marginLeft = '3px'
        p.appendChild(idTag)
      }
      wrap.appendChild(p)
    }

    function getUserItem () {
      if (id || name) {
        var mathchedItems = userList.filter(function (item) {
          return ((id == item.id || item.en.indexOf(name) > -1))
        })
        if (mathchedItems && mathchedItems.length > 0) {
          if (!mathchedItems[0].img) {
            mathchedItems[0].img = "../../assets/image/avatar/20150723115018_ma428.jpeg"
          }
          return mathchedItems[0]
        } else {
          throw new Error('Unmatched params id or name')
        }
      } else {
        throw new Error('Missing param id or name')
      }
    }
    function getPhotoTag () {
      var avatarImg = document.createElement('img')
      avatarImg.src = userItem.img
      avatarImg.style.gridArea = 'img'
      avatarImg.style.width = (lineHeight * 2) + 'px'
      avatarImg.style.border = '1px solid var(--color-border)'
      avatarImg.style.borderRadius = '50%'
      return avatarImg
    }
    function getNameTag () {
      var name = document.createElement('span')
      name.className = 'name'
      name.textContent = userItem.name
      name.style.margin = 0
      if (isShowPhoto) {
        name.style.gridArea = 'name'
      } else {
        name.style.lineHeight = (lineHeight+5) + 'px'
        name.style.height = (lineHeight+5) + 'px'
      }
      name.style.paddingLeft = isShowPhoto ? '8px' : 0
      name.style.color = 'var(--color-text-title)'
      name.style.fontSize = '14px'
      name.style.fontWeight = 'bolder'
      return name
    }
    function getIdTag () {
      var id = document.createElement('span')
      id.className = 'id'
      id.textContent = userItem.id
      id.style.margin = 0
      if (isShowPhoto) {
        id.style.gridArea = 'id'
      } else {
        id.style.lineHeight = lineHeight + 'px'
        id.style.height = lineHeight + 'px'
      }
      id.style.paddingLeft = isShowPhoto ? '8px' : 0
      id.style.color = 'var(--color-subcolor)'
      id.style.fontSize = '12px'
      return id
    }
    function getTooltipLayer () {
      var floatLayer = document.createElement('div')
      floatLayer.className = 'tooltip'
      floatLayer.style.position = 'absolute'
      floatLayer.style.width = '260px'
      floatLayer.style.minHeight = '30px'
      floatLayer.style.backgroundColor = def.floatLayerBgColor
      floatLayer.style.borderRadius = '4px'
      floatLayer.style.top = isShowPhoto ? '37px' : '32px'
      floatLayer.style.left = 0
      floatLayer.style.display = 'none'
      floatLayer.style.zIndex = 99
      floatLayer.style.cursor = 'default'
      floatLayer.style.boxSizing = 'border-box'
      floatLayer.style.padding = '8px'

      // img
      var photo = document.createElement('img')
      photo.style.borderRadius = '3px'
      photo.src = userItem.img
      floatLayer.appendChild(photo)

      // text
      var ul = document.createElement('ul')
      ul.className = 'info'
      function renderUlLi (title, value) {
        var li = document.createElement('li')
        var keyTag = document.createElement('span')
        keyTag.textContent = title
        keyTag.className = 'key'
        li.appendChild(keyTag)

        var valueTag = document.createElement('span')
        valueTag.textContent = value
        valueTag.className = 'value'
        li.appendChild(valueTag)

        return li
      }
      // name
      ul.appendChild(renderUlLi('姓名', userItem.name))
      ul.appendChild(renderUlLi('性别', (userItem.sex=='male' ? '男':'女')))
      ul.appendChild(renderUlLi('工号', userItem.id))

      floatLayer.appendChild(ul)
      return floatLayer
    }
    function getStyleText () {
      var style = []
      style.push('.tooltip:after{content:"";border-width:0px 5px 5px 5px;border-color:transparent transparent '+def.floatLayerBgColor+' transparent;position:absolute;width:0;height:0;border-style:solid;margin-top:-13px;margin-left:2px;}')
      style.push('.tooltip img{width: 100px;height:100px;}')
      style.push('.wrap:hover .tooltip {display: flex !important;}')
      // info
      style.push('.tooltip ul.info{list-style:none;color:#f2f2f2;padding: 0 0 0 10px;margin:0;font-size:12px;}')
      style.push('.tooltip ul.info .key{margin-right:5px;}.tooltip ul.info .key:after{content:":";}')
      if (isShowPhoto) {
      } else {
        // name前的@符号
        style.push('span.name:before {content: "@";color: var(--color-subcolor);font-weight:normal;font-size:12px;margin-right:3px;}')
      }
      return style.join('')
    }
    var style = document.createElement('style')
    style.textContent = getStyleText()
    shadowRoot.appendChild(style)
    // float layer
    

    wrap.appendChild(getTooltipLayer())

    shadowRoot.appendChild(wrap)
  }
  get id () {
    return this.getAttribute('id') || ''
  }
  get name () {
    return this.getAttribute('name') || ''
  }
  get showPhoto () {
    return !(this.getAttribute('show-photo') == false || this.getAttribute('show-photo') == "false")
  }
  get showID () {
    this.getAttribute('show-id')
  }
  attributeChangedCallback (attr, oldValue, newValue) {
    this.render()
  }
}
customElements.define('user-tag', userTag)

class dateTimeTag extends HTMLElement {
  constructor () {
    super()
    this.render()
  }
  static get observedAttributes () {
    return ['str', 'timestamp', 'is-block']
  }
  render () {
    var shadowRoot = this.shadowRoot || this.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = ''
    var str = this.str
    var timestamp = this.timestamp
    var isBlock = this.isBlock
    var format = 'yyyy/MM/dd'
    var text = getText()
    var color = getColor()

    var wrap = document.createElement('p')
    wrap.style.margin = 0
    wrap.style.backgroundColor = 'var(--color-bg)'
    wrap.style.border = '1px solid var(--color-border)'
    wrap.style.borderRadius = '3px'
    wrap.style.padding = '0 7px'
    wrap.style.height = '25px'
    wrap.style.lineHeight = '25px'
    wrap.style.display = isBlock ? 'block' : 'inline-block'

    wrap.appendChild(getIcon())

    var span = document.createElement('span')
    span.textContent = text
    
    span.style.color = color
    span.style.fontSize = '13px'
    wrap.appendChild(span)

    function getIcon () {
      var icon = document.createElement('i')
      icon.className = 'fa fa-calendar'
      return icon
    }
    function getText () {
      if (str) {
        try {
          var ts = (new Date(str)).valueOf()
          timestamp = ts
          return (new Date(timestamp)).format(format)
        } catch (e) {
          throw new Error('invalid str of date ', str)
        }
      } else if (timestamp) {
        try {
          return (new Date(timestamp)).format(format)
        } catch (e) {
          throw new Error('invalid timestamp ', timestamp)
        }
      } else {
        throw new Error('missing param')
      }
    }
    function getColor () {
      var colors = {
        passed: 'var(--color-subcolor)',
        now: 'var(--color-success)',
        future: 'var(--color-primary)'
      }
      if (timestamp) {
        if ((new Date(timestamp)).format(format) == (new Date()).format(format)) {
          return colors.now
        } else if (timestamp > Date.now()) {
          return colors.future
        } else {
          return colors.passed
        }
      }
    }

    var style = document.createElement('style')
    style.textContent = '.fa.fa-calendar:after {content:"\\f073";color:' + color + ';font-size:12px;font-family:FontAwesome;font-style:normal;margin-right:5px;}'
    shadowRoot.appendChild(style)
    shadowRoot.appendChild(wrap)
  }
  get str () {
    return this.getAttribute('str') || ''
  }
  get timestamp () {
    return this.getAttribute('timestamp') || null
  }
  get inBlock () {
    return (this.getAttribute('is-block') == true || this.getAttribute('is-block') == "true")
  }
  attributeChangedCallback (attr, oldValue, newValue) {
    this.render()
  }
}
customElements.define('date-tag', dateTimeTag)

Date.prototype.format = function(formatStr) {
  var o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'H+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3), // quarter
    'S': this.getMilliseconds()
  }
  if (/(y+)/.test(formatStr)) {
    formatStr = formatStr.replace(RegExp.$1, (String(this.getFullYear()).substr(4 - RegExp.$1.length)))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(formatStr)) {
      formatStr = formatStr.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(String(o[k]).length))
    }
  }
  return formatStr
}
