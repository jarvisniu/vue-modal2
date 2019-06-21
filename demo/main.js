import Vue from 'vue'

import VueModal2 from '../src/vue-modal2.js'

import App from './app.vue'

Vue.use(VueModal2)
Vue.component('App', App)

new Vue({
  render: h => h('App')
}).$mount('#app')
