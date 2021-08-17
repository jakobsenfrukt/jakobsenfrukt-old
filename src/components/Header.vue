<template>
  <header class="site-header">
    <nav class="nav">
      <g-link class="nav-link logo" to="/"><Leaf /></g-link>
      <g-link class="nav-link" to="/">Hjem</g-link>
      <g-link class="nav-link" to="/prosjekter/">Prosjekter</g-link>
      <g-link class="nav-link" to="/info/">Info</g-link>
    </nav>
    <nav class="contact">
      <a class="nav-link" href="mailto:mail@jakobsenfrukt.no?subject=🍅" target="_blank">E-post</a>
      <a class="nav-link" href="https://instagram.com/jakobsenfrukt" target="_blank">Instagram</a>
      <a class="nav-link" href="https://facebook.com/jakobsenfrukt" target="_blank">Facebook</a>
    </nav>
    <ToggleTheme class="toggletheme" />
    <span class="katakana">ヤーコブセン</span>
  </header>
</template>

<script>
import Leaf from '@/components/Leaf'
import ToggleTheme from '@/components/ToggleTheme'

export default {
  components: {
    Leaf,
    ToggleTheme
  }
}
</script>

<style lang="scss" scoped>
.site-header {
  position: fixed;
  top: var(--spacing-siteborder);
  left: var(--spacing-siteborder);
  font-size: var(--font-size-small);
  z-index: 666;
}

.nav {
  display: flex;
  align-items: flex-start;
  &-link {
    display: inline-block;
    color: var(--color-text);
    background: var(--color-background);
    box-shadow: 0 0 0 .2rem var(--color-background);
    text-decoration: none;
    margin-right: 1.4rem;
    padding: 0 .2rem;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    transition: color .2s ease-in-out, background-color .6s ease-in-out, box-shadow .6s ease-in-out;

    &.logo {
      width: 1.42rem;
      margin-top: -.3rem;
    }
  }
}

.contact {
  position: fixed;
  left: var(--spacing-siteborder);
  bottom: .8rem;
  transform: rotate(-90deg);
  transform-origin: 0 0;
}
</style>