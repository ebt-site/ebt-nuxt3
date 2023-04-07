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
  Messages,
} from "ebt-vue3";
import colors from 'vuetify/lib/util/colors'
import cs from '~/src/i18n/cs.ts';
import da from '~/src/i18n/da.ts';
import de from '~/src/i18n/de.ts';
import en from '~/src/i18n/en.ts';
import fr from '~/src/i18n/fr.ts';
import hi from '~/src/i18n/hi.ts';
import is from '~/src/i18n/is.ts';
import ja from '~/src/i18n/ja.ts';
import nb from '~/src/i18n/nb.ts';
import nl from '~/src/i18n/nl.ts';
import pl from '~/src/i18n/pl.ts';
import pt from '~/src/i18n/pt.ts';
import ro from '~/src/i18n/ro.ts';
import si from '~/src/i18n/si.ts';
import vi from '~/src/i18n/vi.ts';

var vuetifyOpts;
var nuxtPlugin;

(async()=>{
  const COLOR_SAFFRON = "#ff9933";
  const messages = { 
    cs,
    da,
    de,
    en,
    fr,
    hi,
    is,
    ja,
    nb,
    nl,
    pl,
    pt,
    ro,
    si,
    vi,
  };

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
