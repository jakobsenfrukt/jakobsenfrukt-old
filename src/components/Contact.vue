<template>
  <div class="contact">
    <ul>
      <li>
        <a href="mailto:mail@jakobsenfrukt.no?subject=🍅" target="_blank">E-post</a>
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
@import '@/css/variables.scss';
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 0.6rem;
  left: 1.36rem;
  line-height: 1.6;
  font-family: $monospace;
  font-size: $font-sm;

  @media (min-width: $sm) {
    transform: rotate(-90deg);
    transform-origin: 0 0;

    li {
      display: inline-block;
      margin-right: 1.666rem;
    }
  }
  @media (max-width: $sm) {
    position: static;
    text-align: center;
    margin-bottom: 3rem;
  }
}
a {
  color: $color-white;
  &:hover, &:focus {
    font-weight: bold;
  }
  &:focus {
    color: $color-link;
    outline: none;
  }
}
.day a {
  color: $color-black;
  &:focus {
    color: $color-link-day;
  }
}
</style>
