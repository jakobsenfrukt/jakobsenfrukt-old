<template>
  <div class="layout">
    <!--<Stars />-->
    <Header />

    <transition name="fade" appear>
      <main class="site-main">
        <slot/>
      </main>
    </transition>

    <footer class="site-footer">
      <p>Her er det ingen cookies, kun frukt & grønt!</p>
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
import Header from '@/components/Header'

export default {
  components: {
    Stars,
    Header
  }
}
</script>

<style lang="scss">
.layout {
  margin: 0 auto;
}

.site-main {
  padding: var(--spacing-sitepadding);
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
  font-size: var(--font-size-small);
  padding: 6rem var(--spacing-sitepadding) 1.666rem;
  p {
    margin: 0 auto;
  }
}

.katakana {
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: .36em;
  font-size: var(--font-size-xsmall);
  writing-mode: vertical-rl;
  text-orientation: upright;
  position: fixed;
  top: var(--spacing-siteborder);
  right: var(--spacing-siteborder);
  cursor: default;
  padding-top: .16rem;
}
</style>
