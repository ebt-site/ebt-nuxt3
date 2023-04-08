<template>
  <v-app >
    <v-main >
      <v-app-bar flat 
        :extension-height="collapsed ? 0 : 40"
        :collapse="collapsed"
        density="compact"
      >
        <v-app-bar-title>
          <div class="ebt-title">
            <div>EBT-Nuxt3</div>
          </div>
        </v-app-bar-title>
      </v-app-bar>
      <v-sheet>
        servers: {{settings.servers}}
        <NuxtPage />
      </v-sheet>
    </v-main>
  </v-app>
</template>
<script>
  //import EbtCards from './components/EbtCards.vue';
  //import EbtChips from './components/EbtChips.vue';
  //import Settings from './components/Settings.vue';
  //import EbtProcessing from './components/EbtProcessing.vue';
  import { useSettingsStore } from 'ebt-vue3';

  //import { useVolatileStore } from './stores/volatile.mjs';
  //import { useAudioStore } from './stores/audio.mjs';
  //import { logger } from "log-instance";
  //import { nextTick, ref } from "vue";

  export default {

    /*
    setup() {
      const tabs = ref([]);
      return {
        tabs,
      }
    },
    */
    data: ()=>({
      //audio: useAudioStore(),
      settings: useSettingsStore(),
      //volatile: useVolatileStore(),
      //unsubSettings: undefined,
      collapsed: false,
    }),
    /*
    components: {
      EbtCards,
      EbtChips,
      Settings,
      EbtProcessing,
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
    */
    async mounted() {
      let msg = 'App.mounted() ';
      let { $t, $vuetify, settings, $i18n, volatile } = this;
      console.log(msg, {$t});
      return; // TODO

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
    /*
    computed: {
      alertTitle(ctx) {
        let { $t } = ctx;
        let titleKey = ctx.volatile.alertMsg?.context || 'ebt.applicationError';
        return $t(titleKey);
      },
      alertMsg(ctx) {
        return ctx.volatile.alertMsg?.msg;
      },
      layout(ctx) {
        return ctx.volatile.layout.value;
      },
      narrowView(ctx) {
        let { layout } = ctx;
        return layout.w < 400;
      },
    },
    */
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
</style>

