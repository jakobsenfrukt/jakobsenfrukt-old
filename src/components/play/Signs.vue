<template>
  <div class="signs">
    <div class="neon-sign">JF&amp;G</div>
    <div class="sign">{{ tagline[Math.floor(Math.random() * tagline.length)] }}</div>
  </div>
</template>

<script>
import Leaf from '@/components/Leaf.vue'

export default {
  name: 'Signs',
  data: function() {
    return {
      tagline: ["5 om dagen", "100% vegansk", "Økologisk", "Biodynamisk", "Lokalprodusert", "Fair trade"]
    }
  }
}
</script>

<style scoped lang="scss">
.neon-sign {
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  display: block;
  transform-origin: 0 50%;
  transform: rotate(24deg);

  font-family: 'roboto mono', monospace;
  font-size: 1.46rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #fff6e8;
  text-shadow: 0 0 1.2em #fe2436, 0 0 1em #fe2436, 0 0 0.6em #fe2436, 0 0 0.4em #fe2436;
}

.sign {
  display: inline-block;
  background: #fff6e8;
  color: #181818;
  padding: 0.3em 0.6em;
  border-radius: 2px;
  transform: skew(-12deg) rotate(-12deg);

  position: absolute;
  top: 4rem;
  left: 2rem;
}
</style>
