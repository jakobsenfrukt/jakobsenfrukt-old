<template>
  <footer class="site-footer">
    <h1><a href="/">ヤーコブセン</a></h1>
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
  padding: 0.6rem 0;
}
h1 {
  text-align: center;
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.18em;

  position: fixed;
  bottom: 2rem;
  left: 2rem;

  writing-mode: vertical-rl;
  text-orientation: upright;
}
a {
  text-decoration: none;
}
</style>
