<template>
  <div class="home">
    <img class="logo" alt="Tomat" src="../assets/images/fin-tomat.png">
    <HelloWorld msg="Jakobsen Frukt &amp; Grønt"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
