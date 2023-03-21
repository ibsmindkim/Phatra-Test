export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Phatra - Test',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/faicon-logo.png' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons',
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css"
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/app.scss',
    '@/assets/css/navber.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    // 'nuxt-font-loader'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    'nuxt-clipboard2',
    'vue-sweetalert2/nuxt',
    'nuxt-i18n',
  ],

  i18n: {
    locales: [
      {
        code: 'th',
        iso: 'th-TH',
        file: 'th.json',
        name: 'ไทย'
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English'
      },

    ],
    langDir: '@/assets/lang/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        th: require('./assets/lang/th.json'),
        en: require('./assets/lang/en.json'),
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  sweetalert: {
    confirmButtonColor: 'linear-gradient(94deg, #f81fa6 0%, #ec3dee 49%, #b93ef9 81%)',
    cancelButtonColor: '#ff7674'
  },

  vuetify: {
    customVariables: ['~/assets/variables.css'],
    defaultAssets: {
      font: true,
      icons: 'mdi'
    },
    icons: {
      iconfont: 'mdi',
    }
    // icons: 'mdi',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
