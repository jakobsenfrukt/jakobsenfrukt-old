<template>
  <section class="showcase">
    <g-image alt="Example image" src="/assets/images/thumbs/urdal.png" />
  </section>
</template>

<style lang="scss" scoped>
.showcase {

  img {
    display: block;
    margin: 0 auto;
  }
  
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
