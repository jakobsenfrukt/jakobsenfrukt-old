<template>
  <section class="project-archive">
    <h2 class="project-archive-heading">
      Arkivet
      <span
        >&mdash; prosjekter som er eldre enn 5 år, eller ikke lenger
        online</span
      >
    </h2>
    <div class="project-grid">
      <ProjectItem
        title="Aller Concept Store"
        lead="Nettside for Aller Concept Store, bygget på Vue og Craft CMS. Laget i samarbeid med HyperRedInk."
        image="/assets/images/projects/test/thumb.png"
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
      <ProjectItem
        title="Marcus & Martinus"
        lead="Nettside for artist Marcus & Martinus, bygget på Vue/Nuxt og Craft CMS."
        image="/assets/images/thumbs/marcusandmartinus.png"
        year="2019"
        :tags="['Vue', 'Nuxt', 'Craft CMS']"
      />
      <ProjectItem
        title="Julie Aida v2.0"
        lead="Portfolio for kunstner og illustratør Julie Aida, bygget på Craft CMS."
        image="/assets/images/thumbs/julieaida.png"
        url="https://julieaida.com"
        year="2018"
        :tags="['Craft CMS']"
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
        title="Julie Aida v1.0"
        lead="Portfolio for kunstner og illustratør Julie Aida, bygget på Craft CMS."
        image="/assets/images/thumbs/julieaida-v1.png"
        url="https://julieaida.com"
        year="2017"
        :tags="['Craft CMS']"
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
      <ProjectItem
        title="Matilda Karlström"
        lead="Portfolio for klesdesigner Matilda Karlström, bygget på Craft CMS."
        image="/assets/images/thumbs/matilda.png"
        url="http://matildakarlstrom.com/"
        link="matildakarlstrom.com"
        year="2016"
        :tags="['JQuery', 'Craft CMS']"
      />
      <ProjectItem
        title="Designavgang 2015"
        lead="Nettside for avgangsutstillingen til KHiOs designavdeling, våren 2015."
        image="/assets/images/thumbs/designavgang.png"
        year="2015"
        :tags="['JQuery', 'Stacey CMS']"
      />
      <ProjectItem
        title="Live Space"
        lead="Nettside for KHiOs avdeling for interiørarkitektur og møbeldesign, bygget på Craft CMS."
        image="/assets/images/thumbs/livespace.png"
        year="2015"
        :tags="['JQuery', 'Craft CMS']"
      />
      <ProjectItem
        title="Iselin Kleiva"
        lead="Portfolio for kunstner Iselin Kleiva, bygget på Wordpress."
        image="/assets/images/thumbs/iselin.png"
        url="http://iselinkleiva.com/"
        link="iselinkleiva.com"
        year="2015"
        :tags="['JQuery', 'Wordpress']"
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
        :tags="['Wordpress']"
      />
      <ProjectItem
        title="Procrastination"
        lead="Nettbasert spill bygget med javascript-rammeverket Phaser."
        image="/assets/images/thumbs/procrastination.png"
        url="https://procrastination.elisejakob.com/"
        link="procrastination.elisejakob.com"
        year="2014"
        :tags="['JQuery', 'Phaser.io']"
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
import ProjectItem from "~/components/projects/ProjectItem";

export default {
  components: {
    ProjectItem,
  },
};
</script>
