<template>
  <v-card class="test-wiki-content">
    <v-card-title>
      FILE: pages/[...slug].vue
    </v-card-title>
    <v-card-text>
      <div class="text=h6">Wiki Home Page</div>
      <ol class="ml-5">
        <li><NuxtLink to="/wiki">Wiki Home</NuxtLink></li>
        <li><NuxtLink to="/wiki/about">About</NuxtLink></li>
        <li><NuxtLink to="/wiki/font-test">Font Test</NuxtLink></li>
      </ol>
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { default as EbtConfig } from '../ebt-config.mjs';

  useHead({
    link: [{ rel: 'icon', type: 'image/png', href: `${EbtConfig.baseUrl}favicon.png` }]
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
.test-wiki-content {
  border: 2pt dashed lime;
  border-radius: 5px;
  margin: 3pt;
  padding: 3px;
}
</style>
