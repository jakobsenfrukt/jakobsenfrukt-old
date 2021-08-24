<template>
  <div :ref="id" />
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data(){
    return {
      isInView: false,
    }
  },
  watch: {
    isInView: function(value) {
      this.$emit('on-enter-viewport', value)
    },
  },
  mounted() {
    const item = this.$refs[this.id]
    const handler = (entries) => {
      if (entries[0].isIntersecting) {
        this.isInView = true
        observer.unobserve(item)
      } 
      else {
        this.isInView = false
      }
    }
    const observer = new window.IntersectionObserver(handler)
    observer.observe(item)
  },
}
</script>