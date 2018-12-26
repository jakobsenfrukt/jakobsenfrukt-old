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
  padding: 0.6rem 0;
}

.header-text {
  letter-spacing: 0.1em;
  position: fixed;
  top: 1rem;
  right: 0.6rem;
  display: block;
  transform: rotate(12deg);
	font-size: 0.6rem;
	text-shadow: -1px -1px black, -1px 1px black, 1px -1px black,
		1px 1px black, 2px 2px black,
		3px 3px black, 4px 4px 8px black;
  text-decoration: none;
}
</style>
