<template>
  <div id="smu" class="smu" @mouseover="smile = true" @mouseout="smile = false">
    <svg class="default" viewBox="0 0 117 166" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(2.862421, 0.223604)">
          <path d="M94.3136,70.6541 C103.6786,81.6941 113.6706,102.0331 110.5316,120.8711 C105.7136,147.8181 76.3816,161.4671 59.3916,162.2401 C42.4016,163.0151 27.9426,162.0441 10.1926,143.0081 C-7.5564,123.9721 2.4726,83.7821 12.8216,71.3951 C23.1706,59.0081 39.2716,50.5661 56.6776,52.6471 C74.0846,54.7281 86.6326,61.5981 94.3136,70.6541 Z" class="fill stroke body"></path>
          <path d="M66.7686,38.6996 C77.0736,44.7466 85.5176,37.2186 92.5726,41.5306 C97.7856,44.7176 94.6616,50.3906 98.8876,43.1886 C103.1146,35.9856 109.2476,10.3566 95.6436,2.3736 C81.2236,-6.0884 76.7696,10.3526 78.2606,16.0816 C60.6106,5.4476 53.5176,30.9246 66.7686,38.6996" class="fill-dark leaf"></path>
          <path d="M50.6231,50.8763 C50.6231,50.8763 28.5121,32.3163 40.9001,12.5533 C50.5401,-2.8227 75.9061,5.0483 77.8361,17.6483" stroke-linecap="round" stroke-linejoin="round" class="stroke"></path>
          <g v-if="smile">
            <path d="M75.9073,114.9061 C75.9073,114.9061 69.3863,132.3491 53.9443,132.3491 C38.5023,132.3491 31.9803,114.9061 31.9803,114.9061 C31.9803,114.9061 43.9703,117.2581 53.9443,117.2581 C63.9193,117.2581 75.9073,114.9061 75.9073,114.9061 Z" stroke-linecap="round" stroke-linejoin="round" class="stroke fill-light"></path>
          </g>
          <g v-else>
            <path d="M32.5118,115.9061 C32.5118,115.9061 38.0328,122.3491 53.4748,122.3491 C68.9168,122.3491 74.4378,115.9061 74.4378,115.9061" stroke-linecap="round" stroke-linejoin="round" class="stroke mouth"></path>
          </g>
          <g v-if="eyesOpen">
            <path d="M28.5821,95.9876 C28.5821,93.0116 26.1701,90.5996 23.1941,90.5996 C20.2191,90.5996 17.8071,93.0116 17.8071,95.9876 C17.8071,98.9636 20.2191,101.3756 23.1941,101.3756 C26.1701,101.3756 28.5821,98.9636 28.5821,95.9876" class="stroke-thin fill-dark eyes-open"></path>
            <path d="M89.0811,95.9876 C89.0811,93.0116 86.6691,90.5996 83.6931,90.5996 C80.7181,90.5996 78.3061,93.0116 78.3061,95.9876 C78.3061,98.9636 80.7181,101.3756 83.6931,101.3756 C86.6691,101.3756 89.0811,98.9636 89.0811,95.9876" class="stroke-thin fill-dark eyes-open"></path>
          </g>
          <g v-else>
            <path d="M17.7452,96.8177 C17.7452,96.8177 19.9842,94.4297 23.1332,94.4297 C26.2822,94.4297 28.5212,96.8177 28.5212,96.8177" stroke-linecap="round" class="stroke-medium eyes"></path>
            <path d="M78.2452,96.8177 C78.2452,96.8177 80.4832,94.4297 83.6332,94.4297 C86.7812,94.4297 89.0202,96.8177 89.0202,96.8177" stroke-linecap="round" class="stroke-medium eyes"></path>
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
      eyesOpen: true,
      smile: false
    }
  },
  methods: {
    blink: function() {
      let seconds;
      this.eyesOpen = !this.eyesOpen;
      if (this.eyesOpen) {
        seconds = Math.floor(Math.random() * 3600) + 1800
      } else {
        seconds = 200
      }
      setTimeout(this.blink, seconds)
    }
  },
  created() {
    this.blink()
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/variables.scss';
.smu {
  cursor: pointer;
  position: fixed;
  bottom: 1.444rem;
  right: 1.444rem;
  width: 1.666rem;
  max-width: 36px;

  @media (max-width: $sm) {
    position: static;
    display: inline-block;
    margin-bottom: 1rem;
  }
}

svg {
  width: 100%;

  > * {
    transition: all .3s ease-in-out;
  }
}
.fill {
  fill: $color-black;

  &-light {
    fill: $color-black;
  }
  &-dark {
    fill: $color-green;
  }
}
.stroke {
  stroke-width: 6;
  stroke: $color-green;

  &-thin {
    stroke-width: 2;
    stroke: $color-green;
  }

  &-medium {
    stroke-width: 4;
    stroke: $color-green;
  }

  &.body {
    stroke-width: 7;
    stroke: $color-green;
  }
}

.day {
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
    stroke: $color-black;

    &-thin {
      stroke: $color-black;
    }

    &-medium {
      stroke: $color-black;
    }

    &.body {
      stroke: $color-black;
    }
  }
}
</style>