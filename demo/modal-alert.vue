<template>
  <v-modal ref="modal">
    <div style="padding: 10px">
      <h2 style="margin: 5px 0 10px;">{{ title }}</h2>
      <div>{{ message }}</div>
      <button
        style="display: block;width: 100%; padding: 5px; margin-top: 10px;"
        @click="$refs.modal.hide()"
      >{{ confirmButtonText }}</button>
    </div>
  </v-modal>
</template>

<script>
export default {
  props: {
    message: { type: String, required: true },
    title: { type: String, default: 'Warning' },
    confirmButtonText: { type: String, default: 'OK' },
  },
}
</script>
