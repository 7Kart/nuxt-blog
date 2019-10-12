<template>
  <client-only>
    <div class="wrapper">
      <Header />
      <div class="wrapper-content wrapper-content--fixed">
        <Intro title="Admin page">
          <nuxt-link to="/admin" class="link linkWhite">Admin</nuxt-link>
          <nuxt-link to="/admin/new-post" class="link linkWhite">New post</nuxt-link>
          <nuxt-link to="/admin/comments" class="link linkWhite">Comments</nuxt-link>
          <span @click="logoutUser" class="link linkWhite">Logout</span>
        </Intro>
        <nuxt />
      </div>
    </div>
  </client-only>
</template>

<script>
import Header from "~/components/system/Header";

export default {
  components: {
    Header
  },
  middleware: ["authCheck", "auth"],
  methods: {
    logoutUser() {
      this.$store
        .dispatch("logoutUser")
        .then(res => {
          this.$router.push("/admin/auth");
        })
        .catch(e => {
          console.log("err", err);
        });
    }
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
