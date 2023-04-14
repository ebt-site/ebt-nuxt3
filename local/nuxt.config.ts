// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

import EbtCards from './.ebt-vue3-src/components/EbtCards.vue';
const routes = [
  { path: '/', component:EbtCards },
  { path: '/:context', component:EbtCards },
  { path: '/:context/:location(.*)*', component:EbtCards },
  { path: '/:bad_path(.*)*', component:NotFound },
];
//import * as VueRouter from "vue-router";
//const router = VueRouter.createRouter({
  //history: VueRouter.createWebHashHistory(),
  //routes, 
//})


export default defineNuxtConfig({
  // Github pages
  ssr: true,
  modules: [
    '@nuxt/content'
  ],
  app: {
    baseURL: '/ebt-nuxt3/',
  },

  // Router configuration
  router: {
    history: VueRouter.createWebHashHistory(),
    routes, 
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

