<template>
  <div class="gyldendal">
    <IntersectionObserver
      id="gyldendal"
      class="observer"
      @on-enter-viewport="onEnterViewport"
    ></IntersectionObserver>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 399 231"
      class="logo"
      :class="{ inview: isInView }"
    >
      <title>
        Logo for Ørseng Interiørarkitektur
      </title>
      <path
        class="fill"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.0825 92.4786C26.1388 92.6685 22.5097 93.8574 19.3962 95.8411L19.4337 95.8836C17.4676 97.1289 15.7103 98.6745 14.2262 100.456L14.21 100.439C13.9291 100.786 13.6587 101.144 13.3991 101.511C10.6844 105.198 9.08011 109.753 9.08011 114.683C9.08011 126.965 19.0368 136.921 31.3185 136.921C43.5999 136.921 53.5565 126.965 53.5565 114.683C53.5565 102.402 43.5999 92.4449 31.3185 92.4449C30.9036 92.4449 30.4919 92.4564 30.0825 92.4786ZM8.16567 93.5792L0 84.3545H9.27187L13.5215 89.1489C18.3815 85.8193 24.4337 83.9119 30.9239 83.8555C48.3712 83.703 62.2272 97.0693 62.3769 114.179C62.4481 122.355 59.3943 129.799 54.2159 135.323L62.2637 144.434H53.0053L48.8605 139.753C44.0005 143.083 37.9478 144.99 31.4581 145.047C14.0108 145.199 0.154331 131.833 0.00508275 114.723C-0.0660758 106.548 2.98774 99.1033 8.16567 93.5792Z"
      />
      <path
        class="fill"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M132.177 143.651H121.135L100.298 118.955V143.651H91.2786V84.6489H105.44C118.504 84.6489 126.596 92.4879 126.596 103.108C126.596 111.959 120.78 118.617 111.677 120.556L132.177 143.651ZM100.298 92.572V114.74H104.765C112.604 114.74 117.324 110.104 117.324 103.529C117.324 97.1238 112.604 92.572 104.765 92.572H100.298Z"
      />
      <path
        class="fill"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M225.224 135.391H248.832V143.651H216.205V84.6489H240.487L247.735 92.9093H225.224V109.261H234.176V117.521H225.224V135.391Z"
      />
      <path
        class="fill"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M321.46 85.4377V147.643L283.713 105.077V145.114H274.694V83.5834L312.44 126.065V85.4377H321.46Z"
      />
      <path
        class="fill"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M389.719 110.64L398.233 120.423V139.72C392.838 142.838 385.505 144.777 378.256 144.777C360.977 144.777 347.322 131.291 347.322 114.18C347.322 97.0696 361.314 83.5832 379.015 83.5832C384.999 83.5832 389.383 84.9537 394.187 87.4826V96.5636C389.804 93.7824 384.493 92.0963 379.099 92.0963C366.456 92.0963 356.678 101.79 356.678 114.18C356.678 126.571 366.203 136.264 378.509 136.264C382.724 136.264 386.348 135.589 389.719 134.157V118.647V110.64Z"
      />
      <path
        class="fill"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M183.672 96.87V87.6287C183.672 87.6287 178.127 83.008 170.734 83.008C163.341 83.008 155.717 87.8597 155.486 97.7942C155.314 105.185 161.031 111.194 165.651 115.353C170.272 119.511 176.741 123.67 176.741 129.677C176.741 133.408 173.044 136.344 169.255 136.344C164.727 136.344 161.031 134.76 156.41 131.063V141.691C156.41 141.691 162.879 145.387 170.272 145.387C177.665 145.387 185.982 140.304 185.982 130.601C185.982 119.973 178.358 115.122 174.662 111.425C170.965 107.729 164.496 103.801 164.496 98.0252C164.496 94.0108 167.962 91.5142 171.718 91.5142C175.845 91.5142 179.051 93.1735 183.672 96.87Z"
      />
      <path class="stroke" d="M95.4998 59L95.4998 5H317V59" stroke-width="9" />
      <path class="stroke" d="M317 172V226H95.4998V172" stroke-width="9" />
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
.logo {
  width: 100%;
  .fill {
    fill: currentColor;
  }
  .stroke {
    stroke: currentColor;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
  }
}
.inview {
  .stroke {
    animation: drawSquare 6s ease-out forwards;
    animation-delay: 0.5s;
  }
}
@keyframes drawSquare {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
