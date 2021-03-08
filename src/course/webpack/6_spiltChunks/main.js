import show from './show.js'
import jsCookie from 'jscookie'
console.log('index entry')
show('index')
jsCookie.set({name: 'name', value: 'index'})