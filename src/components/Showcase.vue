<template>
  <section class="showcase">
    <div></div>
    <div class="scroll-item scroll-slow urdal">
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
    <Chatbubble text="Jeg liker internett" class="scroll-item scroll-slow" />
    <p class="giant">
      Kul web design
    </p>
    <div class="scroll-item scroll-fast gyldendal">
      <Gyldendal />
    </div>
    <div class="scroll-item scroll-slow bergesenstiftelsen">
      <g-image
        alt="Example image"
        src="/assets/images/thumbs/bergesenstiftelsen.png"
        class="bergesenstiftelsen-image"
      />
    </div>
    <div class="scroll-item scroll-fast orseng">
      <Orseng />
    </div>
  </section>
</template>

<script>
import Gyldendal from "@/components/showcase/Gyldendal";
import Orseng from "@/components/showcase/Orseng";

import Chatbubble from "@/components/fun/chatbubble";
import Test from "@/components/Test";

export default {
  components: {
    Gyldendal,
    Orseng,
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
      var fastPos = scrollTop / 6.6 + "px";
      var mediumPos = scrollTop / 4.2 + "px";
      var slowPos = scrollTop / 3.6 + "px";

      var fastItems = document.querySelectorAll(".scroll-fast");
      fastItems.forEach(function(item) {
        item.style.transform = "translateY(" + fastPos + ")";
      });
      var mediumItems = document.querySelectorAll(".scroll-medium");
      mediumItems.forEach(function(item) {
        item.style.transform = "translateY(" + mediumPos + ")";
      });
      var slowItems = document.querySelectorAll(".scroll-slow");
      slowItems.forEach(function(item) {
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
  justify-content: center;
  justify-items: center;
  padding-bottom: 24rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

p {
  margin: 0 auto;
  &.giant {
    grid-column: span 2;
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

@media (max-width: 666px) {
  p {
    &.giant {
      font-size: 4.6rem;
    }
  }
}
</style>
