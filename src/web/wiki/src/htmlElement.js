class userTag extends HTMLElement {
  constructor () {
    super()
    this.render()
  }
  static get observedAttributes () {
    return ['id']
  }
  get userList () {
    if (!this._userList) {
      this._userList = require('../data/developer.json').users
    }
    return this._userList
  }
  render () {
    var shadowRoot = this.shadowRoot || this.attachShadow({mode: 'open'})
    var id = this.id
    var isValidId = this.userList.some(function (item) {
      return item.id == id
    })
    if (!isValidId) {
      throw new Error('Invalid id:' + id + ' in userTag.')
    }
    var userItem = this.userList.filter(function (item) {
      return item.id == id
    })[0]
    var lineHeight = 25
    var avatarImg = document.createElement('img')
    avatarImg.src = userItem.img
    avatarImg.style.gridArea = 'img'
    avatarImg.style.width = (lineHeight * 2) + 'px'
    avatarImg.style.border = '1px solid var(--color-border)'
    avatarImg.style.borderRadius = '50%'

    var name = document.createElement('p')
    name.className = 'name'
    name.textContent = userItem.name
    name.style.margin = 0
    name.style.lineHeight = lineHeight + 'px'
    name.style.height = lineHeight + 'px'
    name.style.paddingLeft = '8px'
    name.style.gridArea = 'name'
    name.style.color = 'var(--color-text-title)'
    name.style.fontSize = '14px'
    name.style.fontWeight = 'bolder'

    var id = document.createElement('p')
    id.className = 'id'
    id.textContent = userItem.id
    id.style.margin = 0
    id.style.lineHeight = lineHeight + 'px'
    id.style.height = lineHeight + 'px'
    id.style.paddingLeft = '8px'
    id.style.gridArea = 'id'
    id.style.color = 'var(--color-subcolor)'
    id.style.fontSize = '12px'

    shadowRoot.innerHTML = ''
    shadowRoot.appendChild(avatarImg)
    shadowRoot.appendChild(name)
    shadowRoot.appendChild(id)
  }
  get id () {
    return this.getAttribute('id') || ''
  }
  attributeChangedCallback (attr, oldValue, newValue) {
    this.render()
  }
}
customElements.define('user-tag', userTag)