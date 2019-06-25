// vue-modal2
import Modal from './modal.vue'

let _Vue
let registeredModals = {}

export default {
  install (Vue, options={}) {
    _Vue = Vue
    Vue.component('v-modal2', Modal)

    Vue.prototype.$modal = {
      show (name, props={}) {
        let modalEl = document.querySelector(`.v-modal2--overlay[name=${name}]`)
        if (modalEl) {
          modalEl.__vue__.show()
        } else {
          if (registeredModals[name]) {
            let vm = createVmInstance(registeredModals[name], props)
            // console.log('vm', vm)
            return new Promise(function (resolve, reject) {
              if (vm.$children[0]) {
                vm.$children[0].$on('closed', function () {
                  resolve()
                })
              } else {
                reject(new Error(`Can't find child component <v-modal2> on reusable modal`))
              }
            })
          } else {
            console.error(`[v-modal2] Can't find the modal with name "${name}"`)
          }
        }
      },
      hide (name) {
        let modalEl = document.querySelector(`.v-modal2--overlay[name=${name}]`)
        if (modalEl) {
          modalEl.__vue__.hide()
        } else {
          console.error(`[v-modal2] Can't find the modal with name "${name}"`)
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
