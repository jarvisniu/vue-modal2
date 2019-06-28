# vue-modal2

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

## API

### $modal2

- `show(name)`: Show the modal with name `name`;
- `hide(name)`: Hide the modal with name `name`;

### Props

| Name           | Type    | Required | Default                            |
| --             | --      | --       | --                                 |
| width          | Number  | false    | 600                                |
| height         | Number  | false    | 300                                |
| click-to-close | Boolean | false    | true                               |
| pivotX         | Number  | false    | 0.5                                |
| pivotY         | Number  | false    | 0.5                                |
| theme          | String  | false    | 'default'                          |
| overlay-class  | String  | false    | ''                                 |
| overlay-style  | String  | false    | {background: 'rgba(0, 0, 0, 0.5)'} |
| content-class  | String  | false    | ''                                 |
| content-style  | String  | false    | {}                                 |
| duration       | Number  | false    | 0.3                                |

### Events

- before-open
- opened
- before-close
- closed

## License

MIT
