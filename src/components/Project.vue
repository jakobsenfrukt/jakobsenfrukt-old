<template>
  <article class="project" :id="id">
    <div class="text">
      <h2 v-if="title">{{ title }}</h2>
      <p v-if="description">{{ description }}</p>
      <p><a v-if="link" :href="`${link}`">Besøk nettsiden</a></p>
      <p v-if="short">{{ short }}</p>
    </div>
    <div v-if="images" class="project-gallery">
      <img v-for="(image, index) in images" :key="`image-${index}`" :src="image" alt="Bilde fra prosjekt" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'Project',
  props: {
    mainImage: String,
    images: Array,
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
  font-size: $font-xs;
  width: 100%;
  margin: 0 auto;

  h2 {
    font-family: $serif;
    font-size: 1.86rem;
    margin: 0 0 1rem;
    font-weight: bold;
    line-height: 1.2;
  }

  p a {
    &:before {
      content: "↝ ";
    }
  }

  .text {
    max-width: $width-p;
    margin: 0 auto;
    padding: 0.3rem 1rem;
  }

  .project-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img {
      width: 50%;
    }
  }
}
</style>
