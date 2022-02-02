<template>
  <section class="showcase">
    <div class="item urdal">
      <g-image
        alt="Example image"
        src="/assets/images/thumbs/urdal.png"
        class="urdal-image"
      />
      <img
        src="/assets/images/fun/urdal-diplom.svg"
        alt="Gul sirkel med teksten 'Diplom i Visuelt 2021'"
        class="urdal-diplom"
      />
    </div>
    <div class="item bergesenstiftelsen">
      <g-image
        alt="Example image"
        src="/assets/images/thumbs/bergesenstiftelsen.png"
        class="bergesenstiftelsen-image"
      />
    </div>
    <Chatbubble text="Jeg liker internett" class="item" />
    <p class="giant">
      Kul web design
    </p>
    <div class="item gyldendal">
      <Gyldendal />
    </div>
  </section>
</template>

<script>
import Gyldendal from "@/components/showcase/Gyldendal";

import Chatbubble from "@/components/fun/chatbubble";
import Test from "@/components/Test";

export default {
  components: {
    Gyldendal,
    Chatbubble,
    Test,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      var scrollTop = window.scrollY;
      var fastPos = scrollTop / 6 + "px";
      var mediumPos = scrollTop / 4 + "px";
      var slowPos = scrollTop / 3 + "px";
      var slowestPos = scrollTop / 2 + "px";

      var oddItems = document.querySelectorAll(".item:nth-child(odd)");
      oddItems.forEach(function(item) {
        item.style.transform = "translateY(" + fastPos + ")";
      });
      var evenItems = document.querySelectorAll(".item:nth-child(even)");
      evenItems.forEach(function(item) {
        item.style.transform = "translateY(" + slowPos + ")";
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding-bottom: 24rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
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
    background-clip: text;
  }
}

.urdal {
  position: relative;
  &-image {
    width: 100%;
  }
  &-diplom {
    position: absolute;
    top: -1rem;
    right: -1rem;
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
</style>
