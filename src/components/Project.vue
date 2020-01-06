<template>
  <article class="project" :id="id">
    <div class="text">
      <h2 v-if="title">{{ title }}</h2>
      <p v-html="description"></p>
      <p v-if="link"><a :href="`${link}`" target="_blank">Besøk nettsiden</a></p>
    </div>
    <div v-if="largeImagesComputed" class="project-gallery large">
      <img v-for="(image, index) in largeImagesComputed" :key="`image-${index}`" :src="image" :alt="title" />
    </div>
    <div v-if="imagesComputed" class="project-gallery">
      <img v-for="(image, index) in imagesComputed" :key="`image-${index}`" :src="image" :alt="title" />
    </div>
  </article>
</template>

<script>
import IntersectionObserver from 'intersection-observer-polyfill';
export default {
  name: 'Project',
  props: {
    mainImage: String,
    largeImages: Array,
    images: Array,
    title: String,
    description: String,
    short: String,
    link: String,
    anchor: String,
    id: String,
  },
  data: () => ({ observer: null, intersected: false }),
  computed: {
    largeImagesComputed() {
      return this.intersected ? this.largeImages : '';
    },
    imagesComputed() {
      return this.intersected ? this.images : '';
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(projects => {
      const image = projects[0];
      if (image.isIntersecting) {
        this.intersected = true;
        this.observer.disconnect();
      }
    });

    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/variables.scss';
.project {
  font-family: 'roboto mono', monospace;
  font-size: $font-sm;
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

  @media (max-width: $sm) {
    h2 {
      font-size: 1.6rem;
    }
  }

  .project-gallery {
    padding: 1rem;
    margin: 0 auto 1rem;
    img {
      display: block;
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
      padding: 0 .24rem .24rem 0;
      &:nth-child(even) {
        padding: 0 0 .24rem .24rem;
      }
    }

    &.large {
      margin-bottom: 3rem;
      img {
        width: 100%;
        max-width: 1800px;
      }
    }

    @media (max-width: $m) {
      display: block;
      padding: 0;
      img {
        width: 100%;
        padding: 0 0 .24rem 0;
        &:nth-child(even) {
          padding: 0 0 .24rem 0;
        }
      }
      &.large {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
}
</style>
