<template>
  <div class="notfound">
    <main>
      <section>
        <h1>404: Ånei! Denne siden finnes ikke!</h1>
        <p>Hva har du gjort nå, da? Dette kan umulig være JF&amp;G sin feil, ettersom profesjonelle webdesignere ikke tukler det til slik som dette. Uansett, håper denne {{ savior[Math.floor(Math.random() * savior.length)].name }} kan gjøre det godt igjen.</p>
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
  color: $color-red;
  font-size: 1.8rem;
}
p {
  font-size: 1.2rem;
}
.day h1 {
  color: $color-black;
}
</style>