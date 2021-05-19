<template>
  <section class="archive">
    <h2 class="archive-heading">Arkiv <span>&mdash; nettsider som ikke lenger er i live på internett</span></h2>
    <div class="project-grid">
      <ProjectItem
        title="Marcus & Martinus"
        lead="Nettside for artist Marcus & Martinus, bygget på Vue/Nuxt og Craft CMS."
        image="/assets/images/fin-tomat.png"
        year="2019"
      />
      <ProjectItem
        title="Julie Aida"
        lead="Portfolio for kunstner og illustratør Julie Aida, bygget på Craft CMS."
        image="/assets/images/fin-tomat.png"
        url="https://julieaida.com"
        link="julieaida.com"
        year="2019"
      />
      <ProjectItem
        title="Dorna Lakayan"
        lead="Portfolio for designer Dorna Lakayan, bygget på Vue/Nuxt og Craft CMS."
        image="/assets/images/fin-tomat.png"
        url="https://balansemerket.no"
        link="balansemerket.no"
        year="2019"
      />
      <ProjectItem
        title="Aller Concept Store"
        lead="Nettside bygget på Vue og Craft CMS."
        image="/assets/images/fin-tomat.png"
        url="https://neuf.no"
        link="neuf.no"
        year="2019"
      />
      <ProjectItem
        title="Ruter Bærekraft"
        lead="Online versjon av Ruters bærekrafthåndbok."
        image="/assets/images/fin-tomat.png"
        url="https://barekraft.ruter.no/"
        link="barekraft.ruter.no"
        year="2018"
      />
      <ProjectItem
        title="Julie Aida v1.0"
        lead="-."
        image="/assets/images/fin-tomat.png"
        year="2018"
      />
      <ProjectItem
        title="Kit Wan Studios"
        lead="-."
        image="/assets/images/fin-tomat.png"
        year="2016"
      />
      <ProjectItem
        title="Matilda Karlström"
        lead="-."
        image="/assets/images/fin-tomat.png"
        year="2016"
      />
      <ProjectItem
        title="Ida Christensen"
        lead="-."
        image="/assets/images/fin-tomat.png"
        year="2016"
      />
      <ProjectItem
        title="Iselin Kleiva"
        lead="-."
        image="/assets/images/fin-tomat.png"
        year="2016"
      />
      <ProjectItem
        title="Designavgang 2015"
        lead="Nettside for avgangsutstillingen til KHiOs designavdeling, våren 2015."
        image="/assets/images/fin-tomat.png"
        url="https://barekraft.ruter.no/"
        link="barekraft.ruter.no"
        year="2015"
      />
      <ProjectItem
        title="Kulturutvalget"
        lead="-."
        image="/assets/images/fin-tomat.png"
        year="2015"
      />
      <ProjectItem
        title="Tatarius"
        lead="-."
        image="/assets/images/fin-tomat.png"
        year="2015"
      />
      <ProjectItem
        title="Live Space"
        lead="-."
        image="/assets/images/fin-tomat.png"
        year="2015"
      />
      <ProjectItem
        title="Procrastination"
        lead="-."
        image="/assets/images/fin-tomat.png"
        year="2014"
      />
      <ProjectItem
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
      />
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
  margin-top: 4rem;
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
  padding: 1rem;

  @media (min-width: 2000px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
}
</style>
