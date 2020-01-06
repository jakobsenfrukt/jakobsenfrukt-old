<template>
  <section class="latest">
    <h2>{{ heading }}</h2>
    <div>
      <ProjectThumb 
        v-for="(project, index) in projects.slice(0,9)" 
        :key="project.id"
        :mainImage="project.mainImage"
        :short="project.short"
        :title="project.title"
        :link="project.link"
        :type="project.type"
        :anchor="project.anchor"
        :id="project.id"
        :style="{ animationDelay: index/12 + 's' }"
      />
    </div>
    <router-link to="/projects" class="view-all">Se alle</router-link>
  </section>
</template>

<script>
import projects from '@/data/projects.json'
import ProjectThumb from '@/components/ProjectThumb.vue'

export default {
  name: 'latest',
  components: {
    ProjectThumb
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
  text-align: center;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 6vw;
  h2 {
    font-family: $monospace;
    font-size: $font-sm;
  }

  .project {
    margin: 1.5%;
    display: inline-block;
    vertical-align: top;
    width: 30%;
    max-width: 500px;
    @include fadeUpAnimation;
  }

  .view-all {
    margin-top: 3rem;
    display: inline-block;
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
  @media (max-width: $m) {
    .project {
      display: block;
      width: 100%;
      margin: 1rem auto 3rem;

      &:nth-child(7), &:nth-child(8), &:nth-child(9) {
        display: none;
      }
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
      width: 100%;
      margin: 0 auto 3rem;
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
