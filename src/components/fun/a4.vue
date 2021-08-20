<template>
  <div class="a4">
    <span>Hvorfor kan ikke jeg spise</span>
    <span>når A4 format</span>
  </div>
</template>

<style lang="scss" scoped>
.a4 {
  background: var(--color-white);
  color: var(--color-black);
  box-shadow: var(--box-shadow);
  position: relative;
  width: 100%;
  padding-top: 130%;

  span {
    position: absolute;
    font-family: var(--font-serif);
    display: block;
    width: 100%;
    text-align: center;
    font-size: 8vw;
    line-height: 1.2;
    padding: 1rem;
    &:nth-of-type(odd) {
      top: 0;
    }
    &:nth-of-type(even) {
      bottom: 0;
    }
  }
}
</style>