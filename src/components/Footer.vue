<template>
  <footer class="site-footer">
    <h1 @click="toTop()">ヤーコブセン</h1>
    <Smu />
    <p class="cookies">Vi har ingen cookies. Her er det kun frukt &amp; grønt!</p>
    <p class="themes"><span class="toggle-time" @click="toggleTime()">&#9790; / &#9737;</span></p>
  </footer>
</template>

<script>
import Smu from '@/components/play/Smu.vue'

export default {
  name: 'Footer',
  components: {
    Smu
  },
  props: {
    text: String
  },
  methods: {
    toTop() {
      window.scrollTo(0,0);
    },
    toggleTime() {
      document.body.classList.toggle('day');
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/css/variables.scss';
.site-footer {
  padding: 12rem 3rem 2rem 13rem;
  position: relative;

  section {
    margin-bottom: 0;
  }

  @media (max-width: $sm) {
    padding:  3rem 1rem 2rem;
  }

  p {
    max-width: none;
  }
}
h1 {
  margin: 1rem 0;
  font-size: $font-xs;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.36em;

  writing-mode: vertical-rl;
  text-orientation: upright;
  position: fixed;
  top: 1rem;
  right: 2rem;

  @media (max-width: $sm) {
    position: static;
    cursor: pointer;
  }
}
.themes {
  position: fixed;
  left: 2rem;
  bottom: 2rem;
  font-size: $font-sm;
  margin: 0;
  @media (max-width: $sm) {
    position: static;
    margin-top: 1rem;
  }
}
.toggle-time {
  &:hover {
    cursor: pointer;
  }
}
.cookies {
  font-family: $monospace;
  font-size: $font-sm;
  margin: 0;
}
</style>
