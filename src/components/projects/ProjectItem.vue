<template>
  <article class="project-item">
    <div class="project-item-image">
      <g-image :alt="alt" :src="image" />
    </div>
    <div class="project-item-text">
      <h1 class="project-item-title">{{ title }}</h1>
      <p class="project-item-lead">{{ lead }}</p>
      <span class="project-item-year">{{ year }}</span>
      <div v-if="(link && url) || slug" class="project-item-links">
        <div v-if="slug">
          <g-link :to="`/prosjekter/${slug}`" class="page-link"
            >Mer om prosjektet</g-link
          >
          &rarr;
        </div>
        <div v-if="link && url">
          <g-link :to="url" class="web-link">{{ link }}</g-link> &#8599;
        </div>
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
  },
};
</script>

<style lang="scss" scoped>
.project-item {
  &-title {
    font-size: var(--font-size-l);
    font-weight: 800;
    margin: 0.4rem 0;
  }

  &-lead {
    font-size: var(--font-size-xs);
    margin-bottom: 0;
    line-height: 1.48;
    color: var(--color-text-opacity);
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
    font-size: var(--font-size-xs);
    margin: 0.4rem 0;
    a {
      display: inline;
      text-decoration: underline;
      text-decoration-color: var(--color-text-opacity);
      text-underline-offset: 0.2em;
      color: inherit;
    }
    div {
      margin-bottom: 0.2rem;
    }
  }
}
</style>
