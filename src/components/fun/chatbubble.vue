<template>
  <div class="chatbubble">
    <p class="chatbubble-text">{{ text }}</p>
    <svg
      aria-hidden="true"
      class="chatbubble-arrow"
      viewBox="0 0 39 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39 37.5C14 28.5 18.5 9 18.5 0L0 24.5C0.000244141 38.5 20 42 39 37.5Z"
        fill="currentColor"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.chatbubble {
  width: 12rem;
  background: var(--color-green);
  border-radius: var(--border-radius);
  padding: 0.6rem 0.8rem;
  position: relative;

  &-text {
    color: var(--color-black);
    font-size: var(--font-size-xs);
    font-family: sans-serif;
    line-height: 1.2;
    margin-bottom: 0;
  }
  &-arrow {
    color: var(--color-green);
    position: absolute;
    width: 0.8rem;
    right: -0.3rem;
    bottom: 0rem;
  }
}
</style>
