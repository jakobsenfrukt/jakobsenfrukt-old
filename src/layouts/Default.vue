<template>
  <div class="layout">
    <!--<Stars />-->
    <header class="site-header">
      <nav class="nav">
        <g-link class="nav__link" to="/"><Leaf /></g-link>
        <g-link class="nav__link" to="/">Hjem</g-link>
        <g-link class="nav__link" to="/prosjekter/">Prosjekter</g-link>
        <g-link class="nav__link" to="/info/">Info</g-link>
      </nav>
      <nav class="contact">
        <a class="nav__link" href="mailto:mail@jakobsenfrukt.no?subject=🍅" target="_blank">E-post</a>
        <a class="nav__link" href="https://instagram.com/jakobsenfrukt" target="_blank">Instagram</a>
        <a class="nav__link" href="https://facebook.com/jakobsenfrukt" target="_blank">Facebook</a>
      </nav>
      <toggle-theme />
      <span class="katakana">ヤーコブセン</span>
    </header>

    <transition name="fade" appear>
      <main class="site-main">
        <slot/>
      </main>
    </transition>

    <footer class="site-footer">
      <p>Her er det ingen cookies, kun frukt & grønt :)</p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Stars from '@/components/Stars'
import Leaf from '@/components/Leaf'
import ToggleTheme from '@/components/ToggleTheme'

export default {
  components: {
    Stars,
    Leaf,
    ToggleTheme
  }
}
</script>

<style lang="scss">
.layout {
  margin: 0 auto;
}

.site-header {
  position: fixed;
  top: 1rem;
  left: 1rem;

  .nav__link {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    margin-right: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
  }
}

.site-main {
  padding: 8rem 0;
}

.fade-enter-active {
  transition: opacity .6s;
}

.fade-enter {
  opacity: 0;
}

.site-footer {
  width: 100%;
  text-align: center;
  p {
    margin: 1rem auto;
  }
}

.contact {
  position: fixed;
  left: 1rem;
  bottom: 0;
  transform: rotate(-90deg);
  transform-origin: 0 0;
}

.katakana {
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.36em;
  writing-mode: vertical-rl;
  text-orientation: upright;
  position: fixed;
  top: 1rem;
  right: 1rem;
  cursor: default;
}
</style>
