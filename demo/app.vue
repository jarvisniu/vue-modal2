<template>
  <div>
    <button @click="showModal">Show Modal</button>
    <div>
      <span>双向绑定：</span>
      <input v-model="msg">
    </div>
    <v-modal name="delete" :width="modalWidth" :pivotY="0.4">
      <div style="padding: 10px;">
        <h3>我是弹窗</h3>
        <div>
          <span>动态宽度：</span>
          <button @click="modalWidth = 400">400宽</button>
          <button @click="modalWidth = 600">600宽</button>
        </div>
        <div>
          双向绑定：<input v-model="msg">
        </div>
      </div>
    </v-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modalWidth: 300,
      msg: '我是好人',
    }
  },
  methods: {
    showModal() {
      this.$modal.show('delete')
    },
  },
}
</script>
