module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'pescary.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fredoka+One|Gloria+Hallelujah|Montserrat|Righteous|Poiret+One&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Baloo+Chettan&display=swap" rel="stylesheet' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet'},
      { rel: 'stylesheet', href: 'http://allfont.ru/allfont.css?fonts=olgactt'}
    ]
  },

  /* CSS section */
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    purgeCSSInDev: false,
    exposeConfig: false
  },
  purgeCSS: {
    whitelist: ['css-selector-to-whitelist'],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/static/fonts/CoreRhino/CoreRhino.css'
  ],
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Build configuration
  */
  server: {
    port: 8080, // default: 3000
    host: '127.0.0.1', // default: localhost,
    timing: false
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

