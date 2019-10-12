import axios from 'axios';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Montserrat" }

    ]
  },
  /*
  ** Customize the progress-bar color
  */
 transition:{
   name: 'fade',
   mode: 'out-in'
 },
  loading: { color: '#fff' },
  generate: {
    routes() {
      return axios.get('https://fbtest-228.firebaseio.com/posts.json')
        .then((res) => {
          const postsArray = [];
          for (let key in res.data) {
            postsArray.push(`/blog/${key}`);
          }
          return postsArray;
        }).catch(err => {
          console.log("error query", err)
        })
    }
  },
  /*
  ** Global CSS
  */
  css: [{
    src: '~/assets/scss/main',
    lang: 'scss'
  }],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/app-components.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'key'
    }],
    ['@nuxtjs/yandex-metrika', {
      id: ''
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: [
      'vue',
      'axios'
    ],

    extend(config, ctx) {
    }
  }
}
