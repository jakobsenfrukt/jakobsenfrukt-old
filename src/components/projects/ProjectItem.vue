<template>
  <article class="project">
    <div class="project-image">
      <g-image :alt="alt" :src="image" />
    </div>
    <h1 class="project-title">{{ title }}</h1>
    <p class="project-lead">{{ lead }}</p>
    <span class="project-year">{{ year }}</span>
    <div v-if="link && url" class="project-links">
      <div><g-link to="/prosjekter/urdal" class="page-link">Mer om prosjektet</g-link> &rarr;</div>
      <div><g-link :to="url" class="web-link">Besøk {{ link }}</g-link> &#8599;</div>
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
.project {

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
