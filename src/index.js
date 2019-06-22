// vue-modal2
import Modal from './modal.vue'

let _Vue
let registeredModals = {}

export default {
  install (Vue, options={}) {
    _Vue = Vue
    Vue.component('VModal', Modal)

    Vue.prototype.$modal = {
      show (name, props={}) {
        let modalEl = document.querySelector(`.v-modal[name=${name}]`)
        if (modalEl) {
          modalEl.__vue__.show()
        } else {
          if (registeredModals[name]) {
            let vm = createVmInstance(registeredModals[name], props)
          } else {
            console.error(`[v-modal] Can't find the modal with name "${name}"`)
          }
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
    // register
    if (typeof options.register === 'object') {
      registeredModals = options.register
    }
  },
}

function createVmInstance(vmDef, propsData={}) {
  // create vm instance
  let Modal = _Vue.extend(vmDef)
  let vm = new Modal({
    propsData,
  })
  let dom = document.createElement('div')
  document.body.appendChild(dom)
  vm.$mount(dom)
  vm.$children[0].show()
  return vm
}
