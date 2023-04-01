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
        <NuxtLink to="/wiki/about">About</NuxtLink>
        <NuxtLink to="/font-test">Font Test</NuxtLink>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
  useHead({
    link: [{ rel: 'icon', type: 'image/png', href: 'favicon.png' }]
  })

  function onClick(evt) {
    console.log('pages/index.vue.onClick',  );
  }
</script>
