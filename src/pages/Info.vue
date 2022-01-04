<template>
  <Layout>
    <section>
      <h2 class="suphead">Kontakt</h2>
      <p>
        Har du et prosjekt du vil snakke om? Skriv til
        <a href="mailto:mail@jakobsenfrukt.no?subject=🍅" target="_blank"
          >mail@jakobsenfrukt.no</a
        >
        eller ta kontakt med
        <a href="https://instagram.com/jakobsenfrukt" target="_blank"
          >@jakobsenfrukt</a
        >
        på
        <a href="https://instagram.com/jakobsenfrukt" target="_blank"
          >Instagram</a
        >
        eller
        <a href="https://facebook.com/jakobsenfrukt" target="_blank"
          >Facebook</a
        >
        :)
      </p>
    </section>
    <section>
      <h2 class="suphead">Om JF&amp;G</h2>
      <p>
        Jakobsen Frukt &amp; Grønt spesialiserer seg på å lage skreddersydde
        nettsider for små og mellomstore bedrifter, men gjør også trykksaker,
        visuell identitet, illustrasjon og andre kreative oppdrag.
      </p>
      <p>
        JF&amp;G leverer fullstendige nettsider og gjør vanligvis all
        frontendutvikling selv. Å jobbe direkte med kode som et håndverk er en
        viktig del av designprosessen. Du finner kodeprosjektene på
        <a href="https://github.com/jakobsenfrukt" target="_blank">GitHub</a>.
      </p>
      <p>
        JF&amp;G er et enkvinnes designstudio som ble startet og drives av
        <a href="https://elisejakob.no" target="_blank">Elise</a>, men
        samarbeider med en rekke andre flinke folk i
        <a href="https://bransjen.no" target="_blank">Bransjen</a>,
        <a href="https://minsk.no" target="_blank">Minsk</a>,
        <a href="https://nettveveriet.no" target="_blank"
          >Braathens Nettveveri</a
        >, etc.
      </p>
    </section>
    <section>
      <h2 class="suphead">Om Elise</h2>
      <p>
        Poteten Elise vokste opp i Gartnerveien i Sarpsborg, men flyttet til
        Oslo i 2011 for å ta en master i grafisk design og illustrasjon på
        <a href="http://khio.no/" target="_blank">KHiO</a>.
      </p>
      <p>
        Hun har tidligere vært ansatt i digitalbyrået
        <a href="https://netlife.com" target="_blank">Netlife</a>, der hun
        jobbet med kunder som Telenor, Kreftforeningen og UiO. Høsten 2018
        bestemte hun seg for å satse fullt og helt på egen praksis, og JF&amp;G
        tok form.
      </p>
      <p>
        Elise har også undervist i webdesign på
        <a href="http://khio.no/" target="_blank">KHiO</a> i flere år, sittet i
        juryen i
        <a href="https://www.gulltaggen.no/" target="_blank">Gulltaggen</a>, og
        vunnet pris i
        <a
          href="https://www.grafill.no/visuelt/vinnere/2015/digital-design/studentarbeid/"
          target="_blank"
          >Visuelt</a
        >. Du kan lese intervjuer med henne i
        <a
          href="https://www.digi.no/artikler/intervju-det-virker-som-om-flere-og-flere-velger-a-bli-selvstendige-konsulenter/492265?key=ZVjvlYyO"
          target="_blank"
          >Digi</a
        >
        og
        <a
          href="https://www.kode24.no/ukas-koder/jeg-har-blitt-veldig-glad-i-vue/72025574"
          target="_blank"
          >Kode24</a
        >. Elise har skrevet denne teksten selv i tredjeperson, og
        {{ elise[Math.floor(Math.random() * elise.length)] }}.
      </p>
    </section>
    <!--<section class="list-columns">
      <ul class="list clients">
        <li class="list-heading"><h2 class="suphead">Kunder</h2></li>
        <li>Gyldendal</li>
        <li>Kunsthøgskolen i Oslo</li>
        <li>Ruter</li>
        <li>Balansekunst</li>
        <li>Universitetet i Oslo</li>
        <li>Bergesenstiftelsen</li>
        <li>Det Norske Studentersamfund</li>
        <li>Web Rebels</li>
        <li>Marcus & Martinus</li>
        <li>Aller Media</li>
      </ul>
      <ul class="list press">
        <li class="list-heading"><h2 class="suphead">Presse</h2></li>
        <li>Digi</li>
        <li>Kode24</li>
        <li>Grafill</li>
      </ul>
      <ul class="list awards">
        <li class="list-heading"><h2 class="suphead">Utmerkelser</h2></li>
        <li>Visuelt 2021: Diplom</li>
        <li>Visuelt 2019: Diplom</li>
        <li>Visuelt 2015: Gull</li>
      </ul>
    </section>-->
    <section>
      <h2 class="suphead">Om denne siden</h2>
      <p>
        Denne nettsiden er bygget med Javascript-rammeverket
        <a href="https://vuejs.org/" target="_blank">Vue</a>, med
        <a href="https://gridsome.org/" target="_blank">Gridsome</a> som statisk
        sidegenerator. Den bruker fontene
        <a
          href="https://www.myfonts.com/fonts/itc/clearface/bold/"
          target="_blank"
          >ITC Clearface Bold</a
        >
        og
        <a href="https://fonts.google.com/specimen/Roboto+Mono" target="_blank"
          >Roboto Mono Regular</a
        >. Nettsiden er kontinuerlig under utvikling, for på internett trenger
        ingenting å sies helt ferdig. På gjensyn!
      </p>
    </section>
  </Layout>
</template>

<script>
export default {
  name: "about",
  data: function() {
    return {
      elise: [
        "er svært komfortabel med å skryte av seg selv",
        "følte seg overhodet ikke dum da hun gjorde det",
        "er nå usikker på om hun har en personlighetsforstyrrelse",
        "er vanligvis svært ydmyk og beskjeden",
      ],
    };
  },
  metaInfo: {
    title: "Om",
  },
};
</script>

<style scoped lang="scss">
p {
  margin: 0 auto;
  font-family: var(--font-serif);
  font-size: 1rem;

  + p {
    text-indent: 1.8rem;
  }
}
section {
  position: relative;
  margin-bottom: 4.2rem;

  &:first-of-type {
    margin-top: 4rem;
  }
}
.list {
  list-style: none;
  &-columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-size: var(--font-size-s);
  }
  &-heading {
    list-style: none;
    padding-left: 0;
  }
}
.suphead {
  display: block;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing);
  font-size: var(--font-size-s);
  max-width: 32rem;
  margin: 0 auto 1.4rem;
}
.clients {
  ul {
    max-width: 60rem;
    margin: 0 auto;
    padding: 0;
    text-align: center;

    li {
      display: inline;
      &:not(:last-of-type):after {
        content: ", ";
      }
    }
  }
}
@media (min-width: 666px) {
  p {
    font-size: 1.24rem;
    + p {
      text-indent: 3.24rem;
    }
  }
}
</style>
