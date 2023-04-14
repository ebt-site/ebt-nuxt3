<template>
  <v-card class="font-class">
    <v-card-title>
      FILE: pages/wiki/font-test.vue
      <NuxtLink to="/">
        <v-icon icon="mdi-home" />
      </NuxtLink>
    </v-card-title>
    <v-card-text>
      <div style="display: flex; flex-flow: column">
        <div class="text-h5">Preferred  fonts</div>
        <div :innerHTML="fontText('Source Sans Pro')" />
        <div :innerHTML="fontText('Source Serif Pro')" />

        <div class="text-h5">Supported fonts</div>
        <div :innerHTML="fontText('Noto Sans')" />
        <div :innerHTML="fontText('Noto Serif')" />

        <div class="text-h5">Unsupported  fonts</div>
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
<style scoped>
.font-class {
  max-width: 40em;
}

</style>
