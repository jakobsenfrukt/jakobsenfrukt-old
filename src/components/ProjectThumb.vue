<template>
  <article class="project" :class="{ website: type === 'website', hidden: ishidden }" :id="id">
    <div class="project-image">
      <div class="buttons" v-if="type === 'website'">
        <div class="close" @click="ishidden = !ishidden"></div>
        <a class="maximize" v-if="link" :href="link" target="_blank"></a>
      </div>
      <router-link v-if="anchor" :to="`projects/${anchor}`">
        <picture>
          <source type="image/webp" :srcset="`${mainImage}.webp`" />
          <source type="image/png" :srcset="`${mainImage}.png`" />
          <img :src="`${mainImage}.png`" :alt="title" />
        </picture>
      </router-link>
      <picture v-else>
        <source type="image/webp" :srcset="`${mainImage}.webp`" />
        <source type="image/png" :srcset="`${mainImage}.png`" />
        <img :src="`${mainImage}.png`" :alt="title" />
      </picture>
    </div>
    <div v-if="short" class="text">
      <p>{{ short }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Project',
  props: {
    mainImage: String,
    short: String,
    title: String,
    link: String,
    type: String,
    anchor: String,
    id: String,
  },
  data: function() {
    return {
      ishidden: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/variables.scss';
.project {
  font-family: 'roboto mono', monospace;
  font-size: $font-sm;

  p {
    margin-bottom: 0;
    line-height: 1.42;
  }

  .text {
    margin: .24rem auto;
    padding: 0.3rem 1rem;
  }

  a img {
    vertical-align: bottom;
  }

  &.website {
    .project-image {
      display: block;
      border: 2px solid $color-browser;
      border-radius: 3px;
      border-top-width: .8rem;
      position: relative;

      a, img {
        width: 100%;
      }

      .buttons {
        position: absolute;
        top: -0.6rem;
        left: .2rem;
        right: .2rem;
        height: .6rem;
        display: flex;
        .close, .maximize {
          display: block;
          background: $color-red;
          border-radius: 50%;
          width: .4rem;
          height: .4rem;
          z-index: 1000;
          margin-right: .2rem;
          &:hover {
            cursor: pointer;
          }
        }
        .maximize {
          background: $color-green;
        }
      }
    }
    &.hidden {
      .project-image, .text {
        animation: hide .3s ease-out;
        animation-fill-mode: forwards;
      }
    }
  }
}
@keyframes hide {
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
}
.day {
  .project {
    &.website {
      .project-image {
        border-color: $color-browser-day;
      }
    }
  }
}
</style>
