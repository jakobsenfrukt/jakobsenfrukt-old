<template>
  <Layout>
    <Stars />
    <Intro />
    <Teaser />
  </Layout>
</template>

<script>
import Intro from "~/components/Intro";
import Teaser from "~/components/Teaser";
import Stars from "@/components/Stars";

export default {
  components: {
    Intro,
    Teaser,
    Stars,
  },
  metaInfo: {
    title: "Forside",
  },
};
</script>
