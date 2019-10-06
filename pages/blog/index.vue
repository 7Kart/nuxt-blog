<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="my last posts" />
    <PostsList :posts="postLoaded" />
  </div>
</template>

<script>
export default {
  head() {
    let title = "My blog page",
      descr = "My SSR blog",
      type = "site";
    return {
      title: title,
      meta: [
        { hid: "og:title", name: "og:title", content: title },
        { hid: "description", name: "description", content: descr },
        { hid: "og:description", name: "og:description", content: descr },
        { hid: "og:type", name: "og:type", content: type }
      ]
    };
  },
  computed: {
    postLoaded() {
      return this.$store.getters.getPostsLoaded;
    }
  }
};
</script>

 