<template>
  <Layout>
    <section class="project-hero">
      <div class="project-mainimage">
        <g-image alt="Example image" src="/assets/images/thumbs/urdal.jpg" />
      </div>
      <div class="project-info">
        <h1 class="project-title">Prosjekttittel</h1>
        <span class="project-year">2021</span>
        <p class="project-lead">En tekst om prosjektet</p>
      </div>
    </section>
    <section class="project-gallery">
      <figure class="project-image">
        <g-image alt="Example image" src="/assets/images/fin-tomat.png" />
        <figcaption>
          Bildetekst
        </figcaption>
      </figure>
    </section>
  </Layout>
</template>


<script>
export default {
  metaInfo: {
    title: 'Testprosjekt'
  }
}
</script>

<style scoped lang="scss">
.project {
  &-mainimage {
    max-height: 60vh;
    width: 100%;
    img {
      display: block;
      margin: 0 auto;
    }
  }
  &-info {
    background: var(--color-text);
    color: var(--color-background);
    font-size: var(--font-size-small);
    padding: 1rem 1rem 2rem;
    max-width: 16rem;
    position: relative;
    z-index: 200;
  }

  &-title {
    font-size: var(--font-size-small);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
  }

  &-lead {
    margin: 0;
  }

  &-gallery {
    margin: 6rem 0;
  }
}
</style>
