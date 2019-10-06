<template>
  <PostsList :admin=true :posts="postLoaded" />
</template>

<script>
export default {
  layout: "admin",
  computed: {
    postLoaded() {      
      return this.$store.getters.getPostsLoaded;
    }
  },
};
</script>

 