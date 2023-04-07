// plugins/vuetify.js

//import { createApp, ref } from 'vue'
//import App from './App.vue'
//import { createPinia } from 'pinia'
import { logger } from 'log-instance';
//logger.logLevel = 'warn';

//const pinia = createPinia();

// Styles
import '@mdi/font/css/materialdesignicons.css'
import '~/assets/main.css'
//import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
//import * as components from 'vuetify/components'
import {  // Minor optimization decreases zip by ~80kB
  VAlert,
  VApp,
  VAppBar,
  VAppBarTitle,
  VAutocomplete,
  VBottomNavigation,
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VCardTitle,
  VCheckbox,
  VChip,
  VChipGroup,
  VCol,
  VContainer,
  VDialog,
  VDivider,
  VExpansionPanel,
  VExpansionPanels,
  VExpansionPanelText,
  VExpansionPanelTitle,
  VForm,
  VIcon,
  VMain,
  VProgressCircular,
  VProgressLinear,
  VRadio,
  VRadioGroup,
  VRow,
  VSelect,
  VSheet,
  VSlider,
  VSnackbar,
  VSpacer,
  VTextField,
  VToolbar,
  VToolbarTitle,

} from 'vuetify/components'
const components = {
  VAlert,
  VApp,
  VAppBar,
  VAppBarTitle,
  VAutocomplete,
  VBottomNavigation,
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VCardTitle,
  VCheckbox,
  VChip,
  VChipGroup,
  VCol,
  VContainer,
  VDialog,
  VDivider,
  VExpansionPanel,
  VExpansionPanels,
  VExpansionPanelText,
  VExpansionPanelTitle,
  VForm,
  VIcon,
  VMain,
  VProgressCircular,
  VProgressLinear,
  VRadio,
  VRadioGroup,
  VRow,
  VSelect,
  VSheet,
  VSlider,
  VSnackbar,
  VSpacer,
  VTextField,
  VToolbar,
  VToolbarTitle,

}
import * as directives from 'vuetify/directives'
import { createI18n, useI18n } from 'vue-i18n';
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n';
import {
  VuetifyOpts,
  messages,
} from "ebt-vue3";
import colors from 'vuetify/lib/util/colors'

var vuetifyOpts;
var nuxtPlugin;

(async()=>{
  const msg = "plugins.vuetify";
  const COLOR_SAFFRON = "#ff9933";

  const i18n = new createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages,
  });
  const adapter = createVueI18nAdapter({ i18n, useI18n });

  vuetifyOpts = VuetifyOpts.options();
  Object.assign(vuetifyOpts, {
    ssr: true,
    components,
    directives,
    adapter,
  });

  nuxtPlugin = (nuxtApp => {
    const msg = 'vuetify.defineNuxtPlugin() ';
    const vuetify = createVuetify(vuetifyOpts);
    const { vueApp } = nuxtApp;

    vueApp.use(i18n);
    vueApp.use(vuetify);
  })
})()

export default defineNuxtPlugin(nuxtPlugin);

// TODO

/*



// Vuetify
import { createVuetify, } from "vuetify"
const vuetify = createVuetify(vuetifyOpts);

import { loadFonts } from './plugins/webfontloader'
loadFonts()

import NotFound from './components/NotFound.vue';
import EbtCards from './components/EbtCards.vue';
const routes = [
  { path: '/', component:EbtCards },
  { path: '/:context', component:EbtCards },
  { path: '/:context/:location(.*)*', component:EbtCards },
  { path: '/:bad_path(.*)*', component:NotFound },
]
import * as VueRouter from "vue-router";
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, 
})

var app = createApp(App);
app.use(pinia);
app.use(i18n);
app.use(vuetify);
app.use(router);;
app.mount('#app');
*/
