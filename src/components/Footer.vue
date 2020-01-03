<template>
  <footer class="site-footer">
    <h1 @click="toTop()">ヤーコブセン</h1>
    <Contact />
    <p class="themes"><span class="toggle-time" @click="toggleTime()">&#9790; / &#9737;</span></p>
    <p class="cookies">Vi har ingen cookies. Her er det kun frukt &amp; grønt!</p>
  </footer>
</template>

<script>
import Contact from '@/components/Contact.vue'
export default {
  name: 'Footer',
  components: {
    Contact
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
  padding: 6rem 3rem 1.666rem;
  position: relative;

  section {
    margin-bottom: 0;
  }

  @media (max-width: $sm) {
    padding:  3rem 1rem 1rem;
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
  top: .8rem;
  right: 1.8rem;

  cursor: default;

  @media (max-width: $sm) {
    display: none;
  }
}
.themes {
  position: fixed;
  right: 1.8rem;
  bottom: 1.666rem;
  font-size: $font-sm;
  margin: 0;
  @media (max-width: $sm) {
    position: static;
    margin: 0 auto 3rem;
    text-align: center;
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
  text-align: center;
}
</style>
