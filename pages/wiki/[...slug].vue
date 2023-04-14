<template>
  <v-card>
    <v-card-title>
      FILE:pages/wiki/[...slug].vue
    </v-card-title>
    <v-card-text>
      <ContentDoc >
        <template #not-found>
          <h1>Document not found</h1>
          <h3>{{message()}}</h3>
          <ol class="ml-5">
            <li> <NuxtLink to="/">Home</NuxtLink> </li>
            <li> <NuxtLink to="/wiki">Wiki Home</NuxtLink> </li>
          </ol>
        </template>
      </ContentDoc>
    </v-card-text>
  </v-card>
</template>
<script setup>
  function message() {
    return global.window?.location;
  }
</script>
