<template>
  <div id="dialogue">
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

</style>
