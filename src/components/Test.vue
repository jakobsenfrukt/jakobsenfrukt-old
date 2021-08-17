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
    <div
      class="heroimage2"
      :class="{'inview': isInView}"
    >
      Animation<br>
    </div>
    <p class="one">Jakobsen Frukt & Grønt er et hyggelig, lite designstudio i Oslo som spesialiserer seg på digital design og lager glade ting på internett.</p>
    <p class="two">Jakobsen Frukt & Grønt er et hyggelig, lite designstudio i Oslo som spesialiserer seg på digital design og lager glade ting på internett.</p>
    <p class="three">Jakobsen Frukt & Grønt er et hyggelig, lite designstudio i Oslo som spesialiserer seg på digital design og lager glade ting på internett.</p>
    <p class="four">Jakobsen Frukt & Grønt er et hyggelig, lite designstudio i Oslo som spesialiserer seg på digital design og lager glade ting på internett.</p>
    <p class="five">Jakobsen Frukt & Grønt er et hyggelig, lite designstudio i Oslo som spesialiserer seg på digital design og lager glade ting på internett.</p>
    <p class="six">Jakobsen Frukt & Grønt er et hyggelig, lite designstudio i Oslo som spesialiserer seg på digital design og lager glade ting på internett.</p>
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
  background: var(--color-yellow);
  color: var(--color-red);
  padding: 2rem;
  font-family: var(--font-serif);
  font-size: 2rem;
  transition: all .5s ease;

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
  transition: all .5s ease;

  &.inview {
    transform: translateX(0);
    opacity: 1;
  }
}
p {
  font-size: 14px;
  width: 300px;
  display: inline-block;
  margin: 2rem;

  &.one {
    color: var(--color-green);
  }
  &.two {
    color: var(--color-red);
  }
  &.three {
    color: var(--color-yellow);
  }
  &.four {
    color: var(--color-purple);
  }
  &.five {
    color: var(--color-orange);
  }
  &.six {
    color: var(--color-git);
  }
}
</style>