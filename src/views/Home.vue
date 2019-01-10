<template>
  <div class="home">
    <main>
      <section class="intro">
        <p class="lead"><span class="name">Jakobsen Frukt &amp; Grønt</span> er et hyggelig, lite designstudio i Oslo, som spesialiserer seg på digital design.</p>
      </section>
      <Projects heading="I det siste har vi jobbet med:" />
    </main>
  </div>
</template>

<script>
import Projects from '@/views/Projects.vue'

export default {
  name: 'home',
  components: {
    Projects
  }
}
</script>

<style lang="scss" scoped>
@import '../css/variables.scss';
.name {
  color: $color-green;
}
.day .name {
  color: $color-black;
}
</style>
