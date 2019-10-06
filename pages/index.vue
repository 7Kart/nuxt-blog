<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <Intro title="my last posts!!" />
    <PostsList :posts="postLoaded" />
    <contacts />
  </div>
</template>

<script>
import promo from "@/components/Promo.vue";
import contacts from "@/components/Contacts";

export default {
  components: {
    promo,
    contacts
  },
  head() {
    let title = "My SSR blog",
      descr = "My SSR blog",
      type = "site"
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

 