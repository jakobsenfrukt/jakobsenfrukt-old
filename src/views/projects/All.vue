<template>
  <main class="projects">
    <Project 
      v-for="project in projects" 
      :key="project.id"
      :mainImage="project.mainImage"
      :largeImages="project.largeImages"
      :images="project.images"
      :title="project.title"
      :description="project.description"
      :link="project.link"
      :id="project.id"
    />
  </main>
</template>

<script>
import projects from '@/data/projects.json'
import Project from '@/components/Project.vue'

export default {
  name: 'all',
  components: {
    Project
  },
  data: function() {
    return {
      projects
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/variables.scss';
  .projects {
    position: relative;
    margin-top: -6rem;

    p {
      font-size: 1.2rem;
    }

    .project {
      display: block;
      padding-top: 6rem;
      margin: 0 auto 6rem;
    }

    @media (max-width: $sm) {
      .project {
        padding: 0 0 3rem;
        &:first-child {
          padding-top: 6rem;
        }
      }
    }
  }
</style>
