<template>
  <main class="blog">
    <Post 
      v-for="post in posts" 
      :key="post.id"
      :title="post.title"
      :lead="post.lead"
      :body="post.body"
      :link="post.link"
      :id="post.id"
    />
  </main>
</template>

<script>
import posts from '@/data/blog.json'
import Post from '@/components/Post.vue'

export default {
  name: 'all',
  components: {
    Post
  },
  data: function() {
    return {
      posts
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/variables.scss';
.blog {
  @include fadeAnimation;

  position: relative;

  p {
    font-size: 1.2rem;
  }
}
</style>
