<template>
  <div class="container-video">
    <video
      :class="classes"
      preload="auto"
      playsinline="true"
      :src="src"
      @loadedmetadata="onLoadedmetadata"
    ></video>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      required: true,
    },
  },

  methods: {
    onLoadedmetadata(event) {
      this.$emit('loadedmetadata', event, event.srcElement)
    },
  },
}
</script>

<style lang="scss" scoped>
.container-video {
  z-index: -1;
}
</style>
