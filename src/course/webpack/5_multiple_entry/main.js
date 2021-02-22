const show = require('./show.js')
const jsCookie = require('jscookie')
show('index')
jsCookie.set({name: 'name', value: 'index'})