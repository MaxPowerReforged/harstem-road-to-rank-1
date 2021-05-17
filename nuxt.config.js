export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  router: {
    base: "/harstem-road-to-rank-1/"
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Harstem Stats Road to Rank 1",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: ["@/assets/global.css", "animate.css/animate.compat.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/composition-api",
    { src: "~/plugins/highcharts.client.js" },
    "~/plugins/youtubeService.ts"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/composition-api/module",
    "@nuxtjs/google-fonts",
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/cloudinary",
    "@nuxtjs/firebase",
    "@nuxtjs/svg"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  cloudinary: {
    cloudName: "dqrpm2gb0"
  },
  generate: {
    interval: 2000
  },
  transpile: [/@vue[\\/]composition-api/],

  googleFonts: {
    families: {
      "Source+Sans+Pro": true
    }
  },

  firebase: {
    config: {
      apiKey: "AIzaSyDhCqlVaZ7yb-C2oKnqPwLw9AuceOdGmh4",
      authDomain: "harstem-stats-scrapper.firebaseapp.com",
      projectId: "harstem-stats-scrapper",
      databaseURL: "https://harstem-stats-scrapper.firebaseio.com",
      storageBucket: "harstem-stats-scrapper.appspot.com",
      messagingSenderId: "825831833642",
      appId: "1:825831833642:web:5edd3f1f916941ad3e0353"
    },
    terminateDatabasesAfterGenerate: true,
    services: {
      database: true,
      firestore: true
    }
  },

  googleAnalytics: {
    id: 'UA-196512526-1',
    autoTracking: {
      screenview: true
    }
  }
};
