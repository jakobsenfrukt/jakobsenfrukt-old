<template>
  <Layout>
    <header class="page-header">
      <h1>Prosjekter</h1>
      <g-link to="/prosjekter/testprosjekt">Testprosjekt</g-link>
    </header>
  </Layout>
</template>


<script>
export default {
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
