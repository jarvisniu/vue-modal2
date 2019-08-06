# vue-modal2

> Simple Vue Modal

## Demo

[Demo](https://unpkg.com/vue-modal2/demo/dist/index.html)

## Usage

Install:

```sh
npm install vue-modal2
```

Import:

```js
// main.js
import Vue from 'vue'
import VModal2 from 'vue-modal2'
import 'vue-modal2/dist/vue-modal2.css'

Vue.use(VModal2)
```

Use:

```html
<!-- app.vue -->
<template>
  <div>

    <button @click="$modal2.show('greet')">
      Show Modal
    </button>

    <v-modal2 name="greet">
      Welcome!
    </v-modal2>

  </div>
</template>
```

## Advanced Usage (Reusable Modal)

1. Write an component that wrap your reusable modal:

```html
<!-- modal-alert.vue -->
<template>
  <v-modal2 ref="modal">
    <div style="padding: 10px">
      <h2 style="margin: 5px 0 10px;">{{ title }}</h2>
      <div>{{ message }}</div>
      <button
        style="display: block; width: 100%; padding: 5px; margin-top: 10px;"
        @click="$refs.modal.hide()"
      >OK</button>
    </div>
  </v-modal2>
</template>

<script>
export default {
  props: {
    message: { type: String, required: true },
    title: { type: String, default: 'Warning' },
  },
}
</script>
```

2. Import and register it:

```js
// main.js
import ModalAlert from './modal-alert.vue'

Vue.use(VModal, {
  register: {
    'alert': ModalAlert,
  },
})
```

3. Show the modal in any vue component:

```js
// app.vue
this.$modal2.alert({
  message: 'Are you OK?',
})
```

## API

### Vue.prototype.$modal2

- `show(name)`: Show the modal with name `name`;
- `hide(name)`: Hide the modal with name `name`;
- `<modalName>(props)`: Show the globally registered reusable modal;

### &lt;v-modal2&gt; props

| Name           | Type    | Required | Default                            |
| --             | --      | --       | --                                 |
| width          | Number  | false    | 600                                |
| height         | Number  | false    | 300                                |
| click-to-close | Boolean | false    | true                               |
| pivotX         | Number  | false    | 0.5                                |
| pivotY         | Number  | false    | 0.5                                |
| theme          | String  | false    | 'default'                          |
| overlay-class  | String  | false    | ''                                 |
| overlay-style  | Object  | false    | {}                                 |
| content-class  | String  | false    | ''                                 |
| content-style  | Object  | false    | {}                                 |
| duration       | Number  | false    | 0.3                                |
| slideOffset    | Number  | false    | -50                                |

### &lt;v-modal2&gt; events

- before-open
- opened
- before-close
- closed

## License

MIT
