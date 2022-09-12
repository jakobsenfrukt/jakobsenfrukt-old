<template>
  <article class="project-item">
    <!-- :style="`background: ${background}; color: ${color}`" -->
    <div class="project-item-image">
      <g-image :alt="alt" :src="image" />
    </div>
    <div class="project-item-text">
      <h1 class="project-item-title">{{ title }}</h1>
      <p class="project-item-lead">{{ lead }}</p>
      <span class="project-item-year">{{ year }}</span>
      <div v-if="(link && url) || slug || tags" class="project-item-links">
        <div v-if="slug">
          <g-link :to="`/prosjekter/${slug}`" class="page-link"
            >Mer om prosjektet &rarr;</g-link
          >
        </div>
        <!--<div v-if="link && url">
          <g-link :to="url" class="web-link">{{ link }}</g-link> &#8599;
        </div>-->
        <div v-if="tags" class="project-tags">
          <ul class="tag-list">
            <!--<li class="tag ongoing" v-if="ongoing">Pågår nå</li>-->
            <li class="tag" v-for="tag in tags" :key="tag">{{ tag }}</li>
          </ul>
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
    tags: Array,
    ongoing: Boolean,
    background: {
      type: String,
      default: "transparent",
    },
    color: {
      type: String,
      default: "inherit",
    },
  },
};
</script>

<style lang="scss" scoped>
.project-item {
  border-radius: var(--border-radius);
  padding: calc(var(--spacing-siteborder) / 2);

  &-text {
  }

  &-title {
    font-size: var(--font-size-m);
    font-weight: 800;
    margin: 0.4rem 0;
  }

  &-lead {
    font-size: var(--font-size-xs);
    margin-bottom: 0;
    line-height: 1.48;
    opacity: 0.8;
  }

  &-image {
    margin-bottom: 0.6rem;
    width: 100%;

    img {
      width: 100%;
      border-radius: var(--border-radius);
      box-shadow: 0 0 0 1px var(--color-shadow);
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
      text-decoration-color: currentColor;
      text-underline-offset: 0.2em;
      color: inherit;
    }
    div {
      margin-bottom: 0.2rem;
    }
  }
  .page-link {
    display: inline-block;
    color: var(--color-background);
    background: var(--color-link);
    border-radius: 2rem;
    text-decoration: none;
    margin-top: 0.3rem;
    margin-right: 0.66rem;
    padding: 0.2rem 0.66rem;
    &:hover {
      color: var(--color-background);
    }
  }

  .project-tags {
    margin-top: 0.6rem;
    .tag {
      font-size: var(--font-size-xxs);
    }
    .ongoing {
      background-color: var(--color-yellow);
      color: var(--color-black);
      border-color: var(--color-yellow);
      opacity: 1;
    }
  }
}
</style>
