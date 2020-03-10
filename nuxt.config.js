
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Boulder Crowdfunding',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: "https://cdn.colorado.edu/static/brand-assets/live/js/brand-bar.js" },
      { src: "https://cdn.colorado.edu/static/brand-assets/live/js/footer.js" },
      { src: '/cf-global.js'},
      { src: 'https://code.jquery.com/jquery-3.4.1.min.js' } //using jQuery for the crowdfunding things
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/cf-style.css', body: true}, //Override the styles
      { rel: 'stylesheet', href: '/branding.css', body: true},  //offical style guide
      { rel: 'stylesheet', href: '/ucb-styles.css', body: true}, // offical style guide
      { rel: 'stylesheet', href: '/grid.css', body: true}, // offical style guide
      { rel: 'stylesheet', href: 'https://cdn.colorado.edu/static/brand-assets/live/css/brand-bar.css', body: true}
    ]
  },
  loading: { color: '#fff' },
  css: [], 
  plugins: [],
  modules: [
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome'
  ],
  fontawesome:{
    imports:[
      {set: '@fortawesome/free-solid-svg-icons', icons: ['faUsers', 'faGraduationCap', 'faChartLine', 'faBars', 'faHome']}
    ]
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
