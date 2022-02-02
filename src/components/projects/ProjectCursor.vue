<template>
  <div :id="id" class="projectcursor"></div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "projectcursor",
    },
  },
  methods: {
    moveProjectCursor: function(event) {
      let xPos = event.clientX;
      let yPos = event.clientY;
      document.getElementById("projectcursor").style.transform =
        "translate(" + xPos + "px, " + yPos + "px)";
    },
  },
  mounted() {
    window.addEventListener("mousemove", this.moveProjectCursor);
    window.addEventListener("scroll", this.moveProjectCursor);
  },
  destroyed() {
    window.removeEventListener("mousemove", this.moveProjectCursor);
    window.removeEventListener("scroll", this.moveProjectCursor);
  },
};
</script>

<style scoped lang="scss">
.projectcursor {
  width: 10rem;
  height: 2rem;
  background: var(--color-green);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(20px, 10px);
}
</style>
