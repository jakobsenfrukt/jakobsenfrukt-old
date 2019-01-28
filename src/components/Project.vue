<template>
  <article class="project" :id="id">
    <router-link v-if="link" :to="`projects${link}`">
      <img :src="image" class="project-image" />
    </router-link>
    <img v-else :src="image" class="project-image" />
    <p v-if="description">{{ description }}</p>
    <p v-if="short">{{ short }}</p>
  </article>
</template>

<script>
export default {
  name: 'Project',
  props: {
    description: String,
    image: String,
    short: String,
    link: String,
    id: String,
  }
}
</script>

<style lang="scss" scoped>
.project {
  font-family: 'roboto mono', monospace;
  font-size: 0.8rem;

  p {
    padding: 0.3rem 1rem;
  }
}
</style>
