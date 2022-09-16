<template>
  <div class="mobile">
    <div class="mobile-screen">
      <div class="mobile-image-scroll">
        <img :src="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "/assets/images/projects/urdal/urdal-scroll-mobile.png",
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile {
  width: 6rem;
  position: relative;
  &-screen {
    width: 100%;
    height: 12rem;
    background: linear-gradient(60deg, #222, #333);
    padding: 0.2rem;
    border-radius: 0.6rem;
    position: relative;
    z-index: 2;
  }
  &-image-scroll {
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    right: 0.3rem;
    bottom: 0.3rem;
    overflow: hidden;
    //overflow-y: scroll;
    border-radius: 0.3rem;

    img {
      position: absolute;
      top: 0;
      transition: all 1s linear;
    }
  }
  &-stand {
    width: 8rem;
    margin: 1rem auto 0;
  }
  /*&-stand {
    width: 6rem;
    height: 4rem;
    background: linear-gradient(180deg, #666, #ccc, #666);
    margin: 0 auto;
    transform: perspective(20vw) rotateX(30deg);
    border-radius: 0.3rem;
  }*/

  &:hover {
    .mobile-image-scroll {
      img {
        //bottom: 0;
      }
    }
  }
  .leaf {
    width: 0.8rem;
    position: absolute;
    bottom: -1.2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    path {
      fill: #111;
    }
  }
}
</style>
