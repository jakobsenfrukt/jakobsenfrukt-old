<template>
  <div id="app">
    <div class="site-nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'css/main.scss';
</style>
