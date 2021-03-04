import show from './show.js'
import jsCookie from 'jscookie'
show('login')
jsCookie.set({name: 'name', value: 'login'})