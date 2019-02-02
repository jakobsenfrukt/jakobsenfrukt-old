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
    <router-link to="/projects" class="view-all">Vis alle</router-link>
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

  .view-all {
    position: absolute;
    right: 2rem;
    top: 0;
    display: block;
    transform-origin: 0 50%;
    transform: rotate(6deg);

    font-family: 'roboto mono', monospace;
    text-transform: uppercase;
    color: #fff6e8;
    text-shadow: 0 0 1.2em $color-red, 0 0 1em $color-red, 0 0 0.6em $color-red, 0 0 0.4em $color-red;
    
    &:hover {
      text-shadow: 0 0 1.2em $color-green, 0 0 1em $color-green, 0 0 0.6em $color-green, 0 0 0.4em $color-green;
    }
  }

  @media (max-width: $sm) {
    margin-left: 0;
    margin-right: 0;

    h2 {
      margin-left: 0;
    }

    div {
      padding: 0;
    }

    .project {
      &:last-child {
        padding-right: 1rem;
      }
    }

    .view-all {
      display: none;
    }
  }
}
.day {
  .view-all {
    background: $color-green;
    color: $color-black;
    padding: 0.3em 0.6em;
    border-radius: 2px;
    transform: skew(-12deg);
    text-shadow: none;
    text-transform: none;
    letter-spacing: 0;
    transition: background 0.2s ease-in-out;

    &:hover {
      text-shadow: none;
      background: $color-yellow;
    }
  }
}
</style>
