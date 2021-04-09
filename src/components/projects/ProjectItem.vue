<template>
  <article class="project">
    <g-image class="project-image" alt="Example image" src="~/assets/images/test-mac.png" width="400" />
    <h1 class="project-title">Bergesenstiftelsen</h1>
    <p class="project-lead">Tekst om dette prosjektet og kort om hva jeg har laga.</p>
    <g-link to="/prosjekter/testprosjekt">Testprosjekt</g-link>
  </article>
</template>

<style lang="scss">
.project {

  &-title {
    font-family: var(--font-mono);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: .6rem 0;
    padding-bottom: .3rem;
    border-bottom: 1px solid var(--color-text);
  }

  &-lead {
    font-family: var(--font-serif);
    font-size: 1rem;
  }

  &-image {
    margin-bottom: .6rem;
  }
}
</style>
