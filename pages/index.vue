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
        <div class="debug">
          <h3>Test i18n </h3>
            <v-radio-group v-model="$i18n.locale">
              <v-radio label="English" value="en" />
              <v-radio label="Deutsch" value="de" />
            </v-radio-group>
            <v-select v-model="$i18n.locale"
              :items="$i18n.availableLocales">
            </v-select>
          <ul>
          </ul>
          <li>ebt.allowSettings: {{$t('ebt.allowSettings')}}</li>
        </div>
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
