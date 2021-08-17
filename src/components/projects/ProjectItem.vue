<template>
  <article class="project-item">
    <div class="project-item-image">
      <g-image :alt="alt" :src="image" />
    </div>
    <div class="project-item-text">
      <h1 class="project-item-title">{{ title }}</h1>
      <p class="project-item-lead">{{ lead }}</p>
      <span class="project-item-year">{{ year }}</span>
      <div v-if="(link && url) || slug" class="project-item-links">
        <div v-if="slug"><g-link to="/prosjekter/urdal" class="page-link">Mer om prosjektet</g-link> &rarr;</div>
        <div v-if="link && url"><g-link :to="url" class="web-link">{{ link }}</g-link> &#8599;</div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    lead: String,
    url: String,
    link: String,
    slug: String,
    image: String,
    alt: String,
    year: String,
  }
}
</script>

<style lang="scss" scoped>
.project-item {
  &-title {
    font-family: var(--font-mono);
    font-size: var(--font-size-small);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: .4rem 0;
  }

  &-lead {
    font-size: var(--font-size-xsmall);
    margin-bottom: 0;
    line-height: 1.48;
    opacity: .6;
  }

  &-image {
    margin-bottom: 1rem;
    width: 100%;

    img {
      width: 100%;
    }
  }

  &-year {
    display: none;
  }

  &-links {
    font-size: var(--font-size-xsmall);
    margin: .4rem 0;
    a {
      display: inline;
      text-decoration: underline;
      text-underline-offset: .2em;
      color: inherit;
    }
    div {
      margin-bottom: .2rem;
    }
  }
}
</style>
