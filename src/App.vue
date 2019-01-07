<template>
  <div id="app">
    <Header />
    <nav class="main-nav">
      <ul class="site-nav">
        <li><router-link to="/">Forside</router-link></li>
        <li><router-link to="/about">Info</router-link></li>
      </ul>
      <Contact />
    </nav>
    <router-view/>
    <Footer />
    <Stars v-if="night" />
    <Soup />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Contact from '@/components/Contact.vue'
import Stars from '@/components/play/Stars.vue'
import Soup from '@/components/play/Soup.vue'

export default {
  components: {
    Header,
    Footer,
    Contact,
    Stars,
    Soup
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

.main-nav {
  position: fixed;
  top: 7rem;
  left: 2rem;
  max-width: 8rem;
  padding-right: 1rem;

  @media (max-width: 700px) {
    position: relative;
    padding-bottom: 2rem;
  }

  .site-nav {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: #24e666;
    text-decoration: none;

    &:hover {
      color: #fff6e8;
    }
    &.router-link-exact-active {
      color: #12684b;

      &:focus {
        border-color: #12684b;
      }

      &:before {
        content: "↝ ";
        position: absolute;
        left: -1.24rem;
      }
    }
  }
}
</style>
