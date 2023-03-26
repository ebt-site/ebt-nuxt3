<template>
  <main>
    <ContentDoc >
      <template #not-found>
        <h1>Document not found</h1>
        <h3>{{message()}}</h3>
        <NuxtLink to="/">Home</NuxtLink>
      </template>
    </ContentDoc>
  </main>
</template>
<script setup>
  function message() {
    return window.location;
  }
</script>
