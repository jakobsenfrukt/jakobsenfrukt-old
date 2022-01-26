<template>
  <Layout class="project">
    <section class="project-hero">
      <div class="project-mainimage">
        <g-image
          alt="Mockup av en monitor med Bransjen sin nettside på skjermen"
          src="/assets/images/projects/bransjen/top.png"
        />
      </div>
      <ProjectInfo
        title="Bransjen"
        year="2021"
        lead="Nettside for designstudioet Bransjen, bygget på Gridsome og Sanity,
            og designet i samarbeid med Bransjen selv. Her får Bransjen vist
            fram sine vakre arbeider, sine mange logoer, og siste bransjenytt."
        url="https://bransjen.no"
        link="bransjen.no"
        :tags="['Vue', 'Gridsome', 'Sanity', 'Samarbeid']"
      />
    </section>

    <section class="project-gallery">
      <div class="project-gallery-column">
        <figure class="project-image">
          <g-image
            alt="Example image"
            src="/assets/images/projects/bransjen/prosjekter.jpg"
          />
        </figure>
        <figure class="project-image">
          <g-image
            alt="Example image"
            src="/assets/images/projects/bransjen/div.jpg"
          />
        </figure>
      </div>

      <div class="project-gallery-row">
        <figure class="project-image">
          <g-image
            alt="Example image"
            src="/assets/images/projects/bransjen/div1.jpg"
          />
        </figure>
        <figure class="project-image">
          <g-image
            alt="Example image"
            src="/assets/images/projects/bransjen/div2.jpg"
          />
        </figure>
        <figure class="project-image">
          <g-image
            alt="Example image"
            src="/assets/images/projects/bransjen/div3.jpg"
          />
        </figure>
      </div>

      <figure class="project-image">
        <g-image
          alt="Example image"
          src="/assets/images/projects/bransjen/top2.png"
          class="no-shadow"
        />
      </figure>
    </section>
  </Layout>
</template>

<script>
import ProjectInfo from "@/components/projects/ProjectInfo";

export default {
  components: {
    ProjectInfo,
  },
  metaInfo: {
    title: "Testprosjekt",
  },
};
</script>
