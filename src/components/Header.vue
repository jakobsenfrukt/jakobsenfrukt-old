<template>
  <header class="site-header">
    <Leaf />
    <div class="header-text">{{ tagline[Math.floor(Math.random() * tagline.length)] }}</div>
  </header>
</template>

<script>
import Leaf from '@/components/Leaf.vue'

export default {
  name: 'Header',
  data: function() {
    return {
      tagline: ["5 om dagen", "100% vegansk", "Økologisk", "Biodynamisk", "Lokalprodusert", "Fair trade"]
    }
  },
  components: {
    Leaf
  }
}
</script>

<style scoped lang="scss">
.site-header {
  padding: 0;
}

.header-text {
  position: fixed;
  top: 0.6rem;
  right: 0.6rem;
  display: block;
  transform-origin: 0 50%;
  transform: rotate(24deg);
  color: #12684b;
}
</style>
