<template>
  <div>
    <IntersectionObserver
      id="test"
      @on-enter-viewport="onEnterViewport"
    ></IntersectionObserver>
    <div
      class="thing"
      :class="{'yes': isInView,
        'no': !isInView,
      }"
    >
      Animation<br>
      {{ text }}<br>
      {{ message }}
    </div>
  </div>
</template>

<script>
import IntersectionObserver from '~/components/tools/IntersectionObserver'

export default {
  components: {
    IntersectionObserver
  },
  data() {
    return {
      isInView: false,
      text: "h",
      message: "",
      fullMessage: "Hei jeg heter elise jeg er tøff",
      counter: 0
    }
  },
  methods: {
    onEnterViewport(value) {
      this.isInView = value;
      this.text += "e";
      this.writeMessage();
    },
    writeMessage() {
      for (let i = this.counter; i < this.fullMessage.length; i++) {
        this.message += this.fullMessage.charAt(i)
        this.counter = i
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.thing {
  transition: all .5s ease;
}
.yes {
  transform: translateX(0);
  opacity: 1;
}
.no {
  transform: translateX(-100%);
  opacity: 0;
}
</style>