<template>
  <header class="site-header">
    <h1 @click="upsidedown = !upsidedown" :class="{ upsidedown: upsidedown }">Jakobsen Frukt &amp; Grønt</h1>
    <nav class="main-nav">
      <div class="logo">
        <a href="/"><Leaf /></a>
      </div>
      <ul class="site-nav">
        <li><router-link to="/">Hjem</router-link></li>
        <li><router-link to="/projects">Prosjekter</router-link></li>
        <!--<li><router-link to="/blog">Skriverier</router-link></li>-->
        <li><router-link to="/about">Info</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Leaf from '@/components/Leaf.vue'

export default {
  name: 'Header',
  components: {
    Leaf
  },
  data: function() {
    return {
      upsidedown: false
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/css/variables.scss';
.site-header {
  padding: 0;
  font-family: $monospace;
  font-size: $font-sm;
}
h1 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  text-align: center;
  z-index: 9000;
  font-size: 8px;
  color: $color-black;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  cursor: default;

  &.upsidedown {
    top: auto;
    bottom: 0;
    transform: rotate(-180deg);
  }
}
.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 1.24rem;
  padding-left: 1.666rem;
  z-index: 100;
  display: flex;
  justify-content: center;

  @media (max-width: $sm) {
    position: absolute;

    font-size: 1.24rem;
  }

  .logo {
    margin: 0 1.666rem 0 0;
    width: 1.42rem;

    @media (max-width: $sm) {
      margin-right: 2.8rem;
    }
  }

  .site-nav {
    list-style: none;
    margin: 0;
    padding: 0;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    transform: translateX(0);
    opacity: 1;
    transition: all .4s ease-in-out;
    z-index: 999;

    li {
      margin-right: 1.666rem;

      @media (max-width: $sm) {
        margin-right: 2.2rem;
      }
    }
  }

  &:hover .site-nav {
    transform: translateX(0);
    opacity: 1;
    transition: all .6s ease-in-out;
  }

  a {
    color: $color-text;
    text-shadow: 0 0 0.3em $color-black, 0 0.05em $color-black;
    text-decoration: none;
    position: relative;
    display: block;
    font-size: $font-sm;
    transition: all .2s linear;

    &:hover, &:focus, &.router-link-exact-active {
      color: $color-text;
      padding: 0;
      margin: 0;
      border: none;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #fff;
        opacity: 0;
        -webkit-transform: translateY(5px);
        transform: translateY(5px);
        -webkit-transition: opacity .1s,-webkit-transform 1s;
        transition: opacity .1s,-webkit-transform 1s;
        transition: transform 1s,opacity .1s;
        transition: transform 1s,opacity .1s,-webkit-transform 1s;
        pointer-events: none;
      }
    }
    &:focus {
      color: $color-link;
    }
  }
}
.day {
  h1 {
    color: $color-white;
  }
  .main-nav a {
    color: $color-text-day;
    text-decoration: none;
    text-shadow: 0 0 0.3em $color-background-day, 0 0.04em $color-background-day;

    &:hover, &.router-link-exact-active {
      color: $color-text-day;
    }
    &:focus {
      color: $color-link-day;
    }
  }
}
</style>
