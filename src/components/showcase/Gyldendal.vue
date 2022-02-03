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
          <path class="high-bg" d="M175.74,104.75a60.21,60.21,0,1,1-20.92,0" />
          <path class="good-bg" d="M154,64.63a100.59,100.59,0,1,0,21.79,0" />
          <path
            class="medium-bg"
            d="M153.88,44.43a120.69,120.69,0,1,0,22.29,0"
          />
          <path class="low-bg" d="M154.05,24.77a140.28,140.28,0,1,0,22.35.05" />
          <path class="empty" d="M154.16,4.6a160.32,160.32,0,1,0,22.24,0" />
          <path class="high" d="M175.8,84.41a80.31,80.31,0,1,1-59.89,16.13" />
          <path class="high" d="M175.74,104.75a60.21,60.21,0,1,1-20.92,0" />
          <path
            class="good"
            d="M175.8,64.6c8.9,1,17.6,3.1,26,6.4c51.7,20.3,77.2,78.7,56.9,130.4s-78.7,77.2-130.4,56.9
			C76.6,238,51.1,179.6,71.4,127.9"
          />
          <path
            class="medium"
            d="M176.2,44.4c56.5,5.2,101.8,49.1,108.7,105.4c8.2,66.2-38.8,126.4-105,134.6"
          />
          <path class="low" d="M176.4,24.8c44,3.6,83.8,27.7,107.3,65.1" />
        </g>
      </g>
    </svg>
    <!--<ProjectCursor class="cursor" />-->
  </div>
</template>

<script>
import IntersectionObserver from "~/components/tools/IntersectionObserver";
//import ProjectCursor from "~/components/projects/ProjectCursor";

export default {
  components: {
    IntersectionObserver,
    //ProjectCursor,
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
/*.gyldendal {
  .cursor {
    opacity: 0;
  }
  &:hover {
    .cursor {
      opacity: 1;
    }
  }
}*/
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
  stroke-dashoffset: 1000;
}
.medium {
  stroke-dashoffset: 1000;
}
.low {
  stroke-dashoffset: 1000;
}
.inview {
  .high {
    animation: drawStroke 4s ease-out forwards;
  }
  .good {
    animation: drawStroke 4s ease-out forwards;
  }
  .medium {
    animation: drawStroke 6s ease-out forwards;
  }
  .low {
    animation: drawStroke 12s ease-out forwards;
  }
}
.observer {
  position: absolute;
  top: 0;
  bottom: 0;
}
</style>
