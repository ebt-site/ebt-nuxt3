<template>
  <v-card >
    <v-card-title>
      FILE: pages/font-test.vue
      <NuxtLink to="/">
        <v-icon icon="mdi-home" />
      </NuxtLink>
    </v-card-title>
    <v-card-text>
      <div style="display: flex; flex-flow: column">
        <h3>Supported fonts</h3>
        <div :innerHTML="fontText('Noto Sans')" />
        <div :innerHTML="fontText('Noto Serif')" />
        <div :innerHTML="fontText('Source Sans Pro')" />
        <div :innerHTML="fontText('Source Serif Pro')" />

        <h3>Unsupported fonts</h3>
        <div :innerHTML="fontText('unsupported')" />
        <div :innerHTML="fontText('Skolar PE')" />
        <div :innerHTML="fontText('Skolar Sans')" />
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
  function fontText(font) {
    return `
    <div style='font-family:${font}'>
      <i>${font}: </i>
      Appam pi ce saṃhitaṃ bhāsamāno dhammassa hoti 
      anudhammacārī, rāgañ ca dosañ ca pahāya mohaṃ 
      sammāppajāno suvimuttacitto, anupādiyāno idha 
      vā huraṃ vā sa bhāgavā sāmaññassa hoti.
    </div>
    `
  }
</script>
