module.exports = function (source) {
  let arr = source.split(/\s+/)
  let result = []
  arr.forEach(item => {
    console.log(item)
    const command = item.split(':')[0]
    const content = item.split(':')[1]
    const map = {
      c: function (content) {
        return `console.log('${content}')`
      },
      a: function (content) {
        return `alert('${content}')`
      },
      s: function (content) {
        return `document.getElementsByTagName('body')[0].appendChild(document.createTextNode('${content}'))`
      }
    }
    if (map[command]) {
      result.push(map[command](content))
    }
  })
  return result.join(';\n')
}