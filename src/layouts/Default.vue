<template>
  <div class="layout">
    <Header />

    <transition name="fade" appear>
      <main class="site-main">
        <slot />
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
import Header from "@/components/Header";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
.layout {
  margin: 0 auto;
}

.site-main {
  padding: var(--spacing-sitepadding);
}

.fade-enter-active {
  transition: opacity 0.6s;
}

.fade-enter {
  opacity: 0;
}

.site-footer {
  width: 100%;
  text-align: center;
  font-size: var(--font-size-s);
  padding: 6rem var(--spacing-sitepadding) 1.666rem;
  p {
    margin: 0 auto;
  }
}

.katakana {
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.36em;
  font-size: var(--font-size-xs);
  writing-mode: vertical-rl;
  text-orientation: upright;
  position: fixed;
  top: var(--spacing-siteborder);
  right: var(--spacing-siteborder);
  cursor: default;
  padding-top: 0.16rem;
}
</style>
