<template>
  <section class="auth">
    <div class="container">
      <div class="auth__form">
        <form @submit.prevent="onSubmit" class="auth__form">
          <AppInput type="email" v-model="user.email">Login</AppInput>
          <AppInput type="password" v-model="user.password">Password</AppInput>
          <div class="controls">
            <AppButton>Login!</AppButton>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("authUser", this.user)
      .then(res => {
        this.$router.push('/admin')
      })
      .catch(e=>{console.log('err', err)})
    }
  }
};
</script>

<style lang="scss">
.auth {
  // max-width: 400px;
  text-align: center;
}

.auth__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh;
}
</style>