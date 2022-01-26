<template>
  <div class="gyldendal">
    <IntersectionObserver
      id="gyldendal"
      class="observer"
      @on-enter-viewport="onEnterViewport"
    ></IntersectionObserver>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 329.91 329.55"
      :class="{ inview: isInView }"
    >
      <title>
        Hjul som viser progresjon, grafikk fra Gyldendals læringsprodukt Smart
        Øving
      </title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path class="high-bg" d="M175.8,84.41a80.29,80.29,0,1,1-21,0" />
          <path class="empty" d="M175.74,104.75a60.21,60.21,0,1,1-20.92,0" />
          <path class="good-bg" d="M154,64.63a100.59,100.59,0,1,0,21.79,0" />
          <path
            class="medium-bg"
            d="M153.88,44.43a120.69,120.69,0,1,0,22.29,0"
          />
          <path class="low-bg" d="M154.05,24.77a140.28,140.28,0,1,0,22.35.05" />
          <path class="empty" d="M154.16,4.6a160.32,160.32,0,1,0,22.24,0" />
          <path class="high" d="M175.8,84.41a80.31,80.31,0,1,1-59.89,16.13" />
          <path class="high" d="M175.74,104.75a60.21,60.21,0,1,1-20.92,0" />
          <path class="good" d="M71.4,127.9A100.6,100.6,0,1,0,175.82,64.6" />
          <path class="medium" d="M179.9,284.41a120.71,120.71,0,0,0-3.73-240" />
          <path class="low" d="M283.69,89.93A140.2,140.2,0,0,0,176.4,24.82" />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import IntersectionObserver from "~/components/tools/IntersectionObserver";

export default {
  components: {
    IntersectionObserver,
  },
  data() {
    return {
      isInView: false,
    };
  },
  methods: {
    onEnterViewport(value) {
      this.isInView = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.high-bg,
.empty,
.good-bg,
.medium-bg,
.low-bg,
.high,
.good,
.medium,
.low {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 9.2px;
}
.high-bg,
.high {
  stroke: #6736db;
}
.high-bg,
.empty,
.good-bg,
.medium-bg,
.low-bg {
  opacity: 0.2;
}
.empty {
  stroke: #a6b0b5;
}
.good-bg,
.good {
  stroke: #02b26d;
}
.medium-bg,
.medium {
  stroke: #007dff;
}
.low-bg,
.low {
  stroke: #e65f00;
}

/* animations */
.high,
.good,
.medium,
.low {
  stroke-dasharray: 1000;
}
.high {
  stroke-dashoffset: 1000;
}
.good {
  stroke-dashoffset: -520;
}
.medium {
  stroke-dashoffset: -360;
}
.low {
  stroke-dashoffset: -140;
}
.inview {
  .high {
    animation: drawStroke 4s ease-out 0.24s forwards;
  }
  .good {
    animation: drawStroke 1.8s ease-out 0.24s forwards;
  }
  .medium {
    animation: drawStroke 2s ease-out 0.24s forwards;
  }
  .low {
    animation: drawStroke 1.8s ease-out 0.24s forwards;
  }
}
.observer {
  position: absolute;
  top: 0;
  bottom: 0;
}
</style>
