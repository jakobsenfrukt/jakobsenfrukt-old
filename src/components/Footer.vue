<template>
  <footer class="site-footer">
    <h1 @click="toTop()">ヤーコブセン</h1>
    <section>
      <p class="themes"><span class="toggle-time" @click="toggleTime()">&#9790; / &#9737;</span></p>
      <p class="cookies">Vi har ingen cookies. Her er det kun frukt &amp; grønt!</p>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
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
@import '../css/variables.scss';
.site-footer {
  padding: 1rem 0;
  margin: 0 0 0 12rem;

  section {
    margin-bottom: 0;
  }
}
h1 {
  margin: 1rem 0;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.36em;

  writing-mode: vertical-rl;
  text-orientation: upright;
  position: fixed;
  top: 1rem;
  right: 2rem;
}
.toggle-time {
  &:hover {
    cursor: pointer;
  }
}
.cookies {
  font-family: 'roboto mono', monospace;
  font-size: 0.6rem;
  font-style: italic;
  color: $color-link-night;
  margin: 1rem 0 0;
  max-width: none;
}
.day .cookies {
  color: $color-link-day;
}
</style>
