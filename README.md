# vue-modal2

## Usage

1.Install this package:
```bash
npm install vue-modal2
```

2.Use this vue plugin:
```javascript
import modal from 'vue-modal2'
Vue.use(modal)
```

3.Write your modal component:
```vue
// MyModal.vue
<template>
  <div class="modal">
    <h1>Modal</h1>
    {{text}}
  </div>
</template>
<script>
  export default {
    props: {
      text: String,
    },
  }
</script>
<style lang="css" scoped>
  .modal {
    background-color: white;
  }
</style>
```

4.Register your modal component:
```javascript
import modal from 'vue-modal2'
import MyModal from './MyModal.vue'
modal.register({
  MyModal,
})
```

5.Show / Hide your modal:
```javascript
methods: {
  showModal () {
    this.$modal.show('MyModal', {
      text: 'I am modal content',
    })
  },
  hideModal () {
    this.$modal.hide('MyModal')
  },
}
```

## License

MIT
