<template>
  <section id="dialogue" class="dialogue">
    <p>Kult at du ville stikke innom, forresten! Hvorfor kom du hit i dag?</p>
    <button @click="write(story.chapter1, 13)">Var bare nysgjerrig</button>
    <button @click="write(story.chapter2, 13)">Ser etter en designer</button>
    <button @click="write(story.chapter3, 13)">Trodde dette var en dagligvareforretning</button>
  </section>
</template>

<script>
export default {
  name: 'Dialogue',
  data: function() {
    return {
      story: {
        chapter1: {
          text: 'Noe spesielt du er nysgjerrig på, som du vil jeg skal vise deg?',
          button: "Livet"
        },
        chapter2: {
          text: "Kanskje jeg kan hjelpe deg? Hva trenger du en designer til?",
          button: "En nettside"
        },
        chapter3: {
          text: "Høhø :)",
          button: "click me too"
        }
      }
    }
  },
  methods: {
    write: function(chapter, speed) {
      var dialogue = document.getElementById('dialogue');
      var chapterParagraph = document.createElement('p');
      dialogue.appendChild(chapterParagraph);
      var letters = chapter.text.split('');
      var i = 0;
      var typing = setInterval(function() {
        chapterParagraph.innerHTML += letters[i];
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
  font-family: $monospace;
  font-size: 1rem;
  letter-spacing: inherit;
  text-align: left;
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
  color: $color-link-day;
}
</style>
