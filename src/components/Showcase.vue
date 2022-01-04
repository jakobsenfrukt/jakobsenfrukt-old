<template>
  <section class="showcase">
    <g-image alt="Example image" src="/assets/images/thumbs/urdal.png" />
    <p class="giant">
      Kul web design
    </p>
  </section>
</template>

<script>
import A4 from "@/components/fun/a4";
import Test from "@/components/Test";

export default {
  components: {
    A4,
    Test,
  },
};
</script>

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

p {
  margin: 0 auto;
  &.giant {
    text-align: center;
    font-family: var(--font-serif);
    font-size: 8rem;
    text-transform: uppercase;
    line-height: 0.8;
    //opacity: .2;
    background: linear-gradient(
      var(--color-yellow),
      var(--color-orange),
      var(--color-green)
    );
    background-attachment: fixed;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
}
</style>
