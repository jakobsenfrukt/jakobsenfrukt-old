<template>
  <Layout>
    <Intro />
    <Showcase />
  </Layout>
</template>

<script>
import Intro from '~/components/Intro'
import Showcase from '~/components/Showcase'

export default {
  components: {
    Intro,
    Showcase
  },
  metaInfo: {
    title: 'Forside'
  }
}
</script>
