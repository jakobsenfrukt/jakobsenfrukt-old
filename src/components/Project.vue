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
    margin: 0 1rem 3rem 0;
    width: 20em;
    display: inline-block;
    vertical-align: top;

    p {
      font-family: 'roboto mono', monospace;
      font-size: 0.7rem;
    }

    img {
      width: 100%;
      object-fit: cover;
    }
  }
</style>
