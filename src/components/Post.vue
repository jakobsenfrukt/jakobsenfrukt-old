<template>
  <article class="post" :id="id">
    <div class="text">
      <h2>{{ title }}</h2>
      <p class="lead">{{ lead }}</p>
      <p>{{ body }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Post',
  props: {
    title: String,
    lead: String,
    body: String,
    id: String,
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/variables.scss';
.post {
  max-width: 36rem;
  position: relative;
  padding-bottom: 3rem;
  border-bottom: 1px solid $color-black;
  margin-bottom: 3rem;

  h2 {
    font-size: 3rem;
  }
}
</style>
