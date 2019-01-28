<template>
  <article class="project">
    <img :src="image" class="project-image" />
    <p>{{ description }}</p>
  </article>
</template>

<script>
export default {
  name: 'Project',
  props: {
    description: String,
    image: String
  }
}
</script>

<style lang="scss" scoped>
.project {
  font-family: 'roboto mono', monospace;
  font-size: 0.8rem;

  p {
    padding: 0 1rem;
  }
}
</style>
