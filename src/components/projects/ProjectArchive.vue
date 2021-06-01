<template>
  <section class="archive">
    <h2 class="archive-heading">Arkivet <span>&mdash; prosjekter som er eldre enn 5 år, eller ikke lenger online</span></h2>
    <div class="project-grid">
      <ProjectItem
        title="Marcus & Martinus"
        lead="Nettside for artist Marcus & Martinus, bygget på Vue/Nuxt og Craft CMS."
        image="/assets/images/thumbs/marcusandmartinus.png"
        year="2019"
      />
      <ProjectItem
        title="Julie Aida v1.0"
        lead="Portfolio for kunstner og illustratør Julie Aida, bygget på Craft CMS."
        image="/assets/images/thumbs/julieaida-v1.png"
        url="https://julieaida.com"
        year="2017"
      />
      <ProjectItem
        title="Designavgang 2015"
        lead="Nettside for avgangsutstillingen til KHiOs designavdeling, våren 2015."
        image="/assets/images/thumbs/designavgang.png"
        year="2015"
      />
      <ProjectItem
        title="Matilda Karlström"
        lead="Portfolio for klesdesigner Matilda Karlström, bygget på Craft CMS."
        image="/assets/images/thumbs/matilda.png"
        url="http://matildakarlstrom.com/"
        link="matildakarlstrom.com"
        year="2016"
      />
      <ProjectItem
        title="Live Space"
        lead="Nettside for KHiOs avdeling for interiørarkitektur og møbeldesign, bygget på Craft CMS."
        image="/assets/images/thumbs/livespace.png"
        year="2015"
      />
      <ProjectItem
        title="Iselin Kleiva"
        lead="Portfolio for kunstner Iselin Kleiva, bygget på Wordpress."
        image="/assets/images/thumbs/iselin.png"
        url="http://iselinkleiva.com/"
        link="iselinkleiva.com"
        year="2016"
      />
      <ProjectItem
        title="Tatarius"
        lead="Nettside for bandet Tatarius, laget i ren HTML og CSS."
        image="/assets/images/thumbs/tatarius.png"
        year="2015"
      />
      <ProjectItem
        title="Kulturutvalget"
        lead="Nettside for Kulturutvalget ved Det Norske Studentersamfund."
        image="/assets/images/thumbs/kulturutvalget.png"
        year="2015"
      />
      <ProjectItem
        title="Procrastination"
        lead="Nettbasert spill bygget med javascript-rammeverket Phaser."
        image="/assets/images/thumbs/procrastination.png"
        url="https://procrastination.elisejakob.com/"
        link="procrastination.elisejakob.com"
        year="2014"
      />
      <!--<ProjectItem
        title="EKD"
        lead="-."
        image="/assets/images/fin-tomat.png"
        year="2013"
      />
      <ProjectItem
        title="Spot On"
        lead="-."
        image="/assets/images/fin-tomat.png"
        year="2012"
      />-->
    </div>
  </section>
</template>

<script>
import ProjectItem from '~/components/projects/ProjectItem'

export default {
  components: {
    ProjectItem
  }
}
</script>

<style lang="scss">
.archive {
  margin-top: 9rem;
  border-top: 1px solid black;

  &-heading {
    padding: 1rem 0;
    margin: 0 0 1rem;

    span {
      opacity: .6;
      font-style: italic;
      font-size: var(--font-size-xsmall);
    }
  }
}
.project-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;

  @media (min-width: 2000px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
}
</style>
