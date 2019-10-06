<template>
  <section class="post-list">
    <div class="container">
      <div class="posts__wrapper">
        <postPreview :admin="admin" v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </section>
</template>

<script>
// PostPreview
import postPreview from "@/components/blog/PostPreview";

export default {
  components: {
    postPreview
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.posts__wrapper {
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>