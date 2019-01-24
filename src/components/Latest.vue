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
        image="/static/julieaida1.png"
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
@import '@/css/variables.scss';
.projects {
  background: transparent;
  position: relative;
  height: 22rem;
  overflow-y: hidden;
  margin-left: -12rem;
  margin-right: -3rem;

  div {
    height: 24rem;
    display: flex;
    overflow-x: scroll;
    padding: 0 0 0 12rem;
    position: absolute;
    top: 2.6rem;
    left: 0;
    right: 0;
  }
  
  h2 {
    font-family: $monospace;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.8rem;
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
