<template>
  <transition name="fade">
    <div
      v-show="show"
      class="intro fixed inset-0 w-screen h-screen flex items-center justify-center bg-black text-white z-50"
      @click="show = false"
    >
      <div class="content w-full flex items-center justify-center">
        <div class="text-xxl w-1/4-asd">Obiettivo |</div>
        <div class="text-xl w-1/2 pl-5">
          Realizzare qualcosa di divertente ed educativo utilizzando i materiali
          e gli strumenti che normalmente si trovano in casa!
          <div class="text-sm">(Clicca per iniziare)</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
export default {
  data() {
    return {
      show: true,
    }
  },

  watch: {
    show(newValue, oldValue) {
      if (newValue) {
        disableBodyScroll(this.$el)
      } else {
        enableBodyScroll(this.$el)
      }
    },
  },

  mounted() {
    disableBodyScroll(this.$el)
  },

  beforeDestroy() {
    enableBodyScroll(this.$el)
  },

  methods: {
    forceShow() {
      this.show = true
    },
  },
}
</script>

<style lang="scss" scoped></style>
