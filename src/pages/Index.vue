<template>
  <Layout>
    <Stars />
    <Intro />
    <Showcase />
  </Layout>
</template>

<script>
import Intro from "~/components/Intro";
import Showcase from "~/components/Showcase";
import Stars from "@/components/Stars";

export default {
  components: {
    Intro,
    Showcase,
    Stars,
  },
  metaInfo: {
    title: "Forside",
  },
};
</script>
