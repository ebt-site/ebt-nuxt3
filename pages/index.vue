<template>
  <v-card height="20em" >
    <v-card-title>
      FILE: pages/index.vue
    </v-card-title>
    <v-card-text>
      <div style="display: flex; flex-flow: column">
        <v-btn @click="onClick">
          Hello
        </v-btn>
        <v-card class="test-i18n">
          <v-card-title>Test i18n</v-card-title>
          <v-card-text>
            <v-radio-group v-model="$i18n.locale"
              inline>
              <v-radio label="English" value="en" />
              <v-radio label="Deutsch" value="de" />
            </v-radio-group>
            ebt.allowSettings: {{$t('ebt.allowSettings')}}
          </v-card-text>
        </v-card>
        <NuxtLink to="/wiki/about">About</NuxtLink>
        <NuxtLink to="/font-test">Font Test</NuxtLink>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
  const deLocale = new Intl.Locale('de');
  const enLocale = new Intl.Locale('en');

  useHead({
    link: [{ rel: 'icon', type: 'image/png', href: 'favicon.png' }]
  })

  function xonClick(evt) {
    let { i18n } = this;
    console.log('pages/index.vue.onClick',  $i18n.availableLocales);
  }
</script>
<script>
  export default {
    methods: {
      onClick(evt) {
        let { $i18n } = this;
        console.log('pages/index.vue.onClick',  $i18n.availableLocales);
      }
    },
  }

</script>
<style scoped>
.test-i18n {
  border: 1pt solid aqua;
  border-radius: 5px;
  padding: 3px;
}
</style>
