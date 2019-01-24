<template>
  <div class="home">
    <main>
      <section class="intro">
        <p class="lead"><span class="name">Jakobsen Frukt &amp; Grønt</span> er et hyggelig, lite designstudio i Oslo, som spesialiserer seg på digital design.</p>
      </section>
      <Latest heading="Dette har skjedd i det siste:" />
      <Dialogue />
    </main>
  </div>
</template>

<script>
import Latest from '@/components/Latest.vue'
import Dialogue from '@/components/play/Dialogue.vue'

export default {
  name: 'home',
  components: {
    Latest,
    Dialogue
  }
}
</script>

<style lang="scss" scoped>
@import '../css/variables.scss';
.intro {
  @media (max-width: $sm) {
    margin-top: 3.6rem;
  }
}
.name {
  color: $color-green;
}
.day .name {
  color: $color-black;
}
</style>
