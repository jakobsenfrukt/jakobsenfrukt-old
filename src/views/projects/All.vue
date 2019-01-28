<template>
  <div class="projects">
    <main>
      <Project 
        v-for="project in projects" 
        :key="project.id"
        :image="project.image"
        :description="project.description"
        :id="project.id"
      />
      <section>
        <p>JF&amp;G har også jobbet med </p>
      </section>
    </main>
  </div>
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
  },
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
      vertical-align: middle;
      margin: 0 2rem 3rem 0;

      /deep/ img {
        max-width: 100%;
      }

      /deep/ p {
        max-width: 16.8rem;
      }
    }

    @media (max-width: $sm) {
      .project {
        margin: 0 1rem 1rem;
      }
    }
  }
</style>
