<template>
  <v-card color="red-lighten-4" height="20em" >
    <v-card-title>
      pages/index.vue title
    </v-card-title>
    <v-card-text>
      <div style="display: flex; flex-flow: column">
        <v-btn @click="onClick">
          Hello
        </v-btn>
        <NuxtLink to="/wiki/about">About</NuxtLink>
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
