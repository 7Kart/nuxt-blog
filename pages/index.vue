<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <Intro title="my last posts!!"/>
    <PostsList :posts="postLoaded"/>
    <contacts/>
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

  computed:{
    postLoaded(){
      console.log('store', this.$store.getters.getPostsLoaded);
      return this.$store.getters.getPostsLoaded
    }
  },
};
</script>

 