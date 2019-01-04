<template>
  <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/YCjsPyIvdsM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'Soup',
}
</script>

<style scoped lang="scss">
.video {
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>
