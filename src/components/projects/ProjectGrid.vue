<template>
  <section class="project-grid">
    <ProjectItem
      title="Ørseng Interiørarkitektur"
      lead="Nettside for Ørseng Interiørarkitektur."
      image="/assets/images/thumbs/designavgang.png"
      url="https://orseng.no"
      link="orseng.no"
      year="2021"
    />
    <ProjectItem
      title="All Ears"
      lead="Nettside for musikkfestivalen All Ears."
      image="/assets/images/thumbs/designavgang.png"
      url="https://all-ears.no"
      link="all-ears.no"
      year="2021"
    />
    <ProjectItem
      title="Studio Lakayan"
      lead="Landingsside for nyetablert interiørarkitekt Studio Lakayan, bygget på Gridsome og Sanity."
      image="/assets/images/thumbs/studio-lakayan.png"
      url="https://lakayan.no"
      link="lakayan.no"
      year="2021"
    />
    <ProjectItem
      title="Bransjen"
      lead="Portfolio for designbyrået Bransjen, bygget på Gridsome og Sanity."
      image="/assets/images/thumbs/bransjen.png"
      url="https://bransjen.no"
      link="bransjen.no"
      slug="bransjen"
      year="2021"
    />
    <ProjectItem
      title="Renate Thor"
      lead="Portfolio for illustratør Renate Thor, bygget på Vue/Nuxt og Sanity."
      image="/assets/images/thumbs/renate-thor.png"
      url="https://renatethor.com"
      link="renatethor.com"
      year="2021"
    />
    <ProjectItem
      title="Thea Urdal"
      lead="Portfolio for designer og journalist Thea Urdal, bygget på Vue/Nuxt og Sanity."
      image="/assets/images/thumbs/urdal.png"
      url="https://theaurdal.com"
      link="theaurdal.com"
      slug="urdal"
      year="2020"
    />
    <ProjectItem
      title="Gyldendal"
      lead="Design og illustrasjoner til Gyldendals digitale læremiddel Smart Øving."
      image="/assets/images/thumbs/gyldendal.png"
      year="2020"
    />
    <ProjectItem
      title="Bergesenstiftelsen"
      lead="Nettside for Bergesenstiftelsen med søknadsveiledning og filtrerbar oversikt over stiftelsens tildelinger, bygget på Vue/Nuxt og Craft CMS."
      image="/assets/images/thumbs/bergesenstiftelsen.png"
      url="https://bergesenstiftelsen.no"
      link="bergesenstiftelsen.no"
      year="2020"
    />
    <ProjectItem
      title="IMKHiO"
      lead="Nettside for KHiOs avdeling for interiørarkitektur og møbeldesign med studentprosjekter og nyheter om hva som skjer på avdelingen, bygget på Craft CMS."
      image="/assets/images/thumbs/imkhio.png"
      url="https://imkhio.no"
      link="imkhio.no"
      year="2020"
    />
    <ProjectItem
      title="Balansemerket"
      lead="Ressursside med tiltak for et trygt kulturliv, bygget på Vue/Nuxt og Craft CMS."
      image="/assets/images/thumbs/balansemerket.png"
      url="https://balansemerket.no"
      link="balansemerket.no"
      year="2019"
    />
    <ProjectItem
      title="Chateau Neuf"
      lead="Nettside for Det Norske Studentersamfund, med arrangementskalender, utleie og info for frivillige."
      image="/assets/images/thumbs/neuf.png"
      url="https://neuf.no"
      link="neuf.no"
      year="2019"
    />
    <ProjectItem
      title="Aller Concept Store"
      lead="Nettside for Aller Concept Store, bygget på Vue og Craft CMS. Laget i samarbeid med HyperRedInk."
      image="/assets/images/thumbs/aller-concept-store.png"
      url="https://allerconceptstore.no"
      link="allerconceptstore.no"
      year="2019"
    />
    <ProjectItem
      title="Dorna Lakayan"
      lead="Portfolio for designer Dorna Lakayan, bygget på Vue/Nuxt og Craft CMS."
      image="/assets/images/thumbs/dorna.png"
      url="https://dorna.no"
      link="dorna.no"
      year="2019"
    />
    <ProjectItem
      title="Ruter Bærekraft"
      lead="Online versjon av Ruters bærekrafthåndbok."
      image="/assets/images/thumbs/ruter-barekraft.png"
      url="https://barekraft.ruter.no/"
      link="barekraft.ruter.no"
      year="2018"
    />
    <ProjectItem
      title="Kit Wan Studios"
      lead="Landingsside for den aller første kolleksjonen til motedesigner Kit Wan."
      image="/assets/images/thumbs/kitwan.png"
      url="https://kitwanstudios.com"
      link="kitwanstudios.com"
      year="2016"
    />
    <ProjectItem
      title="Ida Christensen"
      lead="Portfolio for grafisk designer Ida Christensen, bygget i ren HTML og CSS."
      image="/assets/images/thumbs/ida.png"
      url="https://idachristensen.no"
      link="idachristensen.no"
      year="2016"
    />
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
