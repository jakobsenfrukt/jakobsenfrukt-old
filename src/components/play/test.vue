<template>
  <main>
    <section id="dialogue" class="dialogue">
      <div class="path">
        <p>Kult at du ville stikke innom, forresten! Hvorfor kom du hit i dag?</p>
        <div v-for="(path, index) in story.path0s" :key="path.id">
          <button class="input" @click="write(index, path.reply)" :class="path.selected ? 'selected' : ''">{{ path.input }}</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Dialogue',
  data: function() {
    return {
      story: {
        path0s: [
          {
            input: "Var bare nysgjerrig", 
            reply: 'Noe spesielt du er nysgjerrig på, som du vil jeg skal vise deg?',
            selected: false,
          },
          {
            input: "Ser etter en designer",
            reply: "Kanskje jeg kan hjelpe deg? Hva trenger du en designer til?",
            selected: false,
          },
          {
            input: "Trodde dette var en dagligvareforretning",
            reply: "Høhø :)",
            selected: false,
          },
        ]
      },
      storycode: "0",
    }
  },
  methods: {
    write: function(index, path) {
      var dialogue = document.getElementById('dialogue');
      var pathParagraph = document.createElement('p');
      dialogue.appendChild(pathParagraph);
      var letters = path.split('');
      var i = 0;
      var typing = setInterval(function() {
        pathParagraph.innerHTML += letters[i];
        i++;

        if (i === letters.length) {
          clearInterval(typing);
        }
      }, 20);

      this.storycode += index;
      this.story.path0s[index].selected = true;

      var buttons = document.querySelectorAll('.input');
      for (var button of buttons) {
        button.classList.add('disabled');
        button.disabled = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../css/variables.scss';
.dialogue {
  font-size: 1.46rem;
}
.path {
  margin-bottom: 3rem;
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
  cursor: pointer;

  &:focus {
    outline: none;
    padding-bottom: 0.1rem;
    margin-bottom: 0.1rem;
    border-bottom: 1px solid $color-green;

    &:before {
      content: "↝ ";
      top: -0.2em;
    }
  }

  &:before {
    content: "~ ";
    position: absolute;
    left: -1em;
  }

  &:hover {
    color: #fff6e8;

    &:before {
      content: "↝ ";
      top: -0.2em;
    }
  }

  &.disabled {
    cursor: default;
    animation: shrink .3s linear;
    animation-fill-mode: forwards;
  }
  &.selected {
    cursor: default;
    animation: none;
    &:before {
      content: "↝ ";
      top: -0.2em;
    }
    &:hover {
      color: $color-green;
    }
  }

  @keyframes shrink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 0;
    }
  }
}
.day button {
  color: $color-link-day;
}
</style>
