<template>
  <header class="site-header">
    <Logo />
    <div class="header-text">{{ text }}</div>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  name: 'Header',
  props: {
    text: String
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
  top: 1.6rem;
  right: 0.6rem;
  display: block;
  transform: rotate(24deg);
  color: #12684b;
}
</style>
