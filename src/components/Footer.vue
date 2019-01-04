<template>
  <footer class="site-footer">
    <h1><a href="/">ヤーコブセン</a></h1>
    <p class="cookies">Vi har ingen cookies. Her er det kun frukt &amp; grønt!</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    text: String
  }
}
</script>

<style scoped lang="scss">
.site-footer {
  padding: 0.6rem 2rem 1rem;
  margin: 0 auto;
}
h1 {
  text-align: center;
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.18em;

  position: fixed;
  bottom: 1rem;
  left: 1rem;

  writing-mode: vertical-rl;
  text-orientation: upright;
}
a {
  text-decoration: none;
}
.cookies {
  font-family: 'roboto mono', monospace;
  font-size: 0.6rem;
  font-style: italic;
  margin: 1rem 0 0;
}
</style>
