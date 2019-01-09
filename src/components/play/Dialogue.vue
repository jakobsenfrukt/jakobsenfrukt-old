<template>
  <div id="dialogue" class="dialogue">
    <button @click="write(story.chapter1, 13)">Hvem er "vi"?</button>
    <button @click="write(story.chapter2, 60)">Blablabla</button>
  </div>
</template>

<script>
export default {
  name: 'Dialogue',
  data: function() {
    return {
      story: {
        chapter1: {
          text: '"Vi" er egentlig bare poteten <a href="https://elisejakob.no">Elise</a>. Hun jobbet tidligere i digitalbyrået <a href="https://netlife.com">Netlife</a>, men høsten 2018 bestemte hun seg for å satse fullt og helt på å drive eget studio.',
          button: "click me"
        },
        chapter2: {
          text: "this is chapter 2",
          button: "click me too"
        }
      }
    }
  },
  methods: {
    write: function(chapter, speed) {
      var letters = chapter.text.split('');
      var i = 0;
      var typing = setInterval(function() {
        document.getElementById('dialogue').innerHTML += letters[i];
        i++;

        if (i === letters.length) {
          clearInterval(typing);
        }
      }, speed);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../css/variables.scss';
.dialogue {
  font-size: 1.46rem;
}
button {
  display: block;
  margin-bottom: 0.6em;
  font-family: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  border: none;
  transition: all 0.13s ease-in-out;
  padding: 0;
  margin: 0 0 0.3rem 1em;

  background: transparent;
  color: $color-green;

  position: relative;

  &:before {
    content: "~ ";
    position: absolute;
    left: -1em;
  }

  &:hover {
    color: #fff6e8;
    cursor: pointer;

    &:before {
      content: "↝ ";
      top: -0.2em;
    }
  }
}
.day button {
  color: $color-red;
}
</style>
