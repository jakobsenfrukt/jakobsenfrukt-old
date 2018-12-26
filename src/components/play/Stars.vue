<template>
  <canvas id="sky" class="sky"></canvas>
</template>

<script>
export default {
  name: 'Stars',
  data: function() {
    return {
      exampleContent: 'This is TEXT'
    }
  },
  methods: {
    resizeCanvas: function() {
      var sky = document.getElementById("sky");
      sky.setAttribute('width', window.innerWidth);
      sky.setAttribute('height', window.innerHeight);
    },
    drawStars: function(event) {
      var sky = document.getElementById("sky"),
          ctx = sky.getContext('2d'),
          xMin = event.clientX - 120,
          xMax = event.clientX + 120,
          yMin = event.clientY - 120,
          yMax = event.clientY + 120,
          x = Math.random() * (xMax - xMin) + xMin,
          y = Math.random() * (yMax - yMin) + yMin,
          r = Math.random() * (1 - 0.02) + 0.02,
          c = Math.random() * (255 - 200) + 200;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2*Math.PI, false);
      ctx.fillStyle = 'rgb(' + c + ', ' + c + ', ' + c + ')';
      ctx.fill();
    }
  },
  mounted() {
    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas);
    window.addEventListener('mousemove', this.drawStars);
  }
}
</script>

<style scoped lang="scss">
.sky {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -24;
}
</style>
