<template>
  <div id="app">
    <Header />
    <nav class="main-nav">
      <div>
        <ul class="site-nav">
          <li><router-link to="/">Forside</router-link></li>
          <li><router-link to="/projects">Prosjekter</router-link></li>
          <!--<li><a href="#">Skriverier</a></li>-->
          <li><router-link to="/about">Info</router-link></li>
        </ul>
      </div>
      <Contact />
    </nav>
    <transition name="fade"><router-view/></transition>
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
      document.body.classList.add('day');
    }
  }
}
</script>

<style lang="scss">
@import 'css/main.scss';

.main-nav {
  position: fixed;
  top: 8rem;
  left: 2rem;
  max-width: 10rem;
  z-index: 100;

  @media (max-width: $sm) {
    position: static;
    max-width: none;
    width: 100%;
    padding: 1rem 1rem 1rem 6rem;

    display: flex;
    justify-content: space-between;

    font-size: 1.24rem;

    div {
      flex: 1;
    }
  }

  .site-nav {
    list-style: none;
    margin: 0 0 1rem;
    padding: 0;
  }

  a {
    color: $color-link;
    text-decoration: none;

    &:hover {
      color: $color-text;
    }
    &.router-link-exact-active {
      color: $color-text;

      &:before {
        content: "↝ ";
        position: absolute;
        left: -1.24rem;
      }
    }
  }
}
.day .main-nav a {
  color: $color-link-day;
  text-decoration: none;

  &:hover {
    color: $color-text-day;
  }
  &.router-link-exact-active {
    color: $color-link-day;
  }
}
</style>
