<template>
  <article class="project">
    <img :src="image" />
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
  margin: 0 1rem 1rem 0;
  height: 16rem;
  display: inline-block;
  vertical-align: top;

  p {
    font-family: 'roboto mono', monospace;
    font-size: 0.7rem;
  }

  img {
    height: 100%;
    object-fit: cover;
  }
}
</style>
