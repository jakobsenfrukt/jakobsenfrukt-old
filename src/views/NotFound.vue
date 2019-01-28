<template>
  <div class="notfound">
    <main>
      <section>
        <h1>404: Ånei! Denne siden finnes ikke!</h1>
        <p class="lead">Hva har du gjort nå, da? Dette kan umulig være JF&amp;G sin feil, ettersom profesjonelle webdesignere ikke tukler det til slik som dette. <!--Uansett, håper denne {{ savior[Math.floor(Math.random() * savior.length)].name }} kan gjøre det godt igjen.--></p>
      </section>
      <section class="info">
        <h2>Hva betyr egentlig 404?</h2>
        <p>En nettside er egentlig bare en gjeng med filer som bor sammen på et webhotell, også kjent som en server, og en server er egentlig bare en datamaskin.</p>
        <p>Når du skriver inn en URL, for eksempel "jakobsenfrukt.no", i nettleseren din, sender din datamaskin en forespørsel til den andre datamaskinen om å få se filene som bor under det aktuelle navnet.</p>
        <p>Som du sikker har erfart tidligere, er det sjelden at datamaskiner gjør allting riktig hele tiden. Istedenfor å få se filene du ba om, får du da en feilkode. Det finnes mange forskjellige feilkoder, og tallene sier noe om hva feilen er.</p>
        <p>404-feilkoden betyr at serveren ikke klarte å finne filen. Det kommer som oftest av én av disse årsakene: Enten fordi URLen ikke ble skrevet inn riktig, eller fordi du klikket på en lenke til en fil som har blitt slettet eller fått nytt navn.</p>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  name: 'notfound',
  data: function() {
    return {
      savior: [
        {
          name: 'glade bamsen'
        },
        {
          name: 'tjukke prinsen'
        }
      ]
    }
  },
}
</script>

<style scoped lang="scss">
@import '../css/variables.scss';
h1 {
  font-size: 1.8rem;
  color: $color-red;
}
.day {
  h1 {
    color: $color-black;
  }
}
</style>