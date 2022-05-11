<template>
  <header class="site-header">
    <nav class="nav">
      <g-link class="nav-link logo" to="/"><Leaf /></g-link>
      <g-link class="nav-link" to="/">Hjem</g-link>
      <g-link class="nav-link" to="/info/">Info</g-link>
    </nav>
    <nav class="contact">
      <a
        class="nav-link"
        href="mailto:mail@jakobsenfrukt.no?subject=🍅"
        target="_blank"
        >E-post</a
      >
      <a
        class="nav-link"
        href="https://instagram.com/jakobsenfrukt"
        target="_blank"
        >Instagram</a
      >
      <a
        class="nav-link"
        href="https://facebook.com/jakobsenfrukt"
        target="_blank"
        >Facebook</a
      >
    </nav>
    <ToggleTheme class="toggletheme" />
    <span class="katakana">ヤーコブセン</span>
  </header>
</template>

<script>
import Leaf from "@/components/Leaf";
import ToggleTheme from "@/components/ToggleTheme";

export default {
  components: {
    Leaf,
    ToggleTheme,
  },
};
</script>

<style lang="scss" scoped>
.site-header {
  position: fixed;
  top: var(--spacing-siteborder);
  left: var(--spacing-siteborder);
  font-size: var(--font-size-s);
  z-index: 666;
}

.nav {
  display: flex;
  align-items: flex-start;
  &-link {
    display: inline-block;
    color: var(--color-text);
    background: var(--color-background);
    //box-shadow: 0 0 0.1rem var(--color-shadow);
    border-radius: 2rem;
    text-decoration: none;
    margin-right: 0.66rem;
    padding: 0.2rem 0.66rem;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    transition: all 0.2s ease-out;

    &:hover {
      color: inherit;
      background: var(--color-hover);
    }
    /*&.active--exact {
      &:hover {
        background: var(--color-background);
        cursor: default;
      }
    }*/

    &.logo {
      width: 1.42rem;
      margin-top: -0.3rem;
      margin-right: 1.3rem;
      padding: 0;
      box-shadow: none;
      background: transparent;
    }
  }
}

.contact {
  position: fixed;
  left: var(--spacing-siteborder);
  bottom: 0;
  transform: rotate(-90deg);
  transform-origin: 0 0;
}
@media (min-width: 666px) {
  .contact {
    bottom: 0.6rem;
  }
}
</style>
