<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">New comment</h2>
      <form @submit.prevent="onSubmit" class="contact-form">
        <!-- message -->
        <AppMessage v-if="message" :message="message" />
        <!-- Name -->
        <AppInput v-model="comment.name">Name:</AppInput>
        <!-- text -->
        <AppTextArea v-model="comment.text">Text:</AppTextArea>
        <div class="controls">
          <!-- <button class="btn btnPrimary">Submit!</button> -->
          <AppButton btnClass="btnPrimary">Submit!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      comment: {
        name: "",
        text: ""
      },
      message: null
    };
  },
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("addComment", {
          postId: this.postId,
          publish: false,
          ...this.comment
        })
        .then(() => {
          this.message = "Submited";
        })
        .catch(err => console.log("err", err));
    }
  }
};
</script>

<style lang="scss">
.new-comment {
  text-align: center;
  background-color: #4f68f4;
  color: #fff;
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .title {
    color: #fff;
  }

  .controls {
    margin: 30px 0;
  }
}
</style>