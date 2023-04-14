<template>
  <v-card class="test-wiki-view">
    <v-card-title>
      FILE: pages/wiki/index.vue (WikiView)
    </v-card-title>
    <v-card-text>
      <div class="text-h6">vTest i18n</div>
      <v-radio-group v-model="$i18n.locale"
        inline>
        <v-radio label="English" value="en" />
        <v-radio label="Deutsch" value="de" />
      </v-radio-group>
      ebt.allowSettings: {{$t('ebt.allowSettings')}}
      <NuxtLink to="/wiki/about">About</NuxtLink>
      <NuxtLink to="/wiki/font-test">Font Test</NuxtLink>
    </v-card-text>
  </v-card>
</template>
<style>
.test-wiki-view {
  border: 3pt solid fuchsia;
  padding: 2pt;
  margin: 3pt;
}
</style>
