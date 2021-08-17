<template>
  <div class="box">
    <div class="box-heading">{{ heading }}</div>
    <div class="box-text">{{ text }}</div>
    <div class="box-footer">{{ footer }}</div>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    text: String,
    footer: String
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: grid;
  grid-template-rows: 2rem 1fr 2rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  min-height: 20rem;
  padding: .8rem 1rem;

  border-radius: .6rem;
  background: var(--color-green);
  color: var(--color-background);
  box-shadow: 0 0 1rem 6px rgba(0, 0, 0, .4);

  &-heading, &-footer {
    font-weight: 700;
    font-size: .8rem;
    text-transform: uppercase;
    letter-spacing: .24rem;
  }
  &-heading {
    margin: 0 0 auto 0;
  }
  &-text {
    font-family: var(--font-serif);
    font-weight: 300;
    font-size: 2rem;
    line-height: 1.2;
  }

  &:nth-of-type(2) {
    border-radius: .2rem;
    background: var(--color-yellow);
    color: var(--color-background);
  }

  &:nth-of-type(3) {
    border-radius: 0;
    background: var(--color-background);
    color: var(--color-text);
    border: 1px solid var(--color-text);
    box-shadow: 0 0 0 5px var(--color-background), 0 0 0 6px var(--color-text), 0 0 1rem 6px rgba(0, 0, 0, .4);

    &-heading, &-footer {
      font-weight: 700;
      font-size: .8rem;
      text-transform: uppercase;
    }
    &-text {
      font-family: var(--font-serif);
      font-weight: 300;
      font-size: 2rem;
      line-height: 1.2;
    }
  }
}
</style>