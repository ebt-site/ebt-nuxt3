// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { createResolver } from '@nuxt/kit'
import { default as EbtConfig } from './ebt-config.mjs'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  // Github pages
  ssr: false,
  modules: [
    '@nuxt/content'
  ],
  app: {
    baseURL: EbtConfig.baseUrl
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

  buildModules: [
    '@nuxtjs/google-fonts'
  ],
})

