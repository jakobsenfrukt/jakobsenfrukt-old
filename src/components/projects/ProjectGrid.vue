<template>
  <section class="project-grid">
    <!--<ProjectItem
      title="Villbrygg"
      lead="Nettside for Villbrygg."
      image="/assets/images/thumbs-test/knutholmen.jpg"
      year="2022"
      :tags="['Vue', 'Gridsome', 'Sanity']"
      ongoing
    />-->
    <ProjectItem
      title="Arkitektskap"
      lead="Nettside for arkitektkontoret Arkitektskap, laget i samarbeid med designer Eivind Platou i Handverk."
      image="/assets/images/thumbs-test/arkitektskap.jpg"
      year="2022"
      :tags="['Vue', 'Gridsome', 'Sanity']"
    />
    <ProjectItem
      title="Knutholmen"
      lead="Nettside for det familiedrevne hotellet Knutholmen i Kalvåg."
      image="/assets/images/thumbs-test/knutholmen.jpg"
      year="2022"
      :tags="['Vue', 'Gridsome', 'Sanity']"
    />
    <ProjectItem
      title="Typografiske begreper illustrert"
      lead="Nettside for utstillingen med samme navn på Grafill, kuratert av kunstner og designer Ane Thon Knutsen."
      image="/assets/images/thumbs-test/typografi.jpg"
      year="2022"
      :tags="['Vue', 'Gridsome', 'Sanity']"
    />
    <ProjectItem
      title="Ørseng Interiørarkitektur"
      lead="Nettside og identitet for Ørseng Interiørarkitektur."
      image="/assets/images/thumbs-test/orseng.jpg"
      url="https://orseng.no"
      link="orseng.no"
      year="2021"
      :tags="['Vue', 'Gridsome', 'Sanity']"
      background="pink"
      color="red"
    />
    <ProjectItem
      title="All Ears"
      lead="Nettside for musikkfestivalen All Ears, laget i samarbeid med designer Rune Mortensen."
      image="/assets/images/thumbs-test/allears.jpg"
      url="https://all-ears.no"
      link="all-ears.no"
      year="2021"
      :tags="['Vue', 'Gridsome', 'Sanity']"
    />
    <ProjectItem
      title="Gyldendal"
      lead="Design og illustrasjoner til Gyldendals digitale læremiddel Smart Øving."
      image="/assets/images/thumbs-test/knutholmen.jpg"
      year="2020"
      :tags="['React', 'Framer', 'Illustrator']"
      ongoing
    />
    <!--<ProjectItem
      title="Studio Lakayan"
      lead="Landingsside for nyetablert interiørarkitekt Studio Lakayan, bygget på Gridsome og Sanity."
      image="/assets/images/thumbs-test/knutholmen.jpg"
      url="https://lakayan.no"
      link="lakayan.no"
      year="2021"
      :tags="['Vue', 'Gridsome', 'Sanity']"
    />-->
    <ProjectItem
      title="Bransjen"
      lead="Nettside for designstudioet Bransjen."
      image="/assets/images/thumbs-test/bransjen.jpg"
      url="https://bransjen.no"
      link="bransjen.no"
      slug="bransjen"
      year="2021"
      :tags="['Vue', 'Gridsome', 'Sanity']"
    />
    <ProjectItem
      title="Renate Thor"
      lead="Fargerik prosjektportefølje for illustratør Renate Thor."
      image="/assets/images/thumbs-test/renate.jpg"
      url="https://renatethor.com"
      link="renatethor.com"
      year="2020"
      :tags="['Vue', 'Nuxt', 'Sanity']"
    />
    <ProjectItem
      title="Urdal"
      lead="Portfolio for designer og journalist Thea Urdal, som ble tildelt diplom i Visueltkonkurransen 2021."
      image="/assets/images/thumbs-test/urdal.jpg"
      url="https://theaurdal.com"
      link="theaurdal.com"
      slug="urdal"
      year="2020"
      :tags="['Vue', 'Nuxt', 'Sanity']"
    />
    <ProjectItem
      title="Bergesenstiftelsen"
      lead="Nettside for Bergesenstiftelsen med søknadsveiledning og filtrerbar oversikt over stiftelsens tildelinger."
      image="/assets/images/thumbs-test/bergesen.jpg"
      url="https://bergesenstiftelsen.no"
      link="bergesenstiftelsen.no"
      year="2020"
      :tags="['Vue', 'Nuxt', 'Craft CMS']"
    />
    <!--<ProjectItem
      title="NY"
      lead="Nettside for frisørsalongen NY."
      image="/assets/images/thumbs-test/knutholmen.jpg"
      url="https://nynyny.no"
      link="nynyny.no"
      year="2020"
      :tags="['Vue', 'Gridsome', 'Sanity']"
    />-->
    <ProjectItem
      title="IMKHiO"
      lead="Nettside for KHiOs avdeling for interiørarkitektur og møbeldesign med studentprosjekter og nyheter om hva som skjer på avdelingen."
      image="/assets/images/thumbs-test/imkhio.jpg"
      url="https://imkhio.no"
      link="imkhio.no"
      year="2020"
      :tags="['JQuery', 'Craft CMS']"
    />
    <ProjectItem
      title="Balansemerket"
      lead="Ressursside for Balansemerket, et tiltak fra organisasjonen Balansekunst, med mål om å bidra til et tryggere kulturliv."
      image="/assets/images/thumbs-test/balanse.jpg"
      url="https://balansemerket.no"
      link="balansemerket.no"
      year="2019"
      :tags="['Vue', 'Nuxt', 'Craft CMS']"
    />
    <!--<ProjectItem
      title="Chateau Neuf"
      lead="Nettside for Det Norske Studentersamfund, med arrangementskalender, utleie og info for frivillige."
      image="/assets/images/thumbs-test/knutholmen.jpg"
      url="https://neuf.no"
      link="neuf.no"
      year="2019"
      :tags="['React', 'Gatsby', 'Wordpress']"
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
