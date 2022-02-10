<template>
  <section class="project-grid">
    <!--<ProjectItem
      title="Villbrygg"
      lead="Nettside for Villbrygg."
      image="/assets/images/thumbs/designavgang.png"
      year="2022"
      :tags="['Vue', 'Gridsome', 'Sanity']"
      ongoing
    />-->
    <!--<ProjectItem
      title="Typografi Illustrert"
      lead="Nettside for utstilling på Grafill."
      image="/assets/images/thumbs/typografi-illustrert.png"
      year="2022"
      :tags="['Vue', 'Gridsome', 'Sanity']"
    />-->
    <ProjectItem
      title="Ørseng Interiørarkitektur"
      lead="Nettside for Ørseng Interiørarkitektur."
      image="/assets/images/projects/orseng/thumb.png"
      url="https://orseng.no"
      link="orseng.no"
      year="2021"
      :tags="['Vue', 'Gridsome', 'Sanity']"
      background="pink"
      color="red"
    />
    <ProjectItem
      title="All Ears"
      lead="Nettside for musikkfestivalen All Ears."
      image="/assets/images/projects/all-ears/thumb.png"
      url="https://all-ears.no"
      link="all-ears.no"
      year="2021"
      :tags="['Vue', 'Gridsome', 'Sanity']"
    />
    <ProjectItem
      title="Gyldendal"
      lead="Design og illustrasjoner til Gyldendals digitale læremiddel Smart Øving."
      image="/assets/images/thumbs/gyldendal.png"
      year="2020"
      :tags="['React', 'Framer', 'Illustrator']"
      ongoing
    />
    <ProjectItem
      title="Studio Lakayan"
      lead="Landingsside for nyetablert interiørarkitekt Studio Lakayan, bygget på Gridsome og Sanity."
      image="/assets/images/thumbs/studio-lakayan.png"
      url="https://lakayan.no"
      link="lakayan.no"
      year="2021"
      :tags="['Vue', 'Gridsome', 'Sanity']"
    />
    <ProjectItem
      title="Bransjen"
      lead="Portfolio for designbyrået Bransjen, bygget på Gridsome og Sanity."
      image="/assets/images/thumbs/bransjen.png"
      url="https://bransjen.no"
      link="bransjen.no"
      slug="bransjen"
      year="2021"
      :tags="['Vue', 'Gridsome', 'Sanity']"
    />
    <ProjectItem
      title="Renate Thor"
      lead="Portfolio for illustratør Renate Thor, bygget på Vue/Nuxt og Sanity."
      image="/assets/images/thumbs/renate-thor.png"
      url="https://renatethor.com"
      link="renatethor.com"
      year="2020"
      :tags="['Vue', 'Nuxt', 'Sanity']"
    />
    <ProjectItem
      title="Urdal"
      lead="Portfolio for designer og journalist Thea Urdal, bygget på Vue/Nuxt og Sanity."
      image="/assets/images/thumbs/urdal.png"
      url="https://theaurdal.com"
      link="theaurdal.com"
      slug="urdal"
      year="2020"
      :tags="['Vue', 'Nuxt', 'Sanity']"
    />
    <ProjectItem
      title="Bergesenstiftelsen"
      lead="Nettside for Bergesenstiftelsen med søknadsveiledning og filtrerbar oversikt over stiftelsens tildelinger, bygget på Vue/Nuxt og Craft CMS."
      image="/assets/images/thumbs/bergesenstiftelsen.png"
      url="https://bergesenstiftelsen.no"
      link="bergesenstiftelsen.no"
      year="2020"
      :tags="['Vue', 'Nuxt', 'Craft CMS']"
    />
    <ProjectItem
      title="IMKHiO"
      lead="Nettside for KHiOs avdeling for interiørarkitektur og møbeldesign med studentprosjekter og nyheter om hva som skjer på avdelingen, bygget på Craft CMS."
      image="/assets/images/thumbs/imkhio.png"
      url="https://imkhio.no"
      link="imkhio.no"
      year="2020"
      :tags="['Craft CMS']"
    />
    <ProjectItem
      title="Balansemerket"
      lead="Ressursside med tiltak for et trygt kulturliv, bygget på Vue/Nuxt og Craft CMS."
      image="/assets/images/thumbs/balansemerket.png"
      url="https://balansemerket.no"
      link="balansemerket.no"
      year="2019"
      :tags="['Vue', 'Nuxt', 'Craft CMS']"
    />
    <ProjectItem
      title="Chateau Neuf"
      lead="Nettside for Det Norske Studentersamfund, med arrangementskalender, utleie og info for frivillige."
      image="/assets/images/thumbs/neuf.png"
      url="https://neuf.no"
      link="neuf.no"
      year="2019"
      :tags="['React', 'Gatsby', 'Wordpress']"
    />
    <ProjectItem
      title="Aller Concept Store"
      lead="Nettside for Aller Concept Store, bygget på Vue og Craft CMS. Laget i samarbeid med HyperRedInk."
      image="/assets/images/thumbs/aller-concept-store.png"
      url="https://allerconceptstore.no"
      link="allerconceptstore.no"
      year="2019"
      :tags="['Vue', 'Craft CMS']"
    />
    <!--<ProjectItem
      title="Dorna Lakayan"
      lead="Portfolio for designer Dorna Lakayan, bygget på Vue/Nuxt og Craft CMS."
      image="/assets/images/thumbs/dorna.png"
      url="https://dorna.no"
      link="dorna.no"
      year="2019"
      :tags="['Vue', 'Nuxt', 'Craft CMS']"
    />-->
  </section>
</template>

<script>
import ProjectItem from "~/components/projects/ProjectItem";

export default {
  components: {
    ProjectItem,
  },
};
</script>
