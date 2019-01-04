<template>
  <header class="site-header">
    <Logo />
    <div class="header-text">{{ tagline[Math.floor(Math.random() * tagline.length)] }}</div>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  name: 'Header',
  data: function() {
    return {
      tagline: ["5 om dagen", "100% vegansk", "Økologisk", "Biodynamisk", "Lokalprodusert", "Fair trade"]
    }
  },
  components: {
    Logo
  }
}
</script>

<style scoped lang="scss">
.site-header {
  padding: 0;
}

.header-text {
  position: fixed;
  top: 1.4rem;
  right: 0.6rem;
  display: block;
  transform: rotate(24deg);
  color: #12684b;
}
</style>
