<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <AppInput v-model="post.title">Title:</AppInput>
        <AppInput v-model="post.description">Description:</AppInput>
        <AppInput v-model="post.img">Image link:</AppInput>
        <div class="markdown-block-container">
          <p>Content</p>
          <AppTextAreaResize v-model="post.content"></AppTextAreaResize>
          <VueMarkdown :source="post.content" class="result-mark-down"></VueMarkdown>
        </div>
        <div class="controls">
          <div class="btn btnDanger" @click="cancel">Cancel</div>
          <AppButton>Save</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    editPost: {
      type: Object
    }
  },
  data() {
    return {
      post: this.editPost
        ? this.editPost
        : {
            title: "",
            description: "",
            img: "",
            content: ""
          }
    };
  },
  methods: {
    cancel() {
      this.$router.push("/admin/");
    },
    onSubmit() {
      this.$emit("submit", this.post);
    }
  }
};
</script>

<style lang="scss" scoped>
.controls {
  text-align: center;
  margin: 20px 0;
}

.markdown-block-container {
  margin: 20px 0;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  min-height: 200px;
  justify-content: space-around;
  flex-wrap: wrap;

  p {
    text-align: center;
    width: 100%;
  }

  div {
    width: 45%;
    overflow: hidden;
    word-break: break-all;
    margin-bottom: 25px;
  }

  .result-mark-down{
    padding-top: 5px; 
  }
}
</style>