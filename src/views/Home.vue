<template>
  <div class="home">
    <main>
      <section class="intro">
        <p class="lead"><span class="name">Jakobsen Frukt &amp; Grønt</span> er et hyggelig, lite designstudio i Oslo. Vi spesialiserer oss på digital design, og lager nettsider for små og mellomstore bedrifter, men gjør også trykksaker, identitet, illustrasjon, og andre kreative oppdrag.<img src="http://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/256/lemon-icon.png" /></p>
        <Dialogue />
      </section>
      <section class="latest">
        <h2>I det siste har vi jobbet med:</h2>
        <div class="projects">
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
    </main>
  </div>
</template>

<script>
import Project from '@/components/Project.vue'
import Dialogue from '@/components/play/Dialogue.vue'

export default {
  name: 'home',
  components: {
    Project,
    Dialogue
  },
  data: function() {
    return {
      story: {
        chapter1: {
          text: '"Vi" er egentlig bare poteten <a href="https://elisejakob.no">Elise</a>. Hun jobbet tidligere i digitalbyrået <a href="https://netlife.com">Netlife</a>, men høsten 2018 bestemte hun seg for å satse fullt og helt på å drive eget studio.',
          button: "click me"
        },
        chapter2: {
          text: "this is chapter 2",
          button: "click me too"
        }
      }
    }
  },
  methods: {
    write: function(chapter, speed) {
      var letters = chapter.text.split('');
      var i = 0;
      var typing = setInterval(function() {
        document.getElementById('dialogue').innerHTML += letters[i];
        i++;

        if (i === letters.length) {
          clearInterval(typing);
        }
      }, speed);
    }
  }
}
</script>

<style lang="scss" scoped>
  .name {
    color: #24e666;
  }
  .latest {
    margin: 6rem 0;

    .projects {
      width: 100%;
    }

    h2 {
      font-size: 1.46rem;
      margin-bottom: 1rem;
      line-height: 1.2;
    }
  }
</style>
