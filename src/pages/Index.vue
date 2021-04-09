<template>
  <Layout>
    <Intro />
    <Test />
  </Layout>
</template>

<script>
import Intro from '~/components/Intro'
import Test from '~/components/Test'

export default {
  components: {
    Intro,
    Test
  },
  metaInfo: {
    title: 'Forside'
  }
}
</script>
