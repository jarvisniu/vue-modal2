<template>
  <div
    class="v-modal"
    style="display: none; opacity: 0;"
    :style="{
      background: background,
      transition: `opacity ${ duration }s`,
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
        opacity: `${ opacity }`,
        transition: `all ${ duration }s`,
        transform: `translate(
          ${ map(pivotX, 0, 1, 0, -100) }%,
          calc(${ map(pivotY, 0, 1, 0, -100) }% + ${ offsetY }px)
        )`,
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
    clickToClose: { type: Boolean, default: true },
    pivotX: { type: Number, default: 0.5 },
    pivotY: { type: Number, default: 0.5 },
    background: { type: String, default: 'hsla(0, 0%, 25%, 0.5)' },
    duration: { type: Number, default: 0.3 },
  },
  data () {
    return {
      offsetY: -50,
      opacity: 0,
    }
  },
  methods: {
    // api ---------------------------------------------------------------------
    show () {
      this.$el.style.display = ''
      setTimeout(() => {
        this.$el.style.opacity = 1
        this.offsetY = 0
        this.opacity = 1
      }, 0)
    },
    hide () {
      this.$el.style.opacity = 0
      this.offsetY = -50
      this.opacity = 0
      setTimeout(() => {
        this.$el.style.display = 'none'
      }, this.duration * 1000)
    },
    // events ------------------------------------------------------------------
    onClickBackground() {
      if (this.clickToClose) this.$modal.hide(this.$el.getAttribute('name'))
    },
    // utils -------------------------------------------------------------------
    map (n, fromStart, fromEnd, toStart, toEnd) {
      return (n - fromStart) / (fromEnd - fromStart) * (toEnd - toStart) + toStart
    },
  },
}
</script>

<style lang="stylus" scoped>
.v-modal
  box-sizing border-box
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  padding 10px

.v-modal-container
  box-sizing border-box
  position relative
  border solid 1px silver
  background-color white
  border-radius 5px
  box-shadow 0 0 50px hsl(0, 0%, 50%)
  max-width 100%
  max-height 100%
</style>
