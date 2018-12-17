<template>
  <div class="home">
    <main>
      <p>
        Hei! Hva bringer deg hit?
      </p>
      <button>Ikkeno spess</button><button>Jeg vil bare snakke litt</button>
    </main>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style lang="scss" scoped>
p {
	font-size: 1rem;
}
p.label {
	text-align: right;
  font-size: 0.8rem;
  transform: rotate(-3deg);
  margin: 1em 0;
  color: yellow;
  opacity: 0.6;
}
</style>
