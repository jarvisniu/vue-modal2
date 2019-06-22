# vue-modal2

## Install

```sh
npm install vue-modal2
```

## Use

Import and use:

```js
import VModal from 'vue-modal2'

Vue.use(VModal)
```

Use your component:

```html
<template>
  <div>
    <button @click="$modal.show('greet')">Show Modal</h1>
    <v-modal name="greet">
      Welcome!
    </v-modal>
  </div>
</template>
```

## Props

| Name         | Type    | Required | Default               |
| --           | --      | --       | --                    |
| width        | Number  | false    | 600                   |
| height       | Number  | false    | 300                   |
| clickToClose | Boolean | false    | true                  |
| pivotX       | Number  | false    | 0.5                   |
| pivotY       | Number  | false    | 0.5                   |
| background   | String  | false    | hsla(0, 0%, 25%, 0.5) |
| duration     | Number  | false    | 0.3                   |

## Events

- before-open
- opened
- before-close
- closed

## TODO

- percentage size

## License

MIT
