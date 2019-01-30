<template>
  <section class="latest">
    <h2>{{ heading }}</h2>
    <div>
      <Project 
        v-for="project in projects.slice(0,6)" 
        :key="project.id"
        :image="project.image"
        :short="project.short"
        :anchor="project.anchor"
      />
    </div>
  </section>
</template>

<script>
import projects from '@/data/projects.json'
import Project from '@/components/Project.vue'

export default {
  name: 'latest',
  components: {
    Project
  },
  props: {
    heading: String
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
.latest {
  background: transparent;
  position: relative;
  height: 22rem;
  overflow-y: hidden;
  margin-left: -12rem;
  margin-right: -3rem;

  div {
    height: 24rem;
    display: flex;
    padding: 0 0 0 12rem;
    position: absolute;
    top: 2.6rem;
    left: 0;
    right: 0;

    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
  
  h2 {
    font-family: $monospace;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: $font-sm;
    margin-left: 12rem;
  }

  .project {
    margin: 0 1rem 1rem 0;
    height: 18rem;
    display: inline-block;
    vertical-align: top;

    &:last-child {
      padding-right: 2rem;
    }

    /deep/ img {
      height: 16rem;
    }
  }

  @media (max-width: $sm) {
    margin-left: 0;
    margin-right: 0;

    h2 {
      margin-left: 0;
    }

    div {
      padding: 0 0 0 1rem;
    }

    .project {
      &:last-child {
        padding-right: 1rem;
      }
    }
  }
}
</style>
