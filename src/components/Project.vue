<template>
  <article class="project" :id="id">
    <router-link v-if="anchor" :to="`projects${anchor}`">
      <img :src="image" class="project-image" alt="Bilde fra prosjekt" />
    </router-link>
    <img v-else :src="image" class="project-image" alt="Bilde fra prosjekt" />
    <div class="text">
      <h2 v-if="title">{{ title }}</h2>
      <p v-if="description">{{ description }}</p>
      <p><a v-if="link" :href="`${link}`">Besøk nettsiden</a></p>
      <p v-if="short">{{ short }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Project',
  props: {
    image: String,
    title: String,
    description: String,
    short: String,
    link: String,
    anchor: String,
    id: String,
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/variables.scss';
.project {
  font-family: 'roboto mono', monospace;
  font-size: 0.68rem;

  h2 {
    font-size: inherit;
    margin: 0;
    font-weight: bold;
    line-height: 1.6;
  }

  p {
    margin-bottom: 0;
  }

  p a {
    &:before {
      content: "↝ ";
    }
  }

  .text {
    max-width: 24rem;
    padding: 0.3rem 1rem;
    @media (max-width: $sm) {
      padding: 0.3rem 0;
    }
  }
}
</style>
