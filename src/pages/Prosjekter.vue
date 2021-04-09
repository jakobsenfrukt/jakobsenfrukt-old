<template>
  <Layout>
    <ProjectGrid />
  </Layout>
</template>


<script>
import ProjectGrid from '~/components/projects/ProjectGrid'

export default {
  components: {
    ProjectGrid
  },
  metaInfo: {
    title: 'Prosjekter'
  }
}
</script>

<style scoped lang="scss">
.page-header {
  max-width: 32rem;
  margin: 0 auto 2rem;
}
</style>
