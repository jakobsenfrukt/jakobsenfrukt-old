<template>
  <header class="site-header">
    <Leaf />
  </header>
</template>

<script>
import Leaf from '@/components/Leaf.vue'

export default {
  name: 'Header',
  components: {
    Leaf
  }
}
</script>

<style scoped lang="scss">
.site-header {
  padding: 0;
}
</style>
