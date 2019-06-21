// vue-modal2
import Modal from './modal.vue'

export default {
  install (Vue) {

    Vue.component('VModal', Modal)

    Vue.prototype.$modal = {
      show (name) {
        let modalEl = document.querySelector(`.v-modal[name=${name}]`)
        if (modalEl) {
          modalEl.__vue__.show()
        } else {
          console.error(`[v-modal] Can't find the modal with name "${name}"`)
        }
      },
      hide (name) {
        let modalEl = document.querySelector(`.v-modal[name=${name}]`)
        if (modalEl) {
          modalEl.__vue__.hide()
        } else {
          console.error(`[v-modal] Can't find the modal with name "${name}"`)
        }
      },
    }
  },
}
