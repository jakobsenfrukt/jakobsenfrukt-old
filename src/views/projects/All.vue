<template>
  <main class="projects">
    <Project 
      v-for="project in projects" 
      :key="project.id"
      :image="project.image"
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

    p {
      font-size: 1.2rem;
    }

    .project {
      display: inline-block;
      vertical-align: top;
      padding: 0 2rem 4.6rem 0;
      max-width: 800px;

      /deep/ img {
        max-width: 100%;
        min-width: 24rem;
      }
    }

    @media (max-width: $sm) {
      .project {
        padding: 0 0 6rem;
        &:first-child {
          padding-top: 3.6rem;
        }
      }
    }
  }
</style>
