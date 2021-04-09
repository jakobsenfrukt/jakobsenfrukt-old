<template>
  <div>
    <IntersectionObserver
      id="test"
      @on-enter-viewport="onEnterViewport"
    ></IntersectionObserver>
    <div
      class="thing"
      :class="{'yes': isInView,
        'no': !isInView,
      }"
    >
      Animation
    </div>
  </div>
</template>

<script>
import IntersectionObserver from '~/components/tools/IntersectionObserver'

export default {
  components: {
    IntersectionObserver
  },
  data() {
    return {
      isInView: false,
    }
  },
  methods: {
    onEnterViewport(value) {
      this.isInView = value;
    },
  }
}
</script>

<style lang="scss" scoped>
.thing {
  transition: all .5s ease;
}
.yes {
  transform: translateX(100px);
  opacity: 1;
}
.no {
  transform: translateX(0);
  opacity: 0;
}
</style>