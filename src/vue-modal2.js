// vue-modal2

let registeredModals = {}

let domModalContainer = document.createElement('div')
domModalContainer.style.position = 'fixed'
domModalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
domModalContainer.style.display = 'none'
domModalContainer.style.textAlign = 'center'
domModalContainer.style.left = '0'
domModalContainer.style.right = '0'
domModalContainer.style.top = '0'
domModalContainer.style.bottom = '0'
domModalContainer.addEventListener('click', (ev) => {
  if (ev.target === domModalContainer || ev.target === domModal) {
    domModalContainer.style.display = 'none'
  }
})

let domModal = document.createElement('div')
domModal.style.display = 'inline-block'
domModal.style.position = 'absolute'
domModal.style.left = '50%'
domModal.style.top = '50%'
domModal.style.transform = 'translate(-50%, -50%)'
domModal.style.maxHeight = '100%'
domModal.style.overflowY = 'auto'
domModalContainer.appendChild(domModal)

document.body.appendChild(domModalContainer)

let _Vue

export default {
  install (Vue, opts) {
    _Vue = Vue
    opts = opts || {}
    opts.name = opts.name || '$modal'

    Vue.prototype[opts.name] = {
      show (name, props) {
        if (!registeredModals[name]) {
          window.console.error(`modal ${name} not exits`)
        } else {
          // pass props
          if (typeof props === 'object') {
            Object.keys(props).forEach(prop => {
              registeredModals[name].vm._props[prop] = props[prop]
            })
          }
          // show the only modal
          Object.keys(registeredModals).forEach(_name => {
            registeredModals[_name].dom.style.display = _name === name ? 'block' : 'none'
          })
          // show the container dom
          domModalContainer.style.display = 'block'
        }
      },
      hide () {
        domModalContainer.style.display = 'none'
      },
    }
  },
  register (modals) {
    if (!_Vue) window.console.error(
      'You must register this plugin by `Vue.use` before register modals.'
    )
    Object.keys(modals).forEach(key => {
      if (registeredModals[key]) return

      let ModalCtor = _Vue.extend(modals[key])
      let vm = new ModalCtor()
      let dom = document.createElement('div')
      domModal.appendChild(dom)
      vm.$mount(dom)
      registeredModals[key] = {
        vm,
        dom: vm.$el,
      }
    })
  },
}
