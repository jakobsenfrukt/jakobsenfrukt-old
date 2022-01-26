<template>
  <div class="project-info">
    <div class="project-description">
      <h1 class="project-title">
        {{ title }} <span class="project-year">{{ year }}</span>
      </h1>
      <p class="project-lead">
        {{ lead }}
      </p>
    </div>
    <div class="project-meta">
      <div class="project-link">
        <a :href="url" target="_blank">{{ link }} &#8599;</a>
      </div>
      <div class="project-tags">
        <ul class="tag-list">
          <li v-for="(tag, index) in tags" :key="`tag-${index}`" class="tag">
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    lead: String,
    url: String,
    link: String,
    year: String,
    tags: Array,
  },
};
</script>

<style lang="scss" scoped>
.project-item {
  border-radius: var(--border-radius);
  padding: calc(var(--spacing-siteborder) / 2);

  &-text {
    padding: calc(var(--spacing-siteborder) / 2);
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
