import Vue from 'vue'

import VModal from '../src/index.js'

import App from './app.vue'

Vue.use(VModal)

Vue.component('App', App)

new Vue({
  render: h => h('App')
}).$mount('#app')
