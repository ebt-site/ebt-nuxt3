<template>
  <v-app >
    <v-main >
      <v-app-bar flat 
        :extension-height="collapsed ? 0 : 40"
        :collapse="collapsed"
        density="compact"
      >
        <template v-if="collapsed">
          <v-btn icon @click="collapsed=false" class="pr-5">
            <v-icon icon="mdi-arrow-expand-left" />
          </v-btn>
        </template> <!-- collapsed -->
        <template v-if="!collapsed">
          <v-app-bar-title @click="collapsed=true" > 
            <div class="ebt-title">
              <img src="/img/jan-kopriva-7BootnN3-0I-unsplash.jpg"
                class="ebt-nav-img"
              />
              <div>EBT-Nuxt3</div>
            </div>
          </v-app-bar-title>
          <v-btn @click="layout='default'" class="pr-5" title="Default Layout">
            1
          </v-btn>
          <v-btn @click="layout='debug'" class="pr-5" title="Debug Layout">
            2
          </v-btn>
          
          <v-menu location="left" attach v-if="narrowView">
            <template v-slot:activator="{ props }">
              <div class="app-menu-activator">
                <v-btn v-bind="props" icon>
                  <v-icon icon="mdi-menu" />
                </v-btn>
              </div>
            </template>
            <v-sheet class="app-menu-items">
              <v-btn icon href="#/search" >
                <v-icon icon="mdi-magnify"/>
              </v-btn>
              <v-btn icon @click.stop="onClickSettings">
                <v-icon icon="mdi-cog"/>
              </v-btn>
            </v-sheet>
          </v-menu>
          <div v-if="!narrowView" class="pr-3">
            <v-btn icon href="#/search" >
              <v-icon icon="mdi-magnify"/>
            </v-btn>
            <v-btn id='btn-settings' icon @click="onClickSettings">
              <v-icon icon="mdi-cog"/>
            </v-btn>
          </div>
        </template>
        <template v-if="!collapsed" v-slot:extension>
          <EbtChips />
        </template> <!-- !collapsed -->
      </v-app-bar>
      <v-sheet>
        <div>
          <!--ebt-processing /-->
          <Settings />
          <EbtCards v-if="settings?.cards?.length">
            <template v-slot:home>
              Hello Home
              <NuxtPage />
            </template>
          </EbtCards>
          <!--router-view /-->
        </div>
      </v-sheet>
      <v-sheet class="test-app">
        <div class="text-h6">FILE: app.vue (NuxtPage)</div>
        <NuxtLayout :name="layout">
          <div class="test-nuxt-page">
            <NuxtPage />
          </div>
        </NuxtLayout>
      </v-sheet>
    </v-main>
  </v-app>
</template>
<script>
  import Settings from './.ebt-vue3-src/components/Settings.vue';
  import EbtCards from './.ebt-vue3-src/components/EbtCards.vue';
  import EbtChips from './.ebt-vue3-src/components/EbtChips.vue';
  //import EbtProcessing from './components/EbtProcessing.vue';
  import { 
    //useSettingsStore,
    //useAudioStore,
    //useVolatileStore,
  } from 'ebt-vue3'; // doesn't work: nitro errors
  import { 
    useAudioStore,
    useSettingsStore,
    useVolatileStore,
  } from './.ebt-vue3-src/index.mjs'; // symbolic link to node_modules

  import { logger } from "log-instance";
  import { nextTick, ref } from "vue";

  export default {

    setup() {
      const tabs = ref([]);
      return {
        tabs,
      }
    },
    data: ()=>({
      audio: useAudioStore(),
      settings: useSettingsStore(),
      volatile: useVolatileStore(),
      unsubSettings: undefined,
      collapsed: false,
      layout: 'debug',
    }),
    components: {
      EbtCards,
      EbtChips,
      Settings,
      //EbtProcessing,
    },
    methods: {
      onHome(evt) {
        let msg = 'App.onHome() ';
        let { volatile, audio } = this;
        audio.playBlock();
        volatile.ebtChips && volatile.ebtChips.focus();
        logger.debug(msg);
      },
      allowLocalStorage() {
        let { settings } = this;
        settings.saveSettings();
        logger.debug("allowLocalStorage()", settings);
      },
      onClickGdrp(evt) {
        let { audio, settings } = this;
        logger.debug('onClickGdrp', evt);
        settings.showGdpr = false;
        evt.preventDefault();
      },
      onClickSettings(evt) {
        const msg = 'App.onClickSettings() ';
        let { volatile, audio } = this;
        let btn = document.getElementById('btn-settings');
        btn && btn.blur();
        volatile.showSettings = true;
        nextTick(()=>{
          let autofocus = document.getElementById('settings-autofocus');
          autofocus && autofocus.focus();
        });
      },
    },
    async mounted() {
      let msg = 'App.mounted() ';
      let { $t, $vuetify, settings, $i18n, volatile } = this;

      volatile.$t = $t;

      // wait for Settings to load
      settings.loaded = settings.loadSettings();
      await settings.loaded;

      logger.info(msg);
      $vuetify.theme.global.name = settings.theme === 'dark' ? 'dark' : 'light';;
      $i18n.locale = settings.locale;
      this.unsubSettings = settings.$subscribe((mutation, state) => {
        $vuetify.theme.global.name = settings.theme === 'dark' ? 'dark' : 'light';;
        logger.debug("App.mounted() settings.subscribe()", 
          {mutation, state, settings});
        settings.saveSettings();
        $i18n.locale = settings.locale;
      });
      window.addEventListener('keydown', evt=>{
        let msg = `App.mounted().keydown:${evt.code}`;
        let { audio } = this;
        switch (evt.code) {
          case 'Home': this.onHome(evt); break;
          //default: console.log(msg, evt); break;
        }
      })
      window.addEventListener('focusin', evt=>{
        let msg = 'App.mounted().focusin';
        let { audio } = this;
        if (evt.target.id === 'ebt-chips') {
          audio.playBlock();
        } else {
          audio.playClick();
        }
      });
    },
    computed: {
    /*
      alertTitle(ctx) {
        let { $t } = ctx;
        let titleKey = ctx.volatile.alertMsg?.context || 'ebt.applicationError';
        return $t(titleKey);
      },
      alertMsg(ctx) {
        return ctx.volatile.alertMsg?.msg;
      },
    */
      displayBox(ctx) {
        return ctx.volatile.displayBox.value;
      },
      narrowView(ctx) {
        if (globalThis.window == null) {
          return false;
        }
        let { displayBox } = ctx;
        return displayBox.w < 400;
      },
    },
  }
</script>
<style>
.gdrp {
  position: fixed;
  color: rgb(var(--v-theme-chip));
  bottom: 0;
  right: 0;
  opacity: 1;
  padding: 2pt;
  border-top: 1pt solid rgb(var(--v-theme-chip));
  border-left: 1pt solid rgb(var(--v-theme-chip));
  border-radius: 3pt;
}
.v-toolbar-title {
  margin-left: 0px;
  min-width: 10em;
}
.v-toolbar--collapse {
  width: 50px !important;
  left: unset !important;
  right: 0px;
  border: 1pt solid rgba(var(--v-theme-toolbar), 0.5);
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 24px;
}
.ebt-nav-img {
  display: relative;
  height: 35px;
  cursor: pointer;
  margin-right: 5px;
  border: 1pt solid rgb(0,0,0);
  border-radius: 5px;
}
.ebt-title {
  display: flex;
  align-items: center;
}
.ebt-title:focus-within a {
  border: none !important;
  outline: none;
}
.ebt-title:focus-within img {
  font-size: 1.5rem !important;
  border: 1pt dashed rgb(var(--v-theme-chip));
}
.v-app-bar.v-toolbar {
  background: linear-gradient(130deg, #000, rgb(var(--v-theme-toolbar)));
}
.app-menu-activator {
  padding-right: 10px;
}
.app-menu-items {
  display: flex;
  height: 50px !important;
  flex-flow: row nowrap ;
  border: 1px solid rgb(var(--v-theme-on-surface));
  border-radius: 10px !important;
  border-top-right-radius: 0px !important;
  background: rgba(var(--v-theme-surface), 0.5);
}
.alert-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: larger;
  font-variant-caps: all-small-caps;
  font-weight: 600;
  border-bottom: 1pt solid rgba(var(--v-theme-on-surface), 0.5);
}
.alert-msg {
  margin-top: 1em;
  min-height: 40px;
  max-width: 300px;
  text-overflow: '';
}
.test-app {
  border: 2px solid yellow;
  padding: 2pt;
}
.test-nuxt-page {
  border: 2px dashed yellow;
  padding: 2pt;
}
</style>

