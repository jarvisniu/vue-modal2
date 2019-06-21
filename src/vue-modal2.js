// vue-modal2
import Modal from './modal.vue'

export default {
  install (Vue) {

    Vue.component('VModal', Modal)

    Vue.prototype.$modal = {
      show (name) {
        let modalEl = document.querySelector(`.v-modal[name=${name}]`)
        if (modalEl) {
          modalEl.style.display = ''
          modalEl.style.opacity = 1
        } else {
          console.error(`[v-modal] Can't find a modal with name "${name}"`)
        }
      },
      hide (name) {
        let modalEl = document.querySelector(`.v-modal[name=${name}]`)
        if (modalEl) {
          modalEl.style.opacity = 0
          setTimeout(() => {
            modalEl.style.display = 'none'
          }, 200)
        } else {
          console.error(`[v-modal] Can't find a modal with name "${name}"`)
        }
      },
    }
  },
}
