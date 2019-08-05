<template>
  <div
    class="v-modal2--overlay"
    :class="overlayClass"
    style="display: none; opacity: 0;"
    :style="myOverlayStyle"
    :theme="theme"
    @click.self="onClickOverlay"
  >
    <div
      class="v-modal2--content"
      :class="contentClass"
      :style="[contentStyle, {
        width: myWidth,
        height: myHeight,
        left: `${ pivotX * 100 }%`,
        top: `${ pivotY * 100 }%`,
        opacity: `${ opacity }`,
        transition: `all ${ duration }s`,
        transform: `translate(
          ${ map(pivotX, 0, 1, 0, -100) }%,
          calc(${ map(pivotY, 0, 1, 0, -100) }% + ${ offsetY }px)
        )`,
      }]"
      :theme="theme"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: { type: [Number, String], default: 300 },
    height: { type: [Number, String], default: 'auto' },
    clickToClose: { type: Boolean, default: true },
    pivotX: { type: Number, default: 0.5 },
    pivotY: { type: Number, default: 0.5 },
    theme: { type: String, default: 'default' },
    overlayClass: { type: String, default: '' },
    overlayStyle: { type: [Object, String], default: () => {} },
    contentClass: { type: String, default: '' },
    contentStyle: { type: [Object, String], default: () => {} },
    duration: { type: Number, default: 0.3 },
    slideOffset: { type: Number, default: -50 },
  },
  data () {
    return {
      offsetY: this.slideOffset,
      opacity: 0,
    }
  },
  computed: {
    myWidth() {
      switch (typeof this.width) {
      case 'number':
        return `${this.width}px`
        break
      case 'string':
        return /^\d+$/.test(this.width) ? `${this.width}px` : this.width
        break
      }
    },
    myHeight() {
      switch (typeof this.height) {
      case 'number':
        return `${this.height}px`
        break
      case 'string':
        return /^\d+$/.test(this.height) ? `${this.height}px` : this.height
        break
      }
    },
    myOverlayStyle() {
      let overlayStyle = this.overlayStyle || {}
      if (typeof overlayStyle === 'string') overlayStyle = {}
      if (!overlayStyle.transition) {
        overlayStyle.transition = `opacity ${ this.duration }s`
      }
      return overlayStyle
    },
  },
  created () {
    if (typeof this.overlayStyle === 'string') {
      console.error('[vue-modal2] Error: The type for prop `overlayStyle` must be Object rather than String.')
    }
    if (typeof this.contentStyle === 'string') {
      console.error('[vue-modal2] Error: The type for prop `contentStyle` must be Object rather than String.')
    }
  },
  methods: {
    // api ---------------------------------------------------------------------
    show () {
      this.$el.style.display = ''
      this.$emit('before-open')
      setTimeout(() => {
        this.$el.style.opacity = 1
        this.offsetY = 0
        this.opacity = 1
        setTimeout(() => {
          this.$emit('opened')
        }, this.duration * 1000)
      }, 0)
    },
    hide () {
      this.$el.style.opacity = 0
      this.offsetY = this.slideOffset
      this.opacity = 0
      this.$emit('before-close')
      setTimeout(() => {
        this.$el.style.display = 'none'
        this.$emit('closed')
        if (this.$el.parentElement instanceof window.HTMLBodyElement) {
          this.$destroy()
          this.$el.parentNode.removeChild(this.$el)
        }
      }, this.duration * 1000)
    },
    // events ------------------------------------------------------------------
    onClickOverlay() {
      if (this.clickToClose) this.hide()
    },
    // utils -------------------------------------------------------------------
    map (n, fromStart, fromEnd, toStart, toEnd) {
      return (n - fromStart) / (fromEnd - fromStart) * (toEnd - toStart) + toStart
    },
  },
}
</script>

<style lang="stylus">
.v-modal2--overlay
  box-sizing border-box
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  z-index 2001

  &[theme=default]
    background-color rgba(0, 0, 0, 0.5)
    padding 10px // To ensure a minumum margin of the content box

.v-modal2--content
  box-sizing border-box
  position relative
  max-width 100%
  max-height 100%

  &[theme=default]
    border solid 1px silver
    background-color white
    border-radius 5px
    box-shadow 0 0 50px hsl(0, 0%, 50%)
</style>
