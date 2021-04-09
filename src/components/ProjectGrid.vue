<template>
  <section class="project-grid">
    <ProjectItem />
    <ProjectItem />
    <ProjectItem />
    <ProjectItem />
    <ProjectItem />
    <ProjectItem />
    <ProjectItem />
    <ProjectItem />
  </section>
</template>

<script>
import ProjectItem from '~/components/ProjectItem'

export default {
  components: {
    ProjectItem
  }
}
</script>

<style lang="scss">
.project-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4.2rem;
}
</style>
