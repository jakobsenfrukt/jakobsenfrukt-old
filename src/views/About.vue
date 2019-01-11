<template>
  <main class="about">
    <section>
      <span class="suphead">Om JF&G</span>
      <p>JF&amp;G spesialiserer seg på å lage nettsider for små og mellomstore bedrifter, men gjør også trykksaker, visuell identitet, illustrasjon, og andre kreative oppdrag.</p>
      <p>JF&amp;G leverer fullstendige nettsider, og gjør vanligvis all frontendutvikling selv. Å jobbe direkte med kode som et håndverk er en viktig del av designprosessen. Du finner kodeprosjektene på <a href="https://github.com/jakobsenfrukt">GitHub</a>.</p>
      <p>JF&amp;G er et enkvinnes designstudio som ble startet og drives av poteten <a href="https://elisejakob.no">Elise</a>, men samarbeider med en rekke andre flinke folk i <a href="https://bransjen.no">Bransjen</a>, <a href="https://jonasbraathen.no">Braathens Nettveveri</a>, etc.</p>
    </section>
    <section>
      <span class="suphead">Om Elise</span>
      <p>Poteten Elise er utdannet fra <a href="http://khio.no/">KHiO</a> med en master i grafisk design og illustrasjon. Hun var tidligere ansatt i digitalbyrået <a href="https://netlife.com">Netlife</a>, der hun jobbet med kunder som Telenor, UiO, Kreftforeningen, og DiBK. Høsten 2018 bestemte hun seg for å satse fullt og helt på egen praksis, og JF&amp;G tok form.</p>
      <p>Elise har også undervist i webdesign på <a href="http://khio.no/">KHiO</a>, sittet i juryen i <a href="https://www.gulltaggen.no/">Gulltaggen</a>, og vunnet pris i <a href="https://www.grafill.no/visuelt/vinnere/2015/digital-design/studentarbeid/">Visuelt</a>. Elise har skrevet denne teksten selv i tredjeperson, og {{ elise[Math.floor(Math.random() * elise.length)] }}.</p>
    </section>
    <section>
      <span class="suphead">Om denne siden</span>
      <p>Denne nettsiden er bygget med Javascript-rammeverket <a href="https://vuejs.org/">Vue</a>. Den bruker fontene <a href="https://www.myfonts.com/fonts/itc/clearface/bold/">ITC Clearface Bold</a> og <a href="https://fonts.google.com/specimen/Roboto+Mono">Roboto Mono Regular</a>. Nettsiden er kontinuerlig under utvikling, for på internett trenger ingenting å sies helt ferdig.</p>
    </section>
  </main>
</template>


<script>
export default {
  name: 'about',
  data: function() {
    return {
      elise: ["er svært komfortabel med å skryte av seg selv", "følte seg overhodet ikke dum da hun gjorde det", "er nå usikker på om hun har en personlighetsforstyrrelse"]
    }
  },
}
</script>

<style scoped lang="scss">
@import '../css/variables.scss';
.about {
  font-size: 1.24rem;
}
section {
  position: relative;
  margin-bottom: 1.68rem;
}
.suphead {
  display: block;
  font-family: $monospace;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.8rem;
  margin: 3.6rem 0 1.2rem;
}
</style>