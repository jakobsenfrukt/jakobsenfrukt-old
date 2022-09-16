<template>
  <div class="urdal">
    <Desktop image="/assets/images/projects/urdal/urdal-scroll.png" />
    <img
      src="/assets/images/fun/urdal-diplom.svg"
      alt="Gul sirkel med teksten 'Diplom i Visuelt 2021'"
      class="urdal-diplom"
    />
  </div>
</template>

<script>
import Desktop from "@/components/fun/Desktop";

export default {
  components: {
    Desktop,
  },
};
</script>

<style lang="scss" scoped>
.urdal {
  position: relative;
  &-diplom {
    position: absolute;
    top: -2rem;
    right: -2rem;
    width: 6rem;
    height: 6rem;
    transform: rotate(40deg);
    z-index: -1;
  }
  &:hover {
    .urdal-diplom {
      animation: rotateUrdal 4s linear infinite;
    }
  }
}

@media (max-width: 666px) {
  p {
    &.giant {
      font-size: 4.6rem;
    }
  }
}
</style>
