import Vue from 'vue'

import VModal from '../src/index.js'

import ModalAlert from './modal-alert.vue'
import App from './app.vue'

Vue.use(VModal, {
  register: {
    'alert': ModalAlert,
  },
})
Vue.component('App', App)

new Vue({
  render: h => h('App')
}).$mount('#app')
