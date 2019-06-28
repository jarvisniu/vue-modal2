// vue-modal2
import Modal from './modal.vue'

let _Vue
let _registeredModals = {}

export default {
  install (Vue, options={}) {
    _Vue = Vue
    Vue.component('v-modal2', Modal)

    let modal2 = {
      show (name) {
        let modalEl = document.querySelector(`.v-modal2--overlay[name=${name}]`)
        if (modalEl) {
          modalEl.__vue__.show()
        } else {
          console.error(`[v-modal2] Can't find the modal with name "${name}"`)
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
      _registeredModals = options.register
      Object.keys(options.register).forEach(name => {
        if (['show', 'hide'].includes(name)) {
          console.error(`[v-modal2] Can't register modal with name "${name}". It's conflicted with API.`)
          return
        }

        modal2[name] = function(props={}) {
          let vm = createVmInstance(_registeredModals[name], props)
          // console.log('vm', vm)
          return new Promise(function (resolve, reject) {
            let modalVm = vm.$children[0]
            if (modalVm) {
              modalVm.$on('closed', resolve)
            } else {
              reject(new Error(`Can't find child component <v-modal2> on reusable modal`))
            }
          })
        }
      })
    }
    Vue.prototype.$modal2 = modal2
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
