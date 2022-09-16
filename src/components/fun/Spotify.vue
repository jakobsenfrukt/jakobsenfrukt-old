<template>
  <div class="spotify">
    <div class="image">
      <img src="/assets/images/fun/spotify-preview.png" />
      <div class="play-sign"></div>
    </div>
    <div class="text">
      <strong>Jakobsen Frukt &amp; Grønt</strong>
      <span>Elise Jakobsen</span>
      <div class="play-bar">
        <div class="nav prev"><div class="icon"></div></div>
        <div class="bar"></div>
        <div class="nav next"><div class="icon"></div></div>
      </div>
    </div>
    <a
      href="https://open.spotify.com/playlist/4CBnVWhRQciXLNskOuQgPV?si=4073bdfd11fa49ff"
      target="_blank"
      >Åpne spillelista</a
    >
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
    width: 4.8rem;
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
      width: 100%;
      height: 100%;
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
  .play-bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    margin-top: 0.6rem;
    .bar {
      width: 100%;
      height: 3px;
      background: rgba(255, 255, 255, 0.6);
      margin: 0 3px;
    }
    .nav {
      width: 1em;
      height: 0.7em;

      .icon {
        border-bottom: 0.6em solid white;
        border-left: 0.4em solid transparent;
        border-right: 0.4em solid transparent;
      }

      &.next {
        border-right: 2px solid #fff;
        .icon {
          transform: rotate(90deg);
        }
      }
      &.prev {
        border-left: 2px solid #fff;
        .icon {
          transform: rotate(-90deg);
        }
      }
    }
  }
  .text {
    width: 100%;
    padding: 0.3rem 0.6rem;
  }
  strong {
    display: block;
  }
  a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
  transition: all 0.2s ease-in-out;
  &:hover {
    //transform: translateY(-6px);
    //border: 3px solid var(--color-link);
    box-shadow: 0 0 1rem var(--color-shadow), 0 0 0 2px var(--color-green);
  }
}
</style>
