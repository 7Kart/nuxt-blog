<template>
  <newPostForm :editPost="post" @submit="onSubmit" />
</template>

<script>
import newPostForm from "@/components/Admin/NewPostForm";
import axios from "axios";

export default {
  components: { newPostForm },
  layout: "admin",
  asyncData(context) {
    return axios.get(`https://fbtest-228.firebaseio.com/posts/${context.params.postId}.json`)
      .then((res)=>{
        return{
          post:{...res.data, id:context.params.postId}
        }
      })
      .catch(err=>{
        context.error(err);
      })   
  },
  methods: {
    onSubmit(post) {     
      this.$store.dispatch("editPost", post)
        .then(()=>{
          this.$router.push('/admin');
        })
    }
  }
};
</script>