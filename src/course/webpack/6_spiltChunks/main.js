import show from './show.js'
import jsCookie from 'jscookie'
import './style.less'
show('index')
jsCookie.set({name: 'name', value: 'index'})