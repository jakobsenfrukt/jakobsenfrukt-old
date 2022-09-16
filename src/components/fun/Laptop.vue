<template>
  <div class="laptop">
    <div class="laptop-screen">
      <div class="laptop-image-scroll">
        <img :src="image" />
      </div>
    </div>
    <svg viewBox="0 0 282 8" class="laptop-bottom">
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-1"
        >
          <stop stop-color="#666666" offset="0%"></stop>
          <stop stop-color="#666666" offset="37.1811325%"></stop>
          <stop stop-color="#333333" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="100%" y1="0%" x2="0%" y2="0%" id="linearGradient-2">
          <stop stop-color="#666666" offset="0%"></stop>
          <stop stop-color="#ddd" offset="2.01793901%"></stop>
          <stop stop-color="#ddd" offset="50.7986739%"></stop>
          <stop stop-color="#ddd" offset="97.9485012%"></stop>
          <stop stop-color="#666666" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id="linearGradient-3">
          <stop stop-color="#999999" offset="0%"></stop>
          <stop stop-color="#ddd" offset="51.2630978%"></stop>
          <stop stop-color="#999999" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g
        id="Grafikk"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Group-2" transform="translate(-9.000000, 0.000000)">
          <path
            d="M10.0990195,0 L289.90098,0 C290.453265,-1.94168438e-13 290.90098,0.44771525 290.90098,1 C290.90098,1.47668102 290.564521,1.88709584 290.097097,1.98058068 L260.097097,7.98058068 C260.032523,7.99349531 259.966832,8 259.90098,8 L40.0990195,8 C40.0331675,8 39.9674766,7.99349531 39.9029034,7.98058068 L9.90290338,1.98058068 C9.36134363,1.87226873 9.01012689,1.34544362 9.11843884,0.803883865 C9.21192368,0.336459668 9.62233849,6.08276922e-15 10.0990195,0 Z"
            id="Rectangle"
            fill="url(#linearGradient-1)"
          ></path>
          <rect
            id="Rectangle"
            fill="url(#linearGradient-2)"
            transform="translate(150.000000, 1.000000) scale(1, -1) translate(-150.000000, -1.000000) "
            x="10"
            y="0"
            width="280"
            height="2"
          ></rect>
          <rect
            id="Rectangle"
            fill="url(#linearGradient-3)"
            transform="translate(150.500000, 1.000000) scale(1, -1) translate(-150.500000, -1.000000) "
            x="128"
            y="0"
            width="45"
            height="2"
          ></rect>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    image: { type: String, default: "/assets/images/thumbs-test/urdal.jpg" },
  },
};
</script>

<style lang="scss" scoped>
.laptop {
  width: 24rem;
  position: relative;
  &-screen {
    width: 80%;
    height: 12rem;
    background: linear-gradient(60deg, #222, #333);
    margin: 1rem auto 0;
    padding: 0.6rem;
    border-radius: 0.6rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    position: relative;
    z-index: 2;
  }
  &-image-scroll {
    position: absolute;
    top: 0.6rem;
    left: 0.6rem;
    right: 0.6rem;
    bottom: 0.6rem;
    overflow: hidden;
    //overflow-y: scroll;
    border-radius: 0.1rem;

    img {
      position: absolute;
      top: 0;
      transition: all 1s linear;
    }
  }
  &-bottom {
    width: 100%;
    margin: 0 auto;
    position: absolute;
  }

  &:hover {
    .laptop-image-scroll {
      img {
        //bottom: 0;
      }
    }
  }
}
</style>
