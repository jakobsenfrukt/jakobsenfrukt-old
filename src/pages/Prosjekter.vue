<template>
  <Layout>
    <ProjectGrid />
    <!--<ProjectArchive />-->
  </Layout>
</template>

<script>
import ProjectGrid from "~/components/projects/ProjectGrid";
import ProjectArchive from "~/components/projects/ProjectArchive";

export default {
  components: {
    ProjectGrid,
    ProjectArchive,
  },
  metaInfo: {
    title: "Prosjekter",
  },
};
</script>
