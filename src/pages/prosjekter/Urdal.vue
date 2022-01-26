<template>
  <Layout class="project">
    <section class="project-hero">
      <div class="project-mainimage">
        <g-image
          alt="Mockup av en monitor med Urdal-nettsiden på skjermen"
          src="/assets/images/projects/urdal/01.png"
        />
      </div>
      <ProjectInfo
        title="Urdal"
        year="2021"
        lead="Nettside for designer/journalist Thea Urdal, utviklet på Nuxt og
            Sanity, og designet i samarbeid med Urdal selv. Prosjektet fikk
            diplom i Visueltkonkurransen 2021."
        url="https://theaurdal.com"
        link="theaurdal.com"
        :tags="['Vue', 'Nuxt', 'Sanity', 'Samarbeid', 'Visuelt 2021']"
      />
    </section>

    <section class="project-gallery">
      <div class="project-gallery-column">
        <figure class="project-image">
          <g-image
            alt="Example image"
            src="/assets/images/projects/urdal/02.jpg"
          />
        </figure>
        <figure class="project-image">
          <g-image
            alt="Example image"
            src="/assets/images/projects/urdal/03.jpg"
          />
        </figure>
      </div>

      <div class="quote">
        <blockquote>
          I really wanted something that blended editorial elements with
          enticing visuals; a site that managed to explain my — at times (at
          least to me) — confusing mix of journalism and design.
        </blockquote>
        <div class="quote-by">
          <a
            href="https://www.instagram.com/p/CIqSTvjJv76/"
            class="quoteby-link"
            target="_blank"
          >
            <strong>Thea Urdal</strong><br />
            på Instagram &#8599;
          </a>
        </div>
      </div>

      <div class="project-gallery-row">
        <figure class="project-image">
          <g-image
            alt="Example image"
            src="/assets/images/projects/urdal/04-sizes1.jpg"
          />
        </figure>
        <figure class="project-image">
          <g-image
            alt="Example image"
            src="/assets/images/projects/urdal/05-sizes2.jpg"
          />
        </figure>
        <figure class="project-image">
          <g-image
            alt="Example image"
            src="/assets/images/projects/urdal/06-sizes3.jpg"
          />
        </figure>
      </div>

      <div class="quote">
        <blockquote>
          Siden formidler bredden og tverrfagligheten til Thea Urdals prosjekter
          innen design og journalistikk på en inspirerende, leken og
          forfriskende måte. Typografien, fargebruk, tone of voice, animasjoner
          og grafiske elementer er vennlige, imøtekommende og gir mye energi. En
          fin og engasjerende nettside som ikke lar et rikt og ekspressivt
          uttrykk stå i veien for en god leseopplevelse.
        </blockquote>
        <div class="quote-by">
          <a
            href="https://www.grafill.no/visuelt/vinnere/2021/digital-design/egenprofilering/nettside-for-urdal"
            class="quoteby-link"
            target="_blank"
          >
            <strong>Juryens kommentar</strong><br />
            Visuelt 2021 &#8599;
          </a>
        </div>
      </div>

      <div class="project-gallery-column asymmetric">
        <figure class="project-image">
          <g-image
            alt="Example image"
            src="/assets/images/projects/urdal/07.jpg"
          />
        </figure>
        <figure class="project-image">
          <g-image
            alt="Example image"
            src="/assets/images/projects/urdal/08.jpg"
          />
        </figure>
      </div>

      <figure class="project-image">
        <g-image
          alt="Example image"
          src="/assets/images/projects/urdal/09.jpg"
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
