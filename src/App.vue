<template>
  <div id="app">
    <Stars v-if="night" />
    <Header />
    <transition name="fade"><router-view/></transition>
    <Footer />
  </div>
</template>

<script>
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
      document.body.classList.add('day');
    }
  }
}
</script>

<style lang="scss">
@import 'css/main.scss';
</style>
