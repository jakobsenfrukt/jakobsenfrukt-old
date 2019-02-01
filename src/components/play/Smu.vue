<template>
  <div id="smu" class="smu">
    <svg class="default" viewBox="0 0 117 166" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Maskot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="default" transform="translate(2.862421, 0.223604)">
          <path d="M94.3136,70.6541 C103.6786,81.6941 113.6706,102.0331 110.5316,120.8711 C105.7136,147.8181 76.3816,161.4671 59.3916,162.2401 C42.4016,163.0151 27.9426,162.0441 10.1926,143.0081 C-7.5564,123.9721 2.4726,83.7821 12.8216,71.3951 C23.1706,59.0081 39.2716,50.5661 56.6776,52.6471 C74.0846,54.7281 86.6326,61.5981 94.3136,70.6541 Z" class="fill stroke"></path>
          <path d="M66.7686,38.6996 C77.0736,44.7466 85.5176,37.2186 92.5726,41.5306 C97.7856,44.7176 94.6616,50.3906 98.8876,43.1886 C103.1146,35.9856 109.2476,10.3566 95.6436,2.3736 C81.2236,-6.0884 76.7696,10.3526 78.2606,16.0816 C60.6106,5.4476 53.5176,30.9246 66.7686,38.6996" class="fill-dark"></path>
          <path d="M50.6231,50.8763 C50.6231,50.8763 28.5121,32.3163 40.9001,12.5533 C50.5401,-2.8227 75.9061,5.0483 77.8361,17.6483" stroke-linecap="round" stroke-linejoin="round" class="stroke"></path>
          <path d="M32.5118,115.9061 C32.5118,115.9061 38.0328,122.3491 53.4748,122.3491 C68.9168,122.3491 74.4378,115.9061 74.4378,115.9061" stroke-linecap="round" stroke-linejoin="round" class="stroke"></path>
          <g v-if="eyesOpen">
            <path d="M28.5821,95.9876 C28.5821,93.0116 26.1701,90.5996 23.1941,90.5996 C20.2191,90.5996 17.8071,93.0116 17.8071,95.9876 C17.8071,98.9636 20.2191,101.3756 23.1941,101.3756 C26.1701,101.3756 28.5821,98.9636 28.5821,95.9876" class="stroke-thin fill-dark"></path>
            <path d="M89.0811,95.9876 C89.0811,93.0116 86.6691,90.5996 83.6931,90.5996 C80.7181,90.5996 78.3061,93.0116 78.3061,95.9876 C78.3061,98.9636 80.7181,101.3756 83.6931,101.3756 C86.6691,101.3756 89.0811,98.9636 89.0811,95.9876" class="stroke-thin fill-dark"></path>
          </g>
          <g v-else>
            <path d="M17.7452,96.8177 C17.7452,96.8177 19.9842,94.4297 23.1332,94.4297 C26.2822,94.4297 28.5212,96.8177 28.5212,96.8177" stroke-linecap="round" class="stroke"></path>
            <path d="M78.2452,96.8177 C78.2452,96.8177 80.4832,94.4297 83.6332,94.4297 C86.7812,94.4297 89.0202,96.8177 89.0202,96.8177" stroke-linecap="round" class="stroke"></path>
          </g>
        </g>
      </g>
    </svg>

    <svg class="smile" viewBox="0 0 117 166" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="smile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(2.862421, 0.223604)">
          <path d="M94.7823,70.6541 C104.1483,81.6941 114.1403,102.0331 111.0013,120.8711 C106.1823,147.8181 76.8503,161.4671 59.8613,162.2401 C42.8713,163.0151 28.4113,162.0441 10.6623,143.0081 C-7.0867,123.9721 2.9423,83.7821 13.2913,71.3951 C23.6393,59.0081 39.7413,50.5661 57.1473,52.6471 C74.5533,54.7281 87.1023,61.5981 94.7823,70.6541 Z" class="fill stroke"></path>
          <path d="M67.2384,38.6996 C77.5424,44.7466 85.9874,37.2186 93.0414,41.5306 C98.2544,44.7176 95.1314,50.3906 99.3574,43.1886 C103.5844,35.9856 109.7174,10.3566 96.1134,2.3736 C81.6924,-6.0884 77.2394,10.3526 78.7304,16.0816 C61.0804,5.4476 53.9874,30.9246 67.2384,38.6996" class="fill-dark"></path>
          <path d="M51.0929,50.8763 C51.0929,50.8763 28.9809,32.3163 41.3699,12.5533 C51.0099,-2.8227 76.3759,5.0483 78.3059,17.6483" stroke-linecap="round" stroke-linejoin="round" class="stroke"></path>
          <path d="M75.9073,114.9061 C75.9073,114.9061 69.3863,132.3491 53.9443,132.3491 C38.5023,132.3491 31.9803,114.9061 31.9803,114.9061 C31.9803,114.9061 43.9703,117.2581 53.9443,117.2581 C63.9193,117.2581 75.9073,114.9061 75.9073,114.9061 Z" stroke-linecap="round" stroke-linejoin="round" class="stroke fill-light"></path>
          <g v-if="eyesOpen">
            <path d="M28.5821,95.9876 C28.5821,93.0116 26.1701,90.5996 23.1941,90.5996 C20.2191,90.5996 17.8071,93.0116 17.8071,95.9876 C17.8071,98.9636 20.2191,101.3756 23.1941,101.3756 C26.1701,101.3756 28.5821,98.9636 28.5821,95.9876" class="stroke-thin fill-dark"></path>
            <path d="M89.0811,95.9876 C89.0811,93.0116 86.6691,90.5996 83.6931,90.5996 C80.7181,90.5996 78.3061,93.0116 78.3061,95.9876 C78.3061,98.9636 80.7181,101.3756 83.6931,101.3756 C86.6691,101.3756 89.0811,98.9636 89.0811,95.9876" class="stroke-thin fill-dark"></path>
          </g>
          <g else>
            <path d="M17.7452,96.8177 C17.7452,96.8177 19.9842,94.4297 23.1332,94.4297 C26.2822,94.4297 28.5212,96.8177 28.5212,96.8177" stroke-linecap="round" class="stroke"></path>
            <path d="M78.2452,96.8177 C78.2452,96.8177 80.4832,94.4297 83.6332,94.4297 C86.7812,94.4297 89.0202,96.8177 89.0202,96.8177" stroke-linecap="round" class="stroke"></path>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Smu',
  data: function() {
    return {
      eyesOpen: true
    }
  },
  methods: {
    blink: function() {
      this.eyesOpen = !this.eyesOpen
    }
  },
  created() {
    setInterval(this.blink, 1000)
  },
  beforeDestroy() {
    clearInterval()
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/variables.scss';
.smu {
  cursor: pointer;
  .smile {
    visibility: hidden;
  }

  &:hover {
    .smile {
      visibility: visible;
    }
  }
}


svg {
  position: fixed;
  bottom: 1.444rem;
  right: 1.444rem;
  width: 1.666rem;
  transition: transform 0.3s ease-in-out;
  transform-origin: 36% 36%;

  @media (max-width: $sm) {
    bottom: 1rem;
    right: 1rem;
  }
}
.fill {
  fill: $color-yellow;

  &-light {
    fill: $color-white;
  }
  &-dark {
    fill: $color-black;
  }
}
.stroke {
  stroke-width: 7;
  stroke: $color-black;

  &-thin {
    stroke-width: 2;
    stroke: $color-black;
  }
}
</style>