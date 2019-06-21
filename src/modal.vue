<template>
  <div
    class="v-modal"
    style="display: none; opacity: 0;"
    :style="{
      background: background,
    }"
    @click.self="onClickBackground"
  >
    <div
      class="v-modal-container"
      :style="{
        width: `${ width }px`,
        height: `${ height }px`,
        left: `${ pivotX * 100 }%`,
        top: `${ pivotY * 100 }%`,
        transform: `translate(${ map(pivotX, 0, 1, 0, -100) }%, ${ map(pivotY, 0, 1, 0, -100) }%)`,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: { type: [Number, String], default: 300 },
    height: { type: [Number, String], default: 300 },
    pivotX: { type: Number, default: 0.5 },
    pivotY: { type: Number, default: 0.5 },
    clickToClose: { type: Boolean, default: true },
    background: { type: String, default: 'hsla(0, 0%, 25%, 0.5)' },
  },
  methods: {
    onClickBackground() {
      this.$modal.hide(this.$el.getAttribute('name'))
    },
    map (n, fromStart, fromEnd, toStart, toEnd) {
      return (n - fromStart) / (fromEnd - fromStart) * (toEnd - toStart) + toStart
    },
  },
}
</script>

<style lang="stylus" scoped>
.v-modal
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  transition opacity 0.2s

.v-modal-container
  position relative
  border solid 1px silver
  background-color white
  border-radius 5px
  box-shadow 0 0 50px hsl(0, 0%, 50%)
</style>
