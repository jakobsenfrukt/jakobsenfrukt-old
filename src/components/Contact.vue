<template>
  <div class="contact">
    <ul>
      <li>
        <h2>Mail</h2>
        <a href="mailto:hei@elisejakob.no?subject=🍅" target="_blank">mail@jakobsenfrukt.no</a>
      </li>
      <li>
        <h2>Instagram</h2>
        <p>Vi bruker instagram til både portfolio, skissebok, skryting, syting og brukertesting.</p>
      </li>
      <li>
        <h2>Facebook</h2>
        <p>Vi bruker ikke Facebook særlig mye hehe.</p>
      </li>
  </div>
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
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
h1 {
  text-align: center;
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.18em;
}
</style>
