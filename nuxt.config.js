
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Boulder Crowdfunding' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: '/cf-global.js'},
      { src: 'https://code.jquery.com/jquery-3.4.1.min.js' } //using jQuery for the crowdfunding things
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/cf-style.css', body: true}, //Override the styles
    ]
  },
  loading: { color: '#fff' },
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['node_modules/ucb-ui-vue/src/nuxt-plugin.js'],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome'
  ],
  bootstrapVue:{
    //componentPlugins: ['ModalPlugin'],
    //bootstrapCSS: false,
    //bootstrapVueCSS: false
  },
  fontawesome:{
    imports:[
      {set: '@fortawesome/free-solid-svg-icons', icons: ['faUsers', 'faGraduationCap', 'faChartLine']}
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
