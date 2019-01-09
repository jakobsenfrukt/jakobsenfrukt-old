<template>
  <div class="soup">
    <div class="video" v-if="soup">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/rc43o6q-TqA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="soup-button" @click="soup = !soup">🥦</div>
  </div>
</template>

<script>
export default {
  name: 'Soup',
  data: function() {
    return {
      soup: false
    }
  }
}
</script>

<style scoped lang="scss">
.video iframe {
  position: fixed;
  bottom: 0;
  right: 0;
}
.soup-button {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  &:hover {
    cursor: pointer;
  }
}
</style>
