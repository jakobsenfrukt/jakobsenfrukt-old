<template>
  <div id="app">
    <Header text="5 om dagen"/>
    <div class="site-nav">
      <router-link to="/">Hjem</router-link>
      <router-link to="/about">Om JF&amp;G</router-link>
    </div>
    <router-view/>
    <Footer />
    <Stars v-if="night" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Stars from '@/components/play/Stars.vue'

export default {
  components: {
    Header,
    Footer,
    Stars
  },
  data: function() {
    return {
      night: true
    }
  },
  beforeMount: function() {
    var now = new Date();
    var time = now.getHours();
    if (time > 6 && time < 18) {
      this.night = false;
    }
  }
}
</script>

<style lang="scss">
@import 'css/main.scss';

.site-nav {
  position: fixed;
  top: 8rem;
  left: 2rem;
  max-width: 120px;
  a {
    display: block;
    position: relative;
    color: $color-white;
    text-decoration: none;

    &:hover, &.router-link-exact-active {
      color: $color-green;
    }
    &.router-link-exact-active:before {
      content: "↝ ";
      position: absolute;
      left: -1.24rem;
    }
  }
}
</style>
