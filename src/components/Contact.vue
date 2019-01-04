<template>
  <div class="contact">
    <ul>
      <li>&nbsp;</li>
      <li>
        <a href="mailto:hei@elisejakob.no?subject=🍅" target="_blank">E-post</a>
      </li>
      <li>
        <a href="https://instagram.com/jakobsenfrukt" target="_blank">Instagram</a>
      </li>
      <li>
        <a href="https://facebook.com/jakobsenfrukt" target="_blank">Facebook</a>
      </li>
    </ul>
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
.contact {
  width: 100%;

  a {
    color: #fed246;
  }
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
h2 {
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.18em;
}
</style>
