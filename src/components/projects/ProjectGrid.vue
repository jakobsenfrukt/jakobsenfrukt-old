<template>
  <section class="project-grid">
    <ProjectItem
      title="Studio Lakayan"
      lead="Landingsside for nyetablert interiørarkitekt Studio Lakayan, bygget på Gridsome og Sanity."
      image="/assets/images/thumbs/lakayan.jpg"
      url="https://lakayan.no"
      link="lakayan.no"
      year="2021"
    />
    <ProjectItem
      title="Bransjen"
      lead="Portfolio for designbyrået Bransjen, bygget på Gridsome og Sanity."
      image="/assets/images/fin-tomat.png"
      url="https://bransjen.no"
      link="bransjen.no"
      year="2021"
    />
    <ProjectItem
      title="Renate Thor"
      lead="Ressursside med tiltak for et trygt kulturliv, bygget på Vue/Nuxt og Craft CMS."
      image="/assets/images/fin-tomat.png"
      url="https://renatethor.com"
      link="renatethor.com"
      year="2021"
    />
    <ProjectItem
      title="Thea Urdal"
      lead="Ressursside med tiltak for et trygt kulturliv, bygget på Vue/Nuxt og Craft CMS."
      image="/assets/images/thumbs/urdal.jpg"
      url="https://theaurdal.com"
      link="theaurdal.com"
      year="2020"
    />
    <ProjectItem
      title="Bergesenstiftelsen"
      lead="Nettside med filtrerbar oversikt over stiftelsens tildelinger, bygget på Vue/Nuxt og Craft CMS."
      image="/assets/images/test-mac.png"
      url="https://bergesenstiftelsen.no"
      link="bergesenstiftelsen.no"
      year="2020"
    />
    <ProjectItem
      title="Gyldendal"
      lead="Illustrasjoner til Gyldendals digitale læremiddel Smart Øving."
      image="/assets/images/fin-tomat.png"
      year="2020"
    />
    <ProjectItem
      title="IMKHiO"
      lead="Nettside for KHiOs avdeling for interiørarkitektur og møbeldesign, bygget på Craft CMS."
      image="/assets/images/fin-tomat.png"
      url="https://imkhio.no"
      link="imkhio.no"
      year="2020"
    />
    <ProjectItem
      title="Balansemerket"
      lead="Ressursside med tiltak for et trygt kulturliv, bygget på Vue/Nuxt og Craft CMS."
      image="/assets/images/fin-tomat.png"
      url="https://balansemerket.no"
      link="balansemerket.no"
      year="2019"
    />
    <ProjectItem
      title="Chateau Neuf"
      lead="Nettside for Det Norske Studentersamfund, med arrangementskalender, utleie og info for frivillige."
      image="/assets/images/fin-tomat.png"
      url="https://neuf.no"
      link="neuf.no"
      year="2019"
    />
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
