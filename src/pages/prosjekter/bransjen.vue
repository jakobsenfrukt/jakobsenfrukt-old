<template>
  <Layout class="project">
    <section class="project-hero">
      <div class="project-mainimage">
        <g-image alt="Mockup av en monitor med Bransjen sin nettside på skjermen" src="/assets/images/projects/bransjen/top.png" />
      </div>
      <div class="project-info">
        <h1 class="project-title">Bransjen</h1>
        <span class="project-year">2021</span>
        <p class="project-lead">En tekst om prosjektet</p>
        <div class="project-link">
          <g-link to="https://bransjen.no">bransjen.no &#8599;</g-link>
        </div>
      </div>
    </section>
    
    <section class="project-gallery">
      <div class="project-gallery-column">
        <figure class="project-image">
          <g-image alt="Example image" src="/assets/images/projects/bransjen/prosjekter.jpg" />
        </figure>
        <figure class="project-image">
          <g-image alt="Example image" src="/assets/images/projects/bransjen/div.jpg" />
        </figure>
      </div>

      <div class="project-gallery-row">
        <figure class="project-image">
          <g-image alt="Example image" src="/assets/images/projects/bransjen/div1.jpg" />
        </figure>
        <figure class="project-image">
          <g-image alt="Example image" src="/assets/images/projects/bransjen/div2.jpg" />
        </figure>
        <figure class="project-image">
          <g-image alt="Example image" src="/assets/images/projects/bransjen/div3.jpg" />
        </figure>
      </div>

      <figure class="project-image">
        <g-image alt="Example image" src="/assets/images/projects/bransjen/top2.png" />
      </figure>
    </section>

  </Layout>
</template>


<script>
export default {
  metaInfo: {
    title: 'Testprosjekt'
  }
}
</script>
