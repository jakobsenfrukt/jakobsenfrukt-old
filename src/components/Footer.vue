<template>
  <footer class="site-footer">
    <h1 @click="toTop()">ヤーコブセン</h1>
    <p class="themes"><span class="toggle-time" @click="toggleTime()">&#9790; / &#9737;</span></p>
    <p class="cookies">Vi har ingen cookies. Her er det kun frukt &amp; grønt!</p>
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
  padding: 12rem 0 2rem 13rem;
  position: relative;

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
.themes {
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  font-size: 0.6rem;
  margin: 0;
}
.toggle-time {
  &:hover {
    cursor: pointer;
  }
}
.cookies {
  font-family: $monospace;
  font-size: 0.6rem;
  font-style: italic;
  color: $color-subtext;
  margin: 0;
}
.day .cookies {
  color: $color-subtext;
}
</style>
