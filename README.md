# vue-modal2

## Install

```
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

## License

MIT
