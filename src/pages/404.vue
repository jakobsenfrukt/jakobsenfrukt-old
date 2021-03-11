<template>
  <Layout>
    <main class="notfound">
      <section>
        <h1>404: Ånei! Finner ikke siden!</h1>
        <p class="lead">Hva har du gjort nå, da? Dette kan umulig være JF&amp;G sin feil, ettersom profesjonelle webdesignere ikke tukler det til slik som dette.</p>
      </section>
      <section class="info">
        <h2>Hva betyr egentlig 404?</h2>
        <p>En nettside er egentlig bare en gruppe filer som bor sammen på et webhotell, også kjent som en server, og en server er egentlig bare en datamaskin.</p>
        <p>Når du skriver inn en URL, for eksempel "jakobsenfrukt.no", i nettleseren din, sender din datamaskin en forespørsel til den andre datamaskinen om å få se filene som bor under det aktuelle navnet.</p>
        <p>Noen ganger klarer ikke datamaskiner å behandle slike forespørsler riktig. Istedenfor å få se filene du ba om får du da en feilkode. Det finnes mange forskjellige feilkoder, og tallene sier noe om hva feilen er.</p>
        <p>404-feilkoden betyr at serveren ikke klarte å finne filen. Det kommer som oftest av én av disse årsakene: Enten fordi URLen ikke ble skrevet inn riktig, eller fordi du klikket på en lenke til en fil som har blitt slettet eller fått nytt navn.</p>
      </section>
      <p>&rarr; <a href="/">Gå til forsiden</a></p>
    </main>  
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Om'
  }
}
</script>
