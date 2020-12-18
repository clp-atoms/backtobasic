<template>
  <div class="container">
    <Intro ref="intro" />

    <div ref="containerVideo">
      <Annotation
        v-for="(annotation, annotationIndex) in annotations"
        :key="`annotation-${annotationIndex}`"
        :annotation="annotation"
      />

      <Video
        ref="video"
        class="w-full h-screen sticky top-0 left-0"
        classes="absolute top-0 left-0 w-full h-full object-contain"
        src="/scatolina-low.mov"
        @loadedmetadata="onLoadedmetadata"
      />
    </div>
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue'
import Video from '@/components/Video.vue'
export default {
  components: {
    Intro,
    Video,
  },

  data() {
    return {
      frameNumber: 0,
      playbackConst: 500,
      currentTime: '',
      video: null,
      annotations: [
        {
          position: '100',
          text:
            'Ritagliare il pezzo di cartone in base allo stampo fornito, seguendo le misure indicate.',
        },
        {
          position: '250',
          text:
            'Le linee rette indicano il ritaglio, mentre quelle tratteggiate indicano una leggera incisione sulla parte esterna, al fine di rendere più agevole la piega.',
        },
        {
          position: '1685',
          text:
            'Piegare il cartone tagliato in precedenza componendo la scatoletta.',
        },
        {
          position: '1952',
          text: 'Ritagliare la spugnetta.',
        },
        {
          position: '2492',
          text: 'Accertarsi che tutte le estremità combacino perfettamente.',
        },
        {
          position: '2664',
          text: 'Applicare la spungetta.',
        },
        {
          position: '3394',
          text:
            'Applicate il fermacampione o il magnete, a sencoda di ciò che preferite utilizzare.',
        },
      ],
    }
  },
  mounted() {
    this.scrollPlay()
    window.requestAnimationFrame(this.scrollPlay)
    window.addEventListener('scroll', this.scrollHandler)
  },

  methods: {
    onLoadedmetadata(event, video) {
      this.video = video
      const height = Math.floor(this.video.duration) * this.playbackConst + 'px'
      this.$refs.containerVideo.style.height = height
      console.log('loadedmetadata', this.video, this.video.duration)
    },
    scrollPlay() {
      // Use requestAnimationFrame for smooth playback
      if (this.video) {
        this.frameNumber = window.pageYOffset / this.playbackConst
        this.currentTime = this.frameNumber
        this.video.currentTime = this.currentTime
      }

      window.requestAnimationFrame(this.scrollPlay)
    },
    scrollHandler() {
      window.requestAnimationFrame(() => {
        if (window.pageYOffset === 0) this.$refs.intro.forceShow()
      })
    },
  },
}
</script>

<style>
.annotation {
  @apply absolute z-10 bg-white bg-opacity-50 p-5 shadow-md rounded text-base;
  max-width: 50vh;
  font-weight: 600;
  &.active {
    @aply bg black text-white;
  }
}
</style>
