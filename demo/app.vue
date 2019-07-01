<template>
  <div>
    <h2>vue-modal2 Demo</h2>
    <!-- Data Binding -------------------------------------------------------->
    <div>
      <button class="demo-button"
        @click="$modal2.show('data-binding')"
      >Data Binding</button>
      <span v-if="name">Hello, {{name}}!</span>
    </div>

    <v-modal2 name="data-binding" :pivot-y="0.33" @opened="$refs.input.focus()">
      <div style="padding: 10px;">
        <h4 style="margin: 10px 0;">Data binding: </h4>
        <br>
        <div>
          <span>What's your name: </span>
          <input
            ref="input"
            v-model="name" style="width: 100px;"
            @keydown.enter="$modal2.hide('data-binding')"
          >
        </div>
        <br>
        <div>
          <button @click="$modal2.hide('data-binding')">Confirm</button>
        </div>
      </div>
    </v-modal2>

    <!-- Dynamic Width ------------------------------------------------------->
    <div>
      <button class="demo-button"
        @click="$modal2.show('dynamic-width')"
      >Dynamic Width & Pivots</button>
    </div>

    <v-modal2
      name="dynamic-width" :width="modalWidth" :pivot-y="pivotY"
    >
      <div style="padding: 10px;">
        <h4 style="margin: 10px 0;">Dynamic Width: </h4>
        <div>
          <button @click="modalWidth = 600">600</button>
          <button @click="modalWidth = 300">300</button>
        </div>
        <h4 style="margin: 10px 0;">Pivot: </h4>
        <div>
          <button @click="pivotY = 0.1">Top</button>
          <button @click="pivotY = 0.5">Middle</button>
          <button @click="pivotY = 0.9">Bottom</button>
        </div>
      </div>
    </v-modal2>

    <!-- Events ------------------------------------------------------->
    <div>
      <button class="demo-button"
        @click="$modal2.show('events')"
      >Events ( {{openStatus}} )</button>
    </div>

    <v-modal2
      name="events" width="500"
      @before-open="openStatus = 'opening'"
      @opened="openStatus = 'opened'"
      @before-close="openStatus = 'closing'"
      @closed="openStatus = 'closed'"
    >
      <div style="padding: 10px;">
        <h4 style="margin: 10px 0;">Events</h4>
        <div>You can track the modal status by listening these 4 events:</div>
        <ul>
          <li><code>before-open</code></li>
          <li><code>opened</code></li>
          <li><code>before-close</code></li>
          <li><code>cloded</code></li>
        </ul>
      </div>
    </v-modal2>

    <!-- Percentage Width ------------------------------------------------------->
    <div>
      <button class="demo-button"
        @click="$modal2.show('percentage-width')"
      >Percentage Size</button>
    </div>

    <v-modal2 name="percentage-width" width="50%" height="60%">
      <div style="padding: 10px;">
        In addition to pixel unit, The modal content box size (width & height) can be set percentage as well.<br>
        <code>&lt;v-modal2 name="width" width="50%" height="60%"&gt;</code>
      </div>
    </v-modal2>

    <!-- Overlay/Content Style/Class ----------------------------------------->
    <div>
      <button class="demo-button"
        @click="$modal2.show('style-class')"
      >Overlay/Content Class/Style</button>
    </div>

    <v-modal2
      name="style-class"
      :pivot-y="0.33"
      :overlay-style="{background: 'lightblue'}"
      overlay-class="bd-blue"
      :content-style="{border: 'solid 2px red', padding: '10px'}"
      content-class="bg-pink"
    >
      <div>
        You can set the style or class attribute for the overlay or content elements by passing these props:
        <ul>
          <li><code>overlay-class</code></li>
          <li><code>overlay-style</code></li>
          <li><code>content-class</code></li>
          <li><code>content-style</code></li>
        </ul>
      </div>
    </v-modal2>

    <!-- Theme ----------------------------------------->
    <div>
      <button class="demo-button"
        @click="$modal2.show('theme')"
      >Theme</button>
    </div>

    <v-modal2 name="theme" :theme="theme">
      <div style="padding: 10px">
        <div>
          You can add customized theme by adding styles for class
          <code>.v-modal2--overlay[theme=theme-name]</code>
          and <code>.v-modal2--content[theme=theme-name]</code> and then
          set prop <code>theme</code> to <code>theme-name</code>.
        </div>
        <br>
        <div>Dynamicly Switch Theme: </div>
        <div>
          <button @click="theme='default'">Default</button>
          <button @click="theme='dark'">Dark(Customized)</button>
        </div>
      </div>
    </v-modal2>

    <!-- Bottom ----------------------------------------->
    <div>
      <button class="demo-button"
        @click="$modal2.show('bottom')"
      >Bottom (Action Sheet)</button>
    </div>

    <v-modal2
      name="bottom" theme="bottom"
      width="100%" :pivot-y="1" :slide-offset="50"
    >
      <div>
        Bottom theme for action sheet
      </div>
    </v-modal2>

    <!-- Inner scrolling & outer close button ---------------------->
    <div>
      <button class="demo-button"
        @click="$modal2.show('outer-close-button')"
      >Inner Scrolling & Outer Close Button</button>
    </div>

    <v-modal2 name="outer-close-button" :height="250" :click-to-close="false" :overlay-style="{background:'#333'}">
      <div
        style="position: absolute; right: -28px; top: -28px; color: white; cursor: pointer; padding: 0 6px; font-size: 20px;"
        @click="$modal2.hide('outer-close-button')"
      >×</div>
      <div style="height: 100%; overflow: auto; box-sizing: border-box; padding: 10px;">
Once upon a time there was a Princess.  Many a suitor came to the palace to win her hand in marriage, but it seemed to the Princess that each one of them looked at her without really seeing her at all.

“They act like there’s nothing more to a princess than her fine crown and royal dresses,” she said to herself with a frown.

One afternoon after one of these visits, the Princess thought, “Sometimes I wish I were little again.” She found her favorite ball from childhood, the one that sparkled when she threw it up high to the sun.  She took the ball to the palace yard and threw it higher and higher. One time she threw it extra high and when she ran to catch the ball, she tripped on a tree stump. The ball fell and plopped right down into the royal well!  She raced over to fetch her ball before it dropped too far, but by the time she got there she could no longer see it in the water.
      </div>
    </v-modal2>

    <!-- Reusable (global registered) modals -->
    <div>
      <button class="demo-button" @click="showAlert">
        Reusable (Global Registered)
      </button>
    </div>

    <!-- End of demos-->
    <a href="https://github.com/jarvisniu/vue-modal2/blob/master/demo/app.vue">
      Source code of this demo page
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      modalWidth: 300,
      pivotY: 0.5,
      openStatus: 'closed',
      theme: 'dark',
    }
  },
  methods: {
    showAlert() {
      this.$modal2.alert({
        message: 'Are you OK?',
        confirmButtonText: 'Yes',
      }).then(function() {
        console.log('Alert closed.')
      })
    },
  },
}
</script>

<style>
.bg-pink {
  background: pink;
}
.bd-blue {
  border: solid 2px blue;
}

/* customized theme */
.v-modal2--overlay[theme=dark] {
  background-color: rgba(64, 64, 64, 0.9);
}
.v-modal2--content[theme=dark] {
  background-color: black;
  color: white;
}
.v-modal2--overlay[theme=bottom] {
  background-color: rgba(0, 0, 0, 0.5);
}
.v-modal2--content[theme=bottom] {
  width: 100%;
  background-color: #f8f8f8;
  border-top: solid 1px #666;
  padding: 10px;
}
</style>

<style scoped>
button {
  padding: 5px 20px;
  margin-bottom: 10px;
}
.demo-button {
  width: 250px;
  text-align: center;
}
</style>
