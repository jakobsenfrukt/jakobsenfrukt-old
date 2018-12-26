<template>
  <div class="home">
    <main>
      <div class="dialogue">
        <p class="lead">Jakobsen Frukt &amp; Grønt er et hyggelig, lite designstudio i Oslo. Vi spesialiserer oss på å lage nettsider for små og mellomstore bedrifter, men gjør også trykksaker, visuell identitet, illustrasjon, og andre kreative oppdrag.</p>
        <button @click="say('vet ikkeno')">Hvem er "vi"?</button>
        <button @click="say('ok')">Vis meg no greier</button>
      </div>
    </main>
    <Contact />
  </div>
</template>

<script>
import Contact from '@/components/Contact.vue'

export default {
  name: 'home',
  components: {
    Contact
  },
  data: function() {
    return {
      mi: 'yo'
    }
  },
  methods: {
    say: function(message) {
      alert(message);
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  position: relative;
}
.portal {
  width: 3rem;
  height: 3rem;
  background: white;
  margin: 0 auto;
}
</style>
