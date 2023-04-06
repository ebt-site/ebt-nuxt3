// plugins/vuetify.js

//import { createApp, ref } from 'vue'
//import App from './App.vue'
//import { createPinia } from 'pinia'
//import { logger } from 'log-instance';
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
import colors from 'vuetify/lib/util/colors'
const COLOR_SAFFRON = "#ff9933";
const vuetifyOpts = {
  ssr: true,
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          background: colors.grey.lighten1,
          surface:"#f0f0f0",
          currentbg: "#ffffff",
          chip: colors.brown.darken2,
          link: colors.brown.darken2,
          toolbar: colors.brown.darken2,
          matched: "#bf235d",
          placeholder: "#600060",
          debug: "#00FFFF",
          expansion: colors.grey.lighten4,
          progress1: COLOR_SAFFRON,
          progress2: "#333333",
          audiobar: colors.brown.darken4,
          example: COLOR_SAFFRON,
          focus: COLOR_SAFFRON,
          alert: colors.red.darken4,
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#121212",
          currentbg: "#000000",
          surface: "#222222",
          chip: COLOR_SAFFRON,
          link: COLOR_SAFFRON,
          matched: COLOR_SAFFRON,
          toolbar: colors.brown.darken2,
          placeholder: "#00FFFF",
          debug: "#00FFFF",
          expansion: colors.grey.darken2,
          progress1: COLOR_SAFFRON,
          progress2: "#ffffff",
          audiobar: colors.brown.darken4,
          example: COLOR_SAFFRON,
          focus: COLOR_SAFFRON,
          alert: colors.red.darken4,
        },
      },
    },
  },
};
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
vuetifyOpts.adapter = createVueI18nAdapter({ i18n, useI18n });

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify(vuetifyOpts);

  nuxtApp.vueApp.use(vuetify)
})

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