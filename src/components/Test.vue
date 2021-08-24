<template>
  <div>
    <IntersectionObserverOnce
      id="test"
      @on-enter-viewport="onEnterViewport"
    ></IntersectionObserverOnce>
    <div
      class="heroimage"
      :class="{'inview': isInView}"
    >
      Animation<br>
    </div>
    <div
      class="heroimage2"
      :class="{'inview': isInView}"
    >
      Animation<br>
    </div>
  </div>
</template>

<script>
import IntersectionObserverOnce from '~/components/tools/IntersectionObserverOnce'

export default {
  components: {
    IntersectionObserverOnce
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
  background: var(--color-yellow);
  color: var(--color-red);
  padding: 2rem;
  font-family: var(--font-serif);
  font-size: 2rem;
  transform: translateX(-100%);
  opacity: 0;
  transition: all 1s ease;

  &.inview {
    transform: translateX(0);
    opacity: 1;
  }
}
.heroimage2 {
  background: var(--color-purple);
  color: var(--color-green);
  padding: 2rem;
  font-family: var(--font-serif);
  font-size: 2rem;
  transform: translateX(-100%);
  opacity: 0;
  transition: all 1s ease;

  &.inview {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>