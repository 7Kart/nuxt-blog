<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo"><nuxt-link to="/">Blog</nuxt-link></div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <nuxt-link class="navbar-link" :to="link.url">{{link.title}}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data(){
    return {
      links:[{
        title:"Blog", url: "/blog"
      },{
        title:"About", url: "/about"
      }]
    }
  }
};
</script>

<style lang="scss">
  .navbar-link{
    &.nuxt-link-exact-active{
      color: #5247e7;
    }
  }
</style>