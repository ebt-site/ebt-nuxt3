<template>
  <v-card class="test-ebt-cards">
    <v-card-title>
      FILE: layouts/default.vue
      (EbtCards)
    </v-card-title>
    <v-card-text>
      <v-card class="test-sutta-view">
        <v-card-title>
          SuttaView
        </v-card-title>
        <v-card-text>
          A sutta
        </v-card-text>
      </v-card>
      <v-card class="test-wiki-view">
        <v-card-title>
          WikiView
        </v-card-title>
        <v-card-text>
          <ol class="ml-5">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/wiki">Wiki</NuxtLink></li>
            <li><NuxtLink to="/wiki/about">About</NuxtLink></li>
            <li><NuxtLink to="/wiki/font-test">Font Test</NuxtLink></li>
          </ol>
          <slot />
        </v-card-text>
      </v-card>
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
.test-ebt-cards {
  border: 2pt solid orange;
  margin: 3pt;
}
.test-sutta-view {
  border: 2pt dashed orange;
  border-radius: 5px;
  margin: 3pt;
  padding: 3px;
}
.test-wiki-view {
  border: 2pt dashed orange;
  border-radius: 5px;
  margin: 3pt;
  padding: 3px;
}
</style>
