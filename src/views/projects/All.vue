<template>
  <div class="projects">
    <main>
      <Project
        image="http://3.bp.blogspot.com/_RVLJm9IHkZk/TGhhnp1e04I/AAAAAAAAB7I/--g9QmK6Ong/s640/POMONA.gif"
        description="Nettside for Bransjen" 
      />
      <Project
        image="http://cdn.shopify.com/s/files/1/0157/3938/products/antonio-escandell-oranges-crate-label_1_grande.jpeg?v=1526439514"
        description="Ruters digitale bærekraftstrategi"
      />
      <Project
        image="https://images-na.ssl-images-amazon.com/images/I/41Qs-LGObXL.jpg"
        description="Ruters digitale bærekraftstrategi og andre ripsbusker"
      />
      <Project
        image="http://cdn.shopify.com/s/files/1/0157/3938/products/delicious-fruits-apples-crate-label_1_grande.jpeg?v=1526439329"
        description="Ruters digitale bærekraftstrategi og andre ripsbusker"
      />
      <Project
        image="https://images-na.ssl-images-amazon.com/images/I/A1Gjhi5pfIL._SX425_.jpg"
        description="Ruters digitale bærekraftstrategi og andre ripsbusker"
      />
    </main>
  </div>
</template>

<script>
import Project from '@/components/Project.vue'

export default {
  name: 'all',
  components: {
    Project
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/variables.scss';
  .projects {
    position: relative;

    .project {
      display: inline-block;
      vertical-align: middle;
      margin: 0 2rem 3rem 0;

      /deep/ img {
        max-width: 100%;
      }

      /deep/ p {
        max-width: 16.8rem;
      }
    }

    @media (max-width: $sm) {
      .project {
        margin: 0 1rem 1rem;
      }
    }
  }
</style>
