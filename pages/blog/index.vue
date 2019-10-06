<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="my last posts" />
    <PostsList :posts="postLoaded" />
  </div>
</template>

<script>
export default {
  computed: {
    postLoaded() {      
      return this.$store.getters.getPostsLoaded;
    }
  },
};
</script>

 