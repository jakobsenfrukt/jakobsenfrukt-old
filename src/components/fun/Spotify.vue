<template>
  <div class="spotify">
    <div class="image">
      <img src="/assets/images/fun/spotify-preview.png" />
      <div class="play-sign"></div>
    </div>
    <div class="text">
      <strong>Jakobsen Frukt &amp; Grønt</strong>
      <span>Elise Jakobsen</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spotify {
  width: 18rem;
  background: linear-gradient(var(--color-green), #111);
  border-radius: calc(var(--border-radius) * 4);
  color: var(--color-white);
  position: relative;
  font-size: 12px;

  display: flex;
  align-items: center;

  .image {
    width: 4rem;
    height: 4rem;
    background: hotpink;
    border-top-left-radius: calc(var(--border-radius) * 4);
    border-bottom-left-radius: calc(var(--border-radius) * 4);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      object-fit: cover;
    }
  }
  .play-sign {
    border: 1px solid #fff;
    background: rgba(0, 0, 0, 0.4);
    width: 2rem;
    height: 2rem;
    border-radius: 4rem;
    position: relative;
    &:after {
      content: "";
      display: block;
      width: 0;
      border-bottom: 0.75rem solid white;
      border-left: 0.4rem solid transparent;
      border-right: 0.4rem solid transparent;
      transform: rotate(90deg) translate(-50%, 40%);
      position: absolute;
      top: 50%;
      left: 50%;
    }
  }
  .text {
    padding: 0.3rem 0.6rem;
  }
  strong {
    display: block;
  }
}
</style>
