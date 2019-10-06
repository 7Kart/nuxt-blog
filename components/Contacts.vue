<template>
  <section class="contacts">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <form @submit.prevent="onSubmit" class="contact-form">
        <!-- message -->
        <AppMessage v-if="message" :message="message" />                
        <!-- name -->
        <AppInput v-model="user.name"> Name: </AppInput>
        <!-- mail -->
        <AppInput v-model="user.mail"> Email </AppInput>
        <!-- text -->
        <AppTextArea v-model="user.text"></AppTextArea>

        <div class="controls">
          <AppButton btnClass="btnWhite">Submit!</AppButton>
        </div>
        
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        mail: "",
        text: ""
      },
      message: null,
    };
  },
  methods: {
    onSubmit() {
      this.message = "Submited";
      console.log("user model", this.user);
    }
  }
};
</script>

<style lang="scss">
.contacts {
  text-align: center;
  background-color: #4f68f4;
  color: #fff;
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .title{
    color: #fff;
  }

  .controls {
    margin: 30px 0;
  }
}
</style>