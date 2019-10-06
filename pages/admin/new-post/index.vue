<template>
  <newPostForm @submit="onSubmit" />
</template>

<script>
import newPostForm from "@/components/Admin/NewPostForm";

export default {
  components: { newPostForm },
  layout: "admin",
  methods: {
    onSubmit(post) {     
        this.$store.dispatch('addPost', post)
          .then((result) => {
            this.$router.push('/admin')
          }).catch((err) => {
            console.log('query error');            
          }); 
    }
  }
};
</script>