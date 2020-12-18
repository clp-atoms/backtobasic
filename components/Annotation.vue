<template>
  <div
    v-observe-visibility="{
      callback: toggleStatus,
      intersection: { threshold: 0 },
    }"
    class="annotation"
    :style="{ top: `${annotation.position || annotationIndex * 150}vh` }"
    :class="classes"
  >
    {{ annotation.text }}
  </div>
</template>

<script>
export default {
  props: {
    annotation: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      active: false,
      classes: 'inviewport',
    }
  },

  methods: {
    toggleStatus(isVisible, entry) {
      this.active = isVisible
      this.classes = this.active ? 'active' : 'disabled'
    },
  },
}
</script>

<style lang="scss" scoped>
.annotation {
  &:not(.inviewport) {
    transform: translateX(-100%);
    transition: transform 0.5s ease;

    &.active {
      transform: translateX(0%);
    }
  }
}
</style>
