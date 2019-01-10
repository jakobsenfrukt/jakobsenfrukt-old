<template>
  <section class="projects">
    <h2>{{ heading }}</h2>
    <div>
      <Project
        image="https://upload.wikimedia.org/wikipedia/commons/c/c8/Nicolas_Fouch%C3%A9_001.jpg"
        description="Nettside for Bransjen" 
      />
      <Project
        image="https://data.whicdn.com/images/272629578/original.gif"
        description="Ruters digitale bærekraftstrategi"
      />
      <Project
        image="https://thewellredmage.files.wordpress.com/2016/12/my-neighbor-totoro-images-8eca62fb-1f66-421f-8936-16b4fc64193-sm1.jpg?w=780&h=674&crop=1"
        description="Nettside for illustratør Julie Aida"
      />
      <Project
        image="https://upload.wikimedia.org/wikipedia/commons/c/c8/Nicolas_Fouch%C3%A9_001.jpg"
        description="Nettside for Bransjen" 
      />
      <Project
        image="https://data.whicdn.com/images/272629578/original.gif"
        description="Ruters digitale bærekraftstrategi"
      />
      <Project
        image="https://thewellredmage.files.wordpress.com/2016/12/my-neighbor-totoro-images-8eca62fb-1f66-421f-8936-16b4fc64193-sm1.jpg?w=780&h=674&crop=1"
        description="Nettside for illustratør Julie Aida"
      />
    </div>
  </section>
</template>

<script>
import Project from '@/components/Project.vue'

export default {
  name: 'projects',
  components: {
    Project
  },
  props: {
    heading: String
  }
}
</script>

<style lang="scss" scoped>
@import '../css/variables.scss';
  .projects {
    background: transparent;
    position: relative;
    height: 18rem;
    overflow-x: visible;
    div {
      height: 20rem;
      display: flex;
      overflow-x: scroll;
      padding: 0 1rem;
      position: absolute;
      top: 2.6rem;
      left: -12rem;
      right: 0;
    }
    h2 {
      font-family: $monospace;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 0.8rem;
      font-style: italic;
    }
  }
</style>
