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
  height: 18rem;
  display: inline-block;
  vertical-align: top;

  &:last-child {
    padding-right: 2rem;
  }

  p {
    font-family: 'roboto mono', monospace;
    font-size: 0.7rem;
    padding: 0 1rem;
  }

  img {
    height: 16rem;
  }
}
</style>
