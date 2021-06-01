<template>
  <div>
    <IntersectionObserver
      id="test"
      @on-enter-viewport="onEnterViewport"
    ></IntersectionObserver>
    <div
      class="heroimage"
      :class="{'inview': isInView}"
    >
      Animation<br>
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
      isInView: false
    }
  },
  methods: {
    onEnterViewport(value) {
      this.isInView = value;
    }
  }
}
</script>

<style lang="scss" scoped>
.heroimage {
  transition: all .5s ease;

  &.inview {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>