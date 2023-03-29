// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Github pages
  ssr: true,
  modules: ['@nuxt/content'],
  app: {
    baseURL: '/ebt-nuxt3/',
  },

  // Vuetify configuration
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    'vuetify/lib/styles/main.sass'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

})
