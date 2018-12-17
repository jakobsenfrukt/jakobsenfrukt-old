<template>
  <div id="app">
    <Header text="5 om dagen"/>
    <div class="site-nav">
      <router-link to="/">Hjem</router-link>
      <router-link to="/about">Om oss</router-link>
    </div>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import 'css/main.scss';

.site-nav {
  margin-bottom: 2rem;
  max-width: 120px;
  a {
    display: block;
    position: relative;
    color: #24e666;
    text-decoration: none;

    &:hover, &.router-link-exact-active {
      color: #eee612;
    }
    &.router-link-exact-active:before {
      content: "↝ ";
      position: absolute;
      left: -1.24rem;
    }
  }
}
</style>
