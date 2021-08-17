<template>
  <section class="intro">
    <p class="lead"><g-link to="/info">Jakobsen Frukt & Grønt</g-link> er et hyggelig, lite designstudio i Oslo som spesialiserer seg på digital design og lager glade ting på internett.</p>
  </section>
</template>

<style lang="scss" scoped>
.intro {
  margin: 2rem auto;
  padding: 2rem 1rem 0;
  text-align: center;

  .lead {
    max-width: 36rem;
    font-size: 1.24rem;
    margin: 0 auto 4rem;
  }

  @media (min-width: 800px) {
    padding: 2rem 4rem 0;
    .lead {
      font-size: 1.8rem;
    }
  }
}
</style>
