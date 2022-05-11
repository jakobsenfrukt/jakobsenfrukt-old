<template>
  <section class="teaser">
    <div class="teaser-message">
      <strong>Hei du!</strong><br />
      Ny nettside er under arbeid! I mellomtiden kan du besøke
      <a href="https://instagram.com/jakobsenfrukt" target="_blank"
        >Instagram</a
      >
      for å se de siste prosjektene.
    </div>
    <img src="/assets/images/teaser/teaser-1200.png" />
  </section>
</template>

<script>
import Chatbubble from "@/components/fun/chatbubble";

export default {
  components: {
    Chatbubble,
  },
};
</script>

<style lang="scss" scoped>
.teaser-message {
  display: block;
  background: var(--color-green);
  color: var(--color-black);
  padding: calc(var(--spacing-sitepadding) * 0.3)
    calc(var(--spacing-sitepadding) * 0.4)
    calc(var(--spacing-sitepadding) * 0.5);
  border-radius: var(--border-radius);
  max-width: 40rem;
  margin: 0 auto calc(var(--spacing-sitepadding) * 0.6);

  a {
    color: var(--color-inherit);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
}
img {
  display: block;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
