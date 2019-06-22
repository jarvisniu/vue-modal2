<template>
  <div>
    <!-- Data Binding -------------------------------------------------------->
    <div>
      <button @click="$modal.show('data-binding')">Data Binding</button>
      <span v-if="name">Hello, {{name}}!</span>
    </div>
    <v-modal name="data-binding" :pivotY="0.33">
      <div style="padding: 10px;">
        <h4 style="margin: 10px 0;">Data binding: </h4>
        <br>
        <div>
          <span>What's your name: </span>
          <input
            v-model="name" style="width: 100px;"
            @keydown.enter="$modal.hide('data-binding')"
          >
        </div>
        <br>
        <div>
          <button @click="$modal.hide('data-binding')">Confirm</button>
        </div>
      </div>
    </v-modal>

    <!-- Dynamic Width ------------------------------------------------------->
    <button @click="$modal.show('dynamic-width')">Dynamic Width & pivot</button>
    <span>Modal status: {{openStatus}}
    <br>
    <v-modal
      name="dynamic-width" :width="modalWidth" :pivotY="pivotY"
      @before-open="openStatus = 'opening'"
      @opened="openStatus = 'opened'"
      @before-close="openStatus = 'closing'"
      @closed="openStatus = 'closed'"
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
    </v-modal>

    <!-- Background & inner scroll & outer close button ---------------------->
    <button @click="$modal.show('outer-close-button')">
      Background & inner scroll & outer close button
    </button><br>
    <v-modal name="outer-close-button" :height="250" :click-to-close="false" background="black">
      <div
        style="position: absolute; right: -28px; top: -28px; color: white; cursor: pointer; padding: 0 6px; font-size: 20px;"
        @click="$modal.hide('outer-close-button')"
      >×</div>
      <div style="height: 100%; overflow: auto; box-sizing: border-box; padding: 10px;">
Once upon a time there was a Princess.  Many a suitor came to the palace to win her hand in marriage, but it seemed to the Princess that each one of them looked at her without really seeing her at all.

“They act like there’s nothing more to a princess than her fine crown and royal dresses,” she said to herself with a frown.

One afternoon after one of these visits, the Princess thought, “Sometimes I wish I were little again.” She found her favorite ball from childhood, the one that sparkled when she threw it up high to the sun.  She took the ball to the palace yard and threw it higher and higher. One time she threw it extra high and when she ran to catch the ball, she tripped on a tree stump. The ball fell and plopped right down into the royal well!  She raced over to fetch her ball before it dropped too far, but by the time she got there she could no longer see it in the water.
      </div>
    </v-modal>

    <!-- Reusable (global registered) modals -->
    <button @click="showMultiAlert">
      Reusable (global registered)
    </button><br>
    <!-- End of demos-->
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
    }
  },
  methods: {
    showMultiAlert() {
      this.$modal.show('alert', {
        message: 'Are you OK?',
        confirmButtonText: 'Yes',
      })
      setTimeout(() => {
        this.$modal.show('alert', {
          message: 'Are you sure you are OK?',
          confirmButtonText: 'Yes, I am Sure!',
        })
      }, 1000)
    },
  },
}
</script>

<style scoped>
button {
  padding: 5px 20px;
  margin-bottom: 10px;
}
</style>
